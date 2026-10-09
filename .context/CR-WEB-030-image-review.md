# CR-WEB-030 — Production Image Inventory & Swap Proposal

**Unit:** u42 · **Date:** 2026-09-14 · **Scope:** read-only inventory + proposal, no repo changes, no git, no dev server.

---

## Summary

| Metric | Count |
|---|---|
| Sitemap URLs | 155 |
| Pages crawled | 103 (all unique templates; 36 of 38 `/locations/*` city pages sampled down to 2 — see Method) |
| Distinct raster photos/screenshots live on production | 13 |
| Blog SVG artwork files live (of 133 on disk, 61 orphaned) | ~75, across 29 posts |
| Inline DO-ART SVG diagram plates live (code components, not image files) | 107 registered, deployed on ~45 pages |
| New/candidate artwork catalogued (Part B) | 24 assets |
| Swaps proposed | 9 |
| Keep-as-is items | 10 |
| Gaps (no suitable new artwork exists) | 5 |

**Headline finding:** most money pages (`/clarity`, `/deliver`, `/retained`, `/transform`, `/pricing`, `/how-i-build`, `/process-quality-system`, `/small-business`, all four case-study pages) carry **zero photography** — only one inline DO-ART SVG diagram each. The sector pages are half-photographed: 4 of 9 (`workwear`, `promotional-merchandise`, `teamwear-clubwear`, `schoolwear`) have a real photo, the other 5 (`awards-engraving`, `garment-decoration`, `labels-packaging`, `print-promotional`, `signs-graphics`) have none — and matching category photography for exactly those gaps (`cat-awards.jpg`, `cat-packaging.jpg`, `cat-print.jpg`, `cat-signage.jpg`) already exists, unused, in the design-systems asset library. Separately, `/about` is supposed to carry Craig's own portrait (`craig-blackman.jpg`, per the design register's DO-ART-904 rev 02 entry) but the live page still shows a generic thread-spools stock-style photo — the portrait was never actually shipped.

Blog artwork (thumbnails + inline figures on all 29 posts) is **explicitly out of scope for this proposal** — it is owned end-to-end by the already-raised CR-WEB-028 (`wo-blog-artwork-redesign-2026-09-09`), which is planned but not yet built (0 of 34 units done). Duplicating it here would conflict with that WO's scope lock.

**Top 5 highest-value swaps:**
1. `/about` hero: generic `thread-spools.jpg` → Craig's own portrait `craig-blackman.jpg` (asset already exists, was designed for this exact slot, never shipped).
2. `/sectors/awards-engraving`: no photo → `cat-awards.jpg` (asset exists, unused).
3. `/sectors/labels-packaging`: no photo → `cat-packaging.jpg` (asset exists, unused).
4. `/sectors/print-promotional`: no photo → `cat-print.jpg` (asset exists, unused).
5. `/sectors/signs-graphics`: no photo → `cat-signage.jpg` (asset exists, unused).

