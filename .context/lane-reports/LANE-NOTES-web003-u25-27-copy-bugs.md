# Lane notes: web003-u25-27-copy-bugs

## What happened

Three copy bugs assigned to this lane. Two fixed, one already resolved.

### BUG-WEB-042 — ops health score meta description

`app/tools/ops-health-score/layout.tsx` meta description listed four dimensions
("systems integration, process, data quality and team capability") but said
"five dimensions". The page actually has five: Systems Integration, Process
Documentation, Data Quality, Team & Capability, Technology Strategy. Fixed by
adding "process documentation" (was just "process"), a comma before "team
capability", and "and technology strategy" at the end. All three description
instances (metadata, openGraph, twitter) updated identically.

### BUG-WEB-043 — cant-scale-operations 4th cause heading

`app/problems/cant-scale-operations/page.tsx` line 211 had cause heading
"Business Growing, Operations Not Scaling | Decoded Ops" — a page title
pasted into a cause card. The other three headings are short cause phrases.
Replaced with "Nobody owns the end-to-end process" which matches the body
text (nobody owns the full run from order in to invoice out).

### BUG-WEB-044 — audit checklist question count

Both `/blog` (line 104) and `/resources/audit-checklist` (lines 132, 178, 316)
already say 36 questions. The checklist source has 36 items across 7 sections
(6+5+5+6+5+5+4). No stale "20" found in any live TSX source file. The bug
was already resolved before this lane ran.

## Verification

- `npx tsc --noEmit`: clean, 0 errors
- No test suite to run (copy-only changes)
- Escape grep: 0 hits
