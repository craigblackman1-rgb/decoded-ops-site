import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
      headline: 'TackleBag — the diagnostic came before the decision',
      description: 'Clarity Audit into a Deliver engagement, building a Stock Control module ahead of a Khaos Control ERP implementation, nine supplier feeds automated end to end.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/tacklebag',
    },
  ],
};

const supplierFeeds = [
  'Joma', 'Speedo', 'Canterbury', 'Mizuno', 'Adidas',
  'Banner', 'Chadwick', 'Reydon', 'Surridge',
];

export default function TackleBagCaseStudyPage() {
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
        .feed-list{ display:flex; flex-wrap:wrap; gap:8px; margin:20px 0 0 }
        .feed-list span{ padding:6px 14px; border-radius:var(--do-radius-full);
          background:var(--do-surface-raised); border:1px solid var(--do-border-subtle);
          font-size:var(--do-text-xs); font-weight:600; color:var(--do-text-primary) }
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

        {/* 1. HERO */}
        <section className="g-off">
          <div className="wrap hero-center">
            <span className="eyebrow">Client work · branded apparel &amp; decoration</span>
            <h1>The diagnostic came before the decision.</h1>
            <p className="lede">
              TackleBag sells teamwear and schoolwear. Multiple suppliers, decorated and plain stock side by side, and an eCommerce platform, Symphony, that needed to reflect live stock accurately across nine supplier feeds at once.
            </p>
          </div>
        </section>

        {/* 2. THE NUMBERS */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow eyebrow--amber">The numbers</span>
            <h2 style={{ marginTop: 14 }}>Nine feeds, automated end to end.</h2>

            <div className="grid grid--2" style={{ marginTop: 40, maxWidth: 640 }}>
              <div className="stat">
                <p className="stat-num num">9</p>
                <p className="stat-label">supplier feeds running automated stock sync</p>
              </div>
              <div className="stat">
                <p className="stat-num num">20–40</p>
                <p className="stat-label">hours a week of admin time projected saved</p>
              </div>
            </div>

            <p className="lede" style={{ marginTop: 32, color: 'var(--do-text-muted-on-dark)' }}>
              Supplier feeds automated:
            </p>
            <div className="feed-list">
              {supplierFeeds.map((feed) => (
                <span key={feed}>{feed}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. THE STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>The situation before</h2>
            <p>
              Manual admin around stock, supplier feeds, and getting products live on Symphony was eating hours every week that should have gone into running the business.
            </p>

            <h2>What was done</h2>
            <p>
              Symphony stayed as the eCommerce platform — it was the right tool for that job. The Data App was built alongside it to automate the parts Symphony was never going to do: nine supplier feeds kept current, decorated and plain stock tracked separately, warehouse floor operations (bin assignment, live camera barcode scanning, batch picking) run from a phone, and new products pushed live to Symphony automatically, including newly added variants on an existing product.
            </p>
            <p>
              Live Symphony integration was proven in production on 27 July 2026, including new-variant publishing — a real gap in the initial build, found and fixed live.
            </p>

            <div className="progress-note">
              <h3>What&apos;s still in progress</h3>
              <p>
                The Data App continues to expand: warehouse floor tooling and further supplier automation are active, ongoing work, not a finished state being presented as complete.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CTA STRIP */}
        <section className="g-off cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>See how the Data App does this.</h2>
            <p className="lede">
              This is a Systems (rung 2) example. For a diagnosis of what your own operation actually needs, book a Clarity Audit.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/apps/data-app" className="btn btn-ghost btn-arrow">
                See the Data App
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
