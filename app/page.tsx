import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import { SheetIndexRail } from '@/components/SheetIndexRail';
import './homepage.css';

export const metadata: Metadata = {
  title: 'Decoded Ops: operations and technology consultancy for decorated goods',
  description: 'Independent operations and technology consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Decoded Ops: operations and technology consultancy for decorated goods',
    description: 'Independent operations and technology consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
    url: 'https://decodedops.co.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Ops: operations and technology consultancy for decorated goods',
    description: 'Independent operations and technology consultancy for UK print, embroidery, workwear and promotional merchandise businesses.',
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
      description: 'Independent operations and technology consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
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
    p: 'I take what you’re trying to convey, often half-formed, vague, hard to articulate, and reflect it back as a solution or a clear path forward. Business owners feel understood in a way they often haven’t been before.' },
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

              <figure className="shot" data-od-id="hero-photo">
                <Image className="p-photo" src="/images/hero-craft.jpg" fill sizes="(max-width: 1040px) 100vw, 45vw"
                  style={{ objectFit: 'cover', objectPosition: '52% 42%' }}
                  alt="Two multi-head embroidery machines running garments on a decoration floor." />
                <figcaption className="stamp">DO-ART-905 &middot; Decoration floor</figcaption>
              </figure>
            </div>

            <figure className="ask" data-od-id="hero-question">
              <span className="qm" aria-hidden="true">&ldquo;</span>
              <div>
                <blockquote>If I spent a day in your business looking at your systems, your processes
                  and your technology, how confident are you that I wouldn&rsquo;t find anything costing you
                  money you don&rsquo;t know about?</blockquote>
                <cite>Craig Blackman &middot; Decoded Ops</cite>
              </div>
            </figure>
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
              <Image src="/images/sectors/thread-spools.jpg" fill sizes="1200px" className="p-photo"
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
              <div className="docket">
                <span>DO-ART-202 &middot; Measure</span>
                <span>Rev 01</span>
                <span className="issued">Issued</span>
              </div>

              <div className="masthead">
                <div>
                  <span className="eyebrow">What it turns up</span>
                  <h2>Nobody retypes a supplier spreadsheet.</h2>
                </div>
                <p className="lede">Hanicks, named with permission. One import pipeline, run to a schedule,
                  doing a job that used to be done by hand every time a supplier changed a range. Not
                  projected and not modelled. This is what actually happened.</p>
              </div>

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

                    {/* 3 · live. Amber lands once, on the figure that is the point. */}
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
                        hand, no repeatable run, and no way to tell what had changed since last time.</text>
                    </g>
                  </Plate>
                </div>
              </div>

              <p className="sheet-foot">Same approach at TackleBag, also named with permission: nine supplier
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
              <div className="docket">
                <span>DO-ART-902 &middot; Evidence</span>
                <span>Rev 01</span>
                <span className="issued">Issued</span>
              </div>

              <div className="plate-scroll">
                <div className="plate-frame" data-od-id="plate-evidence">
                  <Plate tone="dark" p="ev" title="Decoded Data App: live deployment"
                         sub="Supplier feed to platform, one clean catalogue between them"
                         no="DO-ART-902" rev="01" cls="DECODED OPS · ISSUED">

                    <clipPath id="ev-clip"><rect x="60" y="200" width="900" height="520" rx="12"/></clipPath>

                    {/* THE EXHIBIT. A screen, not a photograph — no grade. */}
                    <g className="sk-fade sk-s2">
                      <image href="/assets/screens/data-app-hero.png" x="60" y="200" width="900" height="520"
                             preserveAspectRatio="xMidYMid slice" clipPath="url(#ev-clip)" className="p-screen"/>
                      <rect x="60" y="200" width="900" height="520" rx="12" fill="url(#ev-scan)"
                            opacity=".28" style={{ mixBlendMode: 'overlay' }}/>
                      <rect x="60" y="200" width="900" height="520" rx="12" fill="none" className="p-scyan"
                            strokeWidth="1.1" strokeOpacity=".35"/>
                      <rect x="86" y="648" width="332" height="44" rx="6" className="p-block" opacity=".85"/>
                      <text x="106" y="677" className="p-amber" fontSize="17" letterSpacing="2"
                            fontWeight="600">LIVE DEPLOYMENT &middot; TACKLEBAG</text>
                    </g>

                    {/* THE SPECIFICATION. What the exhibit proves. */}
                    <g className="sk-fade sk-s4">
                      <rect x="1000" y="200" width="540" height="520" rx="12" fill="url(#ev-node)"
                            className="p-node" strokeWidth="1.1"/>
                      <rect x="1026" y="226" width="4" height="16" rx="1" className="p-cyan"/>
                      <text x="1042" y="240" className="p-mono" fontSize="17" letterSpacing="2.4"
                            fontWeight="600">EXHIBIT</text>
                      <line x1="1026" y1="262" x2="1514" y2="262" className="p-scyan" strokeWidth=".6"
                            strokeOpacity=".2"/>

                      <text x="1026" y="306" className="p-mono" fontSize="15" letterSpacing="2"
                            opacity=".45">CLIENT</text>
                      <text x="1026" y="336" className="p-ink" fontFamily="Outfit,sans-serif"
                            fontWeight="600" fontSize="22">TackleBag &middot; named with permission</text>

                      <text x="1026" y="392" className="p-mono" fontSize="15" letterSpacing="2"
                            opacity=".45">SHOWS</text>
                      <text x="1026" y="422" className="p-ink" fontFamily="Outfit,sans-serif"
                            fontWeight="600" fontSize="22">Nine supplier feeds, automated</text>
                      <text x="1026" y="450" className="p-mono" fontSize="16" opacity=".62">Stock, bins and
                        picking alongside Symphony</text>

                      <text x="1026" y="506" className="p-mono" fontSize="15" letterSpacing="2"
                            opacity=".45">SOURCE</text>
                      <text x="1026" y="536" className="p-ink" fontFamily="Outfit,sans-serif"
                            fontWeight="600" fontSize="22">Decoded Data App interface</text>

                      <line x1="1026" y1="586" x2="1514" y2="586" className="p-scyan" strokeWidth=".6"
                            strokeOpacity=".2"/>
                      <text x="1026" y="626" className="p-mono" fontSize="16" opacity=".55">GRADE: none. A
                        screen is not</text>
                      <text x="1026" y="650" className="p-mono" fontSize="16" opacity=".55">a photograph;
                        grading it would</text>
                      <text x="1026" y="674" className="p-mono" fontSize="16" opacity=".55">destroy what it
                        is evidence of.</text>
                    </g>
                  </Plate>
                </div>
              </div>
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
    </>
  );
}
