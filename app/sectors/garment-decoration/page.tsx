import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GarmentDecorationSchematic } from '@/components/schematics/sectors/GarmentDecorationSchematic';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Garment Decoration Operations & Systems Consultant | Decoded Ops',
  description: 'Technology and operations consultancy for garment decoration businesses. Artwork management, ERP selection, eCommerce integration, and production workflow — for businesses doing embroidery, screen print, DTF, and DTG.',
  alternates: { canonical: '/sectors/garment-decoration' },
  openGraph: {
    title: 'Garment Decoration Operations & Systems Consultant | Decoded Ops',
    description: 'Technology and operations consultancy for garment decoration businesses. Artwork management, ERP selection, eCommerce integration, and production workflow — for businesses doing embroidery, screen print, DTF, and DTG.',
    url: 'https://decodedops.co.uk/sectors/garment-decoration',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garment Decoration Operations & Systems Consultant | Decoded Ops',
    description: 'Technology and operations consultancy for garment decoration businesses. Artwork management, ERP selection, eCommerce integration, and production workflow — for businesses doing embroidery, screen print, DTF, and DTG.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/garment-decoration#webpage',
      url: 'https://decodedops.co.uk/sectors/garment-decoration',
      name: 'Garment Decoration Business Systems & Operations Consultant | Decoded Ops',
      description: 'Technology and operations consultancy for garment decoration businesses.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What systems does a garment decoration business need?',
          acceptedAnswer: { '@type': 'Answer', text: 'A garment decoration business typically needs: an order management or ERP system that handles decoration method-specific workflows; artwork management software for sign-off and file storage; production scheduling software that accounts for machine capacity and method lead times; eCommerce integration if you sell online; and B2B ordering capability if you serve corporate or wholesale customers.' },
        },
        {
          '@type': 'Question',
          name: 'How is embroidery business management different from other decoration methods?',
          acceptedAnswer: { '@type': 'Answer', text: 'Embroidery business management involves digitisation, stitch count estimation, machine capacity planning, and thread management — none of which are native to generic ERP or MIS systems. Businesses running embroidery alongside screen print or DTF need systems that can represent each method\'s production logic independently.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best ERP for a garment decoration business in the UK?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no single best ERP — the right system depends on your decoration methods, order volume, eCommerce requirements, and growth plans. Sector-specific systems like PANTA, DecoNetwork, and OrderWise are all used in the UK garment decoration market, each with different strengths and limitations. An independent evaluation against a written brief is the only way to choose correctly.' },
        },
      ],
    },
  ],
};

const tagline = 'Garment decoration business systems ||were never built for how you actually work.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Decoration method mix', body: "Running embroidery, screen print, and DTG in the same business means three different production workflows, three different lead times, and three different cost structures — all managed in systems that don't account for the difference." },
  { title: 'The artwork loop', body: "Artwork sign-off is the single biggest source of delay in most garment decoration businesses. Every manual chase, every email thread, every approval held in someone's inbox is time and cost that doesn't show up anywhere. Artwork management software can automate the sign-off loop — but only if it is properly integrated with the order management system. Most businesses in this sector are still managing artwork approval by email." },
  { title: 'Blank dependency', body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock vs committed orders — until the problem is already in the queue." },
  { title: 'eCommerce disconnected from production', body: "Online orders that don't automatically flow into the production schedule. Personalisation that requires manual re-entry. Artwork files that arrive separately from the order. All of this is solvable." },
  { title: 'Embroidery production workflow versus other methods', body: "Embroidery production scheduling is fundamentally different from screen print or DTF. Machine capacity, stitch count, digitisation time, and thread colour changes all affect the schedule in ways that generic production scheduling software does not account for. A system that cannot represent embroidery production accurately will always require manual workarounds." },
];

const whatIdo = [
  'Map your current decoration workflows end to end — from order intake to despatch',
  'Identify where the artwork loop is creating delay and cost',
  'Assess artwork management software options and integration with your order management system',
  'Assess your blank sourcing model and the dependency risks within it',
  'Review your technology stack for gaps between eCommerce, order management, and production',
  'Produce an independent vendor brief if new software is recommended',
  'Quantify every finding in time, headcount, and money',
];

const route = sectorRouting['garment-decoration'];

export default function GarmentDecorationPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Garment Decoration', url: 'https://decodedops.co.uk/sectors/garment-decoration' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · garment decoration</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Every decoration method has its own production logic, its own constraints, and its own failure modes. The ERP and MIS systems marketed to garment decoration businesses rarely account for that. Embroidery business management looks different from screen print management — and your systems should reflect that difference.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className={styles.photo} style={{ aspectRatio: 'auto' }}>
            <GarmentDecorationSchematic />
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
                  <span className="kicker">Most common in garment decoration</span>
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
