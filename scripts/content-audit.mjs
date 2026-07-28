// Scripts: extract all visible text content from the Decoded Ops website
// into a single markdown review document for SEO / copy review.
//
// Usage: node scripts/content-audit.mjs
// Output: docs/content-audit.md

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APP_DIR = join(ROOT, 'app');

// ---- helpers --------------------------------------------------------------

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (entry === 'page.tsx' || entry === 'page.ts') out.push(full);
  }
  return out;
}

// Decode common HTML entities used in JSX source.
function decodeEntities(s) {
  return s
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&[a-z]+;/gi, ' ')
    .trim();
}

// Pull the `export const metadata = {...}` object from source.
function extractMetadata(src) {
  const m = src.match(/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*(\{[\s\S]*?\n\});/);
  if (!m) return {};
  const block = m[1];
  const grab = (key) => {
    const re = new RegExp(`${key}\\s*:\\s*['"\`]([\\s\\S]*?)['"\`]`);
    const mm = block.match(re);
    return mm ? decodeEntities(mm[1]) : '';
  };
  const canonicalMatch = block.match(/canonical\s*:\s*['"\`]([^'"\`]+)['"\`]/);
  return {
    title: grab('title'),
    description: grab('description'),
    canonical: canonicalMatch ? canonicalMatch[1] : '',
  };
}

// Extract props passed to a named component call, e.g. <ProblemPage ... />
function extractComponentProps(src, name) {
  const re = new RegExp(`<${name}\\b([\\s\\S]*?)(?:/>|>\\s*<\\/${name}>)`, 'm');
  const m = src.match(re);
  if (!m) return '';
  return m[1];
}

// Pull a JS string/array/object literal value for a given prop name from a
// component-prop block (best-effort, line-by-line scan).
function extractPropValue(propsBlock, propName) {
  const lines = propsBlock.split('\n');
  const results = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const re = new RegExp(`^\\s*${propName}\\s*=`);
    if (re.test(line)) {
      let value = line.replace(re, '').trim();
      // gather continuation lines if value is an array/object/string not closed
      let depth = 0;
      for (const ch of value) {
        if ('[{("\''.includes(ch)) depth++;
        if ('}]"\''.includes(ch)) depth--;
      }
      let j = i;
      while (depth > 0 && j + 1 < lines.length) {
        j++;
        value += ' ' + lines[j].trim();
        for (const ch of lines[j]) {
          if ('[{("\''.includes(ch)) depth++;
          if ('}]"\''.includes(ch)) depth--;
        }
      }
      results.push(cleanValue(value));
      i = j + 1;
    } else {
      i++;
    }
  }
  return results.join('\n\n');
}

function cleanValue(raw) {
  // Trim trailing commas and wrapping whitespace, then unquote simple strings.
  let v = raw.trim().replace(/,\s*$/, '');
  // Try to expand inline arrays / objects into bullet-friendly text.
  if (v.startsWith('[')) {
    const items = splitTopLevel(v.slice(1, -1));
    return items.map((it) => '• ' + renderLiteral(it)).filter(Boolean).join('\n');
  }
  if (v.startsWith('{')) {
    // object literal -> key: value lines
    const items = splitTopLevel(v.slice(1, -1));
    return items.map((it) => {
      const idx = it.indexOf(':');
      if (idx === -1) return renderLiteral(it);
      const k = it.slice(0, idx).trim();
      const val = renderLiteral(it.slice(idx + 1).trim());
      return `**${k}**: ${val}`;
    }).filter(Boolean).join('\n');
  }
  return renderLiteral(v);
}

function renderLiteral(s) {
  let v = s.trim();
  // string literal
  const strMatch = v.match(/^(['"`])([\s\S]*)\1$/);
  if (strMatch) return decodeEntities(strMatch[2]);
  // nested array of strings
  if (v.startsWith('[') && v.endsWith(']')) {
    const items = splitTopLevel(v.slice(1, -1));
    return items.map((it) => renderLiteral(it)).join('; ');
  }
  if (v.startsWith('{') && v.endsWith('}')) {
    const items = splitTopLevel(v.slice(1, -1));
    return items.map((it) => {
      const idx = it.indexOf(':');
      if (idx === -1) return renderLiteral(it);
      return `${it.slice(0, idx).trim()}: ${renderLiteral(it.slice(idx + 1).trim())}`;
    }).join('; ');
  }
  return decodeEntities(v);
}

