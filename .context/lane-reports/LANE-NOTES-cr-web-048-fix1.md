# Lane notes: cr-web-048-fix1

## What was done

All six fix items from `.context/lane-briefs/cr-web-048-fix1.md` applied:

1. **page.tsx cards** — Card 01 `name` → "Hanicks", `desc` → full intro sentence. Card 02 `name` → "The diagnostic came before the decision.", `desc` → full intro sentence. Labels rendered via `{sector} · {status}` already match spec exactly. Figures unchanged (already correct).

2. **Deleted `{/* TackleBag */}` comment** from page.tsx line 162.

3. **case-study-02 DO-ART-206 After lines** — Second line: added "(236,056 sizes and colours)" to the products line. Fourth line: replaced "Same platform + Data App alongside it" with two `<tspan>` lines for "The same website platform, / with the data app doing the work it was never built for".

4. **case-study-02 figures last stat** — Label updated to include "(being measured now it's live)".

5. **case-study-01 figures stock-take** — Label updated to "new products and 28 new suppliers found in a stock-take reconciliation".

6. **case-study-01 DO-ART-205 plate** — AFTER line 3: "Same platform, kept" → "Data app (now the ERP)". LeDE under plate eyebrow: replaced product summary with "Catalogue figures from the live system, September 2026."

## Verification

- `npx tsc --noEmit` — clean, 0 errors
- `git grep -nE "Khaos|164,752|127,135|11,064|9 supplier feeds|TackleBag|Tackle Bag|Same platform" -- app/case-studies` — 0 hits

## Notes

- The `TackleBag` grep pattern also checks for "Tackle Bag" (space variant) — both clean.
- The SVG tspan wrap for the long After line uses `dy="26"` (matching the 22px font size + 4px gap pattern used elsewhere in the plate).
- `data/route-slugs.json` picked up in the commit as a warning-only CRLF change (no content diff).
