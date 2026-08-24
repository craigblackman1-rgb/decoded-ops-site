import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LabelsPackagingSchematic } from '@/components/schematics/sectors/LabelsPackagingSchematic';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Labels & Packaging Technology | Decoded Ops',
  description: 'Technology and operations consultancy for labels and packaging businesses. Systems audit, project delivery, and fractional CTO support.',
  alternates: { canonical: '/sectors/labels-packaging' },
  openGraph: {
    title: 'Labels & Packaging Technology | Decoded Ops',
    description: 'Technology and operations consultancy for labels and packaging businesses. Systems audit, project delivery, and fractional CTO support.',
    url: 'https://decodedops.co.uk/sectors/labels-packaging',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Labels & Packaging Technology | Decoded Ops',
    description: 'Technology and operations consultancy for labels and packaging businesses. Systems audit, project delivery, and fractional CTO support.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/labels-packaging#webpage',
  url: 'https://decodedops.co.uk/sectors/labels-packaging',
  name: 'Labels & Packaging Technology | Decoded Ops',
  description: 'Technology and operations consultancy for labels and packaging businesses. Systems audit, project delivery, and fractional CTO support.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

const tagline = 'Variable data printing and compliance labelling ||demand precision most systems can\'t deliver.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Compliance and specification management', body: "Label specs change, and so do compliance rules. Keeping the right version in production across hundreds of label SKUs is a constant challenge." },
  { title: 'Variable data at speed', body: "Short-run, high-variation jobs need print systems most generic software wasn't built for. The workarounds are expensive." },
  { title: 'Substrate and press matching', body: "Matching the right substrate, adhesive, and finish to the right press, without errors, needs product data most businesses keep in spreadsheets." },
  { title: 'Customer integration and EDI', body: "Bigger label customers often expect EDI ordering, automated reorders, or direct system links. Setting that up and keeping it running is specialist work." },
];

const whatIdo = [
  'Audit spec and version control across your label SKU range',
  'Review your variable data workflow, from file intake to press-ready output',
  'Map substrate and press matching for accuracy',
  'Assess your customer integration and EDI readiness',
  'Find where compliance risk sits in your current processes',
  'Recommend systems built for short-run, variable-data label production',
];

const route = sectorRouting['labels-packaging'];

export default function LabelsPackagingPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Labels & Packaging', url: 'https://decodedops.co.uk/sectors/labels-packaging' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · labels & packaging</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Labels and packaging businesses sit where print, compliance, and the supply chain meet. There's no tolerance for error, and turnaround is always tight.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className={styles.photo} style={{ aspectRatio: 'auto' }}>
            <LabelsPackagingSchematic />
          </div>
        </div>
      </section>

      {/* PLATE DIAGRAM · DO-ART-116 */}
      <section className="g-navy">
        <div className="wrap">
          <div className="plate-scroll">
            <div className="plate-frame">
              <Plate tone="dark" p="lp" title="Labels & packaging: specification to compliant delivery"
                     sub="Three connected systems: specification control, variable data printing, delivery"
                     no="DO-ART-116" rev="01" cls="DECODED OPS · ISSUED">

                <path id="lp-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 720 V260"
                      fill="none" strokeWidth="2.5" markerEnd="url(#lp-ah)"/>

                <g className="sk-fade sk-s3">
                  <rect x="450" y="580" width="840" height="110" rx="14" fill="url(#lp-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="628" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Specification control</text>
                  <text x="500" y="660" className="p-mono" fontSize="17" opacity=".85">Hundreds of label
                    SKUs · version management · compliance data: right version, every time</text>
                </g>

                <g className="sk-fade sk-s4">
                  <rect x="450" y="420" width="840" height="120" rx="14" fill="url(#lp-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="468" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Variable data printing</text>
                  <text x="500" y="502" className="p-mono" fontSize="17" opacity=".85">Short-run ·
                    high-variation · substrate matched to press: workflow built for the job, not generic</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#lp-shadow)">
                  <rect x="450" y="250" width="840" height="130" rx="16" fill="url(#lp-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="500" y="308" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="28">Compliance delivery</text>
                  <text x="500" y="344" className="p-accent-ink" fontSize="18" fontWeight="600">Correct
                    spec · correct substrate · EDI integration: delivered right first time</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#lp-spine"/></animateMotion></circle>
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
          <p className="lede">A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
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
                  <span className="kicker">Most common in labels & packaging</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>The problems I see most often</h3>
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
