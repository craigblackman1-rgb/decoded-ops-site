# Artwork swap map, CR-WEB-074 (WO-INF-084)

Plan only. Nothing in any repo was edited. Exports are in `swap-exports\` beside this file (15 webp, `manifest.json`, `_contact-sheet.jpg`).

**Source read:** `decoded-ops-website`, `origin/main` 9f1caed (= `origin/staging` per the audit) and the worktree `web046-art-sizing` (HEAD moved 8d58901 -> fe3d26c while I read; the CSS lane is committing). Line numbers below are from the worktree on 8 Oct and WILL drift. **The lane must anchor on `file` + `data-no="DO-ART-nnn"` and re-grep, not trust line numbers.**
**Rules read:** DESIGN.md section 12 (placement sizes WEB-HERO 1600x900 / WEB-CARD 900x600, "one treatment per piece, varied across a set", photos are evidence, replaced asset = new filename), `register.html` (origin/main), memory notes on proof-approval.jpg and replaced-asset filenames.

## 0. Findings that change the plan

1. **Decision 4 is already done.** `/apps/artwork-manager` and `/apps/proof` are one page (`app/apps/proof/page.tsx`). `next.config.ts` already has `{ source: '/apps/artwork-manager', destination: '/apps/proof', permanent: true }`. The audit counted two URLs because its crawler followed the redirect (staging answers 302 from Cloudflare Access before Next sees it). No internal link points at the old URL. DO-ART-945 appears once. Action: confirm `curl -sI https://decodedops.co.uk/apps/artwork-manager` returns 308 on prod. Nothing else.
2. **Two number collisions the audit missed.** `systems-dont-talk` carries a *different drawing* (the "evidence ledger" schematic) as `DO-ART-918`, and `spreadsheet-addiction` carries a *different schematic* as `DO-ART-917`. Both inherit the home pieces' global CSS (`.a918` = 50/50 grid + `aspect-ratio:1152/600`; `.a917` = 31% grid) because the class name is the number. They need renumbering (section 7), not swapping.
3. **The register says the problem pages' inline slot "reuses 918/917/718/719" by design** (rows 960-978). Craig's dedupe rule overrides that; update those rows (section 9).
4. **Register vs site mismatch on hero photos:** 975 is documented as over the generated bench, 978 over the generated press hall, 969 over the embroidery head. The site actually ships `hero-workshop-783ec1` (975), `thread-spools-2195b5` (978, 969). The library crops below match 969 and are better than the register for 975/978; register rows change.
5. **DO-ART-719 is the same problem** (5 uses: buy-vs-build, ecommerce-not-connected, legacy-system, wrong-erp-software, about). Not in this brief. Recommend a follow-up CR: keep on buy-vs-build + about, swap the other three.
6. **/problems/quoting-takes-too-long has no artwork at all.** Follow-up, not in scope.
7. **The photography library is client-premises photography** (Cobra Workwear proof pack in frame 20, CMS/Puma/Macron banner in 21, SMI cartons in 12, Joma packs in 27-35, Portwest cartons in 24, club names on garment labels in 4). Case study 03 is deliberately unnamed. I excluded those frames and blurred residual marks in the crops I used (cricket-helmet and boiler boxes, monitors, delivery-note names). **Craig must confirm he is happy to publish unnamed crops of these premises** (open item 1). AdobeStock 36-38 are excluded (stock, against "photos are evidence" and the audit's no-stock check). Topic fit is by subject family (data -> racking, process -> desk/paperwork, platform -> floor/press), not page-specific; the library cannot support more.

## 1. Decision 1: DO-ART-918 (home only)

Home keeps it (`app/page.tsx`, `data-no="DO-ART-918"`, home photo untouched). Systems-dont-talk's *different* 918 is handled in section 7.

| Page | Current piece / file | file:line (anchor `data-no="DO-ART-918"`) | Replacement | Why it fits | Copy source |
|---|---|---|---|---|---|
| /problems/cant-scale-operations | 918 photo + ledger, `cat-workwear-401e08` | `app/problems/cant-scale-operations/page.tsx:157` (`inlineArt918`, used `:225`) | **DO-ART-993** "The spec sheet quotes a day that never happens" (wide `.sw`, drawn, no photo). Source `app/resources/capacity-planner/page.tsx:96-132`. Seen once today (capacity-planner), so 2 uses after. | Page argument is capacity quoted vs the day that actually runs. 993 strikes the five assumptions behind a spec-sheet capacity against the real day. Drawn plate, so the page loses its repeated photo as well. | Page: "Your systems and processes were built for half your current size, and now they're becoming the ceiling on your growth." / "You've hired more staff but it hasn't made anything faster". 993's figures are already labelled "Example" in the piece; no new numbers. |
| /problems/inventory-blind | 918, `cat-workwear-401e08` (also used as the shelf inset at `:117`) | `app/problems/inventory-blind/page.tsx:202` | **DO-ART-943** "One parent product, every variant, every bin" (wide `.sw`, catalogue screen + warehouse put-away phone, bench photo). Source `app/apps/works/page.tsx:232-276`. 2 uses after. | The section above it says "the number on screen is the number on the shelf"; 943 shows exactly the bin-scan put-away that makes that true. Its photo is the generated bench flat-lay (generic), not the polo. | Page: "One real-time stock picture, not a guess reconciled weekly." / "Decoded Works... combines what your suppliers say they've got with what's actually moved through your own warehouse". |
| /problems/manual-workarounds | 918, `cat-workwear-401e08` | `app/problems/manual-workarounds/page.tsx:93` (`inlineArt918`, used `:148`) | **NEW DO-ART-1009** "Every workaround, listed" (variant of the 718 `.sw-doc` component, section 6). Photo `plate-job-sheets-63dd9c.webp` (E11). | Nothing existing fits "shadow systems"; the page's own symptoms and cause 3 supply every row. | See section 6, 1009. |
| /problems/seasonal-peaks | 918, `cat-workwear-401e08` | `app/problems/seasonal-peaks/page.tsx:224` | **NEW DO-ART-1010** "Written down before the peak" (718 variant). Photo `plate-pallets-12eebd.webp` (E12). | Hero 973 already draws the demand curve; 931/994 would repeat it. The page's cause 02 (temps cannot follow an undocumented process) is the unillustrated argument. | See section 6, 1010. |

## 2. Decision 2: DO-ART-718 (keep on two)

Keep: **ops-in-owners-head** (its register text calls 718 "the answer"; eyebrow already reads "The register, finished") and **bottleneck-growth** (its solution section is "Document the process, not the person", SOPs). Both keep 718 but with **new photos** (section 5 rows E01, E02), because both currently sit on `hero-workshop-783ec1`, the same file as their heroes.

| Page | Current | file:line (anchor `data-no="DO-ART-718"`) | Replacement | Why it fits | Copy source |
|---|---|---|---|---|---|
| /problems/ai-paralysis | 718, `hero-workshop-783ec1` | `app/problems/ai-paralysis/page.tsx:231` (eyebrow `:229` "The foundation") | **DO-ART-997** "Five areas, one place to start" (ops-health-score result screen, `sx`; seen once, 2 after). Source `app/tools/ops-health-score/page.tsx:78-104`. Render with `class="d17 sx sx--solo ..."` (560px centred; `.sx--solo` exists on the web046 branch, so land after it merges). Change eyebrow to "The assessment · DO-ART-997". | `/tools/ai-readiness-check` redirects to this tool; the page's CTA is "Get an honest assessment". Shows what an honest readiness read looks like (five areas, lowest in amber), a different treatment from the 960 hero (AI chat screen). | Page: "...nobody's supplier data is clean enough to feed into anything, which is what an AI readiness assessment checks first." / "You can't automate what hasn't been documented." Figures inside 997 are labelled Example. |
| /problems/disaster-recovery | 718, `hero-workshop-8bff06` | `app/problems/disaster-recovery/page.tsx:104` (`inlineArt718`, used `:199`) | **DO-ART-998** "Seven hours back, four times a year" (RTO calculator result, `sx`; seen once, 2 after). Source `app/tools/rto-calculator/page.tsx:58-83`. `sx--solo`. | How fast each system can realistically be recovered is the page's own deliverable. | Page: "A clear, prioritised list covering what to protect first, how fast each system can realistically be recovered, and what it would cost to recover faster." / "You couldn't say how long you can afford to be offline without guessing". |
| /problems/no-ops-owner | 718, `hero-workshop-8bff06` | `app/problems/no-ops-owner/page.tsx:104` | **NEW DO-ART-1011** "Who owns operations?" (718 variant, section 6). Photo `plate-racking-bays-626a9b.webp` (E13). | The page's decision is three structures (hire, part-time lead, other). Hero 971 is the vacant org chart; this is the options sheet. | See section 6, 1011. |
| /problems/slow-processes | 718, `hero-workshop-8bff06` | `app/problems/slow-processes/page.tsx:131` | **DO-ART-986** "The same 1,000 garments, two floors" (wide `.sw`, drawn; seen once, 2 after). Source `app/resources/six-sigma/page.tsx:186-208`. | Piece says "settings standardised, procedures written down, checkpoints measured", the page's causes 1 and 2 (never written down; caught at the end). Not 990: it draws waiting-vs-work like hero 974. | Page: "The process was never written down" / "Problems are caught at the end, not where they start". 986 uses standard sigma arithmetic already on its home page; no new claim. |

## 3. Decision 3: DO-ART-917 (home only)

| Page | Current | file:line (anchor) | Replacement | Why it fits | Copy source |
|---|---|---|---|---|---|
| /problems/data-scattered | 917 photo, `thread-spools-2195b5` | `app/problems/data-scattered/page.tsx:218` (eyebrow `:216`) | **DO-ART-942** "Keep your platform, or let this become it" (wide `.sw`, drawn: every channel reads one catalogue either way). Source `app/apps/works/page.tsx:128-200`. 2 uses after. Imports `d17-apps-cases.css`. | The page's argument is "the data was never supposed to have one home"; 942 is the picture of one catalogue feeding website, marketplaces and trade. **Verify it renders** (it was blank in the audit screenshot because it draws on scroll). **Fallback if it looks weak: keep 917 here** (home + one page satisfies "used at most once"); the argument "six sources, one catalogue" is the strongest 917 fit on the site. | Page: "Six places, six different answers." / "The data was never supposed to have one home." / "No consistent SKU across sources". |
| /problems/erp-implementation-failure | 917 photo, `thread-spools-2195b5` (also two small prints in 967 at `:145`, `:147`) | `app/problems/erp-implementation-failure/page.tsx:159` | **DO-ART-991** "Brief first, every demo scored against it" (ERP selection playbook hero, `sx`; seen once, 2 after). Source `app/resources/erp-selection-playbook/page.tsx:139-174`. `sx--solo`. Eyebrow "The brief · DO-ART-991". | This page already carries the Hanicks figures twice (967 + the before/after block); 917 was a third copy. 991 is the unshown half of the argument: the written brief a vendor is scored against. The page links to the ERP selection playbook. | Page: "It's doing the checking first, before any platform gets chosen... scope in writing before anything is signed." |

## 4. Decision 4: DO-ART-945 (/apps/artwork-manager, /apps/proof)

Same app, one route, redirect already live (section 0.1). No file changes. Keep 945 on `/apps/proof`.

## 5. Decision 5: one distinct photo per problem page (15 pages)

After the swaps, only 13 slots on 11 pages still need a repeated-photo replacement; the other 4 pages lose their repeated photo because the replacement piece is drawn or carries its own existing image. Every new photo is a different library frame; no frame is used twice. Files live in `swap-exports\`. `object-position` hints are for portrait `.sx` hero columns (537px wide, 16:9 crop shows about 56%).

| Page | Slot (anchor) | Old photo | New photo (export id) | Set `object-position` / alt-text edit |
|---|---|---|---|---|
| ai-paralysis | 718 plate -> 997 | hero-workshop-783ec1 | none (997 uses its existing `gen-bench-flatlay-v2-6b4161`). Hero 960 `cat-signage-58e48c` stays (unique). | n/a |
| bottleneck-growth | hero 961 `:98` | hero-workshop-783ec1 | **E04** `hero-embroidery-floor-84216c.webp` | 40% 50%. aria already says "embroidery floor", still true. |
| bottleneck-growth | 718 plate `:201` | hero-workshop-783ec1 | **E01** `plate-crates-aisle-e843b7.webp` | 50% 50%. aria-label: replace "over a photograph of an embroidery floor" with "over a photograph of a workshop floor, crates and racking". |
| cant-scale-operations | 918 -> 993 | cat-workwear-401e08 | none (drawn). Hero 963 is SVG. | n/a |
| data-scattered | 917 -> 942 | thread-spools-2195b5 | none (drawn). Hero 964 `prod-polo-5947fe` stays (unique). | n/a |
| disaster-recovery | 718 -> 998 | hero-workshop-8bff06 | none (998 has no photo). | n/a |
| erp-implementation-failure | 967 print "The floor it has to serve" `:145` | hero-workshop-783ec1 | **E08** `card-warehouse-floor-f1d62c.webp` | 50% 50% |
| erp-implementation-failure | 967 print "Decoration, the part demos skip" `:147`; 917 `:161` -> 991 | thread-spools-2195b5 | **E09** `card-embroidery-heads-50b561.webp` | 60% 50% |
| inventory-blind | shelf inset in 968 `:117`; 918 `:204` -> 943 | cat-workwear-401e08 | **E10** `card-garment-shelf-724253.webp` | 50% 50%; the inset caption "Bin A-03 · on the shelf" fits. Hero 968 `cat-packaging-48f149` stays. |
| legacy-system | hero 969 `:101` | thread-spools-2195b5 | **E05** `hero-embroidery-heads-b5b1fb.webp` | 70% 50%. aria "over an embroidery machine" is now true. |
| manual-workarounds | 918 -> 1009 | cat-workwear-401e08 | **E11** `plate-job-sheets-63dd9c.webp` (inside 1009) | 50% 50%. Hero 970 `cat-promo-6d25d2` stays. |
| no-ops-owner | 718 -> 1011 | hero-workshop-8bff06 | **E13** `plate-racking-bays-626a9b.webp` (inside 1011) | 50% 40% |
| ops-in-owners-head | hero 972 `:96` | hero-workshop-783ec1 | **E03** `hero-stockroom-mixed-fa24e6.webp` | 50% 50%. aria: replace "dimmed photograph of the embroidery floor" with "dimmed photograph of a stockroom". |
| ops-in-owners-head | 718 plate `:209` | hero-workshop-783ec1 | **E02** `plate-dtf-conveyor-a1f1d1.webp` | 40% 50%. aria: "over a photograph of a press and conveyor dryer". |
| seasonal-peaks | 918 -> 1010 | cat-workwear-401e08 | **E12** `plate-pallets-12eebd.webp` (inside 1010) | 30% 50%. Hero 973 `cat-awards-70dc2f` stays. |
| slow-processes | 718 -> 986 | hero-workshop-8bff06 | none (drawn). | n/a |
| spreadsheet-addiction | hero 975 `:62` | hero-workshop-783ec1 | **E07** `hero-office-paperwork-75fcd2.webp` (monitor blurred) | 55% 50%. aria "over a photograph of a tangle of spreadsheets" -> "over a photograph of a desk buried in paperwork". |
| wrong-erp-software | hero 978 `:72` | thread-spools-2195b5 | **E06** `hero-racking-aisle-7d129e.webp` (carton marks blurred) | 50% 50%. aria "embroidery floor" -> "racking aisle". |

(Pages in the list: ai-paralysis, bottleneck-growth, cant-scale-operations, data-scattered, disaster-recovery, erp-implementation-failure, inventory-blind, legacy-system, manual-workarounds, no-ops-owner, ops-in-owners-head, seasonal-peaks, slow-processes, spreadsheet-addiction, wrong-erp-software = 15.)

**After the swap, delete** `public/images/d17/problems/{cat-workwear-401e08,hero-workshop-783ec1,hero-workshop-8bff06,thread-spools-2195b5}.{webp,jpg}` once `grep -rn "<name>" app components data lib` returns nothing. (Two of those are the 520px files the audit flagged; deleting them removes the blur at source, no re-export needed.)

## 6. New figure variants (3), exact copy

All three reuse the **DO-ART-718 `.sw-doc` component** unchanged: same figure classes plus the new number class (`class="d17 sw sw-doc a718 a1009"`; no new CSS needed, `a1009` is a hook only), same markup (`figcaption.sw-cap` with `.k`, `.bar`, `h3`, `p`, `ul.keys` of three; `.stage` with `.d17-doc.doc-r` register table, `.d17-doc.sop.doc-s` five-section sheet, `.d17-doc.il.doc-l` two log entries). `data-rev="01"`, `data-tx="photo"`, mark line `decodedops.co.uk · DO-ART-nnnn · Rev 01`. Every line below is quoted or paraphrased from the page's own copy; no statistic is invented. Where a row says "Not measured" colour that cell with the amber token already used for `.chip--o` in `d17-problems.css` (amber marks the gap, one side of the argument; no new colour).

### 1009 · manual-workarounds · "Every workaround, listed" · photo E11
- `.k`: "Manual workarounds <span>· the second system</span>"; `h3`: "Every workaround, listed."
- `p`: "The cost of workarounds never appears on an invoice. Until it's measured, there's no case for fixing it." (page cause 3)
- keys: **01** Find every one / on site · **02** Cost it / time, mistakes, risk · **03** Remove them / quick wins first (page howIHelp)
- Doc 01 `WR-01 · Workaround register`, h4 "Every workaround, one page", sub "what it is · where it lives · what it costs". Columns Workaround / Where it lives / Cost:
  1. Master spreadsheet, updated by hand daily / Spreadsheet / Not measured
  2. The same data typed in more than once / Official system and sheet / Not measured
  3. One system checked against another / By hand, every week / Not measured
  4. Month-end data pull / Manual / Not measured
  5. Custom spreadsheet or database, now critical / One person / Not measured
- Doc 02 `WC-01 · Workaround card`, h4 "Master spreadsheet", sub "found on site · one card each": 1 What it does: "Does the job the official system doesn't." 2 Who keeps it: "One person. When they're on holiday, nobody knows how it works." 3 What it costs: three lines (time, mistakes, risk). 4 Fix: "Quick win, or a connection fix that closes the gap." 5 Status: "Cost not yet measured."
- Doc 03 `CL · Cost log`, h4 "Time, mistakes, risk": entry 1 (Master sheet) What "Updated by hand every day." Why "The system doesn't do the job." Change "Quick win: close the gap, retire the sheet." Entry 2 (Month-end) What "A manual data pull every month." Why "Two systems can't talk to each other." Change "Connection fix."
- aria-label: "Artwork DO-ART-1009, the second system written down. Three documents over a photograph of printed job sheets: a register of five workarounds, each with where it lives and a cost that reads not measured; a workaround card for the master spreadsheet; and a cost log of time, mistakes and risk."

### 1010 · seasonal-peaks · "Written down before the peak" · photo E12
- `.k`: "Seasonal peaks <span>· before the peak lands</span>"; `h3`: "Written down before the peak."
- `p`: "Seasonal staff only help if there's a documented process to follow. Without one, every temp needs hand-holding from the people who are already overloaded." (page cause 02)
- keys: **01** One-page SOP / a temp can follow · **02** Demand against capacity / mapped before the peak · **03** Automate first / ranked in the plan (page howIHelp)
- Doc 01 `PC-01 · Peak calendar`, h4 "Three rhythms, one year", sub "what lands, and when". Columns Rhythm / Peak / What lands: Schoolwear / July to September / Embroidery runs, printed logos, size-specific orders · Teamwear / March to June / Names, numbers, sponsor logos · Promotional / November to January / Quoting, artworking, producing at ten times the usual volume. (all from the page's "Three seasonal rhythms" cards)
- Doc 02 `SOP-09 · Teamwear names and numbers`, h4 "Check names and numbers before the run", sub "Owner: Production supervisor · one page · for seasonal staff": 1 Purpose "Every personalised kit goes out with the right names and numbers." 2 When it applies "Before any teamwear run starts." 3 Steps (three lines) 4 Checks (one line) 5 If it goes wrong "Stop the run. Tell the production supervisor."
- Doc 03 `IL · Peak log`, h4 "Three lines, every time": entry 1 (Peak) What "Seasonal staff needed hand-holding." Why "No documented process to follow." Change "One-page SOP written before the peak." Entry 2 (Routing) What "Orders landed faster than the team could process." Why "Manual steps have a hard ceiling." Change "Order-to-production routing moved into the system."
- aria-label: "Artwork DO-ART-1010, written down before the peak. Three documents over a photograph of stacked pallets: a peak calendar of schoolwear, teamwear and promotional rhythms; a one-page SOP for checking names and numbers that a seasonal worker can follow; and a three-line peak log."

### 1011 · no-ops-owner · "Who owns operations?" · photo E13
- `.k`: "Operations ownership <span>· the options, written down</span>"; `h3`: "Who owns operations?"
- `p`: "A part-time operations lead gives you the accountability and the thinking without the overhead." (page intro)
- keys: **01** Dedicated hire / one person, full time · **02** Part-time lead / accountability, no overhead · **03** Different structure / restructure what exists
- Doc 01 `OO-01 · Ownership gaps`, h4 "Who owns it today?", sub "the work that falls between departments". Columns Area / Owner today / Status: Processes that cross teams / Nobody / Unowned · Systems that connect departments / Nobody / Unowned · Improvements / Nobody / Unowned · Operations decisions / Your desk / Overloaded. (page: "Every ops decision ends up on your desk"; "the processes that cross teams, the systems that connect departments, the improvements nobody's responsible for")
- Doc 02 `OO-02 · Options`, h4 "What can your business support right now?", sub "level of ownership · one page": 1 "A dedicated operations person." 2 "A part-time operations lead." 3 "A different structure altogether." 4 "Where your time goes, where the bottlenecks are." 5 "The route forward: hiring, restructuring, or a retained part-time role." (page howIHelp)
- Doc 03 `DL · Decision log`, h4 "Three lines, every time": entry (Option 2) What "Operational leadership." Why "Without a full-time salary." Change "A retained part-time role." Second entry (Today) What "Cross-team work has no owner." Why "Departments own only their own area." Change "Named ownership, written down."
- aria-label: "Artwork DO-ART-1011, who owns operations. Three documents over a photograph of warehouse racking: a register of work nobody owns today, an options sheet for a hire, a part-time operations lead or a different structure, and a three-line decision log."

## 7. Renumbers (different drawings wearing the home pieces' numbers)

| Page | Current | New | Do |
|---|---|---|---|
| /problems/systems-dont-talk | `class="d17 sw sw-doc a918"`, `data-no="DO-ART-918"`, `data-od-id="plate-ledger"` (`page.tsx:94`, `inlineArt918`, used `:145`) | **DO-ART-1012** rev 01 | Change class `a918` -> `a1012`, `data-no`, aria-label ("Drawn plate DO-ART-1012"), mark text, `inlineArt918` const -> `inlineArt1012`. Fixes the global `.a918` grid/aspect-ratio leaking onto a diagram. |
| /problems/spreadsheet-addiction | `class="d17 sw sw-doc a917"`, `data-no="DO-ART-917"`, `data-od-id="plate-product"` (`page.tsx:85`) | **DO-ART-1013** rev 01 | Same edits (`a917` -> `a1013`, `inlineArt917` -> `inlineArt1013`). Also fixes the `.a917` 31/1fr grid leak. |

Numbers 1009-1013 are free (register has 1001-1008 and 1020-1025; the site's own D17 pieces already use the 10xx band, 1006-1008). Check once more with `grep -rn "DO-ART-10[01][0-9]" app` before committing.

## 8. Decision 6: undersized sources

| Source | Size now | Higher-res original? | Decision |
|---|---|---|---|
| `images/money/cat-workwear-2026-09`, `prod-polo-2026-09` (900x1125), `prod-hivis-2026-09` (900x1348), `prod-mailer-2026-09`, `cat-promo-2026-09` | 900w | **None exists.** Every copy (design-systems commerce + marketing + website assets, decoded-commerce, cobra-commerce storefront seeds, proposal-v3 and guides assets) is 900w; they are demo-store seed images. `hero-workshop`, `thread-spools`, `press-transfer` (1600w) are fine and untouched. | Replace the two with a good subject match using library crops: **pricing** (`prod-mailer`, "One packed order. One price.") -> **E14** `band-packing-station-7c4f80.webp`; **process-quality-system** (`cat-workwear`, "The same result every run") -> **E15** `band-screenprint-carousel-f0dce0.webp`. For **deliver** (polo), **how-i-build** (hi-vis, portrait) and **small-business** (mugs) no clean-subject library frame exists once brand marks are excluded: keep the 900w files, set the band `object-fit:cover` at the photo's native width (max 900 CSS px wide centred, or crop to 900x506 from the portrait), and note the soft look is accepted. Update register rows 909/912/913/914/915 sources. |
| `images/d17/problems/hero-workshop-783ec1`, `thread-spools-2195b5` | 520w | Yes (`hero-workshop.jpg` 1600x2397, `thread-spools.jpg` 1600x1067) but moot | All four uses are replaced (section 5); delete both files. If a use survives, re-export from the 1600w original at 1600x900 under a new name. |
| `images/d17/apps-cases/gen-bench-flatlay-dea11a` | 1024x1024 | **None.** `decoded-marketing/assets/gen-bench-flatlay.png` is the same 1024x1024 generated image. | Keep. It displays about 1.13x upscaled, which is within tolerance, but it now appears on two pages (943 on /apps/works and /problems/inventory-blind). If Craig wants it sharper it must be regenerated at 2048 (image generation, not a crop). |

## 9. Export list (`swap-exports\`, all webp, no grade baked in: the site files are ungraded and the CSS `--d17-grade` does the grading)

Recipe: auto-rotate from EXIF, crop `left,top,width,height` in source pixels, Lanczos resize, webp q50-82 (stepped down to meet the size cap), local blur where marks are visible. Naming `<role>-<subject>-<hash6>.webp`; the existing hash6 values have no recorded convention in any repo script, so hash6 = first six hex of SHA-1 of the exported file. Source folder: `C:\Users\CraigBlackman\OneDrive - Decoded Ops\decoded-ops-ai\decoded-ops\Assets\photography\`. Copy into the website as `public/images/d17/problems/` (E01-E13) and `public/images/money/` (E14, E15).

| Id | Source file (px) | Crop (x,y,w,h) | Output | Size | KB (cap) | Blur |
|---|---|---|---|---|---|---|
| E01 | 20260609_124553.jpg (4624x3468) | 0,607,4624,2601 | plate-crates-aisle-e843b7.webp | 1600x900 | 243 (250) | carton label on crates |
| E02 | 20260617_095414.jpg | 93,815,3884,2185 | plate-dtf-conveyor-a1f1d1.webp | 1600x900 | 203 | none (person at frame edge cropped out) |
| E03 | 20260429_125818.jpg | 0,434,4624,2601 | hero-stockroom-mixed-fa24e6.webp | 1600x900 | 235 | none |
| E04 | 20260609_124601.jpg | 0,893,3607,2029 | hero-embroidery-floor-84216c.webp | 1600x900 | 216 | none (hi-vis jacket at right edge cropped out) |
| E05 | 20260609_124559.jpg | 1757,928,2867,1613 | hero-embroidery-heads-b5b1fb.webp | 1600x900 | 235 | none |
| E06 | 20260605_105114.jpg | 0,434,4624,2601 | hero-racking-aisle-7d129e.webp | 1600x900 | 186 | maker cartons top-right |
| E07 | 20260617_095501.jpg | 0,607,4624,2601 | hero-office-paperwork-75fcd2.webp | 1600x900 | 121 | monitor |
| E08 | 20260429_125829.jpg | 0,193,4624,3083 | card-warehouse-floor-f1d62c.webp | 900x600 | 90 (100) | none |
| E09 | 20260429_125904.jpg | 1248,828,3237,2158 | card-embroidery-heads-50b561.webp | 900x600 | 92 | none (operator cropped out) |
| E10 | 20260604_143427.jpg (4000x3000) | 400,734,3200,2133 | card-garment-shelf-724253.webp | 900x600 | 30 | whole image, sigma 3 (customer names on bin labels) |
| E11 | 20260617_095550.jpg | 116,455,3930,2211 | plate-job-sheets-63dd9c.webp | 1600x900 | 22 | whole image, sigma 4 (customer name on job sheet) |
| E12 | 20260605_105039.jpg | 0,954,2774,1560 | plate-pallets-12eebd.webp | 1600x900 | 167 | pallet label |
| E13 | 20260429_125757.jpg (3468x4624 after rotate) | 0,550,3468,1951 | plate-racking-bays-626a9b.webp | 1600x900 | 124 | red branded boxes at right |
| E14 | 20260605_105100.jpg | 1850,954,2774,1560 | band-packing-station-7c4f80.webp | 1600x900 | 122 | monitor, two carton marks |
| E15 | 20260617_095338.jpg | 0,607,4624,2601 | band-screenprint-carousel-f0dce0.webp | 1600x900 | 241 | none |

Visual check done on `_contact-sheet.jpg` and 100% crops of the blurred frames. No people, no readable client names, no legible monitor content remain in the crops I viewed. The lane should still open each file once.

## 10. Register delta (`decoded-marketing/artwork/register.html`)

| Row | Change |
|---|---|
| 918 | Where used: homepage only. Remove "Inline slot reuses 918" from 963, 968, 970, 973, 976. |
| 917 | Where used: homepage only (or + data-scattered if the 942 fallback is taken). Remove from 964, 967 text, 975, 977. |
| 718 | Web cuts: ops-in-owners-head, bottleneck-growth only. Remove "Inline slot reuses 718" from 960, 961, 965, 971, 974 (961 keeps it). Photo for the web cuts: per-page library crops E01/E02 (register text "embroidery floor" becomes "workshop floor photography"). |
| 993, 943, 942, 986, 997, 998, 991 | Add "also: /problems/<page>" to Where used (one extra page each). |
| 960, 965, 971, 974, 964, 967 | New inline slot: 997, 998, 1011, 986, 942, 991. |
| 963, 968, 970, 973 | New inline slot: 993, 943, 1009, 1010. |
| 975, 978, 969, 961, 972 | Photo source updated to the library crops (E07, E06, E05, E04, E03). |
| 1009, 1010, 1011 | **New rows**, family "Photo-led, document mock-ups over a photo (D17)", rev 01, treatment as 718, status Issued after Craig's design review. |
| 1012, 1013 | **New rows**: systems-dont-talk ledger (schematic), spreadsheet-addiction single-file schematic. |
| **979a-979o** | **New evidence rows**, one per export E01-E15 (DO-ART-979 with sub-letters, precedent 919a/919b). Source: Craig's own site-visit photography, Apr-Jun 2026, taken on client premises, licence owned, **client consent to be confirmed**; marks blurred as listed. The 9xx band is otherwise full. |
| 909, 912, 913, 914, 915 | Source photo notes: 912 -> E14, 914 -> E15; 909/913/915 unchanged (900w, accepted). |

## 11. Implementation notes for the lane

- **Shared figure module.** 993, 943, 942, 986, 997, 998, 991 live as inline JSX/HTML in their home pages. Lift each figure into a string export (e.g. `lib/d17-figures/a993.ts`) and import it in both pages; do not paste copies. Add the CSS import the piece needs to each problem page (`d17-resources.css` for 993/986/997/998/991, `d17-apps-cases.css` for 943/942). Check d17-resources/apps-cases CSS does not collide with `d17-problems.css` selectors.
- `sx` pieces (997, 998, 991) in the inline slot: `class="d17 sx sx--solo ..."` inside the existing `g-navy` wrap. Depends on `.sx--solo` from the web046 branch, so merge after it.
- Edit the section eyebrows that name the old number (ai-paralysis `:229`, data-scattered `:216`, erp-impl `:157`, inventory-blind `:200`, seasonal-peaks `:222`, bottleneck `:197`, ops-in-owners-head `:205`) and every aria-label that names the old photo subject (section 5).
- After merging, remove the now-dead global `.a917`/`.a918` blocks in `d17-global.css` (about lines 94-112, 171-172, 177-216) only if nothing else uses them; the home page uses its own `d17-art.module.css` copies. Coordinate with web046 so the two lanes do not edit the same lines.
- Verification is Claude's, not the lane's: for each of the 16 problem pages and `/`, `/pricing`, `/process-quality-system` at 1440, 1920 and 390: no repeated artwork number across the problem set, no figure over 70svh, new photos sharp, no console 404. SQL/grep checks: `data-no="DO-ART-918"` only in `app/page.tsx`; `DO-ART-917` only in `app/page.tsx` (and data-scattered if fallback); `DO-ART-718` exactly two pages.
- Memory rule: replaced assets are new filenames (done); the four old problems photos are deleted only after reference count is zero.

## 12. Open items for Craig (batched)

1. Publish unnamed crops of client premises? (E01-E15, marks blurred; Cobra/SMI/CMS premises are the source library.) If no: the lane keeps the old photos and the swap map's pieces still apply, only the photo column changes.
2. Eyeball 997/998/991 in a 560px centred column inside the navy inline band (the only layout compromise in the plan).
3. Approve DO-ART-1009/1010/1011 copy at design review before build (user-facing artwork, CR + mockup first per the pipeline). The copy above is the brief for the Open Design mockup.
