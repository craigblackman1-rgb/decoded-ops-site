2026-07-24T14:10:00+01:00 | Lane C | app/clients/documents/view/[id]/SignPanel.tsx | built: sign panel client component with name/date/signature/agree inputs, submit, success state
2026-07-24T14:10:00+01:00 | Lane C | app/api/clients/documents/[id]/sign/route.ts | built: API proxy route, auth-gated, forwards POST to hub's /api/public/client-docs/{docNumber}/sign
2026-07-24T14:10:00+01:00 | Lane C | app/clients/documents/view/[id]/page.tsx | updated: integrated SignPanel for unsigned docs, read-only "signed by X on Y" notice for signed docs, status badge in header
2026-07-24T14:10:00+01:00 | Lane C | app/clients/documents/page.tsx | updated: added StatusBadge component, added optional status fields to HubDoc interface, defensively renders badges only when status present
2026-07-31T10:20:00+01:00 | lane-0 | copy DS files (ds-marketing.css, ds-plates.css, ds-plates.js, colors_and_type.css) into app/design-system/ and import in app/layout.tsx | done: byte-identical copies confirmed via Compare-Object; imported ds-marketing.css + ds-plates.css after globals.css (colors_and_type.css pulled in transitively via ds-marketing.css's own @import); ds-plates.js loaded via new components/DsPlatesLoader.tsx (client-only dynamic import in useEffect, since it's a non-module script that touches document at top level and would crash SSR if statically imported in the Server Component layout)
2026-07-31T10:22:00+01:00 | lane-0 | wire 3 redirects in next.config.ts | done: /decoded-data-app->/apps/data-app, /resources/decoded-method->/decoded-method, /sectors/workwear-teamwear->/sectors/workwear, all 308 permanent, confirmed present in .next/routes-manifest.json after build
2026-07-31T10:24:00+01:00 | lane-0 | npm run build | done: exit 0, Turbopack build, 141/141 static pages generated, zero errors (existing unrelated eslint issues elsewhere in repo untouched, npm run build itself does not run eslint as a blocking step)
2026-07-31T10:28:00+01:00 | lane-0 | git commit + push ds-impl/lane-0-foundation | done: commit f076f0e, pushed to origin (branch visible at https://github.com/craigblackman1-rgb/decoded-ops-site/tree/ds-impl/lane-0-foundation), NOT pushed to staging
2026-07-31T10:41:42+01:00 | lane-a | app/apps/page.tsx | built: ported apps.html hero-center/log-list/build-note/cta-strip sections onto ds-marketing.css classes (.wrap/.eyebrow/.lede/.g-off/.g-navy/.btn--primary/.btn--outline/.btn--ghost/.btn-row); log-list/chip/inset styled via new app/design-system/marketing-pages-extra.css (not part of Lane 0's binding, additive only); copy preserved verbatim; npm run build exit 0, /apps generated static
2026-07-31T10:43:43+01:00 | lane-a | app/apps/data-app/page.tsx | built: ported apps-data-app.html (hero-split/evidence--screen hero shot, layer-stack SVG plate ported verbatim in .plate-frame with sk-* colour classes from marketing-pages-extra.css, stat row, pricing table, cta strip); copied assets/screens/data-app-dashboard.png to public/images/apps/; this is also the redirect target for /decoded-data-app wired by Lane 0; copy preserved verbatim; npm run build exit 0, /apps/data-app generated static
2026-07-31T10:45:13+01:00 | lane-a | app/apps/artwork-manager/page.tsx | built: ported apps-artwork-manager.html (hero-split/.evidence photo, feature triplet, .panel founding-terms + .pull quote, pricing table, cta strip); copied assets/commerce/hero-workshop.jpg to public/images/apps/artwork-manager-hero.jpg; copy preserved verbatim; npm run build exit 0, /apps/artwork-manager generated static
2026-07-31T10:47:00+01:00 | lane-a | app/apps/commerce/page.tsx | built: ported apps-commerce.html (hero-split/evidence--screen hero shot, feature triplet per tier, custom-work callout panels, pricing table + founding-client notice, cta strip); copy preserved verbatim; npm run build exit 0, /apps/commerce generated static
2026-07-31T11:05:00+01:00 | lane-a | app/how-i-build/page.tsx | built: ported how-i-build.html (hero-center, ladder SVG plate diagram archetype 5 with three rungs + animateMotion, rungs grid with buy/buy-plus/full-custom cards, pull quote + disclosure panel, cta strip); copy preserved verbatim; npm run build exit 0, /how-i-build generated static
2026-07-31T11:07:00+01:00 | lane-a | npm run build (final) | done: exit 0, 146/146 pages, all 5 units (apps index, data-app, artwork-manager, commerce, how-i-build) generate correctly; ready to commit + push
fatal: ambiguous argument 'origin\ds-impl\lane-b;.context\loop-status.md': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
2026-08-01T15:30:00+01:00 | lane-i | app/design-system/marketing-pages-extra.css | added: .sources/.source (disconnected-systems grid), .picture/.picture .arrow/.card--result (stock picture diagram), .layer-stack/.layer-tier/.layer-tier--base/.layer-tier--mid/.layer-tier--top (decoration layer model) — all deriving from --do-* tokens, no new hex
2026-08-01T15:30:00+01:00 | lane-i | app/problems/buy-vs-build/page.tsx | ported from problems-buy-vs-build.html mockup: hero-split, rungs (3 cards — buy/buy+custom layer/full custom), steps roadmap (3 phases), how-i-help (answer box), cta-strip; copy preserved verbatim
2026-08-01T15:30:00+01:00 | lane-i | app/problems/data-scattered/page.tsx | ported from problems-data-scattered.html mockup: hero-split, sources grid (6 cards with ✕ markers), causes grid--2 (4 items), how-i-help with Hanicks case study reference (164,752/127,135/77%), cta-strip
2026-08-01T15:30:00+01:00 | lane-i | app/problems/inventory-blind/page.tsx | ported from problems-inventory-blind.html mockup: hero-split, symptoms list (7 items), stock picture diagram (supplier feeds + warehouse movement = one stock number), how-i-help, cta-strip
2026-08-01T15:30:00+01:00 | lane-i | app/problems/legacy-system/page.tsx | ported from problems-legacy-system.html mockup: hero-split, symptoms list (7 items), layer-stack (3 tiers, column-reverse), how-i-help, cta-strip
2026-08-01T15:30:00+01:00 | lane-i | npm run build | done: exit 0, Turbopack, 153/153 pages, zero errors, all 4 new routes generated static
2026-08-01T15:30:00+01:00 | lane-i | git commit + push ds-impl2/lane-prob-new | done: commit 90be627, 5 files changed (+315/-272), pushed to origin, NOT merged to staging
2026-08-01T17:00:00+01:00 | port-direction-a | components/Header.tsx + components/Footer.tsx | rebuilt: Direction A "Three Paths" header/footer redesign from decoded-marketing mockup. Header: replaced mega-menu (Services/Sectors/Problems/Resources) with 3 path-group dropdowns (Something's wrong / Buy vs build / Ongoing leadership), each with label+descriptor two-line trigger and hover-open menu; flat links for Case Studies + Pricing; CTA "Book a free 60-min call" → /contact. Mobile: accordion sections per path group + flat links + About fallback + CTA. Accessibility preserved: skip-to-content, aria-expanded, aria-controls, aria-haspopup, role="menu"/"menuitem". Footer: brand+contact column (kept existing logo/LinkedIn/email/phone/booking CTA), three path columns (Diagnose, Buy vs build, Ongoing leadership), Company column, Find-it strip (curated 6 sector chips + 5 problem chips each with "All →" link), new tagline "Plain English. No jargon. No vendor agenda." Route mappings: /systems→/how-i-build, /work→/case-studies, /fractional-cto→/retained (header) + /locations/fractional-cto (footer, exists), /clients→/clients/login. BUILD BLOCKED: node_modules not installed in worktree; npm run build fails with "next not found"; tsc --noEmit produces 10K+ errors all from missing React types (TS7026), not from changed files. Dependencies must be installed before build verification.
2026-08-02T08:34:00+01:00 | finish-website | JOB 1: 4 problem pages + problems index built | created app/problems/bottleneck-growth/page.tsx, app/problems/ops-in-owners-head/page.tsx, app/problems/seasonal-peaks/page.tsx, app/problems/spreadsheet-addiction/page.tsx — all follow legacy-system/page.tsx structural template (Metadata, JsonLd FAQPage, BreadcrumbSchema, hero-split/symptoms/solution/how-i-help/cta-strip). Content ported from decoded-marketing HTML mockups, structured into existing CSS conventions (g-off/g-tint/g-white/g-navy, wrap, hero-split, eyebrow, lede, symptoms, answer, cta-strip, btn--primary, btn-ghost, card cause). Images reused from existing public/images/ (hero-craft.jpg, real-example.jpg). Created app/problems/page.tsx (problems index listing all 18 problems as card grid). Added 4 new problem chips to Footer.tsx problemChips (9 total: erp-failure, data-scattered, buy-vs-build, no-ops-owner, ai-paralysis, bottleneck-growth, ops-in-owners-head, seasonal-peaks, spreadsheet-addiction).
2026-08-02T08:34:00+01:00 | finish-website | JOB 2: Discovery Day → Clarity Audit rename | Renamed in chrome/CTA labels across 14 files. Changed files: components/Header.tsx (nav menu label), components/Footer.tsx (diagnoseLinks label), app/page.tsx (meta desc, schema, hero body CTA), app/clarity/page.tsx (full page: meta title/desc, OG, Twitter, eyebrow, section heading — product page is now "Clarity Audit" throughout), app/about/page.tsx (CTA link text), app/deliver/page.tsx (meta descs + "Book a Discovery Day" CTAs), app/transform/page.tsx (meta descs + CTAs + all in-body product references), app/problems/wrong-erp-software/page.tsx (CTA link text), app/problems/ai-paralysis/page.tsx (CTA link text), app/problems/buy-vs-build/page.tsx (pricing rule description references), app/resources/six-sigma/page.tsx (CTA body text), components/SectorPageDS.tsx (CTA link text), app/case-studies/tacklebag/page.tsx (CTA text), app/case-studies/hanicks/page.tsx (CTA text), app/case-studies/cobra-workwear/page.tsx (CTA text). LEFT UNCHANGED (historical/narrative): all client proposal data files (app/clients/[clientId]/data/*.ts), AcceptanceSection.tsx, case study narrative paragraphs describing past engagements, HeroVisual.tsx comment, DiscoveryDaySchematic.tsx, ThreeLayerSchematic.tsx. BUILD BLOCKED: node_modules not installed in worktree; npm run build fails with "next not found". Zero "Discovery Day" chrome/CTA occurrences remain in app/ or components/.

2026-08-02T10:45:00+01:00 | plate-foundation | PHASE 1: Plate diagram system foundation | Built components/Plate.tsx — React Client Component, 188 lines, ported frame() + titleBlock() from ds-plates.js into JSX (grid bg, corner ticks, amber spine tab, title/sub, no/rev/cls, title block). Ported IntersectionObserver reveal-on-scroll (sk-in on intersection, SMIL pause/unpause, prefers-reduced-motion gate). Refuses to render without no prop. sk-js class gate added in useEffect. Updated app/layout.tsx: removed DsPlatesLoader import+usage (would duplicate-inject frames). Updated app/page.tsx: all 3 homepage plates (DO-ART-902/202/302) converted from raw SVG to <Plate>. Token gaps: NONE — colors_and_type.css (via ds-layer.css) provides all --do-font-body/head/mono, --do-space-*, --do-text-xl, --do-tracking-wide, --do-weight-bold, --do-text-muted-on-dark, --do-text-secondary. BUILD BLOCKED: node_modules not installed. npm run build blocked.

2026-08-02T09:50:00+01:00 | plate-core-pages | PHASE 2: 11 core page plates ported | All 11 pages updated to use <Plate> component — inner SVG content ported from decoded-marketing HTML mockups, kebab-case attributes converted to camelCase (strokeWidth, fontFamily, letterSpacing, strokeLinecap, strokeDasharray, etc.), class= → className=. Pages with existing inline SVGs had them replaced with <Plate> (how-i-build .sk SVG, data-app .sk SVG, process-quality-system .sk SVG, clarity/deliver/transform .pl data-attr SVGs replaced with Plate children — custom defs removed since Plate generates its own). Build: exit 0, 158/158 pages, zero TypeScript errors (node_modules copied from parent D:\apps\decoded-ops-website\node_modules).

| Page | Drawing No. | Action |
|---|---|---|
| pricing | DO-ART-203 | Added (new plate section) |
| retained | DO-ART-204 | Added (new plate section) |
| how-i-build | DO-ART-302 | Replaced inline .sk SVG with Plate |
| how-i-build | DO-ART-112 | Added (separate plate section, tone=light) |
| apps | DO-ART-104 | Added (new plate section) |
| apps/data-app | DO-ART-105 | Replaced inline .sk SVG with Plate |
| apps/artwork-manager | DO-ART-106 | Added (new plate section) |
| apps/commerce | DO-ART-103 | Added (new plate section) |
| decoded-method | DO-ART-304 | Added (new plate section) |
| process-quality-system | DO-ART-305 | Replaced inline .sk SVG with Plate |
| clarity | DO-ART-306 | Converted inline .pl data-attr SVG to Plate |
| deliver | DO-ART-305 | Converted inline .pl data-attr SVG to Plate (with extra sk-dots animation from deliver.html) |
| transform | DO-ART-403 | Converted inline .pl data-attr SVG to Plate |

Judgement calls:
- how-i-build: Mockup shows BOTH DO-ART-302 (the ladder) AND DO-ART-112 (platform + layer). Added both as separate sections. DO-ART-112 is tone=light (only light-tone plate in the set).
- DO-ART-305 reused: process-quality-system, deliver, and transform all reference DO-ART-305 with p="pq". deliver.html has an extra sk-dots animated circle that process-quality-system.html lacks — ported the deliver variant into deliver/page.tsx, kept process-quality-system variant as-is.
- clarity/deliver/transform: Had existing inline .pl SVGs with data-* attributes (probably server-rendered by ds-plates.js). Replaced with <Plate> component, removed custom defs since Plate generates its own from the p prefix, kept only inner content groups.

2026-08-02T11:15:00+01:00 | fix-sectors | Restored dropped content on 3 of 9 sector pages | workwear: expanded features 3→5 (added Blank stock dependency, eCommerce disconnected from production), added 7-item "What I do" checklist, restored sector-specific CTA lede. promotional-merchandise: expanded features 3→5 (added Quote-to-order conversion costs, eCommerce disconnected from supply), added checklist, restored CTA lede. teamwear-clubwear: replaced unapproved TackleBag feature with 5 approved challenges (Squad-level personalisation data, Seasonal deadline pressure, Kit range churn, Sponsor logo management, The proof and approval bottleneck), added checklist, restored CTA lede. SectorPageDS.tsx: widened features type from tuple [Feature,Feature,Feature] to Feature[], changed grid from grid--3 to grid--2, added optional checklistHeading + checklist props with "What I do" section. SectorPageDS.module.css: added .checklist styles from mockup. All 9 sector pages build clean (exit 0, zero TypeScript errors).

2026-08-02T17:00:00+01:00 | plate-sectors | PHASE 2: Port plate diagrams for all 9 sector pages | Built. Mechanism: added optional `plate?: ReactNode` prop to SectorPageDS.tsx interface, rendered between hero and features in a g-navy/plate-scroll/plate-frame wrapper. For 4 delegated pages (workwear DO-ART-108, teamwear-clubwear DO-ART-109, schoolwear DO-ART-110, promotional-merchandise DO-ART-111): imported Plate, passed as `plate` prop. For 5 inline pages (garment-decoration DO-ART-107, print-promotional DO-ART-113, signs-graphics DO-ART-114, awards-engraving DO-ART-115, labels-packaging DO-ART-116): imported Plate, inserted plate section between hero and challenges in each page file. SVG content ported verbatim from decoded-marketing HTML mockups, kebab-case attrs converted to camelCase, class= to className=. All 9 sectors render distinct drawing numbers.

2026-08-02T12:15:00+01:00 | voice-audit-lane-d | Voice/brand-language audit — 16 flagship pages fixed | npm run build exit 0, zero TypeScript errors.

PER-FILE RESULTS:

| # | File | Em dashes | Pronoun fixes | End-to-end | Known issues |
|---|---|---|---|---|---|
| 1 | app/page.tsx | 15 | 0 | 0 | — |
| 2 | app/pricing/page.tsx | 16 | 0 | 0 | — |
| 3 | app/retained/page.tsx | 10 | 0 | 0 | — |
| 4 | app/how-i-build/page.tsx | 14 | 0 | 0 | — |
| 5 | app/about/page.tsx | 11 | 0 | 0 | — |
| 6 | app/clarity/page.tsx | 11 | 1 (We→I walk you through it) | 3 | Debrief para: "We walk through it together, so you can push back on it while I'm still in the room" → "I walk you through it, so you can push back while I'm still in the room." |
| 7 | app/deliver/page.tsx | 14 | 0 | 1 | — |
| 8 | app/transform/page.tsx | 16 | 0 | 2 | — |
| 9 | app/process-quality-system/page.tsx | 12 | 0 | 1 | — |
| 10 | app/decoded-method/page.tsx | 10 | 0 | 0 | Comment + metadata + Plate SVG text |
| 11 | app/apps/page.tsx | 7 | 0 | 0 | — |
| 12 | app/apps/data-app/page.tsx | 6 | 0 | 0 | — |
| 13 | app/apps/artwork-manager/page.tsx | 12 | 1 (we→that's the end of it) | 0 | CTA para: "I'll tell you that and we'll stop there" → "I'll tell you that, and that's the end of it." |
| 14 | app/apps/commerce/page.tsx | 11 | 0 | 0 | — |
| 15 | app/apps/crm/page.tsx | 12 | 0 | 0 | — |
| 16 | app/case-studies/page.tsx | 4 | 0 | 0 | — |

TOTALS: 181 em dashes replaced (74 literal U+2014 + 107 &mdash; entities, both in visible copy and metadata), 2 pronoun fixes, 7 "end to end" → "from start to finish"/"fully automated", 0 banned consultant-speak found, 0 overclaims requiring action.

VERIFIED: $([char]0x2014) grep = 0 hits, &mdash; grep = 0 hits, "end to end"/"end-to-end" = 0 hits, "we"/"We"/"our"/"Our"/"us"/"Us" = 0 hits in visible copy across all 16 files.

KNOWN-SPECIFIC-FINDING CONFIRMATION:
- clarity/page.tsx Debrief: now reads "I walk you through it, so you can push back while I'm still in the room. Then it's yours: to act on with me, or without me." — first person throughout, reads naturally.
- artwork-manager/page.tsx CTA: now reads "I'll tell you that, and that's the end of it." — single voice, reads naturally.

OVERCLAIMS AUDIT: All "always"/"never"/"every" instances reviewed — all are either checkable facts about Decoded Ops' own pricing/process rules (explicitly permitted), statements about the audit/delivery process (documented and checkable), or properly qualified ("almost never"). Zero "biggest" hits. No fixes required.

2026-08-02T19:30:00+01:00 | voice-audit-verify | Verification pass — all 16 files confirmed clean | Ran this lane's full audit against all 16 listed files. Searches performed: em dashes (U+2014) = 0, &mdash; HTML entities = 0, "end to end"/"end-to-end" = 0, "we "/"our "/"us " in visible copy = 0, banned consultant-speak (leverage/synergy/holistic/seamless/journey/pain points/moving the needle/best-in-class/best practice/circle back/reach out/unlock/game-changer/delve/robust/crucial) = 0, overclaims audit reviewed all always/never/every hits = 0 requiring action. npm run build exit 0, zero TypeScript errors, 159/159 pages.

KNOWN-SPECIFIC-FINDING VERIFICATION (re-confirmed):
- clarity/page.tsx:141: "I walk you through it, so you can push back while I'm still in the room." — first person, reads naturally.
- artwork-manager/page.tsx:248: "I'll tell you that, and that's the end of it." — single voice, reads naturally.

RESULT: Zero new fixes needed. voice-audit-lane-d's prior pass (line 58) covered all violations. This verification lane confirms the 16 files are fully compliant against all 5 rule categories.
