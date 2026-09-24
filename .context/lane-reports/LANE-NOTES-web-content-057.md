# Lane notes: web-content-057

## What was done

Applied CR-WEB-057 (public app rename) and CR-WEB-056 (ERP playbook remainder) in a single
lane run. Two copy-spec scripts applied cleanly (96/96 + 3/3), then structural route moves and
href updates applied manually.

### Copy changes (99 replacements across 22 files)
- Decoded Data App → Decoded Works (with ERP positioning throughout)
- Artwork Manager → Decoded Proof (with revision-control framing)
- Commerce status: "Live infrastructure" → "In build at Hanicks" (factual)
- Pricing tiers: Standard → Connected, Extended →Scaled (Commerce + Proof)
- Proof hero, terms section, and Commerce founding-client notice rewritten
- ERP selection playbook rewritten to vendor-neutral framing

### Structural changes
- `git mv app/apps/data-app app/apps/works`
- `git mv app/apps/artwork-manager app/apps/proof`
- Canonical + openGraph URL updated in both moved files
- 14 internal hrefs updated across Header, Footer, apps index, case studies, pricing, problem pages
- Sitemap entries updated
- Existing `/decoded-data-app` redirect destination updated to `/apps/works`
- Two new permanent redirects added: `/apps/data-app` → `/apps/works`, `/apps/artwork-manager` → `/apps/proof`

### Final sweep
- `git grep -n "/apps/data-app|/apps/artwork-manager" -- app components data lib` → 0 hits
- `git grep -n "Data App|Artwork Manager" -- app components data lib ':!app/blog' ':!app/clients'` → 1 hit
  - `data/problem-routing.ts:275` — owned by separate lane, out of scope

### Verification
- `npx tsc --noEmit` → clean, 0 errors

### Deviations
- `app/page.tsx` (homepage) had 3 references to "The Data App" in hero alt text and on-screen
  labels that were not in copy-spec.json — caught and renamed during the final sweep. These were
  DO-ART-917 and DO-ART-918 figure labels on the homepage, not covered by the specs because the
  specs targeted the individual app/problem pages.

### Binary asset
- `public/newsletter/nl-001/works-hanicks-v3.png` was staged by `git add -A` — pre-existing
  untracked file, not created by this lane.
