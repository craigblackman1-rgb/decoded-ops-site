# Lane notes: web011-u6-retry

## What was done

Expanded `/problems/ecommerce-not-connected` with Shopify and WooCommerce sections targeting "shopify erp integration uk" and "woocommerce order sync" keywords, per WO-WEB-011 u6.

## Implementation (per ADDENDUM overrides)

1. **ProblemPageDS.tsx** — added optional `beforeRelated?: React.ReactNode` prop to interface, destructured it, and rendered `{beforeRelated}` immediately before the "GET this fixed" related-links band. Other problem pages pass no prop and render identically.

2. **page.tsx** — passed three sections as `beforeRelated`:
   - Shopify section (g-tint): 4 cards covering re-keyed orders, lost personalisation fields, artwork arriving separately, and stock not reflecting committed production. Includes Hanicks mention and connect/merge/replace options.
   - WooCommerce section (g-off): 4 cards covering order status back to customer, decoration data on order, re-keying trace, and what Decoded Works already does (product/category sync, no order sync).
   - Visible FAQ section (g-tint): 3 `<details><summary>` elements with questions matching the JSON-LD entries exactly.
   - Also added 3 new JSON-LD FAQPage questions (Shopify ERP, WooCommerce re-keying, platform replacement).

## Verification

- `npx tsc --noEmit -p .` — clean
- `npm run lint` — 77 errors, 84 warnings (all pre-existing, none in edited files)
- `grep -c "Shopify ERP integration"` = 1
- `grep -c "WooCommerce order sync"` = 2 (h2 + lede)
- `grep -c "£"` = 0
- `grep -c '\\u'` = 0
- `git diff --stat` shows only the two edited files

## Notes

- FAQ answer text in visible `<details>` matches JSON-LD `acceptedAnswer` text word-for-word.
- No prices, no day rate, no order sync claims for Works, no real-time stock claims, no TackleBag or Cobra.
- No em dashes, no buzzwords. Used `&apos;` for apostrophes in JSX text.
