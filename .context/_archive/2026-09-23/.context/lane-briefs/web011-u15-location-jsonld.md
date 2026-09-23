# Lane brief — WO-WEB-011 u15 / CR-WEB-047: fix invalid ProfessionalService JSON-LD on location pages

Semrush flags 28 invalid structured-data items across /locations/*: `serviceRadius` and `serviceType` are NOT valid properties of schema.org ProfessionalService (LocalBusiness). Fix the JSON-LD in exactly two files:

- app/locations/fractional-cto/[location]/page.tsx (JSON-LD block ~lines 85-107)
- app/locations/tech-audit/[location]/page.tsx (same block)

Required changes to the JSON object (keep everything else as-is):
1. Remove `serviceRadius` entirely.
2. Express the radius via `areaServed` as an array: keep the existing City object AND add `{ '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.8179, longitude: -0.3729 }, geoRadius: '160000' }` (metres, ~2 hours drive).
3. Remove `serviceType`. Replace with `hasOfferCatalog: { '@type': 'OfferCatalog', name: '<service name>', itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: '<service name>', url: 'https://decodedops.co.uk<serviceUrl>' } }] }` where service name/url are the values already used on that page ('Fractional CTO' → /fractional; the tech-audit page's own service name → its serviceUrl prop).
4. Link to the organisation: add `parentOrganization: { '@id': 'https://decodedops.co.uk/#organisation' }` (that @id exists in app/layout.tsx).
5. Keep `geo`, `address`, `telephone`, `url`, `name`, `description` unchanged.

Rules: only touch those two files (plus your LANE-RESULT/LANE-NOTES under .context/lanes/). No copy changes, no component changes, no `\uXXXX` escapes — write real characters. Run `npx tsc --noEmit` and `npx next lint` before committing; do NOT start a dev server or next start. Commit early with message "fix(seo): valid ProfessionalService JSON-LD on location pages (CR-WEB-047, WO-WEB-011 u15)". Only `git add` files you changed. Write .context/lanes/LANE-RESULT-web011-u15-location-jsonld.json with {unit:"u15",files:[...],tsc:"clean|errors",lint:"clean|errors",commit:"<hash>"} and stop.