// Split a comma-separated list respecting nesting of [], {} and quotes.
function splitTopLevel(str) {
  const out = [];
  let depth = 0;
  let cur = '';
  let quote = null;
  for (const ch of str) {
    if (quote) {
      if (ch === quote) quote = null;
      cur += ch;
    } else if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      cur += ch;
    } else if (ch === '[' || ch === '{') {
      depth++;
      cur += ch;
    } else if (ch === ']' || ch === '}') {
      depth--;
      cur += ch;
    } else if (ch === ',' && depth === 0) {
      out.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) out.push(cur);
  return out;
}

// Extract heading / paragraph / list / blockquote text from inline JSX.
function extractInlineText(src) {
  const blocks = [];
  // h1-h4
  for (const tag of ['h1', 'h2', 'h3', 'h4']) {
    const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'g');
    let m;
    while ((m = re.exec(src))) {
      const text = extractTextNodes(m[1]);
      if (text) blocks.push({ type: tag, level: Number(tag.slice(1)), text });
    }
  }
  // blockquote
  const bq = /<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/g;
  let bm;
  while ((bm = bq.exec(src))) {
    const text = extractTextNodes(bm[1]);
    if (text) blocks.push({ type: 'blockquote', text });
  }
  // <p> tags
  const pr = /<p\b[^>]*>([\s\S]*?)<\/p>/g;
  let pm;
  while ((pm = pr.exec(src))) {
    const text = extractTextNodes(pm[1]);
    if (text) blocks.push({ type: 'p', text });
  }
  // <li> tags
  const lr = /<li\b[^>]*>([\s\S]*?)<\/li>/g;
  let lm;
  while ((lm = lr.exec(src))) {
    const text = extractTextNodes(lm[1]);
    if (text) blocks.push({ type: 'li', text });
  }
  return blocks;
}

