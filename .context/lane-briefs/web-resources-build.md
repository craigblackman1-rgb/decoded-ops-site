# Lane brief: WO-INF-061 build · D17 artwork, batch "resources"

Worktree: this directory (off origin/staging, which has the live D17 system: `app/d17-global.css`, `components/D17Motion.tsx`,
and the sector pages as the reference implementation, e.g. `app/sectors/workwear/page.tsx`). Commit here only. Never push.

## Spec (approved by Craig 2026-09-24, blanket go)
Mockup sources: `.context/lane-briefs/d17-resources/` (page snippets *.html, `d17-art.css`, `d17-resources.css`) and mockup renders `*-1440.png`
= the Design Parity target. Image paths in the sources already point at committed files under `/images/d17/resources/`; don't add/move images.

## How to port (the proven sector pattern)
- Inject each art piece as raw HTML with `dangerouslySetInnerHTML` like app/sectors/*/page.tsx, class names unchanged.
- CSS: injected markup uses PLAIN class names, so its CSS must be GLOBAL. Create `app/d17-resources.css` with the full contents of `d17-resources.css`
  and import globally in each page: `import '@/app/d17-global.css'; import '@/app/d17-resources.css';`. NEVER a CSS module for injected markup.
  Prefix generic selectors that clash with app/globals.css (.card .wrap .btn .lede .eyebrow .kicker .grid, bare elements) with `.d17 `.
- Render `<D17Motion />` on each page as the sector pages do.
- Keep each live page's copy/sections and any interactive calculator/form UI and logic exactly as live; only add/replace art slots,
  plus the copy fixes below. Craig's photo must not appear. At 390px nothing may overflow horizontally.
- Example results shown in art are labelled 'Example' (keep that label).

## Pages
app/resources/page.tsx and app/resources/<slug>/page.tsx for 5-warning-signs, artwork-approval-playbook, audit-checklist, capacity-planner, decoded-method, erp-selection-playbook, seasonal-capacity, six-sigma, sop-template; app/tools/page.tsx and app/tools/<slug>/page.tsx for automation-roi-calculator, downtime-cost-calculator, ops-health-score, rto-calculator, should-i-replace-erp. Sources: <slug>.hero.html and <slug>.inline.html (+ reuse snippets if present); index pages have resources/tools index snippets.

## Copy fixes in the same pass
CR-WEB-055: ERP selection playbook: replace vendor names (OrderWise, Panta, DecoNetwork, ShirtWorks, Cin7) with descriptions by type (e.g. 'a generic print ERP', 'a decoration-specific order system'); Decoded Method example code TB-PR-001 -> PR-001; fix counts (audit checklist '20 questions' -> the real number of questions on the page; resources index 'Seven free resources' -> the real count listed; tools index 'six calculators' -> the real count); make Craig's story consistent (use 'eighteen years' everywhere it refers to that story) and remove unsourced percentages (SOP page 40%, audit checklist '3-5% of revenue' and '1-3% of stock value', artwork approval '3-5 rounds to 1') by rewording without numbers; replace em dashes on the downtime page with commas/full stops. Keep 'over 1,000 orders a day' (real).

FORBIDDEN: dev servers, browsers, npm run build/next build, any DB or .env access, pushing, touching pages outside this batch.
DONE: `npx tsc --noEmit` passes; `git grep -n "craig-blackman"` in the batch's dirs is empty; one commit
"feat(web): D17 artwork on resources pages (WO-INF-061)". Report per page: slots replaced, anything not ported and why.

## Retry note (2026-09-24 18:40) - the sources DO exist
A previous run wrongly reported `.context/lane-briefs/d17-resources/` missing. It exists, is committed, and holds 38 files
(`<slug>.hero.html`, `<slug>.inline.html`, `d17-art.css`, `d17-resources.css`, `*-1440.png`). Your glob/search tool may skip
dot-folders: list it with the shell (`ls .context/lane-briefs/d17-resources`) and read each file by its full path.
The CR-WEB-055 copy fixes are already committed (b44c3ab); do not redo them. Now do the D17 art port for every page and commit.
