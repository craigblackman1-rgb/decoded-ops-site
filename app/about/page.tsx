import type { Metadata } from 'next';
import Link from 'next/link';
import s from '@/app/deco-page.module.css';
import { D17Motion } from '@/components/D17Motion';
import d17 from '@/app/d17-art.module.css';

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
    <>
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
            {/* DO-ART-904 r03 · photo-led portrait (D17). assets/craig-blackman.jpg is
                 the only approved portrait; rev 02's close-up selfie is banned.
                 Light grade, faces never palette-reduced. */}
            <figure className={`${d17.d17} ${d17.a904}`} data-od-id="about-visual"
                    data-no="DO-ART-904" data-rev="03" data-tx="photo">
              <div className={d17.d17Ph}><img src="/images/d17/craig-blackman.jpg" width={1100} height={1067}
                   alt="Craig Blackman on a wide sandy beach under a grey sky, smiling, hands in the pockets of a black jacket, the sea behind him." /></div>
              <div className={d17.d17Scan} aria-hidden="true" style={{ opacity: '.3' }} />
              <div className={`${d17.top} ${d17.d17Mono}`} aria-hidden="true"><span>Craig Blackman</span><span>Decoded Ops</span></div>
              <p className={d17.note} aria-hidden="true">Twenty-five years inside <em>the businesses I now advise.</em></p>
              <span className={`${d17.d17Mark} ${d17.d17MarkAbs}`}>decodedops.co.uk &middot; DO-ART-904 &middot; Rev 03</span>
            </figure>
            <p className={s.shotCaption}>Craig Blackman, Decoded Ops. Based in Worthing, West Sussex,
              working across the UK.</p>
          </div>
        </div>
      </section>

      {/* PLATE · DO-ART-904 → DO-ART-831 route */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Career arc &middot; DO-ART-831</span>
          <h2>Three vantage points, one problem that never changed.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            Twenty-five years in print, embroidery, and decoration, from warehouse floor to IT to operations. The vantage point changed. The gap between the process on paper and the workaround on the floor did not.
          </p>

          {/* DO-ART-831 r01 · journey poster, website cut (D16/D17). Same drawing
               and argument as the Issue 02 poster; the in-page draw runs the line
               left to right and lands on the amber terminus. Below 700px the
               route turns vertical: same five stations, same two prints. */}
          <figure className={`${d17.d17} ${d17.a831}`} data-od-id="route" data-motion
                  data-no="DO-ART-831" data-rev="01" data-tx="poster"
                  aria-label="Journey plate DO-ART-831, how I got here. One line with five stations, climbing left to right. 01 Industrial computing: MOD, BBC, ITV. 02 Textiles: warehouse floor to 1,000+ orders a day at peak. 03 IT managed services. 04 Demystify Digital: 4.5 years building eCommerce for print and embroidery. 05 Operations consultancy, the amber terminus: what I do now.">
            <div className={d17.gridl} aria-hidden="true" />
            <p className={`${d17.eb} ${d17.d17Mono}`}>The route</p>
            <p className={d17.hd}>How I got here</p>
            <p className={d17.stand}>Every level of these businesses, one stop at a time.</p>
            <svg className="route" viewBox="0 0 1600 900" aria-hidden="true">
              <defs><filter id="rt-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="10" /></filter></defs>
              <g stroke="rgba(142,202,230,.55)" strokeWidth="2" strokeDasharray="4 6" fill="none" className="m-fade" style={{ animationDelay: '1.6s' }}>
                <path d="M470 572 V 596" /><path d="M1080 392 V 436" /></g>
              <path d="M70 620 H 590 L 750 460 H 1180 L 1320 320 H 1430" pathLength="1" fill="none" stroke="rgba(33,158,188,.5)" strokeWidth="30" strokeLinejoin="round" strokeLinecap="round" filter="url(#rt-glow)" className="m-draw" />
              <path d="M70 620 H 590 L 750 460 H 1180 L 1320 320 H 1430" pathLength="1" fill="none" stroke="#01263a" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" className="m-draw" />
              <path d="M70 620 H 590 L 750 460 H 1180 L 1320 320 H 1430" pathLength="1" fill="none" stroke="#8ECAE6" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" className="m-draw" />
              <rect x="58" y="596" width="12" height="48" rx="3" fill="#8ECAE6" />
              <g fill="#F8F9FA" stroke="#023047" strokeWidth="6">
                <circle cx="190" cy="620" r="17" className="m-pop" style={{ animationDelay: '.35s', transformOrigin: '190px 620px' }} />
                <circle cx="470" cy="620" r="17" className="m-pop" style={{ animationDelay: '.75s', transformOrigin: '470px 620px' }} />
                <circle cx="860" cy="460" r="17" className="m-pop" style={{ animationDelay: '1.3s', transformOrigin: '860px 460px' }} />
                <circle cx="1080" cy="460" r="17" className="m-pop" style={{ animationDelay: '1.6s', transformOrigin: '1080px 460px' }} />
              </g>
              <g className="m-pop" style={{ animationDelay: '2.3s', transformOrigin: '1430px 320px' }}>
                <circle cx="1430" cy="320" r="46" fill="rgba(255,183,3,.16)" />
                <circle cx="1430" cy="320" r="30" fill="#023047" stroke="#FFB703" strokeWidth="10" />
                <circle cx="1430" cy="320" r="11" fill="#FFB703" /></g>
            </svg>
            <div className="prints" aria-hidden="true">
              <div className={`${d17.print} m-drop`} style={{ left: 'calc(352 * var(--u))', top: 'calc(356 * var(--u))', width: 'calc(236 * var(--u))', height: 'calc(216 * var(--u))', transform: 'rotate(-3deg)', animationDelay: '.9s' }}>
                <img src="/images/d17/thread-spools.jpg" alt="" /><i className="tint" />
                <span>where print and embroidery got hold of me</span></div>
              <div className={`${d17.print} m-drop`} style={{ left: 'calc(966 * var(--u))', top: 'calc(196 * var(--u))', width: 'calc(228 * var(--u))', height: 'calc(196 * var(--u))', transform: 'rotate(2.6deg)', animationDelay: '1.8s' }}>
                <img src="/images/d17/gen-press-hall.jpg" alt="" /><i className="tint" /></div>
            </div>
            <div className="stations">
              <div className={`${d17.st} m-fade`} style={{ left: 'calc(168 * var(--u))', top: 'calc(658 * var(--u))', animationDelay: '.4s' }}><span className="n">01</span><h3>Industrial computing</h3><p>MOD, BBC, ITV</p></div>
              <div className={`${d17.st} m-fade`} style={{ left: 'calc(448 * var(--u))', top: 'calc(658 * var(--u))', width: 'calc(270 * var(--u))', animationDelay: '.8s' }}><span className="n">02</span><h3>Textiles</h3><p>Warehouse floor to 1,000+ orders a day at peak</p></div>
              <div className={`${d17.st} m-fade`} style={{ left: 'calc(838 * var(--u))', top: 'calc(498 * var(--u))', width: 'calc(210 * var(--u))', animationDelay: '1.35s' }}><span className="n">03</span><h3>IT managed services</h3></div>
              <div className={`${d17.st} m-fade`} style={{ left: 'calc(1058 * var(--u))', top: 'calc(498 * var(--u))', width: 'calc(300 * var(--u))', animationDelay: '1.65s' }}><span className="n">04</span><h3>Demystify Digital</h3><p>4.5 years building eCommerce for print and embroidery</p></div>
              <div className={`${d17.st} ${d17.stEnd} m-fade`} style={{ left: 'calc(1300 * var(--u))', top: 'calc(382 * var(--u))', width: 'calc(280 * var(--u))', animationDelay: '2.4s' }}><span className="n">05 &middot; What I do now</span><h3>Operations consultancy</h3></div>
            </div>
            <span className={`${d17.d17Mark} ${d17.d17MarkAbs}`}>decodedops.co.uk &middot; DO-ART-831 &middot; Rev 01</span>
          </figure>
        </div>
      </section>

      {/* 2 · THE RECORD · DO-ART-919a/b */}
      <section className="g-white" data-od-id="record">
        <div className="wrap">
          <span className="eyebrow">The record</span>
          <h2>Two things worth knowing.</h2>

          <div className="grid grid--2" style={{ marginTop: 44 }}>
            <article className="card" data-od-id="fact-textile">
              <div className={`${d17.factHeadA919}`}>
                <div className={d17.d17Ph}><img src="/images/d17/prod-mailer.jpg" alt="" /></div>
                <span className={d17.fm} aria-hidden="true">DO-ART-919a</span>
                <span className={d17.factNo}>Fact 01</span>
                <p className={`${d17.factFig} ${d17.num}`}>1,000+</p>
                <p className={d17.factFigSub}>orders a day at Christmas peak</p>
              </div>
              <div className={d17.factBody}>
                <h3>Seven years running operations at one textile business.</h3>
                <p>We went from paper and people&apos;s memories to shipping over a thousand orders a day at
                  Christmas peak. Full barcode scanning, ERP, proper pick, pack and despatch.</p>
              </div>
            </article>

            <article className="card" data-od-id="fact-closed">
              <div className={`${d17.factHeadA919}`}>
                <div className={d17.d17Ph}><img src="/images/d17/gen-bench-flatlay-v2.jpg" alt="" /></div>
                <span className={d17.fm} aria-hidden="true">DO-ART-919b</span>
                <span className={d17.factNo}>Fact 02</span>
                <p className={`${d17.factFig} ${d17.num}`}>4&frac12; years</p>
                <p className={d17.factFigSub}>of a business of my own, then I closed it</p>
              </div>
              <div className={d17.factBody}>
                <h3>A large customer did not pay.</h3>
                <p>In that time I built a full print and embroidery ecommerce ecosystem on Magento 2. So
                  I know what a bad commercial decision costs from the inside rather than from a
                  slide.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3 · WHY THE SOFTWARE EXISTS · DO-ART-719 */}
      <section className="g-navy set" data-od-id="software-origin">
        <div className="wrap">
          <article className="sheet" data-od-id="sheet-software">
            <div className="docket">
              <span>DO-ART-719 &middot; Schematic</span>
              <span>Rev 03</span>
              <span className="issued">Issued</span>
            </div>

            <div className="masthead">
              <div>
                <span className="eyebrow">Why the software exists</span>
                <h2>I didn&apos;t set out to build software.</h2>
              </div>
              <p className="lede">I kept meeting the same gap in businesses I was already fixing, and
                nothing on the market closed it at a price those businesses could justify. So I built
                the thing that did. It exists because the operational work needed it to, not because I
                went looking for a product to sell.</p>
            </div>

            <div className="plate-scroll">
              {/* DO-ART-719 r03 · drawn engineering plate, website cut of the
                   Issue 02 schematic: the platform you already run, the gap it
                   leaves, and three ways to fill it. The drawing is the still. */}
              <div className="plate-frame" data-od-id="plate-gap">
                <img src="/images/d17/fill-the-gap.png" width={1600} height={900}
                     style={{ display: 'block', width: '100%', height: 'auto' }}
                     alt="Schematic plate DO-ART-719, three ways to fill the gap. The platform you already run covers orders, stock, customers, products, accounts, suppliers, purchasing and reports, with custom development bolted on to make it fit; decoration and artwork are not built for it, leaving a gap. Three routes lead out of the gap: use what is already there; add a layer on top; or use something already built, because there was nothing on the market designed to do that job." />
              </div>
            </div>

            <p className="sheet-foot" data-od-id="sheet-foot">The Data App is one of those layers. At Hanicks,
              it has brought 317,812 supplier products into one catalogue and
              matched 154,518 of them to a supplier automatically. Nobody retypes a supplier
              spreadsheet any more.</p>
          </article>
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
    <D17Motion />
    </>
  );
}
