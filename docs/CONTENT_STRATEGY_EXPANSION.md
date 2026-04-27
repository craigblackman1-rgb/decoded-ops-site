# Decoded Ops — Content Strategy Expansion Plan
**Version:** 1.0  
**Created:** 2026-04-23  
**Status:** Planning — awaiting execution  
**Owner:** Craig Blackman / Decoded Ops

---

## Strategic Context

### Current State (as of Apr 23, 2026)

The site and social content are heavily ERP-biased:
- 3 published blog posts — all ERP/eCommerce integration focused
- 12-week LinkedIn calendar — ERP failure stories, sector observations
- 4 Problems pages — all ERP-related (implementation failure, wrong ERP, systems disconnect)
- 6 Sector pages — all garment decoration / print niche
- 0 calculators, 0 software reviews, 0 whitepapers, 0 guides, 0 emotional content

### Target State

**Operations-first positioning** that naturally encompasses:
- ERP, CRM, eCommerce, IT
- Processes, Workflows, Automation
- AI/LLM introduction and implementation
- Disaster Recovery, Outages, Downtime, Support
- The human/emotional reality of running and transforming a business

Free value content that earns trust and drives discovery calls:
- Interactive calculators (ROI, downtime cost, time savings)
- Free tools/apps (artwork manager, process templates)
- Software reviews (honest, operator-led)
- Whitepapers and implementation guides
- Q&A sessions (LinkedIn and/or website)
- Psychology and emotional reality content series

---

## Content Pillars (Updated)

| Pillar | Topics | Formats |
|--------|--------|---------|
| **1. Operational Reality** | The truth about running operations, emotional cost, leadership pressure, decisions at 2am | LinkedIn, Blog |
| **2. Systems & Technology** | ERP, CRM, eCommerce, IT, AI/LLM — honest operator view, not vendor spin | Blog, Reviews, LinkedIn |
| **3. Process & Workflow** | Automation, workflow design, supplier feeds, integrations, data quality | Guides, LinkedIn, Blog |
| **4. Risk & Recovery** | Disaster recovery, outages, downtime cost, support gaps, what to do when it fails | LinkedIn, Blog, Checklist |
| **5. Free Tools & Resources** | Calculators, apps, checklists, templates — things people actually use | Website tools, LinkedIn |
| **6. Straight Talk Q&A** | Honest answers to questions people are afraid to ask | LinkedIn Live/Newsletter, FAQ page |

---

## Phase 1 — Positioning Reset & Content Architecture
**Goal:** Reframe the site and social strategy around Operations-first, not ERP-first  
**Session type:** Planning + content writing  
**Estimated effort:** 1 session

### Tasks

**1.1 — Update website Problems section**

Current 4 problems are all ERP-specific. Add 4 new problem pages covering:
- `/problems/systems-falling-over` — outages, downtime, no DR plan
- `/problems/no-one-owns-operations` — gap between IT, ops, and leadership
- `/problems/manual-workarounds-everywhere` — process debt, spreadsheet addiction
- `/problems/ai-nobody-knows-where-to-start` — AI anxiety and paralysis

Files to create:
- `app/problems/systems-falling-over/page.tsx`
- `app/problems/no-one-owns-operations/page.tsx`
- `app/problems/manual-workarounds-everywhere/page.tsx`
- `app/problems/ai-nobody-knows-where-to-start/page.tsx`

**1.2 — Update navigation (Header.tsx)**

Add "Resources" to the main nav with dropdown:
- Free Calculators
- Software Reviews
- Guides & Whitepapers
- Q&A / Ask Craig

Update Problems dropdown to show all 8 problems (not just 4).

File to edit: `components/Header.tsx`

**1.3 — Update homepage messaging**

Current homepage leans heavily on ERP. Update:
- Hero tagline to reflect Operations-first (not ERP-first)
- Services section intro copy
- Sector callouts — broaden beyond decoration niche framing

File to edit: `app/page.tsx`

**1.4 — Update 12-week LinkedIn calendar**

File: `content/phase-2/P2-005_12Week_Content_Calendar.md`  
Add new topic rotation into Weeks 5–12 to reflect expanded pillars:
- Week 5: Disaster Recovery / downtime cost
- Week 6: AI/LLM honest take (follow up to Week 3)
- Week 7: Software review teaser (Orderwise/Shopify)
- Week 8: Emotional reality / psychology post
- Week 9: Free tool launch (calculator)
- Week 10: Q&A / Ask Craig format
- Week 11: Process/workflow story
- Week 12: Supplier data feeds / integrations

