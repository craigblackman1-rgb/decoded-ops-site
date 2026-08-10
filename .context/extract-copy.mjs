#!/usr/bin/env node
/**
 * extract-copy.mjs — build a reviewable corpus of every visible string on the site,
 * then lint it against the mechanical rules in decoded-ops/references/voice.md.
 *
 * The point is that a content review of 76 pages is derived from source, not hand-typed.
 * Route coverage is proved by diffing the walked list against `git ls-files`.
 *
 *   node .context/extract-copy.mjs
 *
 * Writes .context/site-copy-corpus.md and .context/voice-lint.md
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();

/* ── which files carry copy ─────────────────────────────────────────────── */

const EXTRA_FILES = [
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/ProblemPageDS.tsx',
  'components/SectorPageDS.tsx',
  // ProblemPage.tsx and SectorPage.tsx removed 10 Aug (confirmed dead, zero imports).
  'components/LocationPage.tsx',
  'components/CookieConsent.tsx',
  'data/locations.ts',
  'data/problem-routing.ts',
  'data/sector-routing.ts',
];

// Routes deliberately left out of the marketing review, each with a reason.
// Anything not matched here MUST appear in the corpus, or the coverage check fails.
const EXCLUDED = [
  [/^app\/clients\//, 'authenticated client portal, not marketing copy'],
  [/^app\/api\//, 'API route, no rendered copy'],
];

function walkPages(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkPages(full, out);
    else if (entry === 'page.tsx') out.push(relative(ROOT, full).split(sep).join('/'));
  }
  return out;
}

/** app/foo/bar/page.tsx -> /foo/bar */
const routeOf = f => '/' + f.replace(/^app\//, '').replace(/\/?page\.tsx$/, '');

/* ── extraction ─────────────────────────────────────────────────────────── */

const ENTITIES = {
  '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”',
  '&mdash;': '—', '&ndash;': '–', '&middot;': '·', '&amp;': '&',
  '&apos;': "'", '&quot;': '"', '&nbsp;': ' ', '&times;': '×', '&pound;': '£',
  '&hellip;': '…', '&lt;': '<', '&gt;': '>',
};
const decode = s => s.replace(/&[a-z]+;/g, m => ENTITIES[m] ?? m);

// Props and object keys whose values are copy the visitor reads.
const COPY_KEYS = /\b(title|sub|subtitle|desc|description|label|name|alt|note|ctaLabel|lede|caption|heading|blurb|intro|summary|price|flag|kicker|eyebrow|question|answer|placeholder)\s*[:=]\s*(['"])((?:\\.|(?!\2)[^\\])*)\2/g;

/**
 * Blank a span without moving any other character: every non-newline becomes a space,
 * newlines survive. Offsets stay exact, so a line number is just a count of newlines
 * before the offset. That is what lets tags span lines safely, and the Plate SVGs wrap
 * their <text> tags across lines constantly.
 */
const blank = s => s.replace(/[^\n]/g, ' ');

/**
 * Blank {...} expression containers, quote-aware, so arrow fns and bindings vanish.
 * Depth resets at every newline: the component body is itself wrapped in braces, so
 * counting depth across the whole file would blank the entire page.
 */
function stripBraces(src) {
  const out = src.split('');
  let depth = 0, quote = null;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (c === '\n') { depth = 0; quote = null; continue; }
    if (quote) {
      if (c === quote && src[i - 1] !== '\\') quote = null;
      if (depth > 0) out[i] = ' ';
      continue;
    }
    if (depth > 0 && (c === '"' || c === "'" || c === '`')) { quote = c; out[i] = ' '; continue; }
    if (c === '{') { depth++; out[i] = ' '; continue; }
    if (c === '}') { if (depth > 0) { depth--; out[i] = ' '; } continue; }
    if (depth > 0) out[i] = ' ';
  }
  return out.join('');
}

/** Blank block comments, line comments, and JSON-LD schema literals. */
function stripNonCopy(src) {
  let s = src.replace(/\/\*[\s\S]*?\*\//g, blank);
  s = s.replace(/^[ \t]*\/\/.*$/gm, blank);
  // JSON-LD is structured data for crawlers, not copy the visitor reads.
  s = s.replace(/const \w*[Ss]chema\s*=\s*\{[\s\S]*?\n\};/g, blank);
  return s;
}

/** Looks like prose a visitor would read, rather than a code fragment. */
function isProse(t) {
  if (t.length < 12 || !/\s/.test(t)) return false;
  if (!/[a-z]{3}/.test(t)) return false;
  if (/^(import|export|const|return|function|className|style)\b/.test(t)) return false;
  if (/[{}=<>]|=>|\|\||&&|\$\{/.test(t)) return false;
  if (/^[\d\s.,%+\-/×]+$/.test(t)) return false;
  // Several pages ship a <style> block; CSS is not copy.
  if (/var\(--|color-mix\(|^\.[a-z-]+[\s.:]|@media\b/.test(t)) return false;
  if (/\b(font-size|line-height|letter-spacing|text-transform|border|padding|margin|background|display|flex-shrink|align-items|grid-template|box-shadow|text-decoration|transition)\s*:/.test(t)) return false;
  return true;
}

function extract(file) {
  const src = readFileSync(join(ROOT, file), 'utf8');
  const found = [];
  const seen = new Set();
  const push = (line, text) => {
    const t = decode(text).replace(/\s+/g, ' ').trim();
    if (!isProse(t) || seen.has(t)) return;
    seen.add(t);
    found.push({ line, text: t });
  };

  // Every transform below preserves string length, so a character offset is always
  // valid against the original source and line numbers stay honest.
  const lineAt = off => src.slice(0, off).split('\n').length;
  const clean = stripNonCopy(src);

  // 1 · copy-bearing props and object keys: Plate title/sub, nav labels, card desc.
  for (const m of clean.matchAll(COPY_KEYS)) push(lineAt(m.index), m[3]);

  // 2 · rendered text nodes, including <text> inside the Plate SVGs. Those tags wrap
  //     over several lines, so pull each tag onto one line first (newline -> space,
  //     same length), then blank tags and brace expressions.
  const joined = clean.replace(/<\/?[A-Za-z][^<>]*?>/gs, m => m.replace(/\n/g, ' '));
  const bare = stripBraces(joined).replace(/<\/?[A-Za-z][^<>]*?>/g, blank);

  // Merge adjacent copy lines into paragraphs. A line still carrying code characters
  // is a partial expression, so drop it rather than let it poison the paragraph.
  let off = 0, buf = null;
  const flush = () => { if (buf) push(buf.line, buf.parts.join(' ')); buf = null; };
  for (const raw of bare.split('\n')) {
    const t = raw.trim();
    if (t && !/[{}=<>]|=>|\|\||&&/.test(t)) {
      if (buf) buf.parts.push(t);
      else buf = { line: lineAt(off), parts: [t] };
    } else flush();
    off += raw.length + 1;
  }
  flush();

  found.sort((a, b) => a.line - b.line);
  return found;
}

/* ── the lint: mechanical voice.md rules only ───────────────────────────── */

const BANNED = ['leverage', 'synergy', 'holistic', 'end-to-end', 'end to end', 'seamless',
  'unlock', 'pain point', 'moving the needle', 'best-in-class', 'best practice',
  'circle back', 'reach out', 'game-changer', 'game changer', 'delve', 'robust',
  'crucial', 'powerful', 'deep dive', 'cutting-edge', 'world-class'];
const AI_TELLS = [/here'?s the thing/i, /here'?s why this matters/i, /the truth is\b/i,
  /that said,/i, /^ultimately,/i, /at the end of the day/i, /it'?s worth noting/i];

const RULES = [
  { id: 'em-dash', desc: 'Em dash (banned outright by voice.md)', test: t => /—/.test(t) },
  // The apostrophe must NOT be optional here: `we'?re` also matches "were".
  { id: 'first-person-plural', desc: 'we/our/us, must be first person singular', test: t => /\b(we|we['’](?:re|ve|ll|d)|our|ours|us)\b/i.test(t) },
  { id: 'banned-phrase', desc: 'Consultant-speak or buzzword from the banned list', test: t => BANNED.some(b => new RegExp(`\\b${b.replace(/[-\s]/g, '[-\\s]')}\\b`, 'i').test(t)) },
  { id: 'not-x-but-y', desc: '"not X, but Y" parallelism', test: t => /\bnot\b[^.;!?]{2,50},\s*but\b/i.test(t) },
  { id: 'ai-setup-phrase', desc: 'AI setup phrase or filler transition', test: t => AI_TELLS.some(r => r.test(t)) },
  // "always"/"never" are usually literally true on this site ("the jobs your ERP was
  // never going to do"), so only the superlative forms are treated as violations.
  // Bare always/never is counted below as advisory instead.
  { id: 'overclaim', desc: 'Superlative overclaim, only allowed if literally true', test: t => /\b(the biggest|every single|the most \w+ in the (sector|market|industry)|world.class|the only)\b/i.test(t) },
];

// Counted, not flagged: the "X, not Y" inversion is all over the site as a house style.
// Volume is the judgement call, so report a count per page instead of 200 lines of noise.
const INVERSION = /,\s*not\s+[a-z]/gi;

/* ── run ────────────────────────────────────────────────────────────────── */

const pages = walkPages(join(ROOT, 'app'))
  .filter(f => !EXCLUDED.some(([re]) => re.test(f)))
  .sort();
const files = [...pages, ...EXTRA_FILES];

const corpus = files.map(f => ({
  file: f,
  route: f.startsWith('app/') ? routeOf(f) : null,
  items: extract(f),
}));

/* coverage: derived from git, never hand-typed */
const tracked = execSync('git ls-files "app/**/page.tsx" "app/page.tsx"', { encoding: 'utf8' })
  .split('\n').map(s => s.trim()).filter(Boolean);
const excludedTracked = tracked.filter(f => EXCLUDED.some(([re]) => re.test(f)));
const missing = tracked.filter(f => !EXCLUDED.some(([re]) => re.test(f)) && !pages.includes(f));

let sitemapRoutes = [];
try {
  sitemapRoutes = [...readFileSync(join(ROOT, 'app/sitemap.ts'), 'utf8')
    .matchAll(/['"`](\/[a-z0-9\-/[\]]*)['"`]/gi)].map(m => m[1]);
} catch { /* sitemap optional */ }
const sitemapOnly = [...new Set(sitemapRoutes)]
  .filter(r => !corpus.some(c => c.route === r || c.route === r.replace(/\/$/, '')));

/* ── corpus output ──────────────────────────────────────────────────────── */

const totalWords = corpus.reduce((n, p) => n + p.items.reduce((m, i) => m + i.text.split(/\s+/).length, 0), 0);
const head = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();

let out = `# Site copy corpus — staging branch

Generated by \`.context/extract-copy.mjs\` from commit \`${head}\`.
Every visible string on the marketing site, in route order, with source line numbers.

- **${pages.length} routes** walked, plus ${EXTRA_FILES.length} shared copy-bearing files
- **${corpus.reduce((n, p) => n + p.items.length, 0)} strings**, ~${totalWords.toLocaleString()} words

## Coverage check (derived, not asserted)

- \`git ls-files\` tracks **${tracked.length}** page files
- Excluded by rule: **${excludedTracked.length}** (${EXCLUDED.map(([, why]) => why).join('; ')})
- Walked and extracted: **${pages.length}**
- **Unaccounted for: ${missing.length}**${missing.length ? ' — ' + missing.join(', ') : ' OK'}
${sitemapOnly.length ? `- In \`sitemap.ts\` but no page file found: ${sitemapOnly.join(', ')}` : ''}

---
`;

for (const p of corpus) {
  out += `\n## ${p.route ?? p.file}\n\n\`${p.file}\`${p.items.length ? '' : ' — no extractable copy'}\n\n`;
  for (const it of p.items) out += `- \`:${it.line}\` ${it.text}\n`;
}
writeFileSync(join(ROOT, '.context/site-copy-corpus.md'), out);

/* ── lint output ────────────────────────────────────────────────────────── */

const hits = [];
const inversions = [];
for (const p of corpus) {
  let inv = 0;
  for (const it of p.items) {
    inv += (it.text.match(INVERSION) ?? []).length;
    for (const r of RULES) if (r.test(it.text)) hits.push({ ...it, file: p.file, rule: r });
  }
  if (inv) inversions.push({ route: p.route ?? p.file, count: inv });
}

let lint = `# Voice lint — staging branch

Mechanical rules from \`decoded-ops/references/voice.md\` only. Judgement calls live in the review doc.
Generated from commit \`${head}\`.

**${hits.length} flags across ${new Set(hits.map(h => h.file)).size} files.**

| Rule | Flags |
|---|---|
${RULES.map(r => `| ${r.id} — ${r.desc} | ${hits.filter(h => h.rule.id === r.id).length} |`).join('\n')}

> \`first-person-plural\` will flag deliberate client-voice lines: the nav writes each problem
> as the owner would say it out loud ("We're on the wrong software"). Those are correct.
> Triage this rule, do not bulk-fix it.

---
`;

for (const r of RULES) {
  const rows = hits.filter(h => h.rule.id === r.id);
  lint += `\n## ${r.id} — ${rows.length}\n\n${r.desc}\n\n`;
  if (!rows.length) { lint += '_Clean._\n'; continue; }
  for (const h of rows) lint += `- \`${h.file}:${h.line}\` ${h.text}\n`;
}

lint += `\n---\n\n## "X, not Y" inversion count (reported, not flagged)\n
The site leans on this construction heavily as a house style. Not a violation on its own.
The question is whether any single page overuses it.\n\n| Page | Count |\n|---|---|\n`;
lint += inversions.sort((a, b) => b.count - a.count).map(i => `| ${i.route} | ${i.count} |`).join('\n') + '\n';

writeFileSync(join(ROOT, '.context/voice-lint.md'), lint);

console.log(`corpus: ${pages.length} routes + ${EXTRA_FILES.length} shared files, ${totalWords.toLocaleString()} words`);
console.log(`coverage: ${tracked.length} tracked, ${excludedTracked.length} excluded, ${missing.length} unaccounted`);
console.log(`lint: ${hits.length} flags`);
if (missing.length) { console.error('COVERAGE FAIL:', missing.join(', ')); process.exit(1); }
