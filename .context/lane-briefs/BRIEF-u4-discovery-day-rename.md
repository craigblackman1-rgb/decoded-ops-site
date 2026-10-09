# LANE BRIEF — u4 CR-WEB-007 residual: rename "Discovery Day" → "Clarity Audit" in live components (wo-website-consolidated-2026-08-02)

You are working in worktree D:\apps\worktrees\decoded-ops-website\lane-u4-discovery-day-rename on branch lane/u4-discovery-day-rename. Do NOT touch any other directory. Do NOT push. Do NOT run a dev server or browser.

## CONTEXT
The Discovery Day product was retired 2026-07-31 and merged into the Clarity Audit. Three LIVE components still render or reference the old name. Client proposal data files under app/clients/[clientId]/data/*.ts are HISTORICAL documents and must NOT be changed.

## MUST — exactly these edits
1. components/schematics/ClarityAuditSchematic.tsx line ~62: SVG `<text>` reads `DISCOVERY DAY` → `CLARITY AUDIT`. Keep the same x/y/letterSpacing; if "CLARITY AUDIT" is visibly longer and there is a `textLength` or width-constrained sibling, keep the label inside the same box (reduce fontSize by at most 2 if needed and say so in notes).
2. components/schematics/ThreeLayerSchematic.tsx line ~95: `<text ...>Discovery Day</text>` → `Clarity Audit`. Same positioning rule.
3. components/HeroVisual.tsx line ~5: doc comment "replaces the Discovery Day audit-flow schematic" → "replaces the Clarity Audit audit-flow schematic" (or simply "the earlier audit-flow schematic").
4. docs/content-audit.md: 7 mentions of "Discovery Day". Where a line describes CURRENT site copy, update to Clarity Audit; where it is a historical note ("was called Discovery Day", "retired"), leave it. Say which lines you left and why.

## FORBIDDEN
- app/clients/** (historical proposals) — zero changes.
- Any other file. No copy rewrites beyond the literal rename.

## VERIFY
1. `rg -n "Discovery Day" components/ app/ --glob "!app/clients/**"` → 0 hits (paste output).
2. `rg -n "Discovery Day" app/clients/` count is UNCHANGED from before your edit (record before/after counts).
3. `npx tsc --noEmit` exit 0 (node_modules is junctioned; if tsc cannot run, say so — do not claim a pass).
4. `git diff --stat` — only the 4 files above (+ LANE-NOTES).

## FINISH
Write `.context/lane-reports/LANE-NOTES-u4-discovery-day-rename.md` with verify output. Commit on this branch: `CR-WEB-007: rename Discovery Day to Clarity Audit in live schematics`. Stop. Do not push.
