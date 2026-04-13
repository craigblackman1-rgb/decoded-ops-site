import Link from 'next/link';
import { ArrowRight, Phone, Shield, Wrench, Brain, MessageCircle, Search, FileText, Layers, Users } from 'lucide-react';
import { HeroGraphic } from '@/components/HeroGraphic';
import { SectorExpertiseGraphic } from '@/components/SectorExpertiseGraphic';

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const services = [
  { icon: Search,   name: 'Clarity',   subtitle: 'Operational & Technology Audit',       desc: 'One day on site. Six areas. A written report that tells you exactly what\u2019s happening, what it\u2019s costing you, and what to do about it.', href: '/clarity',   badge: 'Start here' as string | null },
  { icon: FileText, name: 'Deliver',   subtitle: 'Project Delivery & Vendor Management', desc: 'Independent vendor brief, procurement, and project oversight. One point of contact. The vendor delivers what your business actually needs.', href: '/deliver',   badge: null as string | null },
  { icon: Layers,   name: 'Transform', subtitle: 'Digital Transformation Programme',     desc: 'Multi-workstream programmes \u2014 ERP, eCommerce, process redesign. Process-led and people-first. Discovery required before scoping.', href: '/transform', badge: null as string | null },
  { icon: Users,    name: 'Retained',  subtitle: 'Fractional CTO / Head of Operations',  desc: 'Monthly strategic and operational leadership. Roadmap ownership. Vendor management. A direct line to Craig.', href: '/retained',  badge: null as string | null },
];

const statusQuoCosts = [
  { value: '3\u20136 hrs',  per: '/week', label: 'Lost to manual re-keying between disconnected systems' },
  { value: '3\u20135%',     per: '',       label: 'Of inbound stock at risk from disconnected inventory' },
  { value: '2\u20134 hrs',  per: '/week', label: 'Spent on manual invoicing and reconciliation' },
  { value: '1\u20133%',     per: '',       label: 'Of orders affected by picking and despatch errors' },
];

const differentiators = [
  { icon: Brain,          title: 'The Translation Gift',           desc: "I take what you\u2019re trying to convey \u2014 often half-formed, vague, hard to articulate \u2014 and reflect it back as a solution or a clear path forward. Business owners feel understood in a way they often haven\u2019t been before." },
  { icon: Wrench,         title: 'Out-of-the-Box Problem Solving', desc: "When a system can\u2019t do something, I don\u2019t accept the limitation. I find a different way \u2014 connecting things not designed to connect, reframing the problem so the existing tool handles it differently." },
  { icon: MessageCircle,  title: 'The Facilitation Gift',          desc: "In a mixed group \u2014 directors, warehouse staff, office teams \u2014 I ask the question that makes everyone stop. People adopt the result because they built it. That\u2019s how change actually sticks." },
];

