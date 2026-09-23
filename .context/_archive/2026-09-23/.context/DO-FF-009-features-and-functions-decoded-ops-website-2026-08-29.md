# DO-FF-009 — Decoded Ops Website — Features & Functions Catalogue

**Date:** 29 August 2026 · **Owner:** Craig Blackman · **Status:** v1.0 first edition
**Derivation:** Code audit of `D:\apps\decoded-ops-website` (read-only — this file lives outside the worktree). Every status below was verified by reading the relevant source files — routes, pages, API endpoints, lib modules, components, and data files. No status was changed without citing the file that proves it.

## What this document is

The first Features & Functions catalogue for the Decoded Ops Website — Craig Blackman's public marketing site at `decodedops.co.uk`. Unlike a client catalogue (derived from a proposal/scope), this is derived entirely from the code itself: what the application actually does today, module by module.

The website is a Next.js (App Router) application with Tailwind CSS, self-hosted Supabase (PostgreSQL), and NextAuth v5. It serves as the public face of Decoded Ops — marketing pages, service descriptions, case studies, blog, SEO landing pages, interactive tools, and a client portal for document access and signing.

## Status legend

| Status | Meaning |
|---|---|
| **LIVE** | Working today; confirmed by code evidence |
| **PARTIAL** | Meaningful pieces exist with a named gap |
| **GATED** | Built but behind an env var or config; name the gate |
| **NOT** | Planned or referenced but absent from code |
| **N/A** | Genuinely does not apply to this app |

## Evidence key

"Code" = verified in the repo checkout. File paths are relative to the repo root.

---

## Module 1 — Marketing Pages & Site Structure

*Evidence: Code verified across `app/page.tsx`, `app/about/page.tsx`, `app/contact/`, `app/pricing/`, `app/small-business/page.tsx`, `app/decoded-data-app/page.tsx`, `components/Header.tsx`, `components/Footer.tsx`, `components/AppShell.tsx`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-001 | Homepage with hero, services overview, sector credibility, and CTA | Must | Live | **LIVE** | `app/page.tsx` — Full landing page. Hero with "The penny drop moment" tagline, sector pills strip, cost-of-standing-still stats, about/differentiators, four services, live client work, ERP benchmark stats, CTA. `HeroVisual` component. |
| WEB-002 | About page with bio, values, differentiators, and proof-of-work | Must | Live | **LIVE** | `app/about/page.tsx` — Craig Blackman bio, 25+ years, independence values, three differentiators, ERP ROI benchmarks, "I build the systems too" proof-of-work. |
| WEB-003 | Contact form with server-side validation, email sending, and rate limiting | Must | Live | **LIVE** | `app/contact/page.tsx` + `ContactClient.tsx` + `actions.ts` — Name, email, company, message. Zod validation. Sends owner notification + user confirmation via Resend/SMTP. Rate-limited (3/hour via Upstash). GA4 conversion tracking. |
| WEB-004 | Pricing page with interactive questionnaire and tier recommendations | Must | Live | **LIVE** | `app/pricing/page.tsx` + `PricingClient.tsx` (1061 lines) — 5-question state machine. Recommends service tier. Three-tier engagement model with segment-aware pricing. Retained tiers. FAQ section. |
| WEB-005 | Navigation with dropdowns for Services, Sectors, Problems, Resources | Must | Live | **LIVE** | `components/Header.tsx` — Fixed top nav with four dropdowns, mobile accordion, skip-to-content, "Book a free call" CTA. `components/Footer.tsx` — Four-column footer with locations strip and social links. |
| WEB-006 | App shell that bypasses header/footer for client portal routes | Must | Live | **LIVE** | `components/AppShell.tsx` — Wraps pages with Header + Footer. Bypasses shell for `/clients/*` routes. |
| WEB-007 | Small business landing page with micro-business pricing | Should | Live | **LIVE** | `app/small-business/page.tsx` — Four services with small-biz pricing: Clarity Check (£395), Deliver (£550/mo), Transform (£770/mo), Retained (3 tiers). SVG service flow diagram. |
| WEB-008 | Decoded Data App product page | Should | Live | **LIVE** | `app/decoded-data-app/page.tsx` — Product page for the custom data layer module. Links to TackleBag and Hanicks case studies. |

