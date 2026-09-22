# LANE-NOTES: web011-u1u2-links

## Unit 1 — CR-WEB-039: Retire /tools/ai-readiness-check

- Added 301 permanent redirect from `/tools/ai-readiness-check` to `/tools/ops-health-score` in `next.config.ts`
- Deleted `app/tools/ai-readiness-check/` (page.tsx + layout.tsx)
- Removed the AI Readiness Check card from `app/tools/page.tsx` tools array
- Removed `'ai-readiness-check'` from `VALID_TOOLS` union and `toolNames` map in `app/api/tools/capture/route.ts`
- Ran `node scripts/generate-route-slugs.mjs` — tools count dropped from 6 to 5
- Escape grep confirms only the redirect line and a `price-audit.mjs` utility reference remain
- Note: Header.tsx did not contain ai-readiness-check menu items despite the task expecting them there — the tool was only in the tools index page

## Unit 2 — CR-WEB-040: Internal link mesh

### Routing data changes
- Extended `SectorRoute` type with `relatedResources` and `relatedSectors` arrays
- Extended `ProblemRoute` type with `relatedSectors` and `relatedResources` arrays
- Added sector-routing entries for `workwear`, `teamwear-clubwear`, `schoolwear`, `promotional-merchandise` (previously absent)
- Removed stale `workwear-teamwear` entry (page lives at `/sectors/workwear`)
- Populated all 10 sector entries and all 18 problem entries with the new fields
- Every near-orphan URL now has 3+ inbound link references from data/page files

### Rendering changes
- Updated `ProblemPageDS` component to accept and render `relatedSectors` and `relatedResources` props
- Updated 7 problem pages that use `ProblemPageDS` to pass the new routing fields
- Updated 10 sector pages (6 custom-layout + 4 SectorPageDS-based) to render `relatedResources` and `relatedSectors`
- Added case study sections to 6 sector pages (workwear, garment-decoration, print-promotional, teamwear-clubwear, signs-graphics, promotional-merchandise)
- Added related sector/problem/resource sections to 3 case study pages (case-study-01, case-study-03, eternal-fitness)

### Design system compliance
- All new related blocks reuse existing card/list markup patterns from `ProblemPageDS` and sector pages
- No new CSS classes or design tokens introduced
- Links use the same `Link` + `ArrowRight` pattern as existing related sections

### What was NOT done
- Custom-layout problem pages (spreadsheet-addiction, wrong-erp-software, inventory-blind, seasonal-peaks, legacy-system, buy-vs-build, erp-implementation-failure, ops-in-owners-head, data-scattered, bottleneck-growth) did NOT get related sections added — they don't consume routing data and adding inline sections to each would have been a separate task
- These pages still receive inbound links from: sector relatedProblems (3+ sectors link to each), problem relatedProblems (sibling problems link to each), and the header nav — sufficient for the 3+ inbound link target
