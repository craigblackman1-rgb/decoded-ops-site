# Work Order: decoded-ops-website — Artwork refresh (CR-WEB-030 + CR-WEB-034), staging-first — 2026-09-16

CODE: WO-INF-061 · SLUG: wo-website-artwork-refresh-2026-09-16
OWNER: (claim via `wo status wo-website-artwork-refresh-2026-09-16 active --note "session: ..."` before grinding)
SCOPE: decoded-ops-website (D:\apps\decoded-ops-website) page imagery + inline artwork on every
non-blog route; design-systems (D:\apps\design-systems\decoded-marketing) read-only as the asset
and mockup source. OUT OF SCOPE: blog landing + 29 posts (CR-WEB-028 / WO-INF-054), /clients/*,
/api/*, copy changes of any kind, ds-marketing.css / ds-plates.css edits.

GOAL: every page template on decodedops.co.uk carries imagery that matches brand guidelines v4 /
the unified artwork family (CR-WEB-032, WO-OPS-021 closed 2026-09-15), delivered a batch of pages
at a time to staging.decodedops.co.uk, reviewed by Craig there, then promoted to production.
Nothing reaches `main` without Craig's per-batch OK on staging.

CRs: CR-WEB-030 (briefed — zero-production photo swaps, inventory in
`.context/CR-WEB-030-image-review.md`) · CR-WEB-034 (approved — unified-family re-skin).

## MUST
- **Staging first, always.** Every build lane branches off `origin/staging` (NOT main) under
  `D:\apps\worktrees\decoded-ops-website\<lane>\` and pushes to `staging` (Coolify auto-deploys
  staging.decodedops.co.uk). Promotion to `main` is a separate, Craig-gated unit per batch:
  fast-forward `main` to `staging` only after Craig's OK, then `/gate` + attest before push.
- **Batches are sequential on staging.** The next batch's build does not start until the previous
  batch is promoted (or Craig has explicitly said "skip/park it"). Mockups may run ahead.
- u1 (staging fast-forward to main) lands before any batch. Staging is 35 behind / 0 ahead of main
  as of 2026-09-16 09:xx, so it is a clean fast-forward.
- Mockups: one Open Design pass per batch (project `decoded-marketing`, engine per
  feedback-opendesign-engine-not-lane-model), written to the OD project folder. Pre-approved per
  feedback-designs-pre-signed-off — build goes [AUTO] the moment the mockup file exists. The mockup
  is the Design Parity Gate spec for the build lane.
- Source of artwork truth: `D:\apps\design-systems\decoded-marketing\` (brand guidelines v4,
  artwork/register.html, assets/). Nothing new is drawn inside the website repo; if a page needs
  an asset that does not exist, the batch's mockup unit produces it in design-systems first and
  the build lane consumes the export.
- CR-WEB-030 swaps 1–8 ship in Batch A exactly as tabled in section C of the review file. Swap 9
  (hero-workshop alternate) is dropped unless the Batch C mockup calls for it.
- Never use `gen-bench-flatlay*.png` / `gen-press-hall.png` on a live page until a provenance row
  exists in `image-manifest.json` (CR-WEB-030 Gap 4). Never use PO-PH-01 (unfinished). Any stat
  artwork (PO-ST-*) reused on the site is checked for the day-rate leak first
  (feedback-check-stat-content-for-day-rate-leak).
- Copy is untouched. Alt text is written for every new image (descriptive, page-specific).
- **Never replace an asset under an existing filename.** Cloudflare + browsers cache `/images/*` for 4h;
  a replaced file behind the same URL shows the old image to anyone who has seen the page (bit us on
  /about, 2026-09-16). New content = new filename (e.g. `-v2` or date suffix) and update the reference.
- Lane model `opencode-go/mimo-v2.5` via launch-opencode-lane.ps1 only. Brief real characters,
  grep for `\u` escapes before merge (feedback-mimo-jsx-unicode-escapes).
- Verification is Claude's, in the browser, on staging.decodedops.co.uk: every page in the batch
  rendered desktop + 390px, image loads (no 404s, correct ratio, no CLS jump), Lighthouse
  image-weight sanity (no new asset > 300 KB without next/image sizing), og:image unchanged unless
  the batch says otherwise. Lane self-report is not verification.
- Each batch's Craig gate = a `project_test_items` row (what_changed / how_to_test = the staging
  URLs) filed in the same pass the batch is verified. Craig reviews on staging; no chat prompting.

## DECIDE YOURSELF
- Batch membership tweaks (move a page between batches) if a template dependency demands it.
- Crop/ratio choices, image sizing strategy, whether an inline plate is replaced or kept, as long
  as the mockup shows it.
- Order of batches after A (default below).

## ASK FIRST (batch via `wo ask`)
- Any copy change discovered as "necessary" by a mockup.
- Commissioning real photography (CR-WEB-030 Gaps 1–3) — commercial call.
- Swapping the home hero (`hero-craft.jpg`), which the register marks deliberate.

## LANES / BATCHES (sequential on staging; each = mockup → build → Claude verify → Craig OK on staging → promote)
- **A — CR-WEB-030 zero-production swaps (no mockup needed):** /about portrait; /sectors/awards-engraving,
  labels-packaging, print-promotional, signs-graphics cat-*.jpg; /resources/decoded-method cover;
  /apps/data-app hero; /apps/commerce product photo.
- **B — Money pages (8):** /clarity /deliver /retained /transform /pricing /how-i-build
  /process-quality-system /small-business.
- **C — Home, About, Contact (3).**
- **D — Sectors (9):** all /sectors/* incl. the four photographed in A (family treatment, not photo).
- **E — Apps + case studies (8):** /apps, /apps/data-app, /apps/artwork-manager, /apps/commerce,
  4× /case-studies/*.
- **F — Problem pages (9):** /problems/*.
- **G — Resources + tools (11):** /resources/*, /tools/*.
- **H — Locations template + legal (1 template = 38 pages, /privacy, /cookies).**

## VERIFY (per batch, Claude)
Browser walk of every page in the batch on staging (desktop + mobile), image network 200s, alt text
present, no console errors, `npm run build` green in the worktree, escape-grep 0, diff scoped to the
batch's routes + public/images. Then test item filed. Promotion unit: main == staging HEAD, prod
deploy commit hash == pushed hash (coolify deploy wait:true), spot-check 2 pages on decodedops.co.uk.

## LEDGER
- 2026-09-16 09:5x — WO raised from Craig's chat instruction (staging first, handful of pages at a
  time). CR-WEB-030 → briefed, CR-WEB-034 raised+approved. Staging 35 behind main, clean FF.
- 2026-09-18 16:xx — u5 B-mockup started: OD run ba1fc806 on project `decoded-ops-website` (where the page
  mockups live since the 24 Aug split; WO text said decoded-marketing — corrected, assets/register still export
  to decoded-marketing/artwork). Brief `design-systems/decoded-ops-website/briefs/BRIEF-batch-b-money-pages-2026-09-18.md`.
  Scope: 7 plates re-bound to ds-artwork v4 (rev 02), 8 new tx-photo evidence pieces DO-ART-908–915 from the
  existing commerce photo pool (no commissioned photography — ASK FIRST item untouched). staging == main == f46d8cd.
- 2026-09-18 16:5x — **u5 DONE.** OD run ba1fc806 succeeded (8 files). Claude verify: text-node diff vs HEAD =
  only the 8 eyebrow+caption pairs; 16/16 headless renders (1440 + 390) — plates rev 02, photos loaded + alt,
  corner mark, 0 console errors/4xx, no h-scroll. DO-ART-911 swapped cat-print.jpg → press-transfer.jpg
  (= website real-example.jpg) after visual check: cat-print shows a legible third-party business card.
  Unusable for later batches (third-party brands visible): cat-packaging.jpg, sector-credibility.jpg.
  OD filed BUG-WEB-028 (ds-artwork.js drops data-sub) — site port renders the subtitle anyway (rev 01 parity).
  Committed via worktree → design-systems main dd6553d (DO-SOP-010; OD project folder is the shared checkout,
  so mockups are written there by design and patched into a worktree to commit).
- 2026-09-18 16:5x — u6 build lane `inf061-u6-batch-b` dispatched (mimo, inline) off origin/staging f46d8cd.
- 2026-09-18 18:0x — **u6 + u7 DONE, Batch B on staging (68d3c4e).** Lane needed 3 passes: pass 1 shipped the
  evidence piece on ds-artwork's fixed export geometry (1440px, clipped at 390 / overflowing the column);
  pass 2 made it fluid but left caption + mark as siblings of `.art` (anchored to the wrong ancestor);
  pass 3 matched the mockup tree. Each caught on the local build by measuring boxes, not by the lane's
  report. Staging: 18/18 (8 pages × 2 widths + /about control) via the CF Access service token — plates
  rev 02 with data-no/rev + subtitle, photos 200 + alt, caption/mark inside the piece, 0 console errors,
  0 4xx. Coolify deploy exuebsbf → commit 68d3c4e. Test item ed06f734. u8 = Craig OK on staging.
- 2026-09-18 18:2x — **BUG-WEB-029** (Craig: can't scroll /deliver on staging): ds-artwork.css's export pin
  (`html, body { overflow:hidden }`) leaked site-wide through ds-layer.css. fix3 lane released it in the
  wrapper (c0d4f4f); staging redeployed c463259 (deploy nvbatvjo). Verified with a real mouse-wheel scroll,
  10 routes × 2 widths, 20/20 — the same test fails 20/20 on the previous build, so it detects the defect.
  My earlier 18/18 staging walk scrolled programmatically and could not have caught it; wheel-scroll
  assertion is now part of the batch verify. Bug closed, test item af1b3b32.
- 2026-09-18 18:4x — **HELD at u8.** Craig: the strap-line captions don't relate to the photos ("The floor the
  audit walks" over an embroidery-head close-up). Tabled: (a) factual evidence captions — clarity "Multi-head
  embroidery, mid-run" · deliver "Finished polo, checked and folded" · retained "Thread stand, every position
  filled" · transform "Heat press, platen down" · pricing "One order, packed" · how-i-build "Hi-vis vest,
  reflective bands" · pqs "Workwear shirts, one run" · small-business "Two blank mugs, ready to print";
  (b) eyebrow + stamp only; (c) Craig's idea — screenshots of the real deliverable (sample audit report),
  click-to-download, as the evidence piece (idea smu76ot9m83, overlaps give-first magnets). Deferred
  dmu76otklos. Batches C–H wait on this call because it may redefine the evidence piece.
