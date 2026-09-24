# Lane notes: web-g-build-d17-r2

## What was done
D17 artwork ported to all 16 resource and tool pages. Each page now has:
- `d17-global.css` and `d17-resources.css` imported
- `D17Motion` component imported and rendered
- Hero art injected via `dangerouslySetInnerHTML` in a `g-navy` section
- Inline art (where available) added as a separate section

## Pages modified (16 total)

### Resources index + 9 resource pages
| Page | Hero art | Inline art | Notes |
|---|---|---|---|
| `/resources` | DO-ART-980 (sequence, prints over bench) | — | Replaced existing Plate DO-ART-308 |
| `/resources/5-warning-signs` | DO-ART-982 (tags on print floor) | — | Replaced existing Plate DO-ART-422 |
| `/resources/artwork-approval-playbook` | DO-ART-989 (brief + proof + stamp) | DO-ART-990 (two routes schematic) | No prior Plate |
| `/resources/audit-checklist` | DO-ART-983 (clipboard over embroidery floor) | DO-ART-984 (seven areas schematic) | Replaced existing Plate DO-ART-307 |
| `/resources/capacity-planner` | DO-ART-992 (result screen over workshop) | DO-ART-993 (spec sheet vs real day) | No prior Plate |
| `/resources/decoded-method` | DO-ART-988 (playbook cover + layers + scorecard) | — | No prior Plate |
| `/resources/erp-selection-playbook` | DO-ART-991 (cover + vendor brief scoring) | — | No prior Plate |
| `/resources/seasonal-capacity` | DO-ART-994 (year planner + capacity line) | — | No prior Plate |
| `/resources/six-sigma` | DO-ART-985 (playbook cover + spread) | DO-ART-986 (1,000 garments grid) | Existing Plate DO-ART-209 kept |
| `/resources/sop-template` | DO-ART-987 (template + register + test note) | — | No prior Plate |

### Tools index + 5 tool pages
| Page | Hero art | Notes |
|---|---|---|
| `/tools` | DO-ART-981 (three result screens fanned) | Replaced existing Plate DO-ART-210 |
| `/tools/automation-roi-calculator` | DO-ART-995 (ROI screen over thread spools) | No prior Plate |
| `/tools/downtime-cost-calculator` | DO-ART-996 (incident scenario + result slip) | No prior Plate |
| `/tools/ops-health-score` | DO-ART-997 (health score screen over bench) | 'use client' page — D17Motion works fine |
| `/tools/rto-calculator` | DO-ART-998 (recovery time schematic) | No prior Plate |
| `/tools/should-i-replace-erp` | DO-ART-999 (scorecard document over mailer) | 'use client' page — D17Motion works fine |

## Verification
- `npx tsc --noEmit` — clean, zero errors
- `git grep -n "craig-blackman" app/resources/ app/tools/` — 0 hits
- CR-WEB-055 copy fixes already committed (b44c3ab) — not redone

## Not ported
Nothing — all 16 pages have D17 hero art. The inline art slots (984, 986, 990, 993) were added where the mockup sources provided them.
