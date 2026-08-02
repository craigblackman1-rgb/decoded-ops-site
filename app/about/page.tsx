import type { Metadata } from 'next';
import Link from 'next/link';
import s from '@/app/deco-page.module.css';

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
              <img src="/assets/commerce/thread-spools.jpg" width="1600" height="1067"
                   alt="A rack of embroidery thread cones in mixed colours on a workshop wall, the working stock of a decoration floor." />
            </div>
            <p className={s.shotCaption}>Twenty-five years in rooms like this one, on both sides of the
              system that runs them.</p>
          </div>
        </div>
      </section>

      {/* 2 · THE TIMELINE */}
      <section className="g-white" data-od-id="timeline">
        <div className="wrap">
          <span className="eyebrow">Where this comes from</span>
          <h2>Three beats, not a straight line.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Each one changed what I noticed the next time round,
            which is most of why the audit works the way it does.</p>

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
