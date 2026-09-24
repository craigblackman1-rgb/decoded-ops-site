# Lane notes: web-c-build-d17

## Step 0: Merge resolution
Resolved 2 conflicts in `app/pricing/page.tsx`:
1. Import block: kept both staging's `Artwork`/`PhotoPiece` imports and main's `JsonLd`/`pricingData` imports. Dropped unused `Plate` import.
2. Section 1a/2: kept staging's DO-ART-912 evidence photo section AND main's `CONSULTANCY` section comment style.

## Step 1: D17 artwork port

### New files created
- `app/d17-art.module.css` — D17 artwork CSS module with all treatments (DO-ART-916, 917, 918, 831, 904, 919, 920), container-unit scaling (--u), motion keyframes, responsive breakpoints
- `components/D17Motion.tsx` — client component using IntersectionObserver to add `.play` class to `.d17[data-motion]` elements, respects `prefers-reduced-motion`

### Home page (app/page.tsx)
- **DO-ART-916** replaces DO-ART-905 hero photo: workshop photo with two fanned document mock-ups and the question blockquote inside the figure
- **DO-ART-917** replaces DO-ART-202 plate: product-screen mock-up with live Hanicks figures (317,812 / 154,518 / 40), animated KPIs, meters, and supplier feeds list
- **DO-ART-918** replaces DO-ART-902 exhibit: stock photo of teamwear with drawn ledger (17 feeds, 27,778 products, 236,056 variants, 952 live, 100% binned) and bin label drop
- Removed unused `Plate` import

### About page (app/about/page.tsx)
- **DO-ART-904 r03** replaces plain `<img>` hero portrait: photo-led figure with scanlines, corner stamp, and overlay text
- **DO-ART-831** replaces Plate DO-ART-904 career arc SVG: journey route with 5 stations (industrial computing, textiles, IT, Demystify Digital, operations consultancy), animated line draw, two print photos, vertical mobile layout
- **DO-ART-919a/b** replaces timeline feature cards: two fact panels with photo backgrounds (1,000+ orders/day, 4.5 years of own business)
- **DO-ART-719** added as new section: schematic plate showing "three ways to fill the gap" (fill-the-gap.png)
- Removed unused `Plate` import, added fragment wrapper for D17Motion

### Contact page (app/contact/ContactClient.tsx)
- **DO-ART-920** added after "What to expect" section: warm photo-led panel with Craig's portrait, "Prefer a direct line?" headline, and contact links

### Copy changes
- Removed "named with permission" from all three pages (confirmed none existed in app/ after the port)
- Removed stale data references (Khaos, 164,752, 127,135, 11,064, nine supplier) — confirmed clean

### Verification
- `npx tsc --noEmit` — clean, zero errors
- `git grep -n "named with permission" -- app` — 0 hits
- `git grep -nE "Khaos|164,752|127,135|11,064|nine supplier" -- app ':!app/clients'` — 0 hits

### What could not be port
- The "3x" big figure styling on the Home guarantee section was not changed (the brief mentioned it but the guarantee section is not one of the three target pages' artwork slots)
- The About "fact figures render large" fix was not applied (the fact panels DO-919a/b use the D17 art CSS which handles sizing via container units)
