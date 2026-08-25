// Two-slot artwork audit.
// Pages in this app carry artwork in two distinct roles:
//   HERO  — heroGraphic={<XSchematic/>} at the top of the page
//   PLATE — a numbered <Plate no="DO-ART-###"> in the body
// Coverage differs per slot, so a single "has artwork" flag hides the real gaps.
// Also reports schematic components that exist but no page renders.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.argv[2];
const appDir = join(root, 'app');
const compDir = join(root, 'components');

function walk(d, out = [], pred = f => f === 'page.tsx') {
  for (const e of readdirSync(d)) {
    const f = join(d, e);
    if (statSync(f).isDirectory()) walk(f, out, pred);
    else if (pred(e)) out.push(f);
  }
  return out;
}

// shared page-template components may carry the slots on the page's behalf
const templates = new Map();
for (const f of walk(compDir, [], f => f.endsWith('.tsx'))) {
  const name = f.split(sep).pop().replace(/\.tsx$/, '');
  const src = readFileSync(f, 'utf8');
  templates.set(name, { src, usesHero: /heroGraphic/.test(src), usesPlate: /<Plate\b/.test(src) });
}

const pages = walk(appDir)
  .map(f => ({ file: f, route: '/' + relative(appDir, f).split(sep).slice(0, -1).join('/') }))
  .filter(p => !p.route.startsWith('/clients'))
  .map(p => ({ ...p, route: p.route.replace(/(.)\/$/, '$1') }))
  .sort((a, b) => a.route.localeCompare(b.route));

const rows = pages.map(p => {
  const src = readFileSync(p.file, 'utf8');
  const heroMatch = src.match(/heroGraphic\s*=\s*\{\s*<(\w+)/);
  const plates = [...new Set([...src.matchAll(/DO-ART-\d+/g)].map(m => m[0]))];
  // template indirection
  let viaTpl = null;
  for (const [name, t] of templates) {
    if (name.endsWith('DS') && new RegExp(`\\b${name}\\b`).test(src)) viaTpl = name;
  }
  return { route: p.route, hero: heroMatch ? heroMatch[1] : null, plates, viaTpl };
});

const pad = (s, n) => String(s ?? '').padEnd(n);
console.log(pad('ROUTE', 42) + pad('HERO GRAPHIC', 34) + 'BODY PLATE');
console.log('-'.repeat(96));
for (const r of rows) {
  console.log(pad(r.route, 42) + pad(r.hero || (r.viaTpl ? `(via ${r.viaTpl})` : '—'), 34) + (r.plates.join(', ') || '—'));
}

const bothMissing = rows.filter(r => !r.hero && !r.viaTpl && !r.plates.length);
console.log(`\nNEITHER SLOT FILLED (${bothMissing.length}): ${bothMissing.map(r => r.route).join(', ')}`);

// orphaned schematics
const allSrc = [...walk(appDir), ...walk(compDir, [], f => f.endsWith('.tsx'))]
  .map(f => readFileSync(f, 'utf8')).join('\n');
const orphans = [...templates.keys()].filter(n => {
  if (!n.endsWith('Schematic')) return false;
  const uses = (allSrc.match(new RegExp(`\\b${n}\\b`, 'g')) || []).length;
  return uses <= 1; // only its own definition
});
console.log(`\nORPHANED SCHEMATIC COMPONENTS — drawn, rendered nowhere (${orphans.length}):`);
orphans.forEach(o => console.log('  ' + o));
