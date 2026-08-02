import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Spreadsheet addiction — Decoded Ops',
  description: "The spreadsheet that runs your business is one corrupted file away from disaster. Why decorated-goods businesses depend on spreadsheets they've outgrown — and how documented process replaces a single point of failure with something everyone can trust.",
  alternates: { canonical: '/problems/spreadsheet-addiction' },
  openGraph: {
    title: 'Spreadsheet addiction — Decoded Ops',
    description: "The spreadsheet that runs your business is one corrupted file away from disaster. Why decorated-goods businesses depend on spreadsheets they've outgrown.",
    url: 'https://decodedops.co.uk/problems/spreadsheet-addiction',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spreadsheet addiction — Decoded Ops',
    description: "The spreadsheet that runs your business is one corrupted file away from disaster.",
  },
};

const spreadsheetAddictionSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When does a business spreadsheet become a single point of failure?',
          acceptedAnswer: { '@type': 'Answer', text: 'When it is the only place the order log, supplier prices, or artwork approvals live — and when only one person knows how it works. Five tabs, macros that run on one machine, no audit trail, no backup. One corrupted save or accidental overwrite and a week of orders is gone with no way to reconstruct it.' },
        },
        {
          '@type': 'Question',
          name: 'What are the real failure modes of spreadsheet dependency in decorated goods?',
          acceptedAnswer: { '@type': 'Answer', text: 'Four are common. Stale supplier price lists that lead to orders quoted at the wrong price. No audit trail when a customer disputes an order quantity. A macro built by one person over years that nobody else can maintain when they leave. A corrupted file with no recent backup, forcing months of orders to be reconstructed from emails and memory.' },
        },
        {
          '@type': 'Question',
          name: 'How does the Process & Quality System replace spreadsheet dependency?',
          acceptedAnswer: { '@type': 'Answer', text: 'The PQS replaces the dependency on one file with documented processes that live outside anyone\'s laptop. The order log becomes a named process with a documented workflow, not a file that only opens on one version of Excel. Where the spreadsheet was doing something useful — tracking orders, managing prices — a Clarity Audit finds the right tool to replace it, whether that is a small system, a Data App layer, or a properly-structured process document.' },
        },
        {
          '@type': 'Question',
          name: 'Can I transition off spreadsheets without disrupting the business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. A Clarity Audit maps every process that currently depends on a spreadsheet — and the written plan tells you which ones to move first, in what order, before the file that runs the business stops opening. The transition is phased, not a cliff-edge cutover.' },
        },
      ],
    },
  ],
};

