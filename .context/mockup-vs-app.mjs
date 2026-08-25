// For every plateless route in the Next.js app, check whether the corresponding
// decoded-marketing mockup already contains drawn artwork (a plate-frame / .sk
// diagram). Distinguishes "needs drawing from scratch" from "already drawn,
// just never ported" — a very different ask for a design brief.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const [, , appRoot, mockDir] = process.argv;
if (!appRoot || !mockDir) { console.error('usage: node mockup-vs-app.mjs <repo> <decoded-marketing>'); process.exit(2); }

const appDir = join(appRoot, 'app');
function walk(d, out = []) {
  for (const e of readdirSync(d)) {
    const f = join(d, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else if (e === 'page.tsx') out.push(f);
  }
  return out;
}

const routes = walk(appDir)
  .map(f => ({ file: f, route: '/' + relative(appDir, f).split(sep).slice(0, -1).join('/') }))
  .filter(r => !r.route.startsWith('/clients') && !r.route.includes('['))
  .map(r => ({ ...r, route: r.route.replace(/(.)\/$/, '$1') }));

// route -> candidate mockup filenames
function candidates(route) {
  const s = route.replace(/^\//, '');
  if (!s) return ['homepage.html', 'index.html'];
  const flat = s.replace(/\//g, '-') + '.html';
  const last = s.split('/').pop() + '.html';
  return [flat, last, s.replace(/\//g, '-') + '-index.html'];
}

const mockFiles = new Set(readdirSync(mockDir).filter(f => f.endsWith('.html')));

const out = [];
for (const r of routes) {
  const src = readFileSync(r.file, 'utf8');
  const appPlates = [...new Set([...src.matchAll(/DO-ART-\d+/g)].map(m => m[0]))];
  const appHasArt = appPlates.length > 0 || /<svg[\s>]/.test(src) || /Schematic\b/.test(src);

  const mock = candidates(r.route).find(c => mockFiles.has(c));
  let mockArt = null;
  if (mock) {
    const m = readFileSync(join(mockDir, mock), 'utf8');
    const nos = [...new Set([...m.matchAll(/DO-ART-\d+/g)].map(x => x[0]))];
    const frames = (m.match(/plate-frame/g) || []).length;
    const svgs = (m.match(/<svg[\s>]/g) || []).length;
    // Every mockup carries 5 chrome SVGs (logo, nav chevrons, social icon).
    // Real content artwork means: a numbered plate, a plate frame, or svg
    // count above that baseline. Counting raw <svg> alone flags every page.
    const CHROME_SVG_BASELINE = 5;
    mockArt = { nos, frames, svgs, hasArt: nos.length > 0 || frames > 0 || svgs > CHROME_SVG_BASELINE };
  }
  out.push({ route: r.route, appPlates, appHasArt, mock, mockArt });
}

const gap = out.filter(r => !r.appHasArt && r.mockArt?.hasArt);
const bothBare = out.filter(r => !r.appHasArt && (!r.mockArt || !r.mockArt.hasArt));
const noMockup = out.filter(r => !r.mock);

console.log(`=== A. DRAWN IN MOCKUP, NO ARTWORK IN APP (${gap.length}) — port/convert, do not redraw ===`);
for (const r of gap) console.log(`  ${r.route.padEnd(38)} ${r.mock.padEnd(44)} frames=${r.mockArt.frames} svg=${r.mockArt.svgs} ${r.mockArt.nos.join(',') || '(unnumbered)'}`);

console.log(`\n=== B. NO ARTWORK ANYWHERE (${bothBare.length}) — genuinely needs drawing ===`);
for (const r of bothBare) console.log(`  ${r.route.padEnd(38)} mockup: ${r.mock || '(none)'}`);

console.log(`\n=== C. ROUTES WITH NO MOCKUP AT ALL (${noMockup.length}) ===`);
for (const r of noMockup) console.log(`  ${r.route}`);
