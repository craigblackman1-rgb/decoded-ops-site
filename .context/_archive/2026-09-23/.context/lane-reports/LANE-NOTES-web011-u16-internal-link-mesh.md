# Lane notes: web011-u16-internal-link-mesh

## What was done
Added 10 new inbound links across `data/problem-routing.ts` (6 edits) and `data/sector-routing.ts` (4 edits) to bring 7 underlinked pages up to or above the 3-link minimum target.

## Links added

| Target page | Source entry | Array | Target href |
|---|---|---|---|
| /problems/spreadsheet-addiction | slow-processes | relatedProblems | /problems/spreadsheet-addiction |
| /problems/ops-in-owners-head | disaster-recovery | relatedProblems | /problems/ops-in-owners-head |
| /problems/ops-in-owners-head | bottleneck-growth | relatedProblems | /problems/ops-in-owners-head |
| /problems/legacy-system | ecommerce-not-connected | relatedProblems | /problems/legacy-system |
| /problems/legacy-system | systems-dont-talk | relatedProblems | /problems/legacy-system |
| /sectors/labels-packaging | workwear | relatedSectors | /sectors/labels-packaging |
| /sectors/signs-graphics | garment-decoration | relatedSectors | /sectors/signs-graphics |
| /sectors/signs-graphics | print-promotional | relatedSectors | /sectors/signs-graphics |
| /sectors/awards-engraving | print-promotional | relatedSectors | /sectors/awards-engraving |
| /resources/decoded-method | ai-paralysis | relatedResources | /resources/decoded-method |

## Rationale for source-to-target pairings
All pairings are topically adjacent (same sector domain, or problem-to-solution fit). Labels and signs are natural neighbours of workwear, garment-decoration, and print in the decorated-goods sector. Legacy system links into ecommerce and systems-dont-talk because legacy platforms directly cause both problems. Spreadsheet addiction links to slow processes as a primary cause. Ops-in-owners-head links to bottleneck-growth (the growth consequence) and disaster-recovery (the continuity risk).

## Verification
- `npx tsc --noEmit`: clean
- `npm run build`: exit 0
- Grep confirmation: all 7 targets show increased href counts vs pre-change baseline
