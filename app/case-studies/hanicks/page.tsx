import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "erp implementation project lead" (secondary: "hanicks decoded ops")
export const metadata = {
  title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
  description: 'Project-leading a Khaos Control ERP implementation for Hanicks alongside a custom app for supplier data, Amazon FBA, and channel automation.',
  alternates: { canonical: '/case-studies/hanicks' },
  openGraph: {
    type: 'article',
    title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
    description: 'Project-leading a Khaos Control ERP implementation alongside a custom app for supplier data, Amazon FBA, and channel automation.',
    url: 'https://decodedops.co.uk/case-studies/hanicks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
    description: 'Project-leading a Khaos Control ERP implementation alongside a custom app.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Hanicks — Khaos Control ERP + Custom App',
      description: 'Project-leading a Khaos Control ERP implementation for Hanicks alongside a custom app for supplier data, Amazon FBA, and channel automation.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/hanicks',
    },
  ],
};

export default function HanicksCaseStudyPage() {
  return (
    <>
      <style>{`.article-body{max-width:740px;margin:0 auto}`}</style>
      <main>
        <JsonLd data={schema} />
        <section className="g-off">
          <div className="wrap">
            <div className="article-body">
              <span className="eyebrow">Live Engagement · Heating Spares &amp; eCommerce</span>
              <h1>Hanicks: ERP implementation, run as one project, not three</h1>
              <p className="lede">
                Hanicks sell heating spares through their own website, direct, and Amazon FBA. They&apos;d already chosen Khaos Control as their ERP. What they needed was someone to run the whole thing as a single, coordinated project rather than a set of disconnected workstreams.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="article-body">

              <h2>The problem</h2>
              <p>
                Khaos Control was the right ERP choice, but choosing the software was never the hard part. Amazon FBA has its own inventory and shipping confirmation flows that don&apos;t behave like a normal marketplace channel. Supplier data needed enriching and standardising before it could feed the new system properly. And without someone coordinating the ERP setup, the app build, and the channel automation as one piece of work, this was heading toward three separate projects quietly working against each other.
              </p>

              <h2>What I&apos;m doing</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  'Acting as project lead across the whole engagement — Khaos Control implementation, the custom app build, and channel automation all run as one plan, not three',
                  'Building the IBasis App: a custom application that interfaces with suppliers, the ERP, and Amazon, plus reporting that draws directly from accounts',
                  'Designing the requirements document first, before implementation starts — it protects the project and gives Khaos Control a clear brief to build against',
                  'Covering Amazon FBA\'s inventory and shipping confirmation flows explicitly in the automation design, rather than treating it like every other channel',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 1, color: 'var(--do-cerulean)' }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: '32px', borderRadius: 'var(--do-radius-2xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: '32px' }}>
                <h3>Why the app comes first, not the ERP</h3>
                <p>
                  The instinct is always to wait until the ERP is fully implemented before touching the data problem. That&apos;s backwards. The app doesn&apos;t get replaced when Khaos Control goes live, it keeps running the feeds and connections the ERP was never designed to handle. Data enriched and automated now is worth more than anything even the best ERP can produce from messy source data later.
                </p>
              </div>

              <h2>Status</h2>
              <p style={{ marginBottom: '32px' }}>
                Live engagement, in progress. Khaos Control implementation and the IBasis App build are running in parallel, coordinated against a single requirements document.
              </p>

            </div>
          </div>
        </section>

        <section className="g-navy">
          <div className="wrap">
            <div className="article-body">
              <h3>Facing something similar?</h3>
              <p className="lede">
                If you&apos;re choosing an ERP and quietly worried about everything around it, a Clarity Audit is where this conversation starts.
              </p>
              <div className="btn-row">
                <Link href="/contact" className="btn btn--primary">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies" className="btn btn--outline">
                  See other client work
                </Link>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>Or book a call directly <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
