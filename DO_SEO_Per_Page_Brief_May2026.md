# Decoded Ops — SEO Per-Page Keyword Implementation Brief
**Date**: May 2026  
**For**: opencode automated implementation  
**Prepared by**: Craig Blackman / Decoded Ops

---

## Companion File — Full Keyword Reference

This brief works alongside a companion CSV that contains the complete keyword set for every page:

**File**: `DO_Per_Page_Keyword_Sets.csv` (in the same directory as this brief)

**How to use the CSV alongside this brief**:
- This brief gives you the **specific copy changes** — exact H1 rewrites, H2 text, body paragraphs, and FAQ schema objects to add. Use it as your primary instruction set.
- The CSV gives you the **complete keyword list** for each page — every primary, secondary, and long-tail keyword with its volume, difficulty, intent, and the exact location on the page where it should appear (e.g. "H2", "body para", "FAQ section").
- For any page section where this brief says *"weave in"* or *"include naturally"* without giving you exact copy, refer to the CSV's `Where to Use on the Page` column for that keyword and draft copy accordingly.
- The CSV is organised by page URL. Look for the row with the matching URL slug and the keyword role (`🔑 Primary`, `2️⃣ Secondary`, `🔍 Long-tail`) to find what's expected for each placement.

**CSV column structure**:
`Page URL / Keyword | Role | Vol | Diff | Intent | Where to Use on the Page | Priority`

> **Rule**: Every keyword marked `P1 — Urgent` must be implemented. Keywords marked `P2 — High` should be implemented where natural. Keywords marked `P3 — Medium` are bonus coverage — implement if the copy flows naturally, skip if forcing.

---

## How to Use This Brief

This document tells you exactly what to change on each page of the Decoded Ops Next.js website (`app/`) to implement the per-page keyword strategy from `DO_Keyword_Plan_Updated_May2026.xlsx`.

**What's already done**: Page metadata (`title`, `description`, `openGraph`, `twitter`) was updated in a previous pass. Do not change metadata unless explicitly instructed below.

**What this brief covers**: H1 text, H2 section headings, body copy additions, and FAQ schema entries. Every change is keyed to a specific keyword with volume and difficulty for reference.

**Component patterns**:
- `ProblemPage` props → `headline` (renders as visual H1), `intro` (opening paragraph), `causes[]` ({title, body}), `howIHelp`, `symptoms[]`
- `SectorPage` props → `tagline` (visual H1), `intro`, `challenges[]` ({title, body}), `whatIdo[]`, `cta`
- Service pages and blog posts → direct JSX with `<h1>`, `<h2>`, `<h3>`, `<p>` tags
- FAQ schema → `mainEntity` array in the `const schema` / `const [name]Schema` object near the top of each file

**Keyword legend**:
- 🔑 PRIMARY — must appear in H1 / intro paragraph naturally
- 2️⃣ SECONDARY — weave into H2 headings and body paragraphs
- 🔍 LONG-TAIL — use in FAQ question text, subheadings, and supporting sentences

**Tone**: All copy is written in Craig Blackman's direct, no-nonsense voice. Short sentences. No jargon for jargon's sake. No hype.

---

## A. SERVICE PAGES

---

### A1. `/retained` — Fractional CTO / Head of Operations
**File**: `app/retained/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `fractional cto` (Vol 590, Diff 8)

#### H1 Change
**Current** (in JSX):
```
Senior operational thinking. Without the full-time cost.
```
**Change to**:
```
Your fractional CTO. <span>Without the full-time cost.</span>
```
This puts `fractional CTO` directly in the H1 whilst keeping the value proposition. Update the `<h1>` JSX accordingly.

#### Badge / Label
**Current**: `— Retained · Fractional CTO / Head of Operations`  
No change needed — keyword already present.

#### Intro Paragraph
**Current**: `Monthly strategic and operational leadership for businesses that need the thinking without a full-time hire...`  
**Add one sentence after the existing intro**:
> Fractional CTO services give you the technology leadership and vendor oversight a growing business needs — without recruiting for a role that will cost £80,000+ before it has delivered value.

#### H2 — "Four situations where Retained makes sense"
**Change to**: `Four situations where a fractional CTO makes sense`

#### "When It Fits" Cards — Update Two Cards
1. Card titled **"ERP or technology transition"** → add to `desc`: append ` A fractional CTO without vendor ties is the most effective way to hold an implementation to account.`
2. Card titled **"Covering a gap"** → update `desc` opening: `Your ops director has left, or you've never had a dedicated IT or operations lead. Fractional CTO services give you senior operational thinking without the £80k+ salary commitment.`

#### "What Retained actually looks like" H2
**Change to**: `What fractional CTO services actually look like`

#### FAQ Schema — Add Two New Questions
Add to `mainEntity` in `retainedSchema`:

```js
{
  '@type': 'Question',
  name: 'Is a fractional CTO the same as managed IT support?',
  acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support handles day-to-day IT issues — helpdesk, hardware, connectivity. A fractional CTO provides strategic and operational technology leadership: roadmap ownership, vendor selection, ERP oversight, and technology decision-making. The two are complementary, not interchangeable.' },
},
{
  '@type': 'Question',
  name: 'Do I need a full-time CTO or will part-time CTO services work for a small business?',
  acceptedAnswer: { '@type': 'Answer', text: 'For most print, embroidery, and decoration businesses under £5m revenue, a part-time or fractional CTO is more appropriate than a full-time hire. You get the thinking and the oversight without carrying a full-time salary before the business is ready to support it.' },
},
```

---

### A2. `/clarity` — Technology & Operations Audit
**File**: `app/clarity/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `technology audit small business` (Vol 260, Diff 18)

#### H1 Change
**Current**:
```
One day on site. <span>Everything it costs you</span> in writing within five days.
```
**Change to**:
```
One day. A complete technology audit. <span>Everything it costs you</span> in writing within five working days.
```

#### Intro Paragraph
**Current**: `A structured, independent review of your operations, technology, and processes...`  
**Change to**: `A structured technology audit and operations review — independent, on site, and delivered in writing. Not a workshop. Not a proposal. A real audit — followed, observed, and quantified.`

#### "Six areas. Every time." H2
No change needed.

#### Audit Area 04 — "Processes & Operations"
**Current desc**: `Every process mapped from order in to invoice out...`  
**Append to desc**: ` This is where the operations audit finds the friction that software alone cannot fix — undocumented steps, manual bridges, and processes that have never been questioned.`

#### Audit Area 06 — "AI Readiness"
**Current desc**: `Where AI could genuinely help your specific operation...`  
**Prepend**: `The AI readiness assessment within the audit covers...` (keep rest of sentence)  
Full: `The AI readiness assessment within the audit covers where AI could genuinely help your specific operation. What needs to be in place first. An honest view — not a tool sale.`

#### "What happens, step by step" H2
No change needed.

#### "The deliverables" H2
No change needed.

#### FAQ Schema — Add Three New Questions
Add to `mainEntity` in `claritySchema`:

```js
{
  '@type': 'Question',
  name: 'What is included in a technology audit for a small business?',
  acceptedAnswer: { '@type': 'Answer', text: 'The Clarity technology audit covers IT infrastructure, software and systems, eCommerce and digital, processes and operations, growth opportunity, and AI readiness. Every area is assessed on site in a single day. You receive a written report within 5 working days with every finding quantified in time and money.' },
},
{
  '@type': 'Question',
  name: 'Is this an IT audit, a software audit, or an operations audit?',
  acceptedAnswer: { '@type': 'Answer', text: 'It is all three. The Clarity Audit is a combined IT audit, software audit, and operations audit delivered in a single day. The reason for covering all three together is that the problems rarely live in just one area — technology choices affect process efficiency, and process gaps drive software decisions.' },
},
{
  '@type': 'Question',
  name: 'Can a technology audit help with eCommerce integration problems?',
  acceptedAnswer: { '@type': 'Answer', text: 'Yes. eCommerce is one of the six areas covered in every Clarity Audit. The audit assesses your eCommerce platform, how it connects to your ERP or order management system, where the gaps are, and what a realistic fix looks like — with costs.' },
},
```

---

### A3. `/deliver` — ERP & Technology Implementation Consultant
**File**: `app/deliver/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `erp implementation consultant` (Vol 260, Diff 22)

