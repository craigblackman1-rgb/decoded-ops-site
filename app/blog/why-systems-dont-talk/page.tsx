import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SystemsCostBreakdown from '@/public/infographics/SystemsCostBreakdown';

export const metadata = {
  title: 'Why Systems Don\'t Talk (And What It Costs) | Decoded Ops',
  description: 'Understanding system integration failures in print and embroidery businesses. Why your ERP and eCommerce don\'t connect — and what that costs you every week.',
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
            Why Systems Don't Talk
            <span className="text-[#219EBC]"> (And What It Costs)</span>
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            The hidden cost of disconnected systems in print, embroidery, and decoration businesses.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>April 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">You know the feeling</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              An order comes in through your website. Someone in the office has to manually re-key it into your ERP because your eCommerce platform doesn't talk to it. A customer changes their delivery address. Three people have to be emailed to update the system. Stock levels are wrong because your warehouse management doesn't sync with your inventory. A despatch goes out with the wrong item because the picking system doesn't know what you actually have.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You've built a successful business. Your systems work. But they don't work <em>together</em>.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              The frustrating part? You're not alone. This is the most common operational problem I see in print, embroidery, workwear, and promotional merchandise businesses.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Hidden Cost</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Disconnected systems don't feel like a serious problem. They're just a workaround. A bit of manual work. Extra emails. The kind of friction you've learned to live with.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              But when you measure it, the numbers are staggering:
            </p>

            <SystemsCostBreakdown />
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              On a £2m business, that's roughly <strong>£40k–80k per year</strong> in lost productivity and error correction alone. Not including the customer dissatisfaction when orders go wrong.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Why This Happens</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Systems don't fail to talk to each other by accident. There's usually a reason:
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">1. They weren't chosen to work together</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your ERP was implemented 5 years ago. Your eCommerce platform was added last year because you needed to sell online. No one asked whether they could integrate. They just assumed they could.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The ERP vendor says "Yes, integration is possible." What they don't say is that it requires custom development, costs £15k, and takes 4 months.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">2. The integration was too expensive or complex</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You got a quote for the integration. It was £20k. Your eCommerce platform needed to be heavily customized. The timeline was uncertain. So you shelved it and accepted the manual workaround instead.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              That decision made sense at the time. But the cost of the workaround has compounded every month since.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">3. Your data isn't clean enough to integrate</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your ERP has 10 years of data in it, and a lot of it is messy. Duplicate products. Inconsistent naming conventions. Missing information. Before any integration can work, that data needs to be cleaned up—and that's a project in itself.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What Actually Happens</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Most businesses in this situation do one of three things:
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Option 1: Accept the workaround</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You keep doing the manual work. It becomes the cost of doing business. You hire someone to manage it. That person stays very busy but never feels like they're catching up.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Option 2: Try to build an integration without a plan</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You hire a developer or a systems integrator. They start building without a clear specification of what needs to happen. Six months in, you've spent £30k and it still doesn't work the way you expected. The project stalls.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Option 3: Replace one of the systems</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You decide the eCommerce platform was a mistake. You choose a different one that has better ERP integration. By the time you've migrated data, retrained staff, and got the new system live, you've spent £60k and lost 4 months of productivity.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">How to Fix It (Without Panicking)</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The good news: disconnected systems can almost always be fixed. The bad news: it requires honesty about what you actually have and what integration actually means.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Step 1: Understand what you have</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              What systems do you actually run? What does each one do? How do they connect (or not connect) today? Who's doing the manual work, and how much time is it taking?
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Step 2: Define what "integration" actually means</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Integration isn't a binary thing. It's not just "connected" or "disconnected." There are degrees of integration—and different levels cost different amounts.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Does your eCommerce platform need to push <em>every</em> order to your ERP automatically? Or just high-value orders? Does inventory need to sync in real time, or is a twice-daily batch update enough? Does every product attribute need to match, or just SKU and price?
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              These are design questions, not technical ones. But they determine whether your integration costs £5k or £50k.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-8 mb-4">Step 3: Decide on the approach</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Once you know what you have and what you need, you have options:
            </p>
            <ul className="space-y-3 my-6 pl-6 text-[#023047]/80">
              <li><strong>Native integration:</strong> If both systems have built-in connectors, use them</li>
              <li><strong>Middleware:</strong> A third-party platform that talks to both systems (Zapier, Make, etc.)</li>
              <li><strong>Custom integration:</strong> A developer builds the connection to your exact specification</li>
              <li><strong>Process redesign:</strong> Sometimes the cheapest fix is to change how the systems are <em>used</em>, not build an integration</li>
            </ul>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Right Starting Point</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The mistake most businesses make is jumping straight to "fix the systems" without understanding what they actually have or what they actually need.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The right starting point is to sit down with someone who understands both your business and your technology, and answer three questions:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li>What's actually broken about the way things work now?</li>
              <li>What would "fixed" look like?</li>
              <li>What's the cheapest way to get there?</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              That's what an operational audit does. Not a systems audit. Not a technical review. A business-focused conversation about what's costing you money and what you should do about it.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Want to know if your systems could integrate?</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                An operational audit identifies exactly what's costing you money — and what you should do about it. One day on site. Six areas. A written report with costed recommendations.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
