# web-e-build-d17 fix1 (WO-INF-061, CR-WEB-053)

Verified by Claude on a production build: the D17 art on these four pages renders unstyled (both the wide and the tall
SVG variants show, the side-by-side layouts stack) because the page never imports the batch stylesheet:

- app/case-studies/case-study-01/page.tsx
- app/case-studies/case-study-02/page.tsx
- app/case-studies/case-study-03/page.tsx
- app/case-studies/eternal-fitness/page.tsx

Fix: in each, directly after the existing `import '@/app/d17-global.css';` line, add
`import '@/app/d17-apps-cases.css';` (same as app/case-studies/page.tsx and app/apps/*/page.tsx already do).
Change nothing else. Run `npx tsc --noEmit`, then commit: `fix(web): import d17-apps-cases.css on case study pages (WO-INF-061)`.
Do not run dev servers, browsers or builds. Do not touch any database or .env file. Do not push.
