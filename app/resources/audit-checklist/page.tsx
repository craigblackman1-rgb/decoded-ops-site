import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';

export const metadata = {
  title: 'Operational Audit Checklist | Decoded Ops',
  description: 'A practical checklist to evaluate your operations, technology, and processes. Use this before you hire a consultant.',
};

const checklist = [
  {
    section: 'IT Infrastructure & Security',
    items: [
      'Do you know what happens to your data if a key team member leaves?',
      'Are backups automated, and do you test them quarterly?',
      'Do you have a password policy (not all passwords are the same across systems)?',
      'Who has access to your financial systems, and is it reviewed annually?',
      'Are you paying for software licenses you no longer use?',
      'Do you know what IT costs you annually (licenses, hardware, support)?',
    ]
  },
  {
    section: 'Systems & Software',
    items: [
      'List every system you use: ERP, eCommerce, accounting, CRM, MIS, etc. Do they integrate?',
      'For each system, do you know: cost per month, how many people use it, and when it was last updated?',
      'Are there manual workarounds in your workflow that are actually compensating for system limitations?',
      'Have you outgrown your current system, or are you making it work through effort?',
      'Is your ERP still being actively supported by the vendor, or are you on old versions?',
    ]
  },
  {
    section: 'eCommerce & Digital Sales',
    items: [
      'If you sell online, does your eCommerce platform talk to your ERP automatically?',
      'Can customers upload custom artwork, and can the system validate it?',
      'Is inventory in your eCommerce platform synced in real-time with your warehouse?',
      'Do you manually re-key orders from your website into your ERP?',
      'Are you losing orders or customers because your online process is broken?',
    ]
  },
  {
    section: 'Processes & Operations',
    items: [
      'Map your main workflows: order to invoice, stock to despatch, artwork to production. Are they documented?',
      'For each workflow, what are the manual steps that shouldn\'t be manual?',
      'How much time per week is spent on re-keying data, re-entering information, or manually reconciling systems?',
      'Do you have duplicate data entry anywhere (same information entered into two systems)?',
      'What process takes the longest, and why?',
      'If a key person leaves, would someone else know how their workflow actually works?',
    ]
  },
  {
    section: 'Inventory & Stock',
    items: [
      'How often do you do physical stock counts? How often do the numbers not match your system?',
      'Do you know the cost of holding excess inventory?',
      'Are there stock items you never use?',
      'How many orders are affected by stock-outs or inaccurate inventory each month?',
      'Is your inventory in one system or spread across multiple places (spreadsheets, warehouse notes, system)?',
    ]
  },
  {
    section: 'Costs & Financial',
    items: [
      'What are your total technology costs (software, licenses, hosting, support, IT staff)?',
      'Are you billing your customers accurately and capturing all billable work?',
      'Do you know your actual cost-per-order (including labor, materials, overhead)?',
      'Are there revenue leaks (jobs underpriced, orders not invoiced, discounts not tracked)?',
      'How long does it take from invoice to cash (days sales outstanding)?',
    ]
  },
  {
    section: 'Growth & Strategic',
    items: [
      'If you want to grow 20% next year, what technology or processes would need to change?',
      'Are there revenue lines (new products, new channels, new markets) you can\'t pursue with your current setup?',
      'What do your fastest-growing competitors do differently operationally?',
      'Are you ready to hire new staff, and would they be able to learn your workflows?',
    ]
  },
];

export default function ChecklistPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Free Resource</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Operational Audit Checklist
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            20 questions to evaluate your operations, technology, and processes. Use this before you hire a consultant—or to understand what an audit actually covers.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Intro */}
          <div className="mb-16 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
            <h2 className="text-xl font-bold text-[#023047] mb-4">How to use this checklist</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-4">
              Go through each section and answer the questions honestly. You don't need to score yourself or mark items as "good" or "bad." The goal is to identify where you have gaps or uncertainties.
            </p>
            <p className="text-[#023047]/80 leading-relaxed">
              The items you can't answer are the most valuable—they're where the hidden costs usually are.
            </p>
          </div>

          {/* Checklist */}
          <div className="space-y-12">
            {checklist.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-[#023047] mb-6 pb-4 border-b border-[#8ECAE6]/30">
                  {section.section}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-4 items-start p-4 rounded-lg bg-[#F8F9FA] hover:bg-[#F8F9FA]/80 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full border-2 border-[#219EBC] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#219EBC]/30" />
                        </div>
                      </div>
                      <p className="text-[#023047]/80 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="mt-16 p-8 rounded-2xl bg-[#023047]">
            <h2 className="text-2xl font-bold text-[#F8F9FA] mb-6">Key Takeaways</h2>
            <div className="space-y-4 text-[#8ECAE6]">
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="leading-relaxed">
                  If you can't answer 5+ questions, you probably have a bigger operational problem than you realize.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="leading-relaxed">
                  The items about "manual work" and "re-keying" are where the money is hiding.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="leading-relaxed">
                  If your systems don't integrate, you're paying 3-5% of revenue in manual workarounds.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="leading-relaxed">
                  Inventory accuracy problems typically cost 1-3% of stock value per year.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30">
            <h3 className="text-lg font-bold text-[#023047] mb-3">Once you've worked through this checklist...</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The real value is in understanding what you don't know. If there are gaps, an audit identifies them formally, quantifies them, and gives you a roadmap to fix them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                See what an audit covers
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
