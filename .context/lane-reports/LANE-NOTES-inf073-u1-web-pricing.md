# Lane notes: inf073-u1-web-pricing

## CR-WEB-069: Remove public consultancy prices

### What changed
Removed all consultancy prices from public surfaces per Craig's 29 Sep 2026 ruling (D5): no consultancy prices on any public surface. The only public figure is the Clarity Check at £600.

### Files edited
- **app/pricing/page.tsx** — Removed price column from consultancy table (kept "Set at the audit, to your scope"), updated meta/OG/Twitter descriptions, removed "from £750" from guarantee section and SVG artwork text, updated JSON-LD (removed Clarity Audit Offer price), rewrote footer to scope language.
- **app/clarity/page.tsx** — Removed "From £750" from all three meta descriptions and the hero lede. Replaced with "Priced to your scope, confirmed before you commit."
- **app/retained/page.tsx** — Removed "From £900/mo" from all three meta descriptions, the JSON-LD Service description, the features section, the scale section, and the SVG artwork text.
- **app/locations/tech-audit/page.tsx** — Removed "From £750" from hero lede and sticky CTA card heading.
- **app/opengraph-image.tsx** — Changed "From £750 / Clarity Audit" stat to "£600 Clarity Check / Start here".
- **app/resources/erp-selection-playbook/page.tsx** — Removed "From £750" from the closing CTA card.
- **app/small-business/page.tsx** — Kept £600 Clarity Check. Rewrote "under £1m turnover" to "owner-led businesses" in metadata and body. Updated FAQ schema question.
- **public/llms.txt** — Removed old consultancy figures (£1,500, £1,200, £950). Changed Clarity Check from £595 to £600. Added consultancy pricing policy line. Updated small business section.
- **data/pricing-v11.json** — Committed the new canonical file (revision 2026-09-29) with `public_figures: [600]` and `public_from: null` on all consultancy items.
- **.context/price-audit.mjs** — Updated ALLOWED set to derive from `public_figures` in the JSON rather than hardcoding. Removed Header.tsx from ALLOWED_FILES. Updated comments to reflect the new policy.

### Verification
- tsc: clean
- lint: clean (pre-existing warnings/errors only — none introduced by this change)
- price-audit: 39 pre-existing violations, all in tool calculator pages (example ROI/downtime figures) and artwork descriptions ("vest" false positives). Zero new violations from this change.
- escape grep: zero hits for £750/£900/£950/£1,500/£1,200/£595 outside `app/clients/**` and data sources.

### Notes
- The `app/clients/[clientId]/**` files contain agreed client proposals with specific prices. These are explicitly out of scope per the task rules.
- The price-audit script's 39 pre-existing violations are all either (a) example figures in calculator tools (not Decoded Ops prices) or (b) "vest" appearing in "hi-vis vest" artwork descriptions. These need separate attention — they are not consultancy price leaks.
