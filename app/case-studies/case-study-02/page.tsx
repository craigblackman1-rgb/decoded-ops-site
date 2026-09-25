import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata = {
  title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
  description: 'A Clarity Audit into a Deliver engagement for a branded apparel and decoration retailer. The diagnostic came before the decision.',
  alternates: { canonical: '/case-studies/case-study-02' },
  openGraph: {
    type: 'article',
    title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement for a branded apparel and decoration retailer.',
    url: 'https://decodedops.co.uk/case-studies/case-study-02',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement for branded apparel.',
    images: [OG_IMAGE_PATH],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Case study 02: the diagnostic came before the decision',
      description: 'A Clarity Audit into a Deliver engagement for a branded apparel and decoration retailer. 17 supplier feeds automated, 20 to 40 hours a week of admin time projected saved.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-07-28',
      dateModified: '2026-09-23',
      url: 'https://decodedops.co.uk/case-studies/case-study-02',
    },
  ],
};

export default function CaseStudy02Page() {
  return (
    <>
      <style>{`
        .hero-center{ text-align:center; max-width:760px; margin-inline:auto }
        .hero-center h1{ max-width:none; margin-inline:auto }
        .hero-center .lede{ margin:18px auto 0 }
        .hero-center .eyebrow{ margin-inline:auto }
        .stat .stat-num{ font-family:var(--do-font-heading); font-weight:800;
          font-size:clamp(2.2rem,4vw,3.2rem); line-height:1; letter-spacing:-.03em;
          color:var(--do-amber); font-variant-numeric:tabular-nums }
        .stat .stat-label{ margin:10px 0 0; color:var(--do-text-muted-on-dark); font-size:.9375rem;
          max-width:26ch }
        .prose{ max-width:72ch; margin-inline:auto }
        .prose h2{ font-size:var(--do-text-xl); margin:36px 0 14px }
        .prose h2:first-child{ margin-top:0 }
        .prose p{ color:var(--do-text-secondary); line-height:var(--do-leading-relaxed); margin-bottom:14px }
        .progress-note{ background:color-mix(in srgb, var(--do-amber) 10%, transparent);
          border:1px solid color-mix(in srgb, var(--do-amber) 30%, transparent);
          border-radius:var(--do-radius-2xl); padding:24px 28px; margin-top:36px }
        .progress-note h3{ font-size:var(--do-text-base); margin-bottom:8px }
        .progress-note p{ margin:0; color:var(--do-text-secondary); font-size:var(--do-text-sm) }
        .cta-strip{ text-align:center }
        .cta-strip h2{ max-width:none; margin-inline:auto }
        .cta-strip .lede{ margin:18px auto 32px; max-width:52ch }
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; justify-content:center }
      `}</style>
      <main>
        <JsonLd data={schema} />

        {/* 1. HERO + DO-ART-953 */}
        <section className="g-off">
          <div className="wrap hero-center">
            <span className="eyebrow">Client work · branded apparel &amp; decoration</span>
            <h1>The diagnostic came before the decision.</h1>
            <p className="lede">
              A teamwear and schoolwear business selling decorated and plain stock across a lot of suppliers, on an eCommerce platform that needed to show live stock accurately.
            </p>
          </div>
          <div className="wrap" style={{ marginTop: 'clamp(24px, 3vw, 48px)' }}>
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a953" data-od-id="hero-visual" data-motion data-no="DO-ART-953" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-953. A graded photograph of folded shirts in a warehouse, with a phone showing a batch pick: six orders, each line with its bin location, one line being picked now. Pinned tags: 100% of stock has a bin location; 952 products live on their website; 17 supplier feeds automated. The eCommerce platform stayed. Decoded Works does the parts it was never going to do.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/cat-workwear-d86bf7.webp" alt="" width="900" height="596"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="cap">
    <div class="k d17-mono">Case study 02 <span>· live since July</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>The platform stayed. Decoded Works does the rest.</h3>
    <p>Supplier feeds kept current, decorated and plain stock tracked separately, and the
      warehouse run from a phone.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-953 · Rev 01</span>
  </figcaption>
  <div class="phone2 m-rise" style="animation-delay:.2s" aria-hidden="true">
    <div class="scr">
      <div class="ph-bar"><small>WAREHOUSE · BATCH PICK</small>6 orders, one walk</div>
      <div class="pick pick--done"><b>Club polo, navy, M</b><span class="bin">B-02-1</span><span>× 12 · decorated</span></div>
      <div class="pick pick--done"><b>Training top, black, L</b><span class="bin">B-03-4</span><span>× 8 · plain</span></div>
      <div class="pick pick--now m-pop" style="animation-delay:1s"><b>Hoodie, red, S</b><span class="bin">C-01-2</span><span>× 6 · picking now</span></div>
      <div class="pick"><b>Shorts, navy, YL</b><span class="bin">C-04-1</span><span>× 14 · plain</span></div>
      <div class="scanbtn">Scan to confirm</div>
    </div>
  </div>
  <div class="sx-tag sx-tag--a t1 m-pop" style="animation-delay:.6s" aria-hidden="true"><small>Binned</small>100% of stock has a bin</div>
  <div class="sx-tag t2 m-pop" style="animation-delay:.8s" aria-hidden="true"><small>On their website</small>952 products live</div>
  <div class="sx-tag t3 m-pop" style="animation-delay:1s" aria-hidden="true"><small>Automated</small>17 supplier feeds</div>
</figure>` }} />
          </div>
        </section>

        {/* 2. MEASURE · DO-ART-954 */}
        <section className="g-tint">
          <div className="wrap">
            <span className="eyebrow">Measure · DO-ART-954</span>
            <h2>Before and after, paired line for line.</h2>
            <div className="hair"></div>
            <p className="lede" style={{ marginTop: 16 }}>Case study 02, real production numbers. 17 supplier feeds, automated.</p>

            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw sw-doc a954" data-od-id="plate-measure" data-motion data-no="DO-ART-954" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-954. Two documents over a graded photograph of an embroidery floor, paired line for line. Before, at discovery: supplier feeds handled by hand; decorated and plain stock hard to tell apart; stock with no reliable location; new products and variants added to the website by hand; hours of admin every week. After, from the live system in September 2026: 17 supplier feeds automated; 27,778 supplier products and 236,056 variants in the system; 1,846 decorated products built from those blanks; 952 products live on their website, published automatically; 100% of stock has a bin location. Admin time saved, 20 to 40 hours a week, is a projection from discovery and is being measured now.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/hero-workshop-38370e.webp" alt="" width="1100" height="688"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Case study 02 <span>· paired line for line</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Not projected. Not modelled. What&apos;s actually in the system.</h3>
    <p>Every line on the right is read off the live system. The one figure that isn&apos;t yet
      measured says so.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-954 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-b m-drop" style="animation-delay:.1s"><span class="tab">BEFORE</span>
      <span class="ref">Discovery · Clarity Audit</span><h4>How it ran</h4><p class="sub">manual, every week</p>
      <ul class="pair">
        <li><span>Supplier feeds handled by hand</span></li>
        <li><span>Decorated and plain stock hard to tell apart</span></li>
        <li><span>Stock with no reliable location</span></li>
        <li><span>New products and variants typed onto the website</span></li>
        <li><span>Hours of admin pulling people off the business</span></li>
      </ul></div>
    <div class="d17-doc doc-a m-drop" style="animation-delay:.4s"><span class="tab">AFTER</span>
      <span class="ref">Live system · September 2026</span><h4>How it runs now</h4><p class="sub">read off the system</p>
      <ul class="pair">
        <li><span><b>17</b> supplier feeds automated</span></li>
        <li><span><b>1,846</b> decorated products, separate from plain</span></li>
        <li><span><b>100%</b> of stock has a bin location</span></li>
        <li><span><b>952</b> products live on their website, published automatically</span></li>
        <li><span><b>27,778</b> supplier products, <b>236,056</b> variants</span></li>
      </ul>
      <div class="proj"><b>Projected, not yet measured</b>20 to 40 hours a week of admin time, projected at discovery. Being measured now it&apos;s live.</div></div>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* 3. THE NUMBERS */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow eyebrow--amber">The numbers</span>
            <h2 style={{ marginTop: 14 }}>Not projected. Not modelled. What&apos;s actually in the system.</h2>

            <div className="grid grid--3" style={{ marginTop: 40 }}>
              <div className="stat">
                <p className="stat-num num">17</p>
                <p className="stat-label">supplier feeds automated</p>
              </div>
              <div className="stat">
                <p className="stat-num num">27,778</p>
                <p className="stat-label">supplier products and 236,056 variants in the system</p>
              </div>
              <div className="stat">
                <p className="stat-num num">1,846</p>
                <p className="stat-label">decorated products built from those blanks</p>
              </div>
            </div>
            <div className="grid grid--3" style={{ marginTop: 32 }}>
              <div className="stat">
                <p className="stat-num num">952</p>
                <p className="stat-label">products live on their website through Decoded Works</p>
              </div>
              <div className="stat">
                <p className="stat-num num">100%</p>
                <p className="stat-label">of stock has a bin location</p>
              </div>
              <div className="stat">
                <p className="stat-num num">20 to 40</p>
                <p className="stat-label">hours a week of admin time, projected at discovery (being measured now it&apos;s live)</p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: 36, color: 'var(--do-text-muted-on-dark)' }}>
              Figures from the live system, September 2026. Hours saving is a projection, not yet measured.
            </p>
          </div>
        </section>

        {/* 4. THE STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>The situation before</h2>
            <p>
              Stock and supplier feeds took a lot of manual admin, pulling people away from running the business.
            </p>

            <h2>What was done</h2>
            <p>
              The eCommerce platform stayed, because it was the right tool for selling. Works was built alongside it to do the parts the platform was never going to do: supplier feeds kept current, decorated and plain stock tracked separately, warehouse work (bins, barcode scanning, batch picking on a phone), and new products and variants published to the website automatically.
            </p>
            <p>
              The website integration has been running in production since July. Supplier automation and warehouse tooling are still growing. Next up is measuring the real hours saved to replace the projection.
            </p>

            <div className="progress-note">
              <h3>What&apos;s still in progress</h3>
              <p>
                Works keeps expanding. Warehouse floor tooling and further supplier automation are active, ongoing work, not a finished job being presented as complete.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CTA STRIP */}
        <section className="g-off cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>See how Works does this.</h2>
            <p className="lede">
              This is a Systems (rung 2) example. To find out what your own operation needs, book a Clarity Audit.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/apps/works" className="btn btn-ghost btn-arrow">
                See Works
              </Link>
            </div>
          </div>
        </section>
      </main>
      <D17Motion />
    </>
  );
}
