# Lane notes: web-g-build-d17

## What was done
CR-WEB-055 copy fixes applied to 8 files across resources and tools pages:
- ERP playbook vendor names anonymised (OrderWise→generic print ERP, Panta→decoration-specific, etc.)
- Resource count corrected: "Seven free resources" → "Nine free resources" (index + Plate SVG)
- Tool count corrected: "Six calculators" → "Five calculators" (index + Plate SVG); removed stale "AI Readiness Check" from Plate, renumbered 01-05
- Decoded Method example ref: TB-PR-001 → PR-001
- SOP page: office manager story "sixteen years" → "eighteen years" (consistent); removed unsourced "40%"
- Audit checklist: headline "20 questions" → "36 questions" (actual count across 7 sections); removed unsourced "3-5% of revenue" and "1-3% of stock value" from key takeaways
- Artwork approval: removed unsourced "3-5 rounds to 1" claim

## What was NOT done
**D17 artwork: BLOCKED.** The mockup sources directory `.context/lane-briefs/d17-resources/` does not exist on any branch (checked staging, web-e, web-f, web-g, web-h). The brief references:
- `<slug>.hero.html` and `<slug>.inline.html` page snippets
- `d17-art.css` and `d17-resources.css` stylesheets
- `*-1440.png` mockup renders

None of these exist. Without the HTML markup to inject via `dangerouslySetInnerHTML`, and without the CSS to style the injected markup, the artwork pass cannot proceed. The images under `public/images/d17/resources/` are committed but have no corresponding artwork definitions.

## Verification
- `npx tsc --noEmit`: clean (0 errors)
- `git grep -n "craig-blackman" -- app/resources/ app/tools/`: 0 hits
