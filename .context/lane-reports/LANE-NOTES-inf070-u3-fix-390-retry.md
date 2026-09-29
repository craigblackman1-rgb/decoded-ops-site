# Lane notes: inf070-u3-fix-390-retry

## What was done

Added overflow protection to the DownloadOptIn compact variant download button (`.dlBtn`):

1. **Base `.dlBtn` rule** (line 78): Added `max-width: 100%` and `box-sizing: border-box` to prevent the button from exceeding its container width at any viewport.

2. **Compact variant `.mini .dlBtn`** (line 161, inside `@media (max-width: 480px)`): Added `max-width: 100%`, `white-space: normal`, and `text-align: center` to ensure the button text wraps and the button stays within the container at 390px.

## Why

At a 390px viewport the compact variant's download button was 2px wider than the viewport, causing horizontal scroll. The button had no `max-width` constraint or `box-sizing: border-box`, so padding could push it past the container edge.

## Verification

- `npx tsc --noEmit` — clean (0 errors)
- Only `components/DownloadOptIn.module.css` touched
