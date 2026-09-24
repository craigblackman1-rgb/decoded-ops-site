# Lane notes — web011-u16-fix1

## What changed

Fixed the render path for internal link routing data on 4 pages that had correct data entries but never rendered them:

1. **app/problems/ai-paralysis/page.tsx** — imported `problemRouting`, added `route` variable, added related-links section (problems, sectors, resources) before the final CTA strip. Followed the ProblemPageDS.tsx card pattern.

2. **app/problems/bottleneck-growth/page.tsx** — same treatment as ai-paralysis.

3. **app/sectors/print-promotional/page.tsx** — added `relatedSectors` condition to the outer guard, added the `relatedSectors` article after `relatedResources` in the cross-links grid. Pattern matches schoolwear/page.tsx.

4. **app/sectors/garment-decoration/page.tsx** — the outer guard already mentioned `relatedSectors` but no article rendered it. Added the `relatedSectors` article after `relatedResources`.

## Lint

Removed unused `ArrowRight` imports from the two problem pages (the ProblemPageDS pattern uses plain `<Link className="underline">`, not ArrowRight). This reduced total warnings from 52 to 50. All 85 errors are pre-existing in untouched files.

## Notes

- The problem pages use `<Link className="underline">` (matching ProblemPageDS) rather than `<Link>` with `<ArrowRight>` (matching the sector pages). Both patterns are valid; the lane brief said to match ProblemPageDS for problem pages.
- `problemRouting` data was already correct in both pages (set in the previous pass); only the render path was missing.
