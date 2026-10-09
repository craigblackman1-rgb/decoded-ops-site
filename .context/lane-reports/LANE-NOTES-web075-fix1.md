# Lane notes: web075-fix1 (CR-WEB-075 follow-up)

Small, single-commit lane: four D17 pieces that were still over the height ceiling after the
main lane's height-polish commit (ac180ab), as measured by Playwright in the brief.

## What was done

- **DO-ART-939** (`app/d17-apps-cases.css`) — the big one. Its height is content-driven
  (BUG-WEB-046 removed the self min-height), so the fix scales the content rather than
  clamping it: the screens band and under-labels now run on `--v: calc(100cqw / 1400)`
  (tighter than the figure's 1152 `--u`), the trio is re-centred (lefts 168/522/876 v),
  screens height 560→490v, tile images crop 2:1, top/base paddings and the base claim
  30→26u trimmed. Estimated ~595–630px at 1152 wide vs the measured 816.
  On phones (≤640) `--u` drops .9→.72px, the stack gap 26→12px, and the storefront tile
  grid drops out — decorative mock UI; each window's `data-cap` line keeps the argument.
  Estimated ~735px at 342 vs the measured 1246.
- **DO-ART-966** (`app/d17-problems.css`) — scoped flow-stack trims (pair padding,
  win-flat bodies, gap strip, column gutters, foot) ≈44u total at 552 wide; est. ~600
  vs measured 660.
- **DO-ART-904** (`app/d17-art.module.css`) — aspect 14/15 → 1/1: 625×670 → 625×625.
- **DO-ART-831** (`app/d17-art.module.css` + `app/about/page.tsx`) — aspect 1600/900 →
  1600/860 (→619px at 1152) with the route svg viewBox changed to match, so the drawing
  keeps uniform w/1600 scale against the u-positioned stations; with the old viewBox and
  default preserveAspectRatio the route would have letterboxed and drifted ~35px off the
  station circles.

## Verification and limits

- `npx tsc --noEmit` clean; eslint on the one touched tsx: 0 errors (6 pre-existing
  no-img-element warnings); `\uXXXX` escape grep 0 hits.
- **No render was produced** (dev servers / Playwright / curl forbidden). The after
  heights in the report are CSS arithmetic estimates, flagged as such. A Playwright
  re-measure is the outstanding check before sign-off.
- `data/route-slugs.json` is dirty in the worktree (pre-existing, tool-generated) and was
  deliberately not staged, per the standing rule.
