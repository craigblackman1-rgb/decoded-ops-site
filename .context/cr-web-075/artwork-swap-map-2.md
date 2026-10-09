# Artwork swap map 2, CR-WEB-074 follow-up (DO-ART-719 dedupe, quoting page artwork, hero height polish)

Plan only. Nothing in any repo was edited and nothing was filed (no CR/WO raised from this session; the orchestrator should file it as a CR-WEB-074 follow-up and a WO unit). Two new photo exports are in `swap-exports-2\` beside this file.

**Source read:** `decoded-ops-website` `origin/main` 4b98c02 (fetched 9 Oct), register at `design-systems origin/main`. **The lane must anchor on `file` + `data-no="DO-ART-nnn"` and re-grep; no line numbers are used below.** Rules applied are the same as swap map 1 (keep the original on at most 2 most relevant pages; replacements fit the topic and are not already used elsewhere, or only once; new variants only with copy quoted from the page's own body text; no `calc(N*var(--u))` sizing on a `.d17` figure itself; at most 70svh at 1440x900, about 800px at 390 wide).

## 0. Findings that change the plan

1. **Heights were measured, not estimated.** I rebuilt each figure in a static harness (real `d17-*.css`, real tokens, Outfit/DM Sans loaded) and measured it at the widths in the brief. Harness vs your numbers: 963 639/639, 964 678/678, 970 720/722, 972 681/680, 973 641/635, 976 645/645, 978 638/638, 941 668/663, 991 667 (560) and 640 (537), 1008 648/648, 718 641/641. So the "after" heights below are trustworthy to about 5px. (The harness is scratch, in the session scratchpad; the lane should re-measure with Playwright on the real pages.)
2. **The common cause of the over-height heroes is the shared foot**, not the artwork: `.sx-foot` is 160px (193px on 963/976 where the one-liner wraps to 3 lines) of a 640-720px piece. Tightening it alone brings 963, 973, 976, 978, 941, 991 (537) under 630. Only 964, 970, 972, 991 (560), 1008 and 718 need piece-specific edits.
3. **1009/1010/1011 wear the `a718` class but already carry their own tighter overrides** (`.a1009 .stage` etc.). Any 718 height fix must be selector-scoped to `figure[data-no="DO-ART-718"]`, otherwise it undoes theirs (measured: unscoped it raises them from 568/593/588 to 616).
4. **No replacement for 719 needs new art.** All three replacements already exist on the site (940, 948, 999), each currently used once, so each ends at 2 uses. Two of them need a photo change on the problem-page cut to keep one distinct photo per problem page, and one drops its photo (section 1).
5. **DO-ART-719 is also on `/about`** as the raster `fill-the-gap.webp` inside a `.plate-frame` (docket "DO-ART-719 · Schematic · Rev 03"), not as the inline figure. That is the fifth page.

## 1. DO-ART-719: keep on two, replace on three

719 is the "three ways to fill the gap" schematic: the platform you run, the hatched gap decoration and artwork sit in, and three routes out. It is most relevant where the page is about options (buy-vs-build) and where it tells the origin story of the software (about). It is the *same argument* the other three pages already make in words, so the replacements bring a different argument.

| Page | File | Keep / replace | Replacement | Why | Copy source |
|---|---|---|---|---|---|
| /problems/buy-vs-build | `app/problems/buy-vs-build/page.tsx` (inline section, eyebrow "The options · DO-ART-719") | **Keep** | none | The page is literally the buy / build / use-what-you-have decision. Hero is 962 (different drawing). | n/a |
| /about | `app/about/page.tsx` (section "software-origin", `data-od-id="plate-gap"`) | **Keep** | none | "Why the software exists": the gap nothing on the market closed. Same raster plate, docket intact. | n/a |
| /problems/ecommerce-not-connected | `app/problems/ecommerce-not-connected/page.tsx` (`const inlineArt719`, passed as `inlineArt`) | **Replace** | **DO-ART-948** "Migration, new storefront, back into the ERP" (`sw sw-doc`, two paper documents: rebuild scope sheet + options sheet). Lift from `app/apps/commerce/page.tsx` into `lib/d17-figures/a948.ts`; problem-page cut in 1a below. 2 uses after (apps/commerce + here). | Page ends on "connect the two, merge them, or replace one" and "cost, time, and risk for each option". 948 is the written options sheet with the decision left to the client. **Honest note: 948 draws the third option (rebuild); the first two (connect, merge) are not drawn. It is a dedupe-driven fit, not an upgrade over 719.** | Page: "connect the two, merge them, or replace one" (Shopify section) and FAQ "Do we need to replace our ecommerce platform? ... I'll set out those options for your business and you decide." Piece copy is unchanged apart from the caption tag (1a). |
| /problems/legacy-system | `app/problems/legacy-system/page.tsx` (inline section, eyebrow "The missing layer · DO-ART-719") | **Replace** | **DO-ART-940** "Three apps, one platform" (`.sw a940`, drawn plate, wide + tall cuts, no photo). Lift from `app/apps/page.tsx` into `lib/d17-figures/a940.ts`. 2 uses after (apps + here). Import `@/app/d17-apps-cases.css` on the page (no selector collisions with d17-problems.css, checked). Change eyebrow to "The layer, drawn · DO-ART-940". | Page: "Keep the platform. Add the layer it's missing." 940 shows three gaps (data, artwork, ordering) each filled by an app docked on one platform: decoration BOMs and blank-to-finished mapping = Works, supplier artwork versioning = Proof, website/marketplaces/trade portal = Commerce. Drawn, so the page also loses one more photo. **Honest note: 940's amber panel says Works "grew into the full system ... or as the system itself", which sits in mild tension with the page's "no rip-and-replace". Dedupe-driven compromise; flag for Craig's design review. Fallback: keep 719 here and swap buy-vs-build instead (the layer-stack section directly above already draws the same idea, so this is the weaker option).** | Page layer stack: "Decoration BOMs, blank-to-finished mapping, and supplier artwork, modelled properly for the first time" and "Every channel reading the same decoration-aware catalogue". FAQ: "A custom layer sits beside it handling decoration BOMs, blank-to-finished goods mapping, and artwork versioning". 940's own copy unchanged. |
| /problems/wrong-erp-software | `app/problems/wrong-erp-software/page.tsx` (`const inlineArt719`, rendered in the "INLINE ARTWORK" `g-navy` section before How I help) | **Replace** | **DO-ART-999** "Fix it, or plan an exit?" (`sx a999`, eight-question scorecard, verdict stamp "Fixable · Example verdict"). Lift from the `'use client'` page `app/tools/should-i-replace-erp/page.tsx` into `lib/d17-figures/a999.ts` as a string; problem-page cut in 1c below. 2 uses after (tools + here). Add eyebrow "The decision · DO-ART-999". Import `@/app/d17-resources.css`. | The section it sits above is "An honest read on stay or move" and its body says "plan a managed exit" and "the real cost of staying versus moving". 999's Q1 is "unable to handle your core business processes without significant workarounds", which is the page's symptom list. 991 would fit even better ("a brief that doesn't repeat the mistake") but is already on two pages. | Page: "An honest read on stay or move, then a brief that doesn't repeat the mistake." / "Sometimes the software genuinely isn't right and you need to plan a managed exit." / symptom "Found workarounds on day two". 999 copy unchanged; all figures inside are labelled Example. |

### 1a. 948 problem-page cut (`lib/d17-figures/a948.ts`)

```ts
export const a948 = `<figure class="d17 sw sw-doc a948" ...verbatim from app/apps/commerce/page.tsx...</figure>`;
// Problem-page cut (CR-WEB-074 fix2): own photo, caption tag that fits an options page.
export const a948Problems = a948
  .replace('/images/d17/apps-cases/cat-packaging-2b20a6.webp', '/images/d17/problems/plate-cartons-packed-2fb0ae.webp')
  .replace('width="900" height="800"', 'width="1600" height="900"')
  .replace('packed kraft boxes', 'packed cartons, blurred')
  .replace('The worked example <span>· scoped, not tiered</span>', 'The worked example <span>· connect, merge or replace</span>');
