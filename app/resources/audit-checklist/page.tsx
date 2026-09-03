import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "operational audit checklist" (secondary: "technology audit checklist small business")
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Operational Audit Checklist',
      description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/audit-checklist',
    },
  ],
};

export const metadata = {
  title: 'Free Technology & Operations Audit Checklist | Decoded Ops',
  description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
  alternates: { canonical: '/resources/audit-checklist' },
  openGraph: {
    type: 'website',
    title: 'Free Technology & Operations Audit Checklist | Decoded Ops',
    description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
    url: 'https://decodedops.co.uk/resources/audit-checklist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Technology & Operations Audit Checklist | Decoded Ops',
    description: 'A practical checklist covering the six areas of a technology and operations audit for print, embroidery, and decoration businesses. Free to download.',
  },
};

const checklist = [
  {
    section: 'IT Infrastructure & Security',
    items: [
      'Do you know what happens to your data if a key team member leaves?',
      'Are backups automated, and do you test them quarterly?',
      'Do you have a password policy (not all passwords are the same across systems)?',
      'Who has access to your financial systems, and is it reviewed annually?',
      'Are you paying for software licenses you no longer use?',
      'Do you know what IT costs you annually (licenses, hardware, support)?',
    ]
  },
  {
    section: 'Systems & Software',
    items: [
      'List every system you use: ERP, eCommerce, accounting, CRM, MIS, etc. Do they integrate?',
      'For each system, do you know: cost per month, how many people use it, and when it was last updated?',
      'Are there manual workarounds in your workflow that are actually compensating for system limitations?',
      'Have you outgrown your current system, or are you making it work through effort?',
      'Is your ERP still being actively supported by the vendor, or are you on old versions?',
    ]
  },
  {
    section: 'eCommerce & Digital Sales',
    items: [
      'If you sell online, does your eCommerce platform talk to your ERP automatically?',
      'Can customers upload custom artwork, and can the system validate it?',
      'Is inventory in your eCommerce platform synced in real-time with your warehouse?',
      'Do you manually re-key orders from your website into your ERP?',
      'Are you losing orders or customers because your online process is broken?',
    ]
  },
  {
    section: 'Processes & Operations',
    items: [
      'Map your main workflows: order to invoice, stock to despatch, artwork to production. Are they documented?',
      'For each workflow, what are the manual steps that shouldn\'t be manual?',
      'How much time per week is spent on re-keying data, re-entering information, or manually reconciling systems?',
      'Do you have duplicate data entry anywhere (same information entered into two systems)?',
      'What process takes the longest, and why?',
      'If a key person leaves, would someone else know how their workflow actually works?',
    ]
  },
  {
    section: 'Inventory & Stock',
    items: [
      'How often do you do physical stock counts? How often do the numbers not match your system?',
      'Do you know the cost of holding excess inventory?',
      'Are there stock items you never use?',
      'How many orders are affected by stock-outs or inaccurate inventory each month?',
      'Is your inventory in one system or spread across multiple places (spreadsheets, warehouse notes, system)?',
    ]
  },
  {
    section: 'Costs & Financial',
    items: [
      'What are your total technology costs (software, licenses, hosting, support, IT staff)?',
      'Are you billing your customers accurately and capturing all billable work?',
      'Do you know your actual cost-per-order (including labor, materials, overhead)?',
      'Are there revenue leaks (jobs underpriced, orders not invoiced, discounts not tracked)?',
      'How long does it take from invoice to cash (days sales outstanding)?',
    ]
  },
  {
    section: 'Growth & Strategic',
    items: [
      'If you want to grow 20% next year, what technology or processes would need to change?',
      'Are there revenue lines (new products, new channels, new markets) you can\'t pursue with your current setup?',
      'What do your fastest-growing competitors do differently operationally?',
      'Are you ready to hire new staff, and would they be able to learn your workflows?',
    ]
  },
];

