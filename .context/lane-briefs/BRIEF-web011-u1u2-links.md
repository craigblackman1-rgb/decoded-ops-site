# Lane brief — web011-u1u2-links (CR-WEB-039 + CR-WEB-040)

Repo: decoded-ops-website (Next.js 16 App Router, TypeScript). You are in a fresh worktree on branch `web011-u1u2-links` off origin/main. Do NOT start a dev server, do NOT run Playwright, do NOT run `next start`. Implement, run `npx tsc --noEmit` and `npx next lint`, commit, stop. Only `git add` files you changed — never `git add -A`.

## Unit 1 — CR-WEB-039: retire /tools/ai-readiness-check

The AI Readiness Check product was retired on 19 Sep 2026. The page is still live, in the sitemap and linked from the header. Make it go away cleanly:

1. `next.config.ts` redirects array (around line 10–25, alongside the existing `/sectors/workwear-teamwear` entry): add `{ source: '/tools/ai-readiness-check', destination: '/tools/ops-health-score', permanent: true }`.
2. Delete `app/tools/ai-readiness-check/` (page.tsx + layout.tsx).
3. `app/tools/page.tsx` line ~49: remove the ai-readiness-check card/entry from the tools list.
4. `components/Header.tsx` lines ~102 and ~126: remove both ai-readiness-check menu items. Keep the surrounding menu structure intact and the lists syntactically valid.
5. `app/api/tools/capture/route.ts`: it references ai-readiness as a tool id. Leave any type union/enum entry that other code depends on if removing it breaks tsc; otherwise remove it. Do not change capture behaviour for the other tools.
6. `data/route-slugs.json` is GENERATED at build by `scripts/generate-route-slugs.mjs` (npm prebuild). Do not hand-edit it; run `node scripts/generate-route-slugs.mjs` after deleting the route so the sitemap (`app/sitemap.ts` line ~115 maps `/tools/${slug}`) drops it. Commit the regenerated file.
7. `grep -rn "ai-readiness" app components data lib` must return nothing except, at most, the redirect line and the capture route type if kept.

## Unit 2 — CR-WEB-040: internal link mesh for near-orphan pages

29 pages currently receive exactly one internal link each. The routing data already exists — extend it, don't invent a new mechanism.

Files:
- `data/sector-routing.ts` — `sectorRouting: Record<string, SectorRoute>` with `targetService` + `relatedProblems`.
- `data/problem-routing.ts` — same idea for /problems/*.
- `components/ProblemPageDS.tsx` — renders `relatedProblems` and `relatedReading` props.
- Sector pages `app/sectors/*/page.tsx`, problem pages `app/problems/*/page.tsx`, resources `app/resources/*/page.tsx`, case studies `app/case-studies/*/page.tsx`.

Target: every URL in the list below ends up with at least 3 inbound internal links from real content pages (not header/footer nav, which the crawler discounts).

Near-orphan list (currently 1 inbound link each, source in brackets):
- /problems/spreadsheet-addiction, wrong-erp-software, inventory-blind, ecommerce-not-connected, ops-in-owners-head, legacy-system, buy-vs-build, no-ops-owner, seasonal-peaks, disaster-recovery, erp-implementation-failure (all from /problems only)
- /sectors/labels-packaging, signs-graphics, awards-engraving, garment-decoration, print-promotional, workwear, teamwear-clubwear (all from / only)
- /resources/decoded-method, sop-template, erp-selection-playbook, artwork-approval-playbook (from /resources only)
- /tools/rto-calculator, ops-health-score (from /tools only)
- /case-studies/case-study-01, case-study-03, eternal-fitness (from /case-studies only)

How:
a. In `data/sector-routing.ts`, make sure every sector key has 3 `relatedProblems` and add a `relatedResources: { href; label }[]` field (2 entries each, chosen from the four /resources/* pages + the two /tools/* pages above where relevant — e.g. garment-decoration → artwork-approval-playbook + sop-template; workwear → erp-selection-playbook + ops-health-score). Also add `relatedSectors: { href; label }[]` (2 adjacent sectors each).
b. In `data/problem-routing.ts`, add `relatedSectors` (2 sectors where that problem shows up most) and `relatedResources` (1–2) to every problem entry. Problems with an obvious sector: ecommerce-not-connected → garment-decoration + workwear; inventory-blind → workwear + print-promotional; seasonal-peaks → teamwear-clubwear + garment-decoration; disaster-recovery → any two; erp-implementation-failure → labels-packaging + workwear; spreadsheet-addiction → awards-engraving + signs-graphics; the rest use your judgement from the page copy.
c. Render the new fields. Find where sector and problem pages consume the routing data (grep `sectorRouting[` and `problemRouting[`) and where `ProblemPageDS` renders related blocks; add a "Sectors where this shows up" list and a "Useful next" (resources/tools) list using the SAME existing list component/markup style as the current related-problems block. Do not restyle; reuse the existing classes and Design System tokens exactly. Labels are plain, short, no marketing copy — use the target page's existing H1 or title as the label.
d. Case studies: each of the three case-study pages should link to 2 relevant sector pages and 1 problem page in body copy or a related block; each relevant sector page (workwear, garment-decoration, print-promotional) should link to at least one case study. Reuse the existing related-block markup.
e. Every href must be a real route. Verify with `ls app/<path>/page.tsx` for each link you add. Never link to /problems/artwork-bottleneck or /terms — they do not exist.

## Verify before commit
- `npx tsc --noEmit` clean; `npx next lint` clean.
- `node scripts/check-no-tests-in-src.mjs` if it exists.
- Print a table: target URL → count of inbound links you can prove from grep of `href="/…"` across app/ and data/ (exclude components/Header.tsx and Footer). Every near-orphan URL must show ≥3.
- Do not write a LANE-RESULT summary that claims verification beyond tsc/lint/grep — Claude verifies rendering.

Commit as two commits: `CR-WEB-039: retire /tools/ai-readiness-check (301 → ops-health-score)` and `CR-WEB-040: internal link mesh for sector/problem/resource/case-study pages`. Do not push.