**Verification:** Navigation renders correctly, Problems dropdown shows 8 items, homepage no longer opens with ERP language.

---

## Phase 2 — Interactive Calculators (Website Tools)
**Goal:** Build 3 embeddable ROI/cost calculators as new website pages  
**Session type:** Development (React/Next.js)  
**Estimated effort:** 2–3 sessions

### Calculators to Build

**2.1 — Downtime Cost Calculator**  
Route: `/tools/downtime-cost-calculator`

Inputs:
- Number of staff affected
- Average hourly labour cost (£)
- Hours of downtime per incident
- Number of incidents per year
- Revenue lost per hour (optional)

Outputs:
- Annual downtime cost (labour)
- Revenue exposure
- Cost per incident
- Comparison against a Retained engagement cost

File: `app/tools/downtime-cost-calculator/page.tsx`

**2.2 — Return to Operations (RTO) Calculator**  
Route: `/tools/rto-calculator`

Inputs:
- Current recovery time (hours)
- Target recovery time (hours)
- Annual revenue (£)
- Downtime incidents per year

Outputs:
- Revenue at risk per incident
- Annual exposure
- Hours saved by hitting RTO target
- Estimated value of improvement

File: `app/tools/rto-calculator/page.tsx`

**2.3 — Time Saving / Automation ROI Calculator**  
Route: `/tools/automation-roi-calculator`

Inputs:
- Task name (free text)
- Time spent per week (hours)
- Number of people doing it
- Average hourly rate (£)
- Automation cost estimate (£/month, optional)

Outputs:
- Annual cost of manual task
- Potential saving if automated (80% reduction model)
- Payback period
- 3-year ROI

File: `app/tools/automation-roi-calculator/page.tsx`

### Shared Component
Build `components/Calculator.tsx` — shared wrapper with:
- Input validation
- Result display cards
- "Talk to Craig about this" CTA button (links to /contact)
- Share result (copy URL with params)

**LinkedIn hook:** "I built this free calculator. Paste in your numbers. The result might surprise you." → links to tool.

**Verification:** All 3 calculators render, calculate correctly, CTA links work, mobile-responsive.

---

## Phase 3 — Free Tools / Apps (Downloadable or Web-Based)
**Goal:** Create at least 2 free practical tools people can use immediately  
**Session type:** Development + content  
**Estimated effort:** 2 sessions

### Tools to Build

**3.1 — Artwork Manager Template (Google Sheets + landing page)**  
Route: `/tools/artwork-manager`

What it is: A pre-built Google Sheets template for managing artwork versions, approvals, and customer sign-offs — common pain in garment decoration, print, and promo.

Features:
- Job reference tracker
- Artwork version log (v1, v2, v3...)
- Customer approval status
- Print-ready flag
- Notes and deadline columns

Delivery method: Google Sheets (view and copy) linked from a landing page  
Landing page CTA: "Download free" → email capture (optional) OR direct link to Google Sheets template

File: `app/tools/artwork-manager/page.tsx`

LinkedIn post angle: "If you're managing artwork in email, you're going to lose something. Here's the free tracker I'd give any decoration business." → link to page

**3.2 — Supplier Data Feed Mapping Template**  
Route: `/tools/supplier-feed-template`

What it is: A structured template for mapping supplier product data into ERP or eCommerce formats — common headache when onboarding new suppliers.

Features:
- Supplier field mapping columns
- ERP target field columns
- Transformation notes
- Status (mapped / needs cleaning / outstanding)

Delivery: Google Sheets template + brief guide on the landing page

File: `app/tools/supplier-feed-template/page.tsx`

**Verification:** Landing pages live, template links work, pages added to /tools hub.

---

## Phase 4 — Software Reviews Section
**Goal:** Build an honest, operator-led software review hub with structured reviews  
**Session type:** Content writing + development  
**Estimated effort:** 3–4 sessions

### Review Hub
Route: `/software-reviews`  
File: `app/software-reviews/page.tsx`

Hub page listing all reviews by category:
- ERP Systems
- eCommerce Platforms
- CRM Systems (future)

### Review Template Structure
Each review page: `/software-reviews/[slug]/page.tsx`

