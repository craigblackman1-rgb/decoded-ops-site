# Lane notes — web074-art-swaps (CR-WEB-074, WO-INF-084)

Base: origin/main e1194dd. Six commits, one per numbered step (step 5's work landed inside
steps 2/3 since the new variants ARE the 918/718 replacements; step 8 needed no change).

## Per step

### 1 · Photos (commit 89017db — own commit, revertable alone)
Installed all 15 exports from `.context/cr-web-074/swap-exports/`:
- E01–E13 → `public/images/d17/problems/` (new filenames, nothing overwritten)
- E14–E15 → `public/images/money/`

Page → old photo → new photo:
| Page | Slot | Old | New |
|---|---|---|---|
| bottleneck-growth | hero 961 | hero-workshop-783ec1 | hero-embroidery-floor-84216c (40% 50%) |
| bottleneck-growth | 718 plate | hero-workshop-783ec1 | plate-crates-aisle-e843b7 (50% 50%, aria updated) |
| erp-implementation-failure | 967 print "floor" | hero-workshop-783ec1 | card-warehouse-floor-f1d62c (50% 50%) |
| erp-implementation-failure | 967 print "decoration" | thread-spools-2195b5 | card-embroidery-heads-50b561 (60% 50%) |
| inventory-blind | 968 shelf inset | cat-workwear-401e08 | card-garment-shelf-724253 (50% 50%) |
| legacy-system | hero 969 | thread-spools-2195b5 | hero-embroidery-heads-b5b1fb (70% 50%) |
| ops-in-owners-head | hero 972 | hero-workshop-783ec1 | hero-stockroom-mixed-fa24e6 (50% 50%, aria updated) |
| ops-in-owners-head | 718 plate | hero-workshop-783ec1 | plate-dtf-conveyor-a1f1d1 (40% 50%, aria updated) |
| spreadsheet-addiction | hero 975 | hero-workshop-783ec1 | hero-office-paperwork-75fcd2 (55% 50%, aria updated) |
| wrong-erp-software | hero 978 | thread-spools-2195b5 | hero-racking-aisle-7d129e (50% 50%, aria updated) |
| pricing (DO-ART-912) | money band | prod-mailer-2026-09 (900w) | band-packing-station-7c4f80 (1600x900) |
| process-quality-system (DO-ART-914) | money band | cat-workwear-2026-09 (900w) | band-screenprint-carousel-f0dce0 (1600x900) |
| deliver (909) | money band | prod-polo-2026-09 (900w, kept) | same photo, new maxWidth={900} prop, true dims 900x1125 |
| how-i-build (913) | money band | prod-hivis-2026-09 (900w, kept) | same photo, maxWidth={900} |
| small-business (915) | money band | cat-promo-2026-09 (900w, kept) | same photo, maxWidth={900}, true dims 900x600 |

Photos E11/E12/E13 are referenced only from the new 1009/1010/1011 figures (steps 2/3/5).

### 2 · DO-ART-918 home only (commit 9405e5d)
| Page | Old | New |
|---|---|---|
| cant-scale-operations | 918 (cat-workwear photo + ledger) | DO-ART-993 shared import + d17-resources.css |
| inventory-blind | 918 (inline, cat-workwear) | DO-ART-943 shared import + d17-apps-cases.css; eyebrow → "The screens · DO-ART-943" |
| manual-workarounds | 918 | NEW DO-ART-1009 "Every workaround, listed" (718 variant, photo E11, copy verbatim from map §6) |
| seasonal-peaks | 918 | NEW DO-ART-1010 "Written down before the peak" (718 variant, photo E12, copy verbatim from map §6); eyebrow → "Written down · DO-ART-1010" |

Shared-figure lifting (map §11): 993/942/943/986/991/997/998 extracted verbatim to
`lib/d17-figures/*.ts`; home pages (capacity-planner, apps/works ×2, six-sigma,
erp-selection-playbook, ops-health-score, rto-calculator) now import them too — no pasted copies.

