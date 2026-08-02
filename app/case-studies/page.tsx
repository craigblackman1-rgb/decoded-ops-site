import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Client Work | Decoded Ops',
  description: 'Live engagements. What I\'m actually building right now for clients in decorated goods, workwear, heating spares, and fitness. Real work, not hypotheticals.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    type: 'website',
    title: 'Client Work | Decoded Ops',
    description: 'Live engagements. What I\'m actually building right now, not hypotheticals.',
    url: 'https://decodedops.co.uk/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Work | Decoded Ops',
    description: 'Live engagements. What I\'m actually building right now, not hypotheticals.',
  },
};

const cases = [
  {
    name: 'Hanicks',
    sector: 'Heating spares & eCommerce',
    desc: 'Project-leading a Khaos Control ERP implementation alongside a custom app for supplier data, Amazon FBA, and channel automation.',
    href: '/case-studies/hanicks',
    status: 'Live engagement',
    pull: '164,752 imported, 77% matched, 11,064 live',
  },
  {
    name: 'TackleBag',
    sector: 'Branded apparel & decoration',
    desc: 'Clarity Audit into a Deliver engagement, building a Stock Control module that feeds clean data straight into their ERP implementation.',
    href: '/case-studies/tacklebag',
    status: 'In Deliver',
    pull: '9 supplier feeds automated, projected 20–40 hrs/week saved',
  },
  {
    name: 'Cobra Workwear',
    sector: 'Workwear',
    desc: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
    href: '/case-studies/cobra-workwear',
    status: 'Post-audit',
    pull: 'B2B ordering portal and ERP evaluation, architecture and vendor brief',
  },
  {
    name: 'Eternal Fitness',
    sector: 'Health & fitness (clinical populations)',
    desc: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for a 1-to-1 personal training studio.',
    href: '/case-studies/eternal-fitness',
    status: 'In build',
    pull: 'Full site rebuild and an AI-assisted training plan tool',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Client Work', url: 'https://decodedops.co.uk/case-studies' },
      ]} />

      <style>{`
        .log-list { display: flex; flex-direction: column; gap: 16px; }
        .log-row {
          display: flex; align-items: center; gap: 24px;
          padding: 24px 28px;
          background: var(--do-surface-raised);
          border: 1px solid var(--do-border-subtle);
          border-radius: var(--do-radius-xl);
          text-decoration: none; color: inherit;
          transition: border-color var(--do-duration-normal), box-shadow var(--do-duration-normal);
        }
        .log-row:hover {
          border-color: var(--do-border-strong);
          box-shadow: var(--do-shadow-md);
        }
        .log-main { flex: 1; min-width: 0; }
        .log-main h3 { margin-bottom: 4px; }
        .log-sector {
          font-size: var(--do-text-xs);
          letter-spacing: var(--do-tracking-wide);
          text-transform: uppercase;
          color: color-mix(in srgb, var(--do-prussian-blue) 50%, transparent);
          margin-bottom: 8px;
        }
        .log-desc {
          font-size: var(--do-text-sm);
          color: color-mix(in srgb, var(--do-prussian-blue) 74%, transparent);
          margin-bottom: 0; line-height: var(--do-leading-relaxed);
        }
        .log-pull {
          flex-shrink: 0; text-align: right; max-width: 260px;
          font-family: var(--do-font-heading);
          font-size: var(--do-text-lg);
          font-weight: var(--do-weight-bold);
          color: var(--do-text-primary);
        }
        .log-arrow {
          flex-shrink: 0;
          color: var(--do-cerulean);
          transition: transform var(--do-duration-normal);
        }
        .log-row:hover .log-arrow { transform: translateX(4px); }
        @media(max-width: 760px) {
          .log-row { flex-direction: column; align-items: flex-start; gap: 14px; padding: 20px 22px; }
          .log-pull { text-align: left; max-width: none; font-size: var(--do-text-base); }
        }
      `}</style>

      <main>
        <section className="g-off">
          <div className="wrap">
            <div style={{ maxWidth: '740px', margin: '0 auto' }}>
              <span className="eyebrow">Client Work</span>
              <h1>What I&apos;m actually building right now</h1>
              <p className="lede">
                Not case studies about businesses like yours. These are live engagements, named with permission, across four different sectors. Same approach every time: fix the process and the data before you automate anything.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="log-list">
              {cases.map((c) => (
                <Link key={c.href} href={c.href} className="log-row">
                  <div className="log-main">
                    <h3>{c.name}</h3>
                    <p className="log-sector">{c.sector} · {c.status}</p>
                    <p className="log-desc">{c.desc}</p>
                  </div>
                  <div className="log-pull">{c.pull}</div>
                  <ArrowRight size={18} className="log-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="g-navy">
          <div className="wrap">
            <div style={{ maxWidth: '740px', margin: '0 auto' }}>
              <h3>Want to talk about your operation?</h3>
              <p className="lede">
                Every engagement above started the same way: a Clarity Audit to find out what was actually going on before anything got built or implemented.
              </p>
              <div className="btn-row">
                <Link href="/contact" className="btn btn--primary">
                  Book a free discovery call <ArrowRight size={18} />
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
