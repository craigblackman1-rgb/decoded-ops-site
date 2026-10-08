# Lane brief: CR-WEB-074 artwork de-dup + topic swaps (WO-INF-084)

Worktree of decoded-ops-website, branch `lane/web074-art-swaps`, based on origin/main e1194dd (includes the BUG-WEB-046 sizing fix). Work only here.

Hard rules:
- DO NOT start dev servers, `next start`, Playwright, or curl. Implement, run `npx tsc --noEmit`, commit, stop.
- Stage only files you changed (`git add <paths>`), never `git add -A`. Do NOT commit `data/route-slugs.json` or `.context/price-audit.md` if a script touches them.
- Commit after each numbered step: `feat(art): <what> (CR-WEB-074)`.
- Write plain UTF-8 characters in JSX text (e.g. `—`, `£`, `×`), NEVER `—`-style escapes inside JSX text.
- Never invent statistics. Every figure/label in new variants comes verbatim from the swap map section 6 (which quotes the page's own copy).
- Never reference `proof-approval.jpg`.
- Anchor every change on file + `data-no="DO-ART-nnn"` and re-grep; line numbers in the map are stale.

## The spec

Read in full: `.context/cr-web-074/artwork-swap-map.md` (sections 0–11; ignore 10 register delta and 12 open items — Claude handles those). Image files to install are in `.context/cr-web-074/swap-exports/` with `manifest.json` giving each file's target path.

## Steps

1. **Photos (own commit, must be separate so it can be reverted alone):** copy each export into `public/images/...` at the target path in the map's section 9 / manifest (new filenames, do not overwrite existing files). Repoint each page per section 5 and section 8 (money-page replacements). Do not delete old image files yet; list in the lane report which old files now have zero references (grep `app/ components/ data/`).
2. **DO-ART-918 home only (section 1):** replace on the 4 problem pages with the named pieces/new variants.
3. **DO-ART-718 keep on two (section 2):** replace on the other four.
4. **DO-ART-917 home only (section 3):** replace on data-scattered and erp-implementation-failure.
5. **New figure variants (section 6):** implement 1009, 1010, 1011 (and any other the map specifies) as variants of the existing D17 components, exact copy from section 6. Size them with `aspect-ratio`/percent units — NEVER `calc(N*var(--u))` for min-height/padding on the `.d17` figure itself (that was BUG-WEB-046). Their CSS must not exceed 70svh at 1440x900 (i.e. aim ≤ 600px tall at 1152 wide) and on ≤640px stack to ≤ ~800px.
6. **Renumbers (section 7):** systems-dont-talk and spreadsheet-addiction pieces get DO-ART-1012 / 1013 — change data-no, class names and give them their own CSS classes so they no longer inherit `.a918`/`.a917` rules (copy only the rules they actually need).
7. **Height polish:** home DO-ART-917 is 1152x798 (89% of a 900px viewport). Reduce to ≤ 630px tall at 1152 wide by tightening its own internal padding/gaps/type scale (percent/`--pu` units) — do not clip content, do not hide argument text. On ≤640px, DO-ART-917 is 873px and DO-ART-718 is 927px on a 844px phone: bring both ≤ 820px by hiding a secondary decorative layer or tightening spacing in the existing `@media (max-width:640px)` blocks.
8. 945 (section 4): no code change.

## Done when
- All steps committed, `npx tsc --noEmit` clean.
- `.context/lane-reports/LANE-RESULT-web074-art-swaps.md`: per step, files changed, each page → old piece/photo → new piece/photo, list of now-unreferenced old image files, anything in the map you could not implement and why.
