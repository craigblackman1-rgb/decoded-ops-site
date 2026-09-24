# Lane notes: web-h-build-d17-fix2

## What was done

Fixed horizontal scroll on mobile for location pages (WO-INF-061). Two inline-style grids in `components/LocationPage.tsx` had fixed multi-column layouts with no responsive breakpoint:

1. **LOCAL CONTEXT** section (`1fr 2fr`) — the content column reached 436px at 390px viewport
2. **HOW I HELP** section (`1fr 1fr`) — the two-column grid plus gap exceeded the viewport

Both now use CSS classes (`.loc-ctx`, `.loc-how`) that stack to `1fr` below 768px. The driveTime/localFact card flex row also got a wrapping class (`.loc-cta-card`) so it stacks vertically on mobile. The sticky CTA card is unstuck on mobile via `position:static`.

All grid children have `min-width:0` to prevent overflow from long words or cards.

## Files changed

- `components/LocationPage.tsx` — replaced 3 inline grid/flex styles with CSS classes
- `app/d17-locations.css` — added `.loc-ctx`, `.loc-how`, `.loc-cta-card` with responsive breakpoint

## Verification

- `npx tsc --noEmit` — clean, 0 errors
- No browser test (non-interactive lane)