#### H1 Change
**Current**:
```
The right vendor. The right outcome. <span>On your terms.</span>
```
**Change to**:
```
Independent ERP implementation consultant. <span>The brief first. The vendor second.</span>
```

#### Badge / Label
**Current**: `— Deliver · Project Delivery & Vendor Management`  
**Change to**: `— Deliver · ERP Implementation & Vendor Management`

#### Intro Paragraph
**Current**: `Solution architecture, vendor brief, procurement, and project oversight...`  
**Change to**: `Independent ERP implementation support — from vendor brief through to go-live sign-off. No vendor ties. No commissions. Just the outcome your business actually needs.`

#### "Brief first. Build second." H2
**Change to**: `How an independent ERP implementation consultant works`

#### Quote Section
**Current**: `"The most expensive technology decisions in this sector are made in the first meeting with a vendor — before anyone has written a brief."`  
No change. Keep as is.

#### Process Step 01 — "Brief"
**Current desc**: `I write the vendor brief based on your Clarity report or existing requirements...`  
**Append**: ` An independent ERP implementation consultant writes the brief before approaching any vendor — not after seeing a demo.`

#### "Everything you need to get the right outcome" H2
**Change to**: `What independent ERP implementation consultancy includes`

#### Add a Body Paragraph Before the Checklist
Add `<p>` before the `{includedItems.map(...)}` block:
> Manufacturing ERP software selection is one of the highest-stakes decisions in this sector. A single implementation without independent oversight can cost £80,000–£150,000 more than it should. Independent ERP solutions consultancy separates what you need from what a vendor wants to sell you.

#### FAQ Schema — Add Two New Questions
Add to `mainEntity` in `deliverSchema`:

```js
{
  '@type': 'Question',
  name: 'What does an independent ERP implementation consultant do?',
  acceptedAnswer: { '@type': 'Answer', text: 'An independent ERP implementation consultant writes the requirements brief, approaches vendors on your behalf, manages the procurement process, and oversees the project through to handover — without being tied to any vendor or earning commission on any sale. Their job is to get the right outcome for your business, not to place a software sale.' },
},
{
  '@type': 'Question',
  name: 'Do I need an ERP implementation consultant for a small business?',
  acceptedAnswer: { '@type': 'Answer', text: 'If you are selecting or implementing manufacturing ERP software without sector-specific experience on your side of the table, yes. ERP procurement support for small business is not about managing complexity for its own sake — it is about avoiding the most common and most expensive mistakes that happen when businesses go to vendors unprepared.' },
},
```

---

### A4. `/transform` — Technology Transformation Programme
**File**: `app/transform/page.tsx`  
**Metadata**: May need updating — check current title. Target: `ERP Implementation Programme for Print & Decoration Businesses | Decoded Ops`  
**Primary keyword**: `erp implementation` (Vol 1000, Diff 22)

> **Note**: Read the current file first to find the H1 and body structure. The changes below assume a layout similar to `/deliver`.

#### H1 — Add Primary Keyword
Whatever the current H1 is, it should naturally include `ERP implementation` or `technology transformation`. Suggest:
```
A full ERP implementation programme. <span>Designed around how your business works.</span>
```

#### Add/Update One H2 Heading
Add or update a section heading to: `ERP implementation for manufacturing and decoration businesses`  
This is the target for `manufacturing erp software` (Vol 880) and `erp solutions for manufacturing` (Vol 590).

#### Add One Body Paragraph (in the scope/what-it-covers section)
> Transform is the right engagement when the work goes beyond a single vendor or project. An ERP implementation programme for a print, embroidery, or decoration business typically involves multiple systems — order management, eCommerce, production scheduling, and B2B portals — that need to work as an integrated whole. That is what Transform is built for.

#### FAQ Schema — Add Two New Questions
In whatever schema object exists in this file, add:

```js
{
  '@type': 'Question',
  name: 'What is the difference between ERP implementation and an ERP transformation programme?',
  acceptedAnswer: { '@type': 'Answer', text: 'ERP implementation is the process of configuring, migrating, and going live with a single ERP system. A transformation programme covers the full technology and systems architecture — multiple systems, integrations, eCommerce, B2B portals, and the processes that connect them. Transform is for businesses where the scope goes beyond a single software project.' },
},
{
  '@type': 'Question',
  name: 'Can you support an eCommerce ERP integration as part of Transform?',
  acceptedAnswer: { '@type': 'Answer', text: 'Yes. eCommerce to ERP integration is one of the most common scopes within a Transform engagement. The implementation covers both systems — the eCommerce platform and the ERP or MIS — plus the integration layer between them, ensuring that orders flow from checkout to production without manual re-entry.' },
},
```

---

### A5. `/small-business` — Small Business Operations Support
**File**: `app/small-business/page.tsx` (or wherever this page lives — check `app/` directory)  
**Primary keyword**: `small business operations consultant` (Vol 140, Diff 12)

#### H1 — Include Primary Keyword
Update H1 to include `small business operations consultant` naturally. Suggest:
```
Small business operations consultant. <span>Technology and systems support without the enterprise price tag.</span>
```

#### Add One Intro Paragraph Addition
After existing intro, add:
> A small business operations consultant covers what a full-time operations director would — technology decisions, vendor oversight, process improvement, and AI readiness — on a flexible, affordable basis built for businesses under £500k.

#### Add One H2 Heading
Add a section heading (before or within the service cards section): `Fractional operations and technology support for small businesses`  
This targets `fractional cto` (Vol 590) as a secondary keyword.

#### FAQ Schema — Add Two New Questions

