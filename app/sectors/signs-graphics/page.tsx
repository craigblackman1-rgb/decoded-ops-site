import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Sign Shop Management Software | Decoded Ops',
  description: 'Sign shop management software for job tracking from site survey to installation, quoting complex jobs without a margin leak, fitting how a sign shop runs.',
  alternates: { canonical: '/sectors/signs-graphics' },
  openGraph: {
    title: 'Sign Shop Management Software | Decoded Ops',
    description: 'Sign shop management software for job tracking from site survey to installation, quoting complex jobs without a margin leak, fitting how a sign shop runs.',
    url: 'https://decodedops.co.uk/sectors/signs-graphics',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Shop Management Software | Decoded Ops',
    description: 'Sign shop management software for job tracking from site survey to installation, quoting complex jobs without a margin leak, fitting how a sign shop runs.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/signs-graphics#webpage',
      url: 'https://decodedops.co.uk/sectors/signs-graphics',
      name: 'Software & Systems for Sign Makers: Decoded Ops',
      description: 'Job tracking from site survey to installation, quoting complex jobs without the margin leak, and software that fits how a sign shop actually runs.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the workflow differ from generic ERP?',
          acceptedAnswer: { '@type': 'Answer', text: 'Signs and graphics jobs do not fit generic ERP systems. The job starts with a site survey, not an order. Most systems cannot track a job from survey, through design, production, and installation, to sign-off as one connected flow.' },
        },
        {
          '@type': 'Question',
          name: 'How do you cost jobs with so much variation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every job is different in substrate, finish, size, fixing method, and installation. Costing by hand means margin leaks on every complex job. The work reviews how you cost jobs and where that margin goes.' },
        },
        {
          '@type': 'Question',
          name: 'Can you help with installation scheduling?',
          acceptedAnswer: { '@type': 'Answer', text: 'Scheduling installation teams, site access, contractors, and material deliveries is a logistics problem most job systems handle poorly. The audit looks at how installation scheduling connects to production.' },
        },
      ],
    },
  ],
};

const tagline = 'Signs and graphics businesses run on ||tight margins, and every job starts with a site survey.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Survey-to-installation workflow', body: "The job doesn't start when the order is placed. It starts with a site survey. Most systems can't track a job from survey, through design, production, and installation, to sign-off as one connected flow." },
  { title: 'Substrate and finish complexity', body: "Substrate, finish, size, fixing method, installation. Every job is different, which makes costing difficult. Cost it by hand and margin leaks on every complex job." },
  { title: 'Installation scheduling', body: "Scheduling installation teams, site access, contractors, and material deliveries is a logistics problem most job systems handle poorly." },
  { title: 'Artwork and proof management', body: "Artwork has to be approved before production. Run that approval outside your production system and you get delay, rework, and missed deadlines." },
];

const whatIdo = [
  'Map your full workflow, from enquiry to survey, design, production, installation, and sign-off',
  'Find where jobs fall through system gaps into manual processes',
  'Review how you cost jobs, and where margin leaks on complex work',
  'Look at installation scheduling and how it connects to production',
  'Audit your artwork and proof approval process',
  'Recommend systems that fit the way a signs and graphics business actually runs',
];

const route = sectorRouting['signs-graphics'];

