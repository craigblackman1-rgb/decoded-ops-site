# Lane Notes — artwork-refresh-batch-a-fix2

**WO-INF-061 u2** · Craig-supplied /about portrait replacement

## What happened

- `public/images/craig-blackman.jpg` replaced with Craig's new 1600×1067 landscape photo (already present in worktree)
- `app/about/page.tsx` updated: `width="1400" height="1500"` → `width="1600" height="1067"`
- Alt text unchanged: "Craig Blackman, founder of Decoded Ops."
- Single commit, 2 files changed

## Verification

- `npx tsc --noEmit` — clean
- `git diff --stat HEAD~1` — exactly 2 files (page.tsx + image)

## Notes

The image dimensions are now correct for the new landscape photo (was a taller portrait at 1400×1500). No other references to this image exist in the codebase.
