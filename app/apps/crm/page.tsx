import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Decoded CRM: Decoded Ops',
  description: 'Leads, companies, contacts, deals, quotes, contracts, sales orders, invoices and diary, built around how a decoration business actually sells. Now available on founding-client terms.',
  alternates: { canonical: '/apps/crm' },
  openGraph: {
    type: 'website',
    title: 'Decoded CRM: Decoded Ops',
    description: 'Leads, companies, contacts, deals, quotes, contracts, sales orders, invoices and diary, built around how a decoration business actually sells.',
    url: 'https://decodedops.co.uk/apps/crm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded CRM: Decoded Ops',
    description: 'Leads, companies, contacts, deals, quotes, contracts, sales orders, invoices and diary. Founding-client terms.',
  },
};

export default function CrmPage() {
  return (
    <>
      {/* 1 · HERO SPLIT */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <p className="eyebrow">Decoded CRM &middot; founding client terms</p>
            <h1>Leads to invoices, built for how this sector actually sells.</h1>
            <div className="hero-body">
              <p>A generic CRM assumes a sales process that doesn&apos;t match decorated goods. Decoded CRM
                doesn&apos;t: companies, contacts and deals through to quotes, contracts, sales orders,
                invoices and the diary, in one place, built around the way orders and re-orders actually
                move through this sector.</p>
            </div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn--primary" href="/contact">Talk about founding-client terms</Link>
              <Link className="btn btn--ghost btn-arrow" href="#terms">Read the terms first</Link>
            </div>
          </div>

          <div className="hero-shot">
            <div className="evidence">
              <img src="/images/apps/data-app-dashboard.png" width={1600} height={1067}
                   alt="A pipeline view of leads moving through to deals, quotes and orders." />
            </div>
            <p className="shot-caption">One pipeline, not a spreadsheet copied between three people.</p>
          </div>
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">Three parts</p>
          <h2>Pipeline, paperwork, and the diary that ties them together.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Most of what goes wrong in sales admin isn&apos;t the
            selling. It&apos;s the handoff. A quote that never became an order. An invoice raised against
            the wrong contact. A follow-up nobody diarised.</p>

          <div className="grid grid--3">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" />
                </svg>
              </div>
              <h3>Leads, companies, contacts, deals</h3>
              <p>Every prospect and every account in one record, not scattered across email threads and a
                spreadsheet someone forgot to update.</p>
              <p>A deal shows its whole history, not just its current stage.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7h9l3 3h4v8H4z" /><path d="M8 7V4.5h5" />
                </svg>
              </div>
              <h3>Quotes, contracts, sales orders, invoices</h3>
              <p>The paperwork chain that follows a deal is built in, not bolted on. A quote converts to
                an order without re-keying it, and an invoice is raised against the order that actually
                shipped.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M8 3v3M16 3v3" />
                </svg>
              </div>
              <h3>The diary</h3>
              <p>Follow-ups, call-backs and re-order reminders sit against the account, not in someone&apos;s
                head. Nothing depends on the same person remembering the same customer forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2a · PIPELINE PLATE */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">Flow</p>
          <h2>Lead to invoice, one tracked path.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Three connected stages. Nothing re-keyed between
            them.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="crm" title="Lead to invoice, one tracked path"
                     sub="Three connected stages. Nothing re-keyed between them"
                     no="DO-ART-117" rev="01" cls="DECODED OPS · ISSUED">

                <path id="crm-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" fill="none"
                      strokeWidth="2.5" markerEnd="url(#crm-ah)" d="M470 460 H1130"/>

                <g className="sk-fade sk-s3">
                  <rect x="110" y="330" width="360" height="260" rx="14" fill="url(#crm-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="150" y="392" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Pipeline</text>
                  <text x="150" y="424" className="p-mono" fontSize="16" opacity=".8">Leads, companies,</text>
                  <text x="150" y="448" className="p-mono" fontSize="16" opacity=".8">contacts, deals</text>
                  <text x="150" y="556" className="p-mono" fontSize="15" letterSpacing="1.4"
                        opacity=".55">STAGE 1</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#crm-shadow)">
                  <rect x="620" y="300" width="360" height="320" rx="16" fill="url(#crm-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="660" y="372" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="26">Paperwork</text>
                  <text x="660" y="404" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="26">chain</text>
                  <text x="660" y="440" className="p-accent-ink" fontSize="16" fontWeight="600">Quote to
                    order to</text>
                  <text x="660" y="462" className="p-accent-ink" fontSize="16" fontWeight="600">invoice,
                    one record</text>
                  <text x="660" y="586" className="p-mono" fontSize="15" letterSpacing="1.4"
                        opacity=".7">STAGE 2: NOTHING RE-KEYED</text>
                </g>

                <g className="sk-fade sk-s5">
                  <rect x="1130" y="330" width="360" height="260" rx="14" fill="url(#crm-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="1170" y="392" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">The diary</text>
                  <text x="1170" y="424" className="p-mono" fontSize="15" opacity=".8">Follow-ups against</text>
                  <text x="1170" y="448" className="p-mono" fontSize="15" opacity=".8">the account, not a person</text>
                  <text x="1170" y="556" className="p-mono" fontSize="15" letterSpacing="1.4"
                        opacity=".55">STAGE 3: NOTHING DROPPED</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#crm-spine"/></animateMotion></circle>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · FOUNDING-CLIENT TERMS */}
      <section className="g-navy" id="terms">
        <div className="wrap">
          <p className="eyebrow">Said plainly</p>
          <h2>No client has taken first delivery yet.</h2>

          <div className="panel" style={{ marginTop: 36, maxWidth: '78ch' }}>
            <h3>Founding-client terms</h3>
            <p>This is built and in active use internally. Until a client has taken first delivery, it
              sells on founding-client terms: full implementation pricing, the first six months of
              support waived, in exchange for accepting that some features arrive during the engagement
              and agreeing to be a named reference.</p>
            <p>That&apos;s the whole arrangement. It isn&apos;t a discount dressed as an offer. You get the
              implementation you paid for, and I get the first reference I can point at.</p>
          </div>
        </div>
      </section>

      {/* 4 · PRICING */}
      <section className="g-white" id="pricing">
        <div className="wrap">
          <p className="eyebrow">What each tier covers</p>
          <h2>One tier. No catalogue to compare.</h2>

          <div className="table-wrap">
            <table className="ds-table">
              <caption>Decoded CRM</caption>
              <thead>
                <tr>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="scope">Leads, companies, contacts, deals, quotes, contracts, sales
                    orders, invoices, diary</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">If what you need is bigger than this (multiple entities, a bespoke
            integration into a platform you already run), that&apos;s a different conversation, and it
            starts with a Clarity Audit, not a price list.</p>
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted after the App Scoping Session rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing" style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Talk about founding-client terms.</h2>
          <p className="lede">An hour to work out whether this is the gap in your operation, or something
            smaller. If it is, I&apos;ll tell you that and stop there.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Talk about founding-client terms</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>
    </>
  );
}
