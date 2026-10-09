# Lane brief: CR-WEB-075 fix1 — last pieces over the height limit

Worktree of decoded-ops-website, branch `lane/web075-art-followup`. Work only here. Same hard rules as the main brief: no dev servers / Playwright / curl; `npx tsc --noEmit`; stage only your files; never commit `data/route-slugs.json` or `.context/price-audit.md`; never `calc(N*var(--u))` for min-height/padding on the `.d17` figure itself; no clipping and no hiding of argument text (decorative layers may be hidden on phones).

Measured (Playwright) after your last commits:
1. **DO-ART-939** on `/apps` (CSS `.a939` in `app/d17-apps-cases.css`, markup in `app/apps/page.tsx`): 1152x816 at 1440 wide (91% of 900px); 342x1246 on a 390x844 phone (148%). Target ≤ 630px tall at 1152 wide and ≤ 800px at 342 wide. Its old `min-height` was removed in BUG-WEB-046, so content defines the height now: tighten its own padding/gaps/type scale (percent / `--pu` units for figure-level padding), and on ≤640px hide a secondary decorative layer and/or stack more compactly.
2. **DO-ART-966** on `/problems/ecommerce-not-connected` (hero): 552x660 at 1440 → ≤ 630.
3. **DO-ART-904** on `/about` (625x670) and **DO-ART-831** on `/about` (1152x648) → each ≤ 630 at 1440. (About uses CSS-module classes in `app/d17-art.module.css`; 831 has an existing ≤640px block — leave phone behaviour as is.)

Commit `fix(art): bring 939/966/904/831 under 70svh at 1440, 939 phone fit (CR-WEB-075)`, append a "fix1" section to `.context/lane-reports/LANE-RESULT-web075-art-followup.md` (selectors changed, before/after estimate), commit, stop.
