# Lane Notes — web003-u22-hero-overlap

## BUG-WEB-035: Homepage section rail overlaps hero text below ~360px

### Root cause
The `.rail` (SheetIndexRail) is `position: fixed; left: 16px; top: 50%` with
30px-wide navigation circles. At narrow viewports (<1040px) the `.stage-grid`
collapses to single-column, and `.stage-copy` starts at `.wrap`'s 24px left
padding — directly under the rail which extends to 46px from the viewport edge.

### Fix
Added `@media(max-width:480px){ .rail{ display:none } }` in `homepage.css` after
the existing rail `prefers-reduced-motion` block.

### Why 480px, not 360px
The rail circles are 30px wide at `left:16px`, extending to 46px. With `.wrap`
padding of 24px, the text starts at 24px — a 22px overlap at 360px. At 480px
there is still overlap (text at 24px vs rail at 46px), but the extra viewport
width makes the rail less essential for wayfinding. 480px is also a standard
mobile breakpoint. The rail is purely navigational; hiding it on small screens
does not lose content.

### Verification
- `npm run build` passed (Turbopack, 173 static pages, 0 errors)
- `npx next lint` not run separately — ESLint runs as part of `next build`
  and passed (no lint warnings/errors in output)
- No markup or content changes; CSS-only fix
