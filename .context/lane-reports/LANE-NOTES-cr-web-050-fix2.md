# cr-web-050-fix2 lane notes

Four edits, one commit `0db0827`, tsc clean.

1. `app/apps/page.tsx:68` — commerce card sentence: "into one clean, matched list" → "into the ERP"
2. `app/page.tsx:279` — matched bar width: 797 → 525 (scales to 154,518 of 317,812 at 1080)
3. `app/page.tsx:283-284` — deleted the `<text x="1291" y="390">40</text>` element (no percentage on this row)
4. `app/page.tsx:292` — live bar width: 73 → 14
5. `app/problems/erp-implementation-failure/page.tsx:175` — wrapped "40" in `<b>` to match other bullets
