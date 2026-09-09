# LANE-NOTES: meta-title-spacing

## Branch
`lane/meta-title-spacing` off `origin/main`

## What changed
Removed the stray space before the colon in the site-name separator across all meta title strings. ` : Decoded Ops` → `: Decoded Ops`.

## Strings changed
**133 title strings** across **42 files** (see Pass 2 below).

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

---

## Pass 2 — 6 missed titles in 2 bracket-route files

### What pass 1 missed
6 occurrences of ` : Decoded Ops` across 2 files under dynamic `[location]` route directories:
- `app/locations/fractional-cto/[location]/page.tsx` — lines 21, 27, 34
- `app/locations/tech-audit/[location]/page.tsx` — lines 21, 27, 34

### Why pass 1 missed them
PowerShell `Get-ChildItem -Path ... -Include` treats `[` and `]` as wildcard metacharacters.
Directories named `[location]` and `[slug]` silently matched nothing, so the scan never
saw files inside them. The grep tool (regex-based, not path-pattern-based) finds them
correctly, which is why the post-fix verification confirms zero.

### What changed
Removed the single space before the colon: ` : Decoded Ops` → `: Decoded Ops`.
No other text, interpolation, or structure changed. Template literals left intact.

### File scan counts
- Pass 1 scan (PowerShell `-Path`/`-Include`): **91 files** (bracket directories dropped)
- Pass 2 scan (grep tool + `Get-ChildItem -LiteralPath`): **121 files** (all bracket directories included)
- 30 bracket-path files were invisible to pass 1; 2 of them contained the target string.

### Verification

#### Grep: ` : Decoded Ops` across app/ (all .tsx and .ts, bracket paths included)
```
0 matches
```

#### Grep: `| Decoded Ops` across app/
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

#### blog/[slug]/page.tsx bracket-path visibility confirmed
```
grep found 3 matches in app/blog/[slug]/page.tsx (regex at :44, organization name at :55, fallback title at :103)
```

#### npx tsc --noEmit
```
(no output — clean)
```

#### git status --porcelain
```
(empty — clean)
```
