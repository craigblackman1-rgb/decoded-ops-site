# BRIEF: CR-WEB-065 technical SEO + Core Web Vitals pass (WO-WEB-011 u19)

Worktree: D:\apps\worktrees\decoded-ops-website\web065-tech-seo (branch web065-tech-seo, off origin/staging).
Work ONLY in this worktree. Do not push. Do not run a dev server or browser. Do not touch any database or read any .env file.
Note: dot-folders (.context) are skipped by some glob tools — list them with the shell.
Commit in small conventional commits ("fix(seo): ..."), one per numbered item where sensible.
When finished: `npm ci` is already done by the orchestrator if node_modules exists; run `npx tsc --noEmit` and `npm run build`, both must pass. Write a report to .context/lanes/REPORT-web065-tech-seo.md listing each item, files changed, and anything you could not do.

Evidence: a live crawl + Lighthouse (mobile) on 25 Sep 2026. Lighthouse SEO is already 100; these are the remaining failures.

## 1. html lang
app/layout.tsx: `<html lang="en">` -> `lang="en-GB"`.

## 2. Double font loading (render-blocking)
app/design-system/colors_and_type.css line ~28 has `@import url('https://fonts.googleapis.com/css2?family=Outfit...DM+Sans...')`. The fonts are already self-hosted by next/font in app/layout.tsx (variables --font-outfit, --font-dm-sans). Remove the @import. Then make sure every font-family token in that file (e.g. --do-font-heading, --do-font-body or similar) resolves to `var(--font-outfit), ...fallbacks` / `var(--font-dm-sans), ...fallbacks` so the typography is unchanged. grep the whole repo (app, components, lib, public) for any other fonts.googleapis.com / fonts.gstatic.com reference and remove it the same way.

## 3. Sitemap lastmod
app/sitemap.ts uses `lastModified: new Date()` for every URL, so every URL claims to change on every request. Replace with real, stable dates:
- blog posts: the post's updated date if it has one, else its published date (use the data source the sitemap already reads for posts).
- everything else: a single exported constant `SITE_CONTENT_UPDATED = '2026-09-25'` (define it in lib/ or at top of sitemap.ts) used as `new Date(SITE_CONTENT_UPDATED)`.
- Add the two live, indexable calculator pages that are missing from the sitemap: /resources/capacity-planner and /resources/seasonal-capacity (monthly, priority 0.6).

## 4. Missing og:image (28 pages)
These pages define `openGraph` in their metadata without `images`, which replaces the root layout's image, so they ship no og:image:
/about /blog /clarity /contact /cookies /deliver /apps /apps/works /apps/proof /apps/commerce /how-i-build /process-quality-system /resources/six-sigma /privacy /pricing /resources/audit-checklist /resources/sop-template /resources/erp-selection-playbook /resources/artwork-approval-playbook /resources/decoded-method /retained /transform /tools /case-studies /case-studies/case-study-01 /case-studies/case-study-02 /case-studies/case-study-03 /case-studies/eternal-fitness
Fix: create a small helper in lib/seo.ts, e.g. `export const OG_IMAGE = [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Decoded Ops' }]`, and add `images: OG_IMAGE` to each of those pages' openGraph (and `images: ['/opengraph-image']` to twitter where a page defines twitter). Also make sure each page's openGraph has `url` equal to its own canonical URL.

## 5. Wrong og:url on three tools pages
/tools/automation-roi-calculator, /tools/downtime-cost-calculator, /tools/rto-calculator emit og:url = https://decodedops.co.uk (the homepage). Set each to its own URL.

## 6. Internal links to a redirect
Replace every internal link to `/fractional` (it 308-redirects to /retained) with `/retained`. grep app, components, lib, content/data files. The locations fractional-cto template is one known place.

