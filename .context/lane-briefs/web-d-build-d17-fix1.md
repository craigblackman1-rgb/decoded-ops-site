# Fix pass 1: sector art renders unstyled (same rules as web-d-build-d17.md)

Claude rendered the 9 sector pages: every D17 piece is unstyled (raw photos, plain text, black boxes). Cause: the pieces are
raw HTML injected with dangerouslySetInnerHTML using PLAIN class names (`d17 sx a921`, `d17-doc`, `win`, `kpi`, `q-...`), but
the CSS was added as CSS Modules (`app/d17-sectors.module.css`, and the pages also rely on rules from `app/d17-art.module.css`),
which rename every class. Modules can never match injected plain class names.

Fix:
1. Create GLOBAL stylesheet `app/d17-global.css` = the full contents of `.context/lane-briefs/d17-sectors/d17-art.css`
   (the original, un-moduled D17 art CSS) followed by the full contents of `.context/lane-briefs/d17-sectors/d17-sectors.css`.
   Scope nothing; class names stay exactly as in the sources. (Leave `app/d17-art.module.css` untouched: the live Home/About/Contact
   pages use it via JSX module classes and must not change.)
2. Delete `app/d17-sectors.module.css`.
3. In each of the 9 `app/sectors/<slug>/page.tsx`: remove the `import sectors from '@/app/d17-sectors.module.css'` and any
   `import d17 from '@/app/d17-art.module.css'` that the page only used for the injected pieces; add the side-effect import
   `import '@/app/d17-global.css';` (App Router allows global CSS imports in pages). If a page uses `d17.xxx` / `sectors.xxx`
   in real JSX (not inside the injected HTML strings), switch those to the equivalent plain class names.
4. Make sure `components/D17Motion.tsx` is rendered on each sector page (so `data-motion` pieces animate) the same way the Home
   page uses it; reduced motion shows the still.
5. Check for global name clashes: if any selector in d17-global.css is a bare element selector or a generic name that already
   exists in `app/globals.css` (e.g. `.card`, `.wrap`, `.btn`, `.lede`, `.eyebrow`, `.kicker`, `.grid`), prefix those rules in
   d17-global.css with `.d17 ` so they only apply inside pieces. Do not change globals.css.

DONE: `npx tsc --noEmit` passes; `git grep -n "d17-sectors.module" -- app` empty; one commit
"fix(web): sector D17 art uses a global stylesheet (injected markup)". Report the clash list from step 5.
