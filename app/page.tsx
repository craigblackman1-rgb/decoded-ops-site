import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SheetIndexRail } from '@/components/SheetIndexRail';
import { D17Motion } from '@/components/D17Motion';
import d17 from './d17-art.module.css';
import './homepage.css';

export const metadata: Metadata = {
  title: 'Decoded Ops: operations and technology consultancy for decorated goods',
  description: 'Independent operations and technology consultancy for UK print shops, embroiderers, workwear and promo merch suppliers. A Clarity Audit gets you a full day on site and a written plan.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Decoded Ops: operations and technology consultancy for decorated goods',
    description: 'Independent operations and technology consultancy for UK print shops, embroiderers, workwear and promo merch suppliers. A Clarity Audit gets you a full day on site and a written plan.',
    url: 'https://decodedops.co.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Ops: operations and technology consultancy for decorated goods',
    description: 'Independent operations and technology consultancy for UK print shops, embroiderers, workwear and promo merch suppliers.',
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
      description: 'Independent operations and technology consultancy for UK print shops, embroiderers, workwear and promo merch suppliers. A Clarity Audit gets you a full day on site and a written plan.',
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

const costLedger = [
  { value: '3–6', unit: 'hrs a week', desc: 'Lost to manual re-keying between systems that don’t talk to each other', tag: 'Re-keying' },
  { value: '2–4', unit: 'hrs a week', desc: 'Spent on manual invoicing and reconciliation', tag: 'Finance' },
  { value: '3–5', unit: 'per cent', desc: 'Of inbound stock at risk where inventory is disconnected', tag: 'Inventory' },
  { value: '1–3', unit: 'per cent', desc: 'Of orders affected by picking and despatch errors', tag: 'Despatch' },
];

const services = [
  { no: '01', name: 'Clarity Audit', role: 'On-site audit and written plan', lead: true,
    desc: 'A full day on site, six areas followed from start to finish, then a written assessment and roadmap inside five working days.',
    go: { href: '/clarity', label: 'Start here' } },
  { no: '02', name: 'Deliver', role: 'Delivery and vendor management', lead: false,
    desc: 'Independent vendor brief, procurement and project oversight. One point of contact, and someone technical sitting on your side of the table.' },
  { no: '03', name: 'Transform', role: 'Multi-workstream programme', lead: false,
    desc: 'ERP, eCommerce and process redesign run together as one programme. Process led and people first, and scoped only once an audit has shown what it needs to cover.' },
  { no: '04', name: 'Retained', role: 'Fractional CTO', lead: false,
    desc: 'Monthly strategic and operational leadership. Roadmap ownership, vendor management, and a direct line to me.' },
];

const notes = [
  { no: '01 · Translation', h: 'I say it back to you clearly.',
    p: 'I take what you’re trying to convey (often half-formed, vague, hard to articulate) and reflect it back as a solution or a clear path forward. Business owners feel understood in a way they often haven’t been before.' },
  { no: '02 · Problem solving', h: 'When you tell me the system can’t do that.',
    p: 'That’s usually where the conversation starts rather than where it stops. I find a different way, connecting things that were never designed to connect, or reframing the problem so the tool you already own handles it differently.' },
  { no: '03 · Facilitation', h: 'People adopt what they helped build.',
    p: 'In a mixed group of directors, warehouse staff and office teams, I ask the question that makes everyone stop. They adopt the result because they built it. That’s how change actually sticks.' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
      ]} />

      <a className="skip" href="#content">Skip to content</a>

      <SheetIndexRail />

      <main id="content">

        {/* ══════════ REGION A · 01 · THE STAGE ══════════ */}
        <section className="g-navy stage" id="s1" data-od-id="hero">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <div className="stage-grid">
              <div className="stage-copy">
                <span className="eyebrow">Operations &amp; technology consultancy</span>
                <h1>I find what&rsquo;s quietly costing you money.</h1>
                <p>I help owners of print, embroidery, workwear and promotional merchandise businesses
                  fix the systems that are holding them back. Start with a Clarity Audit: a day inside your
                  business, six areas followed from start to finish, and within five working days a written
                  plan that tells you what&rsquo;s broken, what it&rsquo;s costing you, which software actually
                  fits how you work, and what to fix first. That&rsquo;s the penny drop: you finally see
                  what&rsquo;s happening, why, and what to do about it.</p>
                <p>The plan is yours to act on, with me or without me. I&rsquo;ve spent 25 years inside
                  print, embroidery, workwear and promotional merchandise businesses, so I can usually
                  second-guess your problems before you&rsquo;ve finished describing them. Plain English.
                  No jargon. No vendor agenda.</p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/clarity">See how a Clarity Audit works</Link>
                  <Link className="btn btn--outline" href="/contact">Book a free 60 minute call</Link>
                </div>
              </div>

              {/* DO-ART-916 r01 · photo-led + document mock-ups (D17). Workshop photo
                   with two fanned documents and the question below. */}
              <figure className={`${d17.d17} ${d17.a916}`} data-od-id="hero-question" data-motion
                      data-no="DO-ART-916" data-rev="01" data-tx="photo">
                <div className={d17.d17Ph}><img src="/images/d17/hero-workshop.jpg"
                  alt="" width={1100} height={1224} /></div>
                <div className={d17.d17Scan} aria-hidden="true" />
                <div className={`${d17.top} ${d17.d17Mono}`} aria-hidden="true"><span>Clarity Audit</span><span>One day on site</span></div>
                <div className={`${d17.stage}`} aria-hidden="true">
                  <div className={`${d17.d17Doc} ${d17.docA} ${d17.mDrop}`} style={{ animationDelay: '.35s' }}>
                    <span className={d17.tab}>01</span>
                    <span className={d17.ref}>CA-01 &middot; Written report</span>
                    <h4>What it&apos;s costing you</h4>
                    <p className={d17.sub}>six areas &middot; followed, not described</p>
                    <ol>
                      <li><b>01</b>IT infrastructure<i /></li>
                      <li><b>02</b>Software &amp; systems<i /></li>
                      <li><b>03</b>eCommerce<i /></li>
                      <li><b>04</b>Processes &amp; ops<i /></li>
                      <li><b>05</b>Growth<i /></li>
                      <li><b>06</b>AI readiness<i /></li>
                    </ol>
                  </div>
                  <div className={`${d17.d17Doc} ${d17.docB} ${d17.mDrop}`} style={{ animationDelay: '.1s' }}>
                    <span className={d17.tab}>02</span>
                    <span className={d17.ref}>RM-01 &middot; Roadmap</span>
                    <h4>What to fix, in what order</h4>
                    <p className={d17.sub}>within five working days</p>
                    <div className={d17.phase}>Now</div><div className={d17.lines}><i style={{ width: '92%' }} /><i style={{ width: '70%' }} /></div>
                    <div className={d17.phase}>Next</div><div className={d17.lines}><i style={{ width: '84%' }} /><i style={{ width: '58%' }} /></div>
                    <div className={d17.phase}>Later</div><div className={d17.lines}><i style={{ width: '66%' }} /></div>
                  </div>
                </div>
                <div className={d17.askBody}>
                  <div className={d17.bar} aria-hidden="true" />
                  <blockquote>If I spent a day in your business looking at your systems, your processes,
                    and your technology, how confident are you that I wouldn&apos;t find anything costing you
                    money you don&apos;t know about?</blockquote>
                  <cite>Craig Blackman &middot; Decoded Ops</cite>
                  <span className={d17.d17Mark}>decodedops.co.uk &middot; DO-ART-916 &middot; Rev 01</span>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 02 · THE LEDGER ══════════ */}
        <section className="g-navy ledger-sec" id="s2" data-od-id="cost">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <div className="ledger-head">
              <div>
                <span className="eyebrow">The cost of standing still</span>
                <h2>What disconnected systems actually cost you.</h2>
              </div>
              <p className="lede">These are the numbers I see in businesses like yours most weeks. Not
                hypothetical, and not worst case. Just the quiet cost of systems that don&rsquo;t talk to each
                other.</p>
            </div>

            <ol className="ledger" data-od-id="cost-ledger">
              {costLedger.map(item => (
                <li key={item.tag}>
                  <p className="fig">{item.value}<small>{item.unit}</small></p>
                  <p className="desc">{item.desc}</p>
                  <span className="tag">{item.tag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════ REGION B · 03 · HOW I HELP ══════════ */}
        <section className="g-off" id="s3" data-od-id="how-i-help">
          <div className="wrap">
            <span className="eyebrow">How I help</span>
            <h2>A day on site, a written plan, then as much or as little as you need.</h2>
            <p className="lede">Four services. Each one stands on its own, and each is a natural next step
              from the one before it. Almost everyone starts with a Clarity Audit, because until somebody
              has followed your processes from start to finish, everything after that is guesswork.</p>

            <figure className="band" data-od-id="help-photo">
              <Image src="/images/sectors/thread-spools-v2.webp" fill sizes="(max-width: 1200px) 100vw, 1152px" className="p-photo"
                style={{ objectFit: 'cover', objectPosition: '50% 58%' }}
                alt="A row of coloured thread cones loaded on an embroidery machine head." />
              <figcaption className="stamp">DO-ART-906 &middot; Materials</figcaption>
            </figure>

            <ol className="idx" data-od-id="services-index">
              {services.map(s => (
                <li key={s.no} className={s.lead ? 'is-lead' : ''} data-od-id={`service-${s.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="no">{s.no}</span>
                  <div>
                    <h3>{s.name}</h3>
                    <span className="role">{s.role}</span>
                  </div>
                  <div>
                    <p>{s.desc}</p>
                    {s.go && <Link className="go" href={s.go.href}>{s.go.label}</Link>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════ 04 · THE SEAL ══════════ */}
        <section className="g-white" id="s4" data-od-id="guarantee">
          <div className="wrap">
            <div className="seal" data-od-id="guarantee-seal">
              <p className="seal-x">3&times;</p>
              <div>
                <span className="seal-tag">Decoded Ops &middot; Clarity Audit &middot; the guarantee</span>
                <h2>Three times the fee, or you don&rsquo;t pay it.</h2>
                <p>If the report doesn&rsquo;t identify at least three times the fee in recoverable cost or
                  lost revenue, it&rsquo;s refunded in full. No conditions. No questions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 05 · THE FIRST HOUR ══════════ */}
        <section className="g-tint" id="s5" data-od-id="approach">
          <div className="wrap">
            <span className="eyebrow">What you notice on the day</span>
            <h2>Three things you notice on the day I&rsquo;m on site.</h2>

            <div className="notes" data-od-id="notes">
              {notes.map(n => (
                <article className="note" key={n.no} data-od-id={`note-${n.no.slice(3).toLowerCase()}`}>
                  <span className="no">{n.no}</span>
                  <h3>{n.h}</h3>
                  <p>{n.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ REGION C · 06 · WHAT IT TURNS UP ══════════ */}
        <section className="g-navy set" id="s6" data-od-id="turns-up">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <article className="sheet" data-od-id="sheet-measure">
              <div className="masthead">
                <div>
                  <span className="eyebrow">Measure &middot; DO-ART-917</span>
                  <h2>Nobody retypes a supplier spreadsheet.</h2>
                </div>
                <p className="lede">Hanicks. One import pipeline, run to a schedule,
                  doing a job that used to be done by hand every time a supplier changed a range. Not
                  projected and not modelled. This is what actually happened.</p>
              </div>

              {/* DO-ART-917 r01 &middot; product-screen mock-up carrying the live Hanicks
                   figures (SQL, 23 Sep 2026). In-page draw: cards rise, the meters
                   fill, the feeds list in, and the amber lands on &quot;matched&quot; last. */}
              <figure className={`${d17.d17} ${d17.a917}`} data-od-id="plate-measure" data-motion
                      data-no="DO-ART-917" data-rev="01" data-tx="photo"
                      aria-label="Product screen DO-ART-917. The Data App catalogue overview at Hanicks, live in September 2026: 317,812 products brought in from supplier feeds, 154,518 matched to a supplier automatically, 40 active suppliers feeding in, and 77 per cent of stock records carrying a bin location.">
                <div className={d17.d17Ph}><img src="/images/d17/thread-spools.jpg" alt="" width={1300} height={867} /></div>
                <div className={d17.d17Scan} aria-hidden="true" />
                <figcaption className={d17.cap}>
                  <div className={`${d17.k} ${d17.d17Mono}`}>The Data App <span>&middot; at Hanicks</span></div>
                  <div className={d17.bar} aria-hidden="true" />
                  <h3>Forty suppliers. One catalogue.</h3>
                  <p>Every supplier feed brought into one place, and matched to its supplier before anyone has to touch it.</p>
                  <div className={`${d17.live} ${d17.d17Mono}`}>Live system, September 2026</div>
                  <span className={d17.d17Mark}>decodedops.co.uk &middot; DO-ART-917 &middot; Rev 01</span>
                </figcaption>
                <div className={d17.win} aria-hidden="true">
                  <div className={d17.winBar}><span className={d17.dots}><i /><i /><i /></span>
                    <span className={d17.crumb}><span>Catalogue &rsaquo;</span> Overview</span><span className={d17.pill}>HANICKS</span></div>
                  <div className={d17.winBody}>
                    <nav className={d17.winNav}><span className={d17.on}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 13 9 5 9-5" /></svg>Catalogue</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.6" /><circle cx="17" cy="17.5" r="1.6" /></svg>Fulfil</span>
                      <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" /></svg>Publish</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>Insight</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></svg>Setup</span></nav>
                    <div className={d17.winMain}>
                      <h5>Catalogue overview</h5>
                      <p className={d17.s}>Every supplier feed, brought into one catalogue</p>
                      <div className={d17.kpis}>
                        <div className={`${d17.kpi} ${d17.mRise}`} style={{ animationDelay: '.1s' }}><div className={d17.l}>Products brought in</div>
                          <p className={d17.n}>317,812</p><p className={d17.d}>from supplier feeds</p></div>
                        <div className={`${d17.kpi} ${d17.kpiHit} ${d17.mRise}`} style={{ animationDelay: '.3s' }}><div className={d17.l}>Matched automatically</div>
                          <p className={d17.n}>154,518</p><p className={d17.d}>to a supplier, before anyone had to touch them</p></div>
                        <div className={`${d17.kpi} ${d17.mRise}`} style={{ animationDelay: '.5s' }}><div className={d17.l}>Active suppliers</div>
                          <p className={d17.n}>40</p><p className={d17.d}>feeding in</p></div>
                      </div>
                      <div className={`${d17.meter} ${d17.mRise}`} style={{ animationDelay: '.7s' }}><div className={d17.row}><b>Supplier matching</b><span>154,518 of 317,812</span></div>
                        <div className={d17.track}><div className={`${d17.fill} ${d17.mFill}`} style={{ width: '48.6%', animationDelay: '1s' }} /></div></div>
                      <div className={`${d17.meter} ${d17.mRise}`} style={{ animationDelay: '.85s' }}><div className={d17.row}><b>Stock records with a bin location</b><span>77%</span></div>
                        <div className={d17.track}><div className={`${d17.fill} ${d17.mFill}`} style={{ width: '77%', animationDelay: '1.25s' }} /></div></div>
                      <div className={d17.feeds}>
                        <div className={d17.hd}><b>Supplier feeds</b><span>40 active</span></div>
                        <div className={`${d17.r} ${d17.mFade}`} style={{ animationDelay: '1.6s' }}><b>Supplier A</b><span>Product and stock</span><span className={d17.ok}>IMPORTED</span></div>
                        <div className={`${d17.r} ${d17.mFade}`} style={{ animationDelay: '1.75s' }}><b>Supplier B</b><span>Product and stock</span><span className={d17.ok}>IMPORTED</span></div>
                        <div className={`${d17.r} ${d17.mFade}`} style={{ animationDelay: '1.9s' }}><b>Supplier C</b><span>Stock</span><span className={d17.ok}>IMPORTED</span></div>
                        <div className={`${d17.more} ${d17.mFade}`} style={{ animationDelay: '2.05s' }}>+ 37 more active suppliers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>

              <p className="sheet-foot">Same approach at Case study 02, real production numbers: 17 supplier
                feeds automated, and a projected saving of 20 to 40 hours a week.</p>
            </article>
          </div>
        </section>

        {/* ══════════ REGION D · 07 · WHERE THE SOFTWARE CAME FROM ══════════ */}
        <section className="g-white origin" id="s7" data-od-id="origin">
          <div className="wrap">
            <div className="origin-lead" data-od-id="origin-lead">
              <span className="eyebrow">Where the software came from</span>
              <h2>I didn&rsquo;t set out to build software.</h2>
              <p>I kept meeting the same gap in businesses I was already fixing. The platform was
                usually right. It just would not do one particular job, and nothing on the market closed
                that gap at a price a business this size could justify. So I built the thing that
                did.</p>
              <p>Because it was built by someone who does the process work, the Process Register and the
                SOPs are built in rather than bolted on. That is the Decoded Method running inside the
                software instead of sitting in a folder nobody opens.</p>
            </div>

            <div className="origin-case" data-od-id="origin-case">
              <div>
                <h3>What that looks like at full stretch</h3>
                <span className="disclose">Disclosure</span>
                <p>Eternal Fitness is my wife&rsquo;s business, so it isn&rsquo;t an arm&rsquo;s length client reference
                  and I won&rsquo;t pretend otherwise. It&rsquo;s here because it is the clearest example of how far
                  this goes, and because there was nowhere to hide if it didn&rsquo;t work.</p>
              </div>
              <ul className="outcomes" data-od-id="origin-outcomes">
                <li>Multiple systems consolidated into one operations hub.</li>
                <li>Every procedure and process documented.</li>
                <li>The mundane but important work automated.</li>
                <li>A business that can scale online and offline without adding admin to do it.</li>
              </ul>
            </div>

            <div className="origin-exhibit" data-od-id="origin-exhibit">
              {/* DO-ART-918 r01 · photo-led evidence with a drawn ledger (D17). The
                   client is a teamwear business and is never named; figures are the
                   live system, SQL 23 Sep 2026. In-page draw: the ledger line runs
                   down and the figures land in order, amber on &quot;binned&quot; last. */}
              <figure className={`${d17.d17} ${d17.a918}`} data-od-id="plate-evidence" data-motion
                      data-no="DO-ART-918" data-rev="01" data-tx="photo"
                      aria-label="Evidence piece DO-ART-918. A teamwear business on the Data App, live in September 2026: 17 supplier feeds, 27,778 supplier products, 236,056 variants, 952 products live on their website, and 100 per cent of stock with a bin location.">
                <div className={d17.d17Ph}><img src="/images/d17/cat-workwear.jpg" alt="" width={900} height={596} /></div>
                <div className={d17.d17Scan} aria-hidden="true" />
                <figcaption className={d17.copy}>
                  <div className={`${d17.k} ${d17.d17Mono}`}>A teamwear business <span>&middot; live system, Sept 2026</span></div>
                  <h3>Seventeen feeds in. Every item binned.</h3>
                  <ol className={d17.ledger}>
                    <li className={`${d17.mFade}`} style={{ animationDelay: '.2s' }}><span className={d17.n}>17</span><span className={d17.t}>supplier feeds, automated</span></li>
                    <li className={`${d17.mFade}`} style={{ animationDelay: '.55s' }}><span className={d17.n}>27,778</span><span className={d17.t}>supplier products in one catalogue</span></li>
                    <li className={`${d17.mFade}`} style={{ animationDelay: '.9s' }}><span className={d17.n}>236,056</span><span className={d17.t}>variants, split by colour and size</span></li>
                    <li className={`${d17.mFade}`} style={{ animationDelay: '1.25s' }}><span className={d17.n}>952</span><span className={d17.t}>products live on their website</span></li>
                    <li className={`${d17.end} ${d17.mFade}`} style={{ animationDelay: '1.6s' }}><span className={d17.n}>100%</span><span className={d17.t}>of stock with a bin location</span></li>
                  </ol>
                  <span className={d17.d17Mark}>decodedops.co.uk &middot; DO-ART-918 &middot; Rev 01</span>
                </figcaption>
                <div className={`${d17.print} ${d17.mDrop}`} style={{ animationDelay: '1.9s' }} aria-hidden="true">
                  <span className={d17.ref}>BIN &middot; PICK FACE</span><b>A-04-2</b><div className={d17.bc} /><div className={d17.s}>Polo &middot; navy &middot; M</div>
                </div>
              </figure>
            </div>

            <div className="origin-links" data-od-id="origin-links">
              <Link className="go" href="/apps">See what&rsquo;s already running</Link>
              <Link className="go" href="/how-i-build">How I decide what to build</Link>
            </div>
          </div>
        </section>

        {/* ══════════ REGION D · 08 · THE CLOSER ══════════ */}
        <section className="g-off closer" id="s8" data-od-id="cta">
          <div className="wrap closer-grid">
            <div>
              <span className="eyebrow">Start here</span>
              <h2>Ready to find out what&rsquo;s really going on?</h2>
            </div>
            <div>
              <p className="lede">The discovery call is free, takes 60 minutes, and comes with no obligation.
                Just an honest conversation about your operation.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/pricing">See engagement options and pricing</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}