```js
{
  '@type': 'Question',
  name: 'What does a small business operations consultant actually do?',
  acceptedAnswer: { '@type': 'Answer', text: 'A small business operations consultant provides the operational and technology thinking that growing businesses need but cannot yet justify as a full-time hire. This includes system selection advice, process improvement, vendor oversight, and an AI readiness check — delivered on a fixed-price or retainer basis that fits a sub-£500k business.' },
},
{
  '@type': 'Question',
  name: 'Is this like managed IT support for small businesses?',
  acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support services handle day-to-day IT issues. A small business operations consultant focuses on the strategic decisions: which systems to use, how to connect them, where processes are breaking down, and whether AI can genuinely help your business — not just keeping the lights on.' },
},
```

---

## B. PROBLEM PAGES (ProblemPage Component)

All problem pages use the `ProblemPage` component. Changes are to props and to the `FAQPage` schema in each file. The `headline` prop renders as the visual H1 equivalent. The `intro` prop renders as the opening paragraph. The `causes[].title` values render as H3 headings.

---

### B1. `/problems/erp-implementation-failure`
**File**: `app/problems/erp-implementation-failure/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `erp implementation failure` (Vol 480, Diff 19)

#### `headline` Prop
**Current**: `"Your ERP implementation has gone wrong. ||Here's what to do next.||"`  
No change needed — adequately describes the problem.

#### `intro` Prop
**Current**: `"ERP implementations fail in this sector more often than vendors will admit..."`  
**Change to**: `"ERP implementation failure in this sector is more common than vendors will admit. Usually not because the software is bad — but because the implementation wasn't designed around how decoration and print businesses actually work. The wrong manufacturing ERP for your specific workflows. The right ERP, implemented without proper oversight. Both end the same way."`

#### `causes[]` Updates
**Cause 2** — title: `'No independent oversight'`  
**Update body to**: `"Without someone in your corner who understands both the sector and the software, there's no one to hold the vendor to account when they miss requirements or cut corners. An ERP implementation consultant working independently — not appointed by the vendor — is the single most effective way to prevent this."`

**Add a new cause** (4th or 5th):
```js
{ 
  title: 'Wrong ERP for small business operations', 
  body: "Sometimes the implementation fails because the ERP for small business was selected on demo, not on fit. A system that performs well for a distribution company can be a poor fit for a decorated goods business with mixed methods, variable artwork, and short-run personalisation." 
}
```

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'What are the most common causes of ERP implementation failure in decorated goods businesses?',
  acceptedAnswer: { '@type': 'Answer', text: 'The five most common causes are: no independent vendor brief written before vendor selection; the implementation scoped by the vendor rather than the business; data quality problems that were underestimated; no one independently accountable for outcomes; and wrong ERP software selected based on a demo in a different sector.' },
},
{
  '@type': 'Question',
  name: 'My ERP implementation went over budget — what should I do?',
  acceptedAnswer: { '@type': 'Answer', text: 'An ERP implementation cost overrun is almost always a scoping failure. The first step is an independent review of what the original specification covered versus what the vendor has delivered — or is claiming to have delivered. That assessment tells you whether the overrun is legitimate, whether the vendor is at fault, and what the realistic options are.' },
},
```

---

### B2. `/problems/wrong-erp-software`
**File**: `app/problems/wrong-erp-software/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `erp for small business` (Vol 590, Diff 16)

#### `headline` Prop
**Current**: `"The system looked right in the demo. ||It doesn't fit your business.||"`  
**Change to**: `"The ERP for small business looked right in the demo. ||It doesn't fit how your business works.||"`

#### `intro` Prop
**Current**: `"Selecting the wrong ERP is one of the most expensive mistakes a business in this sector can make..."`  
**Change to**: `"Selecting the wrong ERP for small business is one of the most expensive mistakes in this sector. The cost isn't just the software — it's the implementation, the disruption, the workarounds that accumulate, and the productivity you never recover. And in most cases, it was avoidable with an independent evaluation before the contracts were signed."`

#### `causes[]` Updates
**Cause 1** — title: `'Selected on demo, not on fit'`  
**Append to body**: ` Systems like OrderWise, PANTA, and DecoNetwork all perform differently depending on your decoration mix and order model. The only way to evaluate them fairly is against a written brief that reflects your actual business.`

#### `howIHelp` Prop
**Current**: `"If you're in a system that doesn't fit..."`  
**Append**: ` And if you're moving, I write the independent vendor brief that makes sure the next ERP for your small business is chosen on fit — not on how good the demo looked.`

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'How do I choose the right ERP for a print or embroidery business?',
  acceptedAnswer: { '@type': 'Answer', text: 'Write the requirements brief before you speak to any vendor. The brief should document your actual workflows — decoration methods, artwork approval process, B2B ordering, eCommerce integration requirements, and how you manage blanks inventory. Once the brief exists, you can evaluate ERP solutions for manufacturing and decoration on a like-for-like basis.' },
},
{
  '@type': 'Question',
  name: 'What ERP works with Shopify for an embroidery or decoration business?',
  acceptedAnswer: { '@type': 'Answer', text: 'Several ERPs in this sector can integrate with Shopify, but the quality of that integration varies significantly. The questions to ask are: does the integration handle personalisation data, not just order totals? Does stock sync in real time? And is the integration maintained by the ERP vendor or reliant on a third-party connector that could break? An independent ERP evaluation covers all of these.' },
},
```

---

### B3. `/problems/ecommerce-not-connected`
**File**: `app/problems/ecommerce-not-connected/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `ecommerce integration small business` (Vol 390, Diff 15)

#### `headline` Prop
**Current**: `"Your online store is live. ||Your production system doesn't know it exists.||"`  
No change needed.

#### `intro` Prop
**Current**: `"eCommerce disconnected from production is one of the most common and most costly problems in this sector..."`  
**Change to**: `"eCommerce integration for small business is one of the most common and most costly problems in the print and decoration sector. Every order taken online that has to be manually re-entered into the production system. Every day. The cost in labour, errors, and missed despatch windows adds up fast — and most businesses have stopped noticing it."`

#### `causes[]` Updates
**Cause 3** — title: `'Personalisation data structure mismatch'`  
**Append to body**: ` This is a structural problem with most generic eCommerce platforms — they were not built for B2B order management or for products that vary by decoration method.`

**Cause 4** — title: `'The wrong platform for the business model'`  
**Append to body**: ` If the wholesale order system or eCommerce platform cannot represent your product data accurately, no integration will fix the underlying mismatch.`

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'Why is Shopify not syncing with my ERP?',
  acceptedAnswer: { '@type': 'Answer', text: 'Shopify was not designed for businesses that produce to order, handle personalisation, or manage blank inventory separately from finished goods. When Shopify is not syncing with your ERP, it is usually because the data model on one side does not match the other — not because the integration itself is broken. Fixing this requires either a middleware solution, a different eCommerce platform, or both.' },
},
{
  '@type': 'Question',
  name: 'Can WooCommerce integrate with a decoration business ERP?',
  acceptedAnswer: { '@type': 'Answer', text: 'WooCommerce can integrate with many ERPs, but the integration quality depends heavily on whether the ERP has a maintained API and whether WooCommerce can capture your personalisation data in a format the ERP can process. WooCommerce ERP integration for print businesses is a common engagement — and the answer is rarely "yes, it integrates" and more often "it depends on what data you need to move and how fast."' },
},
```

---

### B4. `/problems/disaster-recovery`
**File**: `app/problems/disaster-recovery/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `business continuity disaster recovery plan` (Vol 320, Diff 18)

