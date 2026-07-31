import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
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

const reviews: Array<{ name: string; description: string; status: string; href?: string }> = [
  {
    name: 'Orderwise',
    description: 'Used by a lot of UK decorated goods businesses — but is it the right fit for yours? Covers what OrderWise actually handles well (wholesale distribution) and where the gaps appear (mixed decoration methods, B2B portals).',
    status: 'Coming soon',
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
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 800 }}>
          <h1>Software reviews</h1>
          <p className="lede">
            Independent, honest reviews of the software platforms used in print, embroidery, and decoration businesses. Each review covers what the vendor promises, what the reality is for businesses in this sector, what the implementation actually costs, and where the hidden issues are.
          </p>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div className="grid grid--2">
            {reviews.map((review) => {
              const CardWrapper = review.href ? 'a' : 'div';
              const wrapperProps = review.href ? { href: review.href, className: 'card', style: { cursor: 'pointer' } } : { className: 'card' };
              return (
                <CardWrapper key={review.name} {...wrapperProps}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-cerulean) 20%, transparent)', marginBottom: 16 }}>
                    <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', textTransform: 'uppercase', color: 'var(--do-cerulean)' }}>{review.status}</span>
                  </div>
                  <h2 style={{ fontSize: 'var(--do-text-xl)' }}>{review.name}</h2>
                  <p style={{ marginBottom: 0 }}>{review.description}</p>
                </CardWrapper>
              );
            })}
          </div>

          <div className="g-navy" style={{ marginTop: 64, borderRadius: 'var(--do-radius-2xl)', padding: 32 }}>
            <h3>Need a review before you decide?</h3>
            <p style={{ marginBottom: 24 }}>
              If you're evaluating a specific platform and need an independent opinion, I can help. No vendor relationship. No preferred solution. Just an honest assessment based on how the software actually performs in businesses like yours.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
            <div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 12 }}>Or book a call directly <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