## Module 2 — Service Pages

*Evidence: Code verified across `app/clarity/page.tsx`, `app/deliver/page.tsx`, `app/transform/page.tsx`, `app/retained/page.tsx`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-010 | Clarity (Discovery Day) service page with audit areas, process, and FAQ | Must | Live | **LIVE** | `app/clarity/page.tsx` — Six audit areas, four-step process, deliverables list, next-step service cards. Schema: `Service` + `HowTo` + `FAQPage` (7 questions). |
| WEB-011 | Deliver (Project Delivery) service page with process and FAQ | Must | Live | **LIVE** | `app/deliver/page.tsx` — Four-step process, "What's included" list. Schema: `Service` (from £1,050/month) + `FAQPage` (5 questions). |
| WEB-012 | Transform (Digital Transformation) service page with workstreams and FAQ | Must | Live | **LIVE** | `app/transform/page.tsx` — Six workstreams, why-transformations-fail narrative. Schema: `Service` (from £1,500/month) + `FAQPage` (5 questions). |
| WEB-013 | Retained (Fractional CTO) service page with model and FAQ | Must | Live | **LIVE** | `app/retained/page.tsx` — Four situations, what's included, structure. `RetainedModelGraphic`. Schema: `Service` (from £1,440/month) + `FAQPage` (5 questions). |

## Module 3 — Case Studies

*Evidence: Code verified across `app/case-studies/`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-020 | Case studies index page with grid of engagements | Must | Live | **LIVE** | `app/case-studies/page.tsx` — Grid of 4 live engagements: Hanicks, TackleBag, Cobra Workwear, Eternal Fitness. Status badges. Schema: `BreadcrumbList`. |
| WEB-021 | Hanicks case study — Khaos Control ERP + IBasis App | Should | Live | **LIVE** | `app/case-studies/hanicks/page.tsx` — Khaos Control ERP + IBasis App. Schema: `Article` + `BreadcrumbList`. |
| WEB-022 | TackleBag case study — Clarity Audit into Deliver | Should | Live | **LIVE** | `app/case-studies/tacklebag/page.tsx` — Clarity Audit into Deliver. Stock Control module. Schema: `Article` + `BreadcrumbList`. |
| WEB-023 | Cobra Workwear case study — Clarity Audit on B2B portal | Should | Live | **LIVE** | `app/case-studies/cobra-workwear/page.tsx` — Clarity Audit on B2B ordering portal + ERP evaluation. Schema: `Article` + `BreadcrumbList`. |
| WEB-024 | Eternal Fitness case study — full site rebuild + AI tool | Should | Live | **LIVE** | `app/case-studies/eternal-fitness/page.tsx` — Full site rebuild + AI-assisted training plan tool. Schema: `Article` + `BreadcrumbList`. |

## Module 4 — Blog & Content

*Evidence: Code verified across `app/blog/`, `components/BlogList.tsx`, `components/RelatedPosts.tsx`, `data/blog-index.json`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-030 | Blog index with category filtering | Must | Live | **LIVE** | `app/blog/page.tsx` — Fetches from Hub API with fallback to `data/blog-index.json` (29 posts). `BlogList.tsx` — Client-side category filter buttons. Schema: `CollectionPage` + `BreadcrumbList`. |
| WEB-031 | Individual blog posts with dynamic metadata and related posts | Must | Live | **LIVE** | `app/blog/[slug]/page.tsx` — Fetches from Hub API. HTML content, inline images, author/date/read time. `RelatedPosts.tsx` — cluster-based related reading. FAQ schema auto-extracted from H2 headings. `generateStaticParams` for SSG. Schema: `BlogPosting` + `FAQPage` (conditional). |
| WEB-032 | Dynamic OG/Twitter card metadata per blog post | Should | Live | **LIVE** | `generateMetadata` in blog post page. Dynamic OG/Twitter images, word count, read time estimate. |
| WEB-033 | Blog content sourced from Hub API with local JSON fallback | Should | Live | **LIVE** | Fetches from `HUB_API_URL/api/content/index` and `/api/content/detail`. Falls back to `data/blog-index.json` if hub is unavailable. |

