# CR-WEB-050 fix 2 (same rules as cr-web-050.md). Exact edits only.

1. app/apps/page.tsx (~line 68-69), the Decoded Commerce card sentence. Replace
   "A full migration off WooCommerce, a new storefront, and reintegration back
                into one clean, matched list is the worked example."
   with
   "A full migration off WooCommerce, a new storefront, and reintegration back
                into the ERP is the worked example."
2. app/page.tsx homepage stat plate, group "2 · matched automatically":
   - set the bar <rect x="430" y="348" ...> width from "797" to "525" (154,518 of 317,812 on a 1080 scale).
   - DELETE the whole <text x="1291" y="390" ...>40</text> element (no percentage or extra number on this row).
3. app/page.tsx group "3 · live": set the amber bar <rect x="430" y="468" ...> width from "73" to "14". Leave its text elements as they are.
4. app/problems/erp-implementation-failure/page.tsx (~line 174): wrap the 40 in bold like the other bullets: "<><b>40</b> active suppliers feeding in, without anyone re-keying a row</>".
Then npx tsc --noEmit; one commit "fix(site): plate widths + commerce sentence (CR-WEB-050)". Report file:line for each.
