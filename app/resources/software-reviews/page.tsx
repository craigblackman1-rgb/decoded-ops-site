import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Software Reviews for Print & Embroidery | Decoded Ops',
  description: 'Honest, independent reviews of ERP, eCommerce, and production software used in print, embroidery, and decoration businesses.',
  alternates: { canonical: '/resources/software-reviews' },
  openGraph: {
    type: 'website',
    title: 'Software Reviews for Print & Embroidery | Decoded Ops',
    description: 'Honest, independent reviews of ERP, eCommerce, and production software used in print, embroidery, and decoration businesses.',
    url: 'https://decodedops.co.uk/resources/software-reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Reviews for Print & Embroidery | Decoded Ops',
    description: 'Honest, independent reviews of ERP, eCommerce, and production software used in print, embroidery, and decoration businesses.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Software Reviews for Print & Embroidery Businesses',
      description: 'Honest, independent reviews of ERP, eCommerce, and production software.',
      url: 'https://decodedops.co.uk/resources/software-reviews',
    },
  ],
};

const reviews = [
  {
    name: 'Orderwise',
    description: 'ERP and production management software widely used in the decorated goods sector. We review what it does well, where the gaps are, and what the implementation actually costs.',
    status: 'Coming soon',
  },
  {
    name: 'Unleashed',
    description: 'Cloud-based inventory management and ERP platform. We assess its fit for businesses that manufacture, decorate, and despatch — rather than pure inventory management.',
    status: 'Coming soon',
  },
  {
    name: 'Printavo',
    description: 'Shop management solution built for print and decoration shops. We review its production capabilities, integration options, and scalability.',
    status: 'Coming soon',
  },
  {
    name: 'Cin7',
    description: 'Inventory and order management platform. We evaluate its multi-channel capabilities and suitability for businesses with complex production workflows.',
    status: 'Coming soon',
  },
  {
    name: 'Shopify + B2B Portal',
    description: 'Using Shopify as a B2B ordering portal with custom pricing, credit terms, and multi-site management. We review the plugin ecosystem and integration requirements.',
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
            {reviews.map((review) => (
              <div key={review.name} className="group p-6 rounded-2xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/40 transition-all duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#219EBC]/10 border border-[#219EBC]/20 mb-4">
                  <span className="text-xs font-semibold text-[#219EBC] uppercase">{review.status}</span>
                </div>
                <h2 className="text-xl font-bold text-[#023047] mb-3">{review.name}</h2>
                <p className="text-sm text-[#023047]/70 leading-relaxed">{review.description}</p>
              </div>
            ))}
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