#### `headline` Prop
**Current**: `"Your systems go down on a Tuesday morning. ||When do you get back up?||"`  
No change needed — strong and specific.

#### `intro` Prop
**Current**: `"Most print, embroidery, and decoration businesses don't have a disaster recovery plan..."`  
**Change to**: `"Most print, embroidery, and decoration businesses don't have a business continuity disaster recovery plan. Not because they don't care — but because DR feels like something for enterprise IT teams. Until the server fails, the hosting goes down, or ransomware locks every screen. Then the cost of not having a plan becomes very visible, very quickly."`

#### `causes[]` Updates
**Cause 2** — title: `'Assuming the vendor handles it'`  
**Append to body**: ` Backup and disaster recovery are different things. A backup stores your data. A disaster recovery plan defines how you restore operations — which systems come back first, in what order, within what time target. Cloud backup is not a DR plan.`

**Cause 4** — title: `'Cost of downtime is invisible until it happens'`  
**Append to body**: ` For a small manufacturer, the RTO (recovery time objective) and RPO (recovery point objective) are rarely defined — which means nobody knows how much downtime is acceptable until they are in the middle of it.`

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'What is a realistic recovery time objective for a small manufacturing business?',
  acceptedAnswer: { '@type': 'Answer', text: 'For critical systems like order management and production scheduling, a recovery time objective (RTO) of under four hours is achievable with the right architecture. Many small businesses in print, embroidery, and decoration are currently looking at days or weeks without knowing it — because nobody has written a disaster recovery plan or tested a restore.' },
},
{
  '@type': 'Question',
  name: 'Does cloud software replace the need for a business continuity plan?',
  acceptedAnswer: { '@type': 'Answer', text: 'No. Cloud backup reduces some risks but introduces others — internet dependency, provider outages, data egress limitations, and complex multi-system recovery sequences. A business continuity disaster recovery plan is still essential, even for businesses running entirely on cloud software. The plan addresses what happens when any part of that stack fails.' },
},
```

---

### B5. `/problems/ai-paralysis`
**File**: `app/problems/ai-paralysis/page.tsx`  
**Metadata**: Needs updating — target title: `AI Readiness for Print & Decoration Businesses | Decoded Ops`  
**Update metadata**:
```ts
title: 'AI Readiness for Print & Decoration Businesses | Decoded Ops',
description: 'Not sure if your business is ready for AI? Cut through the hype with an honest AI readiness assessment for print, embroidery, and decoration businesses.',
```
Update `openGraph.title` and `twitter.title` to match.

**Primary keyword**: `ai readiness small business` (Vol 210, Diff 14)

#### `headline` Prop
**Current**: `"Everyone is talking about AI. ||No one can tell you what it means for your business.||"`  
No change needed.

#### `intro` Prop
**Current**: `"Every software vendor is adding AI features..."`  
**Change to**: `"AI readiness for small business is a question most owners can't honestly answer — not because they haven't thought about it, but because every vendor, consultant, and conference has a different version of the answer. Every software vendor is adding AI features. Every conference talk is about AI. But when you ask what AI actually means for a print, embroidery, or decoration business, the answers are vague, generic, or non-existent."`

#### `causes[]` Updates
**Cause 2** — title: `'No process foundation to apply AI to'`  
**Update body**: `"AI works best when applied to well-defined, well-documented processes with clean data. Most businesses in this sector have undocumented processes, inconsistent data, and systems that don't talk to each other. An AI readiness assessment will tell you whether your data and processes are in a state where AI can deliver value — or whether there are foundational fixes needed first. You cannot automate what hasn't been documented."`

#### `howIHelp` Prop
**Current**: `"I give you an honest, grounded assessment of where AI can actually help your business right now..."`  
**Append**: ` Think of it as an AI readiness check built specifically for businesses in the print, embroidery, and decoration sector — not a generic AI strategy that could apply to any industry.`

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'How do I know if my business is ready for AI?',
  acceptedAnswer: { '@type': 'Answer', text: 'AI readiness for small business depends on three things: whether your core processes are documented and consistent, whether your data is clean and accessible in a structured format, and whether you have identified a specific operational problem that AI might help with. An AI readiness assessment answers all three questions for your specific business — not in general terms.' },
},
{
  '@type': 'Question',
  name: 'Should a small print or embroidery business be using AI tools?',
  acceptedAnswer: { '@type': 'Answer', text: 'In most cases, not yet — and that is not the same as never. The businesses that get value from AI are the ones that fix their processes and data foundations first. AI tools for embroidery or print businesses are most useful when the underlying operational system is stable. If orders, production, and despatch are running on spreadsheets and manual workarounds, AI will amplify the chaos rather than reduce it.' },
},
```

---

### B6. `/problems/manual-workarounds`
**File**: `app/problems/manual-workarounds/page.tsx`  
**Metadata**: Needs updating — target:
```ts
title: 'Stop Manual Re-entry: Business Process Automation for Small Business | Decoded Ops',
description: 'Spreadsheets, shadow systems, and manual re-entry are costing you more than you think. Business process automation for print, embroidery, and decoration businesses.',
```
**Primary keyword**: `business process automation small business` (Vol 210, Diff 18)

#### `headline` Prop
**Current**: `"Your team has built a second system. ||It lives in spreadsheets.||"`  
No change needed.

#### `intro` Prop
**Current**: `"Almost every business in this sector has shadow systems..."`  
**Append after first sentence**: ` Business process automation for small businesses in this sector is not about replacing people — it is about eliminating the manual re-entry, duplicate data, and shadow spreadsheets that slow every team down.`

#### `causes[]` Updates
**Cause 3** — title: `'No one has measured the hidden labour cost'`  
**Append to body**: ` Standard operating procedures document what should happen. When SOPs don't exist, the manual workaround is the SOP — and measuring the real cost of that is the first step towards fixing it.`

