# verify-pages.js

Derives every marketing route from `git ls-tree` and every Open Design mockup
from `decoded-marketing/`, matches them by filename convention, then fetches
each live route and checks: H1 text matches the mockup (fuzzy), design-system
classes are present, and zero old-Tailwind `bg-[#hex]` classes remain inside
`<main>`. Blog posts (data-driven, no per-post mockup) are checked against the
shared `blog-post.html` template's structural classes instead.

No hand-maintained page list -- a new mockup or route shows up automatically
next run instead of needing someone to remember to add it to a spreadsheet.

## Run it

```
node .context/tools/verify-pages.js
```

Env overrides: `SITE_ORIGIN` (default `https://staging.decodedops.co.uk`),
`MOCKUP_DIR` (default `D:\apps\design-systems\decoded-marketing`).

## Reading the output

- `PASS` -- verified live, not just claimed.
- `FAIL` -- route + mockup both exist but disagree; the detail line says how.
- `NO-MOCKUP` -- route exists, no matching Open Design file. Not a build bug,
  a design gap -- check whether it's deferred (see `wo deferred-list`) before
  treating it as a regression.
- `ERROR` -- fetch failed (site down, route 404s).

Known false-positive: blog posts without a `cluster` tag in the CMS correctly
render no "related reading" section (`RelatedPosts.tsx` returns `null` by
design) -- the script currently flags this as FAIL. That's a data-completeness
gap in the CMS content, not a template bug; don't re-dispatch a lane for it
without checking the post's `cluster` field first.
