# CR-WEB-056 copy-spec notes

`copy-spec.json` contains 160 verified find/replace changes across 33 files, covering decisions 1-11.
Every `find` string was checked programmatically against the live worktree source
(`D:\apps\worktrees\decoded-ops-website\web-content-056`) and occurs exactly once in its file.

## Could not map to source / live-site vs. worktree drift

The three review files (batch1.json, B.json, C.json) were produced by fetching the LIVE site
(`decodedops.co.uk`) per BRIEF.md's instructions. Several quoted findings do not exist verbatim in
this worktree's checked-out branch (`web-content-056`, tracking `origin/staging`), which is either
ahead of or has diverged from what's live. Where this happened I located and fixed the equivalent
current-source text instead of the literal quoted string:

- **"Connect Shopify, WooCommerce or your B2B portal directly..." (batch1/C, `/problems/ecommerce-not-connected`)** —
  this exact sentence isn't in the current page. The Shopify/WooCommerce names do still appear in this
  page's metadata (title/description/twitter, all identical text) and in two FAQ Q&As ("Why is Shopify
  not syncing with my ERP?", "Can WooCommerce integrate with a decoration business ERP?"). I rewrote all
  five instances to platform-neutral wording ("online store" / "online store platforms"). If the live
  site has additional Shopify/WooCommerce mentions in a hero paragraph that predates this branch, that
  paragraph doesn't exist here to fix — check the live deploy directly before this branch merges.
- **"Does this sound familiar?" / "Let's talk about what's happening" (B/C, 7 pages: cant-scale-operations,
  disaster-recovery, ecommerce-not-connected, manual-workarounds, no-ops-owner, slow-processes,
  systems-dont-talk)** — these 7 pages render through the shared `components/ProblemPageDS.tsx`
  component, not per-page copy. Fixed once in the component (covers all 7 pages), per BRIEF's own
  instruction to fix template defaults once rather than page by page.
- **"Sound familiar?" (B/C, 8 pages: ai-paralysis, bottleneck-growth, data-scattered, inventory-blind,
  legacy-system, ops-in-owners-head, spreadsheet-addiction, wrong-erp-software)** — these 8 pages do
  have this exact string hardcoded per-page (not templated), matching the review. Fixed individually,
  8 entries.

## Decision 6 (nav/footer short forms) — left unresolved beyond nav/footer

Decision 6 explicitly scopes "Trade store" -> "Commerce" to nav and footer only. Fixed in
`components/Header.tsx` and `components/Footer.tsx`. "Trade store" also appears in body/mockup copy
that decision 6 doesn't cover:
- `app/apps/page.tsx:68` — mockup crumb text `<span>Trade store ›</span> Workwear`
- `app/apps/commerce/page.tsx:84` — mockup crumb text `<span>Trade store ›</span> Full catalogue`
- `app/pricing/page.tsx:262` — `<span className="kicker">Trade store</span>`

Not changed; these are page-body/mockup labels, not "nav/footer", so outside the decision as written.
Worth a follow-up decision on whether "Commerce" should replace "Trade store" everywhere for consistency,
since the /apps dedicated pages already say "Decoded Commerce" throughout.

## Decision 11 (locations) — scope notes

- Rewrote `localContext`, `regionalChallenge` and `businessSectors` for all 27 South East towns (not
  London/Manchester, which already correctly reference decorated-goods businesses per the C.json
  finding). Used 4 rotating sentence templates each for `localContext` and `regionalChallenge` (offset
  by one position from each other) so consecutive towns don't read identically, referencing each town's
  existing `nearbyAreas` data rather than inventing new facts.
- `businessSectors` chips reset to a rotating 4-of-8 selection from a decoration-only pool (Garment
  decoration, Embroidery and screen print, Workwear suppliers, Promotional merchandise, Signs and
  graphics, Labels and packaging, Teamwear and clubwear, Schoolwear suppliers) so the chips match the
  rewritten paragraph instead of the old generic-SME sectors (e-commerce, tech startups, motorsport, etc).
- `localFact` stat removal: decision 11's own wording lists three specific categories to remove —
  "jobs %, business counts, employee counts". I scanned every town's `localFact` and only found these
  three categories in **7 towns**: Chichester (employee count), Haywards Heath (jobs %), Crawley
  (business count + jobs), Burgess Hill (business count + jobs), Guildford (business count + employee
  estimate), Brighton (business count), Dorking (business count). Fixed all 7, softening the sentence
  rather than deleting it outright.