All five require zero new production — the files are sitting in `D:\apps\design-systems\decoded-marketing\assets\commerce\` today.

---

## A. Inventory — what's live on decodedops.co.uk

### A1. Raster photography / screenshots in production use

| # | File | Used on (page · role) | Alt text | Dimensions | Origin |
|---|---|---|---|---|---|
| 1 | `/images/hero-craft.jpg` | `/` hero; reused (no alt swap, same file) as background/illustrative image on 6 `/problems/*` pages (`ai-paralysis`, `bottleneck-growth`, `buy-vs-build`, `data-scattered`, `inventory-blind`, `legacy-system`, `ops-in-owners-head`) | Varies per page — page-specific, non-empty, descriptive (good practice) | 1600×1076 | Stock/photo |
| 2 | `/images/sectors/thread-spools.jpg` | `/` inline; `/about` hero; `/sectors/schoolwear`; `/problems/wrong-erp-software` | Non-empty, descriptive, varies per page | 1600×1067 | Stock/photo (embroidery floor) |
| 3 | `/images/real-example.jpg` | `/problems/seasonal-peaks`, `/problems/spreadsheet-addiction` | Non-empty, descriptive | 1600×1067 | Stock/photo |
| 4 | `/images/sectors/cat-promo.jpg` | `/sectors/promotional-merchandise` card | Non-empty | 900×600 | Stock/photo |
| 5 | `/images/sectors/cat-workwear.jpg` | `/sectors/workwear` card | Non-empty | 900×596 | Stock/photo |
| 6 | `/images/sectors/prod-polo.jpg` | `/sectors/teamwear-clubwear` card | Non-empty | 900×1125 | Stock/photo |
| 7 | `/images/apps/data-app-dashboard.png` | `/apps/data-app` hero screen | Non-empty, detailed | 3200×3072 | Open Design / product screenshot |
| 8 | `/images/apps/data-app-catalogue.png` | `/apps/data-app` inline | Non-empty | 3200×2000 | Product screenshot |
| 9 | `/images/apps/data-app-supplier-import.png` | `/apps/data-app` inline | Non-empty | 3200×2000 | Product screenshot |
| 10 | `/images/apps/artwork-approval.png` | `/apps/artwork-manager` hero | Non-empty | 3200×2000 | Product screenshot |
| 11 | `/images/apps/commerce-plp.png` | `/apps/commerce` hero | Non-empty, detailed | 2160×3816 | Product screenshot |
| 12 | `/images/apps/commerce-pdp.png` | `/apps/commerce` inline | Non-empty | 3200×2000 | Product screenshot |
| 13 | `/images/six-sigma-cover.png` | `/resources/six-sigma` (rotated cover graphic) | Non-empty | 1075×1521 | Open Design output |

No `<picture>`/`<source>` responsive-art-direction markup found anywhere on the site (Next.js `<Image>` fill/srcSet handles responsiveness instead). No CSS inline `background-image` found on any crawled page. `og:image` on most pages is the dynamic `/opengraph-image` route (generated, not a static file); a handful of blog posts point `og:image` straight at their thumbnail file.

### A2. Blog artwork (29 posts) — out of scope, tracked by CR-WEB-028

Every post has a `-thumb.svg` (card/OG image) and most have two inline `-img-1.svg`/`-img-2.svg` figures, all built from the same diagonal gradient-wash template. 6 posts (`local-seo-print-shop`, `cloud-erp-print-business`, `what-is-erp-decorated-goods`, `erp-selection-decorated-goods`, `hire-fractional-cto`, `lean-six-sigma-small-business`) have thumbnail only, no inline figures. `decoded-method-operations-framework` and `how-to-evaluate-an-ai-tool-without-getting-sold-to` already carry different (non-template) artwork.

**Do not swap these here.** `D:\apps\infrastructure\.context\workorder-blog-artwork-2026-09-09.md` (CR-WEB-028) already owns a full redesign: 5 treatments (Schematic/Measure/Compare/Photographic/Typographic + Cartoon), DO-ART-601–629 numbers allocated, per-post production plan, and the 61 orphaned SVGs identified for deletion. Status per its ledger: raised, planned, **0 of 34 units built**. This inventory does not duplicate that plan.

### A3. Inline SVG diagram plates (DO-ART library) — code, not image files

Every money page, problem page, sector page and case-study page carries exactly one large inline SVG diagram (`<svg>` count of 1–2 per page, confirmed by direct HTML fetch), drawn from the DO-ART plate library registered in `D:\apps\design-systems\decoded-marketing\plate-register.html`. These are React/JSX components (e.g. `components/graphics/SystemsDisconnectedGraphic.tsx`, plus per-page inline plates), not swappable image files — they'd need a code change, which is out of scope for this file-swap exercise. Examples: DO-ART-306 on `/clarity`, DO-ART-104 on `/apps`, DO-ART-305 on `/deliver` and `/process-quality-system`, DO-ART-204 on `/retained`, DO-ART-403 on `/transform`, DO-ART-403–422 (one per problem page), DO-ART-207/205/206/903 on the case-study pages. Flagged for awareness only — 107 plates registered in total (DO-ART-000/1xx architecture, 2xx measure, 3xx flow, 4xx compare, 6xx blog, 7xx social, 9xx evidence).

### A4. Pages with no imagery at all (beyond the single inline plate + dynamic og:image)

`/clarity`, `/deliver`, `/retained`, `/transform`, `/pricing`, `/how-i-build`, `/process-quality-system`, `/small-business`, `/case-studies`, `/case-studies/case-study-01`, `/case-studies/case-study-02`, `/case-studies/case-study-03`, `/case-studies/eternal-fitness`, `/contact`, `/cookies`, `/privacy`, all `/resources/*` except `six-sigma`, all `/tools/*`, all `/locations/*`.

### A5. Orphaned / unused assets found in the repo but not referenced by any live page

Confirmed by grepping `app/` for each filename:

| File | Status |
|---|---|
| `public/images/apps/artwork-manager-hero.jpg` (1600×2397) | Not referenced in any `app/` route; only appears in an old lane log (`.context/lanes/apps-imagery-20260903-124213.log`) |
| `public/images/decoded-method-cover.png` (1075×1521) | Not referenced anywhere in `app/`; same treatment pattern as the live `six-sigma-cover.png` but never wired to `/resources/decoded-method` |
| `public/images/sector-credibility.jpg` (used by `components/SectorCredibilityPhoto.tsx`) | The component itself is never imported by any page — dead component, dead asset |
| `components/HeroVisual.tsx` (references `/images/hero-craft.jpg`) | Dead component — `hero-craft.jpg` is live, but via direct `<img>` in `app/page.tsx`, not through this component |
| 61 of 133 blog SVGs | Superseded-slug duplicates (e.g. `ai-isn-t-your-problem...` vs `ai-isnt-your-problem...`, three generations of `bulk-order-management-*`, `embroidery-quality-standards-*`, `embroidery-stitch-density-*`, `heat-press-temperature-*`, `ralawise-integration-*`, `screen-printing-vs-heat-transfer-*`) — already identified and scheduled for deletion by CR-WEB-028, not re-litigated here |

---

## B. New artwork catalogue

Sources checked: `D:\apps\design-systems\decoded-marketing\assets\` (authoritative export), the Open Design app's own project store at `C:\Users\CraigBlackman\AppData\Roaming\Open Design\namespaces\release-stable-win\data\projects\decoded-marketing\` (the `open-design` MCP server failed to connect — read the filesystem directly instead; confirmed identical set of `gen-*.png`/`openrouter-test.png` files, no additional unseen output), `plate-register.html`, `LANE-REPORT-art6xx-register.md`, the blog-artwork work order, and `social/index-posters.html` for the PO- poster families.

| ID / name | Path | Dimensions | Depicts | Suited page / role |
|---|---|---|---|---|
| `cat-awards.jpg` | `design-systems/decoded-marketing/assets/commerce/cat-awards.jpg` | 900×1350 | Awards/engraving category product shot | `/sectors/awards-engraving` — fills the only unphotographed sector page in that cluster |
| `cat-packaging.jpg` | `.../assets/commerce/cat-packaging.jpg` | 900×1200 | Labels/packaging category shot | `/sectors/labels-packaging` |
| `cat-print.jpg` | `.../assets/commerce/cat-print.jpg` | 900×1200 | Print/promotional category shot | `/sectors/print-promotional` |
| `cat-signage.jpg` | `.../assets/commerce/cat-signage.jpg` | 900×600 | Signs/graphics category shot | `/sectors/signs-graphics` (landscape ratio — matches the existing mixed-ratio pattern already used for `cat-promo.jpg`) |
| `prod-hivis.jpg` | `.../assets/commerce/prod-hivis.jpg` | 900×1348 | Hi-vis workwear product detail | Secondary/inline image on `/sectors/workwear` or `/apps/commerce` |
| `prod-mailer.jpg` | `.../assets/commerce/prod-mailer.jpg` | 900×600 | Mailer/packaging product detail | Secondary image, `/apps/commerce` or `/sectors/labels-packaging` |
| `craig-blackman.jpg` | `.../assets/craig-blackman.jpg` | 1400×1500 | Craig's own portrait, supplied by Craig | `/about` hero — the design register (DO-ART-904 rev 02) already specifies this exact placement; never shipped |
| `hero-workshop.jpg` | `.../assets/commerce/hero-workshop.jpg` | 1600×2397 | Workshop/production-floor photo, portrait crop | Alternate tall hero (DO-ART-905 in the register, noted there as "still absent from the app") — candidate refresh for `/` or `/about` if a portrait crop is needed |
| `gen-bench-flatlay.png` | `.../assets/gen-bench-flatlay.png` | 1024×1024 | AI-generated workbench flat-lay (tools/materials) | Texture/decorative use where licensed stock isn't available — see Gaps re: provenance |
| `gen-bench-flatlay-v2.png` | `.../assets/gen-bench-flatlay-v2.png` | 1024×1024 | Second pass of the above | Same, alternate crop/composition |
| `gen-press-hall.png` | `.../assets/gen-press-hall.png` | 1024×1024 | AI-generated press-hall interior | Same use case — see Gaps |
| `screens/data-app-hero.png` | `.../assets/screens/data-app-hero.png` | 2160×1215 | Data App screen, not currently used live | New lead exhibit candidate for `/apps/data-app` |
| `screens/data-app-dashboard.png` | `.../assets/screens/data-app-dashboard.png` | 2160×2300 | Newer/different crop of the dashboard than the live 3200×3072 version | Refresh candidate for `/apps/data-app` hero |
| `screens/commerce-plp.png` | `.../assets/screens/commerce-plp.png` | 2160×3816 | Same dimensions as the live asset | Already in sync — not a swap candidate |
| `decoded-method-cover.png` | Already in website repo: `public/images/decoded-method-cover.png` | 1075×1521 | Cover-style graphic, same treatment as `six-sigma-cover.png` | `/resources/decoded-method` — pure wiring gap, zero new production |
| PO-BA-01 | `design-systems/decoded-marketing/social/po-ba-01-five-systems-sq.html` | 1200×1200 | Before/After: five systems | Social-first; optional og:image refresh candidate |
| PO-IG-01 | `.../po-ig-01-iso-9001-gate-{sq,pt}.html` | 1200×1200 / 1200×1500 | Benefit infographic: ISO 9001 as a tender gate | Social-first; no matching live page for the 9001 offer yet |
| PO-JN-01 | `.../po-jn-01-engagement-path-{ls,sq}.html` | 1600×900 / 1200×1200 | Journey/timeline: engagement path | Social-first; could suit a `/retained` or `/deliver` supporting graphic if adapted |
| PO-PH-01 | `.../po-ph-01-plain-english-{sq,ls}.html` | 1200×1200 / 1600×900 | Photo-led editorial: "plain English" | **Unfinished** — the design system's own notes say it "will not be finished until a proper shot exists" |
| PO-QT-01 | `.../po-qt-01-bus-tomorrow-sq.html` | 1200×1200 | Quote/statement: "the bus still needs to run tomorrow" | Social-first; candidate for a punchier dynamic og:image |
| PO-QT-02 | `.../po-qt-02-plain-english-sq.html` | 1200×1200 | Quote/statement: "Plain English. No jargon. No vendor agenda." | Social-first |
| PO-QT-03 | `.../po-qt-03-cost-the-gap-sq.html` | 1200×1200 | Quote/statement: "What it doesn't cover is the real decision" | Social-first; content overlaps PO-CV-01, per that file's own comment |
| PO-ST-01 | `.../po-st-01-half-the-day-rate-sq.html` | 1200×1200 | Stat spotlight: day-rate comparison | Social-first; **check for day-rate leak per standing instruction** before any public reuse |
| PO-CV-01 | `.../po-cv-01-covers-a-quarter-sq.html` | 1200×1200 | Stat/quote: "It covers 25%. The decision is the other 75%." | Social-first; a 7th family not caught by the `index-posters.html` gallery page — found by filename search only |

Corrected count: **7 poster families** on disk (PO-BA, PO-CV, PO-IG, PO-JN, PO-PH, PO-QT, PO-ST), not the 6 in the standing memory note — PO-CV-01 and the two extra PO-QT variants (02, 03) exist as files but aren't listed in `index-posters.html`'s own gallery. Worth a `!idea` to get the gallery page caught up, separately from this CR.

Note: the PO-family assets are social-post artboards (square/portrait/landscape, built for LinkedIn/Facebook), not page photography — listed for completeness since Craig's brief asked for everything under the design-systems tree, but they're a secondary fit for the website itself.

---

## C. Swap proposal

| # | Current (page · role · file) | Proposed replacement | Why | Risk | Craig's decision |
|---|---|---|---|---|---|
| 1 | `/about` · hero · `sectors/thread-spools.jpg` | `craig-blackman.jpg` | Design register already specifies Craig's own portrait here (DO-ART-904 rev 02); builds personal credibility on the about page instead of a generic floor photo | Portrait ratio (1400×1500, near-square) vs current landscape slot (1600×1067) — needs a crop/container check | ☐ |
| 2 | `/sectors/awards-engraving` · card · none | `cat-awards.jpg` | Closes the only unphotographed page in the sector set that has a ready asset | None significant — portrait ratio matches the existing `prod-polo.jpg` pattern | ☐ |
| 3 | `/sectors/labels-packaging` · card · none | `cat-packaging.jpg` | Same | None significant | ☐ |
| 4 | `/sectors/print-promotional` · card · none | `cat-print.jpg` | Same | None significant | ☐ |
| 5 | `/sectors/signs-graphics` · card · none | `cat-signage.jpg` | Same | Landscape ratio — confirm the sector-card component already handles mixed ratios (it does; `cat-promo.jpg` is landscape today) | ☐ |
| 6 | `/resources/decoded-method` · cover · none | `decoded-method-cover.png` (already in repo) | Matches the `six-sigma-cover.png` treatment already live one page over; zero production cost | None — asset already shipped, just unwired | ☐ |
| 7 | `/apps/data-app` · hero · `data-app-dashboard.png` (3200×3072) | `screens/data-app-hero.png` (2160×1215) as lead, keep dashboard as inline | Gives the page a distinct hero shot instead of reusing the dashboard screenshot twice in different sizes | Needs alt text + component wiring; confirm the screen is still current (not stale UI) | ☐ |
| 8 | `/apps/commerce` · inline · none | Add `prod-hivis.jpg` or `prod-mailer.jpg` as a second product-detail image | Breaks up two large screenshots with a real product photo, reinforces "trade storefront for physical goods" | Confirm product shown is representative of current catalogue | ☐ |
| 9 | `/` or `/about` · hero (optional) · `hero-craft.jpg` | `hero-workshop.jpg` as an alternate/portrait-crop hero | Fresh, unused, same subject matter (production floor), already flagged in the design register as an intended exhibit that never shipped | Portrait crop (1600×2397) needs a different container than the current landscape hero slot; treat as optional, not urgent — current hero is fine | ☐ |

---

## Keep as is

- `/` hero (`hero-craft.jpg`) and inline (`thread-spools.jpg`) — strong, deliberately placed per DO-ART-901/902, no reason to change.
- `/apps/commerce` (`commerce-plp.png`, `commerce-pdp.png`) — real product screens, on-brand, current.
- `/apps/data-app` (`data-app-catalogue.png`, `data-app-supplier-import.png`) — real screens, keep alongside the hero refresh above.
- `/apps/artwork-manager` (`artwork-approval.png`) — fine as the single exhibit; see Gaps for the hero question.
- `/sectors/workwear` (`cat-workwear.jpg`), `/sectors/promotional-merchandise` (`cat-promo.jpg`), `/sectors/teamwear-clubwear` (`prod-polo.jpg`), `/sectors/schoolwear` (`thread-spools.jpg` reuse) — all real, on-brand photography, no swap needed.
- `/resources/six-sigma` (`six-sigma-cover.png`) — working as designed.
- The 107-plate DO-ART inline SVG library across every money/problem/sector/case-study page — this is the design system's core visual language; a photo-swap pass shouldn't touch it, and changing it is a code change, not an asset swap.
- Blog artwork (all 29 posts) — leave untouched here; CR-WEB-028 owns the redesign and is already scoped and numbered.
- `/problems/*` hero-craft.jpg reuse across 6 pages — deliberate, each with distinct page-specific alt text; not worth diluting with different photos per page.

---

## Gaps — no suitable new artwork exists (candidate briefs for Open Design)

1. **Money pages with zero photography** (`/clarity`, `/deliver`, `/retained`, `/transform`, `/pricing`, `/how-i-build`, `/process-quality-system`, `/small-business`). Brief: one real operations/workshop photo per page to break up long-form copy — low urgency, since the inline DO-ART plate already carries the page's visual weight, but worth a design pass if Craig wants these pages to feel less text-only.
2. **Named case studies without client photography** (`case-studies-hanicks`, `case-studies-tacklebag` map to `case-study-01`/`case-study-02` or `03` — confirm mapping in `data/`). Both clients are named with permission (per DO-ART-205/206 notes). Brief: request one client-supplied product or site photo per named case study; anonymised studies can stay text/plate-only.
3. **`/apps/artwork-manager` hero.** Only one screen exhibit lives on the page today; `artwork-manager-hero.jpg` exists but is orphaned with no confirmed provenance (only referenced in an old lane log). Brief: confirm whether that asset is production-ready, or commission a proper hero screen matching the treatment used for `data-app-hero.png`.
4. **AI-generated assets lack a provenance record.** `gen-bench-flatlay.png`, `gen-bench-flatlay-v2.png`, `gen-press-hall.png` have no entry in any `image-manifest.json` (the provenance file CR-WEB-028 mandates for photographic blog assets). Brief/action: before any of these ship to the live site, record generation source/model + date, consistent with the standing rule that every photographic asset needs a recorded source.
5. **PO-PH-01 (Photo-Led Editorial) is explicitly unfinished** per the design system's own notes ("will not be finished until a proper shot exists"). Brief: commission the missing photo before this poster — or any website use of it — goes ahead. Also flag PO-ST-01 (day-rate stat) for the standing day-rate-leak content check before any public reuse.

---

## Method

**Crawled:** `/sitemap.xml` (155 URLs) and `/llms.txt` fetched via curl. All 155 URLs were deduplicated to 103 unique-template pages by sampling `/locations/fractional-cto/chichester` and `/locations/tech-audit/chichester` in place of all 38 town-pair location pages — confirmed safe by grepping `components/LocationPage.tsx`, the single template every location page renders through, which contains no image references at all (only a graphics-component import). Every one of the 103 pages was fetched with curl and scanned for `<img>`, `<source>`, inline `background-image`, and `og:image`. Money pages that returned zero `<img>` tags were re-fetched and checked for `<svg>` counts and any `/images|/graphics|/infographics` path string to rule out a missed multi-line tag — confirmed genuinely empty of raster imagery, just one inline SVG plate each.

**Repo cross-check:** grepped `app/` and `components/` in `D:\apps\decoded-ops-website` (read-only) for `/images/`, `/graphics/`, `/infographics/`, `/assets/` references; listed every file under `public/images`, `public/graphics`, `public/infographics`, `public/assets`; got dimensions and file sizes for all 19 raster files using `sharp` (already installed in the repo's `node_modules`) via a script run from the scratchpad. Cross-referenced every "unused-looking" file against `app/` with a targeted grep to confirm orphan status before listing it as such.

**Origin classification:** cross-referenced `D:\apps\design-systems\decoded-marketing\plate-register.html` (parsed all `DO-ART-*` table rows, ~107 entries with their "where used" column) and `LANE-REPORT-art6xx-register.md` to identify which live diagrams are DO-ART plates vs raw photography vs product screenshots.

**New artwork sources:** enumerated `D:\apps\design-systems\decoded-marketing\assets\` in full (brand/commerce/screens/gen-*), got dimensions for every raster file there, and read `D:\apps\infrastructure\.context\workorder-blog-artwork-2026-09-09.md` in full to establish CR-WEB-028's scope and exclude it from this proposal. Located the PO-poster family via `design-systems/decoded-marketing/social/index-posters.html` (6 families confirmed: PO-BA, PO-IG, PO-JN, PO-PH, PO-QT, PO-ST).

**Open Design project store:** the `open-design` MCP server failed to connect (CONNECT_TIMEOUT) — worked around by reading the filesystem directly at `C:\Users\CraigBlackman\AppData\Roaming\Open Design\namespaces\release-stable-win\data\projects\decoded-marketing\`. Found only the same `gen-bench-flatlay(.v2).png` / `gen-press-hall.png` / `openrouter-test.png` files already present in the `design-systems` export — no additional unseen output. `openrouter-test.png` was not catalogued (clearly a test generation, not a candidate asset).

**Skipped, and why:** individual blog-post inline figures (≈75 live SVGs across 29 posts) were not itemised file-by-file — CR-WEB-028 already has a complete per-post audit and production plan, and re-doing it here would duplicate that work order rather than inform this one. The 107 DO-ART inline SVG plate bodies were not opened individually — the plate register's own "where used" column already gives the page mapping needed for this inventory, and since they're React components rather than image files, a swap proposal doesn't apply to them the same way. `openrouter-test.png` and internal brand/app-icon assets (favicons, app icons, LinkedIn/Facebook profile pictures) were noted but excluded from the swap catalogue as not relevant to page-body imagery.
