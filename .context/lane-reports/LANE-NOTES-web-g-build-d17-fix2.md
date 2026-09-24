# Lane notes — web-g-build-d17-fix2

## What was done

1. **D17 problems CSS import (16 files):** Added `import '@/app/d17-problems.css';` before the existing `d17-resources.css` import in all 16 resource/tool page.tsx files. Import order is now: d17-global, d17-problems, d17-resources — matching the brief.

2. **Seasonal capacity chart mobile fix:** The monthly bar chart rows in the SeasonalCapacityCalculator had fixed-width flex children (month label 28px, gap value 40px) with `flexShrink: 0` that prevented shrinking. Added CSS classes (`calc-bar-label`, `calc-bar-val`, `calc-bar-legend`) and a media query at max-width 639px that reduces the fixed widths and removes padding-left on the legend row. Also added `minWidth: 0` on the bar track div and `flexWrap: wrap` on the legend row in the component inline styles.

## tsc

Clean — no errors.
