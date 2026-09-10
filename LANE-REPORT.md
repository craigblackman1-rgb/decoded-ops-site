# LANE-REPORT — /blog landing parity fixes (CR-WEB-028 u4)

Branch: `lane/blog-orphan-purge`
Commit: `e5db627`

## FIX 1 — Lead post mobile breakpoint

**What changed:** Moved lead post grid layout from inline styles to a CSS class `.blog-lead` with a `@media (max-width: 900px)` breakpoint that collapses to single column and reduces body padding from `40px 44px` to `28px 26px`.

**Files:**
- `app/globals.css:351-383` — new `.blog-lead` / `.lead-art` / `.lead-body` classes with responsive breakpoint
- `components/BlogList.tsx:48-77` — lead post Link now uses `className="blog-lead"` instead of inline `gridTemplateColumns`

**Commit:** `e5db627`

## FIX 2 — Filter pills hover state

**What changed:** Added `.blog-filter-pill` CSS class with `:hover` rule matching the mockup: cerulean tint background (`color-mix(in srgb, var(--do-cerulean) 10%, transparent)`), cerulean border, primary text color. Active-pill styling (`[aria-pressed="true"]`) preserved as-is.

**Files:**
- `app/globals.css:385-413` — new `.blog-filter-pill` class with hover, focus-visible, and active states
- `components/BlogList.tsx:96-104` — filter buttons now use `className="blog-filter-pill"` instead of inline styles

**Commit:** `e5db627`

## FIX 3 — CTA links

**What changed:** Removed `ArrowRight` icons from both CTA links (mockup has text-only buttons). Changed secondary link from external `BOOKING_URL` with `target="_blank"` to internal `/contact` `<Link>`, same tab. Removed unused `BOOKING_URL` import.

**Files:**
- `app/blog/page.tsx:116-119` — both links are text-only `<Link href="/contact">`, no icons, no target
- `app/blog/page.tsx:2` — `BOOKING_URL` import removed

**Commit:** `e5db627`

## FIX 4 — Filter rail z-index

**What changed:** Changed filter rail `zIndex` from `10` to `5` to match the mockup.

**Files:**
- `components/BlogList.tsx:88` — `zIndex: 5`

**Commit:** `e5db627`

## Verification

- `npx tsc --noEmit` — clean, no errors
- All four fixes verified by re-reading the final source files element-by-element
