# LANE-NOTES: web066-art976

## BUG-WEB-037 — DO-ART-976 emoji + overlapping boxes

### Changes made

**Box geometry** — narrowed all five island rects from width 160 to 120, shifting x by +20 on each to keep centres and connector lines unchanged. This eliminates the 20px overlap between neighbouring boxes (e.g. Orders was x=60 w=160, Accounts was x=200 w=160 — they overlapped by 20px; now x=80 w=120 and x=220 w=120, with 20px gap between them).

**Emoji replacement** — swapped the three `👤` text elements (emoji) for SVG stroke-only person icons using `var(--do-amber, #FFB703)`. Each icon is a circle head + arc body, stroke only, no fill. Animation group (`m-pop`, delay 1.3s) preserved identically.

### Verification

- `npx tsc --noEmit` — clean, 0 errors
- `npm run build` — passes (173 static pages generated)
- Emoji sweep (`git grep` for Unicode ranges U+1F300–U+1FAFF and U+2600–U+27BF) — only 2 hits: `✕` and `✓` in `app/deco-page.module.css` pseudo-elements. These are text characters, not emoji-presentation; safe to leave.
- Commit: `dd1c1d5`
