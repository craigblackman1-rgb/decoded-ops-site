# Lane Notes — ops022-u2-pricing-v11

## What changed

### app/pricing/page.tsx — full rebuild
- Imports `data/pricing-v11.json` and renders all figures from it
- Hero: "Start with the audit" (kept as-is)
- Consultancy: 4-column table (Service / What it is / From / Minimum) driven by `consultancy[]` array
- Guarantee plate DO-ART-203 kept intact
- Small business: single Clarity Check £595 card with "from" prices for the four services
- Systems: kept "no price list" copy, reworded to "priced at the audit — buy outright or lease to own over 36–60 months"
- CTA strip: "Get the price pack" / "Two pages: how I price, and what I built. Sent the same day."
- JSON-LD: Offer entries for Clarity Check (595) and Clarity Audit (1500) only
- Metadata: description contains only "from £1,500"

### app/small-business/page.tsx — reduced
- Removed AI Readiness Check, Quarterly Sprint, and Retained Entry/Mid/Full tier cards
- Retained now shows "from £950/mo" with generic features (no session tiers)
- Deliver shows "from £1,200/mo", Transform "from £1,500/mo"
- JSON-LD Offers: only Clarity Check 595
- FAQ updated to remove references to "sprint" and "3-month minimum"
- Metadata: "under £1m" instead of "under £500k"

### components/Header.tsx
- Small-business mega menu: 5 items (Clarity Check, Deliver, Transform, Retained, Clarity Audit) with pricing sub-copy
- Removed AI Readiness Check and Quarterly Sprint from small-business and proof-tools menus
- Panel note: "under £1m" instead of "under £500k"
- "Bigger than £1m?" instead of "Bigger than £500k?"

### public/llms.txt
- Added Clarity Check £595 entry
- Updated Deliver/Transform/Retained with "from" prices and minimum terms
- Software: "priced at the audit — buy outright or lease to own over 36–60 months"
- Removed "pricing by turnover band" and "AI Readiness Check" tool link

### app/tools/page.tsx
- Removed AI Readiness Check from tools array (5 tools, not 6)
- Updated heading "Five calculators" from "Six calculators"
- SVG plate DO-ART-210 left intact (published artwork)

### data/route-slugs.json
- Removed "ai-readiness-check" from tools array (no longer in sitemap)

### .context/price-audit.mjs
- Extended --check: loads pricing-v11.json, scans for forbidden_public values, scans for forbidden words
- ALLOWED_FILES expanded to include small-business, Header, llms.txt
- Forbidden words: vest, Route A/B, day rate, Quarterly Sprint, Discovery Day, AI Readiness Check
- AI Readiness Check allowed in free tool pages only

## Deliberately left
- `app/tools/ai-readiness-check/` — free tool pages kept (standalone free resource, not the retired paid product)
- `components/schematics/ClarityAuditSchematic.tsx` — "AI Readiness" label in schematic (concept, not product)
- `app/clarity/page.tsx` — "AI readiness" mentions (feature of the audit, not the product)
- `app/problems/ai-paralysis/page.tsx` — problem page about AI paralysis (not a product mention)
- `app/clients/[clientId]/data/*` — client proposal files with "Discovery Day" (private, not public-facing)
- `docs/content-audit.md` — documentation, not public-facing
- `.context/` files — not public-facing
