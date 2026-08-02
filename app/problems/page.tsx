import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Problems we solve — Decoded Ops',
  description: 'Common operational and technology problems in decorated-goods businesses — and the Decoded Ops approach to solving them.',
  alternates: { canonical: '/problems' },
  openGraph: {
    title: 'Problems we solve — Decoded Ops',
    description: 'Common operational and technology problems in decorated-goods businesses — and the Decoded Ops approach to solving them.',
    url: 'https://decodedops.co.uk/problems',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Problems we solve — Decoded Ops',
    description: 'Common operational and technology problems in decorated-goods businesses.',
  },
};

const problems = [
  { title: 'AI paralysis', href: '/problems/ai-paralysis', desc: 'AI is promising to revolutionise your sector, but you do not know where to start or who to trust.' },
  { title: 'Growth bottleneck', href: '/problems/bottleneck-growth', desc: 'The business stops where you stop. Every decision still goes through the owner.' },
  { title: 'Buy vs build', href: '/problems/buy-vs-build', desc: 'Off-the-shelf software or custom application — when each makes sense and how to decide.' },
  { title: "Can't scale operations", href: '/problems/cant-scale-operations', desc: 'The operation cannot grow because every order needs manual intervention.' },
  { title: 'Data scattered', href: '/problems/data-scattered', desc: 'Supplier data, stock levels, and order info live in separate systems that do not talk to each other.' },
  { title: 'Disaster recovery', href: '/problems/disaster-recovery', desc: 'Your business has no plan for what happens if the server room floods or the platform goes dark.' },
  { title: 'eCommerce not connected', href: '/problems/ecommerce-not-connected', desc: 'The website shows stock that is not real and prices that are three months out of date.' },
  { title: 'ERP implementation failure', href: '/problems/erp-implementation-failure', desc: 'You bought an ERP and it did not land — the vendor has moved on and the platform is half-adopted.' },
  { title: 'Inventory blind', href: '/problems/inventory-blind', desc: 'You do not know what stock you hold, where it is, or what it cost — and neither does your platform.' },
  { title: 'Legacy system', href: '/problems/legacy-system', desc: 'The platform you bought ten years ago was not built for decoration — and it shows.' },
  { title: 'Manual workarounds', href: '/problems/manual-workarounds', desc: 'Staff spend more time working around the system than the system saves them.' },
  { title: 'No ops owner', href: '/problems/no-ops-owner', desc: 'Nobody in the business is responsible for operations — so nothing gets fixed until it breaks.' },
  { title: "Ops in the owner's head", href: '/problems/ops-in-owners-head', desc: 'If you got hit by a bus tomorrow, nobody would know how to run your business.' },
  { title: 'Seasonal peaks', href: '/problems/seasonal-peaks', desc: 'Your busiest month is four times your quietest, and your systems cannot flex.' },
  { title: 'Slow processes', href: '/problems/slow-processes', desc: 'A quote that should take ten minutes takes three days because the data is not where it needs to be.' },
  { title: 'Spreadsheet addiction', href: '/problems/spreadsheet-addiction', desc: 'The spreadsheet that runs your business is one corrupted file away from disaster.' },
  { title: "Systems don't talk", href: '/problems/systems-dont-talk', desc: 'The website, the accounts package, and the warehouse system all hold different versions of the truth.' },
  { title: 'Wrong ERP software', href: '/problems/wrong-erp-software', desc: 'You chose the wrong platform and now you are stuck with a five-year contract and a system nobody uses.' },
];

export default function ProblemsIndexPage() {
  return (
    <>
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="eyebrow">Problems</span>
          <h1>Eighteen problems every decorated-goods business recognises.</h1>
          <p className="lede">Most of these are not technology problems — they are process problems that
            technology was supposed to solve but did not. Each one has a page that explains what it
            looks like, why it happens, and how to fix it.</p>
        </div>
      </section>

      <section className="g-white">
        <div className="wrap">
          <div className="grid grid--3" style={{ marginTop: 0 }}>
            {problems.map(p => (
              <Link key={p.href} href={p.href} className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ fontSize: '1.0625rem', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: 'var(--do-text-secondary)', fontSize: '0.9375rem', margin: 0 }}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