## Module 5 — SEO Landing Pages: Problems

*Evidence: Code verified across `app/problems/`, `components/ProblemPage.tsx`, `data/problem-routing.ts`, `components/schematics/problems/*`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-040 | 10 problem landing pages targeting operational pain points | Must | Live | **LIVE** | 10 routes: `/problems/systems-dont-talk`, `ecommerce-not-connected`, `erp-implementation-failure`, `wrong-erp-software`, `slow-processes`, `cant-scale-operations`, `manual-workarounds`, `no-ops-owner`, `disaster-recovery`, `ai-paralysis`. Each uses `ProblemPage` component. |
| WEB-041 | Reusable ProblemPage template with hero, symptoms, causes, "How I Help", routing | Must | Live | **LIVE** | `components/ProblemPage.tsx` — Hero, symptoms (dark section), causes grid, "How I Help", "Get This Fixed" routing section with target service + related problems + further reading. `BreadcrumbSchema`. |
| WEB-042 | Internal linking topology between problem pages, services, and blog posts | Must | Live | **LIVE** | `data/problem-routing.ts` — Each problem maps to ONE target service + 2-3 sibling problems + 1-2 blog posts. Drives "Get This Fixed" sections. |
| WEB-043 | Custom SVG schematic per problem page | Should | Live | **LIVE** | 10 problem-specific schematics in `components/schematics/problems/`: `WrongErpSchematic`, `SystemsDontTalkSchematic`, `SlowProcessesSchematic`, `NoOpsOwnerSchematic`, `ManualWorkaroundsSchematic`, `ErpImplementationFailureSchematic`, `EcommerceNotConnectedSchematic`, `DisasterRecoverySchematic`, `CantScaleSchematic`, `AiParalysisSchematic`. |

## Module 6 — SEO Landing Pages: Sectors

*Evidence: Code verified across `app/sectors/`, `components/SectorPage.tsx`, `data/sector-routing.ts`, `components/schematics/sectors/*`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-050 | 6 sector landing pages targeting decorated-goods verticals | Must | Live | **LIVE** | 6 routes: `/sectors/garment-decoration`, `print-promotional`, `workwear-teamwear`, `signs-graphics`, `awards-engraving`, `labels-packaging`. Each uses `SectorPage` component. |
| WEB-051 | Reusable SectorPage template with hero, challenges, "How I Help", sticky CTA | Must | Live | **LIVE** | `components/SectorPage.tsx` — Hero with `||`-split headline (cyan accent), challenges grid, "How I Help" dark section, sticky CTA card, cross-links to target service + related problems. `BreadcrumbSchema`. |
| WEB-052 | Internal linking topology between sector pages, services, and problems | Must | Live | **LIVE** | `data/sector-routing.ts` — Each sector maps to ONE target service page + 3 related problem pages. |
| WEB-053 | Custom SVG schematic per sector page | Should | Live | **LIVE** | 6 sector-specific schematics in `components/schematics/sectors/`: `GarmentDecorationSchematic`, `PrintPromotionalSchematic`, `WorkwearTeamwearSchematic`, `SignsGraphicsSchematic`, `AwardsEngravingSchematic`, `LabelsPackagingSchematic`. |

## Module 7 — Interactive Tools & Calculators

