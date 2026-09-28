# Lane brief: web-keyword-titles (approved keyword map, phase 1)

Worktree: this directory, branch `lane/web-keyword-titles`. Commit here. Do NOT push, do NOT run a dev server, do NOT touch any database, do NOT read .env files.

## Input
`.context/seo-titles-2026-09-28.json` — 68 rows of {page, title, description}. `page` is the URL path. These are final, approved copy: use them verbatim (no rewording, no trimming, keep British spelling and the "| Decoded Ops" suffix exactly as given).

## Job
For each row, find the route file that serves that path under `app/` (e.g. `/` -> `app/page.tsx`, `/sectors/workwear` -> `app/sectors/workwear/page.tsx`, `/blog` -> `app/blog/page.tsx`). In its `metadata` export (or `generateMetadata`):
- set `title` to the row's title,
- set `description` to the row's description,
- set `openGraph.title` / `openGraph.description` and `twitter.title` / `twitter.description` to the same values where those objects exist (add them only if the file already has an openGraph/twitter block pattern elsewhere; do not invent new structures).
If the root layout applies a title template (e.g. `%s | Decoded Ops`) that would double the suffix, use `title: { absolute: '<title>' }` for that page instead, so the rendered <title> is exactly the row's title. Check `app/layout.tsx` first and apply one approach consistently.

Change ONLY metadata. Do not change page body copy, H1s, JSON-LD, links, components or styling. Do not touch `app/clients/**` or `app/blog/[slug]/**` (blog posts get their titles from the hub).

If a row's page has no matching route file, or the route is dynamic, list it in your report and skip it.

## Verify before you commit (run these yourself, plainly, not piped)
1. `npx tsc --noEmit` passes.
2. `npm run build` passes.
3. Write `scripts/check-seo-titles.mjs` that reads `.context/seo-titles-2026-09-28.json` and, for each row, reads the route file and asserts the exact title and description strings are present. Run it; it prints matched/missing counts and exits 0 only if every non-skipped row matches.

Commit with a conventional message. Write `.context/lane-reports/LANE-RESULT-web-keyword-titles.md`: files changed, rows skipped and why, the layout-template decision, and the exact output of checks 1-3. Do not claim anything you did not run.