- **Left unresolved (needs Craig's ruling, per C.json's own framing as "worth a decision"):** other
  numeric local trivia that ISN'T in the three named categories — e.g. Horsham "75 years", Woking
  "50-hectare site", Epsom "130,000" crowd capacity, Eastbourne "800 berths", Dorking "50 years"/"world"
  reach, Crowborough "242m above sea level", Guildford "1980s" cluster date. These are civic/historical
  facts rather than business-economy stats, so I read decision 11 as not covering them and left them
  untouched. If Craig wants ALL numbers stripped from `localFact` regardless of category, that's a
  bigger follow-up pass.
- London and Manchester: `localContext` and `businessSectors` already correctly reference decorated-goods
  businesses, left unchanged. Their `regionalChallenge` still had an em dash each, so I did a minimal
  em-dash-only edit there (no content rewrite) rather than the full 4-template rotation used for the
  other 27 towns.

## Decision 2 (small business) — one loose end

Removing the Deliver/Transform/Retained cards drops the only uses of the `TrendingUp`, `Wrench` and
`Clock` icon imports in `app/small-business/page.tsx` (from `lucide-react`). The copy-spec change
doesn't touch the `import` line at the top of the file since that's not copy — whichever lane
implements this should drop the now-unused imports as part of the same change (a Turbopack build won't
fail over unused imports, but ESLint likely will).

## Em dash audit — app/, components/, data/, lib/, excluding app/blog, app/resources, app/tools

Ran `grep -rn "—" app components data lib --include="*.ts" --include="*.tsx"`, excluded
`app/blog`, `app/resources`, `app/tools`, `app/api` (route handlers, no copy) and comment-only lines.

**Two clusters, handled separately:**

### Cluster A — the public site (103 lines, listed below)

Many of these are already fixed by `copy-spec.json` above (decisions 8 and 11) — re-run this grep
after `copy-spec.json` lands and diff before doing a mechanical sweep, to avoid double-editing the same
line. In particular: all 29 `data/locations.ts` lines, both `app/case-studies/case-study-01/page.tsx`
lines, both `app/case-studies/eternal-fitness/page.tsx` lines (233 is fixed via the "transformation"
rewrite; 239 is not, still needs the sweep), `app/case-studies/case-study-03/page.tsx:231` (not fixed,
243 not fixed either — only the twelve-month-minimum line was in scope), `app/pricing/page.tsx:141` and
`:242` (fixed; `:88` is the `eyebrow="— Evidence · Pricing"` pattern, not fixed), all six
`app/sectors/*` lines (fixed), `app/small-business/page.tsx:242` (fixed; `:198` is the
`eyebrow="— Evidence..."` pattern, not fixed).

The recurring `eyebrow="— Evidence · <Page>"` pattern (seen on `/pricing`, `/small-business`,
`/clarity`, `/retained` and probably others via the shared `PhotoPiece`/`Artwork` components) is a
design-system convention, not a one-off sentence — worth fixing once in whichever component renders
that eyebrow string, by dropping the leading em dash or replacing it with a different marker, rather
than editing each page's prop value individually.

