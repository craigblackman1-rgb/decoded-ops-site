import Link from 'next/link';
import { ArrowRight, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Get in touch</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
                Start with a free<br />
                <span className="text-[#219EBC]">60-minute call.</span>
              </h1>
              <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl">
                No sales pitch. No obligation. A direct conversation about your business, what&apos;s frustrating you, and whether there&apos;s something I can help with.
              </p>
              <div className="space-y-4">
                <a href="mailto:craig@decodedops.co.uk" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#219EBC]/10 flex items-center justify-center group-hover:bg-[#219EBC] transition-colors">
                    <Mail size={20} className="text-[#219EBC] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-[#023047]/50 mb-0.5">Email</div>
                    <div className="font-semibold text-[#023047] group-hover:text-[#219EBC] transition-colors">craig@decodedops.co.uk</div>
                  </div>
                </a>
                <a href="tel:+447735620603" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#219EBC]/10 flex items-center justify-center group-hover:bg-[#219EBC] transition-colors">
                    <Phone size={20} className="text-[#219EBC] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-[#023047]/50 mb-0.5">Phone</div>
                    <div className="font-semibold text-[#023047] group-hover:text-[#219EBC] transition-colors">07735 620 603</div>
                  </div>
                </a>
              </div>
            </div>
            {/* Form */}
            <div className="bg-white rounded-2xl border border-[#8ECAE6]/40 shadow-sm p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
                <MessageSquare size={12} className="text-[#023047]" />
                <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">Send a message</span>
              </div>
              <form className="space-y-4" action="mailto:craig@decodedops.co.uk" method="get" encType="text/plain">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-1.5">Your name</label>
                    <input type="text" name="name" placeholder="Jane Smith" className="w-full px-4 py-3 rounded-xl border border-[#8ECAE6]/50 bg-[#F8F9FA] text-[#023047] placeholder-[#8ECAE6] focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-1.5">Email address</label>
                    <input type="email" name="email" placeholder="jane@yourcompany.co.uk" className="w-full px-4 py-3 rounded-xl border border-[#8ECAE6]/50 bg-[#F8F9FA] text-[#023047] placeholder-[#8ECAE6] focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#023047] mb-1.5">Your business</label>
                  <input type="text" name="company" placeholder="What you do, roughly how big you are" className="w-full px-4 py-3 rounded-xl border border-[#8ECAE6]/50 bg-[#F8F9FA] text-[#023047] placeholder-[#8ECAE6] focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#023047] mb-1.5">What&apos;s going on</label>
                  <textarea name="message" rows={5} placeholder="Tell me about the situation — the system problems, the operational pain, the decision you're trying to make." className="w-full px-4 py-3 rounded-xl border border-[#8ECAE6]/50 bg-[#F8F9FA] text-[#023047] placeholder-[#8ECAE6] focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition-all text-sm resize-none" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors text-sm">
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT — dark */}
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— What to expect</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">How the first call works</h2>
            <p className="text-[#8ECAE6] text-lg">No preparation needed. Just turn up and tell me what&apos;s happening.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock,          title: '60 minutes',    desc: "That's all it takes to get a clear view of what's happening and whether I can help. No extended discovery process, no homework to complete." },
              { icon: MessageSquare,  title: 'Direct questions', desc: "I'll ask direct questions about your operation, your systems, and the things that are frustrating you. You'll get direct answers back — not a follow-up proposal." },
              { icon: ArrowRight,     title: 'A clear next step', desc: "At the end of the call, you'll know whether an audit makes sense, what it would involve, and what it would cost. No pressure. You decide what happens next." },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10">
                  <div className="w-10 h-10 rounded-xl bg-[#219EBC]/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F8F9FA] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8ECAE6] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
