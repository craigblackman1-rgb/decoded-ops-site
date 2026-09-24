# Lane notes: web-h-build-d17

## What was done

Ported D17 artwork to the locations pages batch: both [location] pages (29 towns each), both hub pages, privacy, and cookies.

### Files created
- `app/d17-locations.css` — full copy of `d17-locations-legal.css` from the mockup sources. No selector clashes with `globals.css` were found, so no `.d17` prefixing was needed.
- `lib/coverage-map.ts` — TypeScript port of `genmap.py`. Generates the DO-ART-1002 coverage map SVG with per-town highlighting, pin position, and full figure wrapper. Exports `getCoverageMapHtml(slug, town, county, travel, service)`.

### Files modified
- `components/LocationPage.tsx` — added optional props: `heroArtHtml`, `coverageMapHtml`, `stepsArtHtml`, `trustLine`. When `heroArtHtml` is provided, it replaces the `SystemsDisconnectedGraphic` in the hero. `coverageMapHtml` renders at the bottom of the local context section. `stepsArtHtml` renders below the steps grid in the How I Help section. The trust list's last item uses `trustLine` when provided.
- `app/locations/fractional-cto/[location]/page.tsx` — imports D17 CSS + D17Motion, generates DO-ART-1001 hero HTML (monthly review pack over workshop floor, town substituted into `{{town}}`), DO-ART-1002 coverage map via `getCoverageMapHtml`, DO-ART-1003 journey poster. Sets location-aware trust line.
- `app/locations/tech-audit/[location]/page.tsx` — same pattern with DO-ART-1004 (findings report + roadmap over print room), DO-ART-1002, DO-ART-1005 (day plan drawn plate). Travel time injected into the day plan label.
- `app/locations/fractional-cto/page.tsx` — added D17 CSS imports and D17Motion.
- `app/locations/tech-audit/page.tsx` — added D17 CSS imports and D17Motion.
- `app/privacy/page.tsx` — rewritten with DO-ART-1006 (what I keep cards) above the legal text, prose body styling matching the mockup.
- `app/cookies/page.tsx` — rewritten with DO-ART-1007 (cookie preference panel) above the legal text, prose body styling matching the mockup.
- `data/locations.ts` — CR-WEB-054: removed all third-party company names from `localFact` fields (12 edits across Chichester, Worthing, Horsham, Bognor Regis, Burgess Hill, Brighton, Lewes, Bexhill-on-Sea, Guildford, Woking, Leatherhead, Littlehampton). Reworded to industry/landmark descriptions without company names.

### CR-WEB-054 copy fixes
- Third-party company names removed: Rolls-Royce, Fresh Egg, Novartis, Butlin's, Roche, American Express, Harvey's Brewery, Hastings Direct, Bullfrog Productions, McLaren, Unilever/ExxonMobil/CGI, Body Shop.
- Tech audit price was already 'From £1,500' everywhere — no £395 found.
- Trust line: implemented via `trustLine` prop. For Sussex/Surrey towns: "Based in the South East, on-site across Sussex and Surrey". For Greater London/Greater Manchester: "On-site by arrangement, remote across the UK".

### What was NOT ported
- The hub pages (fractional-cto/page.tsx, tech-audit/page.tsx) are index pages listing towns. They received D17 CSS imports and D17Motion but no inline artwork — the mockups don't show specific art for these index views. The [location] pages carry the full art suite.

### Verification
- `npx tsc --noEmit` — clean, 0 errors
- `git grep -n "craig-blackman"` in batch dirs — 0 hits
- No `£395` found in any `.tsx` file
