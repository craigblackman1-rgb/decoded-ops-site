# Lane notes: web-h-build-d17-fix1

## What was done

Two bugs from the D17 production build were fixed, matching the mockup files in `.context/lane-briefs/d17-locations/`.

### 1. Town pages hero (WO-INF-061, CR-WEB-054)

**Bug:** At 390px viewport the page was 521-555px wide. The hero art sat in a two-column grid whose second column collapsed to 36px while the figure overflowed.

**Fix:** Replaced the 2-column `gridTemplateColumns: '1fr 1fr'` layout in `LocationPage.tsx` with a single-column structure matching the mockup: centered text in `.hero-center`, full-width art below in `.hero-art`. Added CSS rules for `.hero-center` centering, `.hero-art` max-width (880px), and the `.hero-cta` flex layout.

Files changed: `components/LocationPage.tsx` (hero section rewrite), `app/d17-locations.css` (added .hero-center, .hero-art rules).

### 2. Privacy + cookies prose (WO-INF-061, CR-WEB-054)

**Bug:** Headings rendered at ~36px, lists had no bullets, spacing differed from the mockup.

**Fix:** Ported `.prose` typography rules from `privacy.page-style.css` and `cookies.page-style.css` into `app/d17-locations.css` as global rules scoped under `.prose`. Includes: h2 20px/700, h3 16px/700, p in secondary colour with relaxed line-height, ul with disc bullets and 22px left padding, li margin-bottom 6px, container max-width 72ch centred, clause sections 36px margin-bottom.

The privacy and cookies page TSX files already had correct `.prose` class usage — no markup changes needed.

### Minor deviation

Cookies page mockup specifies `margin-bottom: 32px` for `.prose section` while privacy specifies 36px. Used 36px for both to keep the legal pages uniform. The 4px difference is visually negligible.

### Unused import cleanup

Removed `MapPin` from the lucide-react import in `LocationPage.tsx` — it was no longer referenced after the hero rewrite.