### 3 · DO-ART-718 keep on two (commit 2c27540)
Kept: ops-in-owners-head, bottleneck-growth (photos already swapped in step 1).
| Page | Old | New |
|---|---|---|
| ai-paralysis | 718 | DO-ART-997 (a997Solo, sx--solo cut) + d17-resources.css; eyebrow → "The assessment · DO-ART-997" |
| disaster-recovery | 718 | DO-ART-998 (a998Solo) + d17-resources.css |
| no-ops-owner | 718 | NEW DO-ART-1011 "Who owns operations?" (718 variant, photo E13, copy verbatim from map §6) |
| slow-processes | 718 | DO-ART-986 shared import + d17-resources.css |

### 4 · DO-ART-917 home only (commit fc71343)
| Page | Old | New |
|---|---|---|
| data-scattered | 917 (Hanicks product screen) | DO-ART-942 + d17-apps-cases.css; eyebrow → "One catalogue · DO-ART-942" |
| erp-implementation-failure | 917 | DO-ART-991 (a991Solo) + d17-resources.css; eyebrow → "The brief · DO-ART-991" |

### 5 · New figure variants (commits 9405e5d + 2c27540)
1009/1010/1011 built as `.d17 sw sw-doc a718 aNNNN` variants — identical markup recipe to 718
(figcaption.sw-cap with k/bar/h3/p/keys; stage with doc-r register, doc-s five-section SOP,
doc-l two-entry log), `data-rev="01"`, `data-tx="photo"`, mark line with the new number.
"Not measured" cells use the existing `.chip--a` amber token; no new colours.
Sizing hook CSS appended to d17-problems.css: stage min-height 520u + figure padding ~44/48u
→ ~610px at 1152 wide (≤70svh at 1440x900); register cells wrap; ≤640px docs scale to .74px
and the third doc hides via the existing a718 phone rule.

### 6 · Renumbers (commit e7c1264)
- systems-dont-talk: `a918`/DO-ART-918 → `a1012`/DO-ART-1012 (const inlineArt1012, aria + mark updated)
- spreadsheet-addiction: `a917`/DO-ART-917 → `a1013`/DO-ART-1013 (const inlineArt1013, aria + mark updated)
- `a1012`/`a1013` are hook-only classes in d17-problems.css — the pieces need nothing beyond
  `.sw`/`.sw-doc`, so no rules were copied; this removes the `.a918` aspect-ratio and `.a917`
  31/1fr grid leaks the map flagged. Numbers verified free before use (grep DO-ART-10xx).

### 7 · Height polish (commit 2388a65)
- Home DO-ART-917 (`app/d17-art.module.css` only — home has its own copies): figure padding
  56/64u → 40u, win mock-up internals tightened (winBar 48→40u, winMain padding, kpi padding +
  number scale 42→34u, meter/feeds paddings and margins reduced). Estimate ≈ 610–630px at 1152
  wide (was 798). No content hidden.
