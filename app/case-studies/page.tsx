import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Wrench, Package, ShoppingBag, Dumbbell } from 'lucide-react';

// Target keyword: "decoded ops case studies" (brand/trust — low volume, supports commercial pages rather than ranking independently)
export const metadata: Metadata = {
  title: 'Client Work | Decoded Ops',
  description: 'Live engagements — what I\'m actually building right now for clients in decorated goods, workwear, heating spares, and fitness. Real work, not hypotheticals.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    type: 'website',
    title: 'Client Work | Decoded Ops',
    description: 'Live engagements — what I\'m actually building right now, not hypotheticals.',
    url: 'https://decodedops.co.uk/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Work | Decoded Ops',
    description: 'Live engagements — what I\'m actually building right now, not hypotheticals.',
  },
};

const cases = [
  {
    icon: Wrench,
    name: 'Hanicks',
    sector: 'Heating spares & eCommerce',
    desc: 'Project-leading a Khaos Control ERP implementation alongside a custom app for supplier data, Amazon FBA, and channel automation.',
    href: '/case-studies/hanicks',
    status: 'Live engagement',
  },
  {
    icon: Package,
    name: 'TackleBag',
    sector: 'Branded apparel & decoration',
    desc: 'Clarity Audit into a Deliver engagement, building a Stock Control module that feeds clean data straight into their ERP implementation.',
    href: '/case-studies/tacklebag',
    status: 'In Deliver',
  },
  {
    icon: ShoppingBag,
    name: 'Cobra Workwear',
    sector: 'Workwear',
    desc: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
    href: '/case-studies/cobra-workwear',
    status: 'Post-audit',
  },
  {
    icon: Dumbbell,
    name: 'Eternal Fitness',
    sector: 'Health & fitness (clinical populations)',
    desc: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for a 1-to-1 personal training studio.',
    href: '/case-studies/eternal-fitness',
    status: 'In build',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Client Work</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            What I&apos;m actually building right now
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            Not case studies about businesses like yours. These are live engagements, named with permission, across four different sectors. Same approach every time: fix the process and the data before you automate anything.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((c) => {
              const Icon = c.icon;
              return (
                <Link key={c.href} href={c.href} className="group p-8 rounded-2xl border border-[#8ECAE6]/40 bg-white hover:border-[#219EBC]/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#219EBC]/10 flex items-center justify-center group-hover:bg-[#219EBC]/20 transition-colors">
                      <Icon size={24} className="text-[#219EBC]" />
                    </div>
                    <span className="text-xs font-semibold text-[#219EBC] uppercase tracking-wide">{c.status}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#023047] mb-1 group-hover:text-[#219EBC] transition-colors">{c.name}</h2>
                  <p className="text-xs text-[#023047]/50 mb-3 uppercase tracking-wide">{c.sector}</p>
                  <p className="text-sm text-[#023047]/70 leading-relaxed mb-4">{c.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#219EBC] group-hover:text-[#023047] transition-colors">
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Want to talk about your operation?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              Every engagement above started the same way — a Clarity Audit to find out what was actually going on before anything got built or implemented.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
