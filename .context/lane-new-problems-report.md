# Lane D — new problem pages · 31 Jul 2026

## Pages created

| # | Problem page | Source HTML | Next.js route |
|---|---|---|---|
| 1 | Buy vs build | `problems-buy-vs-build.html` | `/problems/buy-vs-build` |
| 2 | Data scattered | `problems-data-scattered.html` | `/problems/data-scattered` |
| 3 | Inventory blind | `problems-inventory-blind.html` | `/problems/inventory-blind` |
| 4 | Legacy system | `problems-legacy-system.html` | `/problems/legacy-system` |

## Build verification

`npm run build` exit 0. All four routes listed as static prerendered routes in the build
output:

-   `/problems/buy-vs-build`
-   `/problems/data-scattered`
-   `/problems/inventory-blind`
-   `/problems/legacy-system`

## `Discovery Day` check

`rg "Discovery Day" app/problems` returns zero hits.

## What was ported

-   Exact copy from each HTML `<main>` block, JSX-ified (className, self-closing tags,
    camelCase SVG attributes, `&apos;` / `&ldquo;` / `&rdquo;` where needed).
-   `<Metadata>` built from each HTML file's own `<title>` and `<meta description>`.
-   `@graph` JSON-LD schema block with `FAQPage` — FAQ entries crafted from each page's
    content, following the `erp-implementation-failure` pattern.
-   `BreadcrumbSchema` component on every page (Home → Problems → [problem]).
-   Primary CTA links to `/contact` with "Book an App Scoping Session" copy (preserved
    from source HTML — no change to a different product).
-   Secondary CTA links preserved: `/apps/data-app` (buy-vs-build, data-scattered,
    inventory-blind), `/how-i-build` (legacy-system).
-   Hero images use `/images/hero-craft.jpg` (the `assets/commerce/hero-workshop.jpg`
    reference from the HTML source does not exist in this repo; `hero-craft.jpg` is the
    closest available public image).

## CSS additions

Added to `app/design-system/marketing-pages-extra.css` (already imported globally):
-   `.cause` + `.cause .n` — numbered kickers on cause cards
-   `.answer` — amber-left-border answer box on `.g-navy` sections
-   `.symptoms` — two-column symptom checklist with amber dot markers
