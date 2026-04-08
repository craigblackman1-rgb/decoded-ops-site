import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sectors = [
  { emoji: '🧵', name: 'Garment decoration', desc: 'Embroidery, DTG, DTF, screen print, sublimation, heat transfer', href: '/sectors/garment-decoration' },
  { emoji: '🖨️', name: 'Print & promotional', desc: 'Printed merchandise, branded gifts, corporate giveaways', href: '/sectors/print-promotional' },
  { emoji: '👕', name: 'Workwear & teamwear', desc: 'Uniform supply and decoration, schoolwear, sportswear', href: '/sectors/workwear-teamwear' },
  { emoji: '🪧', name: 'Signs & graphics', desc: 'Printed signage, vehicle wraps, display graphics', href: '/sectors/signs-graphics' },
  { emoji: '🏆', name: 'Awards & engraving', desc: 'Personalised awards, trophies, medals, recognition products', href: '/sectors/awards-engraving' },
  { emoji: '📦', name: 'Labels & packaging', desc: 'Variable data print, compliance labels, bespoke packaging', href: '/sectors/labels-packaging' },
];

const differentiators = [
  {
    num: '01',
    title: 'Sector-native, not sector-curious',
    body: "I understand what a hoop size means in embroidery and why it affects your production schedule. I've lived the artwork sign-off loop, the blank sourcing dependency, the decoration queue. Not research. Experience.",
  },
  {
    num: '02',
    title: 'The translation gift',
    body: "I take what you're trying to describe — often half-formed, hard to articulate — and reflect it back as a clear path forward. Business owners feel understood in a way they haven't been before.",
  },
  {
    num: '03',
    title: 'Genuinely independent',
    body: "No referral fees. No vendor relationships. No agenda beyond what's right for your business. Every recommendation stands on its own merit — and I'll tell you when the answer is to change nothing.",
  },
];

const processSteps = [
  { num: '01', title: 'Audit & discover', body: 'One day on site. Six areas. Every process followed, not described.' },
  { num: '02', title: 'Diagnose & report', body: 'Written findings within 5 days. Every issue quantified in time and cost.' },
  { num: '03', title: 'Recommend & brief', body: "Independent vendor brief. You go to market on your terms, not theirs." },
  { num: '04', title: 'Oversee & deliver', body: 'Vendors held to the brief. I act as your central point of contact throughout.' },
];

const stats = [
  { value: '25+', label: 'Years in the sector' },
  { value: '£150k+', label: 'Client losses prevented' },
  { value: '3×', label: 'Money-back guarantee' },
  { value: '100%', label: 'Independent — no vendor ties' },
];