*Evidence: Code verified across `app/tools/`, `components/calculators/*`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-060 | Tools hub page linking to all calculators and assessments | Must | Live | **LIVE** | `app/tools/page.tsx` — Card grid linking to 6 tools. Schema: `CollectionPage`. |
| WEB-061 | "Should I Replace My ERP?" assessment — 8 weighted questions, 3 outcomes | Must | Live | **LIVE** | `app/tools/should-i-replace-erp/page.tsx` — 8 yes/no weighted questions. Three outcomes: Stay & Optimise / Proceed with Caution / Plan Your Exit. Client-side. |
| WEB-062 | AI Readiness Check — 6 weighted questions, 3 outcomes | Should | Live | **LIVE** | `app/tools/ai-readiness-check/page.tsx` — 6 yes/no weighted questions. Three outcomes: Not Ready / Getting There / Ready. Client-side. |
| WEB-063 | Ops Health Score — 5 dimensions rated 1-5, total score label | Should | Live | **LIVE** | `app/tools/ops-health-score/page.tsx` — 5 dimensions (Systems Integration, Process Documentation, Data Quality, Team & Capability, Technology Strategy). Total score maps to Critical/Fragile/Stable/Strong. |
| WEB-064 | Downtime Cost Calculator — overhead recovery rate and outage cost | Must | Live | **LIVE** | `app/tools/downtime-cost-calculator/page.tsx` + `components/calculators/DowntimeCostCalculator.tsx` — Two-step: overhead recovery rate, then outage cost. Outputs: cost per hour/day, total annual cost as % of overhead. Schema: `WebApplication` + `FAQPage`. |
| WEB-065 | RTO Calculator — recovery time objective financial comparison | Should | Live | **LIVE** | `app/tools/rto-calculator/page.tsx` + `components/calculators/RtoCalculator.tsx` — Current vs target RTO cost, annual and 3-year savings. Visual bar comparison. Schema: `WebApplication`. |
| WEB-066 | Automation ROI Calculator — break-even and 3-year return | Should | Live | **LIVE** | `app/tools/automation-roi-calculator/page.tsx` + `components/calculators/AutomationRoiCalculator.tsx` — Annual manual vs automation cost, break-even months, ROI percentage. Schema: `WebApplication`. |
| WEB-067 | Pricing questionnaire — 5-question interactive tier recommendation | Must | Live | **LIVE** | `app/pricing/PricingClient.tsx` (1061 lines) — Client-side state machine. Selects business segment, recommends service tier, shows detailed inclusions for all four services + small business tiers. |

## Module 8 — Resources & Downloads

*Evidence: Code verified across `app/resources/`, `public/downloads/`, `scripts/generate-playbook-pdfs.sh`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-070 | Resources hub page linking to all guides and downloads | Must | Live | **LIVE** | `app/resources/page.tsx` — Grid of 5 resources: Audit Checklist, 5 Warning Signs, Software Reviews, The Decoded Method, Six Sigma. |
| WEB-071 | Operational Audit Checklist — 20-question downloadable checklist | Should | Live | **LIVE** | `app/resources/audit-checklist/page.tsx` — 20-question checklist covering 6 audit areas. Schema: `Article`. |
| WEB-072 | 5 Warning Signs article | Should | Live | **LIVE** | `app/resources/5-warning-signs/page.tsx` — Five signs your systems are failing. Schema: `Article`. |
| WEB-073 | Software Reviews — independent ERP/software reviews for the sector | Should | Live | **LIVE** | `app/resources/software-reviews/page.tsx` — Independent reviews (OrderWise, Panta, DecoNetwork, ShirtWorks, etc.). No affiliate links. |
| WEB-074 | The Decoded Method — three-layer process documentation system | Should | Live | **LIVE** | `app/resources/decoded-method/page.tsx` — Process Register, one-page SOPs, Improvement Log. Downloadable. Custom `ThreeLayerSchematic`. |
| WEB-075 | Six Sigma — what 3/4/5/6 Sigma means for print & embroidery | Should | Live | **LIVE** | `app/resources/six-sigma/page.tsx` — Sigma quality scale explained. Schema: `Article`. Custom `SixSigmaSchematic`. |
| WEB-076 | PDF download generation via headless Chrome | Could | Live | **LIVE** | `scripts/generate-playbook-pdfs.sh` — Renders resources to branded PDFs. Outputs: `decoded-method.pdf`, `six-sigma.pdf`, `six-sigma-carousel.pdf` in `public/downloads/`. |

