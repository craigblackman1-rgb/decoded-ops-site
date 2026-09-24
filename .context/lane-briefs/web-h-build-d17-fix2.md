# web-h-build-d17 fix2 (WO-INF-061) — town pages still scroll sideways on phones

Measured by Claude at a 390px viewport on /locations/tech-audit/horsham and /locations/fractional-cto/worthing
(page 521-555px wide; the live site has the same pre-existing bug). The D17 hero is now fine. Two older sections in
components/LocationPage.tsx do not stack on narrow screens:

1. The white "local context" section (the div holding "Horsham sits at the centre of..." paragraphs plus a `.card`):
   a two-column layout that stays two columns at 390px, its content column reaches 436px.
2. The navy CTA section ("Book a Clarity Audit for your Horsham business..."): a two-column layout, reaches 555px.

Fix: make both stack to ONE column below 768px (text first, then the card / CTA panel), with `min-width:0` on grid
children so long words and cards can shrink, and nothing wider than the viewport. Keep desktop (>=1024px)
exactly as it is now. Check the other sections of LocationPage.tsx for the same pattern (fixed multi-column grid with
no mobile breakpoint) and fix them the same way. Change only components/LocationPage.tsx (and app/d17-locations.css if
you need CSS). `npx tsc --noEmit`, commit `fix(web): stack location page sections on phones (WO-INF-061)`.
No dev servers, browsers, builds, databases or .env files. Do not push.
