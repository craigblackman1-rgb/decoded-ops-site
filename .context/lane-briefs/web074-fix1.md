# Lane brief: CR-WEB-074 fix1 — phone fit for DO-ART-943 and DO-ART-917

Worktree of decoded-ops-website, branch `lane/web074-art-swaps`. Work only here.
DO NOT start dev servers, Playwright or curl. Stage only files you change (never `git add -A`); never commit `data/route-slugs.json` or `.context/price-audit.md`.

## 1. DO-ART-943 on phones (≤640px)
Rendered by `lib/d17-figures/a943.ts` + rules in `app/d17-apps-cases.css` (`.a943`). Used on `/apps/works` and `/problems/inventory-blind`.
Measured at 390x844: figure is 342 wide x 1152-1174px tall (137% of the screen). The top "catalogue" product card is cropped off the LEFT edge (it is absolutely positioned / offset and `.d17` clips with overflow:hidden), so the card's left text is cut ("ARENT PROD…", "UÉ", "VY M").
Fix in the existing/added `@media (max-width:640px)` block for `.a943`:
- make the catalogue card sit fully inside the figure (static/relative position, `width:100%`, `left:auto; right:auto; transform:none`), no cropping;
- reduce the stack so the whole figure is ≤ 800px tall at 342px wide: e.g. hide the secondary phone mock-up OR shrink it (`width` ~60%, centred), and tighten paddings/gaps. Keep the caption list (Dashboard / Catalogue view / Supplier import) and the mark line.
- Do not use `calc(N*var(--u))` for min-height/padding on the `.d17` figure itself.

## 2. DO-ART-917 home, phones
`app/d17-art.module.css`, the ≤640px block you added: figure is 342x859 on a 844px phone; get it ≤ 800px by tightening spacing further or hiding one decorative element (keep the headline, the three KPI numbers and the mark line).

## 3. Repo hygiene
`git rm -r --cached .context/cr-web-074/swap-exports` and delete that folder from the worktree (the images already live in `public/images/`; the duplicate 2.4 MB copy must not ship). Keep `artwork-swap-map.md` and the helper .mjs scripts.

Then `npx tsc --noEmit`, commit `fix(art): phone fit for DO-ART-943/917, drop duplicate swap exports (CR-WEB-074)`, append a "fix1" section to `.context/lane-reports/LANE-NOTES-web074-art-swaps.md`, commit, stop.
