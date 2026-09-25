import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Software for Decorated Goods Businesses | Decoded Ops',
  description: 'Three systems built for jobs the usual platforms never covered: an ERP, an artwork approval tool and a B2B storefront for print and workwear businesses.',
  alternates: { canonical: '/apps' },
  openGraph: {
    type: 'website',
    title: 'Software for Decorated Goods Businesses | Decoded Ops',
    description: 'Three systems built for jobs the usual platforms never covered: an ERP, an artwork approval tool and a B2B storefront for print and workwear businesses.',
    url: 'https://decodedops.co.uk/apps',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software for Decorated Goods Businesses | Decoded Ops',
    description: 'Three systems built for jobs the usual platforms never covered: an ERP, an artwork approval tool and a B2B storefront for print and workwear businesses.',
    images: [OG_IMAGE_PATH],
  },
};

export default function AppsPage() {
  return (
    <>
      {/* 1 · HERO CENTRE + DO-ART-939 */}
      <section className="g-off">
        <div className="wrap centred">
          <span className="eyebrow">The systems</span>
          <h1>Run the operation. Approve the artwork. Sell the goods.</h1>
          <p className="lede">Not a product catalogue. Software built for jobs the platforms in this sector
            were never going to do, proven at real clients.</p>
        </div>
        <div className="wrap hero-art">
          {/* DO-ART-939 r01 */}
          <figure className="d17 sw a939" data-od-id="hero-visual" data-motion data-no="DO-ART-939" data-rev="01" data-tx="photo"
                  aria-label="Product screens DO-ART-939. Three app screens over a graded photograph of an embroidery floor.">
            <div className="d17-ph"><img src="/images/d17/apps-cases/hero-workshop-44196e.webp" alt="" width="1400" height="875" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="top d17-mono" aria-hidden="true"><span>The systems · three apps</span><span>Running today, September 2026</span></div>
            <div className="under d17-mono" aria-hidden="true"><span>Live · two deployments<b>Decoded Works</b></span><span>Founding clients<b>Decoded Proof</b></span><span>In build at Hanicks<b>Decoded Commerce</b></span></div>
            <div className="screens" aria-hidden="true">
              <div className="mw s1 m-rise" style={{animationDelay:'.1s'}} data-cap="Decoded Works · live, two deployments">
                <div className="mw-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb"><span>Catalogue ›</span> Overview</span><span className="pill">LIVE</span></div>
                <div className="mw-main">
                  <h5>Catalogue overview</h5>
                  <p className="s">Every supplier feed, brought into one catalogue</p>
                  <div className="mw-card"><div className="l">Products brought in</div><p className="n">317,812</p><p className="d">from supplier feeds</p></div>
                  <div className="mw-card mw-card--hit"><div className="l">Matched automatically</div><p className="n">154,518</p><p className="d">to a supplier, before anyone touched them</p></div>
                  <div className="mw-card mw-hide"><div className="row"><b>Active suppliers</b><span>40 feeding in</span></div>
                    <div className="track"><div className="fill m-fill" style={{width:'45%',animationDelay:'.9s'}}></div></div></div>
                </div>
              </div>
              <div className="mw s2 m-rise" style={{animationDelay:'.35s'}} data-cap="Decoded Proof · founding clients">
                <div className="mw-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb"><span>Artwork › EMB-0142 ›</span> Approvals</span><span className="pill pill--a">PROOF</span></div>
                <div className="mw-main">
                  <h5>Approval history</h5>
                  <p className="s">Left breast crest · 90 × 90 mm · 5 versions</p>
                  <div className="ver mw-hide"><span className="v">v5</span><div><div className="t">Uploaded 9 Sep, 10:12 <span className="tag">Draft</span></div>
                    <div className="m">Not approved, so production can&rsquo;t pull it</div></div></div>
                  <div className="ver ver--ok"><span className="v">v4</span><div><div className="t">Sent 5 Sep, 09:15 <span className="tag">Approved</span></div>
                    <div className="m">Signed off by the customer contact · 14:32 <span className="tag tag--a">In production</span></div>
                    <div className="say"><small>Customer sign-off</small>&ldquo;That&rsquo;s the one, go ahead with this.&rdquo;</div></div></div>
                </div>
              </div>
              <div className="mw s3 m-rise" style={{animationDelay:'.6s'}} data-cap="Decoded Commerce · in build at Hanicks">
                <div className="mw-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb"><span>Commerce ›</span> Workwear</span><span className="pill">TRADE</span></div>
                <div className="mw-main">
                  <h5>Trade catalogue</h5>
                  <p className="s">Your account pricing · quote alongside the basket</p>
                  <div className="tiles">
                    <div className="tile"><img src="/images/d17/apps-cases/prod-polo-a16032.webp" alt="" /><div className="tb"><div className="sku">WRK-001</div><div className="nm">Piqué polo</div><div className="act"><span>Quote</span><span>Add</span></div></div></div>
                    <div className="tile"><img src="/images/d17/apps-cases/prod-hivis-c5b3cd.webp" alt="" /><div className="tb"><div className="sku">WRK-042</div><div className="nm">Hi-vis vest</div><div className="act"><span>Quote</span><span>Add</span></div></div></div>
                    <div className="tile mw-hide"><img src="/images/d17/apps-cases/cat-promo-89c58a.webp" alt="" /><div className="tb"><div className="sku">PRM-055</div><div className="nm">Ceramic mug</div></div></div>
                    <div className="tile mw-hide"><img src="/images/d17/apps-cases/prod-mailer-9c1448.webp" alt="" /><div className="tb"><div className="sku">PKG-003</div><div className="nm">Mailer box</div></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="base">
              <div><div className="bar" aria-hidden="true"></div>
                <p>Built for jobs the platforms <em>were never going to do.</em></p></div>
              <span className="d17-mark">decodedops.co.uk · DO-ART-939 · Rev 01</span>
            </div>
          </figure>
        </div>
      </section>

      {/* 2 · LOG LIST · one row per app */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">What I build</p>
          <h2>Built for the job.</h2>

          <div className="log-list">
            <Link className="log-row" href="/apps/works">
              <div>
                <span className="chip chip--live">Live &middot; running the operation</span>
                <h3 style={{ marginTop: 14 }}>Decoded Works</h3>
              </div>
              <p>The ERP for decorated goods: sales, stock, purchasing, production and channels, in one
                system. Live today at two client deployments, including a full catalogue and warehouse
                build.</p>
              <span className="go">See how it works</span>
            </Link>

            <Link className="log-row" href="/apps/proof">
              <div>
                <span className="chip chip--pre">Founding clients</span>
                <h3 style={{ marginTop: 14 }}>Decoded Proof</h3>
              </div>
              <p>Every logo, every format, every version, with full revision control and an audit trail.
                Colourways and thread libraries held against the job. Customers approve their own
                proofs, no email back-and-forth.</p>
              <span className="go">See how it works</span>
            </Link>

            <Link className="log-row" href="/apps/commerce">
              <div>
                <span className="chip chip--live">In build at Hanicks</span>
                <h3 style={{ marginTop: 14 }}>Decoded Commerce</h3>
              </div>
              <p>The trade storefront that runs off Works: company accounts, spend limits, approval
                workflows and quote negotiation, reading one catalogue with the warehouse. Scoped to
                what your customers actually need.</p>
              <span className="go">See how it works</span>
            </Link>
          </div>

          <p style={{ marginTop: 32, maxWidth: '68ch' }}>Pipeline and client records (CRM) are built into
            Works, and included with Proof when bought standalone.</p>
        </div>
      </section>

      {/* 2a · ARCHITECTURE · DO-ART-940 */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Architecture · DO-ART-940</span>
          <h2>Three apps, one platform.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Each one started as a gap nothing off the shelf covered for
            decorated goods. Works has since grown into the ERP.</p>

          <figure className="d17 sw a940" data-od-id="plate-architecture" data-motion data-no="DO-ART-940" data-rev="01" data-tx="schematic"
                  aria-label="Drawn plate DO-ART-940. Three gaps nothing off the shelf covered: supplier feeds and one clean catalogue; artwork versions and customer approvals; trade ordering for your customers. Each gap is filled by an app: Decoded Works, Decoded Proof and Decoded Commerce. All three sit on one platform. Works has grown into the full system: catalogue, orders, purchasing, stock, production and despatch, with pipeline and client records built in.">
            <div className="q-grid" aria-hidden="true"></div>
            <svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true"><defs>
              <pattern id="q-hatch-940" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#023047"/><line x1="0" y1="0" x2="0" y2="12" stroke="#8ECAE6" strokeOpacity=".28" strokeWidth="3"/></pattern>
              <marker id="q-ah940" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
              <marker id="q-ah940a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
            </defs></svg>
            <svg className="q v-wide" viewBox="0 0 1600 720" aria-hidden="true">
              <text className="t-m" x="20" y="30" style={{fontSize:'16px'}}>01 · The gaps nothing off the shelf covered</text>
              {/* gap 1 */}
              <g className="m-rise" style={{animationDelay:'.05s'}}>
                <rect x="20" y="56" width="480" height="150" rx="14" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="6 5"/>
                <text className="t-m" x="46" y="94" style={{fontSize:'15px'}}>Gap · the data</text>
                <text className="t-h" x="46" y="136" style={{fontSize:'28px'}}>Supplier feeds in,</text>
                <text className="t-h" x="46" y="170" style={{fontSize:'28px'}}>one clean catalogue out</text></g>
              <g className="m-rise" style={{animationDelay:'.2s'}}>
                <rect x="560" y="56" width="480" height="150" rx="14" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="6 5"/>
                <text className="t-m" x="586" y="94" style={{fontSize:'15px'}}>Gap · the artwork</text>
                <text className="t-h" x="586" y="136" style={{fontSize:'28px'}}>Every version, and the</text>
                <text className="t-h" x="586" y="170" style={{fontSize:'28px'}}>one the customer approved</text></g>
              <g className="m-rise" style={{animationDelay:'.35s'}}>
                <rect x="1100" y="56" width="480" height="150" rx="14" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="6 5"/>
                <text className="t-m" x="1126" y="94" style={{fontSize:'15px'}}>Gap · the ordering</text>
                <text className="t-h" x="1126" y="136" style={{fontSize:'28px'}}>Trade customers who</text>
                <text className="t-h" x="1126" y="170" style={{fontSize:'28px'}}>order on their own terms</text></g>
              {/* drops */}
              <path className="ln-a m-draw" pathLength="1" style={{animationDelay:'.6s'}} d="M260 208 V292" markerEnd="url(#q-ah940a)"/>
              <path className="ln m-draw" pathLength="1" style={{animationDelay:'.75s'}} d="M800 208 V292" markerEnd="url(#q-ah940)"/>
              <path className="ln m-draw" pathLength="1" style={{animationDelay:'.9s'}} d="M1340 208 V292" markerEnd="url(#q-ah940)"/>
              <text className="t-m" x="20" y="262" style={{fontSize:'16px'}}>02 · Filled</text>
              {/* the platform */}
              <g className="m-fade" style={{animationDelay:'1s'}}>
                <rect x="20" y="300" width="1560" height="400" rx="18" fill="none" stroke="#8ECAE6" strokeOpacity=".6" strokeWidth="2"/>
                <text className="t-m" x="1300" y="262" textAnchor="end" style={{fontSize:'16px'}}>03 · One platform</text></g>
              {/* data app: the one that grew */}
              <g className="m-pop" style={{animationDelay:'1.3s'}}>
                <rect className="bx-a" x="44" y="316" width="720" height="360" rx="14"/>
                <text className="t-m t-a" x="72" y="356" style={{fontSize:'16px'}}>Decoded Works · live</text>
                <text className="t-h" x="72" y="400" style={{fontSize:'36px'}}>Grew into the full system</text>
                <g style={{fontSize:'20px'}}>
                  <rect x="72" y="428" width="208" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55"/><text className="t" x="94" y="464" style={{fontSize:'21px'}}>Catalogue</text>
                  <rect x="294" y="428" width="208" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55"/><text className="t" x="316" y="464" style={{fontSize:'21px'}}>Orders</text>
                  <rect x="516" y="428" width="220" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55"/><text className="t" x="538" y="464" style={{fontSize:'21px'}}>Purchasing</text>
                  <rect x="72" y="500" width="208" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55"/><text className="t" x="94" y="536" style={{fontSize:'21px'}}>Stock + bins</text>
                  <rect x="294" y="500" width="208" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55"/><text className="t" x="316" y="536" style={{fontSize:'21px'}}>Production</text>
                  <rect x="516" y="500" width="220" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55"/><text className="t" x="538" y="536" style={{fontSize:'21px'}}>Despatch</text>
                </g>
                <text className="t-d" x="72" y="610" style={{fontSize:'19px'}}>Runs alongside the platform you own,</text>
                <text className="t-d" x="72" y="638" style={{fontSize:'19px'}}>or as the system itself. CRM built in.</text></g>
              <g className="m-rise" style={{animationDelay:'1.1s'}}>
                <rect className="bx" x="780" y="316" width="386" height="360" rx="14"/>
                <text className="t-m" x="806" y="356" style={{fontSize:'16px'}}>Decoded Proof</text>
                <text className="t-h" x="806" y="400" style={{fontSize:'30px'}}>Vault, proofing,</text>
                <text className="t-h" x="806" y="436" style={{fontSize:'30px'}}>machine delivery</text>
                <rect x="806" y="470" width="332" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45"/><text className="t" x="822" y="499" style={{fontSize:'18px'}}>v4 approved · in production</text>
                <rect x="806" y="524" width="332" height="44" rx="8" fill="none" stroke="#8ECAE6" strokeOpacity=".35" strokeDasharray="5 4"/><text className="t-d" x="822" y="553" style={{fontSize:'18px'}}>v5 draft · can&rsquo;t be pulled</text>
                <text className="t-d" x="806" y="638" style={{fontSize:'18px'}}>Founding clients</text></g>
              <g className="m-rise" style={{animationDelay:'1.2s'}}>
                <rect className="bx" x="1182" y="316" width="374" height="360" rx="14"/>
                <text className="t-m" x="1208" y="356" style={{fontSize:'16px'}}>Decoded Commerce</text>
                <text className="t-h" x="1208" y="400" style={{fontSize:'30px'}}>Storefront and</text>
                <text className="t-h" x="1208" y="436" style={{fontSize:'30px'}}>trade portal</text>
                <rect x="1208" y="470" width="320" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45"/><text className="t" x="1224" y="499" style={{fontSize:'18px'}}>Account pricing, quotes</text>
                <rect x="1208" y="524" width="320" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45"/><text className="t" x="1224" y="553" style={{fontSize:'18px'}}>Reads the same stock</text>
                <text className="t-d" x="1208" y="638" style={{fontSize:'18px'}}>In build at Hanicks</text></g>
            </svg>
            <svg className="q v-tall" viewBox="0 0 700 1260" aria-hidden="true">
              <text className="t-m" x="10" y="30" style={{fontSize:'22px'}}>01 · The gaps</text>
              <rect x="10" y="50" width="680" height="96" rx="12" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeDasharray="6 5"/><text className="t-h" x="34" y="108" style={{fontSize:'32px'}}>Feeds in, one catalogue out</text>
              <rect x="10" y="160" width="680" height="96" rx="12" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeDasharray="6 5"/><text className="t-h" x="34" y="218" style={{fontSize:'32px'}}>The version they approved</text>
              <rect x="10" y="270" width="680" height="96" rx="12" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeDasharray="6 5"/><text className="t-h" x="34" y="328" style={{fontSize:'32px'}}>Trade ordering, their terms</text>
              <path className="ln-a" d="M350 372 V430" markerEnd="url(#q-ah940a)"/>
              <text className="t-m" x="10" y="470" style={{fontSize:'22px'}}>02 · Filled, on one platform</text>
              <rect className="bx-a" x="10" y="490" width="680" height="400" rx="14"/>
              <text className="t-m t-a" x="34" y="534" style={{fontSize:'22px'}}>Decoded Works · live</text>
              <text className="t-h" x="34" y="588" style={{fontSize:'40px'}}>Grew into the full system</text>
              <text className="t" x="34" y="646" style={{fontSize:'27px'}}>Catalogue · Orders · Purchasing</text>
              <text className="t" x="34" y="690" style={{fontSize:'27px'}}>Stock + bins · Production</text>
              <text className="t" x="34" y="734" style={{fontSize:'27px'}}>Despatch · CRM built in</text>
              <text className="t-d" x="34" y="800" style={{fontSize:'24px'}}>Alongside the platform you own,</text>
              <text className="t-d" x="34" y="834" style={{fontSize:'24px'}}>or as the system itself</text>
              <rect className="bx" x="10" y="910" width="680" height="150" rx="14"/><text className="t-m" x="34" y="954" style={{fontSize:'22px'}}>Decoded Proof · founding clients</text><text className="t-h" x="34" y="1008" style={{fontSize:'34px'}}>Vault, proofing, machine delivery</text>
              <rect className="bx" x="10" y="1080" width="680" height="150" rx="14"/><text className="t-m" x="34" y="1124" style={{fontSize:'22px'}}>Decoded Commerce · in build</text><text className="t-h" x="34" y="1178" style={{fontSize:'34px'}}>Storefront and trade portal</text>
            </svg>
            <div className="foot"><span className="k d17-mono">Three gaps · three apps · one platform</span><span className="d17-mark">decodedops.co.uk · DO-ART-940 · Rev 01</span></div>
          </figure>
        </div>
      </section>

      {/* 3 · HOW THEY GET BUILT */}
      <section className="g-navy">
        <div className="wrap">
          <p className="eyebrow">Before any of this</p>
          <h2>Software is the last answer, not the first.</h2>
          <p className="lede" style={{ marginTop: 16, maxWidth: '62ch' }}>The audit comes first and it decides
            what&rsquo;s needed, not the other way round. If a platform already on the market does the job,
            that&rsquo;s what goes on the table: named, no commission in it for me. Works, Proof and Commerce
            exist because for a specific set of jobs in this sector, nothing on the market did the job
            properly.</p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link className="btn btn--outline btn-arrow" href="/how-i-build">How I decide what to build</Link>
          </div>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Start with what you need.</h2>
          <p className="lede">Not sure which of these fits? A Clarity Audit maps your operations in a day
            and tells you exactly where software would help, and where it wouldn&rsquo;t.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/clarity">Book a Clarity Audit</Link>
            <Link className="btn btn--ghost btn-arrow" href="/how-i-build">How I decide what to build</Link>
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
