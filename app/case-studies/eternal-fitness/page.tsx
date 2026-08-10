import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "ai training plan tool" (secondary: "eternal fitness decoded ops")
export const metadata = {
  title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
  description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for Eternal Fitness, a 1-to-1 personal training studio for clinical populations.',
  alternates: { canonical: '/case-studies/eternal-fitness' },
  openGraph: {
    type: 'article',
    title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
    description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool.',
    url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
    description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Eternal Fitness: Full Site Build and AI Training Tool',
      description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for Eternal Fitness, a 1-to-1 personal training studio for clinical populations.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
    },
  ],
};

export default function EternalFitnessCaseStudyPage() {
  return (
    <>
      <style>{`.article-body{max-width:740px;margin:0 auto}`}</style>
      <main>
        <JsonLd data={schema} />
        <section className="g-off">
          <div className="wrap">
            <div className="article-body">
              <span className="eyebrow">In Build · Health &amp; Fitness</span>
              <h1>Eternal Fitness: technical lead for a clinical-population training studio</h1>
              <p className="lede">
                Eternal Fitness is a private, 1-to-1 personal training studio working mainly with clients managing health conditions, not a general weight-loss audience. I&apos;m technical lead on the website rebuild and the tooling behind it, working alongside Esther Fair, the studio&apos;s Level 4 PT and clinical lead.
              </p>
              <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 60%, transparent)', fontStyle: 'italic', marginTop: '12px' }}>
                Esther is my wife, named plainly. This is paid client work, not a favour or free build. She pays for it the same as anyone else. Which meant there was nowhere to hide if it did not work.
              </p>
            </div>
          </div>
        </section>

        {/* PLATE · DO-ART-903 */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow">Exhibit &middot; DO-ART-903</span>
            <h2>The plan the AI tool drafts, and the one person who can sign it off.</h2>
            <div className="hair"></div>
            <p className="lede" style={{ marginTop: 16 }}>
              The training plan tool generates session plans against real constraints in seconds. But nothing reaches a client until Esther Fair, Level 4 PT, reviews and approves it.
            </p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-eternal-fitness">
                <Plate tone="dark" p="ef" title="The plan the tool cannot sign off"
                       sub="Eternal Fitness · training plan tool, first draft awaiting clinical approval"
                       no="DO-ART-903" rev="01" cls="DECODED OPS · ISSUED">

                  {/* ══ EXHIBIT, the screen ══ */}
                  <g className="sk-fade sk-s2">
                    <rect x="60" y="230" width="880" height="470" rx="12" fill="url(#ef-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="60" y="230" width="880" height="470" rx="12" fill="url(#ef-scan)" opacity=".22" style={{ mixBlendMode: 'overlay' }}/>

                    {/* screen header */}
                    <line x1="60" y1="298" x2="940" y2="298" className="p-scyan" strokeWidth=".8" strokeOpacity=".22"/>
                    <rect x="86" y="256" width="4" height="16" rx="1" className="p-cyan"/>
                    <text x="102" y="270" className="p-mono" fontSize="16" letterSpacing="2.4" fontWeight="600" opacity=".85">SESSION PLAN · DRAFT 1</text>
                    <text x="914" y="270" textAnchor="end" className="p-mono" fontSize="15" opacity=".5">generated in seconds</text>
                  </g>

                  {/* constraint chips */}
                  <g className="sk-fade sk-s3">
                    <rect x="86" y="322" width="330" height="42" rx="8" fill="none" className="p-scyan" strokeWidth="1" strokeOpacity=".4"/>
                    <circle cx="108" cy="343" r="4" className="p-cyan"/>
                    <text x="124" y="349" className="p-mono" fontSize="15" opacity=".78">Equipment, confirmed studio list</text>
                    <rect x="432" y="322" width="330" height="42" rx="8" fill="none" className="p-scyan" strokeWidth="1" strokeOpacity=".4"/>
                    <circle cx="454" cy="343" r="4" className="p-cyan"/>
                    <text x="470" y="349" className="p-mono" fontSize="15" opacity=".78">Condition, on file, per client</text>
                  </g>

                  {/* generated rows */}
                  <g className="sk-fade sk-s4">
                    <g className="p-mono" fontSize="13" letterSpacing="2" opacity=".42">
                      <text x="86" y="404">BLOCK</text><text x="420" y="404">PRESCRIPTION</text><text x="720" y="404">AGAINST</text>
                    </g>
                    <line x1="86" y1="416" x2="914" y2="416" className="p-scyan" strokeWidth=".8" strokeOpacity=".18"/>

                    <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="19">
                      <text x="86" y="452">Warm-up</text><text x="86" y="500">Lower body</text>
                      <text x="86" y="548">Upper body</text><text x="86" y="596">Cool-down</text>
                    </g>
                    <g className="p-mono" fontSize="16" opacity=".7">
                      <text x="420" y="452">8 min, low intensity</text><text x="420" y="500">3 × 10, seated</text>
                      <text x="420" y="548">3 × 12, supported</text><text x="420" y="596">6 min, mobility</text>
                    </g>
                    <g className="p-mono" fontSize="15" opacity=".5">
                      <text x="720" y="452">confirmed kit</text><text x="720" y="500">confirmed kit</text>
                      <text x="720" y="548">confirmed kit</text><text x="720" y="596">confirmed kit</text>
                    </g>
                    <line x1="86" y1="470" x2="914" y2="470" className="p-scyan" strokeWidth=".6" strokeOpacity=".12"/>
                    <line x1="86" y1="518" x2="914" y2="518" className="p-scyan" strokeWidth=".6" strokeOpacity=".12"/>
                    <line x1="86" y1="566" x2="914" y2="566" className="p-scyan" strokeWidth=".6" strokeOpacity=".12"/>
                  </g>

                  {/* the gate */}
                  <g className="sk-fade sk-s5">
                    <rect x="86" y="622" width="828" height="52" rx="8" fill="url(#ef-amber-n)" className="p-node-a" strokeWidth="1.2"/>
                    <circle cx="116" cy="648" r="7" fill="none" className="p-samber" strokeWidth="2"/>
                    <path d="M112.5 648 l3 3 l6 -7" fill="none" className="p-samber" strokeWidth="2" strokeOpacity=".35"/>
                    <text x="140" y="644" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="19">Held, awaiting clinical approval</text>
                    <text x="140" y="665" className="p-mono" fontSize="15" opacity=".62">Nothing reaches a client until Esther Fair, Level 4 PT, signs it off</text>
                  </g>

                  {/* illustrative stamp */}
                  <g className="sk-fade sk-s6">
                    <rect x="640" y="242" width="274" height="34" rx="6" className="p-block" opacity=".85"/>
                    <text x="658" y="264" className="p-mono" fontSize="14" letterSpacing="1.6" opacity=".75">ILLUSTRATIVE: NOT CLIENT DATA</text>
                  </g>

                  {/* ══ SPECIFICATION PANEL ══ */}
                  <g className="sk-fade sk-s4">
                    <rect x="980" y="230" width="540" height="470" rx="12" fill="url(#ef-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="1006" y="256" width="4" height="16" rx="1" className="p-cyan"/>
                    <text x="1022" y="270" className="p-mono" fontSize="17" letterSpacing="2.4" fontWeight="600">EXHIBIT</text>
                    <line x1="1006" y1="292" x2="1494" y2="292" className="p-scyan" strokeWidth=".6" strokeOpacity=".2"/>

                    <text x="1006" y="330" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">ROLE</text>
                    <text x="1006" y="360" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="22">Technical lead</text>
                    <text x="1006" y="384" className="p-mono" fontSize="15" opacity=".6">Site rebuild and the tooling behind it</text>

                    <text x="1006" y="432" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">WHAT IT IS BUILT AGAINST</text>
                    <text x="1006" y="462" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="22">Real constraints, not templates</text>
                    <text x="1006" y="486" className="p-mono" fontSize="15" opacity=".6">Confirmed equipment · each client's condition</text>

                    <text x="1006" y="534" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">WHO DECIDES</text>
                    <text x="1006" y="564" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="22">The clinician, every time</text>
                    <text x="1006" y="588" className="p-mono" fontSize="15" opacity=".6">The tool does the groundwork. It does not decide what is safe.</text>

                    <line x1="1006" y1="620" x2="1494" y2="620" className="p-scyan" strokeWidth=".6" strokeOpacity=".2"/>
                    <text x="1006" y="652" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">STATUS</text>
                    <text x="1006" y="678" className="p-mono" fontSize="16" opacity=".72">In build, no outcome figure yet, so none is claimed</text>
                  </g>
                </Plate>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="article-body">

              <h2>The problem</h2>
              <p>
                A studio working with clinical populations needs a site and a set of tools that reflect that seriously, not generic fitness-marketing language or before-and-after framing. Training plans for clients managing health conditions can&apos;t be templated the usual way either. They need to be built around confirmed studio equipment and each client&apos;s specific situation, with Esther approving every plan and every piece of client-facing content.
              </p>

              <h2>What I&apos;m building</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  'A full site rebuild that reflects clinical framing rather than fitness-marketing convention, no "transformation," no before-and-after, no crush-it language',
                  'A training plan tool that generates session plans against a confirmed equipment list and each client\'s condition, with Esther reviewing and approving every output',
                  'Brand and tooling consistency across the site and the training plan output, so the two don\'t drift apart over time',
                  'A technical foundation Esther can rely on without needing to manage it herself. She owns the clinical and brand decisions, I own the build',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 1, color: 'var(--do-cerulean)' }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: '32px', borderRadius: 'var(--do-radius-2xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: '32px' }}>
                <h3>Why the AI tool doesn&apos;t replace the trainer</h3>
                <p>
                  The training plan tool speeds up building a first draft against real constraints. It doesn&apos;t decide what&apos;s safe for a client managing a health condition. Esther does. That&apos;s the same principle behind every AI-adjacent piece of work I do: the tool handles the groundwork, the person with the actual expertise makes the call.
                </p>
              </div>

              <h2>Status</h2>
              <p style={{ marginBottom: '32px' }}>
                In build. Site rebuild and training plan tool are both in progress, working toward a scheduled launch.
              </p>

            </div>
          </div>
        </section>

        <section className="g-navy">
          <div className="wrap">
            <div className="article-body">
              <h3>Building something similar?</h3>
              <p className="lede">
                If you need a technical lead who&apos;ll build the tool without pretending it replaces the expert, get in touch.
              </p>
              <div className="btn-row">
                <Link href="/contact" className="btn btn--primary">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies" className="btn btn--outline">
                  See other client work
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