#### `howIHelp` Prop
**Append**: ` The outcome is a business process automation roadmap — not a technology wish list, but a prioritised set of changes (some immediate, some longer term) that eliminate the manual work your team has been carrying for years.`

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'How much time do manual workarounds cost a print or embroidery business?',
  acceptedAnswer: { '@type': 'Answer', text: 'Manual re-entry, reconciliation, and shadow-system maintenance typically add 10–20 hours per employee per week in businesses with significant workaround cultures. Eliminating manual data entry through business process automation typically delivers 15–25% efficiency gains in order processing — without adding headcount.' },
},
{
  '@type': 'Question',
  name: 'Should I fix my processes or buy new software first?',
  acceptedAnswer: { '@type': 'Answer', text: 'Fix the processes first — or at least document them. New software implemented on top of broken processes inherits the same problems in a more expensive wrapper. Business process automation works best when the process is understood, mapped, and then automated — not when automation is applied to something nobody has looked at critically.' },
},
```

---

### B7. `/problems/no-ops-owner`
**File**: `app/problems/no-ops-owner/page.tsx`  
**Metadata**: Needs updating — target:
```ts
title: 'No Head of Operations? Fractional Operations Leadership for Small Business | Decoded Ops',
description: 'When no one owns operations, the same problems keep coming back. Fractional head of operations and sales & operations planning support for print and decoration businesses.',
```
**Primary keyword**: `head of operations small business` (Vol 90, Diff 11)

#### `headline` Prop
**Current**: `"Every ops decision ends up on your desk. ||Who is running the business day to day?||"`  
No change needed.

#### `intro` Prop
**Current**: `"In many growing businesses, operations has no owner..."`  
**Append**: ` A head of operations for small business does not have to be a full-time hire. Fractional operations leadership gives you the accountability and the thinking without the overhead.`

#### `causes[]` Updates
**Cause 1** — title: `'Operations grew without anyone noticing'`  
**Append to body**: ` Sales and operations planning (S&OP) becomes impossible when no one has ownership of the operational data. Decisions get made on gut feel because there is no reliable picture of capacity, pipeline, or throughput.`

#### `howIHelp` Prop
**Current**: `"I help you understand whether your business needs a dedicated operations person..."`  
**Append**: ` If a fractional head of operations is the right answer — someone who owns the operational agenda on a part-time basis — the Retained service provides exactly that.`

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'What does a fractional head of operations do for a small business?',
  acceptedAnswer: { '@type': 'Answer', text: 'A fractional head of operations owns the operational agenda on a part-time basis — technology decisions, process improvement, vendor oversight, and cross-department coordination. They provide the sales and operations planning (S&OP) thinking a growing business needs without the cost of a full-time operations director.' },
},
{
  '@type': 'Question',
  name: 'Is a fractional operations director the same as managed IT support?',
  acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support handles day-to-day IT issues. A fractional operations director owns the wider operational agenda — systems strategy, process improvement, technology decision-making, and the management of improvement projects that cross departmental lines. IT support is a component of that; it is not a substitute for it.' },
},
```

---

## C. SECTOR PAGES (SectorPage Component)

All sector pages use the `SectorPage` component. Key props: `sector`, `tagline` (H1 equivalent), `intro`, `challenges[]` ({title, body}), `whatIdo[]`, `cta`. Schema is a basic `WebPage` type — consider upgrading to `Service` schema where indicated.

---

### C1. `/sectors/garment-decoration`
**File**: `app/sectors/garment-decoration/page.tsx`  
**Metadata**: Needs updating — target:
```ts
title: 'Garment Decoration Business Systems & Operations Consultant | Decoded Ops',
description: 'Technology and operations consultancy for garment decoration businesses. Embroidery business management, artwork management software, and production scheduling for embroidery and DTF.',
```
**Primary keyword**: `garment decoration business systems` (Vol 50, Diff 8)

#### `tagline` Prop
**Current**: `"The systems behind embroidery, DTG, screen print and heat transfer ||were never built for your business.||"`  
**Change to**: `"Garment decoration business systems ||were never built for how you actually work.||"`

#### `intro` Prop
**Current**: `"Every decoration method has its own production logic..."`  
**Change to**: `"Every decoration method has its own production logic, its own constraints, and its own failure modes. The ERP and MIS systems marketed to garment decoration businesses rarely account for that. Embroidery business management looks different from screen print management — and your systems should reflect that difference."`

#### `challenges[]` Updates
**Challenge 2** — title: `'The artwork loop'`  
**Append to body**: ` Artwork management software can automate the sign-off loop — but only if it is properly integrated with the order management system. Most businesses in this sector are still managing artwork approval by email.`

**Add new challenge**:
```js
{ 
  title: 'Embroidery production workflow versus other methods', 
  body: "Embroidery production scheduling is fundamentally different from screen print or DTF. Machine capacity, stitch count, digitisation time, and thread colour changes all affect the schedule in ways that generic production scheduling software does not account for. A system that cannot represent embroidery production accurately will always require manual workarounds." 
}
```

#### `whatIdo[]` Array — Add One Item
Add: `'Assess artwork management software options and integration with your order management system'`

#### FAQ Schema — Upgrade and Add
The current schema is a basic `WebPage` type. **Replace the entire schema** with:
```js
const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/garment-decoration#webpage',
      url: 'https://decodedops.co.uk/sectors/garment-decoration',
      name: 'Garment Decoration Business Systems & Operations Consultant | Decoded Ops',
      description: 'Technology and operations consultancy for garment decoration businesses.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What systems does a garment decoration business need?',
          acceptedAnswer: { '@type': 'Answer', text: 'A garment decoration business typically needs: an order management or ERP system that handles decoration method-specific workflows; artwork management software for sign-off and file storage; production scheduling software that accounts for machine capacity and method lead times; eCommerce integration if you sell online; and B2B ordering capability if you serve corporate or wholesale customers.' },
        },
        {
          '@type': 'Question',
          name: 'How is embroidery business management different from other decoration methods?',
          acceptedAnswer: { '@type': 'Answer', text: 'Embroidery business management involves digitisation, stitch count estimation, machine capacity planning, and thread management — none of which are native to generic ERP or MIS systems. Businesses running embroidery alongside screen print or DTF need systems that can represent each method\'s production logic independently.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best ERP for a garment decoration business in the UK?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no single best ERP — the right system depends on your decoration methods, order volume, eCommerce requirements, and growth plans. Sector-specific systems like PANTA, DecoNetwork, and OrderWise are all used in the UK garment decoration market, each with different strengths and limitations. An independent evaluation against a written brief is the only way to choose correctly.' },
        },
      ],
    },
  ],
};
```

---

### C2. `/sectors/workwear-teamwear`
**File**: `app/sectors/workwear-teamwear/page.tsx`  
**Metadata**: Needs updating — target:
```ts
title: 'Workwear Supplier Operations & Systems Consultant | Decoded Ops',
description: 'Technology and operations consultancy for workwear and teamwear suppliers. B2B order management, multi-location inventory, and wholesale order systems for workwear businesses.',
```
**Primary keyword**: `workwear supplier operations` (Vol 40, Diff 7)

#### `tagline` Prop (or equivalent H1)
Add `workwear supplier operations` naturally — suggest:  
`"Workwear supplier operations ||need systems built for B2B, not B2C.||"`

#### `intro` Prop
Update to include `B2B order management` and `wholesale order system`:  
> Workwear and teamwear suppliers operate in a fundamentally different mode from retail decoration businesses. B2B order management, multi-location delivery, contract pricing, and account portals are the norm — not the exception. Most generic eCommerce and ERP systems were not designed for this. The operational complexity of a workwear supplier requires systems that understand B2B.

