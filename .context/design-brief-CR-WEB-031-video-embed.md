# Design brief — CR-WEB-031: "One fix, one screen" video embed on problem pages and blog posts

**Project:** decoded-ops-website · **Raised:** 2026-09-15 · **Requestor:** Craig
**Surface:** `/problems/[slug]` (18 pages rendered by `components/ProblemPageDS.tsx`) and
`/blog/[slug]` (`app/blog/[slug]/page.tsx`, body from hub `content_items` via `/api/content/detail`)
**Related:** CR-MKT-013 (Problem→Fix→Question content reset; `Content/VIDEO_SHOTLIST_2026-09.md`,
10 clips V1–V10), CR-MKT-014 (video distribution decision: YouTube = host + search surface,
native uploads on LinkedIn/Facebook, website embed is the client-facing link, no self-hosting)
**WO:** wo-marketing-sales-consolidated-2026-08-20 units u32 (this brief + mockup) → u33 (Craig
approves) → u34 (build, lane)

---

## The decision this serves (Craig, 2026-09-15)

> Go with YouTube.

The 10 clips get uploaded to one public YouTube channel, one playlist. The website page is the
link Craig sends clients and prospects, so the CTA stays the Clarity Audit rather than a YouTube
watch page with someone else's "up next". Each clip is one fix on one screen, under 90 seconds,
titled as the question a decorator types into Google. The page that embeds it must carry that
question and the close line as text, so the page ranks for the question even before the video
plays.

---

## What is built today (measured)

### Problem pages have no video slot and no per-page media data

`components/ProblemPageDS.tsx` renders five fixed sections in order:

| # | Line | Section | Background |
|---|---|---|---|
| 1 | 53 | Hero (eyebrow + headline + intro + `heroGraphic` schematic) | `g-off` |
| 2 | 78 | The symptoms | `g-navy` |
| 3 | 94 | Why it happens (causes) | `g-tint` |
| 4 | 113 | How I help / CTA | `g-white` |
| 5 | 143 | Get this fixed: `targetService` + `relatedProblems` + `relatedReading` (3-col grid) | `g-off` |

Its prop surface (`ProblemPageDSProps`, lines 6–21) is text and link lists only. Per-page link
data lives in `data/problem-routing.ts` (`Record<string, ProblemRoute>`, 172 lines, keyed by
slug) with `targetService`, `relatedProblems`, `relatedReading`. There is no image, video or
media field anywhere in that record. Individual pages (e.g.
`app/problems/systems-dont-talk/page.tsx`) add a DO-ART plate after the DS component (lines
86–108) and a hand-written `FAQPage` JSON-LD block via `<JsonLd>` (lines 27–57).

### Blog posts render hub data plus two optional images

`app/blog/[slug]/page.tsx` fetches the post from the hub (`/api/content/detail?slug=`, line 73)
and renders: header (`g-off`), optional `item.images[0]` (`g-white`, `rounded-2xl shadow-sm`,
`border: 1px solid var(--do-border-subtle)`), the prose body, optional `item.images[1]`, the
`.post-cta` box (globals.css:173) and `<RelatedPosts>`. Schema: `Article` always, `FAQPage` if
the HTML has FAQ markup (lines 143–147), plus `BreadcrumbSchema`. No `VideoObject` anywhere in
the repo.

### No YouTube, `<video>` or `<iframe>` exists in `app/` or `components/` today

A grep of the source tree for `youtube|<video|iframe` returns nothing. The nearest existing
"framed media" pattern is `components/ScreenshotFrame.tsx`: `rounded-2xl`, `border
border-sky-blue/30`, `bg-off-white`, a browser-chrome bar with three dots and a URL pill, and an
optional `Live` pill. That chrome language is the right family for a screen-recording clip.

### Where the video IDs will come from

Hub `content_items` already has 10 `linkedin_video` rows (slugs = kebab-case of the clip
question, e.g. `how-do-i-make-an-emb-file-from-a-print-ready-piece-of-artwork`). Unit u30 writes
`data.youtubeId` and `data.playlistUrl` into those rows once Craig has uploaded. The website
should read from one place, not two hand-maintained lists.

---

## What to design

### A. `VideoEmbed` block (one shared component, two placements)

A single full-width block inside the standard `.wrap`, on a `g-white` band, made of:

1. **Eyebrow** — `One fix, one screen` (existing `.eyebrow` style).
2. **Question title** — the clip title verbatim as an `h2` (`.h2`), e.g. *How Do I Make an EMB
   File From a Print-Ready Piece of Artwork?* This is the SEO text; it must be real DOM text,
   not inside the iframe.
3. **Facade player** (the part that becomes the iframe on click):
   - 16:9 box, `rounded-2xl`, `border: 1px solid var(--do-border-subtle)`, same shadow as
     `ScreenshotFrame`.
   - Top chrome bar borrowed from `ScreenshotFrame`: three dots + a pill reading the app name
     (`Decoded Works` / `Decoded Proof`) instead of a URL, and a right-hand pill `0:58` (the
     length) in the `Live` pill style.
   - Poster: the YouTube `maxresdefault.jpg` (fallback `hqdefault.jpg`), `object-fit: cover`,
     `loading="lazy"`.
   - Centre play control: 64px circle, `--do-cerulean` fill, white triangle, `aria-label="Play:
     <question>"`. Whole facade is a `<button>`; keyboard focus ring visible.
   - On click only: swap to `<iframe src="https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1">` with `title="<question>"`, `allow="autoplay; encrypted-media; picture-in-picture"`, `allowfullscreen`. **No YouTube network request before interaction** — this is the acceptance test.
