import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';
import s from '@/app/deco-page.module.css';

export const metadata: Metadata = {
  title: 'Clarity Audit: Decoded Ops',
  description: 'One day on site, a written report within five, and the 3× Clarity Guarantee. A Clarity Audit is £1,500 and the way every Decoded Ops engagement starts.',
  alternates: { canonical: '/clarity' },
  openGraph: {
    type: 'website',
    title: 'Clarity Audit: Decoded Ops',
    description: 'One day on site, a written report within five, and the 3× Clarity Guarantee. A Clarity Audit is £1,500.',
    url: 'https://decodedops.co.uk/clarity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarity Audit: Decoded Ops',
    description: 'One day on site, a written report within five, and the 3× Clarity Guarantee.',
  },
};

export default function ClarityPage() {
  return (
    <main id="content">
      {/* 1 · HERO CENTRE */}
      <section className={`g-off ${s.heroCenter}`} data-od-id="hero">
        <div className="wrap">
          <span className="eyebrow">Clarity Audit</span>
          <h1>One day on site. One written plan.</h1>
          <p className="lede">A free 60-minute call, then one full day inside your business. I follow six
            areas from start to finish, rather than just discussing them. £1,500, covered by the
            3&times; guarantee below: if the report doesn&apos;t find at least three times the fee, it&apos;s
            refunded in full. A written report within five working days, walked through with you in person.</p>
          <div className={s.heroCta}>
            <Link className="btn btn--primary" href="/contact">Book a free 60-min call</Link>
          </div>
        </div>
      </section>

      {/* 2 · THE FOUR STEPS · DO-ART-306 */}
      <section className="g-tint" data-od-id="clarity-flow">
        <div className="wrap">
          <span className="eyebrow">The Clarity Audit &middot; DO-ART-306</span>
          <h2>One call, one day on site, one written plan.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Four steps, and you know what each one produces
            before you commit to any of them.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className={`plate-frame ${s.plateFrame}`} data-od-id="clarity-flow-diagram">
              <Plate tone="dark" p="cd" title="One call. One day. One clear plan."
                     sub="Four fixed steps. You know what each one produces."
                     no="DO-ART-306" rev="01" cls="DECODED OPS · ISSUED">

                <path id="cd-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M180 460 H1420"
                      fill="none" strokeWidth="2.5" markerEnd="url(#cd-ah)" />

                <g className="sk-fade sk-s3" filter="url(#cd-shadow)">
                  <rect x="100" y="250" width="310" height="140" rx="12" fill="url(#cd-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="255" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="24">Discovery call</text>
                  <text x="255" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">free · 60 minutes</text>
                  <circle cx="255" cy="460" r="13" className="p-cyan"/>
                  <text x="255" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 1</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#cd-shadow)">
                  <rect x="440" y="250" width="310" height="140" rx="12" fill="url(#cd-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="595" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="24">On-site day</text>
                  <text x="595" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">six areas, followed start to finish</text>
                  <circle cx="595" cy="460" r="13" className="p-cyan"/>
                  <text x="595" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 2</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#cd-shadow)">
                  <rect x="780" y="250" width="310" height="140" rx="12" fill="url(#cd-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="935" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="24">Written report</text>
                  <text x="935" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">within 5 working days</text>
                  <circle cx="935" cy="460" r="13" className="p-cyan"/>
                  <text x="935" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 3</text>
                </g>

                <g className="sk-fade sk-s6" filter="url(#cd-shadow)">
                  <rect x="1120" y="242" width="320" height="156" rx="14" fill="url(#cd-amber-n)"
                        className="p-node-a" strokeWidth="1.8"/>
                  <text x="1280" y="306" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="800" fontSize="27">Debrief</text>
                  <text x="1280" y="342" textAnchor="middle" className="p-accent-ink" fontSize="17"
                        fontWeight="600">walked through, not emailed over</text>
                  <circle cx="1280" cy="460" r="17" className="p-amber"/>
                  <text x="1280" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".85">STEP 4</text>
                </g>

                <text x="760" y="700" textAnchor="middle" className="p-mono sk-fade sk-s6" fontSize="22"
                      fontStyle="italic" opacity=".8">Followed, observed, and quantified. Not guessed
                  at.</text>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan">
                    <animateMotion dur="4.6s" repeatCount="indefinite"><mpath href="#cd-spine"/></animateMotion>
                  </circle>
                </g>
              </Plate>
            </div>
          </div>

          <div className={s.steps} data-od-id="clarity-flow-cards">
            <article className={s.step}>
              <p className={s.stepN}>STEP 1</p>
              <h3>Discovery call</h3>
              <p>Free, an hour, no obligation. Enough to work out whether a full day on site would
                tell you anything you don&apos;t already know.</p>
            </article>
            <article className={s.step}>
              <p className={s.stepN}>STEP 2</p>
              <h3>On-site day</h3>
              <p>One day, six areas: IT infrastructure, software and systems, eCommerce, processes and
                operations, growth, and AI readiness. Processes followed, not described.</p>
            </article>
            <article className={s.step}>
              <p className={s.stepN}>STEP 3</p>
              <h3>Written report</h3>
              <p>Within five working days. What&apos;s costing you, what to do about it, what it&apos;ll cost to
                fix, and in what order.</p>
            </article>
            <article className={`${s.step} ${s.stepLast}`}>
              <p className={s.stepN}>STEP 4</p>
              <h3>Debrief</h3>
              <p>I walk you through it, so you can push back while I&apos;m still in the room.
                Then it&apos;s yours: to act on with me, or without me.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 3 · SIX AREAS */}
      <section className="g-white" data-od-id="areas">
        <div className="wrap">
          <span className="eyebrow">What gets covered</span>
          <h2>Six areas, followed from start to finish.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Not a checklist ticked off from a desk. I follow the
            actual process, in the actual place it happens.</p>

          <div className="grid grid--3">
            <article className="card" data-od-id="area-it">
              <span className="kicker">01 · Infrastructure</span>
              <h3>IT infrastructure</h3>
              <p>Networks, backups, security, and the systems nobody&apos;s looked at since the day they
                were installed.</p>
            </article>
            <article className="card" data-od-id="area-software">
              <span className="kicker">02 · Software</span>
              <h3>Software &amp; systems</h3>
              <p>What you&apos;re running, what it costs, and what it&apos;s actually being used for versus what
                it was bought to do.</p>
            </article>
            <article className="card" data-od-id="area-ecommerce">
              <span className="kicker">03 · eCommerce</span>
              <h3>eCommerce</h3>
              <p>Where the website, the warehouse, and the platform agree, and where they quietly
                don&apos;t.</p>
            </article>
            <article className="card" data-od-id="area-operations">
              <span className="kicker">04 · Operations</span>
              <h3>Processes &amp; operations</h3>
              <p>Every manual handoff and workaround, watched as it actually happens, not as it&apos;s
                described in a meeting.</p>
            </article>
            <article className="card" data-od-id="area-growth">
              <span className="kicker">05 · Growth</span>
              <h3>Growth</h3>
              <p>Where the business is outgrowing the systems holding it up, and what breaks first if
                nothing changes.</p>
            </article>
            <article className="card" data-od-id="area-ai">
              <span className="kicker">06 · AI readiness</span>
              <h3>AI readiness</h3>
              <p>Whether the data and processes underneath are solid enough for automation to be worth
                doing yet. Most aren&apos;t.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4 · THE 3× GUARANTEE */}
      <section className="g-navy" data-od-id="guarantee">
        <div className={`wrap ${s.guaranteeBand}`}>
          <p className={`${s.guaranteeNum} ${s.num}`}>3×</p>
          <div>
            <span className="eyebrow">The guarantee</span>
            <h2>Three times the fee, or you don&apos;t pay it.</h2>
            <p>If the report doesn&apos;t identify at least three times the fee in recoverable cost or lost
              revenue, it&apos;s refunded in full. No conditions. No questions.</p>
          </div>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className={`g-white ${s.ctaStrip}`} data-od-id="cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Ready to find out what&apos;s really going on?</h2>
          <p className="lede">The discovery call is free, takes 60 minutes, and comes with no obligation.
            Just an honest conversation about your operation.</p>
          <div className={s.heroCta}>
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
            <Link className={`btn ${s.btnGhost} ${s.btnArrow}`} href="/deliver">See how Deliver follows on</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
