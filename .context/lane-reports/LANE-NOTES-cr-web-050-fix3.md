# LANE-NOTES-cr-web-050-fix3

CR-WEB-050 fix 3 — homepage feed count. Two edits in `app/page.tsx`:

- Line 314: "nine supplier" → "17 supplier" (sheet-foot paragraph)
- Line 397: "Nine supplier feeds, automated" → "17 supplier feeds, automated" (SVG label)

Grep for `nine supplier` and `9 supplier feeds` returns empty. tsc clean. One commit.
