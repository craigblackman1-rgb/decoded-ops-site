import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, AlertTriangle, Star } from 'lucide-react';

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
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Resources</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
              Tools and guides <span className="text-[#219EBC]">you can use today</span>
            </h1>
            <p className="text-lg text-[#023047]/70 leading-relaxed max-w-xl">
              Free resources built from real experience in print, embroidery, and decoration businesses. No fluff. No lead-gen tricks. Just useful stuff.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map(r => {
              const Icon = r.icon;
              return (
                <Link key={r.href} href={r.href} className="group p-8 rounded-2xl border border-[#8ECAE6]/40 bg-white hover:border-[#219EBC]/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#219EBC]/10 flex items-center justify-center mb-4 group-hover:bg-[#219EBC]/20 transition-colors">
                    <Icon size={24} className="text-[#219EBC]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#023047] mb-3 group-hover:text-[#219EBC] transition-colors">{r.title}</h2>
                  <p className="text-sm text-[#023047]/70 leading-relaxed mb-4">{r.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#219EBC] group-hover:text-[#023047] transition-colors">
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
