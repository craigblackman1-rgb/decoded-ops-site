import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PrintPromotionalSchematic } from '@/components/schematics/sectors/PrintPromotionalSchematic';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Print & Promotional Merchandise Operations | Decoded Ops',
  description: 'Operations and technology consultancy for print and promotional merchandise businesses. Production scheduling, order management, artwork approval workflow, and eCommerce integration.',
  alternates: { canonical: '/sectors/print-promotional' },
  openGraph: {
    title: 'Print & Promotional Merchandise Operations | Decoded Ops',
    description: 'Operations and technology consultancy for print and promotional merchandise businesses. Production scheduling, order management, artwork approval workflow, and eCommerce integration.',
    url: 'https://decodedops.co.uk/sectors/print-promotional',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Print & Promotional Merchandise Operations | Decoded Ops',
    description: 'Operations and technology consultancy for print and promotional merchandise businesses. Production scheduling, order management, artwork approval workflow, and eCommerce integration.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/print-promotional#webpage',
      url: 'https://decodedops.co.uk/sectors/print-promotional',
      name: 'Print Shop Operations Management & Systems Consultant | Decoded Ops',
      description: 'Technology and operations consultancy for print shops and promotional merchandise businesses.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
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
  ],
};

const tagline = 'Print shop operations management ||starts with understanding what your current process actually costs.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Product complexity at volume', body: "A single client order can contain 40 different product lines, each with its own supplier, specification, and lead time. Managing that manually — or in a system not built for it — is a permanent drag on margin." },
  { title: 'Supplier fragmentation', body: "Multiple suppliers, multiple portals, multiple confirmation processes. The administrative overhead of managing incoming goods is often invisible in the P&L — but it's real." },
  { title: 'The sample and approval cycle', body: "Pre-production samples, client approvals, artwork sign-off. Every step that happens outside your system is a step that can't be measured, tracked, or optimised." },
  { title: 'Quote-to-order conversion costs', body: "How much does it cost you to produce a quote? How much of that time converts to an order? Most businesses in this sector have never measured it — and the answer is usually uncomfortable." },
  { title: 'Artwork approval workflow', body: "The artwork approval process is where most print shop production schedules break down. Every unapproved job sitting in an email thread is a slot on the press that cannot be planned. Automating the artwork approval workflow — from brief through proof to sign-off — typically reduces production delays by 20–40% without any change to the print process itself." },
  { title: 'Print production scheduling and capacity planning', body: "Print production scheduling software that cannot account for substrate, print method, drying time, and finishing dependencies cannot produce a realistic schedule. Most print shops are scheduling by eye and experience — which works until volume grows beyond what one person can hold in their head." },
];

const whatIdo = [
  'Audit your order intake and quote process for hidden time cost',
  'Map the full supplier management workflow from order to receipt',
  'Identify where sample and approval processes are creating delay',
  'Review your product data management and supplier pricing model',
  'Assess your technology stack for integration gaps and manual workarounds',
  'Quantify the real cost of every inefficiency found',
];

const route = sectorRouting['print-promotional'];

export default function PrintPromotionalPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Print & Promotional', url: 'https://decodedops.co.uk/sectors/print-promotional' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · print & promotional</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Print and promotional merchandise businesses face a specific combination of challenges: short run lengths, rapid turnaround expectations, complex artwork approval workflows, and production scheduling software that was designed for longer runs. The result is operational friction that shows up as missed deadlines, re-work, and customer complaints — even when the team is working hard.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className={styles.photo} style={{ aspectRatio: 'auto' }}>
            <PrintPromotionalSchematic />
          </div>
        </div>
      </section>

      {/* PLATE DIAGRAM · DO-ART-113 */}
      <section className="g-navy">
        <div className="wrap">
          <div className="plate-scroll">
            <div className="plate-frame">
              <Plate tone="dark" p="pp" title="Print & promotional — quote to delivered print run"
                     sub="Four connected systems: quoting, supplier management, artwork approval, production scheduling"
                     no="DO-ART-113" rev="01" cls="DECODED OPS · ISSUED">

                <path id="pp-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 740 V240"
                      fill="none" strokeWidth="2.5" markerEnd="url(#pp-ah)"/>

                <g className="sk-fade sk-s3">
                  <rect x="450" y="620" width="840" height="80" rx="14" fill="url(#pp-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="658" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Quoting &amp; order intake</text>
                  <text x="940" y="658" className="p-mono" fontSize="17" opacity=".85">Cost modelled
                    accurately before the order is priced</text>
                </g>

                <g className="sk-fade sk-s4">
                  <rect x="450" y="500" width="840" height="90" rx="14" fill="url(#pp-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="540" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Supplier management</text>
                  <text x="500" y="566" className="p-mono" fontSize="17" opacity=".85">Multiple suppliers ·
                    multiple portals — one consolidated view of what is ordered and when it arrives</text>
                </g>

                <g className="sk-fade sk-s5">
                  <rect x="450" y="380" width="840" height="90" rx="14" fill="url(#pp-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="420" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Artwork approval</text>
                  <text x="500" y="446" className="p-mono" fontSize="17" opacity=".85">Proof management
                    with audit trail — not an email thread per job</text>
                </g>

                <g className="sk-fade sk-s6" filter="url(#pp-shadow)">
                  <rect x="450" y="250" width="840" height="100" rx="16" fill="url(#pp-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="500" y="298" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="28">Production scheduling</text>
                  <text x="500" y="326" className="p-accent-ink" fontSize="18" fontWeight="600">Substrate
                    · print method · drying time · finishing — a schedule that reflects the real job</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#pp-spine"/></animateMotion></circle>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Common challenges</span>
          <h2>Where the problems tend to live</h2>
          <div className="hair" />
          <p className="lede">In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {challenges.map((c, i) => (
              <article key={i} className="card">
                <span className="kicker">{String(i + 1).padStart(2, '0')} &middot; {c.title}</span>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">How I help</span>
          <h2>What the work actually looks like</h2>
          <div className="hair" />
          <p className="lede">A structured audit followed by specific, costed recommendations — no vague frameworks, no generic advice.</p>
          <div className="grid grid--2" style={{ marginTop: '32px' }}>
            {whatIdo.map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      {(route.targetService || (route.relatedProblems && route.relatedProblems.length > 0)) && (
        <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-tint">
          <div className="wrap">
            <div className="grid grid--2">
              {route.targetService && (
                <div className="card" style={{ background: 'var(--do-surface-dark)', color: 'var(--do-text-on-dark)' }}>
                  <span className="kicker" style={{ color: 'var(--do-amber)' }}>The work in this sector</span>
                  <h3 style={{ fontSize: 'var(--do-text-xl)', margin: '8px 0' }}>{route.targetService.label}</h3>
                  <p style={{ marginBottom: '20px' }}>{route.targetService.anchor}</p>
                  <Link href={route.targetService.href} style={{ color: 'var(--do-amber)', fontWeight: 'var(--do-weight-semibold)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    See how it works <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              )}
              {route.relatedProblems && route.relatedProblems.length > 0 && (
                <div className="card">
                  <span className="kicker">Most common in print & promotional</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>The problems we see most often</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedProblems.map((p) => (
                      <li key={p.href} style={{ marginBottom: '10px' }}>
                        <Link href={p.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-cerulean)' }} aria-hidden="true" />
                          <span>{p.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <section className="g-off">
        <div className={`wrap ${styles.centred}`}>
          <h2>Book a free discovery call.</h2>
          <div className="hair" />
          <p className="lede">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
