# WO-INF-061 u36 — CR-WEB-052: Problem page copy fixes

Repo: decoded-ops-website. Content-correction + one bug fix only — no new features, no layout changes.

## MUST fix
1. Remove the invented "cant-scale" figures: £500k/£1.5m revenue claims — search the "can't scale" / systems problem page(s) under app/problems/**.
2. Remove the invented "seasonal-peaks" figures: "forty" and "two hundred" orders claims on the seasonal-peaks problem page.
3. Remove the invented "spreadsheet-addiction" figures: the "forty-order" and "eight-month" stories on the spreadsheet-addiction problem page.
4. On the ERP page's case study 02, fix "9 supplier feeds" to "17 supplier feeds".
5. Drop specific product names "Excel" and "Google Sheets" from copy — describe generically (e.g. "spreadsheets") instead.
6. Fix the 404 on /problems/systems-dont-talk-video — find where it's linked from and either fix the route/redirect or fix the broken link target so it resolves.

## FORBIDDEN
- Do not touch app/clients/**.
- Do not touch pricing figures outside what's listed above.
- Do not invent new copy or restructure sections — minimal, targeted edits only.
- Do not touch files outside decoded-ops-website.

## VERIFY (run yourself, commit only if clean)
- `npx tsc --noEmit` — must be clean (or no worse than main).
- `npx next lint` — must pass.
- Grep for the removed figures/strings — zero matches after your edit.
- Confirm /problems/systems-dont-talk-video no longer 404s (check the route file exists and any internal links point at a valid path).
- No literal `\uXXXX` unicode escapes introduced in JSX text.

## Commit and stop
Commit your changes with a clear message. Do NOT push. Do NOT run a dev server. Note anything you couldn't fully resolve in LANE-NOTES.md.
