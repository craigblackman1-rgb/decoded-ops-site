# CR-WEB-060 build: homepage "How I help" DO-ART-1008 route poster

Spec: `.context/lane-briefs/cr-web-060/` (list with the shell; your glob tool may skip dot-folders):
`how-i-help-1440.png` and `how-i-help-390.png` (the approved mockup renders, look at them), `how-i-help-section.html`
(the mockup section markup; images already rendered to /images/d17/home/ and committed), `a1008.css` (its CSS).

In `app/page.tsx`, section `id="s3"` (HOW I HELP):
- Keep the existing eyebrow, h2 and lede exactly.
- Remove the `<figure className="band">` (DO-ART-906 thread spools photo) and the `<ol className="idx">` services list.
- In their place render the `<figure class="d17 a1008" ...>...</figure>` from how-i-help-section.html verbatim, as a string
  constant injected with `dangerouslySetInnerHTML` on a wrapper div (the same pattern the sector pages use). Keep its
  links (Start here etc.) as plain `<a href>` pointing at the same routes the old list used (check the `services` array).
  If the `services` array becomes unused, remove it.
- CSS: append the full contents of a1008.css to `app/d17-global.css` (global, because the markup is injected with plain
  class names; never a CSS module). Add `import './d17-global.css';` to app/page.tsx if it isn't imported yet.
  `<D17Motion />` is already on the page.
- Phone: at 390px the route must be the vertical version from the mockup with no sideways scroll.
Then `npx tsc --noEmit`, commit `feat(web): homepage How I help route poster DO-ART-1008 (CR-WEB-060)`.
No dev servers, builds, browsers, databases or .env files. Do not push.
