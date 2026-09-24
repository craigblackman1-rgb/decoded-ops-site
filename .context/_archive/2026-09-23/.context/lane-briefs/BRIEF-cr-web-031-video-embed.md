# Lane brief — CR-WEB-031: "One fix, one screen" VideoEmbed on problem pages and blog posts

Work order: wo-marketing-sales-consolidated-2026-08-20, unit u34. Worktree: this directory, branch `cr-web-031-video-embed`.
Spec of record: `.context/design-brief-CR-WEB-031-video-embed.md` (read in full) and the approved mockups
`D:\apps\design-systems\decoded-ops-website\problems-systems-dont-talk-video.html` and `blog-post-video.html`
(read the `data-od-id="video-embed"` section and the `<style>` block headed "CR-WEB-031 · VideoEmbed block"; the rest of each mockup is the existing page).

## Hard rules
- No database, no `.env*`, no dev server, no browser, no network calls to YouTube from build or tests. Claude verifies.
- `npm install` first (pre-authorised; `node_modules` is absent). `npx tsc --noEmit` clean. Do not run `npm run build`.
- Conventional commits ending `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`. Finish with `.context/lane-reports/LANE-RESULT.json` `{ "unit": "u34", "cr": "CR-WEB-031", "commits": [], "files": [], "deviations": [], "notes": "" }`.
- No YouTube video IDs exist yet (Craig has not recorded). Ship the plumbing with an EMPTY mapping so every page renders byte-identical to today. Do not invent IDs. Leave one clearly-marked example entry commented out.

## Changes

### 1. `components/VideoEmbed.tsx` (new, client component for the click state only)
Props: `{ youtubeId, title, closeLine, app: 'Decoded Works' | 'Decoded Proof', durationSec, playlistUrl }`.
Render exactly the mockup block: eyebrow "One fix, one screen" (`.eyebrow`), `h2.h2` = title, the framed facade (chrome bar: three dots, app pill, length pill `m:ss`), poster `<img src="https://i.ytimg.com/vi/<id>/maxresdefault.jpg" loading="lazy" alt="">` with `onError` fallback to `hqdefault.jpg`, centre play `<button aria-label="Play: <title>">`; on click swap the poster for `<iframe src="https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1" title="<title>" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen>`; then close line `p.vid-close`, CTA row (`.btn.btn--primary` → `/contact` "Book a discovery call", text link "Watch the series on YouTube ↗" → `playlistUrl` `target="_blank" rel="noopener"`), and when `app === 'Decoded Proof'` the pre-release line. Copy the mockup CSS into `app/globals.css` under a `/* CR-WEB-031 VideoEmbed */` comment, using the same class names. Acceptance: zero requests to youtube*/ytimg before click except the poster image; keyboard focus ring on the button.

### 2. `components/VideoSchema.tsx` (new, server) → `<JsonLd>` with a `VideoObject`: `name`, `description` (closeLine), `thumbnailUrl`, `uploadDate`, `duration` (ISO 8601 from durationSec), `embedUrl` (`https://www.youtube-nocookie.com/embed/<id>`), `contentUrl` (`https://www.youtube.com/watch?v=<id>`), `publisher` matching the Organization node used elsewhere in the repo (grep `JsonLd` usages).

### 3. `data/problem-videos.ts` (new)
```ts
export type ProblemVideo = { youtubeId: string; title: string; closeLine: string; app: 'Decoded Works' | 'Decoded Proof'; durationSec: number; uploadDate: string; playlistUrl: string };
export const problemVideos: Record<string, ProblemVideo> = {
  // Filled by u30 once Craig has uploaded. Shape mirrors hub content_items.data on the linkedin_video row.
  // 'systems-dont-talk': { youtubeId: '…', title: 'How Do I Know Which Suppliers Actually Updated Today?', closeLine: '…', app: 'Decoded Works', durationSec: 72, uploadDate: '2026-09-…', playlistUrl: 'https://www.youtube.com/playlist?list=…' },
};
```

### 4. `components/ProblemPageDS.tsx`
New optional prop `video?: ProblemVideo`. When present, render a new `<section className="g-off" data-od-id="video-embed">` containing `<VideoEmbed …/>` between the "Why it happens" (`g-tint`) section and "How I help" (`g-white`), and emit `<VideoSchema …/>`. When absent, render nothing (no empty band). Wire it in `app/problems/[each]/page.tsx` only via one line: `video={problemVideos[slug]}` — do this for all 18 problem pages so future IDs need no code change.

### 5. `app/blog/[slug]/page.tsx`
If the hub detail response carries `item.video` (same shape as ProblemVideo; the hub side is added separately, treat as optional), render `<VideoEmbed>` in the `g-white` band where `item.images?.[0]` renders today, and move image 0 to the image-2 slot; add the `VideoObject` to the `schemas[]` array. If `item.video` is absent, behaviour is unchanged.

### 6. Checks
- `npx tsc --noEmit` clean; `npm run lint` on changed files.
- Prove byte-identical output for pages without a video: before your changes, `node scripts/generate-route-slugs.mjs` then capture `git stash`-free evidence by rendering nothing — simplest is to assert in a tiny vitest (if the repo has vitest; otherwise skip) that `ProblemPageDS` with `video={undefined}` does not render `[data-od-id="video-embed"]`.
