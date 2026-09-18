# Lane notes — artwork-refresh-batch-a

## Swaps completed

1. **`/about`** — Hero photo swapped from thread-spools.jpg to craig-blackman.jpg (1400x1500 portrait). The `.photo` class in `deco-page.module.css` has no fixed aspect-ratio, so portrait renders correctly without changes.

2. **`/sectors/awards-engraving`** — Replaced `<AwardsEngravingSchematic />` in hero `.photo` slot with `<img>` of cat-awards.jpg (900x1350). Schematic moved to a new `<section className="g-navy">` immediately after the hero. Added one-line shotCaption.

3. **`/sectors/labels-packaging`** — Same pattern: cat-packaging.jpg (900x1200) in hero, schematic moved to g-navy section after hero. Added shotCaption.

4. **`/sectors/print-promotional`** — Same pattern: cat-print.jpg (900x1200) in hero, schematic moved to g-navy section after hero. Added shotCaption.

5. **`/sectors/signs-graphics`** — Same pattern: cat-signage.jpg (900x600 landscape) in hero, schematic moved to g-navy section after hero. Added shotCaption.

6. **`/resources/decoded-method`** — Added cover image (decoded-method-cover.png, 1075x1521) using exact same markup/treatment as six-sigma page hero (rotated 2.5deg, xl shadow, rounded corners). Grid layout adjusted from `maxWidth: 720` centered to two-column grid matching six-sigma pattern.

7. **`/apps/data-app`** — Hero `<img>` swapped from data-app-dashboard.png (3200x3072) to data-app-hero.png (2160x1215). The old dashboard image was only used once, so it was relocated to the screens section alongside the catalogue and supplier-import exhibits.

8. **`/apps/commerce`** — Added prod-hivis.jpg (900x1348) as a second product-detail image alongside the existing commerce-pdp.png, wrapped in a grid--2 layout.

## Notes

- All images copied from design-systems source; none referenced at runtime.
- No assets exceed 300KB (largest: data-app-hero.png at 248KB).
- No unicode escapes introduced — grep returned 0 hits.
- Build: clean, no errors.
- No copy or text changes beyond the one-line shotCaptions on the 4 sector pages.