## 7. SVG template bug on all town pages
lib/coverage-map.ts line ~125 outputs the literal text `${wx + 16}` and `${wy + 64}` into SVG attributes on /locations/* pages (browser console errors "Expected length"). Find where the string loses its template-literal evaluation (it may be generated as a template, then embedded somewhere in plain quotes, or escaped) and make the x/y attributes numeric. Search the whole repo for any other literal `${` that ends up in rendered HTML/SVG strings (e.g. in page.tsx files that use dangerouslySetInnerHTML with plain-quoted strings) and fix those too.

## 8. Images: modern format, sizes, caching
All site imagery is plain `<img>` pointing at JPGs in public/images (much of it inside dangerouslySetInnerHTML strings, so next/image is not an option there).
a) Write a one-off script scripts/optimise-images.mjs using `sharp` (it ships with Next; if not resolvable, add it as a devDependency) that, for every .jpg/.jpeg/.png under public/images: writes a sibling .webp (quality 78) resized so its width is at most 1600px (never upscale). Run it and commit the .webp files.
b) Replace every reference to those images in app/, components/, lib/ (TSX, TS, CSS, HTML strings) with the .webp path. Keep the JPGs in place (old links/emails may reference them). Do not change the og image or favicon.
c) Every `<img>` that lacks width/height: add them (read the real dimensions from the file with sharp in the script and print a table you can use).
d) next.config.ts headers(): add a rule for source '/images/:path*' with `Cache-Control: public, max-age=2592000, stale-while-revalidate=86400`.

## 9. Largest Contentful Paint
- /retained: the hero image `<img class="tx-photo__shot" src="/images/money/thread-spools-2026-09.jpg">` is loading="lazy" and is the LCP element. Remove lazy from it and add fetchpriority="high". Do the same check on every page template: the FIRST image in the hero/first section must not be loading="lazy" and should have fetchpriority="high"; every image below the fold should have loading="lazy" decoding="async".
- Homepage /: the LCP element is a hero `<p>` that paints at 6.4s on mobile. Check app/page.tsx, app/homepage.css and d17 css for above-the-fold elements that start hidden (opacity:0, visibility:hidden, transform reveal animations, `m-draw`/reveal classes waiting for JS or IntersectionObserver). Hero text must be visible at first paint; keep any animation only on decorative artwork, starting from a visible state, and wrap motion in `@media (prefers-reduced-motion: no-preference)`. Apply the same rule to the hero of /about, /retained, /apps/works and the locations templates.

## 10. Colour contrast (WCAG AA) — keep the palette, add accessible text shades
Measured failures:
- Brand cerulean #219ebc used as TEXT on light backgrounds: 2.98:1 on #f8f9fa, 3.14:1 on #fff (logo "Ops" span in header a.logo > span, h1 accent spans on locations pages `span.h1.em`, links `a.text-cerulean`, small labels in cards, the /apps/works `p.table-foot > a`, `.docmini .row b` on the homepage).
- Subtle text #5a7d8f: 4.18:1 on #f8f9fa, 4.02 on #f2f5f6, 3.81 on #eceff1, 3.36 on #dce2e5 (blog `.post-meta span`, `.related-list .tag`, homepage `.notes .note .no`, `.origin-case .disclose`, breadcrumb/ol `li > a > span`, locations `p.direct`, `.loc-ctx span`).
- #8ecae6 big numbers on white cards (1.78:1) on locations `div.grid > div.card > div` (font-size --do-text-3xl).
- #219ebc text on #124e66 dark cards (2.89:1) on locations cards; `.loc-how .card p` uses opacity:0.4 on dark (3.41:1).
Fix with tokens, not one-off hexes:
- Add `--do-cerulean-text: #176f86` (5.45:1 on #f8f9fa) and use it wherever cerulean is used as text/link colour on a light background (Tailwind `text-cerulean` class included — add a `text-cerulean-text` utility or redefine what `text-cerulean` means for text). Cerulean stays unchanged for fills, borders, icons and artwork.
- Change the subtle text token (whatever maps to #5a7d8f, e.g. --do-text-subtle) to #486a7b. For text on #dce2e5 grey chips, use the body text colour #3a5f74.
- Big numbers on white: use prussian or --do-cerulean-text instead of #8ecae6.
- On dark (#124e66 / #0e3a50) backgrounds: use #8ecae6 (5.09:1) instead of #219ebc for small text; replace opacity:0.4 text with a solid #a7b8c1.
- Links inside paragraphs (locations `p > a.text-cerulean`): add `text-decoration: underline` so they don't rely on colour alone.
Update D:\apps\design-systems is NOT in scope; instead add a short "Accessible text shades (CR-WEB-065)" note to the website's own design-system notes file if one exists in app/design-system/.

## 11. Heading order
- Footer: `div.f-top > div.f-col > h4` column headings follow the page's last h2/h3 and skip a level. Change them to `<p class="...">` (keep identical styling via a class) or to h2 with the same visual style. Footer is components/Footer*.
- Locations template: artwork `figure.d17 .foot h3` and `.stations .st h4` headings inside decorative art: change to styled `<div>`/`<span>` (they are artwork labels, not document headings).
- grep other D17 art strings for h3/h4 used as art labels and convert the same way.

## 12. Duplicate organisation schema on town pages
The 58 /locations/* pages emit two full ProfessionalService JSON-LD blocks (the root layout's plus their own). In the location templates, change their own block to a `Service` (or keep ProfessionalService but) that references the organisation by `"provider": {"@id": "https://decodedops.co.uk/#organisation"}` plus `areaServed` for the town, instead of repeating the whole organisation. Do not remove the layout block.

## Out of scope (do not touch)
Titles, meta descriptions and H1 text (another unit rewrites those). Analytics/consent scripts. Page copy. Any redirect except as above.
