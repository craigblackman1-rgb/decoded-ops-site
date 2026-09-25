import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PrintEmbroideryOpsConsultantSchematic } from '@/components/schematics/sectors/PrintEmbroideryOpsConsultantSchematic';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Operations Consultant, Print & Embroidery | Decoded Ops',
  description: 'An operations consultant for print and embroidery businesses, starting with what your current process actually costs. ERP and artwork management included.',
  alternates: { canonical: '/sectors/operations-consultant-print-embroidery' },
  openGraph: {
    title: 'Operations Consultant, Print & Embroidery | Decoded Ops',
    description: 'An operations consultant for print and embroidery businesses, starting with what your current process actually costs. ERP and artwork management included.',
    url: 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Consultant, Print & Embroidery | Decoded Ops',
    description: 'An operations consultant for print and embroidery businesses, starting with what your current process actually costs. ERP and artwork management included.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery#webpage',
      url: 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery',
      name: 'Operations Consultant for Print & Embroidery Businesses UK: Decoded Ops',
      description: 'Independent operations and technology consultant for UK print and embroidery businesses. ERP, production scheduling, artwork management, and systems that connect how you actually work.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does an operations consultant do for a print or embroidery business?',
          acceptedAnswer: { '@type': 'Answer', text: 'An operations consultant reviews your entire workflow, from order intake to despatch, identifies where time, money, and quality are being lost, and provides specific, costed recommendations. For print and embroidery businesses, this typically covers production scheduling, artwork approval, ERP or MIS selection, and the connections between your online shop, order system, and production floor.' },
        },
        {
          '@type': 'Question',
          name: 'When should a print or embroidery business hire an operations consultant?',
          acceptedAnswer: { '@type': 'Answer', text: 'When you are losing time to manual workarounds, when your ERP or MIS does not reflect how you actually produce, when artwork approval is stuck in email, when you cannot see incoming stock against committed orders, or when growth is blocked by systems that were fine at a smaller scale. The right moment is before you buy new software, not after.' },
        },
        {
          '@type': 'Question',
          name: 'How is a print and embroidery operations consultant different from a general business consultant?',
          acceptedAnswer: { '@type': 'Answer', text: 'A general business consultant applies broad frameworks. A sector-specific operations consultant understands decoration methods, production scheduling for mixed-method environments, artwork workflows, blank stock dependency, and the ERP landscape for the decorated-goods sector. The difference is in the detail of what gets recommended and what gets ignored.' },
        },
      ],
    },
  ],
};

const tagline = 'Print & embroidery operations ||start with knowing what your current process actually costs.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Two production methods, one system', body: "Embroidery is not screen print. Digitising, stitch count, machine capacity, and thread changes have no equivalent in other decoration methods. Most systems treat them all the same, which means manual workarounds on every order that mixes methods." },
  { title: 'The artwork loop', body: "Artwork sign-off causes more delay than almost anything else in this sector. Every manual chase and email thread is time and money that shows up nowhere. Artwork software can automate sign-off, but only if it connects to your order system. Most businesses still approve artwork by email." },
  { title: 'Blank dependency', body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock against committed orders, until the problem is already in the queue." },
  { title: 'eCommerce disconnected from production', body: "Online orders that do not automatically flow into the production schedule. Personalisation that needs manual re-entry. Artwork files that arrive separately from the order. All of this is solvable." },
  { title: 'Quoting complexity', body: "A single embroidery order can involve digitising setup, stitch count pricing, thread colour selection, and garment-specific hooping rules. Pricing it accurately means knowing your cost per thousand stitches, your setup time, and your margin, and most businesses estimate." },
];

const whatIdo = [
  'Map your whole workflow, from order intake to despatch',
  'Find where the artwork loop is causing delay and cost',
  'Assess artwork software and how it connects to your order system',
  'Review how you source blanks and where that leaves you exposed',
  'Check for gaps between your online shop, order system, and production',
  'Write an independent vendor brief if new software is needed',
  'Put a number on every finding in time, headcount, and money',
];

const route = sectorRouting['operations-consultant-print-embroidery'];

export default function OperationsConsultantPrintEmbroideryPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Print & Embroidery', url: 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · print & embroidery</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Embroidery and screen print under one roof means two production processes, two lead times, and two cost structures. The ERP and MIS systems sold to decoration businesses rarely account for that. I help UK print and embroidery businesses fix the systems that do not match how they actually work.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className={styles.photo} style={{ aspectRatio: 'auto' }}>
            <PrintEmbroideryOpsConsultantSchematic />
          </div>
        </div>
      </section>

      {/* PLATE DIAGRAM · DO-ART-120 */}
      <section className="g-navy">
        <div className="wrap">
          <div className="plate-scroll">
            <div className="plate-frame">
              <Plate tone="dark" p="oe" title="Print & embroidery: scattered systems to integrated operations"
                     sub="Three stages: scattered systems, clarity audit, integrated operations"
                     no="DO-ART-120" rev="01" cls="DECODED OPS · ISSUED">

                <path id="oe-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 720 V260"
                      fill="none" strokeWidth="2.5" markerEnd="url(#oe-ah)"/>

                <g className="sk-fade sk-s3">
                  <rect x="450" y="580" width="840" height="110" rx="14" fill="url(#oe-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="628" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Scattered systems</text>
                  <text x="500" y="660" className="p-mono" fontSize="17" opacity=".85">Embroidery ·
                    screen print · admin: three separate processes with no shared data</text>
                </g>

                <g className="sk-fade sk-s4">
                  <rect x="450" y="420" width="840" height="120" rx="14" fill="url(#oe-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="468" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Clarity audit</text>
                  <text x="500" y="502" className="p-mono" fontSize="17" opacity=".85">Full workflow map ·
                    costed findings · independent vendor brief</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#oe-shadow)">
                  <rect x="450" y="250" width="840" height="130" rx="16" fill="url(#oe-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="500" y="308" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="28">Integrated operations</text>
                  <text x="500" y="344" className="p-accent-ink" fontSize="18" fontWeight="600">One system
                    that knows about embroidery AND print: scheduling, stock, artwork, despatch</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#oe-spine"/></animateMotion></circle>
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
          <p className="lede">In print and embroidery businesses, the same operational problems appear in different shapes. These are the ones that cost the most.</p>
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
          <p className="lede">A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
          <div className="grid grid--2" style={{ marginTop: '32px' }}>
            {whatIdo.map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      {(route.targetService || (route.relatedProblems && route.relatedProblems.length > 0) || (route.relatedResources && route.relatedResources.length > 0)) && (
        <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-tint">
          <div className="wrap">
            <div className="grid grid--3">
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
                  <span className="kicker">Most common in print & embroidery</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>The problems I see most often</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedProblems.map((p) => (
                      <li key={p.href} style={{ marginBottom: '10px' }}>
                        <Link href={p.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-text-cerulean)' }} aria-hidden="true" />
                          <span>{p.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {route.relatedResources && route.relatedResources.length > 0 && (
                <div className="card">
                  <span className="kicker">Useful next steps</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>Resources</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedResources.map((r) => (
                      <li key={r.href} style={{ marginBottom: '10px' }}>
                        <Link href={r.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-text-cerulean)' }} aria-hidden="true" />
                          <span>{r.label}</span>
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
