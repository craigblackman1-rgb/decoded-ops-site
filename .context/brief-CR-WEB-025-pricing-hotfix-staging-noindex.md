# CR-WEB-025 — Remove public day-count language + stop staging being indexed

**Repo:** `decoded-ops-website` · **Two independent parts, both in this one lane.**
**Approved by Craig in chat, 8 September 2026.**

---

## CRITICAL RULE — read first

The **only** price that may remain anywhere public is the **Clarity Audit at "From £1,500"**, which is the current canonical figure from `DO_Pricing_Architecture_v10.0.md`.

**Do NOT publish any v11 figure.** v11 is a proposal awaiting Craig's approval. If you see £2,500, £3,750, £14,500, £94,800 or similar anywhere, they are not approved and must not appear on the website.

Every other price on the public site comes out. Not reworded — removed.

---

# PART 1 — Pricing content hotfix

## Why

`https://decodedops.co.uk/pricing.md` currently returns HTTP 200 with:

```
- Advisory: £1,440/month (2 days/month). 6-month minimum.
- Embedded: £2,880/month (4 days/month). 6-month minimum.
- Programme: £5,760/month (8 days/month). 6-month minimum.
```

£1,440 ÷ 2 = £720. £2,880 ÷ 4 = £720. £5,760 ÷ 8 = £720. The internal day rate is publicly recoverable three separate ways. The same day-count framing is on `/retained` and `/pricing`, including in indexed page metadata and JSON-LD structured data.

This breaches the single hardest standing rule in the business: the day rate is internal, permanently.

## 1.1 — DELETE `public/pricing.md`

Delete the file outright. It is four months stale, contradicts the live `/pricing` page on nearly every figure, is unguarded by middleware, and is the worst of the three leaks. No redirect needed — it was never a linked page.

## 1.2 — `app/pricing/page.tsx` — keep the route, remove everything above the audit

The URL stays (it ranks at position 10.1 and a 404 gains nothing). Gut the content.

**REMOVE entirely:**
- The whole Deliver / Transform segment-band table (all the `£1,200–£1,500`, `£1,400–£2,000`, `£1,800–£2,500+`, `£1,500–£2,200`, `£2,000–£3,200`, `£3,000–£5,000+` rows and their "typically £X" sub-lines)
- The Retained row: `£1,440 · £2,880 · £5,760 per month` and `"Advisory, Embedded and Programme: 2, 4 and 8 days a month."`
- The entire "Retained Transformation" `<h3>` section and its segment table (`£1,500`/`£2,000`/`£3,000`, `£1,800`/`£2,500`/`£4,000`, `£2,200`/`£3,200`/`£5,000+`)
- The small-business session-count line: `"One, two or three four-hour sessions a month."`
- Any remaining occurrence of the words `day`, `days`, `day rate`, `four-hour session`, or a session count tied to a price

**KEEP:** the Clarity Audit entry only — `From £1,500`, with its existing description (one day on site is fine to describe as a *duration of the engagement*; what is banned is a day **count tied to a price**, e.g. "2 days a month at £1,440"). If in doubt, describe it as "a day on site and a written plan within five working days" and do not restate it as a rate.

**REPLACE the removed tables with a short qualification section.** Suggested copy — adjust for voice, keep it brief:

> **Everything past the audit is priced after a conversation.**
>
> What an engagement costs depends on the size of the operation, how many systems are involved, and how much of the work we take on. We will not quote a number before we understand those things, because a number quoted blind is either too high to be fair or too low to be delivered.
>
> The Clarity Audit is the way in. It is a fixed price, it stands alone, and it produces a written plan and a firm price for whatever comes next.

**CHANGE the `<h1>`.** It currently reads *"Plain pricing. No hidden day rate."* — a defensive claim that draws attention to the exact thing being removed. Replace with something that leads on the audit as the entry point. Suggestion: **"Start with the audit."** or **"One fixed price to start."**

**UPDATE page metadata and Open Graph** (lines ~16 and ~21). The current description — *"Plain pricing for the consultancy: Clarity Audit, Deliver, Transform and Retained, plus the small business tier. No hidden day rate. App builds are scoped and quoted per business."* — must lose "No hidden day rate" and the product list that no longer has prices.

## 1.3 — `app/retained/page.tsx` — strip every day count

