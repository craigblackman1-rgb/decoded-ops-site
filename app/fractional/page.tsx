import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const whatItIncludes = [
  'A defined number of days per month — agreed in advance',
  'Attendance at leadership and operations meetings',
  'Ownership of specific projects or workstreams',
  'Vendor management and technology procurement oversight',
  'Team coaching and process documentation',
  'A direct line to Craig — not a team of junior consultants',
];

const whenItFits = [
  {
    title: 'Post-audit implementation',
    body: 'The audit found the issues. Now you need someone to drive the fixes. Fractional ops gives you the hands-on delivery without a full-time hire.',
  },
  {
    title: 'ERP or technology transition',
    body: "You're implementing new software. You need someone who understands the sector, the vendors, and your business — and can hold everyone accountable.",
  },
  {
    title: 'Scaling without chaos',
    body: "Revenue is growing but the systems aren't keeping up. You need operational infrastructure built around how your business actually works.",
  },
  {
    title: 'Covering a gap',
    body: 'Your ops director has left, or you\'ve never had one. You need senior operational thinking without the £80k+ salary commitment.',
  },
];

export default function FractionalPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            Fractional ops director
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#393D3F] leading-tight mb-8 max-w-3xl">
            Senior operational thinking.<br />
            <span className="text-[#62929E]">Without the full-time cost.</span>
          </h1>
          <p className="text-xl font-light text-[#393D3F]/70 max-w-2xl leading-relaxed mb-10">
            For businesses that have found the problems and need someone to own the fixes. A defined number of days per month. Full senior involvement. No junior handoff.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors font-semibold">
              Talk about your situation <ArrowRight size={18} />
            </Link>
            <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C6C5B9] text-[#393D3F] rounded-lg hover:border-[#62929E] hover:text-[#62929E] transition-colors font-semibold">
              Start with the audit
            </Link>
          </div>
        </div>
      </section>

      {/* WHEN IT FITS */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">When it fits</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">Four situations where fractional ops makes sense</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whenItFits.map(item => (
              <div key={item.title} className="group p-8 rounded-2xl border border-[#C6C5B9]/30 bg-[#FDFDFF] hover:border-[#62929E] hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-[#393D3F] mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-[#393D3F]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT INCLUDES */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">What&apos;s included</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">What fractional ops actually looks like</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {whatItIncludes.map(item => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#62929E] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#393D3F]/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62929E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">Let&apos;s talk about what you need</h3>
            <p className="text-white/80 max-w-xl">Fractional engagements are structured around your specific situation. The first call is free and takes 60 minutes.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#62929E] text-sm font-semibold hover:bg-[#FDFDFF]/90 transition-colors">
            Book a free call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