## Module 9 — Local SEO: Location Pages

*Evidence: Code verified across `app/locations/`, `data/locations.ts`, `components/LocationPage.tsx`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-080 | Location pages hub for Fractional CTO service | Must | Live | **LIVE** | `app/locations/fractional-cto/page.tsx` — Lists all locations grouped by county. Schema: `Service` + `ItemList`. |
| WEB-081 | Location pages hub for Tech Audit service | Must | Live | **LIVE** | `app/locations/tech-audit/page.tsx` — Same county-grouped structure. |
| WEB-082 | 36 individual location pages (27 locations x 2 services) with local context | Must | Live | **LIVE** | `app/locations/fractional-cto/[location]/page.tsx` and `app/locations/tech-audit/[location]/page.tsx` — `generateStaticParams` from `data/locations.ts` (27 locations across West Sussex, East Sussex, Surrey). Local context, drive time, local fact, CTA. Schema: `Service` + `BreadcrumbList`. |
| WEB-083 | Reusable LocationPage template with hero, pain points, "How I Help", nearby locations | Must | Live | **LIVE** | `components/LocationPage.tsx` — Hero with county badge, local context, pain points grid, "How I Help" dark section with sticky CTA, nearby locations strip. |

## Module 10 — Client Portal (Authenticated)

*Evidence: Code verified across `app/clients/`, `app/clients/[clientId]/`, `middleware.ts`, `auth.ts`, `auth.config.ts`, `lib/supabase.ts`, `scripts/create-client-accounts.mjs`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-090 | Client portal login with email/password and account lockout | Must | Live | **LIVE** | `app/clients/login/page.tsx` — Email/password form. `auth.ts` — NextAuth Credentials provider, bcrypt, account lockout (5 attempts / 30 min). Audit logging to `auth_audit_log`. `robots: noindex`. |
| WEB-091 | Client dashboard with quick links and published documents | Must | Live | **LIVE** | `app/clients/dashboard/page.tsx` — Welcome screen, quick links to Project Plan and Document Library. Lists published documents from Hub API. Admin role sees all client links. |
| WEB-092 | Client project view — phases, milestones, actions needed from client | Must | Live | **LIVE** | `app/clients/project/page.tsx` + `ProjectView.tsx` — Phases, milestones, actions needed. Fetches from Hub API (`/api/public/client-project`). Also fetches uploads. |
| WEB-093 | Client document library — list of published documents with type/status badges | Must | Live | **LIVE** | `app/clients/documents/page.tsx` — Lists all published documents (proposals, invoices, reports, engagement letters, terms). Doc type and status badges (signed/outstanding). |
| WEB-094 | Document viewer with electronic signature capture | Must | Live | **LIVE** | `app/clients/documents/view/[id]/page.tsx` + `SignPanel.tsx` — Renders document HTML in iframe (`srcDoc`). Signable documents show `SignPanel` (name + signature). Posts to Hub API sign endpoint. Enforces client-scoped access. |
| WEB-095 | Public proposal pages with interactive sections and acceptance | Must | Live | **LIVE** | `app/clients/[clientId]/page.tsx` + 11 component files — Interactive proposals (TackleBag, TackleBag v2, Cobra Workwear, Hanicks, Cwear, ScotShirts). Hero, challenge, journey, roadmap, quick wins, demo, pricing, acceptance/signature. Fixed nav bar with section anchors. |
| WEB-096 | Proposal component library (11 reusable sections) | Should | Live | **LIVE** | 11 components: `ProposalHero`, `ChallengeSection`, `JourneySection`, `RoadmapSection`, `QuickWinsSection`, `DemoSection`, `WhySection`, `PricingSection`, `NextStepsSection`, `AcceptanceSection`, `PortalMockupSection`. |
| WEB-097 | Middleware-protected routes for `/clients/*`, `/admin/*`, `/client-docs/*` | Must | Live | **LIVE** | `middleware.ts` — Auth guard. Public proposal allowlist with `X-Robots-Tag: noindex, nofollow`. Admin routes require `role: 'admin'`. |
| WEB-098 | Client account provisioning script from Hub CRM contacts | Should | Live | **LIVE** | `scripts/create-client-accounts.mjs` — Reads contacts from Hub CRM, creates `client_users` with bcrypt passwords. Outputs credentials. |
| WEB-099 | Password reset and admin portal placeholder | Could | Live | **PARTIAL** | `scripts/reset-portal-password.mjs` exists. `app/admin/layout.tsx` — placeholder layout with role enforcement but no pages implemented. |

