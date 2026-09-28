# Lane report: web-keyword-titles

## What was done

Updated title and description metadata on all 68 routes listed in `.context/seo-titles-2026-09-28.json`. Titles and descriptions were set verbatim from the approved copy.

## Files changed

- 66 `app/**/page.tsx` files — metadata title, description, openGraph.title, openGraph.description, twitter.title, twitter.description updated
- 2 new `app/tools/**/layout.tsx` files created for `'use client'` pages that cannot export metadata directly:
  - `app/tools/ops-health-score/layout.tsx`
  - `app/tools/should-i-replace-erp/layout.tsx`
- `scripts/update-seo-titles.mjs` — batch update script (used during development, retained for reference)
- `scripts/check-seo-titles.mjs` — verification script (retained, can be re-run)
- `app/resources/capacity-planner/page.tsx` — additionally converted `title: { absolute: '...' }` to plain string since root layout has no title template

## Rows skipped and why

None — all 68 rows matched route files.

## Layout template decision

Root layout (`app/layout.tsx`) has a static title string (`'Fractional CTO for Print & Decorated Goods | Decoded Ops'`), NOT a `%s | Decoded Ops` template. Child pages override it directly. No `{ absolute: ... }` pattern was needed except for the capacity-planner page, which previously used it and was converted to a plain string.

## Verification results

1. `npx tsc --noEmit` — clean, 0 errors
2. `npm run build` — passed, 116 static pages generated
3. `node scripts/check-seo-titles.mjs` — 68/68 matched, exit 0

## Approach notes

The batch update script (`update-seo-titles.mjs`) used regex replacement on metadata blocks. Five files with old descriptions containing escaped apostrophes inside single-quoted strings (e.g. `\'`) produced corrupted output from the regex and were reverted and fixed manually. The script was then re-run to confirm no further changes needed.
