# LANE-NOTES: meta-title-spacing

## Branch
`lane/meta-title-spacing` off `origin/main`

## What changed
Removed the stray space before the colon in the site-name separator across all meta title strings. ` : Decoded Ops` → `: Decoded Ops`.

## Strings changed
**127 title strings** across **40 files**.

## Blog regex (app/blog/[slug]/page.tsx:44)
The regex was already correct and required no change:
```
/ \| Decoded Ops$|: Decoded Ops$/
```
- Matches old pipe form: `| Decoded Ops` (used by 7 exception files)
- Matches corrected colon form: `: Decoded Ops` (used by all other titles)
- After this change, the second alternative catches all non-exception titles cleanly.

## Verification

### Grep: ` : Decoded Ops` (space, colon, space) across app/
```
0 matches
```

### Grep: `| Decoded Ops` across app/
```
22 matches — 21 title strings across 7 exception files + 1 regex literal in app/blog/[slug]/page.tsx
```
Exception files (unchanged):
- app/case-studies/case-study-01/page.tsx (3 titles)
- app/case-studies/case-study-02/page.tsx (3 titles)
- app/case-studies/case-study-03/page.tsx (3 titles)
- app/case-studies/eternal-fitness/page.tsx (3 titles)
- app/problems/erp-implementation-failure/page.tsx (3 titles)
- app/resources/artwork-approval-playbook/page.tsx (3 titles)
- app/resources/decoded-method/page.tsx (3 titles)

### npx tsc --noEmit
```
(no output — clean)
```

### git status --porcelain
```
(empty — clean)
```
