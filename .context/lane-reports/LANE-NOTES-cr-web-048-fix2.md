# Lane notes: cr-web-048-fix2

## Changes made

1. **case-study-01/page.tsx:134** — y=472 AFTER column line changed from "Data app (now the ERP)" (which duplicated y=542) to "77% of stock records now have a bin location".

2. **case-study-02/page.tsx:133-137** — y=402 AFTER column line "27,778 supplier products (236,056 sizes and colours) in one place" split into two tspans (x="890", dy="26" second line) matching the y=542 pattern. No words changed.

## Verification

- tsc: clean, 0 errors
- No dev server or build run (per lane rules)
- No test suite available for this content-only change
