import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Server, Layers, ShoppingCart, GitBranch, TrendingUp, Sparkles, CheckCircle2, Zap, Settings, Users } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Discovery Day — On-Site Audit for Print and Decoration Businesses | Decoded Ops',
  description: 'A structured one-day audit covering IT infrastructure, software, eCommerce, operations, AI readiness, and budget. Written report, clear recommendations.',
  alternates: { canonical: '/clarity' },
  openGraph: {
    type: 'website',
    title: 'Discovery Day — On-Site Audit for Print and Decoration Businesses | Decoded Ops',
    description: 'A structured one-day audit covering IT infrastructure, software, eCommerce, operations, AI readiness, and budget. Written report, clear recommendations.',
    url: 'https://decodedops.co.uk/clarity',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discovery Day — On-Site Audit for Print and Decoration Businesses | Decoded Ops',
    description: 'A structured one-day audit covering IT infrastructure, software, eCommerce, operations, AI readiness, and budget. Written report, clear recommendations.',
  },
};
import { DiscoveryDaySchematic } from '@/components/schematics/DiscoveryDaySchematic';

const auditAreas = [
  { icon: Server,       num: '01', title: 'IT Infrastructure',     desc: 'Security posture, connectivity, identity management, and IT costs. Every risk identified, costed, and prioritised. Licensing waste surfaced and eliminated.' },
  { icon: Layers,       num: '02', title: 'Software & Systems',     desc: "Every tool in use assessed — what it costs, what it does, whether it's right. ERP, MIS, and management platforms assessed or selected. Independent vendor brief on your terms." },
  { icon: ShoppingCart, num: '03', title: 'eCommerce & Digital',    desc: 'Platform, UX, integrations, B2B capability, decoration tools. Customer journey mapped end to end. WCAG accessibility review included.' },
  { icon: GitBranch,    num: '04', title: 'Processes & Operations', desc: 'Every process mapped from order in to invoice out. Stock, fulfilment, and despatch reviewed. Quick wins separated from bigger projects. This is where the operations audit finds the friction that software alone cannot fix — undocumented steps, manual bridges, and processes that have never been questioned.' },
  { icon: TrendingUp,   num: '05', title: 'Growth & Opportunity',   desc: "Revenue lines with most potential identified. New channels and markets assessed. Technology roadmap built for where you're going, not where you've been." },
  { icon: Sparkles,     num: '06', title: 'AI Readiness',           desc: "The AI readiness assessment within the audit covers where AI could genuinely help your specific operation. What needs to be in place first. An honest view — not a tool sale." },
];

const processSteps = [
  { num: '01', detail: 'Free \u00B7 60 minutes', title: 'Discovery call',       desc: 'A 60-minute call before I arrive. I learn enough to make the day on site as useful as possible.' },
  { num: '02', detail: 'On-site',               title: 'One day in your business', desc: 'I follow your processes — not interview people about them. Six areas. Every system touched. Every step observed.' },
  { num: '03', detail: '5 working days',         title: 'Written report',        desc: 'Every finding documented. Every issue quantified in time and cost. Prioritised by impact, not alphabetically.' },
  { num: '04', detail: 'Included',               title: 'Debrief call',          desc: "We walk through the findings together. You ask everything. I give you the unfiltered version." },
];

const deliverables = [
  'A written audit report (not a slide deck)',
  'Every issue quantified in time and money',
  'Prioritised recommendations — quick wins first',
  'An independent vendor brief if new software is needed',
  'A debrief call to walk through everything',
  'Follow-up support for 30 days after delivery',
];

const nextSteps = [
  { icon: Zap,       title: 'Deliver',    href: '/deliver',    desc: 'A fixed-scope project to implement the highest-impact recommendations from your Discovery Day report.' },
  { icon: Settings,  title: 'Transform',  href: '/transform',  desc: 'A longer engagement to overhaul systems, processes, and technology across the business.' },
  { icon: Users,     title: 'Retained',   href: '/retained',   desc: 'Monthly strategic and operational leadership — roadmap ownership, vendor management, ongoing.' },
];

const claritySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Discovery Day',
      description: 'A one-day on-site technology and operations audit for print, embroidery, and decoration businesses. Written assessment within 5 working days.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      serviceType: 'Operational and Technology Audit',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/clarity',
    },
    {
      '@type': 'HowTo',
      name: 'How Discovery Day Works',
      description: 'A one-day on-site technology and operations audit for print, embroidery, and decoration businesses, delivering a written assessment within 5 working days.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Discovery call', text: 'A free 60-minute call before the on-site day. Craig learns enough about your business to make the day as useful as possible.' },
        { '@type': 'HowToStep', position: 2, name: 'One day in your business', text: 'Craig follows your processes — not interviews people about them. Six areas. Every system touched. Every step observed.' },
        { '@type': 'HowToStep', position: 3, name: 'Written assessment', text: 'Every finding documented. Every issue quantified in time and cost. Prioritised by impact, delivered within 5 working days.' },
        { '@type': 'HowToStep', position: 4, name: 'Debrief call', text: 'A call to walk through the findings together. Every question answered. The unfiltered version.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Discovery Day cover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Discovery Day covers six areas: IT infrastructure (security, connectivity, identity management, and IT costs), software and systems (every tool in use assessed), eCommerce and digital (platform, UX, integrations, and B2B capability), processes and operations (every process mapped from order to invoice), growth and opportunity (revenue lines with most potential, new channels, technology roadmap), and AI readiness (where AI could genuinely help your specific operation).' },
        },
        {
          '@type': 'Question',
          name: 'How much does Discovery Day cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Discovery Day is a single fixed fee, invoiced 50% on booking and 50% on delivery of the written assessment — get in touch and Craig will give you the exact figure on the first call. If it does not deliver something you can act on, there is no obligation to proceed to anything further. If you go on to a Deliver or Transform engagement within 60 days of the written assessment, the fee is credited against your first invoice.' },
        },
        {
          '@type': 'Question',
          name: 'How long does Discovery Day take?',
          acceptedAnswer: { '@type': 'Answer', text: 'The audit itself takes one day on site. You then receive a written assessment within 5 working days, followed by a debrief call included in the fee. A free 60-minute discovery call happens before the on-site day.' },
        },
        {
          '@type': 'Question',
          name: 'What do I receive at the end of Discovery Day?',
          acceptedAnswer: { '@type': 'Answer', text: 'You receive a written assessment (not a slide deck) with every issue quantified in time and money, prioritised recommendations with quick wins first, an independent vendor brief if new software is needed, a debrief call to walk through everything, and 30 days of follow-up support after delivery.' },
        },
        {
          '@type': 'Question',
          name: 'What is included in a one-day technology audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'Discovery Day covers IT infrastructure, software and systems, eCommerce and digital, processes and operations, growth opportunity, and AI readiness. Every area is assessed on site in a single day. You receive a written assessment within 5 working days with every finding quantified in time and money.' },
        },
        {
          '@type': 'Question',
          name: 'Is this an IT audit, a software audit, or an operations audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'It is all three. Discovery Day is a combined IT audit, software audit, and operations audit delivered in a single day. The reason for covering all three together is that the problems rarely live in just one area — technology choices affect process efficiency, and process gaps drive software decisions.' },
        },
        {
          '@type': 'Question',
          name: 'Can a technology audit help with eCommerce integration problems?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. eCommerce is one of the six areas covered in every Discovery Day. The audit assesses your eCommerce platform, how it connects to your ERP or order management system, where the gaps are, and what a realistic fix looks like — with costs.' },
        },
      ],
    },
  ],
};

