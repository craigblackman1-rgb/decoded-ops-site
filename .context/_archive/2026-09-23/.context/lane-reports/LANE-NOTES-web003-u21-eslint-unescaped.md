# LANE-NOTES: web003-u21-eslint-unescaped

## What was done

Fixed 3 `react/no-unescaped-entities` errors on `main`:

- `app/sectors/labels-packaging/page.tsx:105` — escaped apostrophe in "There's" → "There&apos;s"
- `app/sectors/signs-graphics/page.tsx:105` — escaped apostrophes in "don't" and "people's" → "don&apos;t" / "people&apos;s"

Both files pass `npx eslint` with zero errors.

## Verification

- `npx eslint app/sectors/labels-packaging/page.tsx app/sectors/signs-graphics/page.tsx` — 0 errors, 0 warnings
- `npm run lint` (full project) — 132 pre-existing errors/warnings across other files (not in scope)
- `tsc` not run (no node_modules existed prior to this lane; installed deps for lint only)

## Notes

- `next lint` does not exist in Next.js 16; the project uses `eslint` directly via `npm run lint`
- The 132 pre-existing errors span many files — `react/no-unescaped-entities` in other pages, `@typescript-eslint/no-explicit-any`, `react-hooks` rules, etc. Out of scope.
