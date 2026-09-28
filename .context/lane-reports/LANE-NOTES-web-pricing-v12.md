# Lane notes: web-pricing-v12

## What was done

Replaced all public-facing prices on the marketing site with Craig-approved 28 Sep 2026 figures. Byte-copied the canonical pricing JSON from the OneDrive business folder.

### Price changes applied
| Item | Old | New |
|---|---|---|
| Clarity Check | £595 | £600 |
| Clarity Audit | from £1,500 | from £750 |
| Deliver | from £1,200/mo | from £750/mo |
| Transform | from £1,500/mo | from £1,000/mo |
| Retained | from £950/mo | from £900/mo |

### Files changed
1. **data/pricing-v11.json** — full replacement with canonical v28Sep2026 file (4 segments S1-S4, new under-£500k band, Clarity Check £600 for both under-£1m segments, updated software figures, updated rules/sources)
2. **app/pricing/page.tsx** — meta/OG/JSON-LD descriptions, guarantee section copy + SVG text (£1,500 -> from £750, £4,500+ -> 3x the fee), small-biz card (£595 -> £600), table-foot rewrite per brief
3. **app/clarity/page.tsx** — three meta description strings (£1,500 -> £750), lede paragraph (£1,500 -> From £750)
4. **app/locations/tech-audit/page.tsx** — hero lede (£1,500 -> £750), sticky CTA card heading (£1,500 -> £750)
5. **app/opengraph-image.tsx** — stats row price (£1,500 -> £750)
6. **app/retained/page.tsx** — all six £950 occurrences (meta x3, JSON-LD, body copy x2, SVG text)
7. **app/small-business/page.tsx** — JSON-LD offer price (595 -> 600), services array price (£595 -> £600)
8. **components/Header.tsx** — small-biz nav sub text (£595 -> £600)
9. **app/resources/erp-selection-playbook/page.tsx** — CTA card price (£1,500 -> £750) found via grep sweep

### Deliberately untouched
- `app/clients/**` — all client proposal files (hanicks, cwear, scotshirts, cobra-workwear) contain £1,500 and £950 in agreed client prices. Per brief, these are not touched.
- `.context/**` — lane briefs, reports, archives, price-audit.md are historical/working documents, not live code.

## Verification
1. `npx tsc --noEmit` — clean, 0 errors
2. `npm run build` — passed, all 116 pages generated
3. `grep -rn "£595|£950" app components lib data | grep -v app/clients` — only hit is hanicks-proposal.ts:389 (£950 in client file, excluded)

## New JSON shape notes
The new pricing-v11.json has 4 segments (S1-S4) instead of 3 (S1-S3), adds `segments` array to the Clarity Check product, adds `upgrades`/`finance_presentation`/`standard_features`/`rounding` rules, adds commerce editions with `with_works` pricing, adds implementation `tiers_from` and support `from` per segment. The pricing page only reads `consultancy[].public_from` and `small_business.products[0].price`, so it type-checks cleanly against the new shape.
