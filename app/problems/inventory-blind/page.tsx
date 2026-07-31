import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Inventory blind — Decoded Ops',
  description: "You're ordering stock you already have, and running out of stock you didn't know you needed. Why supplier feeds and real-time inventory need to be the same picture for decorated-goods businesses.",
  alternates: { canonical: '/problems/inventory-blind' },
  openGraph: {
    title: 'Inventory blind — Decoded Ops',
    description: "You're ordering stock you already have, and running out of stock you didn't know you needed. Why supplier feeds and real-time inventory need to be the same picture for decorated-goods businesses.",
    url: 'https://decodedops.co.uk/problems/inventory-blind',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inventory blind — Decoded Ops',
    description: "You're ordering stock you already have, and running out of stock you didn't know you needed. Why supplier feeds and real-time inventory need to be the same picture for decorated-goods businesses.",
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
            <p className="lede" style={{ margin: '18px 0 0', maxWidth: '56ch' }}>Supplier feeds tell you what&apos;s available to order. They don&apos;t tell you what
              you&apos;re actually holding, what&apos;s committed to open orders, or what&apos;s about to run out. Two
              separate pictures, and most businesses are making buying decisions on the wrong one.</p>
            <div className="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            </div>
          </div>
          <figure className="evidence">
            <img src="/images/hero-craft.jpg"
              alt="Warehouse shelving stacked with decorated-goods stock, the kind of picture a real-time inventory view should reflect but often doesn&apos;t." />
            <figcaption className="stamp">TWO PICTURES, ONE DECISION</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Sound familiar?</span>
          <h2>Six versions of the same blind spot.</h2>
          <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the gap isn&apos;t
            effort. It&apos;s that stock and supply are living in different systems.</p>

          <ul className="symptoms">
            <li>A reorder goes out for stock that&apos;s sitting on a shelf, unreconciled</li>
            <li>A popular line goes to zero with no warning, because nobody was watching that number</li>
            <li>Committed stock against open orders isn&apos;t subtracted from what looks &ldquo;available&rdquo;</li>
            <li>Someone does a physical stock-take and finds a different number to every system</li>
            <li>Reordering is based on gut feel and who shouts loudest, not what the data says</li>
            <li>A blank/decorated pairing looks in stock when only one half of it actually is</li>
          </ul>
        </div>
      </section>

      {/* ── 3 · WHY THIS HAPPENS ───────────────────────────────────────────── */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Why this happens</span>
          <h2>Three reasons the two pictures stay separate.</h2>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <article className="card cause">
              <span className="n">01</span>
              <h3>Supplier feeds show availability, not your stock</h3>
              <p>A feed tells you what the supplier can sell you. It says nothing about what&apos;s already
                on your shelf, so the two numbers never get compared automatically.</p>
            </article>
            <article className="card cause">
              <span className="n">02</span>
              <h3>Committed stock isn&apos;t subtracted anywhere</h3>
              <p>An order that&apos;s confirmed but not yet despatched still shows as &ldquo;in stock&rdquo; in most
                systems. That gap is exactly where the surprise stockouts come from.</p>
            </article>
            <article className="card cause">
              <span className="n">03</span>
              <h3>Decorated goods are two products wearing one SKU</h3>
              <p>A blank and its decorated version get tracked as if they&apos;re the same item, when a
                stockout on either half means the finished product can&apos;t ship.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow eyebrow--amber">How I help</span>
          <h2>The Data App puts stock and supply in the same picture.</h2>

          <div className="answer">
            <p>Supplier feeds and your real stock position, reconciled continuously, not on whatever
              schedule someone remembers to run a report. <b>What&apos;s on the shelf, what&apos;s committed, and
              what&apos;s actually available, in one number.</b></p>
            <p>An App Scoping Session comes first: a written map of your current stock and feed setup,
              and exactly what a fix would involve, before anything gets built.</p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-white cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Find out what your inventory picture is actually missing.</h2>
          <p className="lede">A half-day session, £750 fixed, never credited against the build.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