const testimonials = [
  {
    quote: "We'd been wrestling with our ERP for two years. Craig spent one day on site and found three things we'd never have seen ourselves. The report paid for itself in the first month.",
    name: 'Sarah T.',
    role: 'MD, Workwear business, Midlands',
  },
  {
    quote: "What I valued most was the honesty. He told us one of the systems we were about to buy wasn't right for us — that kind of independence is rare and it saved us a significant amount of money.",
    name: 'James M.',
    role: 'Owner, Promotional merchandise company',
  },
  {
    quote: "Finally someone who actually understands embroidery and how it affects everything downstream. The audit was the best £10k we've spent on the business.",
    name: 'Rachel B.',
    role: 'Director, Garment decoration studio',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            Operations &amp; technology consultancy
          </div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#393D3F] leading-tight mb-8 max-w-4xl">
            Your business sells a product.<br />
            Something happens to it{' '}
            <span className="text-[#62929E]">before it leaves the door.</span><br />
            That second part is where the complexity lives.
          </h1>
          <p className="text-xl font-light text-[#393D3F]/70 max-w-2xl leading-relaxed mb-10">
            I work with businesses that print, embroider, decorate, engrave, personalise, and manufacture. The ones where every order is potentially different — and the systems were never built to handle that. I make the technology make sense. In plain English.
          </p>
          <div className="flex flex-wrap gap-4 mb-20">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors font-semibold">
              Book your free 60-minute call <ArrowRight size={18} />
            </Link>
            <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C6C5B9] text-[#393D3F] rounded-lg hover:border-[#62929E] hover:text-[#62929E] transition-colors font-semibold">
              See how it works
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#C6C5B9]/20">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-4xl lg:text-5xl font-bold text-[#393D3F] mb-2">{s.value}</div>
                <div className="text-sm text-[#393D3F]/55 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTOR PILLS STRIP */}
      <div className="bg-[#393D3F] py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium tracking-widest uppercase text-[#FDFDFF]/40 min-w-[70px]">I work with</span>
          {sectors.map(s => (
            <Link key={s.href} href={s.href} className="text-xs text-[#FDFDFF]/70 border border-[#FDFDFF]/15 px-3 py-1.5 rounded-full hover:bg-[#62929E] hover:border-[#62929E] hover:text-[#FDFDFF] transition-all">
              {s.name}
            </Link>
          ))}
        </div>
      </div>

      {/* HOOK QUOTE */}
      <div className="bg-[#393D3F] py-16 px-6 text-center border-t border-[#FDFDFF]/10">
        <blockquote className="text-xl lg:text-2xl font-semibold text-[#FDFDFF] max-w-3xl mx-auto leading-relaxed mb-4">
          &ldquo;If I spent a day in your business looking at your systems, your processes, and your technology — how{' '}
          <span className="text-[#62929E]">confident</span> are you that I wouldn&apos;t find anything costing you money you don&apos;t know about?&rdquo;
        </blockquote>
        <p className="text-sm text-[#FDFDFF]/45">That question is worth sitting with. Most owners can&apos;t answer it honestly.</p>
      </div>

      {/* THREE DIFFERENTIATORS */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">Why Decoded Ops</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">Three things that make this different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map(d => (
              <div key={d.num} className="group p-8 rounded-2xl border border-[#C6C5B9]/30 hover:border-[#62929E] hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-[#C6C5B9] mb-5">{d.num}</div>
                <h3 className="font-bold text-[#393D3F] mb-3 text-lg">{d.title}</h3>
                <p className="text-sm text-[#393D3F]/60 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-4">One structured process. No lock-in.</h2>
          <p className="text-[#393D3F]/60 max-w-2xl mb-16">A proven methodology that combines sector knowledge with practical execution to deliver measurable outcomes.</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 relative">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center p-8">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[100px] h-0.5 bg-[#C6C5B9]/20 z-0" />
                )}
                <div className="w-16 h-16 rounded-full bg-[#62929E] text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#393D3F] mb-2">{step.title}</h3>
                <p className="text-sm text-[#393D3F]/55 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/audit" className="inline-flex items-center gap-2 text-sm font-semibold text-[#62929E] hover:text-[#546A7B] transition-colors">
              See the full audit process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">Sectors</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">Find your sector</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map(s => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-8 rounded-2xl border border-[#C6C5B9]/30 hover:border-[#62929E] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#62929E]/20 rounded-2xl flex items-center justify-center mb-6 text-2xl">{s.emoji}</div>
                <div className="font-bold text-[#393D3F] mb-2 text-lg">{s.name}</div>
                <div className="text-sm text-[#393D3F]/55 leading-relaxed mb-4">{s.desc}</div>
                <span className="text-sm font-semibold text-[#62929E] group-hover:text-[#546A7B] flex items-center gap-1 transition-colors">
                  See how I work with {s.name.toLowerCase()} businesses <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION — dark background */}
      <section className="py-24 lg:py-32 bg-[#393D3F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600')] bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#62929E] mb-4">Results</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">The numbers behind the work</h2>
          <p className="text-[#C6C5B9] max-w-xl mx-auto mb-16">Independent consultancy means every recommendation is made on merit alone. These are the results that follow.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-5xl lg:text-6xl font-bold mb-3">{s.value}</div>
                <div className="text-sm text-[#C6C5B9]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">Client testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-4">What clients say</h2>
          <p className="text-[#393D3F]/60 max-w-2xl mb-16">Real feedback from business owners in print, embroidery, workwear and promotional merchandise.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-[#C6C5B9]/30 bg-white shadow-sm">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#62929E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-[#393D3F]/70 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</blockquote>
                <div>
                  <div className="font-semibold text-[#393D3F] text-sm">{t.name}</div>
                  <div className="text-xs text-[#393D3F]/50">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY TEASER */}
      <section className="py-16 bg-[#393D3F]/5 border-t border-[#C6C5B9]/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-2">Case study</p>
            <h3 className="text-xl font-bold text-[#393D3F] mb-2">What happens when the audit doesn&apos;t come first.</h3>
            <p className="text-sm text-[#393D3F]/60">A print &amp; embroidery business. £150k+. 18 months. What a £10k audit would have prevented.</p>
          </div>
          <Link href="/case-study" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#393D3F] text-[#FDFDFF] text-sm font-semibold hover:bg-[#546A7B] transition-colors">
            Read the case study <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* GUARANTEE BANNER */}
      <section className="py-16 bg-[#62929E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">The 3× money-back guarantee</h3>
            <p className="text-white/80 max-w-xl">If the audit doesn&apos;t identify at least three times its cost in savings, inefficiencies, or risk — you don&apos;t pay. That&apos;s how confident I am in what a single day on site will find.</p>
          </div>
          <Link href="/audit" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#62929E] text-sm font-semibold hover:bg-[#FDFDFF]/90 transition-colors">
            See the full audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
