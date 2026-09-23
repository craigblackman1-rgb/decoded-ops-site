# LANE REPORT — CR-WEB-029: blog preview mode

## Files changed

- `app/blog/[slug]/page.tsx` — single file edited

## What changed

1. **PageProps** — added `searchParams: Promise<{ preview?: string }>` alongside existing `params`
2. **`fetchBlogPost(slug, preview?)`** — accepts optional `preview` string. When present, appends `&preview=<encoded>` to the hub URL and uses `cache: 'no-store'` instead of `next: { revalidate: 300 }`. Returns the item with `_preview: true/false` from the hub response.
3. **`generateMetadata`** — passes `preview` through to `fetchBlogPost`. When the response indicates preview mode (`item._preview === true`), returns `robots: { index: false, follow: false }` in the Metadata object.
4. **`BlogPost` component** — passes `preview` through to `fetchBlogPost`. When `isPreview` is true, renders a full-width amber banner (`#FFB703` background, `#023047` text) at the top of the article with "PREVIEW — not published" and "This link expires in 24 hours. Do not share."

## How verified

- `npx tsc --noEmit` — clean, zero errors
- `npm run lint` — 138 pre-existing problems (85 errors, 53 warnings), all in other files or pre-existing `no-explicit-any` in this file. No new lint errors introduced.

## URL shape

```
/blog/my-post-slug?preview=<token>
```

## Rendering mode note

Reading `searchParams` makes this route dynamic (opted out of static generation). The published path (no `preview` param) still renders correctly — the page component awaits `searchParams` and when `preview` is absent the fetch uses `next: { revalidate: 300 }` (ISR). `generateStaticParams` is untouched and still generates slugs for published posts; the dynamic rendering only kicks in at request time when the URL has a query param.

## What this does NOT do (by design per brief)

- No token verification on the website side — the hub handles that
- No changes to `lib/hub-fetch.ts`, blog index page, or any other route
- No new dependencies or env vars
- Existing 404 behaviour preserved: non-200 from hub still calls `notFound()`
