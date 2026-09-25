# LANE NOTES: web065-fix4

## What changed

### 1. Muted token fix
`app/globals.css:42` — `--do-text-muted` changed from `#486a7b` to `#3e6274` to match the design system canonical value at `app/design-system/colors_and_type.css:179`.

### 2. Sector page badge contrast fix
All 10 sector pages had numbered badges using `var(--do-text-cerulean)` (`#176f86`, 1.58:1) inside `className="g-navy"` dark sections (#124e66 background). Changed badge `color` to `var(--do-sky-blue)` (`#8ECAE6`, 5.1:1 on #124e66).

Files changed:
- app/sectors/awards-engraving/page.tsx:208
- app/sectors/garment-decoration/page.tsx:203
- app/sectors/labels-packaging/page.tsx:245
- app/sectors/operations-consultant-print-embroidery/page.tsx:196
- app/sectors/print-promotional/page.tsx:272
- app/sectors/promotional-merchandise/page.tsx:220
- app/sectors/schoolwear/page.tsx:206,257 (two badges)
- app/sectors/signs-graphics/page.tsx:218
- app/sectors/teamwear-clubwear/page.tsx:212
- app/sectors/workwear/page.tsx:209

## Scope expansion

The brief listed 5 sector files. All 10 sector pages were modified by da21301 and had the same numbered badge pattern on g-navy dark backgrounds. Fixed all 10 to avoid leaving 5 regressions unpatched.

## Other do-text-cerulean instances audited

Every `var(--do-text-cerulean)` instance introduced by da21301 was checked:
- **Sector page ArrowRight icons** (CROSS-LINKS sections): on g-tint light background — OK
- **LocationPage.tsx**: h1 accent, card labels, numbered badge — all on g-off/g-tint light backgrounds — OK
- **BlogList.tsx**: category badges on light card backgrounds — OK
- **SeasonalCapacityCalculator.tsx**: "Reset to flat" button on light background — OK
- **globals.css**: `.do-blog-prose a` and `.vid-len` — light backgrounds — OK
- **Resource pages**: CheckCircle2 icons and links — light backgrounds — OK
- **Pricing/apps pages**: paragraph links — light backgrounds — OK
- **d17 CSS files**: artwork plate label styles — these are artwork-specific CSS applied to plate elements with their own rendering context; not marketing-site dark sections — left as-is
- **design-system marketing-pages-extra.css**: `.log-row .go` — light background — OK
- **SectorPageDS.module.css**: `.featureMark` — light tinted background — OK

## Verification
- `npx tsc --noEmit`: clean
- `npm run build`: clean (173 pages, 0 errors)
