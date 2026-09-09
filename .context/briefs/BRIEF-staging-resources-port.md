# Lane brief: port give-first resource pages onto staging + restore Decoded Method (GF1 + SR1 item, wo-marketing-sales-consolidated-2026-08-20)

## HARD CONSTRAINT — read first
The staging site's designs came from Open Design and are CANONICAL. Craig 2026-09-01: "we do not want to destroy the new site design." New pages must be built by REUSING staging's existing resource-page components and structure exactly as `app/resources/audit-checklist/page.tsx` and `app/resources/5-warning-signs/page.tsx` use them ON STAGING. Do not invent new layouts, do not import components those pages don't use, do not touch shared components or styles.

## SETUP
Worktree off **origin/staging** under D:\apps\worktrees\decoded-ops-website\.

## TASKS
1. Port three resource pages from branch `lane/give-first-magnets` (commit 20bea5d, built against main's older pattern). Get the CONTENT with `git show lane/give-first-magnets:app/resources/sop-template/page.tsx` (same for erp-selection-playbook, artwork-approval-playbook). Rebuild each as a staging-pattern page at the same routes: `app/resources/sop-template/`, `app/resources/erp-selection-playbook/`, `app/resources/artwork-approval-playbook/`. Keep the text content, headings, and metadata (titles/descriptions) from the source commit verbatim; only the surrounding structure changes to staging's pattern. Content is fully ungated: no email required anywhere. End each page with staging's equivalent quiet contact/next-step block as used on existing staging resource pages.
2. Restore the Decoded Method resource page, which staging deleted: recover content with `git show origin/main:app/resources/decoded-method/page.tsx` and rebuild it in staging's resource-page pattern at `app/resources/decoded-method/`. Keep its text content. (Craig's direct order: this page stays — it is the most-viewed public content page.)
3. Update staging's `app/resources/page.tsx` index to list all four pages using the exact card pattern the staging index already uses.

## VOICE RULES (hard)
No em dashes. No consultant-speak. No invented facts. Nothing about a day rate. Text comes from the source commits; do not add new claims.

## VERIFY (done means)
- 4 routes render with full content in staging's design
- Index lists them
- `npx next build` passes
- `git diff origin/staging..HEAD --stat` touches ONLY `app/resources/**`
- Commits on lane branch, nothing pushed. Claude verifies in browser + merges.
