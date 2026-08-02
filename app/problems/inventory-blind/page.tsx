import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Inventory blind spots — Decoded Ops',
  description: "Ordering stock you already have, and running out of stock you didn't know you needed. Why inventory blindness happens in decorated goods, and how the Decoded Data App builds one real-time stock picture from your supplier feeds.",
  alternates: { canonical: '/problems/inventory-blind' },
  openGraph: {
    title: 'Inventory blind spots — Decoded Ops',
    description: "Ordering stock you already have, and running out of stock you didn't know you needed. Why inventory blindness happens in decorated goods, and how the Decoded Data App builds one real-time stock picture from your supplier feeds.",
    url: 'https://decodedops.co.uk/problems/inventory-blind',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inventory blind spots — Decoded Ops',
    description: "Ordering stock you already have, and running out of stock you didn't know you needed. Why inventory blindness happens in decorated goods, and how the Decoded Data App builds one real-time stock picture from your supplier feeds.",
  },
};

const inventoryBlindSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why am I ordering stock I already have?',
          acceptedAnswer: { '@type': 'Answer', text: 'Supplier feeds tell you what is available to order, not what you are actually holding, what is committed to open orders, or what is about to run out. Two separate pictures, and most businesses make buying decisions on the wrong one.' },
        },
        {
          '@type': 'Question',
          name: 'How do I get a single inventory picture across supplier feeds and stock?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Data App reconciles supplier feeds and your real stock position continuously — not on whatever schedule someone remembers to run a report. What is on the shelf, what is committed, and what is actually available, in one number.' },
        },
        {
          '@type': 'Question',
          name: 'What does a stock and feed assessment actually produce?',
          acceptedAnswer: { '@type': 'Answer', text: 'An App Scoping Session produces a written map of your current stock and feed setup, and exactly what a fix would involve, before anything gets built.' },
        },
        {
          '@type': 'Question',
          name: 'Why do decorated goods cause unique inventory tracking problems?',
          acceptedAnswer: { '@type': 'Answer', text: 'A blank and its decorated version get tracked as if they are the same item, when a stockout on either half means the finished product cannot ship. Most generic systems were never built to handle this.' },
        },
        {
          '@type': 'Question',
          name: 'How do I stop surprise stockouts in my print or embroidery business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Committed stock against open orders needs to be subtracted from what looks available — in real time, not whenever someone remembers to check. The first step is a written assessment of your current stock and feed setup.' },
        },
      ],
    },
  ],
};

export default function InventoryBlindPage() {
  return (
    <>
      <JsonLd data={inventoryBlindSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
        { name: 'Inventory blind', url: 'https://decodedops.co.uk/problems/inventory-blind' },
      ]} />

      {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">The problem</span>
            <h1>You&apos;re ordering stock you already have, and running out of stock you didn&apos;t know you
              needed.</h1>
            <p className="lede">Inventory blindness isn&apos;t a stocktaking problem. It&apos;s a data problem —
              supplier feeds, the ERP, and the warehouse floor all showing a different number for the
              same SKU, so nobody&apos;s confident enough in any of them to order against it.</p>
            <div className="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            </div>
          </div>
          <figure className="evidence">
            <img src="/images/hero-craft.jpg"
              alt="Stock boxed and labelled ready for despatch — the physical inventory the system is supposed to know about." />
            <figcaption className="stamp">WHAT&apos;S ON THE SHELF, NOT WHAT&apos;S ON SCREEN</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Sound familiar?</span>
          <h2>Seven signs you&apos;re flying blind on stock.</h2>
          <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the fix isn&apos;t
            a bigger stocktake. It&apos;s one stock picture everyone actually trusts.</p>

          <ul className="symptoms">
            <li>You&apos;ve placed a repeat order for stock that was already on the shelf</li>
            <li>You&apos;ve run out of a line with no warning, mid production run</li>
            <li>The website says &ldquo;in stock&rdquo; on something the warehouse sold out of days ago</li>
            <li>Nobody trusts the ERP&apos;s stock figure enough to order against it alone</li>
            <li>Someone does a manual stock check before every big order, just in case</li>
            <li>Safety stock is a guess, not a number worked out from real demand</li>
            <li>A rush order gets promised before anyone&apos;s actually checked what&apos;s available</li>
          </ul>
        </div>
      </section>

      {/* ── 3 · THE STOCK PICTURE · solution ───────────────────────────────── */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">The fix</span>
          <h2>One real-time stock picture, not a guess reconciled weekly.</h2>
          <p className="lede" style={{ marginTop: 16 }}>The Decoded Data App combines what your suppliers say
            they&apos;ve got with what&apos;s actually moved through your own warehouse — so the number on screen
            is the number on the shelf.</p>

          <div className="picture">
            <article className="card">
              <h3>Supplier feeds</h3>
              <p>What&apos;s available upstream, refreshed on a schedule that matches how the supplier
                actually updates it.</p>
            </article>
            <span className="arrow" aria-hidden="true">+</span>
            <article className="card">
              <h3>Real warehouse movement</h3>
              <p>What&apos;s physically come in and gone out — picked, packed, and despatched.</p>
            </article>
          </div>
          <div className="picture" style={{ marginTop: 20 }}>
            <article className="card card--result" style={{ gridColumn: '1/-1' }}>
              <h3>= one stock number, everywhere</h3>
              <p>The ERP, the website, and the person taking the order all read the same figure — updated
                as it changes, not reconciled once a week.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── PLATE · DO-ART-420 ──────────────────────────────────────────── */}
      <section className="g-white" data-od-id="plate">
        <div className="wrap">
          <Plate tone="dark" no="DO-ART-420" title="Guesswork → real-time stock picture" rev="01" cls="DECODED OPS · ISSUED">
            <rect x="50" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
            <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Ordering stock you already have</tspan></text>
              <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Running out with no warning mid-run</tspan></text>
              <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Website says in stock, warehouse says sold out</tspan></text>
              <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Nobody trusts the ERP&apos;s stock figure</tspan></text>
            </g>

            <rect x="850" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
            <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Supplier feeds + warehouse movement = one number</tspan></text>
              <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Real-time stock, not reconciled weekly</tspan></text>
              <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Every screen shows the same live figure</tspan></text>
              <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Order against the number, not a guess</tspan></text>
            </g>

            <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
            <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
          </Plate>
        </div>
      </section>

      {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow eyebrow--amber">How I help</span>
          <h2>Stock you can order against, not stock you have to double-check.</h2>

          <div className="answer">
            <p>I map where your stock picture actually breaks down — which feeds, which manual steps,
              which system nobody quite trusts — and build the Data App layer that fixes it.</p>
            <p><b>No more guesswork stock checks before a big order.</b> The number on screen becomes
              the number worth ordering against.</p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-white cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Stop guessing what&apos;s actually on the shelf.</h2>
          <p className="lede">An App Scoping Session maps your current stock picture and what it would take
            to make it real-time.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
