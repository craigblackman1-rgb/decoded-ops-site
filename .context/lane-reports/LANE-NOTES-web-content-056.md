# Lane notes: web-content-056

## What was done

Three commits, executed in order per the brief:

1. **copy-spec.json** — ran `apply_spec.py`, all 157/157 replacements applied, 0 skipped. Covers decisions 1-11 from the content review.

2. **Em-dash sweep** — 27 em-dashes fixed across in-scope files:
   - 8 eyebrow patterns (`— Evidence · X` → `Evidence · X`) in clarity, deliver, how-i-build, transform, process-quality-system, small-business, pricing, retained
   - 4 case study card sentences (eternal-fitness ×2, case-study-03 ×2)
   - 9 calculator hint/result strings (capacity-planner ×5, rto ×1, downtime-cost ×1, automation-roi ×1, seasonal-capacity ×1)
   - 1 attribution line (ExpertiseTimelineGraphic: `— Craig Blackman` → `Craig Blackman`)
   - 1 guarantee text (HeroGraphic)
   - 1 county separator (LocationPage)
   - 2 anchor copy strings (sector-routing, problem-routing)
   - 1 London localContext (locations.ts)

   Remaining em-dashes in in-scope files: **0**. All other hits are in excluded directories (app/clients, app/blog, app/resources, app/tools) or are code comments.

3. **Trade store → Commerce** — 3 replacements:
   - `app/pricing/page.tsx:262` — kicker label
   - `app/apps/page.tsx:68` — mockup breadcrumb
   - `app/apps/commerce/page.tsx:83` — mockup breadcrumb

## Verification

- `npx tsc --noEmit` — clean, 0 errors
- No dev servers, browsers, builds, databases or .env files used

## Scope notes

- Client proposal data (app/clients/[clientId]/data/*-proposal.ts) contains ~373 em-dashes but is excluded per the brief (private proposals, out of scope)
- /tools, /resources, /blog excluded per the brief
- The `eyebrow="— Evidence · X"` pattern was fixed per-page (8 files) rather than in a shared component, because the brief said to handle each occurrence individually
