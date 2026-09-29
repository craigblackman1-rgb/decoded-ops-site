# Lane notes: inf070-u3-fix-390c

## What was done

Fixed the 390px overflow in the compact download button by converting two literal string `dlBtn` className references to CSS module references (`s.dlBtn`) in `DownloadOptIn.tsx` (lines 82 and 121).

## CSS already correct

The CSS module (`DownloadOptIn.module.css`) already had:
- `.miniRow` with `flex-wrap: wrap` (line 139)
- `.dlBtn` rules for gap, max-width (line 78)
- 480px media query setting `.dlBtn` to `width: 100%; white-space: normal` (line 159)
- 480px media query setting `.mini .dlBtn` to `width: 100%; max-width: 100%` (line 161)

No CSS changes were required — the styles were present but unreachable due to the class name mismatch.

## tsc

Clean — 0 errors.
