import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'Problems solved: Decoded Ops',
 description: 'Common operational and technology problems in decorated-goods businesses, and the Decoded Ops approach to solving them.',
 alternates: { canonical: '/problems' },
 openGraph: {
  title: 'Problems solved: Decoded Ops',
  description: 'Common operational and technology problems in decorated-goods businesses, and the Decoded Ops approach to solving them.',
  url: 'https://decodedops.co.uk/problems',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Problems solved: Decoded Ops',
  description: 'Common operational and technology problems in decorated-goods businesses.',
 },
};

const problems = [
 { title: 'AI paralysis', href: '/problems/ai-paralysis', desc: 'AI is promising to revolutionise your sector, but you do not know where to start or who to trust.' },
 { title: 'Growth bottleneck', href: '/problems/bottleneck-growth', desc: 'The business stops where you stop. Every decision still goes through the owner.' },
 { title: 'Buy vs build', href: '/problems/buy-vs-build', desc: 'Off-the-shelf software or custom application: when each makes sense and how to decide.' },
 { title: "Can't scale operations", href: '/problems/cant-scale-operations', desc: 'The operation cannot grow because every order needs manual intervention.' },
 { title: 'Data scattered', href: '/problems/data-scattered', desc: 'Supplier data, stock levels, and order info live in separate systems that do not talk to each other.' },
 { title: 'Disaster recovery', href: '/problems/disaster-recovery', desc: 'Your business has no plan for what happens if the server room floods or the platform goes dark.' },
 { title: 'eCommerce not connected', href: '/problems/ecommerce-not-connected', desc: 'The website shows stock that is not real and prices that are three months out of date.' },
 { title: 'ERP implementation failure', href: '/problems/erp-implementation-failure', desc: 'You bought an ERP and it did not land. The vendor has moved on and the platform is half-adopted.' },
 { title: 'Inventory blind', href: '/problems/inventory-blind', desc: 'You do not know what stock you hold, where it is, or what it cost, and neither does your platform.' },
 { title: 'Legacy system', href: '/problems/legacy-system', desc: 'The platform you bought ten years ago was not built for decoration, and it shows.' },
 { title: 'Manual workarounds', href: '/problems/manual-workarounds', desc: 'Staff spend more time working around the system than the system saves them.' },
 { title: 'No ops owner', href: '/problems/no-ops-owner', desc: 'Nobody in the business is responsible for operations, so nothing gets fixed until it breaks.' },
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
     <p className="lede">Most of these are not technology problems. They are process problems that
      technology was supposed to solve but did not. Each one has a page that explains what it
      looks like, why it happens, and how to fix it.</p>
    </div>
   </section>

   {/* PLATE · DO-ART-118 */}
   <section className="g-navy">
    <div className="wrap">
      <span className="eyebrow">Problem map &middot; DO-ART-118</span>
     <h2>Eighteen problems, four places they start.</h2>
     <div className="hair"></div>
     <p className="lede" style={{ marginTop: 16 }}>
       Every problem page on the site, grouped by where the failure actually begins. Thirteen of eighteen are not technology problems — they are process problems technology was supposed to solve.
     </p>

     <div className="plate-scroll">
      <div className="plate-frame" data-od-id="plate-problems">
       <Plate tone="dark" p="pix" title="Eighteen problems, four places they start"
              sub="Every problem page on the site, grouped by where the failure actually begins"
              no="DO-ART-118" rev="01" cls="DECODED OPS · ISSUED">

        <g className="sk-fade sk-s2" filter="url(#pix-shadow)">
          <rect x="60" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1"/>
          <rect x="445" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1"/>
          <rect x="830" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1"/>
          <rect x="1215" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1"/>
        </g>

        {/* headers */}
        <g className="sk-fade sk-s3">
          <g className="p-mono" fontSize="15" letterSpacing="2.6" fontWeight="600" opacity=".7">
            <text x="86" y="222">DATA</text><text x="471" y="222">PROCESS</text>
            <text x="856" y="222">PLATFORM</text><text x="1241" y="222">PEOPLE</text>
          </g>
          <g className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="52">
            <text x="86" y="292">5</text><text x="471" y="292">4</text>
            <text x="856" y="292">5</text><text x="1241" y="292">4</text>
          </g>
          <g className="p-mono" fontSize="15" opacity=".5">
            <text x="126" y="292">problems</text><text x="504" y="292">problems</text>
            <text x="896" y="292">problems</text><text x="1274" y="292">problems</text>
          </g>
          <g className="p-scyan" strokeWidth=".6" strokeOpacity=".25">
            <line x1="86" y1="318" x2="359" y2="318"/><line x1="471" y1="318" x2="744" y2="318"/>
            <line x1="856" y1="318" x2="1129" y2="318"/><line x1="1241" y1="318" x2="1514" y2="318"/>
          </g>
        </g>

        {/* items */}
        <g className="sk-fade sk-s4" fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 80%, transparent)">
          <text x="86" y="366">Data scattered</text>
          <text x="86" y="410">Systems don't talk</text>
          <text x="86" y="454">Inventory blind</text>
          <text x="86" y="498">Spreadsheet addiction</text>
          <text x="86" y="542">eCommerce not connected</text>

          <text x="471" y="366">Manual workarounds</text>
          <text x="471" y="410">Slow processes</text>
          <text x="471" y="454">Can't scale operations</text>
          <text x="471" y="498">Seasonal peaks</text>

          <text x="856" y="366">Wrong ERP software</text>
          <text x="856" y="410">Legacy system</text>
          <text x="856" y="454">ERP implementation failure</text>
          <text x="856" y="498">Buy vs build</text>
          <text x="856" y="542">Disaster recovery</text>

          <text x="1241" y="366">Ops in the owner's head</text>
          <text x="1241" y="410">No ops owner</text>
          <text x="1241" y="454">Growth bottleneck</text>
          <text x="1241" y="498">AI paralysis</text>
        </g>

        {/* the only technology group */}
        <g className="sk-fade sk-s5">
          <rect x="830" y="180" width="325" height="460" rx="10" fill="none"
                stroke="color-mix(in srgb, var(--do-amber) 45%, transparent)" strokeWidth="2"/>
          <rect x="856" y="592" width="200" height="30" rx="6" className="p-block" opacity=".8"/>
          <text x="872" y="612" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="13" letterSpacing="1.8">THE TECHNOLOGY ONE</text>
        </g>

        {/* footer */}
        <g className="sk-fade sk-s6">
          <rect x="60" y="676" width="1480" height="90" rx="10" fill="url(#pix-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".45"/>
          <text x="86" y="714" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="25">Thirteen of eighteen are not technology problems.</text>
          <text x="86" y="746" className="p-mono" fontSize="17" opacity=".65">They are process problems technology was supposed to solve, and did not. Which is why the audit comes first.</text>
        </g>
       </Plate>
      </div>
     </div>
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