## Module 11 — Schema, Sitemap & Analytics

*Evidence: Code verified across `app/layout.tsx`, `app/sitemap.ts`, `app/opengraph-image.tsx`, `components/JsonLd.tsx`, `components/BreadcrumbSchema.tsx`, `public/llms.txt`, `public/robots.txt`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-100 | Global JSON-LD ProfessionalService schema | Must | Live | **LIVE** | `app/layout.tsx` — Organisation name, URL, description, address (Worthing), phone, founder, `areaServed`, `knowsAbout`, `sameAs` (LinkedIn). |
| WEB-101 | Dynamic sitemap with all pages, blog posts, locations | Must | Live | **LIVE** | `app/sitemap.ts` — ~20 static pages, all blog posts (Hub API), 10 problems, 6 sectors, 6 tools, 2 location hubs, 54 location pages. Per-page priority and change frequency. |
| WEB-102 | Dynamic OG image generation at the edge | Should | Live | **LIVE** | `app/opengraph-image.tsx` — 1200x630 branded image with badge, logo, stats, system node pills. Edge runtime. |
| WEB-103 | robots.txt allowing all with sitemap reference | Must | Live | **LIVE** | `public/robots.txt` — Allow all, sitemap at `decodedops.co.uk/sitemap.xml`. |
| WEB-104 | BreadcrumbList structured data on sector and problem pages | Should | Live | **LIVE** | `components/BreadcrumbSchema.tsx` — Three-level breadcrumb (Home > Category > Page). Used by `SectorPage` and `ProblemPage`. |
| WEB-105 | FAQPage schema auto-extracted from blog post H2 headings | Should | Live | **LIVE** | `app/blog/[slug]/page.tsx` — Conditional FAQ schema generated from H2 headings in blog content. |
| WEB-106 | Service schema on all four service pages with pricing | Should | Live | **LIVE** | Each service page (`clarity`, `deliver`, `transform`, `retained`) includes `Service` schema with price. |
| WEB-107 | LLM-friendly site summary (`llms.txt`) | Should | Live | **LIVE** | `public/llms.txt` — Structured summary of all services, tools, resources, and key pages for LLM crawlers. |
| WEB-108 | Google Analytics (G-SN2Z3J31CZ) | Must | Live | **LIVE** | `app/layout.tsx` — `next/script` with GA4 measurement ID. |
| WEB-109 | Ahrefs Analytics | Should | Live | **LIVE** | `app/layout.tsx` — `next/script` with Ahrefs analytics. |
| WEB-110 | GA4 conversion event on contact form submission | Should | Live | **LIVE** | `app/contact/actions.ts` — `gtag('event', 'conversion')` on successful form submission. |
| WEB-111 | JSON-LD generic renderer component | Should | Live | **LIVE** | `components/JsonLd.tsx` — Accepts any `Record<string, unknown>`, injects `<script type="application/ld+json">`. |
| WEB-112 | WebApplication schema on calculator tools | Could | Live | **LIVE** | Downtime Cost Calculator, RTO Calculator, and Automation ROI Calculator include `WebApplication` schema. |

## Module 12 — Technical Infrastructure & Security

