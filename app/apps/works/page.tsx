import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Decoded Works: ERP for Decorated Goods | Decoded Ops',
  description: 'Decoded Works is the ERP for decorated goods: sales, stock, purchasing, production and channels in one system, live at Hanicks with 317,812 products.',
  alternates: { canonical: '/apps/works' },
  openGraph: {
    type: 'website',
    title: 'Decoded Works: ERP for Decorated Goods | Decoded Ops',
    description: 'Decoded Works is the ERP for decorated goods: sales, stock, purchasing, production and channels in one system, live at Hanicks with 317,812 products.',
    url: 'https://decodedops.co.uk/apps/works',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Works: ERP for Decorated Goods | Decoded Ops',
    description: 'Decoded Works is the ERP for decorated goods: sales, stock, purchasing, production and channels in one system, live at Hanicks with 317,812 products.',
    images: [OG_IMAGE_PATH],
  },
};

const dataAppFaqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Decoded Works actually do?',
          acceptedAnswer: { '@type': 'Answer', text: "It's the ERP for a decoration business: supplier feeds, data enrichment and catalogue maintenance across channels, plus orders, purchasing, stock, production and despatch. It started as the missing layer for one client's supplier feeds and has grown into the full system." },
        },
        {
          '@type': 'Question',
          name: 'Does it replace my existing platform?',
          acceptedAnswer: { '@type': 'Answer', text: 'It can run alongside the platform you already own, or replace it. The platform stays unchanged in the first case. Feeds land in Works, get matched and enriched, and get pushed back into the platform clean.' },
        },
        {
          '@type': 'Question',
          name: 'How are supplier feeds handled?',
          acceptedAnswer: { '@type': 'Answer', text: 'Supplier feeds land in Works, get matched against what you already sell, get enriched, and get pushed back into the platform. No re-keying, no second version of the truth.' },
        },
      ],
    },
  ],
};

