# BRIEF: CR-WEB-058 on-page titles + meta descriptions (WO-WEB-011 u20)

Worktree: D:\apps\worktrees\decoded-ops-website\web065-tech-seo (same branch as CR-WEB-065, which is already committed; build on top of it).
Work ONLY in this worktree. Do not push. No dev server, no browser, no database, no .env files. List dot-folders with the shell.

## Input
`.context/lane-briefs/onpage-web058.json` — array of 159 objects: `{path, primary, title, meta, h1, ...}`. `path` is the URL path ("/" = homepage). `title` and `meta` are FINAL, approved copy: use them character for character (UTF-8; "£" and "'" as given). Do NOT change H1s or any page body copy.

## What to do
1. For every entry, find where that route's metadata is defined (static `export const metadata` in app/**/page.tsx or layout.tsx, `generateMetadata`, or a data file/array the route reads: blog posts, sectors, problems, resources, tools, case studies, locations).
2. Set:
   - the page `<title>` to exactly `title`. IMPORTANT: check whether app/layout.tsx or a segment layout defines `title.template` (e.g. `%s: Decoded Ops`). Our titles already include " | Decoded Ops" where wanted, so the rendered `<title>` must equal `title` exactly. Use `title: { absolute: '...' }` where a template would otherwise append a suffix.
   - `description` to exactly `meta`.
   - `openGraph.title` = `title`, `openGraph.description` = `meta`, and twitter title/description the same where a page defines twitter. Keep the openGraph.images/url added by CR-WEB-065.
3. Data-driven routes (blog, locations, sectors, problems…): update the title/description fields in the data source per slug. For the 58 town pages (/locations/fractional-cto/<town>, /locations/tech-audit/<town>), each town has its own title/meta in the JSON; if the template builds them from a pattern, add per-town `seoTitle`/`seoDescription` fields to the location data and use them.
4. Root layout default metadata (app/layout.tsx `metadata.title`/`description`/openGraph/twitter) = the "/" entry's title and meta.
5. Write a check script scripts/check-onpage-seo.mjs that, after `npm run build`, starts nothing itself but reads the prerendered HTML from `.next/server/app/**.html` (and `.rsc`/`.meta` as needed) for each path in the JSON and reports mismatches of `<title>` and `<meta name="description">` against the JSON. For dynamic routes that aren't prerendered, the script should list them as "not prerendered" rather than fail. Run it; fix until zero mismatches for all prerendered paths.
6. `npx tsc --noEmit` and `npm run build` must pass. Commit (`feat(seo): keyword-mapped titles and descriptions (CR-WEB-058)`). Write .context/lanes/REPORT-web058-onpage.md: counts updated, files touched, checker output, anything not done.