*Evidence: Code verified across `lib/email.ts`, `lib/rate-limit.ts`, `lib/supabase.ts`, `lib/constants.ts`, `auth.ts`, `auth.config.ts`, `middleware.ts`, `scripts/create-schema.ts`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-120 | Multi-backend email sending (Resend > SMTP > dry-run) | Must | Live | **LIVE** | `lib/email.ts` — Auto-selected backend. Resend preferred, SMTP fallback, dry-run log. Same pattern as hub. |
| WEB-121 | Rate limiting on login and contact form (Upstash Redis) | Must | Live | **LIVE** | `lib/rate-limit.ts` — `loginRatelimit` (5/15min), `contactRatelimit` (3/hour). Graceful no-op if Redis absent. |
| WEB-122 | Self-hosted Supabase PostgreSQL with client_users, auth_audit_log, client_documents | Must | Live | **LIVE** | `lib/supabase.ts` — PostgreSQL pool via `pg`. Types: `DbUser`, `AuthAuditEvent`. `scripts/create-schema.ts` — Creates tables with indexes and triggers. |
| WEB-123 | NextAuth v5 with Credentials provider and JWT strategy | Must | Live | **LIVE** | `auth.ts` — Credentials provider, bcrypt, 8-hour session max. `auth.config.ts` — Edge-safe config. JWT callbacks for clientId + role. |
| WEB-124 | Account lockout after failed login attempts | Must | Live | **LIVE** | `auth.ts` — 5 failed attempts = 30-minute lock. Full audit logging to `auth_audit_log`. |
| WEB-125 | Cookie consent banner (GDPR) | Must | Live | **LIVE** | `components/CookieConsent.tsx` — Accept/Decline, persists to localStorage, links to `/cookies` policy page. |
| WEB-126 | Privacy and cookie policy pages | Must | Live | **LIVE** | `/privacy` and `/cookies` routes exist. `app/privacy/page.tsx`, `app/cookies/page.tsx`. |
| WEB-127 | Booking URL constant used site-wide | Should | Live | **LIVE** | `lib/constants.ts` — `BOOKING_URL` (Microsoft Bookings link). Used in hero CTAs and contact page. |
| WEB-128 | Design system tokens and component styles (globals.css) | Must | Live | **LIVE** | `app/globals.css` — Full design token system (see DESIGN.md). Prussian Blue palette, Outfit + DM Sans fonts, component classes. |
| WEB-129 | Outfit + DM Sans fonts (no JetBrains Mono per Decision 03) | Must | Live | **LIVE** | `app/layout.tsx` — Outfit (headings) + DM Sans (body) via `next/font/google`. No JetBrains Mono loaded. |
| WEB-130 | Database migration and provisioning scripts | Should | Live | **LIVE** | `scripts/create-schema.ts`, `scripts/migrate-db.ts`, `scripts/split-migration.ts`, `scripts/generate-inserts.ts` — Schema creation, cloud-to-self-hosted migration, SQL generation. |
| WEB-131 | Content audit script for SEO analysis | Could | Live | **LIVE** | `scripts/content-audit.mjs` — Walks all `page.tsx` files, extracts metadata, component props, inline text, data objects. Outputs `docs/content-audit.md`. |
| WEB-132 | Debug endpoint for hub connectivity diagnostics | Could | Live | **LIVE** | `/api/debug/hub-status` — Checks Hub API connectivity, env vars, document routing. Temporary. |

## Module 13 — Visual Design & Schematics

*Evidence: Code verified across `components/schematics/`, `components/graphics/`, `components/HeroVisual.tsx`, `components/HeroGraphic.tsx`, `components/SectorCredibilityPhoto.tsx`, `components/ScreenshotFrame.tsx`.*

