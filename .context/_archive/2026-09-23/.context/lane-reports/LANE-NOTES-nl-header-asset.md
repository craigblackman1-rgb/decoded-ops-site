# Lane: nl-header-asset

## What happened

- Copied `ops-briefing-header.png` (34,017 bytes, 1200×360) from the OneDrive content folder into `public/newsletter/assets/`.
- Verified byte size matches source exactly.
- Checked `next.config.ts` — no redirects or rewrites block `/newsletter/*`. The only catch-all is the global security headers (HSTS, CSP `img-src 'self'`, etc.), which are permissive for static image serving from `public/`.
- Committed with `git add public/newsletter/assets/ops-briefing-header.png` only; no other files touched.
- No `npm install`, `npm run build`, dev server, or curl.

## Assets served

At deployment, the image is available at: `/newsletter/assets/ops-briefing-header.png`
