# Lane brief — WO-INF-061 u2 · Batch A · CR-WEB-030 zero-production photo swaps

You are in a worktree branched off `origin/staging`. Commit early and often. Do NOT run a dev
server, Playwright, or any browser. Do NOT touch copy. Do NOT edit ds-marketing.css / ds-plates.css.
Do NOT push — stop when committed and write `.context/lane-reports/LANE-RESULT.json`.

Source assets (copy into the repo, do not reference the design-systems path at runtime):
- D:\apps\design-systems\decoded-marketing\assets\craig-blackman.jpg (1400x1500)
- D:\apps\design-systems\decoded-marketing\assets\commerce\cat-awards.jpg (900x1350)
- D:\apps\design-systems\decoded-marketing\assets\commerce\cat-packaging.jpg (900x1200)
- D:\apps\design-systems\decoded-marketing\assets\commerce\cat-print.jpg (900x1200)
- D:\apps\design-systems\decoded-marketing\assets\commerce\cat-signage.jpg (900x600)
- D:\apps\design-systems\decoded-marketing\assets\commerce\prod-hivis.jpg (900x1348)
- D:\apps\design-systems\decoded-marketing\assets\screens\data-app-hero.png (2160x1215)
Copy cat-*.jpg to public/images/sectors/, craig-blackman.jpg to public/images/, prod-hivis.jpg to
public/images/apps/, data-app-hero.png to public/images/apps/. Optimise nothing by hand; if a file is
>300 KB, note it in LANE-RESULT.json.

## Swaps (exactly these eight)

1. `/about` (app/about/page.tsx ~line 50): replace `/images/sectors/thread-spools.jpg` with
   `/images/craig-blackman.jpg`, width 1400 height 1500. Alt: "Craig Blackman, founder of Decoded Ops,
   photographed in a garment decoration workshop". Portrait ratio — check the containing element does
   not force a landscape aspect; if it does, set the wrapper to `aspect-ratio: auto` like the sector
   pages do. Do not change any text.

2–5. Four sector pages that currently render a `<XxxSchematic />` inside the hero `.photo` slot
   (app/sectors/awards-engraving, labels-packaging, print-promotional, signs-graphics — see
   `styles.photo` around line 88/109). Make each hero match the photographed pattern used by
   app/sectors/workwear/page.tsx (a photo + `shotCaption` figure in the `.photo` slot). Concretely:
   - put the photo in the hero `.photo` slot with `<img>` (width/height as listed above, `loading="eager"`
     for the hero, descriptive page-specific alt text — real sentence, not a filename);
   - move the existing `<XxxSchematic />` to a new section immediately after the hero section, wrapped in
     `<section className="g-navy"><div className="wrap">…</div></section>` matching the plate sections
     already on those pages, so no schematic is lost;
   - awards → cat-awards.jpg; labels-packaging → cat-packaging.jpg; print-promotional → cat-print.jpg;
     signs-graphics → cat-signage.jpg (landscape; the slot already handles mixed ratios, cat-promo.jpg is
     landscape today).
   - Write a one-line shotCaption per page in the same voice as the existing ones (e.g. workwear,
     promotional-merchandise). That is the ONLY new text permitted.

6. `/resources/decoded-method` (app/resources/decoded-method/page.tsx): add the cover image
   `/images/decoded-method-cover.png` (1075x1521, already in public/images) using the exact same
   markup/treatment as the six-sigma cover in app/resources/six-sigma/page.tsx ~line 73-76, in the
   equivalent position on this page. Alt: "The Decoded Method guide, cover".

7. `/apps/data-app` (app/apps/data-app/page.tsx ~line 46): the hero `<img>` becomes
   `/images/apps/data-app-hero.png` width 2160 height 1215, alt "Decoded Data App: product catalogue
   dashboard with supplier feeds and channel status". Keep `data-app-dashboard.png` on the page as the
   inline exhibit further down (if it is only used once today, add it where the other screens are
   listed, same markup pattern as its siblings).

8. `/apps/commerce` (app/apps/commerce/page.tsx): add `/images/apps/prod-hivis.jpg` (900x1348) as a
   second product-detail image alongside the existing commerce-pdp.png exhibit, same figure markup as
   its sibling. Alt: "Hi-vis workwear product detail as sold through a Decoded Commerce trade
   storefront".

## Rules
- Real characters in JSX text — never `\uXXXX` escapes. Before committing: `grep -rn '\u[0-9a-fA-F]\{4\}' app components` must return nothing new.
- Every `<img>` has width, height and alt. Use the same img/Image convention the file already uses.
- `npm run build` must be green. Run it; paste the tail into LANE-RESULT.json.
- Scope: only the 8 files above + public/images additions. `git diff --stat origin/staging` must show nothing else.
- Commit message: `feat(CR-WEB-030): batch A photo swaps — about portrait, 4 sector heros, decoded-method cover, data-app hero, commerce product photo`
- LANE-RESULT.json: { unit: "WO-INF-061 u2", status, files_changed, build_tail, oversize_assets, notes }.
