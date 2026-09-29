# Lane notes — web012-u5-ledger

## Bug
D17 art-panel timeline ledger styles leaked into the homepage stat rows via `d17-global.css`, which defined global `.ledger` selectors that loaded after `homepage.css` and overwrote its grid layout.

## Files changed

### `app/d17-global.css`
Scoped all `.ledger` selectors under `.d17`:
- `.ledger` → `.d17 .ledger`
- `.ledger::before` → `.d17 .ledger::before`
- `.ledger li` → `.d17 .ledger li`
- `.ledger li::before` → `.d17 .ledger li::before`
- `.ledger .n` → `.d17 .ledger .n`
- `.ledger .t` → `.d17 .ledger .t`
- `.ledger li.end .n` → `.d17 .ledger li.end .n`
- `.ledger li.end::before` → `.d17 .ledger li.end::before`
- Mobile rules (3 selectors): same `.d17` prefix applied
- Animation rule `.d17.play .ledger::before` — already scoped, untouched

### `app/d17-art.module.css`
Scoped all `.ledger` selectors under `.d17` (both module-scoped classes):
- Same selector renames as above
- Mobile rules (3 selectors): same `.d17` prefix applied
- Animation rule `.d17.play .ledger::before` — already scoped, untouched

## Other `class="ledger"` usages (outside `.d17` art, unchanged)

| File | Line |
|---|---|
| `app/problems/manual-workarounds/page.tsx` | 100 |
| `app/problems/inventory-blind/page.tsx` | 209 |
| `app/problems/seasonal-peaks/page.tsx` | 231 |
| `app/problems/cant-scale-operations/page.tsx` | 164 |
| `.context/lane-briefs/d17-problems/_reuse-918.html` | 14 (template, not live) |

These use `class="ledger"` for their own stat rows and were not affected by this fix (they load their own CSS or the D17 global no longer leaks).