```
Reason for the photo swap: `cat-packaging` is already the inventory-blind hero source, so the kraft-box photo would repeat across two problem pages. Reason for the caption swap: "not tiered" refers to Commerce tiers, which this page never mentions; "connect, merge or replace" is the page's own FAQ wording. Keep the apps/commerce page on the original `a948` string. Page needs `@/app/d17-apps-cases.css` (`.a948` rules live there).

**Placement:** move it out of the last-slot `inlineArt` (which `ProblemPageDS` renders after the "Get this fixed" cards, at the foot of the page) and into `beforeRelated`, between the WooCommerce section and the "Questions" section, as `<section className="g-navy"><div className="wrap"><span className="eyebrow">Your options · DO-ART-948</span> ...figure... </div></section>`. The sheet then lands just before the FAQ that answers "connect, merge or replace". If the lane prefers zero layout change, leave it in `inlineArt`; both work.

### 1b. 940 on legacy-system

No string edits. Lift the figure verbatim into `lib/d17-figures/a940.ts` (it is JSX with an inline SVG: convert `className` to `class`, camelCase SVG attributes to kebab-case, style objects to strings; marker ids `q-ah940`/`q-ah940a` stay unique per page). Measured at 1152 wide: 591px (inside budget). At 350 wide the tall cut is 675px.

### 1c. 999 problem-page cut (`lib/d17-figures/a999.ts`)

```ts
export const a999 = `<figure class="d17 sx a999" ...converted from the tools page...</figure>`;
// Problem-page cut: capped width (swap map 1 §3 pattern) and no photo.
export const a999Solo = a999
  .replace('class="d17 sx a999"', 'class="d17 sx sx--solo a999"')
  .replace(/<div class="d17-ph">[\s\S]*?<\/div>\n?/, '');
