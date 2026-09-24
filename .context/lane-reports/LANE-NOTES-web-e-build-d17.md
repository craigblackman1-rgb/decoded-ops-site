# Lane notes: web-e-build-d17

## What was done
Ported D17 artwork pieces DO-ART-939 through DO-ART-958 into 9 pages across the apps and case studies sections, following the proven sector pages pattern (dangerouslySetInnerHTML, D17Motion, global CSS).

## Pages and artwork per page

| Page | Artwork pieces | Notes |
|---|---|---|
| `app/apps/page.tsx` | DO-ART-939 (hero), DO-ART-940 (architecture) | Replaced Plate component with D17 drawn plate |
| `app/apps/data-app/page.tsx` | DO-ART-941 (hero), DO-ART-942 (layer stack), DO-ART-943 (screens) | Replaced Image-based hero and Plate with D17 pieces |
| `app/apps/artwork-manager/page.tsx` | DO-ART-944 (hero), DO-ART-945 (flow) | Replaced Image and Plate with D17 pieces |
| `app/apps/commerce/page.tsx` | DO-ART-946 (hero), DO-ART-947 (capability), DO-ART-948 (custom work) | Replaced Plate and Image with D17 pieces |
| `app/case-studies/page.tsx` | DO-ART-949 (hero), DO-ART-950 (case index heads) | Replaced Plate/SVG hero with D17 pieces |
| `app/case-studies/case-study-01/page.tsx` | DO-ART-952 (hero), DO-ART-951 (measure) | Hanicks - ERP changed, data work carried on |
| `app/case-studies/case-study-02/page.tsx` | DO-ART-953 (hero), DO-ART-954 (measure) | Teamwear client - never named |
| `app/case-studies/case-study-03/page.tsx` | DO-ART-955 (hero), DO-ART-956 (architecture) | Workwear B2B - client not named |
| `app/case-studies/eternal-fitness/page.tsx` | DO-ART-957 (exhibit), DO-ART-958 (principle) | Consented naming kept |

## CR-WEB-053 applied
- WooCommerce → "an existing web platform" (apps page)
- Medusa → removed from commerce page (4 occurrences)
- Shopify → "a storefront replacement" (case-study-03)
- Cobra name → removed from case-study-03 alt text and captions (kept anonymous: "a workwear brand")
- Eternal Fitness naming → kept (consented)

## CSS
Created `app/d17-apps-cases.css` with full content from the mockup source `d17-apps-cases.css`. Contains styles for DO-ART-939–958 including the mini product window (.mw), approval history (.ver), storefront tiles (.tiles), and all responsive breakpoints.

## Verification
- `npx tsc --noEmit`: clean (0 errors)
- `git grep -nE "Khaos|TackleBag|Tackle Bag|named with permission|WooCommerce|Medusa|Shopify|Google Sheets" -- app/apps/ app/case-studies/`: 0 hits
- `git grep -n "craig-blackman" -- app/apps/ app/case-studies/`: 0 hits
