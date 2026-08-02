import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SignsGraphicsSchematic } from '@/components/schematics/sectors/SignsGraphicsSchematic';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Signs & Graphics Technology | Decoded Ops',
  description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
  alternates: { canonical: '/sectors/signs-graphics' },
  openGraph: {
    title: 'Signs & Graphics Technology | Decoded Ops',
    description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
    url: 'https://decodedops.co.uk/sectors/signs-graphics',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signs & Graphics Technology | Decoded Ops',
    description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/signs-graphics#webpage',
  url: 'https://decodedops.co.uk/sectors/signs-graphics',
  name: 'Signs & Graphics Technology | Decoded Ops',
  description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

const tagline = 'Large format and signage businesses run on ||tight margins and complex survey-to-fit workflows.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Survey-to-installation workflow', body: "The job doesn't start when the order is placed — it starts with a site survey. Most systems can't track a job from survey through design, production, installation, and sign-off as a single connected workflow." },
  { title: 'Substrate and finish complexity', body: "The number of variables in a signage job — substrate, finish, size, fixing method, installation requirements — makes job costing genuinely difficult. Manual approaches mean margin leakage on every complex job." },
  { title: 'Installation scheduling', body: "Coordinating installation teams, site access, third-party contractors, and delivery of materials is a logistics challenge that most job management systems don't handle well." },
  { title: 'Artwork and proof management', body: "Client approval of artwork before production is critical in this sector. Managing that process outside of the production system creates delay, rework, and missed deadlines." },
];

const whatIdo = [
  'Map your full workflow from enquiry through survey, design, production, installation and sign-off',
  'Identify where jobs fall between system gaps and into manual processes',
  'Review your job costing model for margin leakage on complex projects',
  'Assess your installation scheduling approach and its connection to production',
  'Audit your artwork and proof management process',
  'Recommend technology suited to the specific operational model of a signs and graphics business',
];

const route = sectorRouting['signs-graphics'];

export default function SignsGraphicsPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Signs & Graphics', url: 'https://decodedops.co.uk/sectors/signs-graphics' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · signs & graphics</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Signs and graphics businesses have production processes that generic ERP systems struggle to model. The result is usually spreadsheets, whiteboards, and people carrying information in their heads.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className={styles.photo} style={{ aspectRatio: 'auto' }}>
            <SignsGraphicsSchematic />
          </div>
        </div>
      </section>

      {/* PLATE DIAGRAM · DO-ART-114 */}
      <section className="g-navy">
        <div className="wrap">
          <div className="plate-scroll">
            <div className="plate-frame">
              <Plate tone="dark" p="sg" title="Signs & graphics — site survey to sign-off"
                     sub="Four connected systems: survey, design, production, installation"
                     no="DO-ART-114" rev="01" cls="DECODED OPS · ISSUED">

                <path id="sg-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 740 V240"
                      fill="none" strokeWidth="2.5" markerEnd="url(#sg-ah)"/>

                <g className="sk-fade sk-s3">
                  <rect x="450" y="620" width="840" height="80" rx="14" fill="url(#sg-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="658" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Site survey</text>
                  <text x="840" y="658" className="p-mono" fontSize="17" opacity=".85">Measurements ·
                    access · fixing requirements — the data the whole job depends on</text>
                </g>

                <g className="sk-fade sk-s4">
                  <rect x="450" y="500" width="840" height="90" rx="14" fill="url(#sg-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="540" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Design &amp; artwork proof</text>
                  <text x="500" y="566" className="p-mono" fontSize="17" opacity=".85">Client approval
                    before production · version control · not managed in email</text>
                </g>

                <g className="sk-fade sk-s5">
                  <rect x="450" y="380" width="840" height="90" rx="14" fill="url(#sg-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="500" y="420" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Production</text>
                  <text x="500" y="446" className="p-mono" fontSize="17" opacity=".85">Substrate · finish ·
                    size · fixing method — job costed accurately, not estimated</text>
                </g>

                <g className="sk-fade sk-s6" filter="url(#sg-shadow)">
                  <rect x="450" y="250" width="840" height="100" rx="16" fill="url(#sg-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="500" y="298" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="28">Installation &amp; sign-off</text>
                  <text x="500" y="326" className="p-accent-ink" fontSize="18" fontWeight="600">Team
                    scheduling · site access · third-party contractors · final sign-off captured</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#sg-spine"/></animateMotion></circle>
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
                  <span className="kicker">Most common in signs & graphics</span>
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
