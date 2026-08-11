import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import './homepage.css';

export const metadata: Metadata = {
  title: 'Decoded Ops: operations and technology consultancy for decorated goods',
  description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Decoded Ops: operations and technology consultancy for decorated goods',
    description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
    url: 'https://decodedops.co.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Ops: operations and technology consultancy for decorated goods',
    description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses.',
  },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/#webpage',
      url: 'https://decodedops.co.uk',
      name: 'Decoded Ops | operations and technology consultancy for decorated goods',
      description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Clarity Audit', url: 'https://decodedops.co.uk/clarity' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Deliver', url: 'https://decodedops.co.uk/deliver' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Transform', url: 'https://decodedops.co.uk/transform' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Retained', url: 'https://decodedops.co.uk/retained' } },
      ],
    },
  ],
};

/* Verified figures only, from decoded-ops/references/stats.md "Status Quo Costs". */
const statusQuo = [
  { value: '3–6 hrs', per: '/week', label: 'Lost to manual re-keying between systems that don’t talk to each other' },
  { value: '3–5%', per: '', label: 'Of inbound stock at risk where inventory is disconnected' },
  { value: '2–4 hrs', per: '/week', label: 'Spent on manual invoicing and reconciliation' },
  { value: '1–3%', per: '', label: 'Of orders affected by picking and despatch errors' },
];

