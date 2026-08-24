// Price-policy audit.
// Standing rule: all pricing lives on /pricing only. Any literal £ amount in a
// file outside app/pricing/ is a policy breach. Reports each hit as
// "path:line: <matched text>" and exits 1 when any are found.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = process.argv[2] ? resolve(process.cwd(), process.argv[2]) : resolve(here, '..');

const AMOUNT = /£\d+(?:[.,]\d+)*(?:[km])?/gi;

function walk(dir, out = [], pred = f => f.endsWith('.tsx')) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out, pred);
    else if (pred(entry)) out.push(full);
  }
  return out;
}

const files = [
  ...walk(join(root, 'app')),
  ...walk(join(root, 'components')),
]
  .map(f => ({ file: f, rel: relative(root, f).split(sep).join('/') }))
  .filter(({ rel }) => !(rel === 'app/pricing' || rel.startsWith('app/pricing/')))
  .sort((a, b) => a.rel.localeCompare(b.rel));

const hits = [];
for (const { file, rel } of files) {
  const src = readFileSync(file, 'utf8');
  src.split('\n').forEach((line, i) => {
    for (const m of line.matchAll(AMOUNT)) hits.push(`${rel}:${i + 1}: ${m[0]}`);
  });
}

for (const h of hits) console.log(h);
if (hits.length) {
  console.log(`\n${hits.length} price figures outside /pricing.`);
} else {
  console.log('No price figures outside /pricing.');
}
process.exit(hits.length ? 1 : 0);
