import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { a942 } from '@/lib/d17-figures/a942';
import { a943 } from '@/lib/d17-figures/a943';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'ERP for Printing Companies & Stock Control | Decoded Ops',
  description: 'Decoded Works is ERP for a printing company that also needs real stock control: sales, purchasing, production and channels in one system, live at Hanicks.',
  alternates: { canonical: '/apps/works' },
  openGraph: {
    type: 'website',
    title: 'ERP for Printing Companies & Stock Control | Decoded Ops',
    description: 'Decoded Works is ERP for a printing company that also needs real stock control: sales, purchasing, production and channels in one system, live at Hanicks.',
    url: 'https://decodedops.co.uk/apps/works',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP for Printing Companies & Stock Control | Decoded Ops',
    description: 'Decoded Works is ERP for a printing company that also needs real stock control: sales, purchasing, production and channels in one system, live at Hanicks.',
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
                Engagement by engagement it grew into an ERP for a printing company or embroiderer, and today it runs the whole operation: catalogue,
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
            feeds, data enrichment, catalogue maintenance across channels. It has grown into the ERP, with stock control and order management built in.
            You can run it alongside the platform you already own, or let it replace it.</p>

          <div dangerouslySetInnerHTML={{ __html: a942 }} />

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

          <div dangerouslySetInnerHTML={{ __html: a943 }} />
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
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing"               style={{ color: 'var(--do-text-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>
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
