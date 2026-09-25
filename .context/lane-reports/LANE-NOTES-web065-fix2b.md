# LANE NOTES: web065-fix2b — cerulean text contrast fix

## Summary

Replaced `var(--do-cerulean)` (#219EBC, ~3:1 on Off-White) with `var(--do-text-cerulean)` (#176f86, 5.45:1) for all text on light backgrounds. Also fixed `#a7b8c1` → `#c3d0d6` in LocationPage and moved analytics scripts to lazyOnload.

## Changes by area

### Cerulean text → --do-text-cerulean

- **globals.css**: `.do-blog-prose a`, `.vid-len` text color, new `.text-cerulean` Tailwind utility class mapping to `var(--do-text-cerulean)`
- **d17 CSS files** (6 files): All `color:var(--do-cerulean)` text instances in d17-global, d17-apps-cases, d17-art, d17-locations, d17-problems, d17-resources. SVG icons and background/border uses left unchanged.
- **10 sector pages**: Numbered badge spans and ArrowRight icon colors
- **6 resource pages**: CheckCircle2/Check icon colors and link text
- **LocationPage.tsx**: h1 accent span, card labels ("From Worthing", town name), "view all locations" link
- **Pricing/apps pages**: Paragraph link text (pricing page, small business services, full pricing, how I build)
- **Locations pages**: "Or book a call directly" links, MapPin and ArrowRight icon colors
- **Other components**: BlogList badge text, SectorPageDS featureMark, SeasonalCapacityCalculator reset button, ToolLeadCapture link

### Hard-coded greys

- **LocationPage.tsx**: `#a7b8c1` → `#c3d0d6` (both step number and paragraph text on dark cards)
- **#5c7d8c, #678391, #486a7b**: Not present as hardcoded text values in the codebase (already tokenised or previously fixed)

### Analytics scripts (layout.tsx)

- GA4 gtag.js `<Script>`: `strategy="afterInteractive"` → `strategy="lazyOnload"`
- GA4 gtag-init `<Script>`: `strategy="afterInteractive"` → `strategy="lazyOnload"`
- Ahrefs analytics `<Script>`: `strategy="afterInteractive"` → `strategy="lazyOnload"`

## What was left unchanged

- Icons using `color: 'var(--do-cerulean)'` on light backgrounds (Mail, Phone, ArrowRight in blog, SVGs in d17) — brief says icons stay cerulean
- Background, border, fill, stroke, outline uses of cerulean
- `text-decoration-color: var(--do-cerulean)` (homepage `.go` underline)
- Client portal `#5a7d8f` instances — part of client portal styling, not flagged by Lighthouse
- Data properties using `#219EBC` (chart/roadmap/propose rendering data)

## Verification

- `npx tsc --noEmit`: clean, 0 errors
- `npm run build`: clean, 173 pages generated, 0 errors
- Escape grep: 0 remaining `var(--do-cerulean)` text-on-light instances (all remaining are icons/backgrounds/borders/data)
