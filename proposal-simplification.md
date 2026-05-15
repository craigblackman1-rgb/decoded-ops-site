# Proposal Simplification — Approach & Reasoning

**Date:** May 2026
**Trigger:** TackleBag feedback — "the proposal was not dumb enough, still too complex and too detailed"
**Applied to:** Cwear (Corporatewear UK) as a test case

---

## The Problem

The existing proposal format (used for Cobra, Hanicks, TackleBag) has 8+ content sections. Each section has multiple sub-components. The total is overwhelming for a busy business owner.

**What makes a proposal "not dumb enough":**
- Too many sections competing for attention
- Too many words per section
- Technical artifacts (SVG diagrams, Gantt charts) that impress consultants but distract prospects
- Defensive pricing sub-sections (value comparisons, ROI tables) that argue against objections the prospect hasn't raised
- Case studies that are generic repeats across proposals rather than specific to the prospect

**The core insight:** A proposal's job is to get a decision, not to demonstrate how thorough you are. Every extra word reduces the chance the prospect reads to the end.

---

## What Changed

### 1. Removed the Systems Diagram (SVG)

**What it was:** An interactive node-link SVG showing "current chaos" vs "future clean" states, with animated data flows.

**Why it went:** It's a technical artifact. It impresses people who already understand systems integration — not the business owner who needs to decide whether to spend £1,500 on a Discovery Day. Vinay doesn't need to see his business rendered as coloured circles and arrows.

**How:** `systems: null` in the data file + a `{systems && <SystemsDiagram />}` guard so null data doesn't fall back to a hardcoded TackleBag diagram.

### 2. Removed the Gantt Timeline

**What it was:** A 10-column, 10-row Gantt-style workstream timeline showing who does what and when, with colour-coded phase bands.

**Why it went:** Gantt charts are for project planning, not selling. A prospect doesn't need to see 10 parallel workstream cells to decide whether Discovery Day is worth £1,500. The phase cards above the Gantt already communicate the sequence clearly.

**How:** Removed `workstreamTimeline` from `roadmap` data + a `{workstreamTimeline && <TimelineTable />}` guard.

### 3. Cut Journey from 10/10 to 5/5 bullets

**What it was:** Two columns — "Now" (10 problems) → "Future" (10 solutions). 20 bullet points in total.

**Why it changed:** Nobody reads 20 bullet points. The first 5 in each column communicate the same story. The rest are variations on a theme (reporting, management time, integration specifics).

### 4. Cut Quick Wins from 6 to 3

**What it was:** 6 audit area cards, each with 3 paragraphs (what/impact/carries) inside an accordion. 18 text blocks total.

**Why it changed:** The six-area audit format (IT infrastructure, systems, eCommerce, operations, growth, AI readiness) is a checklist of completeness, not a decision tool. For Cwear, 3 areas matter: artwork workflow, ERP requirements, and eCommerce integration. Those are what determine whether an ERP will work for a garment decoration business.

### 5. Removed Value Comparison, ROI Table, "Not Included"

**What they were:** Three sub-sections within Pricing — a 3-column comparison table (going direct to vendor vs internal vs Decoded Ops), a 5-row ROI table with estimated savings, and a "what's not included" list.

**Why they went:** These are defensive. They argue against objections the prospect hasn't raised yet. The value comparison shows up saying "here's why the other options are bad" — which creates doubt the prospect may not have had. The ROI table presents made-up estimates that can be challenged in conversation. "Not included" is negative framing that makes the proposal feel like a contract.

**How:** Empty arrays in the data (`valueComparison: []`, `roi: []`, `notIncluded: []`) + conditional rendering guards so empty arrays simply don't render.

### 6. Removed Case Studies

**What it was:** 2 generic case study cards reused across proposals (ERP replacement, ERP evaluation).

**Why they went:** Case studies are powerful — when they're specific to the prospect. Generic ones that appear in every proposal dilute trust. Better to reference relevant experience in conversation or skip them entirely in a Discovery Day proposal where the engagement is small.

### 7. Halved all text lengths

**What changed:** Pain point descriptions went from 3-4 sentences to 2. Roadmap phase details shortened. Pricing card descriptions tightened. Next steps shortened.

**Why:** Every sentence is a friction point. If a sentence doesn't change the decision, cut it.

---

## The New Proposal Template (for future use)

The simplified format has **5 content sections**:

| # | Section | What it does |
|---|---------|-------------|
| 1 | **Challenge** | 2-3 pain points. Makes the prospect feel understood. |
| 2 | **Roadmap** | 3 phase cards. Shows the path without technical detail. |
| 3 | **Quick Wins** | 2-3 accordion cards. Proves you know their sector. |
| 4 | **Why** | Comparison table only (no case studies). Quick differentiator. |
| 5 | **Pricing** | 3 tier cards only. No comparisons, no ROI, no exclusions. |

Optional sections (add only when the prospect specifically needs them):
- **Journey** — when the gap between now and future needs explicit articulation
- **Demo** — when there's a working prototype to show
- **Portal Mockup** — when a B2B portal is part of the scope
- **Systems Diagram** — when the prospect is technically literate and asks for it

**Rules of thumb for all future proposals:**
- If removing it doesn't break the sale, remove it
- If you can say it in 5 words instead of 10, do it
- Don't argue against objections that haven't been raised
- A proposal should be scannable in 60 seconds and readable in 2 minutes

---

## Files Changed

| File | Change |
|------|--------|
| `app/clients/[clientId]/data/cwear-proposal.ts` | ~464 → ~205 lines. Simplified all sections. |
| `app/clients/[clientId]/components/ChallengeSection.tsx` | Added null guard for SystemsDiagram (line 83). |
| `app/clients/[clientId]/components/RoadmapSection.tsx` | Added null guard for TimelineTable (line 241). |
| `app/clients/[clientId]/components/PricingSection.tsx` | Added conditional rendering for value comparison, ROI, and payment/not-included grids. |

The component guards benefit all future proposals — any data file can suppress sections by passing empty arrays or null.