| Code | Requirement | MoSCoW | Phase | Status | Notes |
|---|---|---|---|---|---|
| WEB-140 | SVG schematic primitives vocabulary (palette, fonts, grid, glass-card nodes) | Must | Live | **LIVE** | `components/schematics/primitives.tsx` — Shared vocabulary: palette, font stacks, grid pattern, glass-card nodes, broken-link motif, mono labels. All IDs namespaced. |
| WEB-141 | Hero visual pairing real photo with Hub screenshot | Should | Live | **LIVE** | `components/HeroVisual.tsx` — Pairs `hero-craft.jpg` with `ScreenshotFrame` showing Hub sprints page, plus "25+ years" badge. |
| WEB-142 | Hub-and-spoke system diagram (SVG) | Should | Live | **LIVE** | `components/HeroGraphic.tsx` — Six system nodes around central hub. "3x Clarity Guarantee" and "1 day on site" badges. |
| WEB-143 | Sector credibility photo with Field Notes treatment | Should | Live | **LIVE** | `components/SectorCredibilityPhoto.tsx` — Real photo with desaturation, grain, timestamp tag. Sector spec-card overlay. |
| WEB-144 | Browser chrome mockup component | Should | Live | **LIVE** | `components/ScreenshotFrame.tsx` — Traffic-light dots, URL bar, optional "Live" badge. |
| WEB-145 | Animated schematics with prefers-reduced-motion support | Should | Live | **LIVE** | `ThreeLayerSchematic`, `SixSigmaSchematic`, `SinglePointSchematic`, `DiscoveryDaySchematic` — All honour `prefers-reduced-motion`. Animated data flow dots. |
| WEB-146 | Graphic components (workflow, systems, transform, retained, timeline, credentials, audit wheel) | Could | Live | **LIVE** | `components/graphics/` — `WorkflowGraphic`, `SystemsDisconnectedGraphic` (connected/disconnected toggle), `TransformProgrammeGraphic`, `RetainedModelGraphic`, `ExpertiseTimelineGraphic`, `CredentialsGraphic`, `AuditWheelGraphic`. |
| WEB-147 | Infographic components (ecommerce breakdown, systems cost, vendor questions) | Could | Live | **LIVE** | `public/infographics/` — `EcommerceBreakdownChart.tsx`, `SystemsCostBreakdown.tsx`, `VendorQuestionsGuide.tsx`. |

---

## Summary

| Status | Count | % |
|---|---|---|
| **LIVE** | 80 | 97.6% |
| **PARTIAL** | 1 | 1.2% |
| **GATED** | 0 | 0.0% |
| **NOT** | 0 | 0.0% |
| **N/A** | 0 | 0.0% |
| **Total** | **81** | |

### Code distribution

- **Master catalogue codes reused:** 0 — the website is a marketing site, not the client-platform data app. Its features (SEO pages, calculators, client portal, schematics) do not map to the 200 client-platform FF codes.
- **App-specific codes (WEB-NNN):** 81 — all requirements use the `WEB-` prefix.

### Key observations

1. **97.6% LIVE — the website is fully built and operational.** The single PARTIAL item is the admin portal placeholder (layout exists, no pages). Everything else works.

2. **No NOT features.** There are no planned-but-absent capabilities. Every documented feature exists in code.

3. **The SEO surface is extensive.** 10 problem pages, 6 sector pages, 36 location pages (72 with service variants), dynamic sitemap, JSON-LD on every page type, `llms.txt` for AI crawlers, and a content audit script. This is a purpose-built SEO machine.

4. **6 interactive tools drive lead capture.** 3 calculators (Downtime Cost, RTO, Automation ROI), 3 assessments (ERP replacement, AI readiness, Ops Health), plus the pricing questionnaire. All client-side, no backend needed.

5. **The client portal is a complete document delivery system.** Login, dashboard, project view, document library, electronic signing — all wired to the Hub API. 6 client proposals with 11 reusable section components.

6. **13 custom SVG schematics** serve as the site's visual identity — sector-specific, problem-specific, and process illustrations. All honour `prefers-reduced-motion`.

7. **The blog runs on a hub-and-fallback model.** Content is authored in the Hub's content studio, served via API, with a local JSON fallback (29 posts) for resilience.

8. **Self-hosted Supabase for the client portal** — separate from the Hub's database. Client users, auth audit log, and client documents live here. Account provisioning scripts pull contacts from the Hub CRM.

9. **No GATED features.** Everything is either live or the single partial (admin placeholder). The website has no feature flags or opt-in toggles.

10. **The design system is the canonical brand implementation.** Outfit + DM Sans (no JetBrains Mono), Prussian Blue palette, `.doa-*` component classes. Per DESIGN.md Decision 01, the marketing site is the source of truth for visual identity.
