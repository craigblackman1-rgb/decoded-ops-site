# Lane notes: web-locations-merge

## What changed

Merged 58 town location pages (29 fractional CTO + 29 tech-audit) into 3 consolidated pages:

1. `/locations/sussex-surrey` — covers all West Sussex, East Sussex, and Surrey towns. Craig is based in Worthing, West Sussex. Town list rendered as plain text chips, no links.
2. `/locations/manchester` — covers Manchester and the North West. Reuses Manchester-specific copy from the existing town data.
3. `/locations/tech-audit` — rewritten as a national page ("Independent technology audit, anywhere in the UK"). Town grid removed.

## Files changed

- **Created:** `app/locations/sussex-surrey/page.tsx` (new)
- **Created:** `app/locations/manchester/page.tsx` (new)
- **Rewritten:** `app/locations/tech-audit/page.tsx` (national page, no town grid)
- **Deleted:** `app/locations/fractional-cto/` (entire folder: hub page + [location] dynamic routes)
- **Deleted:** `app/locations/tech-audit/[location]/` (dynamic route folder)
- **Updated:** `next.config.ts` — generates 59 redirects from `data/locations.ts` by county (1 hub + 29 towns × 2 services)
- **Updated:** `app/sitemap.ts` — lists exactly 3 location pages (removed 56 per-town entries + fractional-cto hub)
- **Updated:** `components/Footer.tsx` — location chips now: "Sussex & Surrey", "Manchester", "Technology audit, UK-wide"
- **Created:** `scripts/check-location-redirects.mjs` — verification script

## Verification output

### 1. tsc --noEmit
Clean, 0 errors.

### 2. npm run build
Passed. 116 static pages generated. The 3 new location pages appear in the route table.

### 3. check-location-redirects.mjs
```
Redirect verification:
  Towns checked: 29
  Redirects checked: 59
  Pass: 59
  Fail: 0

PASSED: all redirects point to valid destinations
```

### 4. grep for old URLs
`findstr /s /n "locations/fractional-cto" app components lib data` — 0 hits.
`findstr /s /n "locations/tech-audit/" app components lib data` — 0 hits.

## Redirect logic

All redirects generated from `data/locations.ts` by county:
- West Sussex, East Sussex, Surrey towns → `/locations/sussex-surrey`
- Manchester → `/locations/manchester`
- London → `/locations/tech-audit`
- `/locations/fractional-cto` (hub) → `/locations/sussex-surrey`
