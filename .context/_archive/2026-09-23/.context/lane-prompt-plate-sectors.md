Work inside this decoded-ops-website worktree (Next.js/TypeScript, branched off origin/staging, which already has `components/Plate.tsx` — the shared plate diagram component built in Phase 1). Read `components/Plate.tsx` first to understand its API before starting. Read `app/page.tsx` (homepage) to see 3 real, already-working examples of `<Plate>` in use — copy that exact usage pattern.

## The job
Port the plate diagram for each of the 9 sector pages from the sibling `decoded-marketing` Open Design mockup project (`D:\apps\design-systems\decoded-marketing`, read-only reference — never edit it) into this repo's `components/SectorPageDS.tsx` (the shared component every sector page renders through — read it first) or the individual `app/sectors/*/page.tsx` files, whichever this repo's existing architecture calls for (check how `SectorPageDS` receives per-sector content/props — the plate likely needs to be passed in as a prop per sector rather than hardcoded once in the shared component, since each sector has a different drawing number and content).

| decoded-marketing file | drawing no. | this repo's route |
|---|---|---|
| `sectors-garment-decoration.html` | DO-ART-107 | `app/sectors/garment-decoration` |
| `sectors-workwear.html` | DO-ART-108 | `app/sectors/workwear` |
| `sectors-teamwear-clubwear.html` | DO-ART-109 | `app/sectors/teamwear-clubwear` |
| `sectors-schoolwear.html` | DO-ART-110 | `app/sectors/schoolwear` |
| `sectors-promotional-merchandise.html` | DO-ART-111 | `app/sectors/promotional-merchandise` |
| `sectors-print-promotional.html` | DO-ART-113 | `app/sectors/print-promotional` |
| `sectors-signs-graphics.html` | DO-ART-114 | `app/sectors/signs-graphics` |
| `sectors-awards-engraving.html` | DO-ART-115 | `app/sectors/awards-engraving` |
| `sectors-labels-packaging.html` | DO-ART-116 | `app/sectors/labels-packaging` |

For each: find the plate's markup in the decoded-marketing HTML file (search for `data-no="DO-ART-XXX"`), extract the title/sub/tone/p attributes and the inner `<g>` SVG content, and wire it into the corresponding sector's page via whatever mechanism `SectorPageDS.tsx` uses to receive sector-specific content (a `plate` prop, a `children` slot, a data object passed to the component — check the existing pattern before inventing a new one).

SVG attribute syntax note: the mockup HTML uses kebab-case SVG attributes (`stroke-width`, `font-family`, `letter-spacing`, `stroke-linecap`, etc.) — in JSX these become camelCase (`strokeWidth`, `fontFamily`, `letterSpacing`, `strokeLinecap`). Convert every one. `class=` becomes `className=`.

## Rules
- Stay inside `app/sectors/**` and `components/SectorPageDS.tsx` only. Do not touch any other page, `components/Plate.tsx`, or any global CSS file.
- Do NOT touch decoded-marketing (read-only reference).
- Never invent numbers or content — port exactly what's in the mockup, per sector.
- HARD RULES: no deploy, no git push, no pnpm/npm install. If build fails on a missing dependency, stop and report rather than installing.
- After all 9 sectors are done, run `npm run build` (you'll need `node_modules` — if missing, report that clearly rather than attempting to install) — must exit 0, zero TypeScript errors, and verify all 9 sector pages still build (they share one component, a mistake there could break all 9 at once — be extra careful).
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: the mechanism you used to pass per-sector plate data through `SectorPageDS.tsx`, and confirm all 9 sectors render their own distinct drawing number.
