# Lane notes — inf075-u8-site-hub-timeout

## What changed

`lib/hub-fetch.ts` only. In `hubFetch`, when `init.signal` is `undefined`, the fetch options now get `signal: AbortSignal.timeout(10_000)`. A caller-supplied `init.signal` wins unchanged (`init.signal === undefined ? AbortSignal.timeout(10_000) : init.signal`). Headers logic is untouched — User-Agent, optional `x-hub-key`, and spread of `init.headers` remain exactly as before.

Doc comment gained one sentence: hub calls time out after 10s so a slow or redeploying hub can't stall `next build` (WO-INF-075 u8).

## Verification

- `git show --stat HEAD`: only `lib/hub-fetch.ts`, +3 lines.
- `AbortSignal.timeout` and `WO-INF-075 u8` each appear exactly once in the repo (hub-fetch.ts). escapeGrep: 0 hits outside the intended file.
- tsc not run: this worktree has no `node_modules` (fresh checkout per AGENTS.md); the task forbade builds/servers/browsers. The edit is a single conditional expression on `RequestInit.signal`; no new imports.
- Tests: not run (task scope: edit one file, no test harness invoked).

## Commit

`043c790` — `perf(site): 10s timeout on hub fetches so builds can't stall (WO-INF-075 u8)`

Lane exit: true. No blockers. Deviation noted above (tsc skipped with reason).