// Pull plain text out of a JSX fragment, preserving the `||` split markers
// used for heading emphasis and resolving {expression} interpolations where
// possible (e.g. mapped arrays render their static JS below instead).
function extractTextNodes(fragment) {
  // Remove self-closing non-text elements like <ArrowRight ... /> and <Image .../>
  let s = fragment.replace(/<(ArrowRight|Image|HeroVisual|SectorCredibilityPhoto|HeroGraphic|JsonLd|BreadcrumbSchema|svg[\s\S]*?\/svg)\b[^>]*\/?>/g, '');
  // Replace simple {var} interpolations with a marker (content captured elsewhere)
  s = s.replace(/\{(?!['"`])[\s\S]*?\}/g, (mm) => {
    // keep static string literals inside interpolations
    const lit = mm.match(/['"`]([^'"`]+)['"`]/);
    return lit ? lit[1] : '';
  });
  // Strip remaining tags
  s = s.replace(/<[^>]+>/g, '');
  return decodeEntities(s).replace(/\s+/g, ' ').replace(/^\s*[\-|—]\s*/, '').trim();
}

// Capture data objects (const foo = [...]) that hold visible copy.
function extractDataObjects(src) {
  const out = [];
  const re = /const\s+(\w+)\s*=\s*(\[[\s\S]*?\n\]);/g;
  let m;
  while ((m = re.exec(src))) {
    const name = m[1];
    const body = m[2];
    // Only capture objects whose item values carry visible copy.
    const items = splitTopLevel(body.slice(1, -1));
    const rendered = items
      .map((it) => renderLiteral(it))
      .filter((x) => x && x.length > 1);
    if (rendered.length) {
      out.push({ name, rendered });
    }
  }
  return out;
}

// ---- main -----------------------------------------------------------------

const pages = walk(APP_DIR).sort();

let doc = '';
doc += '# Decoded Ops — Website Content Audit (for SEO / Copy Review)\n\n';
doc += `> Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/content-audit.mjs\`.\n`;
doc += '> Structure: H1 → H2 → H3 hierarchy, body paragraphs, lists, and metadata per route.\n';
doc += '> Use this as the single source of truth to review, rewrite and reposition copy.\n\n';
doc += '---\n\n';

// Site-wide defaults (root layout)
doc += '## Site-wide defaults (app/layout.tsx)\n\n';
doc += '- **Default title:** Print & Embroidery Technology Consultant | Decoded Ops\n';
doc += '- **Default description:** Operations and technology consultancy for businesses that print, embroider, decorate and make. Plain English. Real answers. 25 years in the sector.\n';
doc += '- **lang:** en · **locale:** en_GB · **robots:** index, follow\n\n';

for (const file of pages) {
  const rel = relative(ROOT, file).replace(/\\/g, '/');
  const route = '/' + relative(APP_DIR, file).replace(/\\/g, '/').replace(/page\.tsx$/, '').replace(/page\.ts$/, '');
  const src = readFileSync(file, 'utf8');

  doc += `## Route: \`${route}\`\n\n`;
  doc += `_Source: ${rel}_\n\n`;

  const meta = extractMetadata(src);
  if (meta.title || meta.description) {
    doc += '### Metadata (SEO)\n\n';
    if (meta.title) doc += `- **Title:** ${meta.title}\n`;
    if (meta.description) doc += `- **Meta description:** ${meta.description}\n`;
    if (meta.canonical) doc += `- **Canonical:** ${meta.canonical}\n`;
    doc += '\n';
  }

  // Component-driven pages.
  const components = [
    { name: 'ProblemPage', props: ['problem', 'headline', 'intro', 'symptoms', 'causes', 'howIHelp'] },
    { name: 'SectorPage', props: ['sector', 'tagline', 'intro', 'challenges', 'whatIdo', 'cta'] },
    { name: 'LocationPage', props: ['town', 'county', 'service', 'badge', 'tagline', 'intro', 'localContext', 'painPoints', 'whatIdo', 'cta'] },
  ];
  for (const comp of components) {
    const block = extractComponentProps(src, comp.name);
    if (!block) continue;
    doc += `### ${comp.name} content\n\n`;
    for (const prop of comp.props) {
      const val = extractPropValue(block, prop);
      if (!val) continue;
      doc += `**${prop}:**\n\n${val}\n\n`;
    }
  }

  // Inline JSX text
  const inline = extractInlineText(src);
  if (inline.length) {
    doc += '### Page copy (heading & body)\n\n';
    for (const b of inline) {
      if (b.type.startsWith('h')) {
        const level = Math.min(b.level, 4);
        const hashes = '#'.repeat(level + 3); // offset for the "### " section level, capped at H4
        doc += `${hashes} ${b.text}\n\n`;
      } else if (b.type === 'blockquote') {
        doc += `> ${b.text}\n\n`;
      } else if (b.type === 'li') {
        doc += `- ${b.text}\n`;
      } else {
        doc += `${b.text}\n\n`;
      }
    }
  }

  // Inline data objects
  const data = extractDataObjects(src);
  for (const d of data) {
    doc += `### Data object: \`${d.name}\`\n\n`;
    doc += d.rendered.map((r) => `- ${r}`).join('\n') + '\n\n';
  }

  doc += '---\n\n';
}

const outDir = join(ROOT, 'docs');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'content-audit.md');
writeFileSync(outPath, doc, 'utf8');
console.log(`Wrote ${outPath} (${doc.length} chars, ${pages.length} pages)`);
