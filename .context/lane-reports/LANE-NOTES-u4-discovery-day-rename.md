# LANE NOTES — u4: Discovery Day → Clarity Audit rename

**CR-WEB-007 residual** | Branch: `lane/u4-discovery-day-rename` | Date: 2026-09-14

## Summary

Renamed "Discovery Day" to "Clarity Audit" in 3 live components and 1 docs file.
Client proposal data files (`app/clients/**`) were NOT touched — they are historical documents.

## Edits

### 1. `components/schematics/ClarityAuditSchematic.tsx` (line 62)
- SVG `<text>` eyebrow: `DISCOVERY DAY` → `CLARITY AUDIT`
- Both strings are 14 chars — no fontSize or positioning change needed.

### 2. `components/schematics/ThreeLayerSchematic.tsx` (line 95)
- Process register row label: `Discovery Day` → `Clarity Audit`
- Same positioning, no layout impact.

### 3. `components/HeroVisual.tsx` (line 5)
- Doc comment: "replaces the Discovery Day audit-flow schematic" → "replaces the earlier audit-flow schematic"

### 4. `docs/content-audit.md` — all 7 mentions updated
All 7 are current site copy, not historical notes:
- **Line 287**: Page title for `/clarity` — updated to "Clarity Audit"
- **Line 303**: Heading "What happens after Discovery Day?" → "What happens after the Clarity Audit?"
- **Line 346**: `nextSteps` data object — "from your Discovery Day report" → "from your Clarity Audit report"
- **Line 842**: Homepage meta description — updated to "Clarity Audit"
- **Line 867**: Homepage body copy — "Discovery Day gets you" → "The Clarity Audit gets you"
- **Line 897**: `services` data object name — updated to "Clarity Audit"
- **Line 1504**: `processRegister` data — "Discovery Day Delivery" → "Clarity Audit Delivery"

No lines were left unchanged — all 7 described current site copy.

## Verify

### 1. `Discovery Day` in components/ and app/ (excl clients) — 0 hits
```
grep "Discovery Day" components/ → No matches found
grep "Discovery Day" app/ (excl clients) → No matches found
```

### 2. `Discovery Day` in app/clients/ — 49 hits (unchanged)
Before: 49 hits across 4 proposal data files
After: 49 hits across 4 proposal data files

### 3. `npx tsc --noEmit` — exit 0

### 4. `git diff --stat`
```
 components/HeroVisual.tsx                       |  2 +-
 components/schematics/ClarityAuditSchematic.tsx |  2 +-
 components/schematics/ThreeLayerSchematic.tsx   |  2 +-
 docs/content-audit.md                           | 14 +++++++-------
 4 files changed, 10 insertions(+), 10 deletions(-)
```
