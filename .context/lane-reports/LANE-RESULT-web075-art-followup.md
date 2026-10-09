# Lane result: web075-art-followup (CR-WEB-075 / WO-INF-084)

Branch `lane/web075-art-followup`, base `origin/main` @ 4b98c02. Four feature commits plus this report. No dev servers, Playwright, or curl were used (hard-forbidden by the brief); verification is tsc + eslint + grep only — see "Not verified" below.

## Step 1 — Photos installed (commit c15fe1a)

Files: `public/images/d17/problems/hero-garment-racking-219356.webp` (E16, 230,646 B), `public/images/d17/problems/plate-cartons-packed-2fb0ae.webp` (E17, 38,138 B), `.context/cr-web-075/artwork-swap-map-2.md`, `.context/lane-briefs/web075-art-followup.md`.

Both exports copied from `.context/cr-web-075/` to the spec-named paths under `public/images/d17/problems/` (new filenames — nothing overwritten), and the source copies were deleted from the worktree. No page referenced either filename before this lane, so there was nothing to repoint at this step; the consumers are steps 2 (E17 via the 948 cut) and 3 (E16 via the 1014 hero).

## Step 2 — DO-ART-719 swaps (commit a939a88)

Files: `lib/d17-figures/a948.ts` (new), `lib/d17-figures/a999.ts` (new), `app/problems/ecommerce-not-connected/page.tsx`, `app/problems/wrong-erp-software/page.tsx`.

| Page | Old | New |
|---|---|---|
| /problems/ecommerce-not-connected | DO-ART-719 (`inlineArt719`, page foot slot) | DO-ART-948 problem-page cut (`a948Problems`: E17 photo, 1600x900, caption "connect, merge or replace"), placed in `beforeRelated` as a new `g-navy` section with eyebrow "Your options · DO-ART-948", between the WooCommerce section and the Questions section (the spec's preferred placement) |
| /problems/wrong-erp-software | DO-ART-719 (`inlineArt719`, "INLINE ARTWORK" section) | DO-ART-999 photo-less solo cut (`a999Solo`: `sx--solo`, photo dropped), same section, eyebrow added: "The decision · DO-ART-999"; page now imports `@/app/d17-resources.css` |

- 948 and 999 lifted into `lib/d17-figures/` as string exports (pattern of `a991.ts`); the apps/commerce and tools/should-i-replace-erp pages keep their own original markup, untouched. Old 719 consts, markup and stale eyebrows deleted from the two pages; `.a719` CSS kept (buy-vs-build still uses it).
- **Deviation (Claude's, per brief):** `/problems/legacy-system` **keeps DO-ART-719** — the 940 swap was not done because 940's "grew into the full system" line contradicts that page's "keep the platform" message. DO-ART-719 now renders on buy-vs-build, about (raster) and legacy-system only — grep-verified.
- After this lane: DO-ART-948 on 2 pages (apps/commerce + ecommerce-not-connected), DO-ART-999 on 2 pages (tools + wrong-erp-software) — grep-verified.

## Step 3 — DO-ART-1014 hero (commit 3c4db31)

File: `app/problems/quoting-takes-too-long/page.tsx`.

| Page | Old | New |
|---|---|---|
| /problems/quoting-takes-too-long | no hero art (empty right column) | `heroArt={heroArt1014}` — DO-ART-1014 Rev 01, rate-card cover + six-rule example sheet over E16, 991 treatment with hook-only `a1014` class; page imports `@/app/d17-resources.css` |

Markup copied verbatim from the spec's §2 full markup block (all copy quoted from the page's own symptoms/causes/howIHelp/FAQ 4; rows labelled Example; no figures invented). DO-ART numbers 1015-1019 grep-verified free.

## Step 4 — Height polish (commit ac180ab)

Files: `app/d17-global.css`, `app/d17-problems.css`, `app/d17-resources.css`, `app/page.tsx`.

All edits per the spec's §4 table, applied to the existing final overrides where the spec said to edit in place:

- **Shared foot (A):** `.sx-foot`/`.sx-bar`/`.sx-say`/mark tightening scoped via `:is(.a941,.a963,.a964,.a970,.a972,.a973,.a976,.a978,.a991,.a1014)` in `d17-global.css` (beside the `.sx-foot` block).
- **964:** base `.a964 .stage` 560/540 -> 560/510 (mobile rule untouched).
- **970:** final-override `.a970 .body` padding 150u -> 122u; `.a970 .print` width 170u -> 214u (base rule — the final override only sets top); `.rt li` padding 7u -> 4u (`.rt` used only by 970); added `.a970 .print i:nth-of-type(3){display:none}`. Mobile rules untouched.
- **972:** new `@media (min-width:761px)` block: `.a972 .tbl td` padding and `.a972 .win` margin-top 10u (scoped — `.tbl` is shared with 973).
- **991:** `.a991 .stage` 560/500 -> 560/480 in `d17-resources.css` (also moves the erp-implementation-failure hero, the playbook hero and 1014 — intended per spec).
- **999 solo:** new desktop-only `@media (min-width:761px)` block scoped to `.a999.sx--solo` in `d17-resources.css` (stage 560/478, qz padding, doc/stamp tops, own tighter foot) — tools page untouched.
- **1008:** `app/page.tsx` route svg viewBox `0 0 1600 900` -> `0 0 1600 864`; new `@media (min-width:761px)` block in `d17-global.css`: `.a1008` aspect 1600/864 + `svg.route`/`.fan`/`.stations` translateY(-36u). Phone layout inert (block is >=761px only).
- **718:** new `@media (min-width:761px)` block scoped by `figure[data-no="DO-ART-718"]` in `d17-problems.css` (figure padding-block 40/36 pu, reg td padding, sop .h margin, doc-l top 372u, stage min-height 590u) — chosen over the `.a718` class because 1009/1010/1011 wear `a718` too, per spec finding 3. Figure-level padding uses `--pu` (as the spec wrote it), not `--u`, per the standing hard rule.
- 963/973/976/978/941 need no piece-specific edits — the shared foot (A) alone brings them under 630 (spec §0.2).

## Not implemented (and why)

- **940 swap on legacy-system** — deliberate deviation, see step 2. DO-ART-940 is therefore still used once (apps page only).
- **Register delta (spec §6)** — the brief says Claude handles the register; no file in `decoded-marketing` was touched.
- **Playwright re-measurement / visual checks at 1440x900, 1920 and 390** — hard-forbidden in this lane ("no dev servers / Playwright / curl"). The <=630px claims rest on the spec's static-harness measurements, not on anything this lane rendered. Flagged for Craig's design review alongside the spec's §8 open items (1014 look, 999 stamp overlap, E16/E17 blur quality, 718/1009 phone height).

## Verification actually run

- `npx tsc --noEmit` — clean (0 errors) before every commit and at lane end.
- `npx eslint` on the touched TS/TSX — 0 errors (4 pre-existing warnings in `app/page.tsx`, none introduced).
- `\uXXXX` escape grep across every changed file — 0 hits.
- Grep-verified: DO-ART-719 on buy-vs-build/about/legacy-system only; 948 and 999 on exactly two pages each; 1014 unique; 1015-1019 free; no `inlineArt719` references remain; no repeated `/images/d17/problems/` photo across two problem-page figures.
- `node .context/price-audit.mjs --check` exits non-zero, but the 31 FAIL lines are all pre-existing on origin/main (forbidden-word hits on "vest" etc. on lines this lane did not touch); none reference the new 948/999/1014 copy.
