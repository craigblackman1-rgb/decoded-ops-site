import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Server, ShoppingCart, GitBranch, Users, Layers, TrendingUp, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Digital Transformation Programme | Decoded Ops',
  description: 'Multi-workstream technology programmes for print and decoration businesses. ERP, eCommerce, process redesign. Discovery required before scoping.',
  alternates: { canonical: '/transform' },
  openGraph: {
    type: 'website',
    title: 'Digital Transformation Programme | Decoded Ops',
    description: 'Multi-workstream technology programmes for print and decoration businesses. ERP, eCommerce, process redesign. Discovery required before scoping.',
    url: 'https://decodedops.co.uk/transform',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation Programme | Decoded Ops',
    description: 'Multi-workstream technology transformation for print and decoration businesses. Process-led. People-first.',
  },
};

const transformSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the Transform programme include?',
      acceptedAnswer: { '@type': 'Answer', text: 'Transform covers multi-workstream digital transformation including ERP and core systems selection and implementation, eCommerce and digital channel connectivity, process redesign from order to invoice, people and change management, integration and data (connecting systems and eliminating manual workarounds), and reporting and visibility. Discovery is required before scoping.' },
    },
    {
      '@type': 'Question',
      name: 'Why do digital transformation projects fail in print and embroidery businesses?',
      acceptedAnswer: { '@type': 'Answer', text: 'The most common pattern: system selected without users involved, training on how it works rather than how it fits the job, reversion by week three, system blamed by month three. Employee buy-in is the single biggest project risk. Transform addresses this by hearing people before any decision is made and making the system work for the user — not just the person commissioning it.' },
    },
    {
      '@type': 'Question',
      name: 'How is Transform different from a standard IT project?',
      acceptedAnswer: { '@type': 'Answer', text: 'Transform is process-led and people-first. Craig maps actual working practices before any system decision is made, manages change across all workstreams simultaneously, and holds vendors accountable across the programme. It is a coordinated programme with milestone governance — not a collection of separate projects.' },
    },
  ],
};

import { TransformProgrammeGraphic } from '@/components/graphics/TransformProgrammeGraphic';

const workstreams = [
  { icon: Server,       title: 'ERP & Core Systems',        desc: 'Selection, implementation, migration, and integration of your core business system. Built around how your business actually operates.' },
  { icon: ShoppingCart, title: 'eCommerce & Digital',        desc: 'Platform selection, B2B/B2C integration, decoration tools, and production workflow connectivity. Not just a website \u2014 a connected sales channel.' },
  { icon: GitBranch,    title: 'Process Redesign',           desc: 'End-to-end process mapping and redesign. From order in to invoice out. Fixing the process before automating it.' },
  { icon: Users,        title: 'People & Change',            desc: 'Employee buy-in is the single biggest hurdle. Hearing people before any decision. Making the system work for the user, not just the commissioner.' },
  { icon: Layers,       title: 'Integration & Data',         desc: 'Connecting systems that need to talk to each other. Clean data migration. Eliminating manual re-keying and workarounds.' },
  { icon: TrendingUp,   title: 'Reporting & Visibility',     desc: 'Building the dashboards and reports that give leadership real-time visibility into what matters.' },
];

const includedItems = [
  'Full discovery phase before scoping \u2014 no assumptions',
  'Multi-workstream programme management',
  'Process-led people-first approach',
  'Change management and employee buy-in built into every workstream',
  'Vendor selection and management across all workstreams',
  'Structured milestone governance and reporting',
  'Regular written progress reporting to leadership',
  'Roadmap ownership through to completion',
];

const serviceStages = [
  { label: 'Clarity', href: '/clarity' },
  { label: 'Deliver', href: '/deliver' },
  { label: 'Transform', href: '/transform', active: true },
  { label: 'Retained', href: '/retained' },
];

export default function TransformPage() {
  return (
    <>
      <JsonLd data={transformSchema} />
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; Transform &middot; Digital Transformation Programme</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                Process-led. People-first.<br />
                <span className="text-[#219EBC]">Technology that sticks.</span>
              </h1>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">
                For businesses that need a coordinated transformation across multiple workstreams &mdash; ERP, eCommerce, process redesign, and more. Discovery required before scoping, because assumptions are where transformations fail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
                <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                  Start with Clarity first
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center p-6 rounded-2xl bg-[#023047]/5 border border-[#8ECAE6]/30">
              <TransformProgrammeGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRANSFORMATIONS FAIL — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">&mdash; Why transformations fail</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-8">The pattern I see every time</h2>
            <div className="space-y-6">
              <p className="text-[#8ECAE6] text-lg leading-relaxed">
                System selected without users involved. Training delivered on how it works, not how it fits their job. Reversion by week three. System blamed by month three.
              </p>
              <p className="text-[#8ECAE6] text-lg leading-relaxed">
                Transform exists to break that pattern. I hear people before any decision is made. I map actual working practices. I make the system work for the user &mdash; not just the person commissioning it.
              </p>
              <p className="text-[#F8F9FA] text-lg leading-relaxed font-bold">
                Employee buy-in is not an HR issue. It is the single biggest project risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSTREAMS */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; Workstreams</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">What a Transform programme covers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workstreams.map(ws => {
              const Icon = ws.icon;
              return (
                <div key={ws.title} className="group p-6 rounded-2xl border border-[#8ECAE6]/40 hover:border-[#219EBC]/40 hover:shadow-md transition-all duration-300 bg-[#F8F9FA]">
                  <div className="w-10 h-10 rounded-xl bg-[#219EBC]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#023047] mb-2">{ws.title}</h3>
                  <p className="text-sm text-[#023047]/70 leading-relaxed">{ws.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
                <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">&mdash; What&apos;s included</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-8">A coordinated programme, not a collection of projects</h2>
              <div className="space-y-4">
                {includedItems.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#219EBC] mt-0.5 flex-shrink-0" />
                    <span className="text-[#8ECAE6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CONNECTIONS */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#023047] mb-8">Where Transform fits</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {serviceStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-3">
                <Link
                  href={stage.href}
                  className={`inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                    stage.active
                      ? 'bg-[#219EBC] text-[#F8F9FA]'
                      : 'bg-[#023047]/10 text-[#023047] hover:bg-[#023047]/20'
                  }`}
                >
                  {stage.label}
                </Link>
                {i < serviceStages.length - 1 && (
                  <ArrowRight size={16} className="text-[#023047]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-6">Ready to talk about transformation?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
            <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
              Start with Clarity first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