**REMOVE:**
- `<h2>Fixed days a month. Fixed price.</h2>` — replace with an outcome-led heading
- Every `"2 days a month"`, `"4 days a month"`, `"8 days a month"` — in the feature grid AND inside the SVG `<text>` elements
- `"2, 4 and 8 days a month. Price scales in proportion."` (both the `<p className="lead">` and the SVG `sub=` prop)
- The SVG line `"Double the days, double the price, every time."`
- **The three JSON-LD `Offer` objects** at lines ~44–46 (`price: '1440'`, `'2880'`, `'5760'`). Remove the `offers` array entirely — do not replace with different prices. Keep the rest of the `Service` schema.
- `"Fixed days a month, agreed at the start."` from the `metadata.description`, the Open Graph `description`, AND the JSON-LD `description` (three separate places, lines ~14, ~19, ~33)
- The stale code comment at line ~8 referencing day counts "per pricing v8.1"

**KEEP** the three tier names (Advisory, Embedded, Programme) and describe them by **what they cover and how involved Craig is**, not by days or price. Route the page CTA to the Clarity Audit.

## 1.4 — Sweep the rest of the site

Search the whole repo (excluding `node_modules`, `.next`, `dist`) for: `£1,440`, `£2,880`, `£5,760`, `1440`, `2880`, `5760`, `£720`, `day rate`, `days a month`, `days/month`, `four-hour session`. Check at minimum `/clarity`, `/deliver`, `/apps`, `/apps/commerce`, nav and footer components, `app/opengraph-image*`, and any sitemap or feed.

Report every hit. Remove any that is publicly reachable.

## 1.5 — `public/llms.txt`

It currently claims *"prices appear on `/pricing` and nowhere else"* (false — `pricing.md` also served them) and states *"Deliver: Pricing by turnover band."*

Update so it is accurate after this change: the Clarity Audit price is published; everything else is quoted after a conversation. Remove the "and nowhere else" claim or make it true.

---

# PART 2 — Stop staging being indexed

## Why

Google Search Console, 10 June – 8 September 2026:
- `staging.decodedops.co.uk/pricing` — 5 impressions
- `staging.decodedops.co.uk/apps/data-app` — 1 click, 6 impressions

`public/robots.txt` is a static file containing `User-agent: * / Allow: /` and a production sitemap URL. It ships identically to staging, so staging invites crawling and points at the production sitemap.

## 2.1 — Replace the static robots.txt with a host-aware one

Delete `public/robots.txt`. Create `app/robots.ts` (Next.js Metadata Route) that:

- returns `Allow: /` plus `Sitemap: https://decodedops.co.uk/sitemap.xml` **only** for the production host
- returns `Disallow: /` with **no** sitemap line for any other host

Determine "production" from an environment variable — check what is already available in `next.config.ts` and the Coolify deployment env before inventing a new one. If nothing suitable exists, add `NEXT_PUBLIC_SITE_ENV` and default it to non-production so a missing value fails safe (blocked, not crawlable).

## 2.2 — Add a noindex header for non-production (this is the part that actually removes existing pages)

`robots.txt` prevents crawling but does **not** remove already-indexed URLs — a blocked page can stay in the index indefinitely. A `noindex` header does remove them.

In `middleware.ts`, for any non-production host, set on every response:

```
X-Robots-Tag: noindex, nofollow
```

Do not disturb the existing auth logic in that file — this is an additional header on the response, not a change to any redirect or matcher behaviour. Confirm the middleware `matcher` covers the routes being served; widen it only if it genuinely does not.

## 2.3 — Do not emit a sitemap on staging

If there is a `sitemap.ts` or `sitemap.xml`, make it return empty (or 404) on non-production hosts.

---

# CONSTRAINTS

1. **Do not push.** Commit only. Claude verifies in a browser and pushes.
2. **Do not run a dev server. Do not run Playwright or any browser automation.**
3. No new dependencies. No redesign — this is content removal plus two small config changes. Reuse existing classes and components.
4. Do not touch the client portal, auth, `/clients/*` or `/admin/*` logic.
5. Do not publish any v11 price. The only public price is `From £1,500` for the Clarity Audit.
6. Keep commits separate and clearly messaged: one for Part 1 (CR-WEB-025), one for Part 2 (the staging noindex bug).

# VERIFY BEFORE COMMITTING

- `npm run build` passes — paste the actual tail of the output into the lane log.
- `grep -rn "day rate\|days a month\|days/month\|1,440\|2,880\|5,760\|£720\|four-hour session" app public --include=*.tsx --include=*.ts --include=*.md --include=*.txt` returns **nothing** publicly reachable. Paste the command output.
- `public/pricing.md` no longer exists.
- No JSON-LD `Offer` with a price remains in `app/retained/page.tsx`.
- `From £1,500` still appears on `/pricing` — that one is meant to stay.
- State the before/after line counts of every file you changed.
