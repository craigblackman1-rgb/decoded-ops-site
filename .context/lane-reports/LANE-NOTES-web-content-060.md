# LANE-NOTES-web-content-060

## CR-WEB-060 — homepage How I help route poster DO-ART-1008

### What changed
- **app/page.tsx**: Replaced the DO-ART-906 thread-spools photo (`<figure className="band">`) and the `<ol className="idx">` services index list in section `id="s3"` with the DO-ART-1008 route poster figure. The figure is injected as raw HTML via `dangerouslySetInnerHTML`, matching the pattern used by sector pages. The `<a href="/clarity">Start here →</a>` link is preserved. The unused `services` array was removed.
- **app/d17-global.css**: Appended the full contents of `a1008.css` (DO-ART-1008 route poster styles with mobile vertical layout at 760px). Added `import './d17-global.css'` to page.tsx (was not previously imported there).

### Verify
- `npx tsc --noEmit`: clean, 0 errors.
- The figure markup uses the approved mockup from `.context/lane-briefs/cr-web-060/how-i-help-section.html`.
- The hero-workshop-32a6d0.jpg image referenced in the photopin is confirmed present at `public/images/d17/home/`.
- `<D17Motion />` was already on the page (line 411), no change needed.
- Phone layout: the CSS at `@media (max-width: 760px)` switches the route to vertical with no sideways scroll, matching the approved 390px mockup.

### Notes
- The `Image` import from `next/image` is still used by the hero section; kept.
- No changes to the eyebrow, h2, or lede as instructed.