4. **Close line** — the clip's close line as a one-sentence `p` in `--do-text-muted`, e.g.
   *"That's a print-ready design turned into a machine file in the time it took to upload it. No
   email out, no three-day wait."*
5. **CTA row** — `Book a discovery call` → `/contact` (primary `.btn.btn--primary`) and a
   secondary text link `Watch the series on YouTube ↗` → playlist URL, `rel="noopener"`, opens
   new tab. Only two links; nothing else in the block.
6. **Pre-release flag** — when `app === 'Decoded Proof'`, a small line under the CTA:
   *Decoded Proof is pre-release. Founding-client terms apply.* (content rule, MASTER §1).

Mobile (≤ 640px): stacks naturally; chrome bar keeps dots + app pill, drops the length pill;
CTA row wraps to two full-width buttons.

Dark band variant is not needed; the block always sits on `g-white`.

### B. Placement

**Problem pages:** a new optional section **between "Why it happens" (`g-tint`) and "How I
help" (`g-white`)**, so the viewer sees the fix demonstrated right before reading how Craig
helps. Because the following band is also `g-white`, give the video section `g-off` instead so
the bands still alternate (`g-tint` → `g-off` → `g-white`). Rendered by `ProblemPageDS` from a
new optional `video` prop; nothing renders when the prop is absent (13 of 18 problem pages will
have no clip on day one).

**Blog posts:** directly after the article header, replacing the `item.images[0]` slot when the
post has a video (if both exist, the video wins and image 0 moves to the image-2 slot). Same
component, same `g-white` band as the image slot uses today.

### C. Data

One source of truth: hub `content_items.data` on the `linkedin_video` row:
`{ youtubeId, playlistUrl, app: 'Decoded Works' | 'Decoded Proof', durationSec, closeLine,
websiteTarget: { kind: 'problem' | 'blog', slug } }`.

- Blog: the hub `/api/content/detail` response for a blog post includes a `video` object when a
  `linkedin_video` row targets that blog slug (hub-side join, or the website fetches
  `/api/content/index?type=video` once and matches). The website page reads `item.video`.
- Problem pages: static build, so `data/problem-videos.ts` (generated, not hand-edited) maps
  problem slug → the same object; regenerated by the existing content sync when u30 lands the
  IDs. The lane may start with a hand-written file for the 5–7 mapped slugs and leave a TODO
  pointing at the generator — but the file shape must match the hub `data` shape exactly.

Clip → page mapping (from the shot-list pairings; final slugs confirmed in u28's pack):

| Clip | Problem page |
|---|---|
| V1 EMB from artwork | `manual-workarounds` |
| V2 Vectorise / vault | `data-scattered` |
| V3 Gang sheet | `slow-processes` |
| V4 Supplier feeds | `systems-dont-talk` |
| V5 Amazon/eBay/web as one product | `ecommerce-not-connected` |
| V6 Artwork approval link | `manual-workarounds` (second clip) or blog post |
| V7 Logo from three years ago | `data-scattered` (second clip) or blog post |
| V8 Price embroidery before stitch count | `spreadsheet-addiction` |
| V9 Five SKUs for one product | `inventory-blind` |
| V10 Pick list | `cant-scale-operations` |

A page carries at most one clip in the DS section; second clips go to the paired blog post.

### D. Schema

Emit one `VideoObject` per embedded clip via the existing `<JsonLd>`:
`name` (question), `description` (close line + one sentence), `thumbnailUrl`
(`https://i.ytimg.com/vi/<id>/maxresdefault.jpg`), `uploadDate` (from hub row), `duration`
(ISO 8601 from `durationSec`), `embedUrl` (`https://www.youtube-nocookie.com/embed/<id>`),
`contentUrl` (`https://www.youtube.com/watch?v=<id>`), `publisher` → Decoded Ops Organization
node already used elsewhere. On blog posts it joins the existing `schemas[]` array; on problem
pages it is added to the page's `@graph`.

---

## Acceptance (Design Parity Gate + u34 VERIFY)

1. Staging: block renders on one problem page and one blog post matching the OD mockup.
2. Network tab: zero requests to `youtube*`/`ytimg` before click, except the poster image.
3. After click: iframe from `youtube-nocookie.com`, `rel=0` present, captions on.
4. Rich Results test passes `VideoObject` on both page types.
5. Lighthouse performance on `/problems/systems-dont-talk` within 2 points of current.
6. Keyboard: Tab reaches the play button, Enter plays, focus ring visible.
7. Pages without a clip render byte-identical to today (no empty band).

---

## Out of scope

YouTube channel creation/upload (u29, Craig), the LinkedIn/Facebook native posts (u30), any
video on the homepage or `/apps` pages (file as a separate CR if wanted), self-hosted MP4.