export default function SpreadsheetAddictionPage() {
  return (
    <>
      <JsonLd data={spreadsheetAddictionSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
        { name: 'Spreadsheet addiction', url: 'https://decodedops.co.uk/problems/spreadsheet-addiction' },
      ]} />

      {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">The problem</span>
            <h1>The spreadsheet that runs your business is one corrupted file away from disaster.</h1>
            <p className="lede">It started as a tidy little order log. Now it&apos;s got five tabs, three people
              editing it, macros that only work on one person&apos;s machine, and a version history nobody
              fully trusts. Every decorated-goods business has one — and every one of them is one
              accidental keystroke away from taking a day&apos;s orders with it.</p>
            <div className="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
            </div>
          </div>
          <figure className="evidence">
            <img src="/images/real-example.jpg"
              alt="Production in progress — orders, specifications and deadlines that should not be living inside a single spreadsheet file." />
            <figcaption className="stamp">YOUR BUSINESS IS A .XLSX FILE</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Sound familiar?</span>
          <h2>Seven signs your spreadsheet has become the single point of failure.</h2>
          <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the spreadsheet
            isn&apos;t a tool any more. It&apos;s a risk the business is carrying every day.</p>

          <ul className="symptoms">
            <li>You wouldn&apos;t know where to start if the file got corrupted or deleted</li>
            <li>Supplier price lists in the spreadsheet are three versions out of date</li>
            <li>Only one person knows how the macros work — and they&apos;re on holiday this week</li>
            <li>The order log has no audit trail — you can&apos;t see who changed what or when</li>
            <li>Someone accidentally saved over a full day&apos;s data and nobody noticed for a week</li>
            <li>You&apos;ve got a separate spreadsheet for every supplier because one file can&apos;t hold them all</li>
            <li>The business can&apos;t be sold because the buyer would need to understand the spreadsheet first</li>
          </ul>
        </div>
      </section>

      {/* ── 3 · THE REAL FAILURE MODES ─────────────────────────────────────── */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Real failure modes</span>
          <h2>These aren&apos;t theoretical. They&apos;ve all happened in this sector.</h2>
          <p className="lede" style={{ marginTop: 16 }}>A spreadsheet failure in decorated goods doesn&apos;t look
            like an IT problem. It looks like a production line that doesn&apos;t know what it&apos;s making this
            morning.</p>

          <div className="grid grid--2" style={{ marginTop: 34 }}>
            <article className="card cause">
              <span className="n">01</span>
              <h3>The price list that went out of date</h3>
              <p>A supplier raised prices in December. The spreadsheet still had the old rates. By the
                time anyone noticed, forty orders had been quoted at the wrong price — and the difference
                came out of margin, not the customer&apos;s invoice.</p>
            </article>
            <article className="card cause">
              <span className="n">02</span>
              <h3>The order log with no audit trail</h3>
              <p>A key customer disputed an order quantity. The spreadsheet showed one number; they had
                an email confirming another. With no audit trail, there was no way to prove which was
                right — so the business ate the difference to keep the relationship.</p>
            </article>
            <article className="card cause">
              <span className="n">03</span>
              <h3>The macro that only worked on one machine</h3>
              <p>One person built the order-processing macro over several years. When they left, nobody
                else knew how it worked — and the replacement system took six months to build, during
                which every order was processed by hand.</p>
            </article>
            <article className="card cause">
              <span className="n">04</span>
              <h3>The corrupted file with no backup</h3>
              <p>A spreadsheet with two years of order history became corrupted during a save. The most
                recent backup was eight months old. Eight months of order data had to be reconstructed
                from emails, delivery notes, and memory.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── PLATE · DO-ART-416 ──────────────────────────────────────────── */}
      <section className="g-white" data-od-id="plate">
        <div className="wrap">
          <Plate tone="dark" no="DO-ART-416" title="Single file → documented system" rev="01" cls="DECODED OPS · ISSUED">
            <rect x="50" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
            <text x="80" y="150" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">One corrupted file = lost orders</tspan></text>
              <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Supplier prices: three versions out of date</tspan></text>
              <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Macros only work on one machine</tspan></text>
              <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">No audit trail, no accountability</tspan></text>
            </g>

            <rect x="850" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
            <text x="880" y="150" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Documented processes live outside any file</tspan></text>
              <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Automated supplier price feeds</tspan></text>
              <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Standard tools anyone can use</tspan></text>
              <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Full audit trail, every change tracked</tspan></text>
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
          <h2>Documented process, not a single file nobody else can read.</h2>

          <div className="answer">
            <p>The Process &amp; Quality System replaces the dependency on one spreadsheet with
              documented processes that live outside anyone&apos;s laptop. <b>The order log becomes a named
              process with a documented workflow, not a file that only opens on one version of
              Excel.</b></p>
            <p>Where the spreadsheet was actually doing something useful — tracking orders, managing
              supplier prices, routing artwork approvals — a Clarity Audit finds the right tool to
              replace it, whether that&apos;s a small system, a Data App layer, or a properly-structured
              process document that doesn&apos;t rely on one person&apos;s macros.</p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-white cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Find out what&apos;s actually living in your spreadsheets.</h2>
          <p className="lede">A Clarity Audit maps every process that currently depends on a spreadsheet —
            and the written plan tells you which ones to move first, before the file that runs the
            business stops opening.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
            <Link className="btn btn-ghost btn-arrow" href="/deliver">See how Deliver works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
