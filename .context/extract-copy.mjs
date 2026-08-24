// Copy extractor.
// Dumps the site's visible copy so a content review can be done against a diff
// rather than by clicking pages. Walks app/**/page.tsx, pulls human-readable
// string literals and JSX text nodes (skipping className/href/import/id-ish
// strings), and writes .context/copy-snapshot.md grouped by route.
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = process.argv[2] ? resolve(process.cwd(), process.argv[2]) : resolve(here, '..');
const appDir = join(root, 'app');
const outPath = join(here, 'copy-snapshot.md');

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry === 'page.tsx') out.push(full);
  }
  return out;
}

const ENTITIES = {
  '&mdash;': '—', '&ndash;': '–', '&apos;': "'", '&amp;': '&', '&lt;': '<',
  '&gt;': '>', '&quot;': '"', '&ldquo;': '"', '&rdquo;': '"', '&lsquo;': "'",
  '&rsquo;': "'", '&nbsp;': ' ', '&hellip;': '…', '&copy;': '©', '&reg;': '®',
  '&times;': '×',
};
const decode = s => s.replace(/&[a-z]+;/gi, m => ENTITIES[m.toLowerCase()] ?? m);
const clean = s => decode(s).replace(/\s+/g, ' ').trim();

const SKIP_KEYS = new Set([
  'class', 'classname', 'href', 'src', 'srcset', 'id', 'key', 'rel', 'target',
  'type', 'url', 'as', 'fill', 'sizes', 'width', 'height', 'color', 'colour',
  'stroke', 'strokewidth', 'fontsize', 'fontweight', 'fontfamily', 'textanchor',
  'd', 'viewbox', 'xmlns', 'version', 'role', 'x', 'y', 'cx', 'cy', 'r', 'rx',
  'ry', 'pattern', 'patternunits', 'points', 'stopcolor', 'stopopacity',
  'clippath', 'filter', 'media', 'crossorigin', 'referrerpolicy', 'priority',
  'loading', 'decoding', 'x1', 'x2', 'y1', 'y2', 'dx', 'dy', 'offset',
  'direction', 'orient', 'gradientunits', 'gradienttransform', 'overflow',
  'preserveaspectratio', 'stddeviation', 'repeatcount', 'fillopacity',
  'strokeopacity', 'strokelinecap', 'strokelinejoin', 'markerend', 'markerstart',
  'mask', 'htmlfor', 'form', 'action', 'method', 'slug', 'canonical',
  'alternates', '@type', '@context', '@id', '@graph', 'position', 'pricecurrency',
  'itemcondition', 'sameas', 'operatingsystem', 'applicationcategory', 'currency',
  'unit', 'units', 'min', 'max', 'step', 'tabindex', 'colspan', 'rowspan',
  'datetime', 'itemprop', 'itemscope', 'itemtype', 'lang', 'dir', 'content',
  'charset', 'accept', 'encoding', 'fillrule', 'cliprule', 'xmlnsxlink', 'xlinkhref',
]);

const IDENTIFIER = /^[a-z][a-z0-9_]*$/;
const CODEISH = /[/\\.#?@:;=|\[\](){}]/;

function preprocess(src) {
  let s = src;
  s = s.replace(/\/\*[\s\S]*?\*\//g, ' ');            // block comments (incl. {/* */}
  s = s.replace(/(^|\n)[ \t]*\/\/[^\n]*/g, '\n');      // line comments
  s = s.replace(/^\s*import\b[^\n]*$/gm, '');          // import statements
  return s;
}

function unescapeString(s) {
  return s
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\\r/g, '')
    .replace(/\\(.)/g, '$1');
}

const STRING_RE = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g;

function precedingKey(src, idx) {
  const before = src.slice(Math.max(0, idx - 100), idx);
  const m = before.match(/(?:([A-Za-z_$@][A-Za-z0-9_$-]*)|['"]([^'"]+)['"])\s*[:=]\s*$/);
  return m ? (m[1] || m[2] || '').toLowerCase() : null;
}

function extractStrings(src) {
  const out = [];
  for (const m of src.matchAll(STRING_RE)) {
    const quote = m[0][0];
    let inner = m[0].slice(1, -1);
    inner = unescapeString(inner);
    if (quote === '`') inner = inner.replace(/\$\{[^}]*\}/g, '');
    const text = clean(inner);
    if (!text) continue;
    const key = precedingKey(src, m.index);
    if (key && (SKIP_KEYS.has(key) || key.startsWith('aria-') || key.startsWith('data-'))) continue;
    if (!/\s/.test(text)) {
      if (IDENTIFIER.test(text)) continue;
      if (CODEISH.test(text)) continue;
      if (!/[A-Za-z0-9]/.test(text)) continue;
    }
    out.push({ offset: m.index, text });
  }
  return out;
}

function extractJsxText(src) {
  const out = [];
  const startIdx = Math.max(0, src.indexOf('export default'));
  let depth = 0;
  let inTag = false;
  let inStr = null;
  let started = false;
  let buf = '';
  let bufStart = -1;

  const flush = () => {
    const text = clean(buf);
    if (text && /[A-Za-z0-9]/.test(text)) out.push({ offset: bufStart, text });
    buf = '';
    bufStart = -1;
  };
  const append = (ch, idx) => {
    if (!started) return;
    if (bufStart < 0) bufStart = idx;
    buf += ch;
  };

  let i = startIdx;
  while (i < src.length) {
    const c = src[i];

    if (inStr) {
      if (c === '\\') i += 2;
      else { if (c === inStr) inStr = null; i++; }
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; i++; continue; }

    if (c === 'r' && src.startsWith('return', i) && (i === 0 || !/[A-Za-z0-9_$]/.test(src[i - 1]))) {
      let j = i + 6;
      while (j < src.length && /\s/.test(src[j])) j++;
      if (src[j] === '(') {
        depth = 0;
        started = true;
        i = j + 1;
        continue;
      }
    }

    if (c === '<' && depth === 0) { inTag = true; flush(); i++; continue; }
    if (inTag) { if (c === '>') inTag = false; i++; continue; }

    if (c === '{') { depth++; flush(); i++; continue; }
    if (c === '}') { depth--; if (depth < 0) depth = 0; i++; continue; }

    if (depth === 0) append(c, i);
    i++;
  }
  flush();
  return out;
}

const routes = walk(appDir)
  .map(f => ({ file: f, route: '/' + relative(appDir, f).split(sep).slice(0, -1).join('/') }))
  .map(p => ({ ...p, route: p.route.replace(/(.)\/$/, '$1') }))
  .sort((a, b) => a.route.localeCompare(b.route));

const sections = routes.map(({ file, route }) => {
  const src = preprocess(readFileSync(file, 'utf8'));
  const seen = new Set();
  const items = [...extractStrings(src), ...extractJsxText(src)]
    .sort((a, b) => a.offset - b.offset)
    .map(x => x.text)
    .filter(t => (seen.has(t) ? false : (seen.add(t), true)));
  return { route, items };
});

const lines = ['# Copy snapshot', ''];
for (const { route, items } of sections) {
  lines.push(`## ${route}`, '');
  for (const t of items) lines.push(`- ${t}`);
  lines.push('');
}
writeFileSync(outPath, lines.join('\n') + '\n', 'utf8');

const lineCount = lines.join('\n').split('\n').length;
console.log(`Extracted ${routes.length} routes (${lineCount} lines) → .context/copy-snapshot.md`);
