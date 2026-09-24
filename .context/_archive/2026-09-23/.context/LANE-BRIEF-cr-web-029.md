# LANE BRIEF — CR-WEB-029 (website side): preview mode for unpublished blog posts

Repo: decoded-ops-website. Worktree: D:\apps\worktrees\decoded-ops-website\lane-cr-web-029-preview, branch lane/cr-web-029-preview (off origin/main 2426fc9). Commit on this branch. Do NOT push. Do NOT run a dev server.

## GOAL
`/blog/<slug>?preview=<token>` renders an unpublished post when the hub accepts the token, with a visible "PREVIEW — not published" banner, `noindex,nofollow` robots meta, and no caching. Without a valid token the page behaves exactly as today (404 for unpublished, normal render for published). A published post with a token attached must still render (banner showing is acceptable there).

## CONTRACT (the hub lane implements the other half)
- The hub's `GET /api/content/detail?slug=<slug>&preview=<token>` returns `{ item, preview: true }` (200) for an unpublished post when the token is valid, and the usual 404 otherwise. The website does NOT verify tokens itself — it forwards the query param and honours the response.

## MUST
1. Edit `app/blog/[slug]/page.tsx`:
   - Accept `searchParams` alongside the existing `params` (check how `params` is typed in this file — if it is a Promise, type searchParams as `Promise<{ preview?: string }>` and await it the same way).
   - In the data fetch (the existing `hubFetch(...)/api/content/detail?slug=...` call around line 73), when `preview` is a non-empty string append `&preview=<encodeURIComponent(preview)>` and use `cache: 'no-store'` for that request. Keep the existing caching behaviour when there is no preview param.
   - Both `generateMetadata` and the page component must pass the preview param through. In `generateMetadata`, when the fetch succeeded in preview mode return `robots: { index: false, follow: false }` in the Metadata.
   - When the response JSON has `preview === true`, render a banner at the top of the article: a full-width strip with the text `PREVIEW — not published` and the sub-line `This link expires in 24 hours. Do not share.` Use existing site classes/tokens (look at how other notices or the header are styled; amber/yellow background, dark text). No new CSS file, no new dependency. Keep it inside the existing layout.
   - `generateStaticParams` stays untouched. Reading searchParams makes this route dynamic — that is acceptable; confirm in the report that the published path still renders (tsc + a note on rendering mode).
2. `npx tsc --noEmit` clean, `npm run lint` clean.
3. Write `.context/LANE-REPORT-cr-web-029.md`: files changed, how verified, the exact URL shape, and the rendering-mode note.

## FORBIDDEN
- Do not change `lib/hub-fetch.ts`, the blog index page, or any other route.
- No new dependencies. No token verification on the website. No env vars added.
- Do not weaken the existing 404 behaviour: if the hub returns non-200 the page still calls notFound().
