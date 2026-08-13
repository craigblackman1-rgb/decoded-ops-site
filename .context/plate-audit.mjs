// Derived plate-coverage audit.
// For every routable page in the live Next.js app, work out at run time which
// DO-ART plate(s) it renders — following component indirection (SectorPageDS,
// ProblemPageDS etc. carry the plate on behalf of the page that uses them).
// Cross-references the design-system plate register so "assigned but not
// implemented" is distinguishable from "never drawn".
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep, dirname } from 'node:path';

const root = process.argv[2];
const registerPath = process.argv[3];
if (!root) { console.error('usage: node plate-audit.mjs <repo-root> [plate-register.html]'); process.exit(2); }

const appDir = join(root, 'app');

function walk(dir, out = [], pred = f => f === 'page.tsx') {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) walk(full, out, pred);
    else if (pred(e)) out.push(full);
  }
  return out;
}

// ── component index: which shared components carry a plate ──────────────
const compDir = join(root, 'components');
const componentPlates = new Map();     // ComponentName -> [plate numbers]
if (existsSync(compDir)) {
  for (const f of walk(compDir, [], f => f.endsWith('.tsx'))) {
    const src = readFileSync(f, 'utf8');
    const name = f.split(sep).pop().replace(/\.tsx$/, '');
    const nos = [...src.matchAll(/DO-ART-\d+/g)].map(m => m[0]);
    const takesPlateProp = /\bno\s*[=:]/.test(src) && /<Plate\b/.test(src);
    if (nos.length || takesPlateProp) {
      componentPlates.set(name, { nos: [...new Set(nos)], dynamic: takesPlateProp && !nos.length });
    }
  }
}

// ── per-page plate resolution ───────────────────────────────────────────
const pages = walk(appDir)
  .map(f => ({ file: f, route: '/' + relative(appDir, f).split(sep).slice(0, -1).join('/') }))
  .map(p => ({ ...p, route: p.route === '/' ? '/' : p.route.replace(/\/$/, '') }))
  .filter(p => !p.route.startsWith('/clients'))
  .sort((a, b) => a.route.localeCompare(b.route));

const rows = [];
for (const p of pages) {
  const src = readFileSync(p.file, 'utf8');
  const direct = [...new Set([...src.matchAll(/DO-ART-\d+/g)].map(m => m[0]))];
  // shared components rendered by this page that themselves carry a plate
  const viaComponent = [];
  for (const [name, info] of componentPlates) {
    if (new RegExp(`\\b${name}\\b`).test(src)) {
      if (info.nos.length) viaComponent.push(...info.nos.map(n => `${n} (via ${name})`));
      else if (info.dynamic) viaComponent.push(`?dynamic (via ${name})`);
    }
  }
  const plates = [...direct, ...viaComponent];
  rows.push({ route: p.route, plates, hasPlate: plates.length > 0 });
}

// ── register cross-reference ────────────────────────────────────────────
let registered = new Map();
if (registerPath && existsSync(registerPath)) {
  const reg = readFileSync(registerPath, 'utf8');
  for (const m of reg.matchAll(/(DO-ART-\d+)\+?<[^>]*>[\s\S]{0,40}?(01|—)[\s\S]{0,4000?}/g)) {}
  // simpler: pair each number with the nearest following "Where used" cell text
  const cleaned = reg.replace(/\s+/g, ' ');
  for (const m of cleaned.matchAll(/(DO-ART-\d+)(\+)?<\/td>\s*<td[^>]*>\s*(01|—)/g)) {
    registered.set(m[1], { placeholder: !!m[2], rev: m[3] });
  }
}

const withPlate = rows.filter(r => r.hasPlate);
const without = rows.filter(r => !r.hasPlate);

console.log(`ROUTES: ${rows.length}   with plate: ${withPlate.length}   without: ${without.length}`);
console.log(`\nCOMPONENTS CARRYING PLATES:`);
for (const [n, i] of componentPlates) console.log(`  ${n}: ${i.nos.length ? i.nos.join(', ') : '(plate passed in as prop)'}`);

console.log(`\n── PAGES WITH A PLATE (${withPlate.length}) ──`);
for (const r of withPlate) console.log(`  ${r.route.padEnd(42)} ${r.plates.join(', ')}`);

console.log(`\n── PAGES WITH NO PLATE (${without.length}) ──`);
for (const r of without) console.log(`  ${r.route}`);

if (registered.size) {
  const used = new Set(rows.flatMap(r => r.plates).map(p => p.match(/DO-ART-\d+/)?.[0]).filter(Boolean));
  const drawn = [...registered].filter(([, i]) => !i.placeholder).map(([n]) => n);
  const unusedDrawn = drawn.filter(n => !used.has(n)).sort();
  console.log(`\n── DRAWN IN REGISTER BUT NOT RENDERED IN THE APP (${unusedDrawn.length}) ──`);
  console.log(unusedDrawn.length ? unusedDrawn.map(n => '  ' + n).join('\n') : '  none');
}
