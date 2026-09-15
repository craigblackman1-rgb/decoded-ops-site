# Lane brief — CR-MKT-010 publish: 301 + blog index sync

Work order: wo-marketing-sales-consolidated-2026-08-20, unit u36. Worktree: this directory, branch `cr-mkt-010-erp-gaps` (already carries the DO-ART-629 PNG commit).

## Hard rules
- No database access, no `.env*` reads, no dev server, no browser. Claude verifies after you commit.
- Touch only: `next.config.ts`, `data/blog-index.json` (via the script, never by hand). Nothing else.
- Do not edit `app/resources/erp-selection-playbook/page.tsx` or any content copy.
- Conventional commits; end every commit message with `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.
- Finish with `.context/lane-reports/LANE-RESULT.json`: `{ "unit": "u36", "cr": "CR-MKT-010", "commits": [...], "files": [...], "notes": "..." }`.

## Changes
1. `next.config.ts` → in the existing `redirects()` array add, matching the existing entry style:
   `{ source: '/blog/orderwise-what-it-does-well-what-it-doesn-t', destination: '/blog/erp-gaps-decorated-goods-business', permanent: true }`
2. Run `node scripts/sync-blog-index.mjs` (it fetches the public hub index over HTTPS and rewrites `data/blog-index.json`). Confirm in the resulting JSON that `erp-gaps-decorated-goods-business` is present with date `2026-09-15` and `orderwise-what-it-does-well-what-it-doesn-t` is absent. If the script exits non-zero, stop and report; do not hand-edit the JSON.
3. `npx tsc --noEmit` clean (run `npm install` first if `node_modules` is missing; that is pre-authorised). Do not run `npm run build`.
4. One commit for the redirect + index.
