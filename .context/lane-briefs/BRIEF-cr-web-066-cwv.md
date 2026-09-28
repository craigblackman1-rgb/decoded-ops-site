# Lane brief: cr-web-066-cwv

**CR-WEB-066** (WO-WEB-011 u21): Core Web Vitals polish — stop the homepage's hero images
being preloaded on every other page, and stop one homepage hero image being served at a
fixed oversized width on small viewports. Target: LCP on `/` drops from ~6.4-6.9s toward
<3.3s.

## Root cause (confirmed by reading the code, not assumed)

1. `components/Header.tsx` line ~229: the logo link
   `<Link className="logo" href="/">Decoded<span>Ops</span></Link>` is rendered on every
   page via the shared `Header` component. Next.js `<Link>` prefetches its target by default
   (`prefetch` unset = true) whenever the link is in the viewport, so the homepage document
   and its resources get pulled in on every single page load across the site, competing with
   that page's own LCP resource.
2. `app/page.tsx` line ~171: `<Image src="/images/sectors/thread-spools.jpg" fill
   sizes="1200px" .../>` — a fixed `sizes="1200px"` forces the browser to request (and Next
   to generate) a 1200px-wide asset on every viewport, including phones, instead of a size
   proportional to how the image actually renders (it's inside a `.band` figure — full
   container width on all breakpoints, so it needs a real responsive `sizes`, not a flat
   pixel value).
3. `app/page.tsx` line ~116: `<Image className="p-photo" src="/images/hero-craft.jpg" fill
   sizes="(max-width: 1040px) 100vw, 45vw" .../>` already has a responsive `sizes` — leave
   this one alone, it's not part of the bug.

## MUST

- In `components/Header.tsx`: add `prefetch={false}` to the logo `<Link href="/">` only.
  Do not change prefetch behaviour on any other `<Link>` in this file.
- In `app/page.tsx`: change the `thread-spools.jpg` image's `sizes="1200px"` to a real
  responsive value matching how `.band`/`.p-photo` actually renders (check the CSS for
  `.band`/`.p-photo` under `styles/` or the page's own module CSS to get the true rendered
  width per breakpoint — do not guess; if it renders full-bleed at all widths, something
  like `sizes="100vw"` is correct, if it's capped at a max-width inside `.wrap`, use that
  cap, e.g. `sizes="(max-width: 1040px) 100vw, 1200px"`).
- Leave `hero-craft.jpg` (line ~116) untouched — its `sizes` is already correct.
- Do not resize or replace any source image files under `public/images/` — this is a
  code-only fix (Next/Image generates the responsive srcset automatically from the `sizes`
  attribute; no asset needs regenerating).

## FORBIDDEN

- Any file outside `components/Header.tsx` and `app/page.tsx`.
- `app/sectors/workwear/page.tsx`, `components/SectorPageDS.tsx`, or any other sector page —
  out of scope for this unit even though they also render hero images.
- `next.config.ts`, any `Link` other than the logo link, any other `<Image>` on the homepage.
- No new dependencies, no dev-server start, no Lighthouse run (Claude verifies perf
  separately after merge).

## VERIFY (what the lane must run and report, not the perf number itself)

- `npx tsc --noEmit` — must be clean (or no NEW errors vs main).
- `npm run build` — must succeed.
- `git diff --stat` — must show only `components/Header.tsx` and `app/page.tsx` changed.
- Report the exact diff of both changed lines in the lane notes.

Commit with a clear message referencing CR-WEB-066. Do not push — the dispatcher merges
after running its own gate checks.
