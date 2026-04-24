import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import VendorQuestionsGuide from '@/public/infographics/VendorQuestionsGuide';

export const metadata = {
  title: '5 Questions Vendors Won\'t Like (But Your Business Needs Answered) | Decoded Ops',
  description: 'The questions to ask your ERP, eCommerce, and software vendors that they\'ll try to dodge — and why you need to ask them anyway.',
};

export default function BlogPost() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            5 Questions Vendors Won't Like
            <span className="text-[#219EBC]"> (But Your Business Needs Answered)</span>
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            The questions to ask before signing any software contract.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>April 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-6 text-lg italic">
              Software vendors are good at saying yes. They're very good at it. They'll say yes to almost anything if it gets you to sign.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              The problem is that "yes" at the beginning often becomes "that's not included in your plan" or "that requires custom development" or "actually, that's not how the system works" once you're live and dependent on them.
            </p>

            <VendorQuestionsGuide />

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">1. "Can you show me a business like ours that successfully integrated this system with our ERP?"</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Watch what happens when you ask this. The vendor will often go quiet. They'll talk about the <em>capability</em> to integrate with your ERP. But they won't name a customer who actually did it.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This tells you everything. If they can't point to a real example in a real business like yours, the integration probably required so much customization that it's not a repeatable process. And that means you're paying for a one-off, expensive project—not buying a plug-and-play feature.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">2. "What happens to my data if I leave?"</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Can you get your data out in a standard format? Can you take your customer information, order history, and financial data and move it to another system?
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Many vendors want to make this very difficult (so you never leave). They'll say things like "we can export it as a CSV in 6 weeks" or "there's a migration fee" or "some data isn't extractable."
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If they're cagey about this, it means they've built a lock-in. And lock-in always costs money eventually.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">3. "If I hit a problem that your support team can't solve in two weeks, what's my option?"</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You're going to have problems. That's not an if, it's a when. The question is: what can you do when the vendor's support team is stumped?
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Can you hire a third-party consultant? Can you access the source code if you need custom fixes? Or are you completely dependent on the vendor's timeline?
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If you're completely dependent, you've just handed over control of your business operations. That's a risk.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">4. "How much will the implementation cost, and what happens if we go over budget or timeline?"</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The vendor will give you a quote. They'll also tell you it's an estimate. What they won't tell you upfront is what happens if you go over.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If the quote is £20k and you end up at £40k because of unexpected customizations, who pays for it? Is there a cap? Is there a "time and materials" escalation clause buried in the contract?
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Get this in writing before you sign anything. And ask specifically: "What is the trigger for additional costs?" Most of the time, the answer is "scope creep"—which means you asked for something slightly different than what was originally quoted, and now you're paying for it.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">5. "Can you show me the contract for someone else who did a similar implementation?"</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This is bold. But vendors know other vendors. They've done this before. They can almost certainly show you a reference contract.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Why do this? Because contracts are where vendors hide things. The sales person will tell you one thing. But the contract will have escape clauses, liability caps, and terms that contradict what you were told.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Seeing a real contract—even anonymized—tells you what you're actually signing up for. And you can ask your solicitor to review it before you commit.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What These Questions Do</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              These five questions separate vendors who are confident in their product from vendors who are confident in their sales pitch.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A good vendor will answer these clearly. They'll give you examples. They'll talk about risks honestly. They'll put things in writing.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A vendor who won't answer these questions, or who gives vague answers, or who says "that's a great question for the implementation team," is telling you that they're not confident. And that's worth knowing before you sign a three-year contract.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Bottom Line</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Vendors don't like these questions because they force specificity. They prefer to stay at the level of "we can do that" rather than "here's how we did it for someone just like you, and here's what it cost."
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              But specificity is the only thing that protects you. The details are where the problems live. And the vendors who won't give you details are telling you something important about who they are.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Choosing the wrong system is expensive. Getting it right starts with asking the right questions.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                Before you talk to any vendor, talk to someone who's been on the other side of these conversations. An audit covers what you have, what you need, and what your options actually are.
              </p>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                See Clarity <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