const services = [
  {
    href: '/clarity',
    kicker: 'On-site audit and written plan',
    name: 'Clarity Audit',
    flag: 'Start here',
    desc: 'A full day on site, six areas followed from start to finish, then a written assessment and roadmap inside five working days.',
  },
  {
    href: '/deliver',
    kicker: 'Delivery and vendor management',
    name: 'Deliver',
    flag: null,
    desc: 'Independent vendor brief, procurement and project oversight. One point of contact, and someone technical sitting on your side of the table.',
  },
  {
    href: '/transform',
    kicker: 'Multi-workstream programme',
    name: 'Transform',
    flag: null,
    desc: 'ERP, eCommerce and process redesign run together as one programme. Process led and people first, and scoped only once an audit has shown what it needs to cover.',
  },
  {
    href: '/retained',
    kicker: 'Fractional CTO',
    name: 'Retained',
    flag: null,
    desc: 'Monthly strategic and operational leadership. Roadmap ownership, vendor management, and a direct line to me.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
      ]} />

      <a className="skip" href="#content">Skip to content</a>

      <main id="content">

        {/* ══════════ 1 · HERO ══════════ */}
        <section className="g-off" data-od-id="hero">
          <div className="wrap hero">
            <div>
              <span className="eyebrow">Operations &amp; technology consultancy</span>
              <h1>The penny drop moment.</h1>
              <div className="hair"></div>
              <div className="hero-body">
                <p>You know your business is losing money somewhere. You can feel the friction. The
                  workarounds. The systems that don&rsquo;t talk to each other. 25 years inside print,
                  embroidery, and decoration businesses says the same patterns repeat, and they&rsquo;re
                  fixable.</p>
                <p>Independent technology and operations consultancy for UK print, embroidery, workwear,
                  and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a
                  written plan. Plain English. No jargon. No vendor agenda.</p>
              </div>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/clarity">See how a Clarity Audit works</Link>
                <Link className="btn btn--outline" href="/contact">Book a free 60-min call</Link>
              </div>
            </div>

            <figure className="ask" data-od-id="hero-question">
              <blockquote>If I spent a day in your business looking at your systems, your processes,
                and your technology, how confident are you that I wouldn&rsquo;t find anything costing you
                money you don&rsquo;t know about?</blockquote>
              <cite>Craig Blackman &middot; Decoded Ops</cite>
            </figure>
          </div>
        </section>

        {/* ══════════ 2 · THE COST OF STANDING STILL ══════════ */}
        <section className="g-navy" data-od-id="cost">
          <div className="wrap">
            <span className="eyebrow">The cost of standing still</span>
            <h2>What disconnected systems actually cost you.</h2>
            <div className="hair"></div>
            <p className="lede">These are the numbers I see in businesses like yours most weeks. Not
              hypothetical, and not worst case. Just the quiet cost of systems that don&rsquo;t talk to each
              other.</p>

            <div className="grid grid--4" style={{ marginTop: 44 }}>
              {statusQuo.map(item => (
                <div className="stat" key={item.label}>
                  <p className="stat-num num">{item.value}{item.per && <span style={{ fontSize: '0.5em', opacity: 0.6 }}>{item.per}</span>}</p>
                  <p className="stat-label">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="stat-caption">More on each of these: <Link href="/problems/systems-dont-talk">what
              it looks like when your systems don&rsquo;t talk</Link>, <Link href="/problems/ecommerce-not-connected">why
              an eCommerce disconnect costs more than you think</Link>, and <Link href="/problems/erp-implementation-failure">how
              ERP implementations go wrong</Link>.</p>
          </div>
        </section>

        {/* ══════════ 3 · WHAT I ACTUALLY DO ══════════ */}
        <section className="g-white" data-od-id="services">
          <div className="wrap">
            <span className="eyebrow">How I help</span>
            <h2>A day on site, a written plan, then as much or as little as you need.</h2>
            <div className="hair"></div>
            <p className="lede">Four services. Each one stands on its own, and each one is a natural next
              step from the one before it. Almost everyone starts with a Clarity Audit, because until
              somebody has followed your processes from start to finish, everything after that is
              guesswork.</p>

            <div className="grid grid--4" style={{ marginTop: 40 }}>
              {services.map(s => (
                <Link className="card" href={s.href} key={s.href}>
                  <span className="kicker">
                    {s.kicker}{s.flag && <span className="flag">{s.flag}</span>}
                  </span>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </Link>
              ))}
            </div>

            <div className="notice" style={{ marginTop: 36 }}>
              <p className="notice-tag">The 3&times; Clarity Guarantee</p>
              <h3>Three times the fee, or you don&rsquo;t pay it.</h3>
              <p>If the report doesn&rsquo;t identify at least three times the fee in recoverable cost or lost
                revenue, it&rsquo;s refunded in full. No conditions. No questions.</p>
            </div>
          </div>
        </section>

        {/* ══════════ 4 · WHAT OWNERS NOTICE ══════════ */}
        <section className="g-tint" data-od-id="approach">
          <div className="wrap">
            <span className="eyebrow">Why owners keep me in the room</span>
            <h2>Three things you notice in the first hour on site.</h2>
            <div className="hair"></div>

            <div className="grid grid--3">
              <article className="card">
                <span className="kicker">01 &middot; Translation</span>
                <h3>I say it back to you clearly</h3>
                <p>I take what you&rsquo;re trying to convey, often half-formed, vague, hard to articulate, and
                  reflect it back as a solution or a clear path forward. Business owners feel understood
                  in a way they often haven&rsquo;t been before.</p>
              </article>
              <article className="card">
                <span className="kicker">02 &middot; Problem solving</span>
                <h3>When the system &ldquo;can&rsquo;t do that&rdquo;</h3>
                <p>That&rsquo;s usually where the conversation starts rather than where it stops. I find a
                  different way, connecting things not designed to connect, reframing the problem so the
                  tool you already own handles it differently.</p>
              </article>
              <article className="card">
                <span className="kicker">03 &middot; Facilitation</span>
                <h3>People adopt what they helped build</h3>
                <p>In a mixed group, directors, warehouse staff, office teams, I ask the question that
                  makes everyone stop. They adopt the result because they built it. That&rsquo;s how change
                  actually sticks.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════ 5 · MEASURE · DO-ART-202 ══════════ */}
        <section className="g-navy" data-od-id="measure">
          <div className="wrap">
            <span className="eyebrow">Measure &middot; DO-ART-202</span>
            <h2>Nobody retypes a supplier spreadsheet.</h2>
            <div className="hair"></div>
            <p className="lede">Hanicks, named with permission. One import pipeline, run to a schedule,
              doing a job that used to be done by hand every time a supplier changed a range. Not
              projected and not modelled. This is what actually happened.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-measure">
                <Plate tone="dark" p="ms" title="Supplier catalogue: raw to live"
                       sub="Hanicks · one import pipeline, first automated run"
                       no="DO-ART-202" rev="01" cls="DECODED OPS · ISSUED">

                  {/* track guides */}
                  <g className="sk-fade sk-s1" opacity=".5">
                    <line x1="430" y1="212" x2="430" y2="560" className="p-scyan" strokeWidth=".8"
                          strokeOpacity=".35"/>
                    <line x1="1510" y1="212" x2="1510" y2="560" className="p-scyan" strokeWidth=".8"
                          strokeOpacity=".2"/>
                  </g>

                  {/* 1 · rows imported */}
                  <g className="sk-fade sk-s2">
                    <text x="60" y="252" className="p-mono" fontSize="17" letterSpacing="1.6"
                          opacity=".55">ROWS IMPORTED</text>
                    <text x="60" y="282" className="p-mono" fontSize="16" opacity=".4">supplier feeds</text>
                    <rect x="430" y="228" width="1080" height="62" rx="6" fill="url(#ms-bar)"
                          className="p-node" strokeWidth="1"/>
                    <text x="458" y="270" className="p-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">164,752</text>
                  </g>

                  {/* 2 · matched automatically */}
                  <g className="sk-fade sk-s3">
                    <text x="60" y="372" className="p-mono" fontSize="17" letterSpacing="1.6"
                          opacity=".55">MATCHED AUTOMATICALLY</text>
                    <text x="60" y="402" className="p-mono" fontSize="16" opacity=".4">first run, no
                      hand-matching</text>
                    <rect x="430" y="348" width="833" height="62" rx="6" fill="url(#ms-bar)"
                          className="p-node" strokeWidth="1"/>
                    <text x="458" y="390" className="p-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">127,135</text>
                    <text x="1291" y="390" className="p-accent-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">77%</text>
                  </g>

                  {/* 3 · live */}
                  <g className="sk-fade sk-s4">
                    <text x="60" y="492" className="p-mono" fontSize="17" letterSpacing="1.6"
                          opacity=".55">PUSHED LIVE</text>
                    <text x="60" y="522" className="p-mono" fontSize="16" opacity=".4">to Khaos
                      Control</text>
                    <rect x="430" y="468" width="73" height="62" rx="6" fill="url(#ms-amber-b)"
                          className="p-node-a" strokeWidth="1.4"/>
                    <text x="527" y="510" className="p-accent-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">11,064</text>
                    <text x="700" y="510" className="p-mono" fontSize="17" opacity=".5">in range, priced
                      and published, within weeks</text>
                  </g>

                  {/* the lever */}
                  <g className="sk-fade sk-s5">
                    <line x1="60" y1="596" x2="1540" y2="596" className="p-scyan" strokeWidth=".6"
                          strokeOpacity=".22"/>
                    <rect x="60" y="624" width="4" height="18" rx="1" className="p-amber"/>
                    <text x="80" y="640" className="p-mono" fontSize="16" letterSpacing="2.2"
                          opacity=".55">THE LEVER</text>
                    <text x="60" y="690" className="p-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="600" fontSize="26">One import pipeline, run to a schedule.
                      Nobody retypes a supplier spreadsheet.</text>
                    <text x="60" y="726" className="p-mono" fontSize="17" opacity=".5">Before: matched by
                      hand, no repeatable run, no way to tell what had changed since last time.</text>
                  </g>
                </Plate>
              </div>
            </div>

            <p className="lede" style={{ marginTop: 28 }}>Same approach at TackleBag: nine supplier feeds
              automated, a projected saving of 20 to 40 hours a week.</p>
          </div>
        </section>

        {/* ══════════ 6 · WHERE THE SOFTWARE CAME FROM ══════════
            Was four sections (why-software / ladder / evidence, ~215 lines):
            the ladder plate now lives only on /how-i-build (DO-ART-302), the
            evidence plate only on /apps/data-app. Collapsed to one section
            plus the Eternal Fitness depth exhibit, per Positioning v2.0 §2
            and §8: software is evidence of depth, not a homepage product
            catalogue, and the ladder is an assessment discipline that
            belongs in the how-i-build conversation, not the front door. */}
        <section className="g-white" data-od-id="why-software">
          <div className="wrap">
            <span className="eyebrow">Where the software came from</span>
            <h2>I didn&rsquo;t set out to build software.</h2>
            <div className="hair"></div>

            <div className="grid grid--2" style={{ marginTop: 40, alignItems: 'start' }}>
              <div>
                <p className="lede">I kept meeting the same gap in businesses I was already fixing. The
                  platform was usually right. It just would not do one particular job, and nothing on the
                  market closed that gap at a price a business this size could justify. So I built the
                  thing that did.</p>
                <p className="lede">Because it was built by someone who does the process work, the Process
                  Register and the SOPs are built in rather than bolted on. That is the Decoded Method
                  running inside the software instead of sitting in a folder nobody opens.</p>
              </div>
              <div className="panel">
                <h3>Which is why buying always gets tested first.</h3>
                <p>If something on the market fits, that is what goes on the table, named and priced, with
                  nothing in it for me either way. Building only earns its place once buying has been
                  ruled out in writing.</p>
                <p><Link href="/how-i-build">How I decide what to build</Link></p>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 28 }}>
              <p className="notice-tag">Disclosure</p>
              <h3>What that looks like at full stretch</h3>
              <p>Eternal Fitness is my wife&rsquo;s business, so it isn&rsquo;t an arm&rsquo;s length client
                reference and I won&rsquo;t pretend otherwise. It&rsquo;s here because it is the clearest
                example of how far this goes, and because there was nowhere to hide if it didn&rsquo;t
                work.</p>
              <p>Multiple systems consolidated into one operations hub. Every procedure and process
                documented. The mundane but important work automated. A business that can scale online
                and offline without adding admin to do it.</p>
              <p><Link href="/apps">See what&rsquo;s already running</Link></p>
            </div>
          </div>
        </section>

        {/* ══════════ 7 · CTA ══════════ */}
        <section className="g-white" data-od-id="cta">
          <div className="wrap centred">
            <h2>Ready to find out what&rsquo;s really going on?</h2>
            <div className="hair"></div>
            <p className="lede">The discovery call is free, takes 60 minutes, and comes with no obligation.
              Just an honest conversation about your operation.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/pricing">See engagement options &amp; pricing</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
