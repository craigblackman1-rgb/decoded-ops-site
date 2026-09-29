# Lane Notes: inf070-u4-fractional-coo

## Summary

Created the `/fractional-coo` service page (CR-WEB-062) as a keyword landing page for the Retained service, targeting fractional COO searches in the print/embroidery sector.

## Changes

1. **`app/fractional-coo/page.tsx`** (new) — Full service page with hero, four feature cards (production flow, supplier data, systems, team rhythm), when-it-fits/doesn't-fit panels, Clarity Audit CTA, shared FAQ array (visible + JSON-LD), and CTA strip.

2. **`app/retained/page.tsx`** (edit) — Cannibalisation fix: metadata title/description changed from "fractional COO" to "fractional CTO" (6 occurrences across title/openGraph/twitter). Added internal `<Link>` from "fractional COO" text in hero lead to `/fractional-coo`. Body text (hero lead, Complete tier meta) retains "COO" legitimately.

3. **`app/sitemap.ts`** (edit) — Added `/fractional-coo` entry after `/retained`, priority 0.8.

## Verification

- `npx tsc --noEmit -p .` — clean (0 errors)
- `npm run lint` — 161 pre-existing issues (77 errors, 84 warnings); 0 new issues in changed files
- Grep: no `£`, `day rate`, `TackleBag`, `Cobra`, or em dash in `fractional-coo/page.tsx`
- Metadata grep: `/retained` lines 10-23 contain "fractional CTO" throughout, no "COO"
- Nav/footer left untouched per brief (page is a keyword landing page, not a nav item)

## Notes

- No components or CSS created; page uses existing design system classes (`g-off`, `g-white`, `g-navy`, `g-tint`, `hero-center`, `feature`, `panel`, `inset`, `cta-strip`)
- FAQ uses literal curly apostrophes in JS strings (not `&rsquo;`), matching the brief's convention
- The brief file (`.context/lane-briefs/inf070-u4.md`) was committed as part of `git add -A`
