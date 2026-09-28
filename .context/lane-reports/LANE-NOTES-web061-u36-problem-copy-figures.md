# Lane notes: web061-u36-problem-copy-figures

## What was done

CR-WEB-052 requested six fixes. Five of them (items 1-5: invented figures removal,
Excel/Google Sheets genericisation, 9→17 supplier feeds) were already applied by the
d17 lane in commit `027f13a`. This lane completed item 6: fixing the 404 on
`/problems/systems-dont-talk-video`.

### Fix applied

Added a permanent redirect in `next.config.ts`:
`/problems/systems-dont-talk-video` → `/problems/systems-dont-talk`

No internal links pointed to the video URL — the route was simply unreachable
and returned a404. The redirect ensures anyone hitting the old URL lands on the
correct problem page.

### Verification

- `npx tsc --noEmit`: clean, 0 errors
- `npm run lint`: 160 pre-existing problems (77 errors, 83 warnings), none from this change
- Grep for forbidden figures: 0 hits on the affected problem pages
- `systems-dont-talk-video` redirect confirmed in `next.config.ts`

### Not done

- The `/problems/systems-dont-talk-video` page itself was not created — it was
  never part of the CR scope. The video data in `data/problem-videos.ts` is
  still commented out pending Craig's YouTube upload.