export default function ChecklistPage() {
  return (
    <>
      <JsonLd data={schema} />
      {/* HERO */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free resource</span>
          <h1>Operational audit checklist</h1>
          <p className="lede">
            20 questions to evaluate your operations, technology, and processes. Use this before you hire a consultant, or to understand what an audit actually covers.
          </p>
        </div>
      </section>

      {/* PLATE · DO-ART-307 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Audit structure &middot; DO-ART-307</span>
          <h2>Six areas you can check today, and the seventh only the checking answers.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            The checklist as a sequence: what you can check today, and the strategic section the first six make possible.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-audit-checklist">
              <Plate tone="dark" p="chk" title="Six areas, then the seventh"
                     sub="The audit checklist as a sequence · what you can check today, and what only the checking answers"
                     no="DO-ART-307" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s2">
                  <text x="80" y="180" className="p-mono" fontSize="14" letterSpacing="2.6" opacity=".45">WHAT YOU CAN GO AND CHECK TODAY</text>
                </g>

                {/* ══ ROW 1 ══ */}
                <g className="sk-fade sk-s3" filter="url(#chk-shadow)">
                  <rect x="80" y="196" width="450" height="170" rx="10" fill="url(#chk-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="585" y="196" width="450" height="170" rx="10" fill="url(#chk-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="1090" y="196" width="450" height="170" rx="10" fill="url(#chk-node)" className="p-node" strokeWidth="1.1"/>
                </g>
                <g className="sk-fade sk-s3">
                  <g className="p-mono" fontSize="15" letterSpacing="2.4" opacity=".45">
                    <text x="106" y="234">01</text><text x="611" y="234">02</text><text x="1116" y="234">03</text>
                  </g>
                  <g className="p-cyan" fontFamily="var(--do-font-heading)" fontSize="15" fontWeight="700" textAnchor="end">
                    <text x="504" y="234">6 questions</text><text x="1009" y="234">5 questions</text><text x="1514" y="234">5 questions</text>
                  </g>
                  <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="26">
                    <text x="106" y="286">IT &amp; security</text>
                    <text x="611" y="286">Systems &amp; software</text>
                    <text x="1116" y="286">eCommerce</text>
                  </g>
                  <g className="p-mono" fontSize="16" opacity=".6">
                    <text x="106" y="322">Backups, access, and what IT costs</text>
                    <text x="611" y="322">Every system, and whether they talk</text>
                    <text x="1116" y="322">Does the website talk to the ERP</text>
                  </g>
                </g>

                {/* row 1 connectors */}
                <path pathLength="1" className="sk-draw sk-s4 p-scyan" d="M534 281 H578" fill="none" strokeWidth="2" markerEnd="url(#chk-ah)"/>
                <path pathLength="1" className="sk-draw sk-s4 p-scyan" d="M1039 281 H1083" fill="none" strokeWidth="2" markerEnd="url(#chk-ah)"/>
                {/* turn down */}
                <path pathLength="1" className="sk-draw sk-s4 p-scyan" d="M1315 370 V410" fill="none" strokeWidth="2" markerEnd="url(#chk-ah)"/>

                {/* ══ ROW 2, runs right to left ══ */}
                <g className="sk-fade sk-s4" filter="url(#chk-shadow)">
                  <rect x="1090" y="416" width="450" height="170" rx="10" fill="url(#chk-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="585" y="416" width="450" height="170" rx="10" fill="url(#chk-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="80" y="416" width="450" height="170" rx="10" fill="url(#chk-node)" className="p-node" strokeWidth="1.1"/>
                </g>
                <g className="sk-fade sk-s4">
                  <g className="p-mono" fontSize="15" letterSpacing="2.4" opacity=".45">
                    <text x="1116" y="454">04</text><text x="611" y="454">05</text><text x="106" y="454">06</text>
                  </g>
                  <g className="p-cyan" fontFamily="var(--do-font-heading)" fontSize="15" fontWeight="700" textAnchor="end">
                    <text x="1514" y="454">6 questions</text><text x="1009" y="454">5 questions</text><text x="504" y="454">5 questions</text>
                  </g>
                  <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="26">
                    <text x="1116" y="506">Processes &amp; operations</text>
                    <text x="611" y="506">Inventory &amp; stock</text>
                    <text x="106" y="506">Costs &amp; financial</text>
                  </g>
                  <g className="p-mono" fontSize="16" opacity=".6">
                    <text x="1116" y="542">Order to invoice, stock to despatch</text>
                    <text x="611" y="542">Whether the count matches the system</text>
                    <text x="106" y="542">Cost per order, and where revenue leaks</text>
                  </g>
                </g>

                {/* row 2 connectors, pointing left */}
                <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M1083 501 H1039" fill="none" strokeWidth="2" markerEnd="url(#chk-ah)"/>
                <path pathLength="1" className="sk-draw sk-s5 p-scyan" d="M578 501 H534" fill="none" strokeWidth="2" markerEnd="url(#chk-ah)"/>
                {/* down into the outcome */}
                <path pathLength="1" className="sk-draw sk-s5 p-samber" d="M305 590 V630" fill="none" strokeWidth="2.5" markerEnd="url(#chk-ah)"/>

                {/* ══ THE SEVENTH ══ */}
                <g className="sk-fade sk-s6">
                  <rect x="80" y="636" width="1460" height="118" rx="10" fill="url(#chk-amber)" className="p-samber" strokeWidth="1.2" strokeOpacity=".5"/>
                  <text x="106" y="674" className="p-amber" fontSize="15" letterSpacing="2.4" fontWeight="600">07 · GROWTH &amp; STRATEGIC</text>
                  <text x="1514" y="674" textAnchor="end" className="p-amber" fontFamily="var(--do-font-heading)" fontSize="15" fontWeight="700">4 questions</text>
                  <text x="106" y="712" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="26">The section you cannot answer until the other six are done</text>
                  <text x="106" y="740" className="p-mono" fontSize="16" opacity=".62">Grow 20% next year, what would have to change? The first six tell you. Guessing does not.</text>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="g-off section--tight">
        <div className="wrap" style={{ maxWidth: 720 }}>

          {/* Intro */}
          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: 64 }}>
            <h2>How to use this checklist</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>
              Go through each section and answer the questions honestly. You don't need to score yourself or mark items as "good" or "bad." The goal is to identify where you have gaps or uncertainties.
            </p>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
              The items you can't answer are the most valuable. They're where the hidden costs usually are.
            </p>
          </div>

          {/* Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {checklist.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 style={{ paddingBottom: 16, marginBottom: 24, borderBottom: '1px solid var(--do-border-subtle)' }}>
                  {section.section}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 16, borderRadius: 'var(--do-radius-lg)', background: 'var(--do-off-white)' }}>
                      <div style={{ flexShrink: 0, marginTop: 4 }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--do-cerulean)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'color-mix(in srgb, var(--do-cerulean) 30%, transparent)' }} />
                        </div>
                      </div>
                      <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="g-tint" style={{ marginTop: 64, borderRadius: 'var(--do-radius-2xl)', padding: 32 }}>
            <h2>Key takeaways</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  If you can't answer 5+ questions, you probably have a bigger operational problem than you realize.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  The items about "manual work" and "re-keying" are where the money is hiding.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  If your systems don't integrate, you're paying 3-5% of revenue in manual workarounds.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-cerulean)' }} />
                <p style={{ marginBottom: 0 }}>
                  Inventory accuracy problems typically cost 1-3% of stock value per year.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)', marginTop: 64 }}>
            <h3>Once you've worked through this checklist...</h3>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 24 }}>
              The real value is in seeing what you don't know. If there are gaps, an audit finds them, puts a number on them, and gives you a plan to fix them.
            </p>
            <div className="btn-row" style={{ margin: 0, marginBottom: 12 }}>
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="btn btn--outline">
                See what an audit covers
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
          </div>

        </div>
      </section>
    </>
  );
}
