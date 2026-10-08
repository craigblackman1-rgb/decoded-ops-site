# Lane notes — web046-art-sizing

- Lane ran non-interactively per contract: five numbered fixes, one commit each,
  staged by explicit path (never `git add -A`).
- Fresh worktree had no `node_modules`; ran `npm install` before `tsc`. Two packages
  (ssh2, unrs-resolver) have install scripts not on the allow-list — install succeeded
  regardless; not approved, not needed for tsc/lint.
- Fix 1 approach: percentage/aspect-ratio conversion rather than `.d17-wrap` wrappers.
  Rationale: CSS-only, no page-file churn, and the conversion is exact — percentage
  padding resolves against the containing block width (equal to the figure's own width
  for these block-level figures) and aspect-ratio derives height from the figure width.
  The `.a939` case was special: its in-flow content already exceeds the old 640u floor
  at every width, so removing the min-height reproduces what a correctly-resolved
  min-height would have done (content defines height); converting it to aspect-ratio
  would have clipped the base line.
- The `.a917` gap conversion uses `calc(40 / 1052 * 100%)` — percentage grid gaps
  resolve against the grid's content box (W minus the 100/1152 horizontal padding), so
  40/1052 is the exact equivalent of 40u of full width.
- Fix 3: chose per-piece secondary-layer hiding at ≤640px over any `max-height` cap,
  per the brief's explicit "must NOT clip content" constraint. Which layer was hidden
  per piece is documented in LANE-RESULT-web046-art-sizing.md. Because no browser was
  allowed, the resulting heights are CSS-reasoned, not re-measured — a reviewer with a
  browser should spot-check 718, 945, 949 and 957 on a 390px viewport.
- Fix 4 note: the brief attributed both overflows to the artwork, but `.d17` has
  `overflow:hidden`, so figure content cannot widen the page. Traced the real
  mechanisms instead: nowrap `.btn` inside `grid--3` cards on eternal-fitness (grid
  item `min-width:auto`), and grid-track auto minimums on seasonal-capacity
  (rt-split, chart tracks, calculator month cells). Clamped all with `min-width:0` /
  `minmax(0,1fr)` — the exact remedies the brief suggested.
- `next lint` is gone in this Next version (`eslint` is the npm script); ran
  `npx eslint` scoped to changed tsx files. The 3 reported errors are pre-existing
  `no-explicit-any` on origin/main lines this lane did not touch.
- `price-audit --check` fails on pre-existing "vest" word hits in five untouched
  files; nothing this lane changed is copy or pricing.
- "escapeGrep" in the JSON: no specific escape pattern was named in the brief; the
  closest verification performed was the eslint/tsc runs above (0 new hits).