```
Reason for dropping the photo: the tools cut uses `prod-mailer-259a39` (the despatch mailer), which is the ecommerce-not-connected hero photo (`prod-mailer-f70773`), so it would repeat across two problem pages. The library has no clean spare crop for this slot (see section 5), and the piece reads as a drawn plate without it (viewed: same family as the 963/976 heroes). The `.a999::before` navy gradient in `d17-resources.css` still gives the background. Keep the tools page on the original string.

## 2. Quoting page: `/problems/quoting-takes-too-long`

File: `app/problems/quoting-takes-too-long/page.tsx`. It renders through `ProblemPageDS` with no `heroArt` and no `inlineArt`, so the hero right column is empty. Every sibling page has a hero piece.

**Addition: one hero piece, `heroArt={heroArt1014}`, new DO-ART-1014** (a variant of the DO-ART-991 hero component: rate-card cover + scored sheet over a photograph, so no new CSS component). Add `const heroArt1014 = \`...\`` above the component (the 963/970 pattern), add `heroArt={heroArt1014}` to the `ProblemPageDS` props, and add `import '@/app/d17-resources.css';` (the `.a991`/`.doc-vb`/`.vb` rules live there; the page already imports global and problems). `d17-problems.css` needs no new rules: the hook-only `a1014` class rides on `a991` (same as `a1009` rides on `a718`). The figure inherits the hero-height edits in section 4.

Photo: **`hero-garment-racking-219356.webp`** (new export, 1600x900, 225KB), from `20260429_125838.jpg`: bagged garments on racking with handwritten bin labels. Fits cause 3 ("Blank prices, thread, ink and labour move") and the garment rate card. Copy to `public/images/d17/problems/`.

