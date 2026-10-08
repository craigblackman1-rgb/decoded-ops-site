# Lane brief: BUG-WEB-046 artwork sizing (WO-INF-084)

You are in a git worktree of decoded-ops-website on branch `lane/web046-art-sizing`. Work only here.
DO NOT start dev servers, `next start`, Playwright or curl a server. Implement, run `npx tsc --noEmit` and `npx next lint` (if configured), commit, stop.
Commit early: commit after each numbered fix below with message `fix(art): <what> (BUG-WEB-046)`.
Stage only files you changed (`git add <paths>`), never `git add -A`.
Do not touch unrelated files. Do not change artwork content/text/numbers, only sizing/layout CSS and the placements named.

## Root cause (verified in browser)
D17 artwork uses `--u: calc(100cqw / 1152)` with `.d17` as `container-type:inline-size`. Several pieces apply `min-height`, `padding` or `margin` in `calc(N * var(--u))` ON THE `.d17` FIGURE ITSELF. Container units on the container element resolve against an ancestor container — there is none — so they fall back to viewport width. DO-ART-918 on the home page is 750px tall at 1440 wide, 1000 at 1920, 1333 at 2560 (should be 600). Adding `container-type:inline-size` to the figure's parent fixes it exactly.

## Fixes

1. **Container wrapper (root cause).** Make every `.d17` figure's size-on-self properties resolve against its own width. Preferred: in the shared D17 CSS, give the element that wraps each `.d17` figure `container-type:inline-size` — simplest robust way: add a rule so the direct parent context is a container, e.g. wrap figures in a shared `.d17-wrap` element (`container-type:inline-size; width:100%`) in the components/pages that render them, OR convert the self-sizing to non-cqw equivalents: `min-height:calc(600*var(--u))` → `aspect-ratio:1152/600` (with `min-height:auto`), and self `padding:calc(N*var(--u))` → percentage padding `calc(N/1152*100%)` (padding % resolves against containing block width). Pick one approach and apply it consistently. Affected selectors (origin/main line refs):
   - `app/d17-art.module.css:168` (.a918 min-height), `:90-91` (.a917 padding)
   - `app/d17-global.css:177` (918 global copy)
   - `app/d17-apps-cases.css:81` (.a939), `:166` (.a943), `:249` (.a945 padding), `:468` (.a953 min-height), `:553` (.a957 padding)
   - also `.a920` wherever defined. Grep all D17 CSS for `var(--u)` used in `min-height|padding|margin|height` on a selector that is itself the `.d17` element and fix every one, not just this list.
2. **`.sx` hero-column pieces placed full width.** `.sx` pieces are authored at 560 units for a ~537px column. On these pages they sit full-width and render 1152x1300:
   - `app/resources/decoded-method/page.tsx:142` (DO-ART-988)
   - `app/resources/six-sigma/page.tsx:88` (DO-ART-985)
   - `app/sectors/print-promotional/page.tsx:137` (DO-ART-927 — this is a DUPLICATE of the instance at `:110`; delete the second instance at :137 entirely)
   For 988 and 985: constrain to `max-width:560px; margin-inline:auto` (add a modifier class, e.g. `.sx--solo`), or place in a 2-col grid matching the page's existing hero grid pattern. Keep it simple: max-width + centred.
3. **Mobile ceiling.** At <=640px wide, `.sw-doc`, `.sw` stages and `a9xx` pieces stack to 1000-1195px. Add a mobile rule so embedded artwork stages are capped (`max-height:100svh` must NOT clip content: instead reduce internal stacking — e.g. hide secondary decorative layers or reduce stage `min-height` on mobile). Targets: DO-ART-718 (`.sw-doc` in `app/d17-global.css:437-445`), 831 (`app/about/page.tsx:84`), 945, 949 (`app/case-studies/page.tsx:47`), 953/954 (`case-study-02/page.tsx:89,127`), 957, 930, 967, 986, 1008 (`app/page.tsx:188`). Remove any fixed mobile `min-height` that forces the height; let content define height.
4. **Mobile horizontal overflow.** `/case-studies/eternal-fitness` (394px at 390, DO-ART-957, `app/case-studies/eternal-fitness/page.tsx:91`) and `/resources/seasonal-capacity` (414px at 390, DO-ART-994, `app/d17-resources.css`). Find the element wider than the column and clamp it (`max-width:100%`, `min-width:0` on grid children, or `overflow-wrap`).
5. **Blog hero cap.** Blog post hero images (`public/images/blog/*-img-1.*`, rendered in the blog post template — find it) render 1152 wide = 72% vh. Constrain the hero to `max-width:960px; margin-inline:auto; aspect-ratio:16/9` with explicit width/height attributes (1200x675) on the `<img>`.

## Done when
- All five fixes committed, tsc clean.
- Write `.context/lane-reports/LANE-RESULT-web046-art-sizing.md`: per fix, files+lines changed and approach chosen, and the full list of selectors you changed in fix 1.
