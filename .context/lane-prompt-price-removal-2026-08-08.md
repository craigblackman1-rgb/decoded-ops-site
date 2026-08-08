# Lane: remove pricing from everywhere except /pricing

Repo: `D:\apps\worktrees\decoded-ops-website\staging` (branch `staging`). Work only in this worktree.

## GOAL

Craig's decision, 8 August 2026: **Decoded Ops prices appear on `/pricing` and nowhere else.**

Two figures are deliberate exceptions and must be **left exactly as they are** wherever they already appear:

- **£1,500** — the Clarity Audit entry anchor. Load-bearing in location-page meta descriptions and the site-wide OG card.
- **£750** — the App Scoping Session, the mandatory entry step for the systems line.

These are **not prices** and must also be left alone: turnover bands (`£500k`, `£1m`, `£1.5m`, `£5m`, `£7.5m`), the client's failed-ERP story (`£150,000`, `£10,000`), the salary comparison (`£80k`), and the competitors' market range (`£8,000`–`£20,000` on `/apps/commerce:37`).

## VERIFY (both must pass before you finish)

```
node .context/price-audit.mjs --check
npx tsc --noEmit
```

`--check` exits 0 only when no disallowed price remains outside `/pricing`. It prints the exact `file:line` of anything you missed. Run it after every file.

**Do not run a dev server. Do not run Playwright or any browser.** Claude verifies visually afterwards.

## EXACT CHANGES

Use the replacement copy given below verbatim. Do not write your own copy: the wording is Craig's brand voice and has been drafted for you. **No em dashes anywhere** (hard brand rule), use a comma or a full stop.

### 1. `app/apps/data-app/page.tsx`

- The tier table (~`:175`–`:205`): delete the **Implementation** and **Monthly** columns entirely, header cells and every `<td>`. Keep the **Tier** and **Scope** columns. Adjust `colSpan` / column count if the table markup needs it.
- Leave the App Scoping Session `£750` paragraph at `:168` untouched.
- Replace the paragraph at `:209` (currently begins "Every price on this page is what you'd actually pay") with exactly:

> Every tier price and monthly figure is on the <Link href="/pricing">pricing page</Link>. I'm not VAT registered, so there's no VAT to add to any of them.

- If the section eyebrow reads `What it costs`, change it to `What each tier covers`.

### 2. `app/apps/artwork-manager/page.tsx`

Same treatment as (1): drop Implementation and Monthly columns, keep Tier and Scope, leave the `£750` paragraph, change a `What it costs` eyebrow to `What each tier covers`, and add the same pricing-page sentence after the table.

### 3. `app/apps/commerce/page.tsx`

Same as (1) and (2). **Leave `:37` alone** (the `£8,000`–`£20,000` market-range sentence is about what other people charge, not a Decoded Ops price). Also leave the "Not VAT registered" sentence at `:245` if it carries no figure.

### 4. `app/apps/crm/page.tsx`

Single-row table at `:196`–`:205`. Drop the Implementation and Monthly columns, keep Scope. Add the same pricing-page sentence after it.

### 5. `app/retained/page.tsx`

- `:92`, `:105`, `:118`: change `2 days a month · £1,440` to `2 days a month`, and the same for `4 days a month · £2,880` and `8 days a month · £5,760`. Keep the day counts.
- `:157`, `:167`, `:178`: delete the three `<text>` elements rendering `£1,440`, `£2,880`, `£5,760` inside the DO-ART-204 plate. Keep everything else in the plate, including the caption "Exact scale. Double the days, double the price, every time." That argument still works without the numbers.
- `:8`: update the doc comment so it no longer lists the three figures.
- The CTA already links to the full price list, so nothing to add.

### 6. `app/small-business/page.tsx`

- **Delete the entire DO-ART-208 section, lines `186`–`312` inclusive** (from `{/* PLATE · DO-ART-208 */}` through its closing `</section>`). The whole plate is a day-rate comparison and it publishes the day rate, which is a hard brand rule break. It goes completely. Remove the now-unused `Plate` import only if nothing else on the page uses it.
- The `products` array: remove the `price` field from all six entries (`:76`, `:90`, `:104`, `:118`, `:130`, `:144`) and remove the `tiers` price fields at `:121`–`:123` (keep `name` and `sessions`).
- Remove the JSX that renders those: the `{service.price}` `<span>` at `:362` (and its wrapping flex `<div>` if it then holds only the `<h3>`, in which case keep the `<h3>`), and the `{tier.price}` `<div>` at `:381` (keep `{tier.sessions}`).
- Update the TypeScript types so the removed fields are not still declared as required.
- The visual strip at `:314`–`:343`: delete only the four price `<text>` elements at `:321`, `:327`, `:333`, `:339`. Keep the CLARITY → DELIVER → TRANSFORM → RETAINED boxes and arrows.
- The page already has a "See all pricing" link at `:180`, so nothing to add.

### 7. `components/Header.tsx`

- `smallBusinessPrices` (`:94`–`:103`): remove the `price` field from all six entries and from the type. Keep `label`, `sub`, `href`.
- Remove the JSX that renders it: the `<span>` showing `{p.price}` at roughly `:354`, and simplify the surrounding flex container that only existed to push the price right.
- In the mobile accordion at roughly `:385`, the mapping builds `` `${p.label} — ${p.price}` ``. Change it to just `p.label`. (Note that also removes an em dash, which is correct.)
- Rename the `smallBusinessPrices` const to `smallBusinessProducts`, since it no longer carries prices. Update its usages.

## SCOPE

Touch only the seven files above. Do not reformat unrelated code, do not reorder imports, do not "improve" copy that is not listed here. If `--check` reports a price in a file not on this list, stop and report it rather than editing it.
