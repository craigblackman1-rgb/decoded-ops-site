import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EcommerceBreakdownChart from '@/public/infographics/EcommerceBreakdownChart';

export const metadata = {
  title: 'The eCommerce Integration Trap (For Decorated Apparel & Print Businesses) | Decoded Ops',
  description: 'Why standard eCommerce platforms fail for print, embroidery, and decoration businesses. The integration complexity you didn\'t anticipate.',
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
            The eCommerce Integration Trap
            <span className="text-[#219EBC]"> (For Decorated Apparel & Print Businesses)</span>
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            Why standard platforms fail. Where the complexity hides. What you should know before you buy.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>April 2026</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-8">
              You need to sell online. So you look at eCommerce platforms. Shopify looks simple. WooCommerce looks cheap. BigCommerce looks powerful. You pick one, set it up, and launch.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              Then the first 10 orders come in and you realize: your eCommerce platform doesn't understand your business.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Problem: You're Not a Generic Retailer</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Standard eCommerce platforms are built for businesses that sell finished products. You pick an item, you add to cart, you check out. The system assumes inventory is simple: you have X units, you ship them to the customer, you have X-1 units left.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your business is different. You don't just sell a product. You sell an <em>idea with customization</em>. An order isn't "1 x T-shirt." It's:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li>Blank garment (choose size, colour, fit)</li>
              <li>Decoration design (upload art, approve proof, revisions)</li>
              <li>Decoration method (embroidery vs print vs sublimation)</li>
              <li>Delivery location (multiple locations if it's a corporate order)</li>
              <li>Special packaging or instructions</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A standard eCommerce platform can handle steps 1 and 4. It can sort of handle step 5. But steps 2 and 3 break it completely.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Where It Breaks Down</h2>

            <EcommerceBreakdownChart />

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">The Customization Problem</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your customer uploads artwork. The system can't validate it (is it the right format? High enough resolution? Will it work for embroidery?). So you have to manually review every single order before you can start production. That's not efficiency. That's a manual workaround that defeats the purpose of having a website.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">The Inventory Problem</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Your blanks inventory is in your ERP. Your eCommerce platform doesn't know about it. So a customer orders a size-M red t-shirt and the system says it's in stock. Two hours later, your warehouse tells you you're actually out. You have to email the customer and apologize.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Even if you manually update inventory twice a day, you still have the 12-hour window where the system lies.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">The Workflow Problem</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              An order comes in. Your eCommerce system confirms payment and sends an order confirmation to the customer. But your production system hasn't seen it yet because the eCommerce platform doesn't talk to your ERP. So you have to manually log into the eCommerce system, find the order, and email it to your production team.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If you're efficient, this adds 2-3 minutes per order. On 50 orders a day, that's 2-3 hours of manual work every day.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">The Reporting Problem</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You want to know: "How many orders came through the website this month, versus from the phone?" Your eCommerce system has part of the answer. Your ERP has the rest. They don't talk to each other, so you manually piece together reports from both systems.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Integration False Promise</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              When you realize the eCommerce platform doesn't work as-is, you think: "I just need to integrate it with my ERP."
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You ask the eCommerce vendor: "Can you integrate with our ERP?" They say yes. You ask for a quote. It's £20k–50k. The timeline is 3–6 months. By now, you've already launched the website and your customers are experiencing the broken workflow.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              And here's the thing: even after the integration is built, the customization problem isn't solved. Your system still can't validate artwork or understand your production workflow. The integration just passes data between two systems that weren't designed for your business.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">What You Should Have Done Differently</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This doesn't mean you shouldn't have an eCommerce platform. It means you should have chosen differently.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">1. Start with your workflow, not the platform</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Map out your actual order process. From the moment a customer starts thinking about ordering, all the way through to delivery and invoice. What information do you need to collect? What decisions happen at each step? Where does customization happen?
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Once you know your workflow, you can evaluate whether a platform supports it. Most don't.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">2. Look for platforms built for your industry</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              There are eCommerce platforms specifically built for print, embroidery, and decorated apparel. They understand artwork upload. They understand customization. They integrate with production systems out of the box.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              They're not as trendy as Shopify. But they're cheaper to implement, they work faster, and they don't require a £40k integration project to talk to your ERP.
            </p>

            <h3 className="text-xl font-semibold text-[#023047] mt-10 mb-4">3. Require integration as a starting point, not an afterthought</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Before you buy any eCommerce platform, ask: "How does this integrate with our ERP?" And don't accept "it can integrate." Get specifics. What data syncs? How often? What's the cost? What happens if there's an error?
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">If You&apos;ve Already Made This Mistake</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              You're not alone. This is one of the most expensive mistakes I see in this sector. The good news: it's fixable.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The options are:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>Build the integration:</strong> Accept the cost and timeline. This is the "push through" approach.</li>
              <li><strong>Change the eCommerce platform:</strong> Switch to a platform designed for your industry. This has migration costs and pain, but it might be cheaper than the integration.</li>
              <li><strong>Optimise your current process:</strong> Live with the manual workflow, but make it more efficient. This isn't a solution—it's a temporary survival strategy while you plan for option 1 or 2.</li>
            </ol>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Not sure which option is right for your business?</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                This is exactly the kind of decision an audit helps with. We'll review your current setup, evaluate your platform options, and give you a clear recommendation—with costs.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a discovery call <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
