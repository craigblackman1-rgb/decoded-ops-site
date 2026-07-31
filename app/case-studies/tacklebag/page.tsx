import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "stock control app decorated goods" (secondary: "tacklebag decoded ops")
export const metadata = {
  title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
  description: 'A Clarity Audit into a Deliver engagement for TackleBag, building a Stock Control module that feeds clean data into their ERP implementation.',
  alternates: { canonical: '/case-studies/tacklebag' },
  openGraph: {
    type: 'article',
    title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement, building a Stock Control module that feeds clean data into their ERP implementation.',
    url: 'https://decodedops.co.uk/case-studies/tacklebag',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement, building a Stock Control module.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'TackleBag — Clarity Audit to Stock Control Build',
      description: 'A Clarity Audit into a Deliver engagement for TackleBag, building a Stock Control module that feeds clean data into their ERP implementation.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/tacklebag',
    },
  ],
};

export default function TackleBagCaseStudyPage() {
  return (
    <>
      <style>{`.article-body{max-width:740px;margin:0 auto}`}</style>
      <main>
        <JsonLd data={schema} />
        <section className="g-off">
          <div className="wrap">
            <div className="article-body">
              <span className="eyebrow">In Deliver · Branded Apparel &amp; Decoration</span>
              <h1>TackleBag: building the data foundation before the ERP goes in</h1>
              <p className="lede">
                TackleBag came in for a Clarity Audit. What it found moved straight into a Deliver engagement, with a Stock Control module now doing the groundwork their eventual Khaos Control implementation would otherwise have to do the hard way.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="article-body">

              <h2>The problem</h2>
              <p>
                Stock and SKU data was spread across spreadsheets and manual processes, with no single source of truth for bin locations or supplier feeds. That&apos;s a normal starting point for a decorated goods business at this scale, but it&apos;s exactly the kind of mess that gets carried straight into a new ERP if nobody deals with it first. Khaos Control implementation typically starts once the software&apos;s in, with data prep left to the client to sort out on the way.
              </p>

              <h2>What we&apos;re building</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  'A Stock Control module with SKU standards and bin locations built in, so the data has a proper home before the ERP arrives',
                  'Direct data ports from the module into Khaos Control once implementation starts — no manual re-entry, no re-cleaning the same data twice',
                  'Supplier feed sanitisation built into the module, replacing spreadsheets that were never designed to hold this much detail reliably',
                  'A module that keeps running after Khaos Control goes live — the ERP doesn\'t clean incoming supplier data on its own, this does',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 1, color: 'var(--do-cerulean)' }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: '32px', borderRadius: 'var(--do-radius-2xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: '32px' }}>
                <h3>Why this order matters</h3>
                <p>
                  Khaos Control implementation is where the real project cost sits. Every hour spent cleaning and standardising data before that starts is an hour that doesn&apos;t get spent firefighting during implementation. The module isn&apos;t a stopgap that gets thrown away when the ERP lands. It&apos;s the thing doing the job the ERP was never going to do well on its own.
                </p>
              </div>

              <h2>Status</h2>
              <p style={{ marginBottom: '32px' }}>
                Active Deliver engagement, following a completed Clarity Audit. The Stock Control module is in build, ahead of the Khaos Control implementation it&apos;s designed to feed.
              </p>

            </div>
          </div>
        </section>

        <section className="g-navy">
          <div className="wrap">
            <div className="article-body">
              <h3>Recognise this pattern?</h3>
              <p className="lede">
                If your stock data is spread across spreadsheets and you&apos;re eyeing an ERP, a Clarity Audit is the fastest way to find out what&apos;s actually going on before you commit to anything.
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