#### `challenges[]` — Add/Update
**Add challenge**:
```js
{ 
  title: 'B2B customer portal and wholesale order system', 
  body: "Corporate and contract customers expect to order online, manage their account, and track their orders without calling you. A wholesale order system that integrates with your production and ERP is what makes this possible at scale. Without it, your account management team is doing manually what a portal would handle automatically." 
}
```

**Add another challenge** (or update existing):
```js
{ 
  title: 'Multi-location inventory and despatch', 
  body: "Workwear for large corporate accounts often means multiple delivery locations, different size runs per site, and complex split-shipment logistics. Multi-location inventory management has to be part of your system design — not a workaround built in spreadsheets." 
}
```

#### Add FAQPage Schema
Replace or augment existing schema with:
```js
{
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What systems does a workwear supplier need?',
      acceptedAnswer: { '@type': 'Answer', text: 'A workwear supplier typically needs a B2B ordering portal for corporate customers, a wholesale order management system integrated with production, multi-location inventory management, contract pricing management, and ERP integration that handles split shipments and account invoicing. The specific stack depends on volume, customer mix, and decoration methods used.' },
    },
    {
      '@type': 'Question',
      name: 'How do I set up a B2B portal for a workwear business?',
      acceptedAnswer: { '@type': 'Answer', text: 'A workwear B2B portal implementation starts with understanding the customer journey — how accounts order, what they need to see, and how the portal connects to your production and despatch workflow. Platforms like OrderWise, PANTA, and bespoke solutions all offer B2B capability, but the integration with your back-end is what determines whether it actually reduces admin or just adds another system to manage.' },
    },
  ],
},
```

---

### C3. `/sectors/print-promotional`
**File**: `app/sectors/print-promotional/page.tsx`  
**Metadata**: Needs updating — target:
```ts
title: 'Print Shop Operations Management & Systems Consultant | Decoded Ops',
description: 'Technology and operations consultancy for print shops and promotional merchandise businesses. Print production scheduling, artwork approval workflow, and eCommerce integration.',
```
**Primary keyword**: `print shop operations management` (Vol 120, Diff 11)

#### `tagline` Prop (H1 equivalent)
Update to include primary keyword:  
`"Print shop operations management ||starts with understanding what your current process actually costs.||"`

#### `intro` Prop
Update to include `print production scheduling software` and `artwork approval workflow`:  
> Print and promotional merchandise businesses face a specific combination of challenges: short run lengths, rapid turnaround expectations, complex artwork approval workflows, and production scheduling software that was designed for longer runs. The result is operational friction that shows up as missed deadlines, re-work, and customer complaints — even when the team is working hard.

#### `challenges[]` — Add/Update
**Add challenge**:
```js
{ 
  title: 'Artwork approval workflow', 
  body: "The artwork approval process is where most print shop production schedules break down. Every unapproved job sitting in an email thread is a slot on the press that cannot be planned. Automating the artwork approval workflow — from brief through proof to sign-off — typically reduces production delays by 20–40% without any change to the print process itself." 
}
```

**Add challenge**:
```js
{ 
  title: 'Print production scheduling and capacity planning', 
  body: "Print production scheduling software that cannot account for substrate, print method, drying time, and finishing dependencies cannot produce a realistic schedule. Most print shops are scheduling by eye and experience — which works until volume grows beyond what one person can hold in their head." 
}
```

#### Add FAQPage Schema
```js
{
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What software does a print shop need for operations management?',
      acceptedAnswer: { '@type': 'Answer', text: 'A print shop typically needs: production scheduling software that accounts for method and substrate; artwork management and approval software; an order management or MIS system; eCommerce integration if selling online; and invoicing connected to production. The specific system depends on your print methods, run lengths, and customer mix.' },
    },
    {
      '@type': 'Question',
      name: 'How do I improve my print shop\'s artwork approval workflow?',
      acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current approval process step by step — from artwork received to sign-off confirmed. Most print shops lose 2–3 days per job in the approval loop because it relies on email and manual chasing. Artwork management software that automates proof delivery, revision tracking, and sign-off confirmation can reduce that loop to hours without changing the production process.' },
    },
  ],
},
```

---

## D. LOCATION PAGES

---

### D1. `/locations/fractional-cto`
**File**: `app/locations/fractional-cto/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `hire fractional cto` (Vol 170, Diff 3)

#### H1 Change
**Current**: `Fractional CTO services across <span>Sussex and Surrey</span>`  
**Change to**: `Hire a fractional CTO <span>across Sussex, Surrey, and the UK</span>`

#### Intro Paragraph
**Current**: `Senior technology leadership for growing businesses — without the cost of a full-time hire...`  
**Change to**: `Hire a fractional CTO for your print, embroidery, or decoration business — with 25+ years of sector-specific experience and no vendor ties. Technology leadership without the full-time cost. Based in West Sussex, on-site wherever you need it across the UK.`

#### "Not sure where to start?" Section H2
**Current**: `Start with a Clarity Audit`  
No change needed.

#### Add a Body Section Between Hero and Locations Grid
Add a new `<section>` before the counties map loop:
```jsx
<section className="py-12 bg-[#023047]/5">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-[#023047] mb-4">Fractional CTO services for print and decoration businesses</h2>
      <p className="text-[#023047]/70 leading-relaxed mb-4">
        Fractional CTO services give you the technology leadership a growing business needs — without recruiting for a role your business may not yet be ready to support full-time. Vendor oversight, technology roadmap ownership, and a direct line to someone who understands ERP for small business in the print and decoration sector.
      </p>
      <p className="text-[#023047]/70 leading-relaxed">
        Available UK-wide. Based in West Sussex. On-site where the work requires it.
      </p>
    </div>
  </div>
</section>
```

#### Add FAQPage Schema
Add to the file (currently has no structured data):
```js
import { JsonLd } from '@/components/JsonLd';

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where does the fractional CTO service cover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Based in West Sussex, the fractional CTO service covers businesses across Sussex, Surrey, and the wider UK. On-site days are available throughout the UK for businesses that need hands-on involvement.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between hiring a fractional CTO and using managed IT support?',
          acceptedAnswer: { '@type': 'Answer', text: 'Managed IT support services handle day-to-day IT issues — helpdesk, hardware, network. A fractional CTO provides strategic technology leadership: ERP selection, system architecture, vendor management, and technology roadmap ownership. Fractional CTO services address the decisions that determine where the business is going; managed IT support keeps the current setup running.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer fractional CTO services for print businesses in Sussex?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fractional CTO for print and decoration businesses in West Sussex and across the South East is a core offering. The service combines sector-specific experience in print, embroidery, and decorated goods with technology leadership — not generic IT consultancy.' },
        },
      ],
    },
  ],
};
```
Add `<JsonLd data={locationSchema} />` at the top of the returned JSX.

---

## E. BLOG POSTS

---

### E1. `/blog/the-real-cost-of-a-failed-erp-project`
**File**: `app/blog/the-real-cost-of-a-failed-erp-project/page.tsx`  
**Metadata**: Needs updating — target:
```ts
title: 'ERP Implementation Failure: The Real Cost for Print & Embroidery Businesses | Decoded Ops',
description: 'How much does an ERP implementation failure actually cost in print, embroidery, and decoration? More than the software. The real numbers — and what an independent ERP implementation consultant would have prevented.',
```
**Primary keyword**: `erp implementation failure` (Vol 480, Diff 19)

#### H1 Change
**Current**: `The Real Cost of a <span>Failed ERP Project</span>`  
**Change to**: `ERP Implementation Failure: <span>The Real Cost for Print Businesses</span>`

#### Add H2 Near the Top
After the opening 3–4 paragraphs, change or add:  
`<h2>Why ERP implementation failure is so common in this sector</h2>`  
(Move or rename an existing H2 if necessary — aim to have this as the second H2 in the article.)

#### Update Existing H2 "Why ERP Projects Fail in This Sector"
**Change to**: `The five patterns behind every ERP implementation failure`

#### Update Existing H2 "What an Audit Would Have Caught"
**Change to**: `What independent ERP oversight would have prevented`

#### Update the Intro Paragraph Below the New H2
After `<h2>The five patterns behind every ERP implementation failure</h2>`, add/update the intro:  
> ERP implementation failure in the print and embroidery sector follows a predictable pattern. The same five mistakes appear across almost every failed or struggling implementation. Manufacturing ERP software is not inherently unreliable — but it is almost always implemented without the right brief, the right oversight, or the right internal ownership.

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'How much does ERP implementation cost for a small business?',
  acceptedAnswer: { '@type': 'Answer', text: 'For a small business in the print or embroidery sector, an ERP implementation typically costs £30,000–£120,000 in total, including software licences, implementation fees, internal staff time, and training. Without independent oversight, cost overruns of 30–60% are common. The implementation I describe in this article reached £250,000 in total cost against an original estimate of around £80,000.' },
},
{
  '@type': 'Question',
  name: 'Should I hire an ERP implementation consultant for a small manufacturing business?',
  acceptedAnswer: { '@type': 'Answer', text: 'Yes — particularly if you are selecting ERP without previous experience in the sector, or if the implementation involves connecting multiple systems (eCommerce, production, B2B ordering). An independent ERP implementation consultant writes the brief before you approach vendors, holds the vendor to account during delivery, and signs off milestones before payments are released. Against a £100,000+ implementation, the cost of independent oversight is modest.' },
},
```