export default function ClarityPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Discovery Day', url: 'https://decodedops.co.uk/clarity' },
      ]} />
      <JsonLd data={claritySchema} />
      {/* 3× GUARANTEE */}
      <section className="py-6 bg-[#219EBC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <blockquote className="italic text-lg lg:text-xl text-[#023047] font-medium">
              "If the written assessment doesn&apos;t give you something you can act on, you&apos;re not obligated to go any further. No conditions. No questions."
            </blockquote>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; Discovery Day &middot; On-Site Audit &amp; Written Plan</span>
              </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                  One day. A complete technology audit. <span className="text-[#219EBC]">Everything it costs you</span> in writing within five working days.
                </h1>
                <p className="text-lg text-[#023047]/70 leading-relaxed mb-4 max-w-xl">
                  A structured technology audit and operations review — independent, on site, and delivered in writing. Not a workshop. Not a proposal. A real audit — followed, observed, and quantified. <strong className="text-[#023047]">One fixed fee, no surprises.</strong>
                </p>
                <p className="text-sm text-[#023047]/50 mb-8">By Craig Blackman — 25 years in print &amp; embroidery operations</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  Book your Discovery Day call <ArrowRight size={18} />
                </Link>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#219EBC] hover:text-[#023047] font-medium inline-flex items-center gap-1 mt-3">Or book a call directly <ArrowRight size={14} /></a>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden ring-1 ring-[#023047]/10 shadow-lg">
                <DiscoveryDaySchematic />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIX AUDIT AREAS */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; What gets audited</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">Six areas. Every time.</h2>
            <p className="text-[#023047]/70 text-lg">The same six areas are covered in every audit — because in this sector, the problems always live in the same places.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditAreas.map(area => {
              const Icon = area.icon;
              return (
                <div key={area.num} className="group p-6 rounded-2xl border border-[#8ECAE6]/40 hover:border-[#219EBC]/40 hover:shadow-md transition-all duration-300 bg-[#F8F9FA]">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#219EBC]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#219EBC]" />
                    </div>
                    <span className="text-3xl font-bold text-[#8ECAE6]">{area.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#023047] mb-2">{area.title}</h3>
                  <p className="text-sm text-[#023047]/70 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">&mdash; The process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">What happens, step by step</h2>
            <p className="text-[#8ECAE6] text-lg">From your first call through to the debrief — what to expect at every stage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 hover:bg-white/[0.08] transition-colors">
                <div className="text-5xl font-bold text-[#219EBC]/30 mb-4">{step.num}</div>
                <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#219EBC]/20 mb-3">
                  <span className="text-xs text-[#219EBC] font-medium">{step.detail}</span>
                </div>
                <h3 className="text-xl font-bold text-[#F8F9FA] mb-3">{step.title}</h3>
                <p className="text-[#8ECAE6] text-sm leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-[#219EBC]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#023047] mb-4">Ready to find the right engagement?</h2>
          <p className="text-[#023047]/70 mb-8 max-w-xl mx-auto">Answer four quick questions and we&apos;ll point you to the most relevant option for your business.</p>
          <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
            See pricing options <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 lg:py-28 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; What you get</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-8">The deliverables</h2>
              <div className="space-y-4">
                {deliverables.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#219EBC] mt-0.5 flex-shrink-0" />
                    <span className="text-[#023047]/70">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  Book your Discovery Day call <ArrowRight size={18} />
                </Link>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#219EBC] hover:text-[#023047] font-medium inline-flex items-center gap-1 mt-3">Or book a call directly <ArrowRight size={14} /></a>
            </div>
            <div className="hidden lg:flex items-center justify-center p-8 rounded-2xl bg-[#023047]">
              <svg viewBox="0 0 280 220" className="w-full max-w-xs" aria-hidden="true">
                {/* Report document */}
                <rect x="40" y="20" width="200" height="160" rx="8" fill="#F8F9FA" />
                <rect x="40" y="20" width="200" height="28" rx="8" fill="#219EBC" />
                <rect x="40" y="40" width="200" height="8" fill="#219EBC" />
                {/* Doc title */}
                <text x="140" y="39" textAnchor="middle" fontSize="10" fontWeight="700" fill="#F8F9FA" fontFamily="Outfit, sans-serif">DISCOVERY DAY REPORT</text>
                {/* Lines of text */}
                {[60, 76, 92, 108, 124, 140, 156].map((y, i) => (
                  <rect key={y} x="60" y={y} width={i % 3 === 2 ? 100 : 160} height="7" rx="3"
                    fill="#8ECAE6" opacity={0.3 + (i * 0.05)} />
                ))}
                {/* Checkmarks */}
                {[68, 84, 100, 116, 132, 148].map((y, i) => (
                  <g key={y}>
                    <circle cx="52" cy={y} r="5" fill="#219EBC" opacity="0.7" />
                    <text x="52" y={y + 3.5} textAnchor="middle" fontSize="7" fill="white" fontWeight="700">&#x2713;</text>
                  </g>
                ))}
                {/* Bottom section — quantified */}
                <rect x="56" y="164" width="168" height="1" fill="#8ECAE6" opacity="0.3" />
                <text x="140" y="177" textAnchor="middle" fontSize="8" fill="#219EBC" fontWeight="700" fontFamily="Outfit, sans-serif">TOTAL RECOVERABLE VALUE</text>
                <text x="140" y="192" textAnchor="middle" fontSize="18" fill="#023047" fontWeight="800" fontFamily="Outfit, sans-serif">&pound;47,200</text>
                {/* Corner badge */}
                <circle cx="220" cy="26" r="16" fill="#023047" />
                <text x="220" y="22" textAnchor="middle" fontSize="7" fill="#219EBC" fontWeight="700" fontFamily="Outfit, sans-serif">5 DAY</text>
                <text x="220" y="31" textAnchor="middle" fontSize="6" fill="#8ECAE6" fontFamily="Outfit, sans-serif">turnaround</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER CLARITY? */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">&mdash; What comes next</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">What happens after Discovery Day?</h2>
            <p className="text-[#8ECAE6] text-lg">The audit gives you the full picture. These are the three ways to act on it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map(step => {
              const Icon = step.icon;
              return (
                <Link key={step.title} href={step.href} className="group p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 hover:bg-white/[0.08] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#219EBC]/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8F9FA] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#8ECAE6] leading-relaxed mb-4">{step.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#FFB703] group-hover:text-[#FB8500] transition-colors">
                    Learn more <ArrowRight size={15} />
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
