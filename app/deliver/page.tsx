import Link from 'next/link';
import { ArrowRight, FileText, Search, Users, Shield, CheckCircle2 } from 'lucide-react';
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
              <svg viewBox="0 0 500 400" className="w-full h-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
                {/* Left side: YOU & BRIEF */}
                <g>
                  {/* Client circle */}
                  <circle cx="80" cy="100" r="35" fill="#023047" opacity="0.1" stroke="#023047" strokeWidth="2"/>
                  <text x="80" y="95" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#023047">YOU</text>
                  <text x="80" y="115" textAnchor="middle" fontSize="12" fill="#023047" opacity="0.7">Your needs</text>

                  {/* Brief document */}
                  <rect x="30" y="180" width="100" height="130" rx="8" fill="none" stroke="#219EBC" strokeWidth="2" strokeDasharray="5,5"/>
                  <text x="80" y="210" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#219EBC">THE BRIEF</text>
                  <line x1="40" y1="225" x2="120" y2="225" stroke="#219EBC" strokeWidth="1" opacity="0.5"/>
                  <line x1="40" y1="240" x2="120" y2="240" stroke="#219EBC" strokeWidth="1" opacity="0.5"/>
                  <line x1="40" y1="255" x2="120" y2="255" stroke="#219EBC" strokeWidth="1" opacity="0.5"/>
                  <line x1="40" y1="270" x2="110" y2="270" stroke="#219EBC" strokeWidth="1" opacity="0.5"/>
                  <text x="80" y="295" textAnchor="middle" fontSize="11" fill="#023047" opacity="0.6">Your terms</text>

                  {/* Arrow down from YOU to BRIEF */}
                  <path d="M 80 140 L 80 175" stroke="#219EBC" strokeWidth="2" fill="none" markerEnd="url(#arrowHead)"/>
                </g>

                {/* Center: OVERSIGHT & CONTROL */}
                <g>
                  {/* Shield/control element */}
                  <circle cx="250" cy="130" r="45" fill="none" stroke="#FFB703" strokeWidth="2.5"/>
                  <path d="M 250 90 L 290 110 L 290 150 C 290 170 250 185 250 185 C 250 185 210 170 210 150 L 210 110 Z"
                        fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinejoin="round"/>
                  <text x="250" y="135" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFB703">CONTROL</text>

                  {/* Checkmark for success */}
                  <circle cx="250" cy="280" r="40" fill="none" stroke="#219EBC" strokeWidth="3"/>
                  <path d="M 230 275 L 245 290 L 270 260" stroke="#219EBC" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="250" y="335" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#219EBC">DELIVERED</text>
                </g>

                {/* Right side: VENDOR & BUILD */}
                <g>
                  {/* Vendor circle */}
                  <circle cx="420" cy="100" r="35" fill="#8ECAE6" opacity="0.15" stroke="#8ECAE6" strokeWidth="2"/>
                  <text x="420" y="100" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#023047">⚙</text>
                  <text x="420" y="120" textAnchor="middle" fontSize="12" fill="#023047" opacity="0.7">Vendor build</text>

                  {/* Build/execution box */}
                  <rect x="370" y="180" width="100" height="130" rx="8" fill="none" stroke="#8ECAE6" strokeWidth="2"/>
                  <text x="420" y="210" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#8ECAE6">THE BUILD</text>
                  <line x1="380" y1="225" x2="460" y2="225" stroke="#8ECAE6" strokeWidth="1" opacity="0.5"/>
                  <line x1="380" y1="240" x2="460" y2="240" stroke="#8ECAE6" strokeWidth="1" opacity="0.5"/>
                  <line x1="380" y1="255" x2="460" y2="255" stroke="#8ECAE6" strokeWidth="1" opacity="0.5"/>
                  <line x1="380" y1="270" x2="450" y2="270" stroke="#8ECAE6" strokeWidth="1" opacity="0.5"/>
                  <text x="420" y="295" textAnchor="middle" fontSize="11" fill="#023047" opacity="0.6">Their execution</text>

                  {/* Arrow down from VENDOR to BUILD */}
                  <path d="M 420 140 L 420 175" stroke="#8ECAE6" strokeWidth="2" fill="none" markerEnd="url(#arrowHead2)"/>
                </g>

                {/* Connecting flows */}
                {/* BRIEF to CONTROL */}
                <path d="M 135 240 Q 180 200 205 160" stroke="#219EBC" strokeWidth="2.5" fill="none" strokeDasharray="4,4" opacity="0.6"/>

                {/* CONTROL to BUILD */}
                <path d="M 295 160 Q 350 200 365 240" stroke="#FFB703" strokeWidth="2.5" fill="none" strokeDasharray="4,4" opacity="0.6"/>

                {/* Both to SUCCESS (convergence) */}
                <path d="M 130 310 Q 190 310 210 315" stroke="#219EBC" strokeWidth="2" fill="none" opacity="0.5"/>
                <path d="M 370 310 Q 310 310 290 315" stroke="#219EBC" strokeWidth="2" fill="none" opacity="0.5"/>

                {/* Arrow markers */}
                <defs>
                  <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10" stroke="#219EBC" strokeWidth="2" fill="none"/>
                  </marker>
                  <marker id="arrowHead2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10" stroke="#8ECAE6" strokeWidth="2" fill="none"/>
                  </marker>
                </defs>
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

      {/* CASE STUDY HOOK */}
      <section className="py-16 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link href="/case-study" className="group inline-block">
            <p className="text-4xl lg:text-5xl font-bold text-[#023047] mb-2 group-hover:text-[#219EBC] transition-colors">
              &pound;154,000. 18 months. No vendor brief.
            </p>
            <p className="text-[#219EBC] font-semibold flex items-center justify-center gap-2">
              Read the case study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>
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
