# LANE NOTES — web065-fix5

## Task
Replace hardcoded `#219EBC` (2.98:1 on off-white, fails AA) with `var(--do-text-cerulean)` (`#176f86`, 5.45:1) in the H1 accent span of six sector pages.

## What was done
- Edited 6 sector page files, one line each
- `color: '#219EBC'` → `color: 'var(--do-text-cerulean)'`
- Token already defined at `app/globals.css:41` as `#176f86`

## Verification
- `npx tsc --noEmit` — clean
- `npm run build` — successful (173 static pages)
- Escape grep: no remaining `#219EBC` in the edited sector page H1 accent spans
