Work inside this decoded-ops-website worktree (Next.js/TypeScript, branched off origin/staging, which already has `components/Plate.tsx` — the shared plate diagram component built in Phase 1). Read `components/Plate.tsx` first to understand its API before starting. Read `app/page.tsx` (homepage) to see 3 real, already-working examples of `<Plate>` in use (DO-ART-902, DO-ART-202, DO-ART-302) — copy that exact usage pattern.

## The job
Port the remaining "plate" diagrams for these 10 core pages from the sibling `decoded-marketing` Open Design mockup project (`D:\apps\design-systems\decoded-marketing`, read-only reference — never edit it) into their corresponding React pages in this repo, each wrapped in `<Plate>`:

| decoded-marketing file | drawing no. | this repo's route |
|---|---|---|
| `pricing.html` | DO-ART-203 | `app/pricing/page.tsx` |
| `retained.html` | DO-ART-204 | `app/retained/page.tsx` |
| `how-i-build.html` | DO-ART-112 (and reuses DO-ART-302, already on homepage — check whether how-i-build should show its own DO-ART-112 or also reuse 302; follow what the mockup actually does) | `app/how-i-build/page.tsx` |
| `apps.html` | DO-ART-104 | `app/apps/page.tsx` |
| `apps-data-app.html` | DO-ART-105 | `app/apps/data-app/page.tsx` |
| `apps-artwork-manager.html` | DO-ART-106 | `app/apps/artwork-manager/page.tsx` |
| `apps-commerce.html` | DO-ART-103 | `app/apps/commerce/page.tsx` |
| `decoded-method.html` | DO-ART-304 | `app/decoded-method/page.tsx` |
| `process-quality-system.html` | DO-ART-305 | `app/process-quality-system/page.tsx` |
| `clarity.html` | DO-ART-306 | `app/clarity/page.tsx` |
| `deliver.html` | DO-ART-305 (reused, same argument as process-quality-system per the mockup's own notes) | `app/deliver/page.tsx` |
| `transform.html` | DO-ART-403 | `app/transform/page.tsx` |

For each: find the plate's markup in the decoded-marketing HTML file (search for `data-no="DO-ART-XXX"`), extract the title/sub/tone/p attributes and the inner `<g>` SVG content, and insert a `<Plate>` call with that exact content into the matching React page at a sensible point in the page's existing layout (near where the topic it illustrates is discussed — check if the React page already has a placeholder section, styled comment, or an older/simpler diagram in roughly the right spot that this should replace or sit beside).

SVG attribute syntax note: the mockup HTML uses kebab-case SVG attributes (`stroke-width`, `font-family`, `letter-spacing`, `stroke-linecap`, etc.) — in JSX these become camelCase (`strokeWidth`, `fontFamily`, `letterSpacing`, `strokeLinecap`). Convert every one; a raw kebab-case attribute will not compile cleanly in this repo's strict TSX setup. `class=` becomes `className=`. Self-closing tags need a trailing `/>` if not already present (most SVG elements in the source already are).

## Rules
- Stay inside `app/pricing/`, `app/retained/`, `app/how-i-build/`, `app/apps/**`, `app/decoded-method/`, `app/process-quality-system/`, `app/clarity/`, `app/deliver/`, `app/transform/` only. Do not touch any other page, `components/Plate.tsx`, or any global CSS file.
- Do NOT touch decoded-marketing (read-only reference).
- Never invent numbers or content — port exactly what's in the mockup.
- HARD RULES: no deploy, no git push, no pnpm/npm install. If build fails on a missing dependency, stop and report rather than installing.
- After all 11 pages are done, run `npm run build` (you'll need `node_modules` — if missing, report that clearly rather than attempting to install) — must exit 0, zero TypeScript errors.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: which pages got a plate, which drawing numbers, and any judgement calls (e.g. how-i-build's DO-ART-112 vs 302 question above).
