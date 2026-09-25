import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { ManualWorkaroundsSchematic } from '@/components/schematics/problems/ManualWorkaroundsSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Manual Workarounds Are Costing You More Than You Think: Decoded Ops',
 description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds, you\'re paying for a system that isn\'t working. Here\'s the real cost.',
 alternates: { canonical: '/problems/manual-workarounds' },
 openGraph: {
  title: 'Manual Workarounds Are Costing You More Than You Think: Decoded Ops',
  description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds, you\'re paying for a system that isn\'t working. Here\'s the real cost.',
  url: 'https://decodedops.co.uk/problems/manual-workarounds',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Manual Workarounds Are Costing You More Than You Think: Decoded Ops',
  description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds, you\'re paying for a system that isn\'t working. Here\'s the real cost.',
 },
};

const manualWorkaroundsSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why do manual workarounds develop in businesses that have invested in software?',
     acceptedAnswer: { '@type': 'Answer', text: 'Because the software was implemented to fit the vendor\'s template, not the business\'s actual workflows. When the system doesn\'t do what the team needs, they build workarounds. Those workarounds become the real operating model.' },
    },
    {
     '@type': 'Question',
     name: 'How much do manual workarounds actually cost a business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Data re-entry, error correction, reconciliation, and the overhead of maintaining shadow systems typically add 10–20 hours per employee per week in businesses with significant workaround cultures. The cost is invisible because it is buried in everyone\'s job description.' },
    },
    {
     '@type': 'Question',
     name: 'Why are shadow systems dangerous for data integrity?',
     acceptedAnswer: { '@type': 'Answer', text: 'Shadow systems run outside IT governance. They are not backed up, not secured, and not integrated. When the person who built them leaves, the knowledge of how they work leaves with them.' },
    },
    {
     '@type': 'Question',
     name: 'How do manual workarounds affect growth and scalability?',
     acceptedAnswer: { '@type': 'Answer', text: 'Every manual workaround adds friction. As order volumes grow, the friction multiplies. Businesses that scale successfully eliminate workarounds before they scale, not after.' },
    },
    {
     '@type': 'Question',
     name: 'How much time do manual workarounds cost a print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Manual re-entry, reconciliation, and shadow-system maintenance typically add 10–20 hours per employee per week in businesses with significant workaround cultures. Eliminating manual data entry through business process automation typically delivers 15–25% efficiency gains in order processing, without adding headcount.' },
    },
    {
     '@type': 'Question',
     name: 'Should I fix my processes or buy new software first?',
     acceptedAnswer: { '@type': 'Answer', text: 'Fix the processes first, or at least document them. New software implemented on top of broken processes inherits the same problems in a more expensive wrapper. Business process automation works best when the process is understood, mapped, and then automated, not when automation is applied to something nobody has looked at critically.' },
    },
   ],
  },
 ],
};

const heroArt970 = `<figure class="d17 sx px a970" data-od-id="hero-evidence" data-motion data-no="DO-ART-970" data-rev="01" data-tx="poster"
        aria-label="Journey poster DO-ART-970. One order's route through the business. The email arrives. It is typed into the order system, copied onto the job sheet, the artwork is emailed to the studio, stock is checked by walking the floor, the despatch sheet is written up and the invoice is typed from the job sheet. Four of the seven steps retype the same order. One order, typed in four times.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-promo-6d25d2.webp" alt="" width="900" height="600"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Manual workarounds</span><span>One order's route</span></div>
  <div class="print m-drop" style="animation-delay:.2s" aria-hidden="true"><span class="ref">Job sheet · by hand</span><b>Mugs, one-colour print</b><i style="width:92%"></i><i style="width:74%"></i><i style="width:84%"></i></div>
  <div class="body" aria-hidden="true">
    <ol class="rt">
      <li class="m-fade" style="animation-delay:.3s"><div><b>Email arrives</b><small>the order, in an inbox</small></div><em class="k">In</em></li>
      <li class="m-fade" style="animation-delay:.45s"><div><b>Typed into the order system</b><small>from the email</small></div><em>Re-key</em></li>
      <li class="m-fade" style="animation-delay:.6s"><div><b>Copied onto the job sheet</b><small>for the floor</small></div><em>Re-key</em></li>
      <li class="m-fade" style="animation-delay:.75s"><div><b>Artwork emailed to the studio</b><small>as an attachment</small></div><em class="k">By email</em></li>
      <li class="m-fade" style="animation-delay:.9s"><div><b>Stock checked on the floor</b><small>walk over and look</small></div><em class="k">By hand</em></li>
      <li class="m-fade" style="animation-delay:1.05s"><div><b>Despatch sheet written up</b><small>from the job sheet</small></div><em>Re-key</em></li>
      <li class="m-fade" style="animation-delay:1.2s"><div><b>Invoice typed up</b><small>from the despatch sheet</small></div><em>Re-key</em></li>
    </ol>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One order. <em>Typed in four times.</em><small>The shadow system is the one doing the work.</small></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-970 · Rev 01</span>
  </div>
</figure>`;

