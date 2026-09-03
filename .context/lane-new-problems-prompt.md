Task: port 4 new problem pages into this Next.js app (`D:\wt\dow-integration`), matching the
existing pattern exactly.

## Reference pattern

Read `app/problems/ai-paralysis/page.tsx` as your template for structure: `Metadata` export
with title/description/openGraph/twitter, a `@graph` JSON-LD schema object (`Service` +
`FAQPage` if the source has FAQ-shaped content, otherwise just `Service`), a `BreadcrumbSchema`
component call, then the page body using the `ds-marketing.css` class vocabulary via
`className` (not Tailwind) — `.hero-split` or `.hero-center`, `.eyebrow`, `.card.cause` with
`.n` numbered kickers, `.g-off`/`.g-white`/`.g-tint`/`.g-navy` grounds, `.btn--primary`/
`.btn-ghost.btn-arrow`, `.cta-strip`. Also check `app/problems/erp-implementation-failure/page.tsx`
if you need to see how an SVG plate diagram gets embedded (archetype 2/3/4/5 patterns) — reuse
its `.sk-*` schematic engine classes and gradient/pattern defs, don't invent a new diagram system.

## Source content — port these 4 static HTML files into Next.js pages, JSX-ified

Source files live in `D:\apps\design-systems-worktrees\content-review-fixes\decoded-marketing\`:

1. `problems-buy-vs-build.html` → `app/problems/buy-vs-build/page.tsx`
2. `problems-data-scattered.html` → `app/problems/data-scattered/page.tsx`
3. `problems-inventory-blind.html` → `app/problems/inventory-blind/page.tsx`
4. `problems-legacy-system.html` → `app/problems/legacy-system/page.tsx`

For each: read the HTML file, convert its `<main>` content to JSX (className instead of class,
self-closing tags, camelCase SVG attributes like `strokeWidth`/`fillOpacity`/`letterSpacing`,
`&mdash;`/`&amp;` etc. become JSX-safe entities or plain unicode characters), preserve the copy
exactly (do not rewrite any sentence), and route each page's CTA links to `/contact` (primary)
and the appropriate secondary link (`/apps/data-app`, `/how-i-build`, etc. — check what each
HTML file's CTA strip already links to). Every one of these 4 pages should route its primary
paid-product CTA to "Book an App Scoping Session" per their own copy already — do not change
that to Clarity Audit, these 4 are deliberately rung-2-flavoured pages.

Build the `<Metadata>` title/description from each HTML file's own `<title>`/`<meta
description>` tags. Build the JSON-LD `Service` schema block following the pattern in
`erp-implementation-failure/page.tsx` (or `ai-paralysis/page.tsx` if that one has a `Service`
without `HowTo`), naming the service after the page topic, `serviceType` appropriate to the
page, `provider` the same Decoded Ops org block used everywhere else in this codebase.

## Verification before you finish

- `npm run build` from `D:\wt\dow-integration` must exit 0 and generate all 4 new static routes
  (`/problems/buy-vs-build`, `/problems/data-scattered`, `/problems/inventory-blind`,
  `/problems/legacy-system`) alongside everything already there.
- Grep the 4 new files for "Discovery Day" — must return zero hits (these were already written
  clean, but double-check nothing got introduced during the port).
- Write a short summary to `.context\lane-new-problems-report.md`: which 4 files were created,
  confirmation the build passed with all 4 routes listed in the build output.