export default function DataAppPage() {
  return (
    <>
      <JsonLd data={dataAppFaqSchema} />
      {/* 1 · HERO SPLIT + DO-ART-941 */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Decoded Works &middot; the ERP for decorated goods</span>
            <h1>The ERP I couldn&rsquo;t buy for my clients.</h1>
            <div className="hero-body">
              <p>Every Clarity Audit ends in a written brief. For years the same jobs kept coming back
                with nothing on the market built for decorated goods: supplier feeds, decoration data,
                blank-to-finished mapping, artwork held against the job. So I built the missing piece.
                Engagement by engagement it grew, and today it runs the whole operation: catalogue,
                orders, purchasing, stock, production and despatch. It still plays both ways. Alongside
                the platform you already own, or as the system itself.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
              <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works</Link>
            </div>
          </div>

          <div className="hero-shot">
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a941" data-od-id="hero-visual" data-motion data-no="DO-ART-941" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-941. The Decoded Works supplier matching screen at a live client, September 2026: 317,812 products brought in from supplier feeds, 154,518 matched to a supplier automatically, 40 active suppliers with 89 on file. Supplier lines arrive in different formats and are matched to one catalogue product; anything not yet matched sits on a visible list. Feeds in, one clean catalogue out.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/cat-workwear-679f8b.webp" alt="" width="900" height="596"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Case study 01 · Works</span><span>Live, September 2026</span></div>
  <div class="stage" aria-hidden="true">
    <div class="mw">
      <div class="mw-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Catalogue ›</span> Supplier matching</span><span class="pill">LIVE</span></div>
      <div class="mw-main">
        <h5>Supplier matching</h5>
        <p class="s">Every supplier line, matched to what you actually sell</p>
        <div class="kp3">
          <div class="mw-card m-rise" style="animation-delay:.1s"><div class="l">Brought in</div><p class="n">317,812</p><p class="d">products</p></div>
          <div class="mw-card mw-card--hit m-rise" style="animation-delay:.25s"><div class="l">Matched auto</div><p class="n">154,518</p><p class="d">to a supplier</p></div>
          <div class="mw-card m-rise" style="animation-delay:.4s"><div class="l">Suppliers</div><p class="n">40</p><p class="d">active, 89 on file</p></div>
        </div>
        <div class="mq m-rise" style="animation-delay:.55s">
          <div class="h"><span>Supplier line</span><span></span><span>Catalogue product</span><span>Status</span></div>
          <div class="r"><span><b>Supplier A</b><small>CSV · row 1,204</small></span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8h11M9 4l4 4-4 4"/></svg><span><b>PRD-10417</b><small>one product, one SKU</small></span><span class="st">MATCHED</span></div>
          <div class="r"><span><b>Supplier B</b><small>price list · p. 38</small></span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8h11M9 4l4 4-4 4"/></svg><span><b>PRD-10417</b><small>second source, same item</small></span><span class="st">MATCHED</span></div>
          <div class="r"><span><b>Supplier C</b><small>stock feed · nightly</small></span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8h11M9 4l4 4-4 4"/></svg><span><b>PRD-22031</b><small>stock level updated</small></span><span class="st">MATCHED</span></div>
          <div class="r r--open"><span><b>Supplier D</b><small>new line · today</small></span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8h11M9 4l4 4-4 4"/></svg><span><b>No match yet</b><small>visible, not hidden</small></span><span class="st st--a">ON THE LIST</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Feeds in, <em>one clean catalogue out.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-941 · Rev 01</span>
  </div>
</figure>` }} />
            <p className="shot-caption">A live client system. Feeds in on the left, one clean catalogue out
              on the right, and the platform they already own kept up to date automatically.</p>
          </div>
        </div>
      </section>

      {/* 2 · LAYER STACK · DO-ART-942 */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Architecture &middot; DO-ART-942</span>
          <h2>Keep your platform, or let this become it.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Works started as the missing layer: supplier
            feeds, data enrichment, catalogue maintenance across channels. It has grown into the ERP.
            You can run it alongside the platform you already own, or let it replace it.</p>

          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a942" data-od-id="layer-stack-diagram" data-motion data-no="DO-ART-942" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-942. Two ways to run Decoded Works, drawn side by side. Way A: the platform you already own stays at the bottom, Works sits alongside it, taking supplier feeds in, matching and enriching them, and pushing clean data back; the website, marketplaces and trade portal all read from one catalogue. Way B: Works is the system itself, running catalogue, orders, purchasing, stock, production and despatch, and the old platform is retired. Either way, every channel reads from one catalogue.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <marker id="q-ah942" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah942a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 700" aria-hidden="true">
    <!-- A -->
    <text class="t-m" x="20" y="30" style="font-size:17px">A · Alongside the platform you own</text>
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="20" y="540" width="700" height="130" rx="14"/>
      <text class="t-m" x="46" y="578" style="font-size:15px">Layer 1 · stays as it is</text>
      <text class="t-h" x="46" y="620" style="font-size:30px">The platform you already own</text>
      <text class="t-d" x="46" y="650" style="font-size:18px">your team knows it, it keeps doing what it does well</text></g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.4s" d="M370 538 V486" marker-end="url(#q-ah942a)"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.4s" d="M300 480 V528" marker-end="url(#q-ah942a)"/>
    <g class="m-pop" style="animation-delay:.3s"><rect class="bx-a" x="20" y="306" width="700" height="170" rx="14"/>
      <text class="t-m t-a" x="46" y="344" style="font-size:15px">Layer 2 · alongside</text>
      <text class="t-h" x="46" y="388" style="font-size:32px">Decoded Works</text>
      <text class="t" x="46" y="424" style="font-size:19px">feeds land · matched · enriched · pushed back clean</text>
      <text class="t-d" x="46" y="454" style="font-size:17px">no re-keying, no second version of the truth</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.7s" d="M140 304 V250 M370 304 V250 M600 304 V250" marker-end="url(#q-ah942)"/>
    <g class="m-rise" style="animation-delay:.8s">
      <rect class="bx" x="20" y="150" width="220" height="92" rx="12"/><text class="t" x="46" y="204" style="font-size:22px;font-weight:700">Website</text>
      <rect class="bx" x="260" y="150" width="220" height="92" rx="12"/><text class="t" x="286" y="204" style="font-size:22px;font-weight:700">Marketplaces</text>
      <rect class="bx" x="500" y="150" width="220" height="92" rx="12"/><text class="t" x="526" y="204" style="font-size:22px;font-weight:700">Trade portal</text></g>
    <text class="t-m" x="20" y="120" style="font-size:15px">Layer 3 · every channel, one catalogue</text>
    <!-- or -->
    <line x1="800" y1="70" x2="800" y2="670" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="1.4" stroke-dasharray="6 6"/>
    <circle cx="800" cy="400" r="34" fill="#023047" stroke="#8ECAE6" stroke-opacity=".6" stroke-width="1.4"/>
    <text class="t-h" x="800" y="409" text-anchor="middle" style="font-size:24px">or</text>
    <!-- B -->
    <text class="t-m t-a" x="880" y="30" style="font-size:17px">B · As the system itself</text>
    <g class="m-fade" style="animation-delay:.2s"><rect x="880" y="580" width="700" height="90" rx="14" fill="none" stroke="#8ECAE6" stroke-opacity=".45" stroke-width="1.4" stroke-dasharray="7 6"/>
      <text class="t-d" x="906" y="634" style="font-size:22px">The old platform</text>
      <line class="strike" x1="900" y1="626" x2="1086" y2="626"/>
      <text class="t-m" x="1556" y="632" text-anchor="end" style="font-size:14px">retired</text></g>
    <g class="m-pop" style="animation-delay:.45s"><rect class="bx-a" x="880" y="290" width="700" height="270" rx="14"/>
      <text class="t-m t-a" x="906" y="328" style="font-size:15px">The system</text>
      <text class="t-h" x="906" y="372" style="font-size:32px">Decoded Works</text>
      <rect x="906" y="394" width="206" height="54" rx="9" fill="#FFB703" fill-opacity=".13" stroke="#FFB703" stroke-opacity=".55"/><text class="t" x="926" y="428" style="font-size:20px">Catalogue</text>
      <rect x="1124" y="394" width="206" height="54" rx="9" fill="#FFB703" fill-opacity=".13" stroke="#FFB703" stroke-opacity=".55"/><text class="t" x="1144" y="428" style="font-size:20px">Orders</text>
      <rect x="1342" y="394" width="212" height="54" rx="9" fill="#FFB703" fill-opacity=".13" stroke="#FFB703" stroke-opacity=".55"/><text class="t" x="1362" y="428" style="font-size:20px">Purchasing</text>
      <rect x="906" y="460" width="206" height="54" rx="9" fill="#FFB703" fill-opacity=".13" stroke="#FFB703" stroke-opacity=".55"/><text class="t" x="926" y="494" style="font-size:20px">Stock + bins</text>
      <rect x="1124" y="460" width="206" height="54" rx="9" fill="#FFB703" fill-opacity=".13" stroke="#FFB703" stroke-opacity=".55"/><text class="t" x="1144" y="494" style="font-size:20px">Production</text>
      <rect x="1342" y="460" width="212" height="54" rx="9" fill="#FFB703" fill-opacity=".13" stroke="#FFB703" stroke-opacity=".55"/><text class="t" x="1362" y="494" style="font-size:20px">Despatch</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.9s" d="M1000 288 V250 M1230 288 V250 M1460 288 V250" marker-end="url(#q-ah942)"/>
    <g class="m-rise" style="animation-delay:1s">
      <rect class="bx" x="880" y="150" width="220" height="92" rx="12"/><text class="t" x="906" y="204" style="font-size:22px;font-weight:700">Website</text>
      <rect class="bx" x="1120" y="150" width="220" height="92" rx="12"/><text class="t" x="1146" y="204" style="font-size:22px;font-weight:700">Marketplaces</text>
      <rect class="bx" x="1360" y="150" width="220" height="92" rx="12"/><text class="t" x="1386" y="204" style="font-size:22px;font-weight:700">Trade portal</text></g>
    <text class="t-m" x="880" y="120" style="font-size:15px">Every channel, one catalogue</text>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1210" aria-hidden="true">
    <text class="t-m" x="10" y="32" style="font-size:22px">A · Alongside the platform</text>
    <rect class="bx" x="10" y="56" width="680" height="80" rx="12"/><text class="t" x="34" y="106" style="font-size:26px;font-weight:700">Website · marketplaces · trade</text>
    <path class="ln" d="M350 138 V172" marker-end="url(#q-ah942)"/>
    <rect class="bx-a" x="10" y="180" width="680" height="120" rx="14"/><text class="t-m t-a" x="34" y="220" style="font-size:20px">Layer 2 · alongside</text><text class="t-h" x="34" y="270" style="font-size:36px">Decoded Works</text>
    <rect class="bx" x="10" y="318" width="680" height="96" rx="12"/><text class="t-m" x="34" y="354" style="font-size:19px">Layer 1 · stays</text><text class="t" x="34" y="394" style="font-size:26px;font-weight:700">The platform you already own</text>
    <line x1="10" y1="478" x2="690" y2="478" stroke="#8ECAE6" stroke-opacity=".3" stroke-dasharray="6 6"/>
    <circle cx="350" cy="478" r="32" fill="#023047" stroke="#8ECAE6" stroke-opacity=".6"/><text class="t-h" x="350" y="488" text-anchor="middle" style="font-size:26px">or</text>
    <text class="t-m t-a" x="10" y="566" style="font-size:22px">B · As the system itself</text>
    <rect class="bx" x="10" y="590" width="680" height="80" rx="12"/><text class="t" x="34" y="640" style="font-size:26px;font-weight:700">Website · marketplaces · trade</text>
    <path class="ln" d="M350 672 V706" marker-end="url(#q-ah942)"/>
    <rect class="bx-a" x="10" y="714" width="680" height="330" rx="14"/><text class="t-m t-a" x="34" y="756" style="font-size:20px">The system</text><text class="t-h" x="34" y="806" style="font-size:36px">Decoded Works</text>
    <text class="t" x="34" y="866" style="font-size:26px">Catalogue · Orders · Purchasing</text>
    <text class="t" x="34" y="910" style="font-size:26px">Stock + bins · Production</text>
    <text class="t" x="34" y="954" style="font-size:26px">Despatch</text>
    <rect x="10" y="1064" width="680" height="80" rx="12" fill="none" stroke="#8ECAE6" stroke-opacity=".45" stroke-dasharray="7 6"/><text class="t-d" x="34" y="1114" style="font-size:26px">The old platform · retired</text>
    <line class="strike" x1="30" y1="1105" x2="250" y2="1105"/>
  </svg>
  <div class="foot"><span class="k d17-mono">Two ways to run it · one catalogue either way</span><span class="d17-mark">decodedops.co.uk · DO-ART-942 · Rev 01</span></div>
</figure>` }} />

          <div className="steps">
            <article className="step">
              <p className="step-n">LAYER 1</p>
              <h3>The platform stays</h3>
              <p>You&rsquo;ve already paid for it, your team already knows it, and replacing it is a year of
                disruption you don&rsquo;t need. It keeps doing what it does well.</p>
            </article>
            <article className="step step--last">
              <p className="step-n">LAYER 2</p>
              <h3>Works goes alongside</h3>
              <p>Feeds land here, get matched against what you already sell, get enriched, and get pushed
                back into the platform clean. No re-keying, no second version of the truth.</p>
            </article>
            <article className="step">
              <p className="step-n">LAYER 3</p>
              <h3>Every channel stays current</h3>
              <p>Website, marketplaces, trade portal. They all read from one catalogue, so they stop
                disagreeing with each other and with the warehouse.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 3 · THE SCREENS · DO-ART-943 */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">The screens</span>
          <h2>What it looks like running the operation.</h2>

          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a943" data-od-id="screens-visual" data-motion data-no="DO-ART-943" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-943. A graded workbench photograph with two Decoded Works screens over it. On the desk, the catalogue view: one parent product, a work polo, with its supplier, decoration and size and colour variants, each linked to stock and a bin. On the warehouse phone, a bin label being scanned and the stock put away to its bin. Captions: the dashboard shows what needs a decision; the catalogue view holds one product and every variant; supplier imports land and are matched.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/gen-bench-flatlay-dea11a.webp" alt="" width="1024" height="1024"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="desk m-rise" style="animation-delay:.1s" aria-hidden="true">
    <div class="mw">
      <div class="mw-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Catalogue › Parent products ›</span> PRD-20118</span><span class="pill">CATALOGUE</span></div>
      <div class="mw-main">
        <h5>Work polo, piqué</h5>
        <p class="s">One parent product · every variant linked to stock and a bin</p>
        <div class="pv">
          <div class="img"><img src="/images/d17/apps-cases/prod-polo-80aad7.webp" alt=""></div>
          <dl>
            <dt>Supplier</dt><dd>Supplier A · matched automatically</dd>
            <dt>Decoration</dt><dd>Embroidery · left chest</dd>
            <dt>Channels</dt><dd>Website · trade portal</dd>
            <dt>Status</dt><dd>Live, kept current from the feed</dd>
          </dl>
        </div>
        <table class="vg">
          <tr><th>SKU</th><th>Colour</th><th>Size</th><th>Bin</th><th>Status</th></tr>
          <tr><td>PRD-20118-NVY-M</td><td>Navy</td><td>M</td><td>A-04-2</td><td><span class="st">LIVE</span></td></tr>
          <tr><td>PRD-20118-NVY-L</td><td>Navy</td><td>L</td><td>A-04-3</td><td><span class="st">LIVE</span></td></tr>
          <tr><td>PRD-20118-BLK-M</td><td>Black</td><td>M</td><td>A-05-1</td><td><span class="st">LIVE</span></td></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="phone m-drop" style="animation-delay:.6s" aria-hidden="true">
    <div class="scr">
      <div class="ph-bar"><small>WAREHOUSE · PUT AWAY</small>Scan a bin</div>
      <div class="cam"><div class="lbl">BIN A-04-3<i></i></div><div class="aim"></div></div>
      <div class="ph-row"><span class="l">Scanned</span><b>PRD-20118-NVY-L</b>12 units</div>
      <div class="ph-row ph-row--ok m-pop" style="animation-delay:1.2s"><span class="l">Put away</span><b>Bin A-04-3</b>stock record updated</div>
    </div>
  </div>
  <figcaption class="cap3">
    <ol>
      <li><b>Dashboard</b>What needs a decision today, and what is already running.</li>
      <li class="hit"><b>Catalogue view</b>One parent product, every variant, every bin.</li>
      <li><b>Supplier import</b>Feeds land, get matched, and stay current.</li>
    </ol>
  </figcaption>
  <span class="d17-mark d17-mark--abs">decodedops.co.uk · DO-ART-943 · Rev 01</span>
</figure>` }} />
        </div>
      </section>

      {/* 4 · STAT ROW */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Case study 01 &middot; first run</span>
          <h2>Real numbers from a real deployment.</h2>

          <div className="grid grid--3" style={{ marginTop: 44 }}>
            <div className="stat">
              <p className="stat-num num">317,812</p>
              <p className="stat-label">products brought in from supplier feeds</p>
            </div>
            <div className="stat">
              <p className="stat-num num">154,518</p>
              <p className="stat-label">matched to a supplier automatically</p>
            </div>
            <div className="stat">
              <p className="stat-num num">40</p>
              <p className="stat-label">active suppliers feeding in</p>
            </div>
          </div>

          <p className="stat-caption">Case study 01, real production numbers. The platform didn&rsquo;t change.
            The layer around it did, and the catalogue went from something nobody trusted to something
            the warehouse and the website could both work from.</p>
        </div>
      </section>

      {/* 5 · COMPARISON TABLE */}
      <section className="g-white" id="pricing">
        <div className="wrap">
          <span className="eyebrow">What each tier covers</span>
          <h2>Three tiers, priced on scope.</h2>

          <div className="inset">
            <b>Which tier fits depends on your setup.</b> How many feeds, how many channels, and what
            the platform you already run needs beside it. That gets settled in conversation, so the
            quote that follows is a real number, not a range.
          </div>

          <div className="table-wrap">
            <table className="ds-table">
              <caption>Decoded Works</caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Core</th>
                  <td className="scope">Up to 3 supplier feeds, one sales channel</td>
                </tr>
                <tr>
                  <th scope="row">Connected <span className="star">Most take this</span></th>
                  <td className="scope">Up to 10 feeds, up to 3 channels, platform integration</td>
                </tr>
                <tr>
                  <th scope="row">Scaled</th>
                  <td className="scope">Unlimited feeds, marketplace automation, multi-warehouse</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing" style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>
        </div>
      </section>

      {/* 6 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Talk it through first.</h2>
          <p className="lede">No pitch. If it turns out you don&rsquo;t need this, that&rsquo;s what
            you&rsquo;ll hear.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