---

### E2. `/blog/ecommerce-integration-trap`
**File**: `app/blog/ecommerce-integration-trap/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `ecommerce fulfilment` (Vol 1600, Diff 15) — use in H2s and body

#### H1 — No Change Needed
Current H1 is strong. No change.

#### Update Existing H2 "Where It Breaks Down"
**Change to**: `Where eCommerce fulfilment breaks down for decorated goods businesses`

#### Update Existing H2 "The Integration False Promise"
**Change to**: `The false promise: eCommerce integration will fix the fulfilment problem`

#### Update Existing H2 "What You Should Have Done Differently"
**Change to**: `How to avoid the eCommerce fulfilment trap`

#### Add Paragraph in "The Workflow Problem" Section
After the existing paragraph about 2–3 minutes per order, add:  
> This is not an eCommerce fulfilment problem — it is a systems integration problem that shows up at fulfilment. The eCommerce platform captures the order. The ERP or MIS needs to execute it. When those two systems are not connected, a person in the middle is the integration.

#### Add Paragraph in "2. Look for platforms built for your industry" Section
After the existing paragraph, add:  
> B2B order management is another area where generic platforms fall short. If you have wholesale customers placing repeat orders, a B2B portal with account pricing, order history, and direct-to-production routing is what makes that relationship scalable — not a Shopify store with a wholesale password.

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'Why do Shopify ERP integrations fail for print and embroidery businesses?',
  acceptedAnswer: { '@type': 'Answer', text: 'Shopify ERP integrations for print businesses fail because Shopify\'s data model does not natively support personalisation, decoration method selection, or artwork upload. The integration can move order totals and customer details — but the production-critical information that a print or embroidery business needs rarely transfers cleanly. The result is an integration that technically works but still requires significant manual intervention.' },
},
{
  '@type': 'Question',
  name: 'What is the typical cost of an eCommerce integration project for a decoration business?',
  acceptedAnswer: { '@type': 'Answer', text: 'A custom integration between a generic eCommerce platform and an industry ERP typically costs £20,000–£50,000 with a 3–6 month timeline. Even after the integration is built, the customisation problem — artwork validation, production workflow — is not solved. The integration only passes data between two systems that were not designed for your business.' },
},
```

---

### E3. `/blog/what-happens-when-your-systems-go-down`
**File**: `app/blog/what-happens-when-your-systems-go-down/page.tsx`  
**Metadata**: ✅ Already updated  
**Primary keyword**: `drp disaster recovery plan` (Vol 480, Diff 8) — work into H2s and body

#### H1 Change
**Current**: `What Happens When <span>Your Systems Go Down</span>`  
**Change to**: `When Your Systems Go Down: <span>Build Your DRP Disaster Recovery Plan Now</span>`

#### Update Existing H2 "The Cost of Not Being Prepared"
**Change to**: `The cost of operating without a disaster recovery plan`

#### Update Existing H2 "What a Good DR Plan Looks Like"
**Change to**: `What a DRP disaster recovery plan looks like for a small business`

#### Add Paragraph After "What a DRP disaster recovery plan looks like" H2
After the opening sentence of that section, add:  
> A disaster recovery policy does not need to be a 50-page document — but it does need to exist in writing, somewhere accessible even when the network is down. Backup and disaster recovery are related but different. Backup stores your data. A DRP defines how you restore operations: which systems come back first, in what order, within what recovery time objective.

#### Update Existing H2 "What You Can Do Today"
**Change to**: `Three things you can do this week towards backup and disaster recovery`

#### FAQ Schema — Add Two New Questions
```js
{
  '@type': 'Question',
  name: 'What is a DRP disaster recovery plan and does my small business need one?',
  acceptedAnswer: { '@type': 'Answer', text: 'A DRP (disaster recovery plan) is a documented set of procedures for restoring critical systems after an outage, failure, or cyberattack. Every business that depends on software to take orders, manage production, or despatch goods needs one. Without a DRP, the question is not whether a recovery plan exists — it is whether you can afford to find out it does not.' },
},
{
  '@type': 'Question',
  name: 'What is the difference between backup and disaster recovery for a small manufacturer?',
  acceptedAnswer: { '@type': 'Answer', text: 'Backup stores copies of your data. Disaster recovery defines how your business gets back to operational status after a failure — in what order systems are restored, by whom, within what time target. A business continuity disaster recovery plan covers both: what data is protected and how fast operations can resume. Cloud backup without a recovery procedure is a false sense of security.' },
},
```

