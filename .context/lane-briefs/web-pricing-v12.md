# Lane brief: web-pricing-v12 (public "from" prices to canonical rev 2026-09-28)

Worktree: this directory, branch `lane/web-pricing-v12`. Commit here. Do NOT push, do NOT run a dev server, do NOT touch any database, do NOT read .env files.

## The new public prices (Craig approved 28 Sep 2026)
| Item | Old on site | New on site |
|---|---|---|
| Clarity Check | £595 | £600 |
| Clarity Audit | from £1,500 / "£1,500 fixed" | from £750 |
| Deliver | from £1,200/mo | from £750/mo |
| Transform | from £1,500/mo | from £1,000/mo |
| Retained | from £950/mo | from £900/mo |

## Do NOT touch
- Anything under `app/clients/` (signed client proposals keep their agreed prices).
- Example figures in tools (`app/tools/**`, calculators) and turnover figures.

## Changes
1. Replace `data/pricing-v11.json` with the exact contents of
   `C:/Users/CraigBlackman/OneDrive - Decoded Ops/decoded-ops-ai/decoded-ops/Business/DO_Pricing_v11_Canonical.json`
   (byte copy; the pricing page reads `consultancy[].public_from` and `small_business.products[0].price` from it). Check `app/pricing/page.tsx` still type-checks against the new shape (it now has segments S1-S4 and a `segments` array on the Clarity Check product).
2. `app/pricing/page.tsx`
   - meta/OG/JSON-LD descriptions: "The Clarity Audit starts at £750, retained support from £900 a month, and project work is quoted after a call." and "The Clarity Audit is from £750."
   - Guarantee section: lead becomes "Clarity Audit, from £750. If it doesn’t find three times the fee, it’s refunded." The Artwork `sub` becomes "Clarity Audit, from £750". In the SVG replace the `£1,500` text with `from £750` and the `£4,500+` text with `3× the fee` (keep coordinates/classes).
   - Small business card: "£595 fixed" -> "£600 fixed".
   - The table-foot sentence starting "Sub-£1m businesses use the same services" becomes: "Prices are set by the size of the business, and businesses under £500k have their own, lower starting prices. Anyone under £1m can start with the Clarity Check." Keep the existing link to /small-business after it.
3. `app/clarity/page.tsx`: the three description strings "From £1,500." -> "From £750."; in the lede "£1,500, covered by the" -> "From £750, covered by the".
4. `app/locations/tech-audit/page.tsx`: "From £1,500." -> "From £750."; "Book a Clarity Audit, from £1,500" -> "Book a Clarity Audit, from £750".
5. `app/opengraph-image.tsx`: "From £1,500" -> "From £750".
6. `app/retained/page.tsx`: every "£950" -> "£900" (descriptions, JSON-LD, body copy, the SVG text).
7. `app/small-business/page.tsx`: `price: '£595'` -> `price: '£600'`; any other £595 on the page -> £600; JSON-LD offer price 595 -> 600 if present.
8. `components/Header.tsx`: "Fixed-price, done remotely · £595" -> "Fixed-price, done remotely · £600".
9. Then grep the whole repo (`app components lib data`, excluding `app/clients/`) for `£595`, `£1,500`, `£950`, `1500`, `595` in price contexts and fix any remaining public consultancy price to the table above. List every file:line you changed or deliberately left in your report.

## Verify before you commit (run these yourself, plainly, not piped)
1. `npx tsc --noEmit` passes.
2. `npm run build` passes.
3. `grep -rn "£595\|£950" app components lib data | grep -v app/clients` returns nothing.

Commit with a conventional message. Write `.context/lane-reports/LANE-RESULT-web-pricing-v12.md` with files changed, anything left and why, and the exact output of the three checks. Do not claim anything you did not run.
