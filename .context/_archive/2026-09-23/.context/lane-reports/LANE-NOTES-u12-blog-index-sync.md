# LANE-NOTES — u12-blog-index-sync

## What was done

- Created `scripts/sync-blog-index.mjs` — fetches the hub index at `https://hub.decodedops.co.uk/api/content/index`, maps items to `{slug, title, excerpt, date, category}`, sorts by date descending, writes `data/blog-index.json` as 2-space pretty JSON with trailing newline. Supports `--check` mode (exit 1 if any hub slugs are missing locally, without writing).
- Ran `node scripts/sync-blog-index.mjs` — synced 33 items (up from 29).
- Added `"sync:blog-index": "node scripts/sync-blog-index.mjs"` to `package.json` scripts (not added to build).

## Verify output

1. `node scripts/sync-blog-index.mjs --check` → `0 missing` (exit 0)
2. `node -e "const j=require('./data/blog-index.json');console.log(j.items.length, Object.keys(j.items[0]).join(','))"` → `33 slug,title,excerpt,date,category`
3. `npx tsc --noEmit` → exits non-zero with pre-existing vitest type resolution errors (`Cannot find module 'vitest'` and `'vitest/config'`). These errors exist on the base branch and are unrelated to this change. My changes do not introduce any new tsc errors.
4. `git diff --stat` — only `data/blog-index.json` and `package.json` modified; `scripts/sync-blog-index.mjs` is a new untracked file. No changes to app/**, components/**, or lib/**.

## Files changed

- `scripts/sync-blog-index.mjs` — new file (sync script)
- `data/blog-index.json` — 29 → 33 items, sorted by date descending
- `package.json` — added `sync:blog-index` script
