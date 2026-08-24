import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Client Work | Decoded Ops',
  description: 'Live engagements. What I\'m actually building right now for clients in decorated goods, workwear, heating spares, and fitness. Real work, not hypotheticals.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    type: 'website',
    title: 'Client Work | Decoded Ops',
    description: 'Live engagements. What I\'m actually building right now, not hypotheticals.',
    url: 'https://decodedops.co.uk/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Work | Decoded Ops',
    description: 'Live engagements. What I\'m actually building right now, not hypotheticals.',
  },
};

const cases = [
  {
    name: 'Hanicks',
    sector: 'Heating spares & eCommerce',
    desc: 'Project-leading a Khaos Control ERP implementation alongside a custom app for supplier data, Amazon FBA, and channel automation.',
    href: '/case-studies/hanicks',
    status: 'Live engagement',
    pull: '164,752 imported, 77% matched, 11,064 live',
  },
  {
    name: 'TackleBag',
    sector: 'Branded apparel & decoration',
    desc: 'Clarity Audit into a Deliver engagement, building a Stock Control module that feeds clean data straight into their ERP implementation.',
    href: '/case-studies/tacklebag',
    status: 'In Deliver',
    pull: '9 supplier feeds automated, projected 20–40 hrs/week saved',
  },
  {
    name: 'Cobra Workwear',
    sector: 'Workwear',
    desc: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
    href: '/case-studies/cobra-workwear',
    status: 'Post-audit',
    pull: 'B2B ordering portal and ERP evaluation, architecture and vendor brief',
  },
  {
    name: 'Eternal Fitness',
    sector: 'Health & fitness (clinical populations)',
    desc: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for a 1-to-1 personal training studio.',
    href: '/case-studies/eternal-fitness',
    status: 'In build',
    pull: 'Full site rebuild and an AI-assisted training plan tool',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Client Work', url: 'https://decodedops.co.uk/case-studies' },
      ]} />

      <style>{`
        .log-list { display: flex; flex-direction: column; gap: 16px; }
        .log-row {
          display: flex; align-items: center; gap: 24px;
          padding: 24px 28px;
          background: var(--do-surface-raised);
          border: 1px solid var(--do-border-subtle);
          border-radius: var(--do-radius-xl);
          text-decoration: none; color: inherit;
          transition: border-color var(--do-duration-normal), box-shadow var(--do-duration-normal);
        }
        .log-row:hover {
          border-color: var(--do-border-strong);
          box-shadow: var(--do-shadow-md);
        }
        .log-main { flex: 1; min-width: 0; }
        .log-main h3 { margin-bottom: 4px; }
        .log-sector {
          font-size: var(--do-text-xs);
          letter-spacing: var(--do-tracking-wide);
          text-transform: uppercase;
          color: color-mix(in srgb, var(--do-prussian-blue) 50%, transparent);
          margin-bottom: 8px;
        }
        .log-desc {
          font-size: var(--do-text-sm);
          color: color-mix(in srgb, var(--do-prussian-blue) 74%, transparent);
          margin-bottom: 0; line-height: var(--do-leading-relaxed);
        }
        .log-pull {
          flex-shrink: 0; text-align: right; max-width: 260px;
          font-family: var(--do-font-heading);
          font-size: var(--do-text-lg);
          font-weight: var(--do-weight-bold);
          color: var(--do-text-primary);
        }
        .log-arrow {
          flex-shrink: 0;
          color: var(--do-cerulean);
          transition: transform var(--do-duration-normal);
        }
        .log-row:hover .log-arrow { transform: translateX(4px); }
        @media(max-width: 760px) {
          .log-row { flex-direction: column; align-items: flex-start; gap: 14px; padding: 20px 22px; }
          .log-pull { text-align: left; max-width: none; font-size: var(--do-text-base); }
        }
      `}</style>

      <main>
        <section className="g-off">
          <div className="wrap">
            <div style={{ maxWidth: '740px', margin: '0 auto' }}>
              <span className="eyebrow">Client Work</span>
              <h1>Proof, not promises.</h1>
              <p className="lede">
                Not case studies about businesses like yours. These are live engagements, named with permission, across four different sectors. Same approach every time: fix the process and the data before you automate anything.
              </p>
            </div>
          </div>
        </section>

        {/* PLATE · DO-ART-207 */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow">Engagement summary &middot; DO-ART-207</span>
            <h2>Four engagements, two with measurable outcomes.</h2>
            <div className="hair"></div>
            <p className="lede" style={{ marginTop: 16 }}>
              Live client work across four different sectors. Two engagements can be measured in numbers today. Two are too new, and they say so rather than estimating.
            </p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-case-studies">
                <Plate tone="dark" p="csx" title="Four engagements, two with numbers"
                       sub="Live client work across four sectors · what each one has proved so far"
                       no="DO-ART-207" rev="01" cls="DECODED OPS · ISSUED">

                  {/* Hanicks */}
                  <g className="sk-fade sk-s2">
                    <rect x="50" y="180" width="730" height="230" rx="10"
                          fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
                          stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
                    <text x="80" y="222" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="30">Hanicks</text>
                    <text x="750" y="222" textAnchor="end" className="p-mono" fontSize="15" opacity=".5">HEATING SPARES · LIVE ENGAGEMENT</text>
                    <line x1="80" y1="242" x2="750" y2="242" className="p-scyan" strokeWidth=".6" strokeOpacity=".25"/>
                    <g className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="40">
                      <text x="80" y="306">164,752</text><text x="330" y="306">77%</text><text x="510" y="306">11,064</text>
                    </g>
                    <g className="p-mono" fontSize="15" opacity=".55">
                      <text x="80" y="336">products imported</text><text x="330" y="336">matched</text><text x="510" y="336">live on channel</text>
                    </g>
                    <text x="80" y="382" className="p-mono" fontSize="16" opacity=".62">Khaos Control ERP, plus a custom app for supplier data and channel automation</text>
                  </g>

                  {/* TackleBag */}
                  <g className="sk-fade sk-s3">
                    <rect x="820" y="180" width="730" height="230" rx="10"
                          fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
                          stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
                    <text x="850" y="222" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="30">TackleBag</text>
                    <text x="1520" y="222" textAnchor="end" className="p-mono" fontSize="15" opacity=".5">BRANDED APPAREL · IN DELIVER</text>
                    <line x1="850" y1="242" x2="1520" y2="242" className="p-scyan" strokeWidth=".6" strokeOpacity=".25"/>
                    <g className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="40">
                      <text x="850" y="306">9</text><text x="1010" y="306">20–40</text>
                    </g>
                    <g className="p-mono" fontSize="15" opacity=".55">
                      <text x="884" y="306">supplier feeds automated</text><text x="1180" y="306">hrs/week saved, projected</text>
                    </g>
                    <text x="850" y="382" className="p-mono" fontSize="16" opacity=".62">Stock Control module feeding clean data into their ERP implementation</text>
                  </g>

                  {/* Cobra */}
                  <g className="sk-fade sk-s4">
                    <rect x="50" y="440" width="730" height="230" rx="10" fill="url(#csx-node)" className="p-node" strokeWidth="1.1"/>
                    <text x="80" y="482" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="30">Cobra Workwear</text>
                    <text x="750" y="482" textAnchor="end" className="p-mono" fontSize="15" opacity=".5">WORKWEAR · POST-AUDIT</text>
                    <line x1="80" y1="502" x2="750" y2="502" className="p-scyan" strokeWidth=".6" strokeOpacity=".25"/>
                    <text x="80" y="552" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="23">B2B ordering portal · ERP evaluation</text>
                    <text x="80" y="586" className="p-mono" fontSize="16" opacity=".62">Architecture and vendor brief. Architect and advisor, a partner team builds.</text>
                    <g>
                      <rect x="80" y="614" width="290" height="30" rx="6" className="p-block" opacity=".8"/>
                      <text x="96" y="634" className="p-mono" fontSize="13" letterSpacing="1.6" opacity=".65">NO OUTCOME FIGURE YET</text>
                    </g>
                  </g>

                  {/* Eternal Fitness */}
                  <g className="sk-fade sk-s5">
                    <rect x="820" y="440" width="730" height="230" rx="10" fill="url(#csx-node)" className="p-node" strokeWidth="1.1"/>
                    <text x="850" y="482" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="30">Eternal Fitness</text>
                    <text x="1520" y="482" textAnchor="end" className="p-mono" fontSize="15" opacity=".5">HEALTH &amp; FITNESS · IN BUILD</text>
                    <line x1="850" y1="502" x2="1520" y2="502" className="p-scyan" strokeWidth=".6" strokeOpacity=".25"/>
                    <text x="850" y="552" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="23">Site rebuild · AI training plan tool</text>
                    <text x="850" y="586" className="p-mono" fontSize="16" opacity=".62">Technical lead. The tool drafts; the clinician signs off every plan.</text>
                    <g>
                      <rect x="850" y="614" width="290" height="30" rx="6" className="p-block" opacity=".8"/>
                      <text x="866" y="634" className="p-mono" fontSize="13" letterSpacing="1.6" opacity=".65">NO OUTCOME FIGURE YET</text>
                    </g>
                  </g>

                  {/* footer */}
                  <g className="sk-fade sk-s6">
                    <rect x="50" y="700" width="1500" height="70" rx="10" fill="url(#csx-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".45"/>
                    <text x="80" y="744" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="23">Two of four can be measured today. The other two say so rather than estimating.</text>
                  </g>
                </Plate>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="log-list">
              {cases.map((c) => (
                <Link key={c.href} href={c.href} className="log-row">
                  <div className="log-main">
                    <h3>{c.name}</h3>
                    <p className="log-sector">{c.sector} · {c.status}</p>
                    <p className="log-desc">{c.desc}</p>
                  </div>
                  <div className="log-pull">{c.pull}</div>
                  <ArrowRight size={18} className="log-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="g-navy">
          <div className="wrap">
            <div style={{ maxWidth: '740px', margin: '0 auto' }}>
              <h3>Want to talk about your operation?</h3>
              <p className="lede">
                Every engagement above started the same way: a Clarity Audit to find out what was actually going on before anything got built or implemented.
              </p>
              <div className="btn-row">
                <Link href="/contact" className="btn btn--primary">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>Or book a call directly <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
