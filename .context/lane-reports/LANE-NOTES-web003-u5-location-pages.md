# LANE-NOTES: web003-u5-location-pages

## BUG-WEB-019 — 404s for london + manchester

**Root cause:** `data/locations.ts` contained 26 towns (all in West Sussex, East Sussex, Surrey). London and Manchester were not present. Both `[location]/page.tsx` routes call `getLocation(slug)` which does `locations.find(l => l.slug === slug)` — when no match is found, `notFound()` is called, producing the 404.

**Fix:** Added `london` (Greater London) and `manchester` (Greater Manchester) to the locations array. Expanded the `county` type union from three to five values. Updated both hub pages (`fractional-cto/page.tsx`, `tech-audit/page.tsx`) to include the two new counties in their iteration arrays.

**Verification:** Ran `npx tsx -e "import {getLocation} from './data/locations'; ..."` — `getLocation('london')` returns `{name: 'London', county: 'Greater London'}`, `getLocation('manchester')` returns `{name: 'Manchester', county: 'Greater Manchester'}`. TypeScript compiles clean. Since node_modules were not present at start, installed deps and ran `npx tsc --noEmit` successfully. Cannot verify via HTTP (no dev server running, no curl to production), but the data-layer check confirms the slug lookup works for both towns on both route paths.

## CR-WEB-016 — Per-town differentiation

**Approach:** Added three new fields to `LocationData` interface: `nearbyAreas`, `businessSectors`, `regionalChallenge`. All 29 locations (27 existing + 2 new) carry genuine per-town data in these fields.

**What changed on each page:**
- **Hero section:** Business sector tags now appear below the county pill as small pill badges
- **Local context section:** A new italic `regionalChallenge` paragraph appears after the existing `localContext`, explaining the specific operational technology challenge for that town/region
- **Nearby locations section:** Nearby towns are listed above the "also serving" counties line

**Content quality note:** Every `localContext`, `regionalChallenge`, and `businessSectors` entry was written individually for each town — no templated filler. The `regionalChallenge` field specifically ties each town's business landscape to Decoded Ops' services (garment decoration, print, embroidery, workwear, promo merchandise).

**Total pages:** 29 towns × 2 services = 58 location pages + 2 hub pages = 60 location routes.

## What was NOT changed
- No pain points or whatIdo items modified (these remain per-service, which is correct — the problems are service-specific, not town-specific)
- No blog, case study, problem, sector, or tool pages touched
- No sitemap changes needed (sitemap reads from the same `locations` array, so new entries auto-appear)
- No metadata changes (generateMetadata already generates per-town titles/descriptions from location data)