const sectors = [
  { emoji: '\uD83E\uDDF5', name: 'Garment decoration',  href: '/sectors/garment-decoration' },
  { emoji: '\uD83D\uDDA8\uFE0F', name: 'Print & promotional', href: '/sectors/print-promotional' },
  { emoji: '\uD83D\uDC55', name: 'Workwear & teamwear', href: '/sectors/workwear-teamwear' },
  { emoji: '\uD83E\uDEA7', name: 'Signs & graphics',    href: '/sectors/signs-graphics' },
  { emoji: '\uD83C\uDFC6', name: 'Awards & engraving',  href: '/sectors/awards-engraving' },
  { emoji: '\uD83D\uDCE6', name: 'Labels & packaging',  href: '/sectors/labels-packaging' },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">
                  &mdash; Operations &amp; Technology Consultancy
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                The penny drop<span className="text-[#219EBC]"> moment.</span>
              </h1>

              <p className="text-lg text-[#023047]/70 leading-relaxed mb-4 max-w-xl">
                You know your business is losing money somewhere. You can feel the friction. The workarounds. The systems that don&apos;t talk to each other.
              </p>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">
                I help print, embroidery, workwear, and promotional merchandise businesses decode exactly what&apos;s happening in their operation &mdash; and build a clear plan to fix it. Plain English. No jargon. No vendor agenda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                  See how it works <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                  <Phone size={18} /> Book a free 60-min call
                </Link>
              </div>

              {/* Stats strip */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#023047]">25+</div>
                  <div className="text-sm text-[#023047]/70">Years in the sector</div>
                </div>
                <div className="w-px bg-[#8ECAE6]" />
                <div>
                  <div className="text-2xl font-bold text-[#023047]">3&times;</div>
                  <div className="text-sm text-[#023047]/70">Clarity guarantee</div>
                </div>
                <div className="w-px bg-[#8ECAE6]" />
                <div>
                  <div className="text-2xl font-bold text-[#023047]">100%</div>
                  <div className="text-sm text-[#023047]/70">Independent &mdash; no vendor agenda</div>
                </div>
              </div>
            </div>

            {/* Right column — system diagram */}
            <div className="hidden lg:flex items-center justify-center pb-6">
              <HeroGraphic />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTOR PILLS STRIP ───────────────────────────────────────────────── */}
      <div className="bg-[#023047] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium tracking-widest uppercase text-[#F8F9FA]/70 min-w-[70px]">I work with</span>
          {sectors.map(s => (
            <Link key={s.href} href={s.href} className="text-xs text-[#F8F9FA]/70 border border-[#F8F9FA]/15 px-3 py-1.5 rounded-full hover:bg-[#FFB703] hover:border-[#FFB703] hover:text-[#023047] transition-all">
              {s.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ── HOOK QUOTE ───────────────────────────────────────────────────────── */}
      <div className="bg-[#023047] py-16 px-6 text-center border-t border-[#F8F9FA]/10">
        <blockquote className="text-xl lg:text-2xl font-semibold text-[#F8F9FA] max-w-3xl mx-auto leading-relaxed mb-4">
          &ldquo;If I spent a day in your business looking at your systems, your processes, and your technology &mdash; how{' '}
          <span className="text-[#219EBC]">confident</span> are you that I wouldn&apos;t find anything costing you money you don&apos;t know about?&rdquo;
        </blockquote>
        <p className="text-sm text-[#F8F9FA]/70">That question is worth sitting with. Most owners can&apos;t answer it honestly.</p>
      </div>

      {/* ── THE COST OF STANDING STILL ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; The cost of standing still</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">What disconnected systems actually cost you</h2>
            <p className="text-[#023047]/70 text-lg">These are the numbers I see in businesses like yours, every week. Not hypothetical. Not worst-case. Just the quiet cost of systems that don&apos;t talk to each other.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statusQuoCosts.map(item => (
              <div key={item.label} className="p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/40 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-[#023047] mb-1">
                  {item.value}<span className="text-lg font-semibold text-[#023047]/50">{item.per}</span>
                </div>
                <p className="text-sm text-[#023047]/70 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#023047]/50 text-center">Based on operational audits across print, embroidery, workwear, and promotional merchandise businesses.</p>
        </div>
      </section>

      {/* ── ABOUT / WHY DECODED OPS ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

            {/* Left — sector expertise graphic */}
            <div className="order-2 lg:order-1">
              <SectorExpertiseGraphic />
            </div>

            {/* Right — content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">&mdash; About Craig Blackman</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-6">
                Someone from the industry.<br />Not parachuting in.
              </h2>
              <p className="text-[#023047]/70 text-lg leading-relaxed mb-4">
                I&apos;ve spent 25 years working inside the businesses I now advise &mdash; print, embroidery, workwear, promotional merchandise, and branded apparel. I&apos;ve been through what you&apos;re going through. I know where the money disappears and why the systems don&apos;t connect.
              </p>
              <p className="text-[#023047]/70 leading-relaxed mb-8">
                Most technology advice fails businesses like yours because it comes from people who&apos;ve never processed a decorated order in their life. I built Decoded Ops because product-based businesses with a decoration service deserve someone who genuinely understands their operation from the inside.
              </p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Start with a free 60-min call
              </Link>
            </div>

          </div>

          {/* Three differentiators */}
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map(d => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#8ECAE6]/40">
                  <div className="w-11 h-11 rounded-xl bg-[#219EBC]/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#219EBC]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#023047] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#023047]/70 leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOUR SERVICES ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">&mdash; The four services</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">Each standalone. Each a natural next step.</h2>
            <p className="text-[#8ECAE6] text-lg">The audit is the door, not the business. Every service works on its own &mdash; and connects to the next when the time is right.</p>
          </div>

          {/* Service connection flow */}
          <div className="flex flex-wrap items-center justify-start gap-2 mb-12">
            {services.map((s, i) => (
              <div key={s.name} className="flex items-center gap-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F8F9FA]/10 border border-[#F8F9FA]/20 text-sm font-semibold text-[#F8F9FA]">
                  {s.name}
                </span>
                {i < services.length - 1 && (
                  <ArrowRight size={16} className="text-[#219EBC] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map(s => {
              const Icon = s.icon;
              return (
                <Link key={s.name} href={s.href} className="group relative p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 hover:bg-white/[0.08] transition-colors">
                  {s.badge && (
                    <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#FFB703] text-[#023047] text-xs font-bold uppercase tracking-wider">
                      {s.badge}
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-xl bg-[#219EBC]/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#219EBC] mb-1">{s.name}</div>
                  <div className="text-sm font-medium text-[#8ECAE6] mb-3">{s.subtitle}</div>
                  <p className="text-sm text-[#8ECAE6]/80 leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#FFB703] group-hover:text-[#FB8500] transition-colors">
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Guarantee */}
          <div className="mt-12 flex items-start gap-3 p-6 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/20 max-w-2xl">
            <Shield size={20} className="text-[#219EBC] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-[#F8F9FA] mb-1">The 3&times; Clarity Guarantee</div>
              <p className="text-sm text-[#8ECAE6] leading-relaxed">If the report doesn&apos;t identify at least three times the fee in recoverable cost or lost revenue &mdash; the fee is refunded in full. No conditions. No questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY STATS — dark with dot-grid ──────────────────────────────── */}
      <section className="relative py-16 bg-[#023047] overflow-hidden border-t border-[#F8F9FA]/10">
        {/* SVG dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#219EBC" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#F8F9FA] mb-2">What the right technology does</h2>
            <p className="text-sm text-[#8ECAE6]">Published ERP implementation benchmarks, 2024.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '\u221223%', label: 'Operational costs' },
              { value: '\u221222%', label: 'Admin costs' },
              { value: '+24%',     label: 'On-time delivery' },
              { value: '91%',      label: 'Improved stock accuracy within 12 months' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#219EBC] mb-2">{stat.value}</div>
                <div className="text-sm text-[#8ECAE6]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY TEASER ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#023047]/5 border-t border-[#8ECAE6]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#023047] mb-2">Real example</p>
            <h3 className="text-xl font-bold text-[#023047] mb-2">What happens when the audit doesn&apos;t come first.</h3>
            <p className="text-sm text-[#023047]/70">A print &amp; embroidery business. &pound;154,000. 18 months. What a &pound;10k audit would have prevented.</p>
          </div>
          <Link href="/case-study" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#023047] text-[#F8F9FA] text-sm font-semibold hover:bg-[#023047]/90 transition-colors">
            Read the full breakdown <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-4">Ready to find out what&apos;s really going on?</h2>
          <p className="text-[#023047]/70 text-lg max-w-xl mx-auto mb-8">The discovery call is free, takes 60 minutes, and comes with no obligation. Just an honest conversation about your operation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
              See engagement options &amp; pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
