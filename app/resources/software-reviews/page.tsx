import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Honest ERP & Software Reviews for Print Businesses | Decoded Ops',
  description: 'Independent, vendor-free software reviews for print, embroidery, decoration, and workwear businesses. OrderWise, Panta ERP, DecoNetwork, ShirtWorks, and more — from someone who\'s implemented them.',
  alternates: { canonical: '/resources/software-reviews' },
  openGraph: {
    type: 'website',
    title: 'Honest ERP & Software Reviews for Print Businesses | Decoded Ops',
    description: 'Independent, vendor-free software reviews for print, embroidery, decoration, and workwear businesses. OrderWise, Panta ERP, DecoNetwork, ShirtWorks, and more — from someone who\'s implemented them.',
    url: 'https://decodedops.co.uk/resources/software-reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honest ERP & Software Reviews for Print Businesses | Decoded Ops',
    description: 'Independent, vendor-free software reviews for print, embroidery, decoration, and workwear businesses. OrderWise, Panta ERP, DecoNetwork, ShirtWorks, and more — from someone who\'s implemented them.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Software Reviews for Print & Embroidery Businesses',
      description: 'Independent, vendor-free software reviews for print, embroidery, decoration, and workwear businesses. OrderWise, Panta ERP, DecoNetwork, ShirtWorks, and more — from someone who\'s implemented them.',
      url: 'https://decodedops.co.uk/resources/software-reviews',
    },
  ],
};

const reviews = [
  {
    name: 'Orderwise',
    description: 'Used by a lot of UK decorated goods businesses — but is it the right fit for yours? Covers what OrderWise actually handles well (wholesale distribution) and where the gaps appear (mixed decoration methods, B2B portals).',
    status: 'Review available',
    href: '/blog/orderwise-what-it-does-well-what-it-doesn-t',
  },
  {
    name: 'Unleashed',
    description: 'A popular cloud-based inventory and manufacturing platform. Works well for straightforward stock management, but the limitations for decoration-specific workflows and multi-site production scheduling are rarely discussed at demo stage.',
    status: 'Coming soon',
  },
  {
    name: 'Printavo',
    description: 'US-based MIS built for screen printers. Growing UK adoption, but the accounting integration and multi-currency gaps create workarounds for British businesses. Worth evaluating for the right operation profile.',
    status: 'Coming soon',
  },
  {
    name: 'Cin7',
    description: 'Positioned as an all-in-one inventory and order management platform. Strong for product-based businesses, but the implementation complexity and API limitations for decorated goods workflows need a careful look before committing.',
    status: 'Coming soon',
  },
  {
    name: 'Shopify + B2B Portal',
    description: 'The most common eCommerce front end in the sector. The question is not whether you can build a B2B portal on Shopify — it\'s whether it will connect to your ERP without a six-figure integration project.',
    status: 'Coming soon',
  },
];

export default function SoftwareReviewsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Software Reviews
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-8">
            Independent, honest reviews of the software platforms used in print, embroidery, and decoration businesses. Each review covers what the vendor promises, what the reality is for businesses in this sector, what the implementation actually costs, and where the hidden issues are.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => {
              const CardWrapper = review.href ? 'a' : 'div';
              const wrapperProps = review.href ? { href: review.href, className: "block group p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/40 hover:shadow-sm transition-all duration-300 cursor-pointer" } : { className: "group p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA]" };
              return (
                <CardWrapper key={review.name} {...wrapperProps}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#219EBC]/10 border border-[#219EBC]/20 mb-4">
                    <span className="text-xs font-semibold text-[#219EBC] uppercase">{review.status}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#023047] mb-3">{review.name}</h2>
                  <p className="text-sm text-[#023047]/70 leading-relaxed">{review.description}</p>
                </CardWrapper>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Need a review before you decide?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              If you're evaluating a specific platform and need an independent opinion, I can help. No vendor relationship. No preferred solution. Just an honest assessment based on how the software actually performs in businesses like yours.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