---

## F. NEW PROBLEM PAGES — Keyword Audit

These pages were created from scratch. The instructions below verify keyword coverage and add any missing elements.

---

### F1. `/problems/slow-processes`
**File**: `app/problems/slow-processes/page.tsx`  
**Primary keyword**: `process improvement consultant` (Vol 590, Diff 20)

#### Verify `headline` Prop Contains Problem Framing
Current headline: `"The bottleneck isn't always ||a software problem.||"`  
This is strong. No change needed but confirm that `howIHelp` references `process improvement` explicitly.

#### `howIHelp` Prop — Add Keyword
Ensure the following sentence is present in `howIHelp`:  
> This is the process improvement consultancy approach — observe first, quantify second, recommend third. No workshops. No questionnaires. A day in your business and a written report within five working days.

#### FAQ Schema — Verify or Add
Ensure the following Q&As exist in `FAQPage.mainEntity`:
```js
{
  '@type': 'Question',
  name: 'What does a process improvement consultant do for a print or decoration business?',
  acceptedAnswer: { '@type': 'Answer', text: 'A process improvement consultant observes your actual workflows — not the documented ones — and identifies where time, money, and quality are being lost. In the print and embroidery sector, this typically covers the order intake to despatch cycle, artwork approval loops, production scheduling, and the handoffs between departments. The output is a prioritised improvement plan with every finding quantified in hours per week and pounds per year.' },
},
{
  '@type': 'Question',
  name: 'How do I improve production efficiency in a small manufacturing or decoration business?',
  acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current process end to end — from the moment an order arrives to the moment it leaves the building. Time each step. Identify where jobs pause, where information is missing, and where work is being done twice. Process bottleneck analysis tells you where to focus improvement effort first. The biggest gains are almost always in the handoffs between steps, not in the steps themselves.' },
},
{
  '@type': 'Question',
  name: 'Is process improvement the same as lean manufacturing?',
  acceptedAnswer: { '@type': 'Answer', text: 'Lean process improvement principles apply to print, embroidery, and decoration businesses — but the terminology and complexity of a full lean implementation is often overkill for a business under £5m. The practical goal is the same: eliminate the steps that do not add value, reduce waiting time between steps, and make the workflow visible and manageable.' },
},
```

---

### F2. `/problems/cant-scale-operations`
**File**: `app/problems/cant-scale-operations/page.tsx`  
**Primary keyword**: `scaling operations small business` (Vol 320, Diff 17)

#### Verify `headline` Prop
Ensure primary keyword framing is present. Suggest: `"Your business is growing. ||Your operations aren't scaling with it.||"`

#### `intro` Prop — Verify Keyword
Ensure `scaling operations` appears naturally in the intro. If not, add:  
> Scaling operations in a small business is not just about doing more of the same — it is about rebuilding the systems and processes that were designed for half your current volume before they become the ceiling on your growth.

#### FAQ Schema — Verify or Add
```js
{
  '@type': 'Question',
  name: 'Why does scaling a small business feel harder than growing it?',
  acceptedAnswer: { '@type': 'Answer', text: 'Because growth adds volume to systems and processes that were designed for a smaller operation. Every workaround, manual step, and undocumented process that was manageable at £500k becomes a bottleneck at £1m. Scaling operations in a small business requires rebuilding the operational infrastructure before the volume overwhelms it — not after.' },
},
{
  '@type': 'Question',
  name: 'What are the signs that my operations are not keeping up with growth?',
  acceptedAnswer: { '@type': 'Answer', text: 'The most common signs: despatch lead times are creeping up despite no change in production capacity; the same operational bottlenecks keep reappearing; customer complaints are increasing proportionally faster than order volume; you are hiring but the output per person is falling; and the business owner is spending more time on operational firefighting than on the business itself.' },
},
{
  '@type': 'Question',
  name: 'How do I scale a print or decoration business operationally?',
  acceptedAnswer: { '@type': 'Answer', text: 'Start with an honest assessment of where the current bottlenecks are — not where they were six months ago, but where they are right now. Scaling operations in a print or decoration business typically involves three stages: documenting and stabilising current processes, connecting systems so information flows without manual intervention, and building the management visibility to make operational decisions on data rather than gut feel.' },
},
```

---

## G. CROSS-CUTTING RULES

Apply these rules across all pages when making changes:

1. **Never keyword-stuff.** Every keyword must appear naturally in readable, useful copy.
2. **One primary keyword per page.** Do not introduce primary keywords from other pages into copy.
3. **FAQ questions can be exact match.** Search engines use FAQ schema text directly — it is acceptable to use the keyword phrase in the question text naturally.
4. **Internal links.** Where the copy mentions a related service or problem, add an internal link using the existing `<Link href="...">` pattern. Key link targets:
   - `/clarity` — when mentioning "audit", "technology audit", "one-day audit"
   - `/deliver` — when mentioning "ERP implementation", "vendor management"
   - `/retained` — when mentioning "fractional CTO", "ongoing support"
   - `/contact` — any CTA button
5. **Do not change CTA button copy or colours.** CTAs use the existing Amber/Orange palette and `rounded-full` styling — do not modify.
6. **Do not change file structure.** Only modify content within existing JSX. Do not add new components, new imports (except `JsonLd` where it is missing and needed), or new files.
7. **JsonLd import.** Where a FAQ schema is being added to a page that doesn't currently have one, import `JsonLd` from `'@/components/JsonLd'` and add `<JsonLd data={schemaVariable} />` at the top of the returned JSX.
8. **ProblemPage schema changes** require modifying the `const [name]Schema` object in the file, then passing it to `<JsonLd data={...} />`. The `ProblemPage` component itself does not accept a schema prop.

---

## H. IMPLEMENTATION ORDER (PRIORITY)

| Priority | Page | Reason |
|----------|------|--------|
| 1 | `/retained` | Highest-volume primary keyword (590), low difficulty (8) — quick win |
| 1 | `/locations/fractional-cto` | Hire intent keyword (170, diff 3) — ranks fastest |
| 1 | `/problems/erp-implementation-failure` | Primary keyword already in URL, high volume (480) |
| 1 | `/blog/what-happens-when-your-systems-go-down` | Primary KW diff 8 — should rank fast once content updated |
| 2 | `/clarity` | Core service page — supports conversion |
| 2 | `/deliver` | Core service page — ERP implementation keyword (260) |
| 2 | `/problems/ecommerce-not-connected` | High secondary keyword volumes |
| 2 | `/blog/ecommerce-integration-trap` | Primary KW vol 1600 |
| 3 | All sector pages | Lower volume primaries but build topical authority |
| 3 | `/problems/ai-paralysis`, `/manual-workarounds`, `/no-ops-owner` | Supporting pages |
| 4 | `/transform`, `/small-business` | After core pages stabilised |

---

*End of brief. All changes are additive or minor revisions — no pages are being rebuilt from scratch.*