- ≤640px DO-ART-917: new phone-ceiling block tightening win internals (was 873px on 844 phone;
  target ≤820 — needs Claude's render to confirm).
- ≤640px DO-ART-718: new block — doc scale .74px, keys/table padding tightened, SOP
  placeholder line bars hidden (decorative; numbered headings stay), stage gap 18→12px
  (was 927px on 844 phone; target ≤820 — needs Claude's render to confirm).

## Now-unreferenced old image files
Grep of `app/ components/ data/ lib/` after all steps — zero references to:
- `public/images/d17/problems/hero-workshop-783ec1.{webp,jpg}` (sectors page uses a
  different copy at `images/d17/sectors/hero-workshop-783ec1.webp`, untouched)
- `public/images/d17/problems/hero-workshop-8bff06.{webp,jpg}`
- `public/images/d17/problems/thread-spools-2195b5.{webp,jpg}`
- `public/images/d17/problems/cat-workwear-401e08.{webp,jpg}`
- `public/images/money/prod-mailer-2026-09.{webp,jpg}`
- `public/images/money/cat-workwear-2026-09.{webp,jpg}`
Not deleted (brief: list only). Safe to delete in a follow-up once Claude's visual pass signs off.

## Not implemented / left for Claude
- Map §10 register delta (`decoded-marketing/artwork/register.html`) — Claude's per the brief.
- Map §12 open items (Craig's consent on client-premises crops, 997/998/991 eyeball, 1009–1011
  design review) — Claude's.
- Home 917/718/917-phone heights and the ≤820px phone targets are CSS estimates from unit
  arithmetic; no dev server / Playwright was allowed, so the actual pixel measurements must be
  Claude's render pass.
- Global `.a917`/`.a918` blocks in `d17-global.css` are now dead (home uses module copies) but
  left in place — safe follow-up cleanup, out of the numbered steps.
- Price audit: 31 pre-existing "vest" failures on base e1194dd, same 31 after this lane —
  zero introduced. `.context/price-audit.md` was touched by the script and not committed.

## Verification
- `npx tsc --noEmit` clean after every commit.
- Post-swap greps: `data-no="DO-ART-918"` and `DO-ART-917` only in `app/page.tsx`;
  `DO-ART-718` exactly two pages (bottleneck-growth, ops-in-owners-head).
- No `\uXXXX`/`\xXX` escapes in any new JSX/string figure.
- No reference to proof-approval.jpg anywhere.

## fix1 (commit 3a6795d)

CR-WEB-074 fix1 lane — phone fit for DO-ART-943/917 + drop duplicate swap exports.

- **DO-ART-943 ≤640px** (`app/d17-apps-cases.css`): new `@media (max-width:640px)` block after
  the existing 760px stack — figure padding 14/12/56px, gap 14px; `.desk` becomes
  relative/`width:100%` with `transform:none` (no left crop); `.mw` scale `.62px → .55px`; the
  secondary phone mock-up hides (`display:none`); `.cap3` scales `.9px` with 10px li padding.
  Caption list (Dashboard / Catalogue view / Supplier import) and the mark line kept. Figure
  estimate ~700–750px at 342px wide (was 1152–1174). No `calc(N*var(--u))` used on the figure's
  own min-height/padding.
- **Root cause of the left crop found and fixed at source**: the generic `.desk` pill rule in
  `d17-problems.css` (`.desk{ position:absolute; left:50%; transform:translateX(-50%); … }`)
  leaks into a943's catalogue-card div on `/problems/inventory-blind` (which loads problems.css
  before apps-cases.css), shifting it left by half its width under `.d17`'s overflow:hidden.
  The base `.a943 .desk` rule now carries resets (transform, display, background, radius,
  padding, white-space, gap, z-index, font, letter-spacing, text-transform, color) so the card
  renders correctly at every width on that page, not just ≤640px.
- **DO-ART-917 ≤640px** (`app/d17-art.module.css`): second-pass block after the existing
  ≤640 tightening — figure padding 16/14/14, gap 14; winBar 28px; winMain padding 10/12;
  the mock-up subline `.s` hides (decorative — headline, three KPI numbers and mark line kept);
  kpi/meter/feeds paddings and gaps tightened again; caption bar/p/live/mark margins reduced.
  Figure estimate ~740–780px at 342px wide (was 859).
- **Hygiene**: `git rm -r --cached .context/cr-web-074/swap-exports` + folder deleted from the
  worktree. All 15 shipped webp exports verified present under `public/images/` before removal;
  `_contact-sheet.jpg` and `manifest.json` existed only in the duplicate copy (working
  artefacts, not shipped). `artwork-swap-map.md` and the helper .mjs scripts kept.
- **Honest limits**: heights are CSS arithmetic estimates — no dev server / Playwright was
  allowed, so the ≤800px claims need a render pass to confirm. `npx tsc --noEmit` clean.
