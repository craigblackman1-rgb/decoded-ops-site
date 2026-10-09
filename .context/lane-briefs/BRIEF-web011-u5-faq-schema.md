# Lane brief — web011-u5-faq-schema (CR-WEB-043: FAQPage JSON-LD on service, app and sector pages)

Repo: decoded-ops-website (Next.js 16 App Router). Fresh worktree on branch `web011-u5-faq-schema` off origin/main. Do NOT start a dev server or Playwright. Implement, `npx tsc --noEmit`, `npx next lint`, commit, stop. Only `git add` files you changed — never `git add -A`.

## Pattern to copy — exactly
Problem pages already carry FAQPage schema via the shared `JsonLd` component. Open `app/problems/ecommerce-not-connected/page.tsx` lines ~20–60: a `@graph` array containing `{ '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }, … ] }` rendered with `<JsonLd data={…} />` from `@/components/JsonLd`. Reproduce that structure — same component, same shape, same placement in the JSX — on every page below. If the page already renders a `JsonLd` block (e.g. Service or BreadcrumbList), ADD the FAQPage node to the same `@graph` rather than emitting a second script tag.

## Pages (all currently have no FAQPage)
Services: app/clarity, app/retained, app/transform, app/how-i-build
Apps: app/apps/data-app, app/apps/artwork-manager, app/apps/commerce
Sectors: app/sectors/awards-engraving, labels-packaging, promotional-merchandise, schoolwear, signs-graphics, teamwear-clubwear, workwear
(app/sectors/garment-decoration and app/small-business — check; if they lack FAQPage add it too, if present leave alone.)

## Writing the questions — strict rules
- 3 questions per page, 4 maximum.
- Every question and answer must be derivable from copy ALREADY ON THAT PAGE. Read the page's JSX first. No new claims, no numbers, no prices, no guarantees, no timeframes, no client names, no software vendor names unless the page copy itself names them. If the page mentions the Clarity Audit price or the 3x guarantee, you may restate exactly what the page says, word for word — nothing else.
- Questions are phrased the way a print / embroidery / workwear business owner would ask: short, plain, first person or "how do I". Answers are 1–3 plain sentences in the page's own register (Craig writes short, direct, no marketing adjectives, no "leverage", no "unlock", no "seamless", no exclamation marks, no em-dash lists). British spelling.
- No question that the page doesn't answer. If a page genuinely only supports two, write two and say so in LANE-RESULT.
- Do NOT render the FAQ visibly on the page. Schema only. Do not add UI.

## Organization / ProfessionalService check
`app/layout.tsx` line ~87 renders a `ProfessionalService` JsonLd. Read it and confirm it carries: `name: 'Decoded Ops'`, `url: 'https://decodedops.co.uk'`, `areaServed` United Kingdom, `founder` Craig Blackman, and a `sameAs` array. If `sameAs` is missing, add `['https://www.linkedin.com/in/craigblackman']` ONLY if that exact URL already appears elsewhere in the repo (grep for `linkedin.com/in/`); otherwise leave `sameAs` out and note it. Do not add address, phone or opening hours. Do not change anything else in layout.tsx.

## Verify before commit
- `npx tsc --noEmit` and `npx next lint` clean.
- `grep -c FAQPage app/<page>/page.tsx` = 1 for every page listed.
- Paste every Q&A into LANE-RESULT grouped by page so Claude can voice-check them against the page copy.
- Each JSON-LD object must be valid JSON when serialised — no trailing commas inside template strings, no unescaped quotes in answers.

Commit: `CR-WEB-043: FAQPage JSON-LD on service, app and sector pages`. Do not push.
