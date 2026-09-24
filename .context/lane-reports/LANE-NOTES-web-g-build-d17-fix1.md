# Lane notes: web-g-build-d17-fix1

## What was done

All 5 sections of the lane brief (WO-INF-061, CR-WEB-055) completed in one commit.

### Section 1: SOP template hero art
- Ported DO-ART-987 from `sop-template.hero.html` into the page using `dangerouslySetInnerHTML`
- Added missing imports: `D17Motion`, `d17-global.css`, `d17-resources.css`
- Applied rt-split two-column hero layout

### Section 2: Six-sigma plate swap
- Removed old Plate DO-ART-209 block (100+ lines of SVG)
- Removed the Plate import (no longer used)
- Removed duplicate DO-ART-986 section (was rendered twice)
- Changed `hero-split` class to `rt-split` for consistency

### Section 3: Phone overflow
- **seasonal-capacity**: Added `min-width: 0` on grid children in calculators.css; monthly demand grid wraps from 3-col to 2-col below 640px
- **ops-health-score**: Score buttons get flex-wrap and reduced size (32px) below 640px

### Section 4: Hero rt-split layout
All 16 resource and tool pages rebuilt with `rt-split` two-column layout (text left, art right). Pages converted: 5-warning-signs, artwork-approval-playbook, audit-checklist, capacity-planner, decoded-method, erp-selection-playbook, resources index, seasonal-capacity, six-sigma, sop-template, tools index, ops-health-score, should-i-replace-erp, rto-calculator, automation-roi-calculator, downtime-cost-calculator.

### Section 5: Inline pieces moved
- audit-checklist: DO-ART-984 moved from bottom of page to immediately after hero
- capacity-planner: DO-ART-993 moved from middle of page to immediately after hero
- artwork-approval-playbook: DO-ART-990 moved from middle of page to immediately after hero
- six-sigma: DO-ART-986 was already correctly positioned (only duplicate removed)

## Verification
- `npx tsc --noEmit` — clean, zero errors
- No dev servers, browsers, builds, databases or .env files used
- No push performed
