import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Search, Users, Shield, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Project Delivery & Vendor Management | Decoded Ops',
  description: 'Independent vendor briefs, procurement support, and project oversight for technology implementations. One point of contact. Delivered on your terms.',
  alternates: { canonical: '/deliver' },
  openGraph: {
    type: 'website',
    title: 'Project Delivery & Vendor Management | Decoded Ops',
    description: 'Independent vendor briefs, procurement support, and project oversight for technology implementations. One point of contact. Delivered on your terms.',
    url: 'https://decodedops.co.uk/deliver',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Delivery & Vendor Management | Decoded Ops',
    description: 'Independent vendor briefs, procurement support, and project oversight. One point of contact. Delivered on your terms.',
  },
};

const deliverSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Deliver service?',
      acceptedAnswer: { '@type': 'Answer', text: 'Deliver is independent vendor management for technology implementations. Craig writes the vendor brief based on your requirements, approaches vendors on your behalf, manages the procurement process as a single point of contact, and oversees the project through to final handover — ensuring milestones are signed off before payments are released.' },
    },
    {
      '@type': 'Question',
      name: 'How does Deliver protect against overspending on software projects?',
      acceptedAnswer: { '@type': 'Answer', text: 'Milestones are signed off before payments are released. Vendors are held to the brief, changes are challenged, and Craig acts as your independent representative throughout. The brief comes before the vendor — separating what you actually need from what a vendor wants to sell you.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to do the Clarity Audit before Deliver?',
      acceptedAnswer: { '@type': 'Answer', text: "You don't have to, but Clarity produces the vendor brief that Deliver uses. Starting with the Clarity Audit means the vendor brief reflects what your business actually needs — rather than assumptions made at the start of a project." },
    },
  ],
};
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';

const processSteps = [
  { icon: FileText, num: '01', title: 'Brief',   desc: 'I write the vendor brief based on your Clarity report or existing requirements. Your needs, not the vendor\u2019s sales pitch.' },
  { icon: Search,   num: '02', title: 'Procure',  desc: 'I go to market on your behalf. Vendors are approached, managed, and compared on a like-for-like basis. No commitment until you\u2019ve reviewed all options.' },
  { icon: Users,    num: '03', title: 'Manage',   desc: 'I act as your single point of contact. Vendors are held to the brief. Changes are challenged. Progress is reviewed and documented.' },
  { icon: Shield,   num: '04', title: 'Deliver',  desc: 'Milestones are signed off before payments are released. Final handover review and acceptance. The project is done when it works, not when the vendor says it\u2019s done.' },
];

const includedItems = [
  'Independent vendor brief written on your terms',
  'Vendors approached and managed on your behalf',
  'Competitive like-for-like quotes secured',
  'Vendor comparison and recommendation',
  'Single point of contact across all vendors',
  'Structured progress reviews and written summaries',
  'Milestone sign-off before payments released',
  'Final handover review and acceptance',
];

