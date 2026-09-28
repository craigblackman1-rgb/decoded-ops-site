# Lane notes: web061-u42-footer-fix

## What was fixed

**BUG-WEB-031 — shared site footer broken**

### 1. CTA button text invisible (ds-footer.css)

The `.f-cta` button had `color:var(--do-text-on-dark)` (off-white) but **no background** and only a semi-transparent `color-mix(sky-blue 55%, transparent)` border. On the dark navy footer the button was visually indistinguishable from regular text links.

**Fix:** Replaced the transparent fill with `background:color-mix(in srgb, var(--do-amber) 15%, transparent)` and a solid `border:1px solid var(--do-amber)`. Text colour changed to `var(--do-amber)` for high-contrast amber-on-navy. Hover fills fully amber with prussian-blue text, matching the primary CTA pattern used elsewhere in the design system.

**CSS property that was wrong:** `background` was absent (defaulting to transparent) and `border` used a barely-visible semi-transparent `color-mix`. The button had no visual weight as a CTA.

### 2. Footer columns wrap badly (ds-footer.css)

The `.f-top` grid used `grid-template-columns:1.7fr 1fr 1fr 1fr` with `gap:34px` but grid children had no `min-width:0`. The brand column (1.7fr) could expand beyond its track when blurb text or the LinkedIn icon pushed it wider, causing the link columns to wrap unpredictably at widths between 560px and 900px.

**Fix:** Added `.f-top > *{ min-width:0 }` to constrain all grid children to their tracks. Tightened responsive gaps at the 900px and 560px breakpoints.

**Breakpoint targeted:** 900px — the gap between the 4-column desktop layout and the 2-column tablet layout where the brand column spanning both columns caused uneven distribution of the three link columns.

## Files changed

- `app/design-system/ds-footer.css` — 2 edits (button styling + grid fixes)

## No changes to

- `components/Footer.tsx` — no structural changes needed; the markup was correct.
