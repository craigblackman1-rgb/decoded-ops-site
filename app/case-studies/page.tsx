import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Client Work: Decoded Ops',
  description: 'Live engagements. What I\'m actually building right now for clients in decorated goods, workwear, heating spares, and fitness. Real work, not hypotheticals.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    type: 'website',
    title: 'Client Work: Decoded Ops',
    description: 'Live engagements. What I\'m actually building right now, not hypotheticals.',
    url: 'https://decodedops.co.uk/case-studies',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Work: Decoded Ops',
    description: 'Live engagements. What I\'m actually building right now, not hypotheticals.',
    images: [OG_IMAGE_PATH],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Client Work', url: 'https://decodedops.co.uk/case-studies' },
      ]} />

      {/* ─────────────── HERO + DO-ART-949 ─────────────── */}
      <section className="g-off" data-od-id="hero">
        <div className="wrap hero-center">
          <span className="eyebrow">Client work</span>
          <h1>What I&apos;m actually building right now.</h1>
          <p className="lede">Live engagements across four sectors. Same approach every time: fix the
            process and the data before you automate anything.</p>
        </div>
        <div className="wrap hero-art">
          <figure className="d17 sw sw-doc a949" data-od-id="engagement-summary" data-motion data-no="DO-ART-949" data-rev="01" data-tx="photo"
                  aria-label="Artwork DO-ART-949. Four engagement files laid over a graded workbench photograph. Case study 01, heating spares and eCommerce, live engagement: 317,812 products brought in, 154,518 matched automatically, 40 active suppliers, stamped measured. Case study 02, branded apparel and decoration, in Deliver: 17 supplier feeds automated, 952 products live on their website, 100% of stock binned, stamped measured. Case study 03, workwear B2B distributor, in Deliver: B2B ordering portal and ERP evaluation, architecture and vendor brief, stamped too new to measure. Eternal Fitness, health and fitness, in build: full site rebuild and an AI-assisted training plan tool, stamped too new to measure. Four engagements, two with measurable outcomes.">
            <div className="d17-ph"><img src="/images/d17/apps-cases/gen-bench-flatlay-v2-6f5bfe.webp" alt="" width="1024" height="1024" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <figcaption className="sw-cap">
              <div className="k d17-mono">Engagement summary <span>· September 2026</span></div>
              <div className="bar" aria-hidden="true"></div>
              <h3>Four engagements, two with measurable outcomes.</h3>
              <p>Live client work across four sectors. Two can be measured in numbers today. The other
                two are too new, and they say so rather than guessing.</p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-949 · Rev 01</span>
            </figcaption>
            <div className="stage" aria-hidden="true">
              <div className="d17-doc f1 m-drop" style={{ animationDelay: '.1s' }}><span className="tab">01</span>
                <span className="ref">Case study 01 · live engagement</span><h4>Heating spares &amp; eCommerce</h4>
                <ul className="figs"><li><b>317,812</b>products brought in</li><li><b>154,518</b>matched automatically</li><li><b>40</b>active suppliers</li></ul>
                <span className="stamp2 stamp2--a m-pop" style={{ animationDelay: '1.1s' }}>Measured · live system</span></div>
              <div className="d17-doc f2 m-drop" style={{ animationDelay: '.3s' }}><span className="tab">02</span>
                <span className="ref">Case study 02 · in Deliver</span><h4>Branded apparel &amp; decoration</h4>
                <ul className="figs"><li><b>17</b>supplier feeds automated</li><li><b>952</b>products live on their website</li><li><b>100%</b>of stock binned</li></ul>
                <span className="stamp2 stamp2--a m-pop" style={{ animationDelay: '1.3s' }}>Measured · live system</span></div>
              <div className="d17-doc f3 m-drop" style={{ animationDelay: '.5s' }}><span className="tab">03</span>
                <span className="ref">Case study 03 · in Deliver</span><h4>Workwear B2B distributor</h4>
                <ul className="figs figs--none"><li><b>Scope</b>B2B ordering portal and ERP evaluation</li><li><b>Role</b>architecture and vendor brief</li></ul>
                <span className="stamp2">Too new to measure</span></div>
              <div className="d17-doc f4 m-drop" style={{ animationDelay: '.7s' }}><span className="tab">EF</span>
                <span className="ref">Eternal Fitness · in build</span><h4>Health &amp; fitness</h4>
                <ul className="figs figs--none"><li><b>Scope</b>full site rebuild</li><li><b>Tool</b>AI-assisted training plan tool</li></ul>
                <span className="stamp2">Too new to measure</span></div>
            </div>
          </figure>
        </div>
      </section>

      {/* ─────────────── CASE CARDS · DO-ART-950 ─────────────── */}
      <section className="g-white" data-od-id="case-grid">
        <div className="wrap">
          <div className="grid grid--2">

            <article className="card case-card" data-od-id="case-hanicks">
              <figure className="d17 chd chd--h" data-no="DO-ART-950" data-rev="01" data-tx="photo"
                      aria-label="Case index head DO-ART-950, Hanicks cut. A product screen from the live catalogue: 317,812 products brought in, 154,518 matched automatically.">
                <div className="d17-dots" aria-hidden="true"></div>
                <div className="k d17-mono" aria-hidden="true">Case study 01 <span>· live catalogue</span></div>
                <div className="mini" aria-hidden="true"><div className="c"><div className="l">Brought in</div><div className="n">317,812</div></div>
                  <div className="c c--a"><div className="l">Matched auto</div><div className="n">154,518</div></div><div className="tr"><i></i></div></div>
                <span className="mk" aria-hidden="true">decodedops.co.uk · DO-ART-950 · Rev 01</span>
              </figure>
              <span className="case-status">Live engagement</span>
              <p className="case-sector">Heating spares &amp; eCommerce</p>
              <h3>Hanicks</h3>
              <p className="desc">Hanicks sells heating spares. It isn&apos;t decorated goods, but it&apos;s the same
                problem underneath: a big catalogue arriving from lots of suppliers in different
                formats, which has to be clean and current on every channel it sells through.</p>
              <p className="figline">317,812 products brought in · 154,518 matched automatically · 40 active suppliers</p>
              <Link className="readmore" href="/case-studies/case-study-01">Read more</Link>
            </article>

            <article className="card case-card" data-od-id="case-02">
              <figure className="d17 chd chd--t" data-no="DO-ART-950" data-rev="01" data-tx="photo"
                      aria-label="Case index head DO-ART-950, case study 02 cut. A graded photograph of a folded polo with a pinned tag: 17 supplier feeds automated.">
                <div className="d17-ph"><img src="/images/d17/apps-cases/prod-polo-34c129.webp" alt="" width="700" height="311" /></div>
                <div className="d17-scan" aria-hidden="true"></div>
                <div className="k d17-mono" aria-hidden="true">Case study 02 <span>· in Deliver</span></div>
                <div className="sx-tag sx-tag--a" aria-hidden="true"><small>Automated</small><b>17 supplier feeds</b></div>
                <span className="mk" aria-hidden="true">decodedops.co.uk · DO-ART-950 · Rev 01</span>
              </figure>
              <span className="case-status">In Deliver</span>
              <p className="case-sector">Branded apparel &amp; decoration</p>
              <h3>The diagnostic came before the decision.</h3>
              <p className="desc">A teamwear and schoolwear business selling decorated and plain stock across
                a lot of suppliers, on an eCommerce platform that needed to show live stock accurately.</p>
              <p className="figline">17 supplier feeds automated · 952 products live on their website · 100% of stock binned</p>
              <Link className="readmore" href="/case-studies/case-study-02">Read more</Link>
            </article>

            <article className="card case-card" data-od-id="case-03">
              <figure className="d17 chd chd--c" data-no="DO-ART-950" data-rev="01" data-tx="photo"
                      aria-label="Case index head DO-ART-950, case study 03 cut. A graded photograph of a hi-vis vest with a pinned tag: B2B ordering portal, architect and advisor.">
                <div className="d17-ph"><img src="/images/d17/apps-cases/prod-hivis-47c1d3.webp" alt="" width="700" height="311" /></div>
                <div className="d17-scan" aria-hidden="true"></div>
                <div className="k d17-mono" aria-hidden="true">Case study 03 <span>· in Deliver</span></div>
                <div className="sx-tag" aria-hidden="true"><small>Architect and advisor</small><b>B2B ordering portal</b></div>
                <span className="mk" aria-hidden="true">decodedops.co.uk · DO-ART-950 · Rev 01</span>
              </figure>
              <span className="case-status">In Deliver</span>
              <p className="case-sector">Workwear B2B distributor</p>
              <h3>Case study 03</h3>
              <p className="desc">A Clarity Audit into Deliver Consultancy: vendor requirements, procurement
                and integration architecture for a B2B ordering portal, with a partner team building.</p>
              <p className="figline">B2B ordering portal and ERP evaluation, architecture and vendor brief</p>
              <Link className="readmore" href="/case-studies/case-study-03">Read more</Link>
            </article>

            <article className="card case-card" data-od-id="case-eternal-fitness">
              <figure className="d17 chd chd--e" data-no="DO-ART-950" data-rev="01" data-tx="photo"
                      aria-label="Case index head DO-ART-950, Eternal Fitness cut. A draft training plan document marked awaiting sign-off by the Level 4 PT.">
                <div className="d17-dots" aria-hidden="true"></div>
                <div className="k d17-mono" aria-hidden="true">Eternal Fitness <span>· in build</span></div>
                <div className="d17-doc" aria-hidden="true"><span className="tab">DRAFT</span><span className="ref">Plan · week 1 · session A</span><h4>Draft session plan</h4>
                  <ol><li><b>01</b><span>Warm-up, mobility</span><i></i></li><li><b>02</b><span>Seated row, light</span><i></i></li></ol>
                  <div className="approved">Awaiting sign-off · Level 4 PT</div></div>
                <span className="mk" aria-hidden="true">decodedops.co.uk · DO-ART-950 · Rev 01</span>
              </figure>
              <span className="case-status">In build</span>
              <p className="case-sector">Health &amp; fitness (clinical populations)</p>
              <h3>Eternal Fitness</h3>
              <p className="desc">I&apos;m technical lead on a full site rebuild and an AI-assisted training plan
                tool for a 1-to-1 personal training studio.</p>
              <p className="figline">Full site rebuild and an AI-assisted training plan tool</p>
              <Link className="readmore" href="/case-studies/eternal-fitness">Read more</Link>
            </article>

          </div>
        </div>
      </section>

      {/* ─────────────── CTA STRIP ─────────────── */}
      <section className="g-navy cta-strip" data-od-id="cta-strip">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <h2>Want to talk about your operation?</h2>
          <p className="lede">Every engagement above started the same way: a Clarity Audit to find out what
            was actually going on before anything was built.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
