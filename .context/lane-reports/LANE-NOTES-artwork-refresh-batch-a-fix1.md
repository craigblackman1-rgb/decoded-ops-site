# Lane notes — artwork-refresh-batch-a fix round 1

## What was done

Two fixes for CR-WEB-030 on WO-INF-061 u2:

1. **Responsive hero-split on playbook covers** — `decoded-method/page.tsx` and `six-sigma/page.tsx`
   both had an inline non-responsive grid `style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}` on the hero wrapper. This rendered the cover image as a 26px sliver at 390px viewport width. Replaced with the existing `hero-split` class from `marketing-pages-extra.css` which collapses to one column under 980px.

2. **Accurate about portrait alt text** — `about/page.tsx` had `alt="Craig Blackman, founder of Decoded Ops, photographed in a garment decoration workshop."` on a portrait that does not show a workshop. Changed to `alt="Craig Blackman, founder of Decoded Ops."`.

## Verification

- `npx tsc --noEmit` — clean, zero errors
- `git diff --stat` — exactly 3 files changed, 3 insertions, 3 deletions
- No other files touched