```
app/case-studies/case-study-01/page.tsx:276
app/case-studies/case-study-01/page.tsx:288
app/case-studies/case-study-03/page.tsx:231
app/case-studies/case-study-03/page.tsx:243
app/case-studies/eternal-fitness/page.tsx:233
app/case-studies/eternal-fitness/page.tsx:239
app/clarity/page.tsx:187
app/clients/dashboard/page.tsx:125
app/clients/documents/view/[id]/QuestionnaireForm.tsx:144
app/clients/layout.tsx:4
app/clients/layout.tsx:5
app/clients/[clientId]/components/AcceptanceSection.tsx:34
app/clients/[clientId]/components/AcceptanceSection.tsx:35
app/clients/[clientId]/components/AcceptanceSection.tsx:36
app/clients/[clientId]/components/AcceptanceSection.tsx:74
app/clients/[clientId]/components/AcceptanceSection.tsx:101
app/clients/[clientId]/components/AcceptanceSection.tsx:256
app/clients/[clientId]/components/DemoSection.tsx:150
app/clients/[clientId]/components/DemoSection.tsx:170
app/clients/[clientId]/components/DemoSection.tsx:212
app/clients/[clientId]/components/DemoSection.tsx:238
app/clients/[clientId]/components/DemoSection.tsx:449
app/clients/[clientId]/components/DemoSection.tsx:511
app/clients/[clientId]/components/PortalMockupSection.tsx:197
app/clients/[clientId]/components/PricingSection.tsx:246
app/clients/[clientId]/components/RoadmapSection.tsx:85
app/clients/[clientId]/components/SystemsDiagram.tsx:70
app/clients/[clientId]/components/SystemsDiagram.tsx:72
app/clients/[clientId]/components/SystemsDiagram.tsx:216
app/clients/[clientId]/components/SystemsDiagram.tsx:226
app/deliver/page.tsx:52
app/how-i-build/page.tsx:78
app/pricing/page.tsx:88
app/pricing/page.tsx:141
app/pricing/page.tsx:242
app/process-quality-system/page.tsx:160
app/retained/page.tsx:97
app/sectors/garment-decoration/page.tsx:285
app/sectors/operations-consultant-print-embroidery/page.tsx:45
app/sectors/operations-consultant-print-embroidery/page.tsx:70
app/sectors/promotional-merchandise/page.tsx:290
app/sectors/signs-graphics/page.tsx:284
app/sectors/teamwear-clubwear/page.tsx:282
app/sectors/workwear/page.tsx:223
app/small-business/page.tsx:198
app/small-business/page.tsx:242
app/transform/page.tsx:79
components/calculators/AutomationRoiCalculator.tsx:190
components/calculators/CapacityPlannerCalculator.tsx:48
components/calculators/CapacityPlannerCalculator.tsx:94
components/calculators/CapacityPlannerCalculator.tsx:155
components/calculators/CapacityPlannerCalculator.tsx:158
components/calculators/CapacityPlannerCalculator.tsx:174
components/calculators/DowntimeCostCalculator.tsx:148
components/calculators/RtoCalculator.tsx:159
components/calculators/SeasonalCapacityCalculator.tsx:79
components/graphics/ExpertiseTimelineGraphic.tsx:51
components/Header.tsx:92
components/Header.tsx:93
components/Header.tsx:94
components/Header.tsx:95
components/HeroGraphic.tsx:94
components/LocationPage.tsx:250
components/schematics/sectors/PrintEmbroideryOpsConsultantSchematic.tsx:11
components/schematics/sectors/PrintEmbroideryOpsConsultantSchematic.tsx:13
data/locations.ts:25
data/locations.ts:37
data/locations.ts:49
data/locations.ts:61
data/locations.ts:73
data/locations.ts:85
data/locations.ts:97
data/locations.ts:109
data/locations.ts:121
data/locations.ts:134
data/locations.ts:146
data/locations.ts:158
data/locations.ts:182
data/locations.ts:194
data/locations.ts:206
data/locations.ts:218
data/locations.ts:230
data/locations.ts:243
data/locations.ts:255
data/locations.ts:267
data/locations.ts:279
data/locations.ts:291
data/locations.ts:303
data/locations.ts:315
data/locations.ts:327
data/locations.ts:339
data/locations.ts:347
data/locations.ts:352
data/locations.ts:365
data/problem-routing.ts:345
data/sector-routing.ts:200
lib/email.ts:5
lib/email.ts:6
lib/email.ts:13
lib/email.ts:14
lib/email.ts:15
lib/hub-fetch.ts:12
lib/hub-fetch.ts:20
```

Note: `components/Header.tsx:92-95` are the small-business nav ladder entries removed entirely by the
decision-2 change above (`smallBusinessProducts` array), so those 4 lines disappear once that change
lands and don't need separate sweeping.

### Cluster B — per-client proposal data (373 lines, not listed individually, flagged for a scoping call)

`app/clients/[clientId]/data/*-proposal.ts` (hanicks-proposal.ts, cobra-workwear-proposal.ts,
tacklebag-proposal.ts, tacklebag-proposal-v2.ts, scotshirts-proposal.ts, cwear-proposal.ts) account for
373 of the 476 total em-dash hits app-wide, roughly 78% of all instances. These are per-client
commercial proposal documents rendered inside the authenticated client portal, not general marketing
website copy, and CR-WEB-056 / BRIEF.md's brief is about the public site. I've left these out of the
sweep list above and out of copy-spec.json entirely. Worth a decision: are these in scope for a voice
pass at all, and if so, should each named client's live proposal be touched without re-sending it to
that client (some may already be signed/accepted)? That's a commercial question, not a copy one, so I
haven't touched them.

## Not touched: /tools and /resources (other than the erp-selection-playbook)

Per BRIEF's explicit instruction, skipped: `/tools` (the "six calculators" vs. five-tools-that-exist
mismatch, and the retired "AI Readiness Check" name reuse — C.json's finding) and all of `/resources`
except `/resources/erp-selection-playbook` (the `/resources/decoded-method` DO-PR-002 numbering
mismatch — also a C.json finding). Both are real findings and both are currently being worked by
another lane per BRIEF.md; they're not in copy-spec.json and shouldn't be, but they're still open
issues worth tracking so they don't fall through a gap between lanes.

## /blog

Not reviewed, not touched, per BRIEF's explicit skip instruction.