**Copy, with source** (everything is quoted or condensed from the page's own symptoms, causes, intro, howIHelp and FAQ 4; no figure or statistic is invented, and the dots are labelled Example):

| Element | Text | Source in page |
|---|---|---|
| top line, left / right | "Pricing rules" / "Written down once" | FAQ 4: "Write your pricing rules down once"; cause 2 "aren't written down" |
| rate card ref | "Decoded Ops · rate card" | howIHelp: "a rate card everyone quotes from" |
| rate card h4 | "A rate card everyone quotes from" | howIHelp |
| rate card sub | "Garments · positions · setup · quantity breaks · rush" | FAQ 4: "a rate card for garments, per-position pricing for each decoration method, your setup and digitising charges, quantity breaks, and a rush or express surcharge" |
| sheet tab / ref | "EXAMPLE" / "Pricing rules · example" | convention from 991/999 |
| sheet h4 | "Rules that aren't written down" | cause 2: "Rules that aren't written down get applied differently by everyone who quotes." |
| columns | Rule / Today / Rate card | structural |
| rows (Today dot, Rate card dot) | Per-position pricing (partly, yes) · Setup charges (partly, yes) · Quantity breaks (partly, yes) · Customer-supplied garments (gap, yes) · Why a price was given (gap, yes) · Quote to order conversion (gap, yes) | Cause 2 list "Per-position pricing, the digitising charge..."; symptoms: "Setup charges and screen setup get forgotten on repeat orders" (partly); "Quantity breaks are applied differently depending on who's quoting" (partly); "Customer-supplied garments get priced as if you'd supplied them, with no handling charge" (gap); "There's no record of why a price was given" (gap); "you can't see what your quote to order conversion is" (gap) |
| key | "Written down" / "Applied differently" / "No record" | cause 2 / symptom 5 wording |
| `sx-say` | "Write your pricing rules down once. *Then quote from them every time.*" (second sentence in amber `em`) | FAQ 4 first sentence, verbatim |
| mark | "decodedops.co.uk · DO-ART-1014 · Rev 01" | convention |

Full markup (rendered and checked at 537 wide: 589px tall with the section 4 CSS, 547px at 350 wide):

```html
<figure class="d17 sx a991 a1014" data-od-id="hero-evidence" data-motion data-no="DO-ART-1014" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-1014. Pricing rules written down once, over a graded photograph of bagged garments on racking with the bin labels blurred. A rate card cover for garments, positions, setup, quantity breaks and rush, and beside it a sheet of six pricing rules shown as an example: per-position pricing, setup charges and quantity breaks are applied differently today; customer-supplied garments, the reason a price was given and quote to order conversion have no record; every rule is written down on the rate card.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-garment-racking-219356.webp" alt="" width="1600" height="900"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Pricing rules</span><span>Written down once</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc cov-dark doc-ec m-drop" style="animation-delay:.05s">
      <span class="ref">Decoded Ops · rate card</span>
      <h4>A rate card everyone quotes from</h4>
      <p class="sub">Garments · positions · setup · quantity breaks · rush</p>
      <div class="lines"><i style="width:84%"></i><i style="width:70%"></i><i style="width:52%"></i></div>
    </div>
    <div class="d17-doc doc-vb m-drop" style="animation-delay:.35s">
      <span class="tab">EXAMPLE</span>
      <span class="ref">Pricing rules · example</span>
      <h4>Rules that aren't written down</h4>
      <table class="vb">
        <thead><tr><th>Rule</th><th>Today</th><th class="us">Rate card</th></tr></thead>
        <tbody>
          <tr><td>Per-position pricing</td><td><i class="p"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Setup charges</td><td><i class="p"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Quantity breaks</td><td><i class="p"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Customer-supplied garments</td><td><i class="n"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Why a price was given</td><td><i class="n"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Quote to order conversion</td><td><i class="n"></i></td><td><i class="y"></i></td></tr>
        </tbody>
      </table>
      <p class="key"><span><i class="y"></i>Written down</span><span><i class="p"></i>Applied differently</span><span><i class="n"></i>No record</span></p>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Write your pricing rules down once. <em>Then quote from them every time.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-1014 · Rev 01</span>
  </div>
</figure>
```

Process: user-facing artwork, so per the pipeline this is CR + Open Design mockup first; the copy above is the brief. No inline slot is added (one piece is enough for a page this short).

## 3. New variants and exports

New variants of existing components: **one** (1014, above). No new CSS component. The three replacements are existing pieces.

New photo exports (`swap-exports-2\`, webp, ungraded, no `--d17-grade` baked in; recipe as swap map 1 section 9, hash6 = first six hex of SHA-1 of the file; both viewed after export):

| Id | Source (px) | Crop (x,y,w,h) | Output | Size | KB | Blur | Used by |
|---|---|---|---|---|---|---|---|
| E16 | `20260429_125838.jpg` (4624x3468) | 0,300,4624,2601 | `hero-garment-racking-219356.webp` | 1600x900 | 225 (cap 250) | 37 local blurs: every handwritten bin label, the carton labels, the supplier cartons top right (carried the client name), left-edge carton text | 1014 hero |
| E17 | `20260604_143416.jpg` | 0,400,4000,2250 | `plate-cartons-packed-2fb0ae.webp` | 1600x900 | 37 | whole image sigma 7 (handwritten stock counts, one client name on a label, supplier carton logos) | 948 problem-page cut |

**Photo-quality flags (not blockers):** E16 is sharp but carries about 37 blur patches; the lane should open it at 100% behind the 991-style grade and, if the patches look noisy, fall back to a whole-image sigma 3 to 4 blur (the E10/E11 precedent). E17 at sigma 7 is a textured wash rather than a photograph; it sits under the navy gradient and scan lines behind paper documents, but it is the weakest asset here. A sharper alternative would be `20260605_105049.jpg` (wooden mezzanine rails over boxes, sharp, but about ten boiler-carton marks to blur); I viewed it and did not export it. Both exports are covered by the 8 Oct approval to publish unnamed premises crops (register note), client consent still open as logged there.

## 4. Height-polish list (target: at most 630px tall at 1440x900, no clipping, no argument text hidden)

Measured in the harness at the widths shown, before and after the CSS below. "Brief" is the number you gave me.

| DO-ART | Page · width | Brief | Harness before | After | What drives the height | Change |
|---|---|---|---|---|---|---|
| 963 | cant-scale-operations · 552 | 639 | 639 | **578** | `.sx-foot` 193px (the `.sx-say` one-liner wraps to 3 lines at `max-width:21ch`, 25u type) | shared foot (A) only |
| 964 | data-scattered · 537 | 678 | 678 | **618** | `.a964 .stage{aspect-ratio:560 / 540}` (`d17-problems.css`, mobile has its own `560/620` rule) plus foot | foot (A) + edit the base rule to `560 / 510` |
| 970 | manual-workarounds · 552 | 722 | 720 | **624** | `.a970 .body{padding-top}` (the *final* override, in the "fixes after the first render" block: 150u; the 120u at the original rule is superseded), the `.a970 .print` job-sheet card (170u wide, 145px tall, wraps its title to 3 lines), `.rt li{padding:7u}` (seven rows) plus foot | foot (A) + **edit the existing** `.a970 .body{padding-top:calc(150*var(--u))}` to `calc(122*var(--u))`; edit `.a970 .print{width:calc(170*var(--u))}` to `calc(214*var(--u))`; edit `.rt li{padding:calc(7*var(--u)) 0}` to `calc(4*var(--u)) 0` (`.rt` is used only by 970); add `.a970 .print i:nth-of-type(3){display:none}`. The mobile rules (118px card, 150px body padding) are separate and untouched. Print card stays clear of the first list row (checked). |
| 972 | ops-in-owners-head · 537 | 680 | 681 | **616** | `.win-flat` table: `.tbl td{padding:7u}` x 7 rows, `.a972 .win{margin-top:16u}` plus foot | foot (A) + `@media (min-width:761px){ .a972 .tbl td{padding:calc(4.5*var(--u)) calc(6*var(--u)) calc(4.5*var(--u)) 0} .a972 .win{margin-top:calc(10*var(--u))} }` (scoped, since `.tbl` is shared with 973) |
| 973 | seasonal-peaks · 537 | 635 | 641 | **610** | foot only | shared foot (A) |
| 976 | systems-dont-talk · 552 | 645 | 645 | **584** | `.sx-foot` 193px (3-line one-liner) | shared foot (A) |
| 978 | wrong-erp-software · 537 | 638 | 638 | **607** | foot only | shared foot (A) |
| 941 | apps/works · 537 | 663 | 668 | **613** | foot (160px) on top of `.a941 .stage` 64u top padding and the 446px `.mw` product screen (do not touch: it is the real content) | shared foot (A) |
| 991 | erp-implementation-failure · 560 | 667 | 667 | **614** | `.a991 .stage{aspect-ratio:560 / 500}` (`d17-resources.css`) has about 88px of empty stage under the vendor brief, plus foot | foot (A) + edit `.a991 .stage` to `560 / 480` (the mobile `560 / 720` rule is separate) |
| 991 | erp-selection-playbook · 537 | 640 | 640 | **589** | same | same edit (note: this also moves the playbook hero, and 1014 inherits it) |
| 1008 | home · 1152 | 648 | 648 | **622** | `.a1008{aspect-ratio:1600 / 900}` in `d17-global.css`; the bottom-left `.d17-mark--abs` collides with the Clarity "Start here" station if the aspect is simply shortened (measured at 860: overlap) | (C) below |
| 718 | bottleneck-growth, ops-in-owners-head · 1152 | 641 | 641 | **616** | `.sw-doc` padding 54/56 (`d17-global.css`), the final `.a718 .stage{min-height:580u}` and `.a718 .doc-l{top:384u}` (the "fixes after first render" block overrides the earlier 500u/316u), register rows at `.reg td{padding:5.5u}` | (D) below |

Reading the cascade: in `d17-problems.css` the rules in the block headed "fixes after the first render" win over the earlier per-piece rules (970 body padding and print top, 718 stage and doc-l). Edit those, not the originals, or the edit is dead.

**Combined effect measured** (all edits applied together, 1440 widths): 963 578, 964 618, 970 624, 972 616, 973 610, 976 584, 978 607, 941 613, 991 614 and 589, 1014 589, 718 616, 1008 622. All at most 630.
**390-wide check** (350px column, with the ≥761px-only rules inert): 718 841, 1009 847 (unchanged by this work), 940 675, 948 703, 999 solo 572, 1014 547, 1008 694, 970 587, 964 484, 972 510, 991 547, 976 387, 978 499, 973 456, 941 461, 963 383. Everything is under about 800 **except 718 and 1009 (841 and 847), which this follow-up does not change** (they are over the brief's ~800 ceiling on the phone cut, inside the earlier lane's 820 target). Flagged, not fixed here.

### A. Shared foot, scoped to the flagged pieces (`app/d17-global.css`, beside the `.sx-foot` block)

Scoped to hook classes, not global: an unscoped edit would touch every `.sx` piece on the site (about 60). If Craig wants it global, that is a follow-up with a full-site sweep.

```css
/* CR-WEB-074 fix2: tighter flow foot on the heroes flagged over 630px at 1440x900 */
:is(.a941,.a963,.a964,.a970,.a972,.a973,.a976,.a978,.a991,.a1014) .sx-foot{ padding:calc(12 * var(--u)) calc(26 * var(--u)) calc(14 * var(--u)) }
:is(.a941,.a963,.a964,.a970,.a972,.a973,.a976,.a978,.a991,.a1014) .sx-bar{ margin-bottom:calc(10 * var(--u)) }
:is(.a941,.a963,.a964,.a970,.a972,.a973,.a976,.a978,.a991,.a1014) .sx-say{ margin-bottom:calc(10 * var(--u)); font-size:max(16px, calc(23 * var(--u))); max-width:24ch }
:is(.a941,.a963,.a964,.a970,.a972,.a973,.a976,.a978,.a991,.a1014) .sx-foot .d17-mark{ padding:.4em .75em }
```
(Specificity (0,2,0) beats `.sx-foot` (0,1,0); the `.px .sx-foot{margin-top:0}` rule is unaffected. 991's hero on the tools/resources pages gets the same foot since it shares the hook class; that is intended.)

### B. Per-piece edits
- `d17-problems.css`: the four 970 edits and the 964 edit above (edit in place), plus the scoped 972 block (new, in a `@media (min-width:761px)`).
- `d17-resources.css`: `.a991 .stage{aspect-ratio:560 / 500}` to `560 / 480` (edit in place). 999 solo block (new, desktop only, scoped to the capped cut so the tools page is untouched):
```css
@media (min-width:761px){
  .a999.sx--solo .stage{ aspect-ratio:560 / 478 }
  .a999.sx--solo .qz div{ padding:calc(3 * var(--u)) 0 }
  .a999.sx--solo .doc-qz{ top:calc(52 * var(--u)) }
  .a999.sx--solo .st-999{ top:calc(372 * var(--u)); right:calc(30 * var(--u)) }
  .a999.sx--solo .sx-foot{ padding:calc(12 * var(--u)) calc(26 * var(--u)) calc(14 * var(--u)) }
  .a999.sx--solo .sx-bar{ margin-bottom:calc(10 * var(--u)) }
  .a999.sx--solo .sx-say{ margin-bottom:calc(10 * var(--u)); font-size:max(16px, calc(23 * var(--u))); max-width:24ch }
  .a999.sx--solo .sx-foot .d17-mark{ padding:.4em .75em }
}
```
999 solo measured 612px at 560 wide (694px without these). The verdict stamp now overlaps the lower-right corner of the scorecard (not the "2 of 8" tally); for Craig's design review.

### C. 1008 (home)
Markup in `app/page.tsx`: change the route svg `viewBox="0 0 1600 900"` to `viewBox="0 0 1600 864"` (nothing is drawn below y of about 800). CSS in `d17-global.css`:
```css
@media (min-width:761px){
  .a1008{ aspect-ratio:1600 / 864 }
  .a1008 svg.route, .a1008 .fan, .a1008 .stations{ transform:translateY(calc(-36 * var(--u))) }
}
```
The translate lifts the stations, exhibits and route together so the Clarity "Start here" block stops short of the bottom-left mark (the mark stays bottom-anchored). Measured 622px at 1152 wide, viewed, no overlap. The ≥761px wrap is required: at ≤760px `.fan` is `position:relative` and the svg is hidden, so an unwrapped translate would shift the phone layout.

### D. 718 (scoped by `data-no`, because 1009/1010/1011 wear `a718` too)
```css
@media (min-width:761px){
  figure[data-no="DO-ART-718"]{ padding-block:calc(40 * var(--pu)) calc(36 * var(--pu)) }
  figure[data-no="DO-ART-718"] .reg td{ padding:calc(3.5 * var(--u)) calc(8 * var(--u)) calc(3.5 * var(--u)) 0 }
  figure[data-no="DO-ART-718"] .sop .h{ margin-top:calc(6 * var(--u)) }
  figure[data-no="DO-ART-718"] .doc-l{ top:calc(372 * var(--u)) }
  figure[data-no="DO-ART-718"] .stage{ min-height:calc(590 * var(--u)) }
}
```
Measured 616px at 1152 wide, viewed (no row hidden; the improvement log dips about 12px into the bottom padding, inside the figure). 1009/1010/1011 measured unchanged (568/593/588).

## 5. Why no new photo for 999, and the asset pool

Unused library frames after E01-E17: `20260429_125759` (same scene as E13, adjacent frame), `20260617_100054` (CMS banner), `20260617_100059` (client logo on the wall), `20260617_100226` (many supplier marks), `20260617_100621` (motion-blurred shelf, soft), `20260609_124544` (people and supplier cartons), `20260617_095638` (client spec sheet), `20260605_105049` (above), the Joma label series `20260626_*` (unusable). I checked the soft and branded ones at crop size; none gives a sharp, mark-free 1600x900 that is distinct from the rest of the problem set. Hence the photo-less 999 cut.

## 6. Register delta (`decoded-marketing/artwork/register.html`)

| Row | Change |
|---|---|
| 719 | Where used: buy-vs-build inline + /about (raster). Remove "Inline slot reuses 719" from 966, 969, 978. |
| 966 (ecommerce-not-connected) | Inline slot now DO-ART-948 (problem-page cut: E17 photo, caption "connect, merge or replace"). |
| 969 (legacy-system) | Inline slot now DO-ART-940. |
| 978 (wrong-erp-software) | Inline slot now DO-ART-999 (photo-less solo cut). |
| 940, 948, 999 | Where used: add "also: /problems/legacy-system", "/problems/ecommerce-not-connected" and "/problems/wrong-erp-software" respectively; note the cuts. |
| **1014** | **New row.** Family "Photo-led, document mock-ups over a photo (D17)", rev 01, treatment as 991 (`sx` with `a991` hook), placement WEB-HERO, page `problems-quoting-takes-too-long.html` hero. Rate card cover + six-rule sheet (example) over E16. Copy quoted from the page; no figures. Status Issued after Craig's design review. Numbers 1015-1019 stay free (grep `DO-ART-10[01][0-9]` across `app` and `lib` once more before committing). |
| **979p, 979q** | **New evidence rows** (precedent 979a-o): 979p `hero-garment-racking-219356.webp` (E16), 979q `plate-cartons-packed-2fb0ae.webp` (E17). Source: Craig's site-visit photography Apr-Jun 2026 on client premises, licence owned, marks blurred as in section 3, client consent to be confirmed. |
| 941, 963, 964, 970, 972, 973, 976, 978, 991, 1008, 718 | Note "height polished to at most 630px at 1440x900, CR-WEB-074 fix2". |

## 7. Implementation notes for the lane

- Lift 940, 948, 999 into `lib/d17-figures/` as string exports (pattern of `a991.ts`/`a991Solo`); import them in both pages, do not paste copies. 940 and 999 are JSX/'use client' sources that need converting to plain HTML strings (see 1b, 1c).
- Add CSS imports: legacy-system `@/app/d17-apps-cases.css`; ecommerce-not-connected `@/app/d17-apps-cases.css`; wrong-erp-software and quoting-takes-too-long `@/app/d17-resources.css`. Checked: no class selectors are shared between `d17-apps-cases.css`, `d17-problems.css` and `d17-resources.css`.
- Delete from each page the old 719 markup, the `inlineArt719` consts and the now-stale eyebrows ("The missing layer · DO-ART-719", "The options" stays on buy-vs-build only). Keep the `.a719` CSS (buy-vs-build still uses it).
- Copy E16 and E17 into `public/images/d17/problems/` (new filenames, so no cache issue). Dead-file cleanup: none new.
- Verification is Claude's, not the lane's: at 1440x900, 1920 and 390, every changed page plus `/`, `/apps`, `/apps/works`, `/apps/commerce`, `/tools/should-i-replace-erp`, `/resources/erp-selection-playbook`; no figure above 70svh; `DO-ART-719` only on buy-vs-build and about; `DO-ART-940`, `948`, `999` exactly two pages each; no repeated photo across the problem set; no console 404; open E16/E17 at 100%. Re-run the harness numbers with Playwright on the real pages (expect about 5px of drift).

## 8. Open items for Craig (batched)

1. Design review (user-facing artwork): DO-ART-1014 copy and look; 999's stamp now overlapping the scorecard corner; 991's shorter stage (also changes the playbook hero); 940 on legacy-system ("grew into the full system" next to "no rip-and-replace").
2. E16 (heavily patched blurs) and E17 (sigma-7 wash): acceptable, or spend a pass on a cleaner crop such as `20260605_105049`?
3. Mobile ceiling: 718 and 1009 sit at about 841 and 847px at 390, over the ~800 target. Not part of this brief; want a third pass?
