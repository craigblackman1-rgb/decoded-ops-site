// Derived nav-coverage check.
// Enumerates every routable public page from disk at run time, extracts every
// href from Header.tsx + Footer.tsx, and reports both directions:
//   ORPHANED  — a real page nothing in the nav links to
//   BROKEN    — a nav link pointing at a route that does not exist
//
// Dynamic route segments ([param]) are expanded generically: when a [param] page
// imports a data module that carries `slug: '…'` string literals, those literals
// become the concrete routes (the same source a generateStaticParams over a
// locations array would produce). Dynamic segments that cannot be enumerated are
// treated as satisfied, never reported as broken.
//
// Run: node check-nav-coverage.mjs [repo-root]  (root defaults to the repo this file lives in)
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.argv[2] ? resolve(process.cwd(), process.argv[2]) : resolve(dirname(fileURLToPath(import.meta.url)), '..');

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

function toRoute(pageFile) {
  const r = '/' + relative(appDir, pageFile).split(sep).slice(0, -1).join('/');
  return r === '/' ? '/' : r.replace(/\/$/, '');
}

const pageFiles = walk(appDir);
const pageByRoute = new Map(pageFiles.map(f => [toRoute(f), f]));
const allRoutes = [...pageByRoute.keys()];

const isClients = r => r === '/clients' || r.startsWith('/clients/');

// Static pages feed ORPHANED detection exactly as before — only literal
// directory names count as "real pages nothing links to". Dynamic routes are
// kept out of ORPHANED and instead expand into concrete routes for BROKEN.
const staticRoutes = allRoutes
  .filter(r => !r.includes('['))
  .filter(r => !isClients(r))
  .filter(r => r !== '/'); // home is the logo link

const dynamicRoutes = allRoutes
  .filter(r => r.includes('['))
  .filter(r => !isClients(r)); // gated client portal, deliberately not in nav

// ── 1a. expand dynamic segments from their data module ─────────────────
const IMPORT_FROM_RE = /from\s*['"]([^'"]+)['"]/g;
const IMPORT_BARE_RE = /import\s*['"]([^'"]+)['"]/g;
const SLUG_RE = /slug\s*:\s*['"`]([^'"`]+)['"`]/g;

function resolveImport(specifier, fromFile) {
  if (specifier.startsWith('@/')) return resolve(root, specifier.slice(2));
  if (specifier.startsWith('./') || specifier.startsWith('../')) return resolve(dirname(fromFile), specifier);
  return null; // bare package specifier (next, lucide-react, …) — not a project file
}

function resolveToFile(base) {
  const candidates = /\.[a-z0-9]+$/i.test(base)
    ? [base]
    : [base + '.ts', base + '.tsx', base + '.js', base + '.jsx', base + '.json'];
  return candidates.find(c => existsSync(c)) || null;
}

// Reads the page source, resolves each project-relative import to a file, and
// returns the slug literals from the first imported module that defines any.
function extractSlugs(pageFile) {
  const source = readFileSync(pageFile, 'utf8');
  const specifiers = new Set();
  for (const m of source.matchAll(IMPORT_FROM_RE)) specifiers.add(m[1]);
  for (const m of source.matchAll(IMPORT_BARE_RE)) specifiers.add(m[1]);
  for (const spec of specifiers) {
    const base = resolveImport(spec, pageFile);
    if (!base) continue;
    const file = resolveToFile(base);
    if (!file) continue;
    const slugs = [...readFileSync(file, 'utf8').matchAll(SLUG_RE)].map(m => m[1]);
    if (slugs.length) return slugs;
  }
  return [];
}

const dynamicResolved = new Set();
const unresolvedPatterns = [];

for (const route of dynamicRoutes) {
  const slugs = extractSlugs(pageByRoute.get(route));
  const segs = route.split('/');
  const dynIdx = segs.map((s, i) => (s.startsWith('[') ? i : -1)).filter(i => i >= 0);
  if (slugs.length === 0 || dynIdx.length !== 1) {
    unresolvedPatterns.push(route);
    continue;
  }
  const idx = dynIdx[0];
  for (const slug of slugs) {
    dynamicResolved.add([...segs.slice(0, idx), slug, ...segs.slice(idx + 1)].join('/'));
  }
}

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
function matchesPattern(link, pattern) {
  const l = link.split('/');
  const p = pattern.split('/');
  if (l.length !== p.length) return false;
  return p.every((seg, i) => seg.startsWith('[') || l[i] === seg);
}

const orphaned = staticRoutes.filter(r => !linked.has(r)).sort();

const routeSet = new Set([...staticRoutes, ...dynamicResolved]);
const unresolvedLinks = [...linked]
  .filter(h => h && h !== '/' && !isClients(h))
  .filter(h => unresolvedPatterns.some(p => matchesPattern(h, p)))
  .sort();

const broken = [...linked]
  .filter(h => h && h !== '/' && !isClients(h) && !routeSet.has(h))
  .filter(h => !unresolvedPatterns.some(p => matchesPattern(h, p)))
  .sort();

console.log(`pages on disk (public, static): ${staticRoutes.length}`);
console.log(`pages from dynamic segments:    ${dynamicResolved.size}`);
console.log(`distinct nav hrefs:             ${linked.size}\n`);

console.log(`ORPHANED — real page, no nav link (${orphaned.length}):`);
console.log(orphaned.length ? orphaned.map(r => '  ' + r).join('\n') : '  none');

console.log(`\nBROKEN — nav link, no such page (${broken.length}):`);
console.log(broken.length ? broken.map(r => '  ' + r).join('\n') : '  none');

console.log(`\nUNRESOLVED DYNAMIC — dynamic route(s) whose slugs could not be enumerated (${unresolvedPatterns.length}):`);
console.log(unresolvedPatterns.length ? unresolvedPatterns.map(r => '  ' + r).join('\n') : '  none');
console.log(`nav links satisfied by the above (${unresolvedLinks.length}):`);
console.log(unresolvedLinks.length ? unresolvedLinks.map(r => '  ' + r).join('\n') : '  none');

process.exit(orphaned.length || broken.length ? 1 : 0);