export default function SignsGraphicsPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Signs & Graphics', url: 'https://decodedops.co.uk/sectors/signs-graphics' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · signs & graphics</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Signs and graphics jobs don&apos;t fit generic ERP systems. So most businesses run on spreadsheets, whiteboards, and information carried in people&apos;s heads.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a933" data-od-id="hero-evidence" data-motion data-no="DO-ART-933" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-933. A graded photograph of a blank sign panel on a brick wall, measured with amber dimension lines, and a site survey sheet laid over it: size, substrate, fixing, access and photos, recorded before anything is quoted or made. The job starts at the site survey, not the order.">
  <div class="d17-ph"><img src="/images/d17/sectors/cat-signage-982ce6.webp" alt="" width="900" height="701"></div>
  <svg class="dims" viewBox="0 0 770 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect x="28" y="170" width="641" height="273" fill="none" stroke="#FFB703" stroke-width="3" stroke-dasharray="10 8"/>
    <g class="m-draw-g">
      <path class="m-draw" pathLength="1" d="M28 128 H669 M28 114 V142 M669 114 V142" stroke="#FFB703" stroke-width="3" fill="none"/>
    </g>
    <rect x="293" y="106" width="110" height="44" rx="6" fill="#023047"/>
    <text x="348" y="137" text-anchor="middle" fill="#FFB703" style="font-family:var(--do-font-mono);font-size:24px;font-weight:700">2400</text>
  </svg>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Signs &amp; graphics</span><span>Site visit · before the quote</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-s m-drop" style="animation-delay:.6s">
      <span class="tab">SITE</span>
      <span class="ref">SS-0112 · Site survey</span>
      <h4>Shopfront fascia</h4>
      <p class="sub">surveyed · then designed, made, fitted</p>
      <dl class="spec">
        <dt>Size</dt><dd>2400 × 1000 mm</dd>
        <dt>Substrate</dt><dd>ACM, 3 mm</dd>
        <dt>Fixing</dt><dd>Stand-off, masonry</dd>
        <dt>Access</dt><dd>Tower, pavement permit</dd>
        <dt>Install</dt><dd class="hit">Booked from the survey</dd>
      </dl>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The job starts at the site survey, <em>not the order.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-933 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 INLINE ARTWORK · DO-ART-934 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a934" data-od-id="plate-architecture" data-motion data-no="DO-ART-934" data-rev="01" data-tx="screen"
        aria-label="Product screen DO-ART-934. A production board for a signs and graphics business with six columns: survey, design, proof, production, install and signed off. Each job card carries its survey, substrate and install details with it as it moves, and a fitted fascia job lands in signed off.">
  <div class="d17-ph"><img src="/images/d17/sectors/cat-signage-58e48c.webp" alt="" width="1100" height="733"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="head">
    <div class="sw-cap">
      <div class="k d17-mono">Job board <span>· survey to sign-off</span></div>
      <h3>One job, one record, all the way to the wall.</h3>
    </div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-934 · Rev 01</span>
  </div>
  <div class="win" aria-hidden="true" style="--u:calc(100cqw / 1152)">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Production ›</span> Job board</span><span class="pill">THIS WEEK</span></div>
    <div class="board">
      <div class="col"><div class="ch">Survey<i>2</i></div>
        <div class="card-j m-rise" style="animation-delay:.1s"><span class="r">J-2217</span><b>Window graphics, shopfront</b><div class="m"><span>4 photos</span><span>measured</span></div></div>
        <div class="card-j m-rise" style="animation-delay:.15s"><span class="r">J-2219</span><b>Wayfinding, office floor</b><div class="m"><span>site visit Thu</span></div></div></div>
      <div class="col"><div class="ch">Design<i>2</i></div>
        <div class="card-j m-rise" style="animation-delay:.25s"><span class="r">J-2211</span><b>Vehicle livery, van</b><div class="m"><span>template</span><span>brand kit</span></div></div>
        <div class="card-j m-rise" style="animation-delay:.3s"><span class="r">J-2214</span><b>Hoarding, site boundary</b><div class="m"><span>survey in</span></div></div></div>
      <div class="col"><div class="ch">Proof<i>1</i></div>
        <div class="card-j m-rise" style="animation-delay:.4s"><span class="r">J-2208</span><b>Illuminated letters</b><div class="m"><span>proof v2 sent</span></div></div></div>
      <div class="col"><div class="ch">Production<i>2</i></div>
        <div class="card-j m-rise" style="animation-delay:.5s"><span class="r">J-2203</span><b>Directional signs, car park</b><div class="m"><span>ACM 3mm</span><span>print + laminate</span></div></div>
        <div class="card-j m-rise" style="animation-delay:.55s"><span class="r">J-2206</span><b>Wall graphic, reception</b><div class="m"><span>vinyl</span></div></div></div>
      <div class="col"><div class="ch">Install<i>1</i></div>
        <div class="card-j m-rise" style="animation-delay:.65s"><span class="r">J-2199</span><b>Pub fascia, re-brand</b><div class="m"><span>tower booked</span><span>2 fitters</span></div></div></div>
      <div class="col"><div class="ch">Signed off<i>1</i></div>
        <div class="card-j card-j--a m-rise" style="animation-delay:1s"><img class="th" src="/images/d17/sectors/cat-signage-2bf918.webp" alt="" width="320" height="165"><span class="r">J-2194</span><b>Shopfront fascia</b><div class="m"><span>fitted</span><span>photo signed</span><span>invoiced</span></div></div></div>
    </div>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Common challenges</span>
          <h2>Where the problems tend to live</h2>
          <div className="hair" />
          <p className="lede">In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {challenges.map((c, i) => (
              <article key={i} className="card">
                <span className="kicker">{String(i + 1).padStart(2, '0')} &middot; {c.title}</span>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">How I help</span>
          <h2>What the work actually looks like</h2>
          <div className="hair" />
          <p className="lede">A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
          <div className="grid grid--2" style={{ marginTop: '32px' }}>
            {whatIdo.map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-sky-blue)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      {(route.targetService || (route.relatedProblems && route.relatedProblems.length > 0) || (route.relatedResources && route.relatedResources.length > 0)) && (
        <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-tint">
          <div className="wrap">
            <div className="grid grid--3">
              {route.targetService && (
                <div className="card" style={{ background: 'var(--do-surface-dark)', color: 'var(--do-text-on-dark)' }}>
                  <span className="kicker" style={{ color: 'var(--do-amber)' }}>The work in this sector</span>
                  <h3 style={{ fontSize: 'var(--do-text-xl)', margin: '8px 0' }}>{route.targetService.label}</h3>
                  <p style={{ marginBottom: '20px' }}>{route.targetService.anchor}</p>
                  <Link href={route.targetService.href} style={{ color: 'var(--do-amber)', fontWeight: 'var(--do-weight-semibold)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    See how it works <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              )}
              {route.relatedProblems && route.relatedProblems.length > 0 && (
                <div className="card">
                  <span className="kicker">Most common in signs & graphics</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>The problems I see most often</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedProblems.map((p) => (
                      <li key={p.href} style={{ marginBottom: '10px' }}>
                        <Link href={p.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-text-cerulean)' }} aria-hidden="true" />
                          <span>{p.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {route.relatedResources && route.relatedResources.length > 0 && (
                <div className="card">
                  <span className="kicker">Useful next steps</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>Resources</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedResources.map((r) => (
                      <li key={r.href} style={{ marginBottom: '10px' }}>
                        <Link href={r.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-text-cerulean)' }} aria-hidden="true" />
                          <span>{r.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CASE STUDY */}
      <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-off">
        <div className="wrap">
          <span className="eyebrow">Case study</span>
          <h2>Custom tooling for a service business</h2>
          <div className="hair" />
          <p className="lede">Full site rebuild and a custom AI-assisted tool: the kind of bespoke build that signs and graphics businesses need when off-the-shelf doesn&apos;t fit.</p>
          <div className="btn-row" style={{ marginTop: '24px' }}>
            <Link className="btn btn--outline" href="/case-studies/eternal-fitness">Read the case study <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="g-off">
        <div className={`wrap ${styles.centred}`}>
          <h2>Book a free discovery call.</h2>
          <div className="hair" />
          <p className="lede">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <D17Motion />
    </>
  );
}
