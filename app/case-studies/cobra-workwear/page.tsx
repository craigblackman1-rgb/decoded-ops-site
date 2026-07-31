import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "b2b ordering portal workwear" (secondary: "cobra workwear decoded ops")
export const metadata = {
  title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
  description: 'Independent Clarity Audit and ERP evaluation for Cobra Workwear ahead of a B2B customer ordering portal build.',
  alternates: { canonical: '/case-studies/cobra-workwear' },
  openGraph: {
    type: 'article',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Independent Clarity Audit and ERP evaluation ahead of a B2B customer ordering portal build.',
    url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Independent Clarity Audit and ERP evaluation for a B2B ordering portal build.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cobra Workwear — B2B Portal and ERP Evaluation',
      description: 'Independent Clarity Audit and ERP evaluation for Cobra Workwear ahead of a B2B customer ordering portal build.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
    },
  ],
};

export default function CobraWorkwearCaseStudyPage() {
  return (
    <>
      <style>{`.article-body{max-width:740px;margin:0 auto}`}</style>
      <main>
        <JsonLd data={schema} />
        <section className="g-off">
          <div className="wrap">
            <div className="article-body">
              <span className="eyebrow">Post-Audit · Workwear</span>
              <h1>Cobra Workwear: an independent view before the ERP decision, not after</h1>
              <p className="lede">
                Cobra Workwear needed a B2B customer ordering portal — logins, custom ranges per customer, credit terms, multi-site, Xero integration — plus an ERP that could actually support it. The Clarity Audit came first, before anything got built or signed off.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="article-body">

              <h2>The problem</h2>
              <p>
                Cobra were evaluating an ERP platform without an independent view on whether it actually fit their operation, running alongside Shopify with a B2B portal still to be scoped and built. Getting the platform choice wrong here doesn&apos;t just cost money on the software, it shapes the next 12 to 18 months of how the whole ordering and fulfilment process works. That&apos;s not a decision to make off the back of a vendor demo.
              </p>

              <h2>What I did</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  'Ran a Clarity Audit against Cobra\'s actual, documented requirements, not the vendor\'s pitch',
                  'Evaluated the ERP platform on the table independently, with no vendor relationship or referral fee riding on the outcome',
                  'Scoped what the B2B portal actually needs to do: logins, custom ranges per customer, credit terms, multi-site support, and a clean Xero integration',
                  'Positioned Decoded Ops as architect and project manager for the build, not the builder — a vetted third-party partner delivers the portal, keeping cost sensitive and avoiding a build-line markup',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 1, color: 'var(--do-cerulean)' }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: '32px', borderRadius: 'var(--do-radius-2xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: '32px' }}>
                <h3>Why the audit came before the build</h3>
                <p>
                  A B2B portal that doesn&apos;t talk to the right ERP, chosen without an independent check, is exactly how a business ends up rebuilding the same thing twice. The audit exists to catch that before contracts are signed, not to write a report nobody acts on.
                </p>
              </div>

              <h2>Status</h2>
              <p style={{ marginBottom: '32px' }}>
                Clarity Audit complete. Now negotiating the Deliver and Transform engagement to take the portal and ERP work from scope into build.
              </p>

            </div>
          </div>
        </section>

        <section className="g-navy">
          <div className="wrap">
            <div className="article-body">
              <h3>Weighing up a similar decision?</h3>
              <p className="lede">
                If you&apos;re choosing an ERP or scoping a customer portal and want an independent view before anything&apos;s signed, that&apos;s exactly what a Clarity Audit is for.
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
