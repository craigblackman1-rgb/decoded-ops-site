# Voice lint — staging branch

Mechanical rules from `decoded-ops/references/voice.md` only. Judgement calls live in the review doc.
Generated from commit `dd585e8`.

**14 flags across 8 files.**

| Rule | Flags |
|---|---|
| em-dash — Em dash (banned outright by voice.md) | 0 |
| first-person-plural — we/our/us, must be first person singular | 9 |
| banned-phrase — Consultant-speak or buzzword from the banned list | 0 |
| not-x-but-y — "not X, but Y" parallelism | 0 |
| ai-setup-phrase — AI setup phrase or filler transition | 0 |
| overclaim — Superlative overclaim, only allowed if literally true | 5 |

> `first-person-plural` will flag deliberate client-voice lines: the nav writes each problem
> as the owner would say it out loud ("We're on the wrong software"). Those are correct.
> Triage this rule, do not bulk-fix it.

---

## em-dash — 0

Em dash (banned outright by voice.md)

_Clean._

## first-person-plural — 9

we/our/us, must be first person singular

- `app/problems/ai-paralysis/page.tsx:229` 03 The wrong question is being asked “How do we adopt AI?” is the wrong question. The right one is “what specific operational problems do we have that AI might help solve?” Without that reframing, AI adoption becomes a solution in search of a problem.
- `app/resources/software-reviews/page.tsx:47` name: 'Printavo', description: 'US-based MIS built for screen printers. Growing UK adoption, but the accounting integration and multi-currency gaps create workarounds for British businesses. Worth evaluating for the right operation profile.', status: 'Coming soon',
- `app/resources/software-reviews/page.tsx:48` US-based MIS built for screen printers. Growing UK adoption, but the accounting integration and multi-currency gaps create workarounds for British businesses. Worth evaluating for the right operation profile.
- `components/Header.tsx:14` We're on the wrong software
- `components/Header.tsx:16` Our system is ancient
- `components/Header.tsx:24` We can't take on more work
- `components/Header.tsx:26` Busy season breaks us
- `components/Header.tsx:32` We run the place on spreadsheets
- `components/Header.tsx:35` We don't know what stock we have

## banned-phrase — 0

Consultant-speak or buzzword from the banned list

_Clean._

## not-x-but-y — 0

"not X, but Y" parallelism

_Clean._

## ai-setup-phrase — 0

AI setup phrase or filler transition

_Clean._

## overclaim — 5

Superlative overclaim, only allowed if literally true

- `app/blog/[slug]/page.tsx:207` A Clarity Audit maps your operations, finds the changes that will make the biggest difference, and gives you a plan you can act on. No reports you'll never read. No recommendations you can't implement.
- `app/problems/data-scattered/page.tsx:120` The warehouse floor The only place stock is actually counted by hand, and the last place any system asks.
- `app/problems/systems-dont-talk/page.tsx:63` Most decoration and print businesses run four to seven separate systems. Order management, accounts, artwork, the website, despatch. Each one is an island. The only bridges between them are people typing the same data in again, spreadsheets, and emails.
- `app/problems/wrong-erp-software/page.tsx:126` 01 Selected on demo, not on fit Vendors are excellent at demos. They show you what the software does well and move quickly past what it doesn't. Without someone on your side who knows the sector, you're judging presentation skills, not fit. The only fair test is against a written brief that describes your actual business.
- `app/tools/ops-health-score/page.tsx:32` Your operations are under significant strain. Disconnected systems, undocumented processes, and low team capability are creating hidden costs every day. A Clarity Audit will give you a prioritised roadmap to address the biggest gaps first.

---

## "X, not Y" inversion count (reported, not flagged)

The site leans on this construction heavily as a house style. Not a violation on its own.
The question is whether any single page overuses it.

| Page | Count |
|---|---|
| /resources/5-warning-signs | 10 |
| /problems/bottleneck-growth | 8 |
| /apps/crm | 7 |
| /apps/commerce | 6 |
| /case-studies/cobra-workwear | 6 |
| /problems/inventory-blind | 6 |
| /problems/slow-processes | 6 |
| /problems/wrong-erp-software | 6 |
| /resources/six-sigma | 6 |
| /about | 5 |
| /case-studies | 5 |
| /problems/ops-in-owners-head | 5 |
| /deliver | 4 |
| /how-i-build | 4 |
| /locations/fractional-cto | 4 |
| /problems/erp-implementation-failure | 4 |
| /problems/legacy-system | 4 |
| /resources | 4 |
| /apps/artwork-manager | 3 |
| /case-studies/eternal-fitness | 3 |
| /clarity | 3 |
| /locations/fractional-cto/[location] | 3 |
| /problems/spreadsheet-addiction | 3 |
| /process-quality-system | 3 |
| /sectors/workwear | 3 |
| data/problem-routing.ts | 3 |
| /apps/data-app | 2 |
| /case-studies/hanicks | 2 |
| /decoded-method | 2 |
| /locations/tech-audit/[location] | 2 |
| /pricing | 2 |
| /problems/ai-paralysis | 2 |
| /problems/cant-scale-operations | 2 |
| /problems/data-scattered | 2 |
| /sectors/schoolwear | 2 |
| /transform | 2 |
| /apps | 1 |
| /blog | 1 |
| /case-studies/tacklebag | 1 |
| /problems/buy-vs-build | 1 |
| /problems/disaster-recovery | 1 |
| /problems/manual-workarounds | 1 |
| /problems/no-ops-owner | 1 |
| /problems/seasonal-peaks | 1 |
| /retained | 1 |
| /sectors/awards-engraving | 1 |
| /sectors/garment-decoration | 1 |
| /sectors/labels-packaging | 1 |
| /sectors/signs-graphics | 1 |
| /sectors/teamwear-clubwear | 1 |
| /small-business | 1 |
| /tools | 1 |
| components/Header.tsx | 1 |
| data/locations.ts | 1 |
| data/sector-routing.ts | 1 |
