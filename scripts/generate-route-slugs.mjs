/**
 * Generate data/route-slugs.json from the filesystem, at BUILD time.
 *
 * Why this exists rather than reading the filesystem inside app/sitemap.ts:
 *
 * next.config.ts sets `output: 'standalone'`, and the Dockerfile's runner stage
 * copies only `public`, `.next/standalone` and `.next/static`. The `app/` source
 * directory is NOT present at runtime. app/sitemap.ts is also ISR (it fetches the
 * hub blog index with `revalidate: 300`), so it re-executes inside the running
 * container. A readdirSync against `app/problems` there returns nothing, and every
 * problem, sector and tool URL silently disappears from the sitemap.
 *
 * Generating at build time keeps the anti-drift property (the list is recomputed on
 * every build, so it cannot go stale the way a hardcoded array did) while producing
 * a plain JSON import that survives into the standalone bundle.
 *
 * Wired to the `prebuild` npm script, so it runs automatically before `next build`.
 */
import { readdirSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function deriveSlugs(subdir) {
  const dir = resolve(root, 'app', subdir);
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((de) => {
      if (!de.isDirectory()) return false;
      // Skip private folders, route groups and dynamic segments.
      if (de.name.startsWith('_') || de.name.startsWith('(') || de.name.startsWith('[')) return false;
      return existsSync(resolve(dir, de.name, 'page.tsx'));
    })
    .map((de) => de.name)
    .sort();
}

const out = {
  _generated: 'Do not edit. Produced by scripts/generate-route-slugs.mjs via npm prebuild.',
  problems: deriveSlugs('problems'),
  sectors: deriveSlugs('sectors'),
  tools: deriveSlugs('tools'),
};

const dataDir = resolve(root, 'data');
mkdirSync(dataDir, { recursive: true });
writeFileSync(resolve(dataDir, 'route-slugs.json'), JSON.stringify(out, null, 2) + '\n');

console.log(
  `[route-slugs] ${out.problems.length} problems, ${out.sectors.length} sectors, ${out.tools.length} tools`
);