export default function DeliverPage() {
  return (
    <>
      <JsonLd data={deliverSchema} />
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; Deliver &middot; Project Delivery &amp; Vendor Management</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                The right vendor. The right outcome. <span className="text-[#219EBC]">On your terms.</span>
              </h1>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">
                Solution architecture, vendor brief, procurement, and project oversight. I own the outcome without doing the build &mdash; so the vendor delivers what your business actually needs.
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
            <div className="hidden lg:flex items-center justify-center p-6 rounded-2xl bg-[#023047]/5 border border-[#8ECAE6]/30 min-h-96">
              <svg viewBox="0 0 600 420" className="w-full h-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="briefGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#219EBC" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#219EBC" stopOpacity="0.05"/>
                  </linearGradient>
                  <linearGradient id="buildGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8ECAE6" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#8ECAE6" stopOpacity="0.02"/>
                  </linearGradient>
                </defs>

                {/* Left: YOU & BRIEF */}
                <g>
                  {/* Decorative circle */}
                  <circle cx="100" cy="90" r="32" fill="none" stroke="#219EBC" strokeWidth="1.5" opacity="0.3"/>
                  <circle cx="100" cy="90" r="26" fill="#219EBC" opacity="0.08"/>

                  {/* YOU label */}
                  <text x="100" y="96" textAnchor="middle" fontSize="16" fontWeight="700" fill="#023047">YOU</text>

                  {/* Brief box */}
                  <g>
                    <rect x="40" y="160" width="120" height="160" rx="12" fill="url(#briefGrad)" stroke="#219EBC" strokeWidth="2"/>
                    <rect x="44" y="164" width="112" height="40" rx="8" fill="#219EBC" opacity="0.08"/>
                    <text x="100" y="187" textAnchor="middle" fontSize="13" fontWeight="700" fill="#219EBC">THE BRIEF</text>
                    <line x1="50" y1="210" x2="150" y2="210" stroke="#219EBC" strokeWidth="1" opacity="0.3"/>
                    <line x1="50" y1="225" x2="150" y2="225" stroke="#219EBC" strokeWidth="1" opacity="0.3"/>
                    <line x1="50" y1="240" x2="135" y2="240" stroke="#219EBC" strokeWidth="1" opacity="0.3"/>
                    <text x="100" y="290" textAnchor="middle" fontSize="11" fontWeight="600" fill="#023047">Your requirements</text>
                  </g>

                  {/* Arrow down */}
                  <path d="M 100 130 L 100 160" stroke="#219EBC" strokeWidth="2.5" fill="none"/>
                  <path d="M 100 156 L 95 146 M 100 156 L 105 146" stroke="#219EBC" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </g>

                {/* Center: CONTROL & OVERSIGHT */}
                <g>
                  {/* Control sphere */}
                  <circle cx="300" cy="130" r="48" fill="none" stroke="#FFB703" strokeWidth="2.5" opacity="0.8"/>
                  <circle cx="300" cy="130" r="44" fill="#FFB703" opacity="0.06"/>
                  <circle cx="300" cy="130" r="38" fill="none" stroke="#FFB703" strokeWidth="1" opacity="0.4" strokeDasharray="2,3"/>

                  {/* Control label */}
                  <text x="300" y="124" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FFB703" letterSpacing="0.5">CONTROL &</text>
                  <text x="300" y="139" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FFB703" letterSpacing="0.5">OVERSIGHT</text>

                  {/* Success circle */}
                  <circle cx="300" cy="290" r="44" fill="none" stroke="#219EBC" strokeWidth="3" opacity="0.9"/>
                  <circle cx="300" cy="290" r="40" fill="#219EBC" opacity="0.05"/>
                  <path d="M 283 287 L 295 299 L 322 270" stroke="#219EBC" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="300" y="350" textAnchor="middle" fontSize="12" fontWeight="700" fill="#219EBC" letterSpacing="0.5">DELIVERED</text>

                  {/* Vertical flow line */}
                  <line x1="300" y1="182" x2="300" y2="242" stroke="#FFB703" strokeWidth="1.5" opacity="0.4" strokeDasharray="4,4"/>
                </g>

                {/* Right: VENDOR & BUILD */}
                <g>
                  {/* Decorative circle */}
                  <circle cx="500" cy="90" r="32" fill="none" stroke="#8ECAE6" strokeWidth="1.5" opacity="0.3"/>
                  <circle cx="500" cy="90" r="26" fill="#8ECAE6" opacity="0.06"/>

                  {/* VENDOR label */}
                  <text x="500" y="96" textAnchor="middle" fontSize="16" fontWeight="700" fill="#023047">VENDOR</text>

                  {/* Build box */}
                  <g>
                    <rect x="440" y="160" width="120" height="160" rx="12" fill="url(#buildGrad)" stroke="#8ECAE6" strokeWidth="2" opacity="0.8"/>
                    <rect x="444" y="164" width="112" height="40" rx="8" fill="#8ECAE6" opacity="0.06"/>
                    <text x="500" y="187" textAnchor="middle" fontSize="13" fontWeight="700" fill="#8ECAE6">THE BUILD</text>
                    <line x1="450" y1="210" x2="550" y2="210" stroke="#8ECAE6" strokeWidth="1" opacity="0.3"/>
                    <line x1="450" y1="225" x2="550" y2="225" stroke="#8ECAE6" strokeWidth="1" opacity="0.3"/>
                    <line x1="450" y1="240" x2="535" y2="240" stroke="#8ECAE6" strokeWidth="1" opacity="0.3"/>
                    <text x="500" y="290" textAnchor="middle" fontSize="11" fontWeight="600" fill="#023047">Their execution</text>
                  </g>

                  {/* Arrow down */}
                  <path d="M 500 130 L 500 160" stroke="#8ECAE6" strokeWidth="2.5" fill="none" opacity="0.7"/>
                  <path d="M 500 156 L 495 146 M 500 156 L 505 146" stroke="#8ECAE6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
                </g>

                {/* Connecting paths */}
                {/* BRIEF to CONTROL */}
                <path d="M 162 240 Q 220 200 250 160" stroke="#219EBC" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="3,3"/>

                {/* CONTROL to BUILD */}
                <path d="M 350 160 Q 400 200 440 240" stroke="#FFB703" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="3,3"/>

                {/* Bottom convergence */}
                <path d="M 162 320 Q 230 320 256 320" stroke="#219EBC" strokeWidth="1.5" fill="none" opacity="0.4"/>
                <path d="M 440 320 Q 370 320 344 320" stroke="#219EBC" strokeWidth="1.5" fill="none" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl lg:text-3xl font-bold text-[#F8F9FA] leading-snug mb-6">
              &ldquo;The most expensive technology decisions in this sector are made in the first meeting with a vendor &mdash; before anyone has written a brief.&rdquo;
            </blockquote>
            <p className="text-lg text-[#8ECAE6]">
              That is why Deliver exists. The brief comes first. The vendor comes second.
            </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">Brief first. Build second.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 hover:bg-white/[0.08] transition-colors">
                  <div className="text-5xl font-bold text-[#219EBC]/30 mb-4">{step.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#219EBC]/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8F9FA] mb-3">{step.title}</h3>
                  <p className="text-[#8ECAE6] text-sm leading-relaxed">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-[#219EBC]/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; What&apos;s included</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-8">Everything you need to get the right outcome</h2>
              <div className="space-y-4">
                {includedItems.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#219EBC] mt-0.5 flex-shrink-0" />
                    <span className="text-[#023047]/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-6">Ready to get the brief right?</h2>
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
