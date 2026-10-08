# Lane notes — web046-fix1

Small follow-up lane scoped to one style object in `app/blog/[slug]/page.tsx`.

The previous lane (web046-art-sizing, "Fix 5") capped the blog hero image with
`maxWidth: 960` but left it as an inline replaced element sized by its
`width={1200}` attribute, so on a 390px viewport it still laid out at 960px wide
and overflowed the page. `marginInline: 'auto'` also did nothing because
margin auto only centres block boxes.

Fix is exactly two declarations added to the hero `<img>` style object:
`width: '100%'` and `display: 'block'`. Everything else in the object is
unchanged. No other files touched.

Verification: `npx tsc --noEmit` clean. No browser rendering check was run (lane
contract forbids dev servers / Playwright / curl), so the mobile fix is
CSS-reasoned: with `width:100%` + `maxWidth:960` the image can no longer lay
out wider than its 390px container, and `display:block` activates the
`marginInline:auto` centreing above 960px.

Pre-existing worktree noise (not mine, not committed): `data/route-slugs.json`
has an empty content diff (LF/CRLF only) and `.context/lane-briefs/web046-fix1.md`
is the untracked brief file.
