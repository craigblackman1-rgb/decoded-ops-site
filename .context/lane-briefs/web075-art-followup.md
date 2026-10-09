# Lane brief: CR-WEB-075 artwork follow-up (WO-INF-084)

Worktree of decoded-ops-website, branch `lane/web075-art-followup`, based on origin/main. Work only here.
Hard rules (same as CR-WEB-074): no dev servers / Playwright / curl; `npx tsc --noEmit` before each commit; stage only your files (never `git add -A`; never commit `data/route-slugs.json` or `.context/price-audit.md`); plain UTF-8 in JSX text, never `\uXXXX` escapes; never invent stats — copy only verbatim from the spec; never `calc(N*var(--u))` for min-height/padding on the `.d17` figure itself; never reference `proof-approval.jpg`; anchor on file + `data-no` and re-grep (line numbers drift).

Spec: `.context/cr-web-075/artwork-swap-map-2.md` (read fully; ignore its register delta — Claude handles it).
Images: `.context/cr-web-075/hero-garment-racking-219356.webp` and `plate-cartons-packed-2fb0ae.webp` -> copy to the `public/images/...` paths the spec names (new filenames, never overwrite). Do NOT commit the copies left in `.context/cr-web-075/` (delete them from the worktree after copying; commit only the spec .md there).

ONE DEVIATION FROM THE SPEC (Claude's decision): on `/problems/legacy-system` KEEP DO-ART-719 — do NOT swap it to DO-ART-940 (940's "grew into the full system" line contradicts that page's "keep the platform" message). Apply the other 719 swaps (ecommerce-not-connected -> 948, wrong-erp-software -> 999) as specified.

Steps, one commit each (`feat(art): ... (CR-WEB-075)`):
1. Photos installed + repointed.
2. DO-ART-719 swaps (two pages, per above).
3. New DO-ART-1014 hero on `/problems/quoting-takes-too-long` exactly as specified (copy verbatim).
4. Height polish for the 11 listed pieces (+1014) per the spec's height table — edit the existing final overrides as the spec says; target ≤ 630px tall at 1440 wide, no clipping, no hiding argument text.

Then write `.context/lane-reports/LANE-RESULT-web075-art-followup.md` (per step: files, page -> old -> new, anything not implemented and why), commit, stop.
