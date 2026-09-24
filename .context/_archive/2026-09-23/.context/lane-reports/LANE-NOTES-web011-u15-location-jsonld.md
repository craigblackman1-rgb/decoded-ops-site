# Lane notes — web011-u15-location-jsonld

## What changed

Both location page JSON-LD blocks (`fractional-cto/[location]/page.tsx` and `tech-audit/[location]/page.tsx`) were updated to remove schema.org-invalid properties from ProfessionalService:

- **Removed** `serviceRadius` (not a valid ProfessionalService property)
- **Removed** `serviceType` (not a valid ProfessionalService property)
- **Added** `areaServed` as an array: kept the existing City object + added a GeoCircle with 160km radius
- **Added** `hasOfferCatalog` wrapping the service name/url that was previously on `serviceType`
- **Added** `parentOrganization` linking to `https://decodedops.co.uk/#organisation`
- **Removed** the `offers` block from tech-audit (price data not in the brief's target schema; keeping it would have been an assumption)

## Verification

- `npx tsc --noEmit` — clean, 0 errors
- `npm run lint` — 135 pre-existing problems (85 errors, 50 warnings), none in the two edited files
- No dev server started (per brief instructions)