const inlineArt918 = `<figure class="d17 a918" data-od-id="plate-evidence" data-motion data-no="DO-ART-918" data-rev="01" data-tx="photo"
        aria-label="Evidence piece DO-ART-918. A sports and teamwear client on Works, live in September 2026: 17 supplier feeds, 27,778 supplier products, 236,056 variants, 952 products live on their website, and 100 per cent of stock with a bin location.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-workwear-401e08.webp" alt="" width="900" height="596"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="copy">
    <div class="k d17-mono">A sports and teamwear client <span>· live system, Sept 2026</span></div>
    <h3>Seventeen feeds in. Every item binned.</h3>
    <ol class="ledger">
      <li class="m-fade" style="animation-delay:.2s"><span class="n">17</span><span class="t">supplier feeds, automated</span></li>
      <li class="m-fade" style="animation-delay:.55s"><span class="n">27,778</span><span class="t">supplier products in one catalogue</span></li>
      <li class="m-fade" style="animation-delay:.9s"><span class="n">236,056</span><span class="t">variants, split by colour and size</span></li>
      <li class="m-fade" style="animation-delay:1.25s"><span class="n">952</span><span class="t">products live on their website</span></li>
      <li class="end m-fade" style="animation-delay:1.6s"><span class="n">100%</span><span class="t">of stock with a bin location</span></li>
    </ol>
    <span class="d17-mark">decodedops.co.uk · DO-ART-918 · Rev 01</span>
  </figcaption>
  <div class="print m-drop" style="animation-delay:1.9s" aria-hidden="true">
    <span class="ref">BIN · PICK FACE</span><b>A-04-2</b><div class="bc"></div><div class="s">Polo · navy · M</div>
  </div>
</figure>`;

export default function ManualWorkaroundsPage() {
 return (
  <>
   <JsonLd data={manualWorkaroundsSchema} />
   <ProblemPageDS
   problem="Manual workarounds and shadow systems"
   headline="Your team has built a second system. ||It lives in spreadsheets.||"
   intro="Almost every business in this sector has a second system running quietly alongside the official one. Spreadsheets, manual logs, sticky notes, workarounds. They keep the business moving, but they hide the real cost. This isn't about replacing people. It's about removing the double-typing, duplicate data, and shadow spreadsheets that slow every team down."
   heroGraphic={<ManualWorkaroundsSchematic />}
   symptoms={[
    "Spreadsheets are acting as the real database for your core data",
    "The same data is being typed into the same system more than once",
    "There's a 'master spreadsheet' someone updates by hand every day",
    "When that person's on holiday, nobody knows how the spreadsheet works",
    "Checking one system against another takes hours every week",
    "You've built custom spreadsheets or databases that are now critical to running the place",
    "Every month-end needs a manual data pull and a lot of fiddling",
   ]}
   causes={[
    { title: 'The system was set up to a template, not your workflow', body: "Most software is set up following the vendor's standard process. When that doesn't match how your business actually works, your team builds workarounds. Those workarounds become the real way things get done." },
    { title: 'The gaps between systems were never closed', body: "When two systems can't talk to each other, the bridge is a person with a spreadsheet. That person becomes essential, and the business doesn't realise until they're away." },
    { title: 'Nobody has measured the hidden labour cost', body: "The cost of workarounds never appears on an invoice. It's buried in staff time labelled 'order processing' or 'admin'. Until it's measured, there's no case for fixing it. If nobody has written down how things should work, the workaround is the process." },
    { title: 'The workaround becomes the official way', body: "After a while, the workaround stops looking like a workaround. It's just how things are done. New starters are trained on it as if it were official, and nobody wants to admit the original software didn't deliver." },
   ]}
   howIHelp="I audit how work actually gets done, not how it's supposed to. I find every workaround, every spreadsheet, every manual bridge between systems, and I work out what they're costing you in time, mistakes, and risk. Then I give you a prioritised plan to remove them: quick wins that pay for themselves, connection fixes that close the gaps, and an honest view of whether your current system can ever work for your business. The result is a practical, prioritised list of changes that takes the manual work off your team."
  
   slug="manual-workarounds"
   targetService={problemRouting['manual-workarounds'].targetService}
   relatedProblems={problemRouting['manual-workarounds'].relatedProblems}
   relatedReading={problemRouting['manual-workarounds'].relatedReading}
   relatedSectors={problemRouting['manual-workarounds'].relatedSectors}
   relatedResources={problemRouting['manual-workarounds'].relatedResources}
   video={problemVideos['manual-workarounds']}
   heroArt={heroArt970}
   inlineArt={inlineArt918}
  />
   <D17Motion />
  </>
 );
}
