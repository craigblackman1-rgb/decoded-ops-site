# Lane notes — web061-u45-seasonal-capacity-overflow

## BUG-WEB-034

**Symptom:** Seasonal capacity month rows (Feb 100%, etc.) render 414px wide at a 390px viewport, causing 24px horizontal scroll on mobile.

**Root cause:** The `calc-months-grid` uses a 3-column CSS grid (2-column on mobile via `@media (max-width: 639px)` override). Each cell contains a flex row with a range input (`flex: 1`) and a percentage text span (`minWidth: 36`). The range input's default `min-width: auto` prevented it from shrinking below its intrinsic minimum (~100-120px), which pushed the grid cells beyond the available container width at 390px.

**Fix:** Added `minWidth: 0` to the range input's inline style in `SeasonalCapacityCalculator.tsx:114`. This allows the flex item to shrink below its intrinsic content size. The slider thumb scales naturally at smaller widths — no visual regression.

**Scope:** Only `SeasonalCapacityCalculator.tsx` uses range inputs in a constrained grid. Other calculators (`CapacityPlannerCalculator`, `RtoCalculator`) use `calc-bar-track`/`calc-bar-fill` for bar visualisations, not range inputs, so they are unaffected.

**Verification:** `npx tsc --noEmit` passes clean (0 errors).
