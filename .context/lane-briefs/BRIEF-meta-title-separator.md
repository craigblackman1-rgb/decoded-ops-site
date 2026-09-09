# LANE BRIEF — meta-title separator standardisation (decoded-ops-website)

WO: wo-website-consolidated-2026-08-02 unit u1 · deferred dmtczasgl9q
Decision already made (Craig, qmtsl5polqn answered 2026-09-08): **colon everywhere — "X: Decoded Ops"**.
Worktree: D:\apps\worktrees\decoded-ops-website\meta-title-separator (branch lane/meta-title-separator, off origin/main 8991c4d)

## GOAL
Every page title that ends with the site suffix uses ONE separator style: `": Decoded Ops"`. Today ~156 occurrences use `" | Decoded Ops"` and ~70 already use `": Decoded Ops"`.

## MUST
1. Find every occurrence of the literal `| Decoded Ops` in `app/`, `lib/`, `src/`, `components/` (all .ts/.tsx, and any .json/.mdx content files if present).
2. Convert `" | Decoded Ops"` -> `": Decoded Ops"` in page `metadata` titles, `openGraph.title`, `twitter.title`, and JSON-LD `name`/`headline` fields.
3. **Exception rule — do NOT blind-replace.** If the base title (the part before the suffix) already contains a `:` — e.g. `'Case study 01: Khaos Control ERP + Custom App | Decoded Ops'` — converting would produce a double-colon title. LEAVE those on the pipe separator and LIST every one of them in `LANE-NOTES.md` with the file:line and a suggested single-colon rewrite. Do not invent a third separator (no dashes, no bullets).
4. Also update regex/string logic that strips or builds the suffix so it stays correct — at minimum `app/blog/[slug]/page.tsx` (the `.replace(/ \| Decoded Ops$/, '')` strip and the `${item.title} | Decoded Ops` build). The strip must tolerate BOTH old and new separators so existing hub-sourced SEO titles still strip cleanly.
5. Commit your work on the lane branch as you go (do not finish with uncommitted changes). Conventional commit message, e.g. `chore(seo): standardise meta title separator to colon`.

## FORBIDDEN
- Changing any title text other than the separator (no copy rewrites, no keyword edits).
- Touching non-title strings that merely contain "Decoded Ops" (email from-addresses, siteName, alt text, prose copy).
- `git push`, `git rebase`, branch switching, deleting the worktree.
- Running `npm run dev`, starting any server, or any browser automation. Claude verifies.
- Installing packages or changing dependencies.

## VERIFY (run these, paste real output into LANE-NOTES.md)
- `grep -rn "| Decoded Ops" app lib src components --include=*.ts --include=*.tsx` -> only the documented exception list remains.
- `grep -rcn ": Decoded Ops" app lib src components --include=*.ts --include=*.tsx | tail -1` -> count risen accordingly.
- `npx tsc --noEmit` -> clean (or unchanged from baseline; record the baseline first).
- `npm run build` if it completes in reasonable time; if it fails, record the exact error — do not "fix" unrelated build failures.

## DELIVER
`LANE-NOTES.md` in the worktree root: what changed (file count, occurrence count), the exception list, and the verbatim verify output. Then stop. Do not push.