Standard sections for every review:
1. **Overview** — what it is, who makes it, market position
2. **Who it's for** — ideal company size, sector, use case
3. **Strengths** — what it genuinely does well
4. **Weaknesses** — what it consistently fails at
5. **Integration reality** — how it connects (or doesn't) to the rest of the stack
6. **Implementation truth** — typical timelines, gotchas, partner quality
7. **Operator verdict** — Craig's rating and honest recommendation (1–5 scale across 5 dimensions)
8. **Best alternatives** — 2–3 options worth considering instead

### ERP Reviews to Write (Priority Order)

| Software | Route | Notes |
|----------|-------|-------|
| **Orderwise** | `/software-reviews/orderwise` | Popular in decoration/workwear sectors |
| **Profit 4 (OGL)** | `/software-reviews/profit-4-ogl` | Strong in distribution, less known |
| **Deco Network** | `/software-reviews/deco-network` | Decoration-specific, cloud-first |

### eCommerce Reviews to Write

| Software | Route | Notes |
|----------|-------|-------|
| **Shopify** | `/software-reviews/shopify` | Dominant, but decoration-specific gaps |
| **Magento / Adobe Commerce** | `/software-reviews/magento-adobe-commerce` | Enterprise, complex, heavy implementation |
| **WooCommerce / WordPress** | `/software-reviews/woocommerce-wordpress` | SME default, limitations at scale |

**LinkedIn post angle per review:** "I've seen [Software] implemented 12+ times. Here's what nobody in the sales demo will tell you." → links to full review.

**Verification:** Hub page lists all reviews, each review page renders fully, operator verdict scores display, CTAs link to /contact.

---

## Phase 5 — Whitepapers & Implementation Guides
**Goal:** Create 3–4 authoritative long-form resources (gated or ungated)  
**Session type:** Content writing  
**Estimated effort:** 2–3 sessions

### Whitepapers to Produce

**5.1 — "The Operations Leader's Guide to Domain & Platform Migration"**  
Route: `/guides/domain-platform-migration`  
Format: Web page + downloadable PDF  
Length: ~3,500 words

Contents:
- What a domain migration actually involves (beyond just DNS)
- The things nobody plans for (email, auth, SSO, subdomains, redirects)
- How to stage a migration without taking down trading
- The checklist you want before you go live
- When to use a specialist vs. internal IT

Gate: Optional email capture for PDF version

**5.2 — "Data Migration: The 11 Things Nobody Tells You"**  
Route: `/guides/data-migration-reality`  
Format: Web page + downloadable PDF  
Length: ~3,000 words

Contents:
- Why data migrations always take 3× longer than scoped
- Data quality vs. data quantity — why volume is the wrong metric
- Field mapping hell (supplier formats, legacy codes, custom fields)
- How to clean before you migrate, not after
- Testing approaches that actually catch problems
- The migration freeze trap

**5.3 — "Supplier Data Feeds into ERP & eCommerce: A Practical Guide"**  
Route: `/guides/supplier-data-feeds`  
Format: Web page + downloadable PDF  
Length: ~2,500 words

Contents:
- Common supplier feed formats (CSV, XML, EDI, API)
- What to demand from a supplier before onboarding
- Field mapping to your ERP product catalogue
- Keeping feeds updated (frequency, triggers, automation)
- When manual is the right answer (and when it isn't)

**Verification:** All guides live on the web, PDF links work (can be a placeholder initially), listed in /resources or /guides hub.

---

## Phase 6 — Emotional & Psychology-Led Content Series
**Goal:** Create content that acknowledges the human reality of operations leadership  
**Session type:** Content writing  
**Estimated effort:** 1–2 sessions

### Blog Posts to Write

**6.1 — "The Night Your System Goes Down"**  
Route: `/blog/the-night-your-system-goes-down`  
Angle: First-person emotional narrative — what it actually feels like, the calls at midnight, the pressure, the scramble. Not a how-to. A recognition piece.  
CTA: Link to DR checklist / book a call to audit your DR posture

**6.2 — "Why Operations Leaders Don't Talk About Failure"**  
Route: `/blog/why-operations-leaders-dont-talk-about-failure`  
Angle: The LinkedIn highlight reel vs. the reality — implementations that went wrong, systems that didn't deliver, decisions made under pressure. Why the silence is dangerous.

**6.3 — "The Loneliness of Being the Person Who Knows"**  
Route: `/blog/the-loneliness-of-being-the-person-who-knows`  
Angle: When you can see the operational problems clearly but can't get leadership buy-in. The isolation of being ahead of the business technically/operationally.

### LinkedIn Series — "The Truth"

6 posts (1 per week, rotating into the content calendar):
1. "The thing LinkedIn won't show you about ERP go-live week"
2. "What a failed implementation actually costs in human terms" — *avoid specific cost figures until case study confirmed*
3. "Every operations leader I know has a story they don't tell clients"
4. "The call at 7pm on a Friday when the system is down and trading is tomorrow"
5. "Why the most important IT decision you make is who you trust, not which software you buy"
6. "Being the person in the room who knows it won't work — and watching it happen anyway"

Add these to `content/phase-2/POSTS_EMOTIONAL_SERIES.md` (new file).

**Verification:** Blog posts live, emotional LinkedIn series file created and slotted into the 12-week calendar rotation.

---

## Phase 7 — Disaster Recovery & Resilience Content
**Goal:** Establish credibility in DR, outage response, and support — underserved topic area  
**Session type:** Content writing + development  
**Estimated effort:** 1–2 sessions

### Blog Posts to Write

**7.1 — "What to Do When Your ERP Goes Down"**  
Route: `/blog/erp-goes-down-what-to-do`  
Format: Practical guide + emotional framing  
Contents:
- First 15 minutes — who to call, what not to do
- Business continuity fallbacks (manual processes, paper, phone)
- How to communicate to staff and customers
- What your vendor SLA actually covers (vs. what you thought)
- The conversation you need to have with your support partner before this happens

**7.2 — "Why Most SMEs Don't Have a Disaster Recovery Plan (And What That Costs Them)"**  
Route: `/blog/sme-disaster-recovery-gap`  
Format: Cost-framed analysis + checklist CTA  
CTA: DR readiness checklist lead magnet

### Lead Magnet — DR Readiness Checklist
Route: `/resources/dr-readiness-checklist`  
Format: Web page with 20-question checklist (same pattern as existing audit checklist)

Questions cover:
- Backup frequency and location
- Recovery time objective (RTO) — do you know yours?
- Recovery point objective (RPO) — what's acceptable data loss?
- DR test history — when did you last test?
- Support contract coverage — what's the SLA?
- Key person dependency — who holds the passwords?

### LinkedIn Posts (DR/Downtime)
3 posts to add to content calendar:
1. "Your ERP just crashed. You have 4 hours until trading opens. What's your plan?"
2. "Downtime cost calculator: paste in your numbers." → link to calculator from Phase 2
3. "The support contract that doesn't actually cover a support scenario" (named problem in industry)

**Verification:** Blog posts live, DR checklist page live, posts added to content file.

---

## Phase 8 — Q&A Session Strategy
**Goal:** Create a recurring "Ask Craig" format to drive direct engagement  
**Session type:** Strategy + content writing  
**Estimated effort:** 1 session

### Q&A Formats

**8.1 — LinkedIn Monthly Q&A Post**  
Format: "Drop your question below — this month I'm answering questions about [topic]"  
Topics rotation:
- Month 1: ERP and software selection
- Month 2: AI/LLM for operations teams
- Month 3: Disaster recovery and IT resilience
- Month 4: Process automation and workflow

How to repurpose answers:
- Top 3 questions → blog post "The questions I got asked about X"
- Best questions → FAQ additions
- Recurring questions → new content pillar or guide topic

**8.2 — Website FAQ Page**  
Route: `/faq`  
File: `app/faq/page.tsx`

Initial FAQ categories:
- Software selection (ERP, eCommerce, CRM)
- Working with Craig
- AI/LLM and automation
- Disaster recovery and resilience
- Implementation and migration

Seed with 20 real questions from experience and typical discovery call questions.

**8.3 — Newsletter/LinkedIn Newsletter**  
Cadence: Monthly  
Format: "This month in Decoded Ops" — includes:
- 1 original long-form article
- Tool or resource of the month
- 3 LinkedIn posts from the month (repurposed)
- 1 Q&A answer in full

**Verification:** FAQ page live, first Q&A LinkedIn post drafted, newsletter format documented.

---

## Phase 9 — Blog Expansion (Broader Operations Topics)
**Goal:** Publish 6 additional blog posts covering the full operations scope  
**Session type:** Content writing  
**Estimated effort:** 2 sessions

### Posts to Write

| Post Title | Route | Pillar |
|-----------|-------|--------|
| "The CRM Nobody Uses: Why Adoption Fails Before Launch" | `/blog/crm-adoption-failure` | Systems |
| "How to Evaluate an AI Tool Without Getting Sold To" | `/blog/how-to-evaluate-ai-tools` | AI/LLM |
| "The Hidden Cost of Keeping Your Legacy System" | `/blog/hidden-cost-legacy-systems` | Operational Reality |
| "When IT Support Is Actually the Problem" | `/blog/when-it-support-is-the-problem` | Risk |
| "Process Before Platform: The Order Most Businesses Get Wrong" | `/blog/process-before-platform` | Process |
| "What Good Looks Like: An Operations Health Scorecard" | `/blog/operations-health-scorecard` | Tools |

**Verification:** All 6 posts live, blog hub page updated, internal links added from relevant service pages.

---

## Phase 10 — LinkedIn Calendar Full Rebuild
**Goal:** Rebuild the 12-week calendar to reflect all new pillars and content types  
**Session type:** Content planning  
**Estimated effort:** 1 session

### Updated Pillar Rotation (3 posts/week)

| Week | Mon | Wed | Fri |
|------|-----|-----|-----|
| 1 | Introduction (done) | ERP context | Sector observation |
| 2 | ERP pain story | Systems cost | Sector observation |
| 3 | AI honest take | AI tools practical | Q&A format |
| 4 | Sector bottleneck | Process debt | CRM reality |
| 5 | Downtime cost | DR readiness | Support contract truth |
| 6 | Emotional reality | Night the system went down | "The truth" series |
| 7 | Software review teaser | Orderwise deep-dive | Free tool launch |
| 8 | Automation ROI | Process before platform | Calculator launch |
| 9 | Supplier data feeds | Data migration truth | Domain migration |
| 10 | AI/LLM for ops teams | What good looks like | Scorecard post |
| 11 | Disaster recovery plan | Legacy system cost | IT support problem |
| 12 | Q&A results post | CRM adoption | Operations health |

File to create: `content/phase-2/POSTS_WEEKS_5_TO_12.md`

**Verification:** New content file created with post variants for all remaining weeks, slotted into publishing timeline.

---

## Summary — What This Builds

| Asset | Count |
|-------|-------|
| New website pages | 12+ (problems, tools, reviews, FAQ, guides) |
| Interactive calculators | 3 |
| Free tool landing pages | 2 |
| Software reviews | 6 |
| Whitepapers/guides | 3 |
| New blog posts | 9 |
| LinkedIn post series | 24+ additional posts |
| Lead magnets | 2 (DR checklist + tools) |
| Q&A formats | 3 (LinkedIn, FAQ page, newsletter) |

---

## Execution Sequence (Recommended)

1. **Start here → Phase 1** (positioning reset, nav update, homepage) — highest leverage, unlocks everything else
2. **Phase 2** (calculators) — free value, drives LinkedIn engagement, easy to post about
3. **Phase 6** (emotional content) — highest engagement on LinkedIn, needs no dev work
4. **Phase 4** (software reviews) — SEO value, positions Craig as independent voice
5. **Phase 7** (DR content) — underserved niche, strong differentiation
6. **Phase 5** (whitepapers/guides) — longer content, good for lead gen
7. **Phase 3** (free tools/apps) — practical, shareable
8. **Phase 8** (Q&A strategy) — sustainable cadence once established
9. **Phase 9** (blog expansion) — fills in the topic map
10. **Phase 10** (calendar rebuild) — consolidates all new content into the publishing plan

---

## Notes for Future Agents

- Working directory: `D:\Claude\Projects\Decoded Ops\decoded-ops-site`
- Framework: Next.js (App Router) — all pages go in `app/` directory
- Components: `components/` — reuse existing design patterns (see `app/blog/*/page.tsx` for content page pattern, `components/Header.tsx` for nav)
- Existing lead magnet pattern: `app/resources/audit-checklist/page.tsx` — copy this pattern for new checklist pages
- Calculator components: build as client components (`'use client'`) with useState for inputs and computed outputs
- Styling: Tailwind CSS — follow existing class patterns
- Content pillar tracking: update `content/phase-2/PUBLISHING_TIMELINE.md` when new posts are drafted
- Plan tracking: `docs/.plan.md` is the master plan — add new phases there when executing

---

## Programmatic SEO — Completed (Apr 24, 2026)

Two sets of location-based SEO pages are live:

### Set 1: Fractional CTO Location Pages
- Hub: `/locations/fractional-cto` — lists all 27 towns grouped by county
- Dynamic pages: `/locations/fractional-cto/[location]` — one page per town
- Coverage: West Sussex, East Sussex, Surrey (27 towns total)
- Schema: `ProfessionalService` with city `areaServed`

### Set 2: Tech Audit Location Pages
- Hub: `/locations/tech-audit` — same 27-town structure
- Dynamic pages: `/locations/tech-audit/[location]`
- Coverage: West Sussex, East Sussex, Surrey (27 towns total)
- Schema: `ProfessionalService` with city `areaServed`

**Data source:** `data/locations.ts`
**Template component:** `app/locations/[service]/[location]/page.tsx`
**Status:** Live — both hubs and all 54 dynamic pages are indexed in sitemap.
