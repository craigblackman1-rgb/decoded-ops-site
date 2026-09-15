# Lane brief — CR-WEB-031 fix: CSP frame-src for the YouTube embed

Worktree: this directory, branch cr-web-031-video-embed. Unit u34 follow-up. Same hard rules as BRIEF-cr-web-031-video-embed.md (no DB, no dev server, no browser, tsc clean, conventional commit with Co-Authored-By line).

Claude's browser check found: clicking play sets the iframe to https://www.youtube-nocookie.com/embed/... correctly, but the console reports
"Framing 'https://www.youtube-nocookie.com/' violates the following Content Security Policy directive: 'default-src 'self''. 'frame-src' was not explicitly set".

Change ONE thing in `next.config.ts` line ~47 (the Content-Security-Policy value): add the directive
`frame-src 'self' https://www.youtube-nocookie.com`
alongside the existing directives (keep everything else byte-identical). Do NOT add www.youtube.com; nocookie only. Do not touch `data/problem-videos.ts` (it has an uncommitted temporary test entry that Claude owns; leave the working-tree change alone and do not `git add -A`; stage `next.config.ts` explicitly).

Verify: `npx tsc --noEmit` clean; `git diff --cached --stat` shows only next.config.ts. Commit and append to `.context/lane-reports/LANE-RESULT.json` (add the commit to `commits`).
