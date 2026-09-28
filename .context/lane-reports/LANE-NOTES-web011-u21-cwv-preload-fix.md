# Lane notes: web011-u21-cwv-preload-fix

## What was done

### 1. Preload scoping fix (Footer logo)

The Header logo (`Header.tsx:223`) already had `prefetch={false}` on its Link to `/`. The Footer logo (`Footer.tsx:111`) did not — it was a plain `<Link className="logo" href="/">` without the prop. Since the Footer renders on every page, this caused Next.js to prefetch the homepage route on every page load, pulling in homepage image preload hints site-wide.

**Fix:** Added `prefetch={false}` to the Footer logo Link.

### 2. Hero image srcset sizing

Three hero images on the homepage were being served at their original resolution regardless of viewport:

| Image | Original size | Displayed at | Original file size |
|---|---|---|---|
| hero-workshop.webp | 1600×2397 | 1100×1224 | 164 KB |
| thread-spools.webp | 1600×1067 | 1300×867 | 75 KB |
| cat-workwear.webp | 900×596 | 900×596 | 30 KB |

Generated 800w and 1200w webp variants using sharp (quality 80), then added `srcSet` and `sizes` attributes to the `<img>` tags. The browser now picks the smallest variant that covers the rendered size:

- hero-workshop: 164KB → 72KB (800w) / 109KB (1200w)
- thread-spools: 75KB → 28KB (800w) / 43KB (1200w)
- cat-workwear: unchanged (already at rendered size)

### Why not Next.js `<Image>`

The homepage hero images are inside D17 artwork `<figure>` elements rendered via CSS Modules (`d17-art.module.css`). These are plain `<img>` tags inside hand-drawn composition containers with absolute positioning, tints, scanlines, and document overlays. Converting to `<Image>` would require restructuring the entire D17 artwork system — far beyond the scope of this CWV fix. Plain `<img>` with `srcset`/`sizes` is the correct approach here.

## Files changed

- `components/Footer.tsx` — added `prefetch={false}` to logo Link
- `app/page.tsx` — added `srcSet`/`sizes` to hero-workshop and thread-spools `<img>` tags
- `public/images/d17/hero-workshop-800.webp` — new 800w variant (72 KB)
- `public/images/d17/hero-workshop-1200.webp` — new 1200w variant (109 KB)
- `public/images/d17/thread-spools-800.webp` — new 800w variant (28 KB)
- `public/images/d17/thread-spools-1200.webp` — new 1200w variant (43 KB)

## Verification

- `tsc` not run (no node_modules pre-install; changes are image tags and a single prop addition)
- No test suite for marketing pages
- `escapeGrep`: 0 hits (no accidental pattern leakage)
- Live verification: Claude to check Lighthouse/perf score on decodedops.co.uk after deploy — target LCP <3.3s, score >=90 on /, /sop-template, /locations

## Deviations

- cat-workwear.webp already 900×596 (the exact rendered width/height) — no srcset variant generated or needed
