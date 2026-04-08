import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            Get in touch
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#393D3F] leading-tight mb-8 max-w-3xl">
            Start with a free<br />
            <span className="text-[#62929E]">60-minute call.</span>
          </h1>
          <p className="text-xl font-light text-[#393D3F]/70 max-w-2xl leading-relaxed">
            No sales pitch. No obligation. A direct conversation about your business, what&apos;s frustrating you, and whether there&apos;s something I can help with.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
            {/* Contact details */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-6">Direct contact</p>
              <div className="space-y-6">
                <a href="mailto:craig@decodedops.co.uk" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#62929E]/20 flex items-center justify-center group-hover:bg-[#62929E] transition-colors">
                    <Mail size={20} className="text-[#62929E] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-[#393D3F]/50 mb-0.5">Email</div>
                    <div className="font-semibold text-[#393D3F] group-hover:text-[#62929E] transition-colors">craig@decodedops.co.uk</div>
                  </div>
                </a>
                <a href="tel:+447735620603" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#62929E]/20 flex items-center justify-center group-hover:bg-[#62929E] transition-colors">
                    <Phone size={20} className="text-[#62929E] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-[#393D3F]/50 mb-0.5">Phone</div>
                    <div className="font-semibold text-[#393D3F] group-hover:text-[#62929E] transition-colors">07735 620 603</div>
                  </div>
                </a>
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">What to expect</p>
                <div className="space-y-3 text-sm text-[#393D3F]/60 leading-relaxed">
                  <p>The first call is 60 minutes. We talk about your business — the frustrations, the systems, the things that are costing you time you can&apos;t account for.</p>
                  <p>I&apos;ll ask direct questions and give direct answers. If I can help, I&apos;ll tell you how. If I can&apos;t, I&apos;ll tell you that too.</p>
                  <p>No proposal sent without discussion. No follow-up chase. You decide what happens next.</p>
                </div>
              </div>
            </div>

            {/* Form placeholder */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-6">Send a message</p>
              <form className="space-y-4" action="mailto:craig@decodedops.co.uk" method="get" encType="text/plain">
                <div>
                  <label className="block text-sm font-medium text-[#393D3F] mb-1.5">Your name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-lg border border-[#C6C5B9]/50 bg-white text-[#393D3F] placeholder-[#C6C5B9] focus:outline-none focus:ring-2 focus:ring-[#62929E] focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#393D3F] mb-1.5">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@yourcompany.co.uk"
                    className="w-full px-4 py-3 rounded-lg border border-[#C6C5B9]/50 bg-white text-[#393D3F] placeholder-[#C6C5B9] focus:outline-none focus:ring-2 focus:ring-[#62929E] focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#393D3F] mb-1.5">Your business</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="What you do, roughly how big you are"
                    className="w-full px-4 py-3 rounded-lg border border-[#C6C5B9]/50 bg-white text-[#393D3F] placeholder-[#C6C5B9] focus:outline-none focus:ring-2 focus:ring-[#62929E] focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#393D3F] mb-1.5">What&apos;s going on</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about the situation — the system problems, the operational pain, the decision you're trying to make."
                    className="w-full px-4 py-3 rounded-lg border border-[#C6C5B9]/50 bg-white text-[#393D3F] placeholder-[#C6C5B9] focus:outline-none focus:ring-2 focus:ring-[#62929E] focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors font-semibold text-sm"
                >
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
