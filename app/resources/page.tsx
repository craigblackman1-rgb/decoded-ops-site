import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, AlertTriangle, Star, Workflow, Gauge } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Free Resources for Print & Embroidery Businesses | Decoded Ops',
  description: 'Free operational resources for print, embroidery, and decoration businesses. Audit checklist, warning signs guide, and independent software reviews.',
  alternates: { canonical: '/resources' },
  openGraph: {
    type: 'website',
    title: 'Free Resources | Decoded Ops',
    description: 'Free operational resources for print and decoration businesses. Audit checklists, warning signs, and software reviews.',
    url: 'https://decodedops.co.uk/resources',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resources | Decoded Ops',
    description: 'Free operational resources for print and decoration businesses.',
  },
};

const resources = [
  {
    icon: ClipboardCheck,
    title: 'Operational Audit Checklist',
    desc: 'A practical checklist to evaluate your operations, technology, and processes. Use this before you hire a consultant.',
    href: '/resources/audit-checklist',
  },
  {
    icon: AlertTriangle,
    title: '5 Warning Signs Your Systems Are Holding You Back',
    desc: 'Five signs that your current technology is costing you more than a replacement would. Practical and straight-talking.',
    href: '/resources/5-warning-signs',
  },
  {
    icon: Star,
    title: 'Software Reviews',
    desc: 'Honest, independent reviews of ERP, eCommerce, and production software used in this sector. No affiliate links. No sponsors.',
    href: '/resources/software-reviews',
  },
  {
    icon: Workflow,
    title: 'The Decoded Method',
    desc: 'A three-layer system for documenting how your business runs: Process Register, one-page SOPs, and an Improvement Log. Plain English, built to hand over.',
    href: '/resources/decoded-method',
  },
  {
    icon: Gauge,
    title: 'What 5 & 6 Sigma Mean for Your Operation',
    desc: 'What 3, 4, 5 and 6 Sigma actually mean for a print and embroidery business, and why closing the gap is about process, not machinery.',
    href: '/resources/six-sigma',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Resources', url: 'https://decodedops.co.uk/resources' },
      ]} />
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Resources</span>
          <h1>Tools and guides <em>you can use today</em></h1>
          <p className="lede">
            Free resources built from real experience in print, embroidery, and decoration businesses. No fluff. No lead-gen tricks. Just useful stuff.
          </p>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap">
          <div className="grid grid--3">
            {resources.map(r => {
              const Icon = r.icon;
              return (
                <Link key={r.href} href={r.href} className="card">
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={24} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <h2 style={{ fontSize: 'var(--do-text-xl)' }}>{r.title}</h2>
                  <p>{r.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-cerulean)' }}>
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
