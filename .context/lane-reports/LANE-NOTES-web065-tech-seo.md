# LANE NOTES: web065-tech-seo

## CR-WEB-065 Technical SEO + Core Web Vitals pass

**Worktree:** `web065-tech-seo` (branch `web065-tech-seo`, off `origin/staging`)
**Date:** 25 Sep 2026

### What was done (12 items, all committed)

1. **HTML lang** — `en` → `en-GB` in `app/layout.tsx:69`
2. **Double font loading** — Removed `@import url('https://fonts.googleapis.com/...')` from `app/design-system/colors_and_type.css:28`. Updated `--do-font-heading` and `--do-font-body` tokens to use `var(--font-outfit)` / `var(--font-dm-sans)` from next/font. Also removed Google Fonts references from `public/prototypes/three-layer-schematic.html` (not in scope but was a live reference).
3. **Sitemap lastmod** — Replaced all `new Date()` with `new Date(SITE_CONTENT_UPDATED)` using constant `'2026-09-25'`. Added `/resources/capacity-planner` and `/resources/seasonal-capacity` (monthly, priority 0.6).
4. **Missing og:image** — Created `lib/seo.ts` with `OG_IMAGE` and `OG_IMAGE_PATH` exports. Added `images` to openGraph and twitter on all 28 listed pages.
5. **Wrong og:url** — Added openGraph/twitter metadata with correct per-page URLs to `/tools/automation-roi-calculator`, `/tools/downtime-cost-calculator`, `/tools/rto-calculator`.
6. **Internal links to /fractional** — Replaced 2 instances in `app/locations/fractional-cto/[location]/page.tsx` (JSON-LD serviceUrl and url).
7. **SVG template bug** — Fixed `lib/coverage-map.ts:126`: changed single quotes to backticks on the "Base" label so `${wx + 16}` and `${wy + 64}` evaluate as expressions.
8. **Image optimization** — Wrote `scripts/optimise-images.mjs` using sharp. Created 116 WebP files (quality 78, max 1600px width). Updated 61 source files to reference .webp paths. Added `Cache-Control: public, max-age=2592000, stale-while-revalidate=86400` for `/images/*` in `next.config.ts`.
9. **LCP** — Added `priority` prop to `PhotoPiece` component; when true, uses `loading="eager"` and `fetchPriority="high"`. Applied to `/retained` page's first PhotoPiece. Homepage hero text has no CSS hiding — LCP delay is page weight, not hidden elements.
10. **Colour contrast** — Added `--do-text-cerulean: #176f86` (5.45:1 on Off-White) token. Changed `--do-text-muted` from `#5a7d8f` to `#486a7b`. Fixed logo "Ops" span, location page big numbers (sky-blue → cerulean-text), dark background text (opacity:0.4 → solid #a7b8c1), step numbers, and direct links (added underline).
11. **Heading order** — Footer column headings changed from `<h4>` to `<p className="f-col-title">`. Artwork labels (`.foot h3`, `.stations .st h4`) changed to `<b>` in both location templates and coverage-map.ts.
12. **Duplicate organisation schema** — Changed location page JSON-LD from `ProfessionalService` (full duplicate) to `Service` with `provider: { '@id': 'https://decodedops.co.uk/#organisation' }`.

### Verification

- `npx tsc --noEmit` — clean, 0 errors
- `npm run build` — passes, 173 static pages generated, all routes present

### Deviations from brief

- **Item 9 (LCP homepage)**: The brief asked to check for hidden hero elements. Investigation found none — the hero text section has no opacity:0, visibility:hidden, or animation-waiting-for-JS. D17 artwork animations use IntersectionObserver and start from visible resting state. The 6.4s LCP is page weight on mobile, not a CSS hiding issue.
- **Item 10 (contrast)**: Did not change every `var(--do-cerulean)` usage to `var(--do-text-cerulean)` across all d17 artwork CSS files — those are on dark backgrounds or as fills/borders where cerulean is appropriate. Focused on the specific instances called out in the brief (logo, location numbers, dark text, direct links).
- **Item 8 (images)**: Kept JPG originals in place per brief. Did not add width/height to images inside `dangerouslySetInnerHTML` strings that already had dimensions set.
