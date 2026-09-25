# BRIEF: CR-WEB-065 / CR-WEB-058 fix 1

Worktree: D:\apps\worktrees\decoded-ops-website\web065-tech-seo. Work only here. No push, no dev server, no browser, no database, no .env files.

The CR-WEB-058 commit (a4d7835) rewrote app/tools/ops-health-score/layout.tsx and app/tools/should-i-replace-erp/layout.tsx and DROPPED two things that were there before. Put them back without changing the new title/description text:
1. `alternates: { canonical: '/tools/ops-health-score' }` (and `'/tools/should-i-replace-erp'` respectively).
2. `images: OG_IMAGE` in openGraph and `images: [OG_IMAGE_PATH]` (or whatever lib/seo.ts exports for twitter) in twitter.

Then the two calculator pages that are in the sitemap but have incomplete metadata. Find where each route defines metadata (app/resources/capacity-planner/, app/resources/seasonal-capacity/ — page.tsx or layout.tsx) and set exactly:
- /resources/capacity-planner
  - title (rendered `<title>` must equal this exactly; use `{ absolute: ... }` if a template would add a suffix): `Capacity Planning Calculator for Print | Decoded Ops`
  - description: `A free capacity planning calculator for print and embroidery businesses. Work out how many jobs your machines and team can take on each week.`
- /resources/seasonal-capacity
  - title: `Seasonal Capacity Calculator for Print | Decoded Ops`
  - description: `A free seasonal capacity calculator for print, embroidery and workwear businesses. See whether your busiest months fit your machines and your team.`
- For both: `alternates.canonical` = own path; openGraph { title, description, url: 'https://decodedops.co.uk<path>', images: OG_IMAGE }; twitter { card: 'summary_large_image', title, description, images }.

Finally grep every app/**/layout.tsx and page.tsx changed in commit a4d7835 (`git show --stat a4d7835`) and confirm none of them lost `alternates`, `openGraph.images` or `openGraph.url` compared with its parent commit (`git diff a4d7835~1 a4d7835 -- <file>`). Restore any that did. List what you checked in the report.

`npx tsc --noEmit` and `npm run build` must pass. Commit `fix(seo): restore canonicals/og images, calculator page metadata (CR-WEB-065)`. Report to .context/lanes/REPORT-web065-fix1.md.
