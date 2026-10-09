# Design brief — CR-WEB-022: Access-first demo CTA, site-wide

## Goal
Replace/extend the site's primary CTA on key pages with an access-first guided-demo offer:
"20 minutes, I'll walk you through it" — per DO_Marketing_Strategy_6mo_2026-09 (M1). This
lowers the commitment bar versus the current sales-forward "Book a free 60-min call" /
"Book a free discovery call" copy used today.

## User
A cold or warm visitor on a sector, problem, pricing, or homepage landing surface, deciding
whether to take the next step. Access-first framing (see reference-access-first strategy in
memory) removes friction versus a generic "book a call."

## Existing screen it lives in
Site-wide, not one page. Current CTA components/locations found:
- `D:/apps/decoded-ops-website/components/Header.tsx` — `MegaRail` component (line ~166) takes
  `ctaHref`/`ctaLabel` props, default `ctaLabel = 'Book a free 60-min call'`, plus a
  small-business CTA band (line ~343) using `ctaLabel="Take the 2-minute score"`, and a
  primary hero-style CTA "Book a free discovery call" (line ~442 area).
- `D:/apps/decoded-ops-website/components/Footer.tsx` — `<Link className="f-cta"
  href="/contact">Book a free 60-min call</Link>` (line ~114).
- Sector pages (`SectorPageDS.tsx`), problem pages (`ProblemPageDS.tsx`), and the homepage
  (`app/page.tsx`) each render CTA bands using these shared components/props — this is what
  makes it "site-wide": the fix is mostly at the shared-component level (`Header`, `Footer`,
  `SectorPageDS`, `ProblemPageDS`), not per-page rewrites.

## Design intent
Do not delete the existing "book a call" path — the mockup should show the guided-demo CTA as
the new **primary** action, with the existing call-booking link demoted to a secondary/text
link where both are shown together (e.g. in the footer and mega-rail), matching the access-first
principle of "let them see it working before they talk to a person."

## Layout — what changes
1. **Header `MegaRail` default CTA**: default `ctaLabel` changes from "Book a free 60-min call"
   to something in the family of "See it in 20 minutes" / "Get a 20-minute walkthrough" — mock
   2-3 concrete copy options as separate button states/artboards so Craig can pick, but default
   the artifact to one clear recommendation.
2. **Homepage hero CTA** (line ~442, "Book a free discovery call"): becomes the guided-demo CTA
   as primary button, with "or book a call" as a smaller secondary text link beside/below it.
3. **Footer CTA** (`f-cta`, line ~114): same treatment — guided-demo primary, call-booking
   secondary/de-emphasised.
4. **Small-business CTA band** (line ~343, "Take the 2-minute score"): leave this one alone —
   it's a different, already-access-first tool CTA (ops health score), not in scope for this
   swap.
5. New shared copy string to design around: **"20 minutes, I'll walk you through it."** — this
   is the anchor microcopy; button label itself should be a short imperative derived from it
   (see Copy section), with the full sentence appearing as supporting text near the button on
   at least the homepage hero and one sector-page example, not necessarily inside the button
   itself (buttons should stay short).

## States
- **Default**: primary guided-demo button + secondary call-booking link, as described per
  location above.
- **Hover/focus**: standard site button states — reuse existing `btn btn--primary` / `btn
  btn--outline` classes already in `Header.tsx`/`Footer.tsx`; do not invent new button
  variants.
- **Mobile**: mega-rail and footer CTA must stack (secondary link below primary button, not
  side-by-side) below the site's existing mobile breakpoint — check `Header.tsx` for its
  current responsive handling of `MegaRail` and mirror it.
- No loading/error states apply — these are static links to `/contact` (or a new demo-booking
  destination if one exists; if `/contact` is the only booking surface today, keep both CTAs
  pointing there for this pass and let the destination page's own form disambiguate "which
  did you click," rather than inventing a new route not asked for in this CR).

## Components to reuse (design system: `D:/apps/design-systems/decoded-ops-website/`)
- `btn btn--primary`, `btn btn--outline`, `f-cta` classes already defined in the site's CSS —
  do not introduce new button classes.
- `MegaRail` component's existing prop interface (`ctaHref`, `ctaLabel`, `extra`) — the
  secondary "book a call" link can reuse the existing `extra: { label, href }` slot already
  built into `MegaRail` for exactly this kind of two-link pattern.
- Reference `D:/apps/design-systems/decoded-ops-website/` HTML mockups for the site's existing
  visual language (buttons, spacing, type) rather than introducing new patterns.

## Copy (real characters, no easy escapes — no unicode escape sequences)
- Anchor line (supporting text near hero/sector CTA): "20 minutes, I'll walk you through it."
- Recommended primary button label: "Get a 20-minute walkthrough" (alt options to mock as
  additional artboards: "See it in 20 minutes", "Book your 20-minute demo")
- Secondary/de-emphasised link: "Or book a call instead"
- Footer primary: same button label as header for consistency
- Footer secondary: "Prefer a call? Book a free 60-min call" (keeps the existing link findable,
  just demoted)

## Out of scope
- No new booking/scheduling backend — both CTAs continue pointing at `/contact` unless a demo-
  specific route already exists (checked: none found under `app/` for this).
- Sector/problem page body copy rewrites beyond swapping the CTA component's props — this CR is
  about the CTA, not full page copy.
- The 2-minute ops-health-score CTA band is explicitly out of scope (already access-first).
