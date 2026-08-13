// Derived nav-coverage check.
// Enumerates every routable public page from disk at run time, extracts every
// href from Header.tsx + Footer.tsx, and reports both directions:
//   ORPHANED  — a real page nothing in the nav links to
//   BROKEN    — a nav link pointing at a route that does not exist
// Run: node check-nav-coverage.mjs <repo-root>
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.argv[2];
if (!root) { console.error('usage: node check-nav-coverage.mjs <repo-root>'); process.exit(2); }

const appDir = join(root, 'app');

// ── 1. every routable page, computed from disk ─────────────────────────
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry === 'page.tsx' || entry === 'page.ts') out.push(full);
  }
  return out;
}

const routes = walk(appDir)
  .map(f => '/' + relative(appDir, f).split(sep).slice(0, -1).join('/'))
  .map(r => (r === '/' ? '/' : r.replace(/\/$/, '')))
  .filter(r => !r.includes('[')) // dynamic segments can't be link targets
  .filter(r => !r.startsWith('/clients')) // gated client portal, deliberately not in nav
  .filter(r => r !== '/'); // home is the logo link

// ── 2. every href the nav actually renders ─────────────────────────────
const navSource = ['components/Header.tsx', 'components/Footer.tsx']
  .map(f => readFileSync(join(root, f), 'utf8')).join('\n');

// Two shapes carry links here: JSX attributes (href="/x") and the nav data
// arrays (href: '/x'). Miss either and the check silently passes.
const linked = new Set(
  [...navSource.matchAll(/href\s*[=:]\s*["'`](\/[^"'`\s#?]*)/g)]
    .map(m => m[1].replace(/(.)\/$/, '$1'))
);

// ── 3. report both directions ──────────────────────────────────────────
const orphaned = routes.filter(r => !linked.has(r)).sort();
const routeSet = new Set(routes);
const broken = [...linked]
  .filter(h => h && h !== '/' && !routeSet.has(h))
  .filter(h => !h.startsWith('/clients'))
  .sort();

console.log(`pages on disk (public, static): ${routes.length}`);
console.log(`distinct nav hrefs:             ${linked.size}\n`);

console.log(`ORPHANED — real page, no nav link (${orphaned.length}):`);
console.log(orphaned.length ? orphaned.map(r => '  ' + r).join('\n') : '  none');

console.log(`\nBROKEN — nav link, no such page (${broken.length}):`);
console.log(broken.length ? broken.map(r => '  ' + r).join('\n') : '  none');

process.exit(orphaned.length || broken.length ? 1 : 0);
