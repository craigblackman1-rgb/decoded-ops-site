Work inside this decoded-ops-website worktree (branched off origin/staging). This is a Next.js/React/TypeScript codebase, NOT the HTML mockup project — you're translating a design, not copying HTML.

## Goal
Port the "Direction A — Three Paths" header/footer redesign, finalized today (2026-08-01) in the `decoded-marketing` Open Design mockup project (a sibling project — read `D:\apps\design-systems\decoded-marketing\nav-footer-directions.html` for the reference implementation, specifically the CSS/markup under "DIRECTION A" and the `head-a`/`foot-a` blocks), into this repo's actual live components: `components/Header.tsx` and `components/Footer.tsx`.

## What Direction A is
The header replaces the current mega-menu (Services/Sectors/Problems/Resources dropdowns) with three buyer-intent path groups, each a labelled dropdown with a one-line descriptor:
- "Something's wrong" (descriptor: "Start with a diagnostic") → links to `/clarity` (Discovery Day) and technology audit
- "Buy vs build" (descriptor: "Systems & apps") → links to `/how-i-build` or `/apps`, `/apps/data-app`, `/apps/artwork-manager` (check which routes actually exist in this repo's `app/` directory — use real existing routes, don't invent new ones)
- "Ongoing leadership" (descriptor: "A standing CTO") → links to `/retained`

Plus flat links for "Case Studies"/"Proof" and "Pricing", and a single primary CTA button "Book a free 60-min call" → `/contact`.

The footer becomes: brand + contact column, three columns matching the path groups (Diagnose / Buy vs build / Ongoing leadership) each with their links, a Company column (About, Case Studies, Pricing, Contact, Privacy, Client Login), and a curated "Find it" strip of Sectors and Problems links each with an "All sectors →" / "All problems →" link — not every single sector/problem page needs its own footer link, curate 5-6 examples per row plus the "all" link.

## How to do it
1. Read `components/Header.tsx` and `components/Footer.tsx` as they currently exist in this repo (they use Tailwind classes, hardcoded hex colors like `#023047`/`#219EBC`/`#FFB703` — that's this repo's existing pattern, keep using it, don't try to import the decoded-marketing CSS system).
2. Read `nav-footer-directions.html`'s Direction A section for the exact structure, labels, and descriptor copy.
3. Rebuild `Header.tsx`'s desktop nav and mobile nav to use the three path-group dropdowns (React state + click/hover handlers — this repo's existing `Dropdown` function component pattern already does something similar for "Services"/"Sectors"/etc., adapt that pattern for the three path groups with their descriptor sub-labels instead of a plain list).
4. Rebuild `Footer.tsx`'s columns to match: brand+contact, Diagnose/Buy-vs-build/Ongoing-leadership, Company, Find-it (curated Sectors + Problems chips with "All" links).
5. Use only routes that actually exist in this repo's `app/` directory — grep for `app/**/page.tsx` to confirm before linking to anything. If Direction A's mockup references a route this repo doesn't have (e.g. `/systems`, `/work`, `/fractional-cto`), map it to the closest real equivalent instead (e.g. `/how-i-build` for systems, `/case-studies` for proof/work, `/retained` for fractional-cto) and note the mapping in your report.
6. Preserve accessibility patterns already in the existing Header.tsx (skip-to-content link, aria-expanded, aria-controls, aria-label, role="menu"/"menuitem") — carry them into the new structure, don't drop them.
7. Keep the same colour tokens already used in this file (`#023047` Prussian Blue, `#219EBC` Cerulean, `#8ECAE6` Sky Blue, `#FFB703` Amber, `#FB8500` Orange, `#F8F9FA` Off-White) — no new colors.

## Verify before considering this done
- Run `npm run build` (or the repo's equivalent) and confirm it compiles clean — TypeScript errors are not acceptable.
- If a dev server can be started, do NOT start it yourself (per this project's rules, OpenCode never runs dev servers) — just get the build passing and stop there; a human/Claude will visually verify separately.
- Do not touch any file outside `components/Header.tsx` and `components/Footer.tsx` unless a route genuinely doesn't exist and you need to check `app/` — reading is fine, don't create new page files.

## Rules
- Stay inside this repo only. Do not touch decoded-marketing or any other project.
- HARD RULES: no deploy, no git push, no pnpm/npm install (assume node_modules already exists from a prior install; if the build fails specifically because a dependency is missing, stop and report it rather than installing).
- Append progress to `.context/loop-status.md` at repo root if it exists, or just report at the end: what changed, whether the build passed, and any route-mapping decisions you made.
- When done, report a summary: files changed, build status, and any judgment calls (especially route mappings).
