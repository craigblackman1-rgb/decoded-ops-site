# Micro fix — /small-business price spacing (CR-WEB-036 follow-up)

Worktree `D:/apps/worktrees/decoded-ops-website/ops022-fix-price-spacing` (branch ops022-fix-price-spacing). No dev server, no push. Only `git add` the one file.

`app/small-business/page.tsx` ~line 204–205: the price and its note render with no gap ("£595fixed", "from £1,200/mo"). Change the note span to `<span className="num" style={{ color: 'var(--do-text-muted)', marginLeft: 6 }}>{service.priceNote}</span>` so it reads "£595 fixed" and "from £1,200 /mo" (matches the /pricing table's "From £1,200 /mo"). Nothing else. Run `npx tsc --noEmit` and `node .context/price-audit.mjs --check`. Commit: `fix(small-business): space between price and note (CR-WEB-036)`. Write LANE-RESULT.json `{ "status": "done", "commit": "<sha>" }`.
