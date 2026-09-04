import type { Metadata } from 'next';
import Link from 'next/link';
import s from '@/app/deco-page.module.css';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'About Craig: Decoded Ops',
  description: 'I started on the warehouse floor. Twenty-five years later, I\'m still solving the same problems, just from the other side of the table.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    title: 'About Craig: Decoded Ops',
    description: 'I started on the warehouse floor. Twenty-five years later, I\'m still solving the same problems.',
    url: 'https://decodedops.co.uk/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Craig: Decoded Ops',
    description: 'I started on the warehouse floor. Twenty-five years later, I\'m still solving the same problems.',
  },
};

export default function AboutPage() {
  return (
    <main id="content">
      {/* 1 · HERO SPLIT */}
      <section className="g-off" data-od-id="hero">
        <div className={`wrap ${s.heroSplit}`}>
          <div>
            <span className="eyebrow">About Craig</span>
            <h1>I started on the warehouse floor.</h1>
            <div className={s.heroBody}>
              <p>Twenty-five years later, I&apos;m still solving the same problems, just from the other
                side of the table.</p>
              <p>I&apos;ve worked at every level in these businesses. Not as a consultant brought in to
                observe. As the person on the warehouse floor picking, packing, and despatching. As
                the IT engineer. As the operations manager. As the one who implemented the systems,
                lived with the consequences, and fixed what went wrong.</p>
              <p>That&apos;s why I know what a system needs to do for the person using it, not just the
                person commissioning it.</p>
            </div>
            <div className="btn-row" data-od-id="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book a call</Link>
              <Link className="btn btn--outline" href="/how-i-build">How I build</Link>
            </div>
          </div>

          <div className={s.heroShot}>
            <div className={s.photo} data-od-id="about-visual">
              <img src="/images/sectors/thread-spools.jpg" width="1600" height="1067"
                   alt="A rack of embroidery thread cones in mixed colours on a workshop wall, the working stock of a decoration floor." />
            </div>
            <p className={s.shotCaption}>Twenty-five years in rooms like this one, on both sides of the
              system that runs them.</p>
          </div>
        </div>
      </section>

      {/* PLATE · DO-ART-904 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Career arc &middot; DO-ART-904</span>
          <h2>Three vantage points, one problem that never changed.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            Twenty-five years in print, embroidery, and decoration, from warehouse floor to IT to operations. The vantage point changed. The gap between the process on paper and the workaround on the floor did not.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-about">
              <Plate tone="dark" p="abt" title="Three heights, one gap"
                     sub="Craig Blackman · twenty-five years, three vantage points, the same problem"
                     no="DO-ART-904" rev="01" cls="DECODED OPS · ISSUED">

                {/* ══ EXHIBIT, three vantage bands ══ */}
                <g className="sk-fade sk-s2">
                  <text x="66" y="212" className="p-mono" fontSize="14" letterSpacing="2.4" opacity=".42">LOOKING DOWN FROM</text>
                  <text x="800" y="212" textAnchor="end" className="p-mono" fontSize="14" letterSpacing="2.4" opacity=".42">WHAT BECAME VISIBLE</text>
                </g>

                {/* band 3, highest, drawn first so the stack reads bottom-up */}
                <g className="sk-fade sk-s3" filter="url(#abt-shadow)">
                  <rect x="60" y="230" width="880" height="132" rx="10" fill="url(#abt-node)" className="p-node" strokeWidth="1.1"/>
                </g>
                <g className="sk-fade sk-s3">
                  <rect x="86" y="258" width="4" height="18" rx="1" className="p-cyan"/>
                  <text x="102" y="272" className="p-mono" fontSize="15" letterSpacing="2.4" fontWeight="600" opacity=".7">03 · OPERATIONS &amp; ERP</text>
                  <text x="102" y="308" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="26">Choosing the platform</text>
                  <text x="102" y="336" className="p-mono" fontSize="16" opacity=".6">Running the department, then implementing what it depends on</text>
                  <text x="914" y="308" textAnchor="end" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="19">Who signed it off</text>
                  <text x="914" y="334" textAnchor="end" className="p-mono" fontSize="15" opacity=".55">and what nobody scoped first</text>
                </g>

                {/* band 2 */}
                <g className="sk-fade sk-s4" filter="url(#abt-shadow)">
                  <rect x="60" y="382" width="880" height="132" rx="10" fill="url(#abt-node)" className="p-node" strokeWidth="1.1"/>
                </g>
                <g className="sk-fade sk-s4">
                  <rect x="86" y="410" width="4" height="18" rx="1" className="p-cyan"/>
                  <text x="102" y="424" className="p-mono" fontSize="15" letterSpacing="2.4" fontWeight="600" opacity=".7">02 · IT &amp; SYSTEMS</text>
                  <text x="102" y="460" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="26">Keeping it all running</text>
                  <text x="102" y="488" className="p-mono" fontSize="16" opacity=".6">Networks, backups, the software nobody remembers choosing</text>
                  <text x="914" y="460" textAnchor="end" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="19">Why it &ldquo;can't do that&rdquo;</text>
                  <text x="914" y="486" textAnchor="end" className="p-mono" fontSize="15" opacity=".55">usually the start of the conversation</text>
                </g>

                {/* band 1, the floor */}
                <g className="sk-fade sk-s5" filter="url(#abt-shadow)">
                  <rect x="60" y="534" width="880" height="132" rx="10" fill="url(#abt-node)" className="p-node" strokeWidth="1.1"/>
                </g>
                <g className="sk-fade sk-s5">
                  <rect x="86" y="562" width="4" height="18" rx="1" className="p-cyan"/>
                  <text x="102" y="576" className="p-mono" fontSize="15" letterSpacing="2.4" fontWeight="600" opacity=".7">01 · WAREHOUSE FLOOR</text>
                  <text x="102" y="612" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="26">Picking, packing, despatch</text>
                  <text x="102" y="640" className="p-mono" fontSize="16" opacity=".6">Doing the job, not observing it</text>
                  <text x="914" y="612" textAnchor="end" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="19">The workaround</text>
                  <text x="914" y="638" textAnchor="end" className="p-mono" fontSize="15" opacity=".55">and that it wasn't in any document</text>
                </g>

                {/* ══ THE CONSTANT, one amber thread through all three ══ */}
                <path id="abt-thread" pathLength="1" className="sk-draw sk-s6 p-samber"
                      d="M40 660 V296" fill="none" strokeWidth="2.5" markerEnd="url(#abt-ah)"/>
                <g className="sk-fade sk-s6">
                  <circle cx="40" cy="600" r="5" className="p-amber"/>
                  <circle cx="40" cy="448" r="5" className="p-amber"/>
                  <circle cx="40" cy="296" r="5" className="p-amber"/>
                  <text x="30" y="700" className="p-mono" fontSize="15" letterSpacing="1.6" fill="none"></text>
                </g>
                <g className="sk-fade sk-s6">
                  <rect x="60" y="690" width="880" height="46" rx="8" fill="url(#abt-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".45"/>
                  <circle cx="86" cy="713" r="5" className="p-amber"/>
                  <text x="104" y="719" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="18">The constant, the gap between the process on paper and the workaround on the floor</text>
                </g>

                {/* ══ SPECIFICATION PANEL ══ */}
                <g className="sk-fade sk-s4">
                  <rect x="980" y="230" width="540" height="506" rx="12" fill="url(#abt-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="1006" y="256" width="4" height="16" rx="1" className="p-cyan"/>
                  <text x="1022" y="270" className="p-mono" fontSize="17" letterSpacing="2.4" fontWeight="600">EXHIBIT</text>
                  <line x1="1006" y1="292" x2="1494" y2="292" className="p-scyan" strokeWidth=".6" strokeOpacity=".2"/>

                  <text x="1006" y="330" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">SPAN</text>
                  <text x="1006" y="374" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="46">25 years</text>

                  <text x="1006" y="428" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">SECTORS</text>
                  <text x="1006" y="458" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="21">Print · embroidery</text>
                  <text x="1006" y="486" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="21">Workwear · decoration</text>

                  <text x="1006" y="534" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">WHAT CHANGED</text>
                  <text x="1006" y="564" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="21">The vantage point</text>

                  <text x="1006" y="612" className="p-mono" fontSize="15" letterSpacing="2" opacity=".45">WHAT DIDN'T</text>
                  <text x="1006" y="642" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="21">The problem</text>

                  <line x1="1006" y1="672" x2="1494" y2="672" className="p-scyan" strokeWidth=".6" strokeOpacity=".2"/>
                  <text x="1006" y="706" className="p-mono" fontSize="15" opacity=".62">Which is most of why the audit</text>
                  <text x="1006" y="726" className="p-mono" fontSize="15" opacity=".62">works the way it does.</text>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · THE TIMELINE */}
      <section className="g-white" data-od-id="timeline">
        <div className="wrap">
          <span className="eyebrow">Where this comes from</span>
          <h2>Three beats, not a straight line.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Each one changed what I noticed the next time round.</p>

          <div className="grid grid--3">
            <div className={s.feature} data-od-id="beat-warehouse">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10 12 4l9 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 20v-6h6v6"/>
                </svg>
              </div>
              <p className={s.featureMeta}>Warehouse floor</p>
              <h3>Picking, packing, despatch</h3>
              <p>Where I learned that the workaround on the floor and the process on paper are rarely
                the same thing, and that the gap between them is where the cost hides.</p>
            </div>
            <div className={s.feature} data-od-id="beat-it">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <p className={s.featureMeta}>IT &amp; systems</p>
              <h3>Keeping it all running</h3>
              <p>Networks, backups, the software nobody remembers choosing. Where I learned that &quot;it
                can&apos;t do that&quot; is usually the start of the conversation, not the end of it.</p>
            </div>
            <div className={s.feature} data-od-id="beat-ops">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5l3.2 2"/>
                </svg>
              </div>
              <p className={s.featureMeta}>Operations &amp; ERP</p>
              <h3>Implementing the systems</h3>
              <p>Running the department, then choosing and implementing the platform it depends on,
                and living with what happens when nobody scoped the business before scoping the
                software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · STAT */}
      <section className="g-navy" data-od-id="stat">
        <div className={`wrap ${s.centred} ${s.statSingle}`}>
          <p className={`${s.statNum} ${s.num}`}>25 years</p>
          <p className={s.statLabel}>Inside print, embroidery, workwear, and decoration businesses. As the
            person doing the job, not just the one advising on it.</p>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className={`g-white ${s.ctaStrip}`} data-od-id="cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Want to talk it through first?</h2>
          <p className="lede">No pitch, no obligation. Just a conversation about whether this is the right
            fit before anything gets booked.</p>
          <div className={s.heroCta}>
            <Link className="btn btn--primary" href="/contact">Book a call</Link>
            <Link className={`btn ${s.btnGhost} ${s.btnArrow}`} href="/clarity">See how a Clarity Audit works</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
