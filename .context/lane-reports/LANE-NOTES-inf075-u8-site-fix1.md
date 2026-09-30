# Lane notes — inf075-u8-site-fix1

WO-INF-075 u8 follow-up. Single-file change: `lib/hub-fetch.ts` only.

## What changed

The previous commit (043c790) applied `AbortSignal.timeout(10_000)` to every `hubFetch`
call with no caller-supplied signal. That was correct for build-stalling GETs but wrong
for writes — `app/api/clients/uploads/route.ts` POSTs client file bodies through
`hubFetch` and can legitimately take longer than 10s.

Logic now:

1. Caller-supplied `init.signal` always wins (unchanged).
2. Else, if `(init.method ?? 'GET').toUpperCase() === 'GET'`, attach `AbortSignal.timeout(10_000)`.
3. Else (POST/PUT/PATCH/DELETE) attach no signal — Node's default (no timeout).

Doc comment updated: "GET hub calls time out after 10s…" plus a writes note.

## Verification

- `git show --stat HEAD` — code commit touches only `lib/hub-fetch.ts`.
- Escape grep across `lib`, `components`, `app`: `AbortSignal.timeout` appears once,
  on the GET branch at `lib/hub-fetch.ts:34`. Uploads route is
  `hubFetch(target, { method: 'POST', body })` — no signal → no default timeout. Other
  hubFetch call sites omit `method` (GET) → still get the 10s timeout.
- `tsc --noEmit`: 2 errors, both pre-existing `Cannot find module 'vitest'` in
  `app/api/tools/capture/route.test.ts` and `vitest.config.ts` — vitest is not installed
  in the worktree or the main checkout. Zero errors in `lib/hub-fetch.ts`. No error
  introduced by this change.
- Tests: n/a. Brief forbade builds/servers; vitest is not installed in this environment.
- Node_modules: junctioned from `D:\apps\decoded-ops-website` to run tsc; gitignored,
  not committed. Task said no builds — a typecheck was the only verification available
  and was run after the fix was committed, per the commit-first rule.

## Lane-exit

Code commit `a05d454` is the deliverable. This report commit is process only.
