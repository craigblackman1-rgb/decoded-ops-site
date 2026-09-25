# Lane Notes: web066-fix1

**Brief:** BRIEF-web066-fix1.md — BUG-WEB-037, DO-ART-976 middle person icon overlaps bridges box.

**Change:** Single 1-line SVG transform edit in `app/problems/systems-dont-talk/page.tsx:82`. Moved middle person icon from `translate(222 180)` to `translate(240 168)` to clear the top edge of "The bridges" box at y=200.

**Verification:**
- `npx tsc --noEmit` — clean, 0 errors
- `npm run build` — succeeded, 173 static pages generated
- Escape grep: 0 hits of `translate(222 180)` in application code (2 hits remain in `.context/lane-briefs/` which is documentation only)

**Deviations:** None. Exact change from brief applied.
