# Case Studies Update: Brief for the Website

**Date:** 23 Sep 2026 · **For:** a coding session on the decodedops.co.uk repo (copy change only, no new components)
**Why:** the live pages quote superseded figures, and case study 01 says the client runs Khaos Control. That's been untrue since 25 Aug and breaks the standing rule in `references/stats.md`. Newsletter 01 links here, so this has to be live before it sends.
**Figures source:** `references/stats.md`: the 21 Sep SQL row and the 23 Sep Live Metrics Snapshot.
**Scope:** `/case-studies/case-study-01` and `/case-studies/case-study-02`, plus their cards on `/case-studies`. Case studies 03 (Cobra) and Eternal Fitness are unchanged.

**CR text to file** (`wo cr new`, project decoded-ops-website):
> CR: Update case studies 01 + 02 copy and figures to the 23 Sep 2026 brief in `decoded-ops/Content/case-studies/CASE_STUDIES_UPDATE_BRIEF_2026-09-23.md`. Remove every Khaos Control reference from case study 01 and its card. Name Hanicks on 01 (permission granted 2026-07-30). 02 stays anonymous. Check the DO-ART-205 before/after diagram for any Khaos label and re-label it "Data app (now the ERP)". Verify on the live site, not just the deploy status.

---

## Case study 01: Hanicks (named)

**Card on /case-studies**
- Label: Heating spares & eCommerce · Live engagement
- Title: Hanicks
- Figures on card: 317,812 products brought in · 154,518 matched automatically · 40 active suppliers

**Hero heading**
The ERP changed. The data work carried on.

**Intro**
Hanicks sells heating spares. It isn't decorated goods, but it's the same problem underneath: a big catalogue arriving from lots of suppliers in different formats, which has to be clean and current on every channel it sells through.

**Figures block**
Heading: Not projected. Not modelled. What's actually in the system.
- **317,812** products brought in from supplier feeds
- **154,518** matched to a supplier automatically, before anyone had to touch them
- **40** active suppliers feeding in (89 on file)
- **2,872** new products and **28** new suppliers found in a stock-take reconciliation
- **3,844** Amazon listings re-optimised ahead of a title-format deadline
- **77%** of stock records now have a bin location, and climbing

Small print under the figures: *Catalogue figures from the live system, September 2026.*

**The situation before**
Product data was spread across supplier feeds with no consistent SKU, and no reliable way of knowing what was actually in stock or where it was. The business needed a proper ERP, but going into one with messy data would have meant paying to migrate the mess.

**What was done**
The work started with the data, not the platform. I built the data app to bring in every supplier catalogue, match it against what Hanicks actually sells, and keep it clean and current across their channels.

The off-the-shelf ERP they'd originally chosen stalled on its own terms, nothing to do with the data work, which kept running throughout. So rather than start again with another off-the-shelf system, the data app became the ERP. Their marketplace listings on Amazon, eBay and OnBuy are now linked to it, and a new website is being built on top of the same data.

**What's still in progress**
The catalogue is still being worked through. Unmatched products sit on a visible list rather than being hidden, and the warehouse is being binned and labelled as we go. The new website goes live later this year.

**CTAs** (unchanged): Book a free discovery call · See the Data App

**Do not say:** Khaos Control, in any tense · "put live on Amazon/eBay/OnBuy" or "selling through" (the listings existed already; the app links to and manages them) · the old 164,752 / 127,135 / 77% match / 11,064 figures · any order or revenue figures (none yet, the website isn't live).
**Note on the match rate:** it's 49% now against 77% before because the catalogue nearly doubled. Don't show both side by side.

---

## Case study 02: sports & teamwear client (anonymous; never name the client)

**Card on /case-studies**
- Label: Branded apparel & decoration · In Deliver
- Title: The diagnostic came before the decision.
- Figures on card: 17 supplier feeds automated · 952 products live on their website · 100% of stock binned

**Hero heading** (unchanged)
The diagnostic came before the decision.

**Intro**
A teamwear and schoolwear business selling decorated and plain stock across a lot of suppliers, on an eCommerce platform that needed to show live stock accurately.

**Before / after** (DO-ART-206: text changes only)
Before:
- Hours of manual admin every week
- Supplier feeds that didn't talk to anything
- Stock levels out of date across channels
- Product data re-typed into more than one system

After:
- 17 supplier feeds coming in on their own
- 27,778 supplier products (236,056 sizes and colours) in one place
- Every order landing in one queue, ready to pick
- The same website platform, with the data app doing the work it was never built for

**Figures block**
- **17** supplier feeds automated
- **27,778** supplier products and **236,056** variants in the system
- **1,846** decorated products built from those blanks
- **952** products live on their website through the data app
- **100%** of stock has a bin location
- **20 to 40 hours a week** of admin time, *projected* at discovery (being measured now it's live)

Small print: *Figures from the live system, September 2026. Hours saving is a projection, not yet measured.*

**Situation**
Stock and supplier feeds took a lot of manual admin, pulling people away from running the business.

**What was done**
The eCommerce platform stayed, because it was the right tool for selling. The data app was built alongside it to do the parts the platform was never going to do: supplier feeds kept current, decorated and plain stock tracked separately, warehouse work (bins, barcode scanning, batch picking on a phone), and new products and variants published to the website automatically.

**Progress**
The website integration has been running in production since July. Supplier automation and warehouse tooling are still growing. Next up is measuring the real hours saved to replace the projection.

**Remove:** the list of nine brand categories ("Teamwear brand, Swimwear brand…"), which no longer matches 17 feeds · any supplier brand names that would identify the client · "9 supplier feeds" everywhere.
**Never show:** revenue, units sold or order counts. Client commercial data.

**CTAs** (unchanged): Book a free discovery call · See the Data App
