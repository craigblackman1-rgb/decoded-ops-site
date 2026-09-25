import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { SlowProcessesSchematic } from '@/components/schematics/problems/SlowProcessesSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Slow Processes Costing You Time and Money: Decoded Ops',
 description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix. UK-wide.",
 alternates: { canonical: '/problems/slow-processes' },
 openGraph: {
  title: 'Slow Processes Costing You Time and Money: Decoded Ops',
  description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix. UK-wide.",
  url: 'https://decodedops.co.uk/problems/slow-processes',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Slow Processes Costing You Time and Money: Decoded Ops',
  description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix.",
 },
};

const slowProcessesSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'WebPage',
   '@id': 'https://decodedops.co.uk/problems/slow-processes',
   url: 'https://decodedops.co.uk/problems/slow-processes',
   name: 'Slow Processes Costing You Time and Money: Decoded Ops',
   description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix. UK-wide.",
   isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
  },
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Is process improvement consulting just for businesses with technology problems?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "No. The majority of operational improvements delivered by Decoded Ops are process-led, not technology-led. Craig maps how work moves through your business, finds where time and money are being lost, and helps you fix the root cause, which is often a process, a habit, or a missing bit of structure, not a software gap.",
     },
    },
    {
     '@type': 'Question',
     name: 'What is the difference between a process improvement consultant and a management consultant?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Craig Blackman has spent 25 years working inside print, embroidery, workwear, and promotional merchandise businesses. He brings sector-specific knowledge of where these operations typically slow down and why, not a generic framework applied from the outside.",
     },
    },
    {
     '@type': 'Question',
     name: 'Do I need to prepare anything before the on-site visit?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "No preparation is needed beyond a 60-minute discovery call beforehand. The most valuable thing is to let the day run as normally as possible, the on-site observation needs to reflect how the operation actually works, not how it works when someone is watching.",
     },
    },
    {
     '@type': 'Question',
     name: 'How long does it take to see results from a process improvement engagement?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Quick wins identified in the Clarity Audit report are typically implementable within days to weeks. Most businesses begin making changes before the report is even delivered, the day on site tends to be clarifying enough that the team already knows what needs to change.",
     },
    },
    {
     '@type': 'Question',
     name: 'Does the audit cover just processes or the whole business?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "The Clarity Audit covers six areas across the whole operation, including processes and workflow, IT infrastructure, software, eCommerce, growth opportunity, and AI readiness. If a focused process review is preferred, that can be discussed separately.",
     },
    },
    {
     '@type': 'Question',
     name: 'What does a process improvement consultant do for a print or decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'A process improvement consultant observes your actual workflows, not the documented ones, and identifies where time, money, and quality are being lost. In the print and embroidery sector, this typically covers the order intake to despatch cycle, artwork approval loops, production scheduling, and the handoffs between departments. The output is a prioritised improvement plan with every finding quantified in hours per week and pounds per year.' },
    },
    {
     '@type': 'Question',
     name: 'How do I improve production efficiency in a small manufacturing or decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current process from the moment an order arrives to the moment it leaves the building. Time each step. Identify where jobs pause, where information is missing, and where work is being done twice. Process bottleneck analysis tells you where to focus improvement effort first. The most significant gains are typically in the handoffs between steps, not in the steps themselves.' },
    },
    {
     '@type': 'Question',
     name: 'Is process improvement the same as lean manufacturing?',
     acceptedAnswer: { '@type': 'Answer', text: 'Lean process improvement principles apply to print, embroidery, and decoration businesses, but the terminology and complexity of a full lean implementation is often overkill for a business under £5m. The practical goal is the same: eliminate the steps that do not add value, reduce waiting time between steps, and make the workflow visible and manageable.' },
    },
   ],
  },
 ],
};

const workflowSteps = [
 { label: 'Order in', sub: 'Intake' },
 { label: 'Artwork', sub: 'Approval', alert: true },
 { label: 'Production', sub: 'Queue', alert: true },
 { label: 'Quality', sub: 'Check' },
 { label: 'Despatch', sub: 'Invoice' },
];

const heroArt974 = `<figure class="d17 sx px a974" data-od-id="hero-evidence" data-motion data-no="DO-ART-974" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-974. One job's timeline from enquiry to despatch across six steps: enquiry to quote, artwork proof, customer approval, blanks in, production and despatch. Each step is split into the work being done, short sky-blue bars, and the time spent waiting for someone, long amber-hatched bars. Most of the line is waiting. The work takes hours, the waiting takes days.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Slow processes</span><span>Where the days go</span></div>
  <div class="gantt" aria-hidden="true">
    <div class="r"><b>Enquiry to quote<small>sales</small></b><div class="bar"><i class="d m-fill" style="left:2%;width:5%;animation-delay:0.10s"></i><i class="w m-fill" style="left:7%;width:13%;animation-delay:0.10s"></i></div></div>
    <div class="r"><b>Artwork proof<small>studio</small></b><div class="bar"><i class="w m-fill" style="left:20%;width:10%;animation-delay:0.30s"></i><i class="d m-fill" style="left:30%;width:5%;animation-delay:0.30s"></i></div></div>
    <div class="r"><b>Customer approval<small>customer</small></b><div class="bar"><i class="w m-fill" style="left:35%;width:20%;animation-delay:0.50s"></i></div></div>
    <div class="r"><b>Blanks in<small>goods in</small></b><div class="bar"><i class="w m-fill" style="left:55%;width:11%;animation-delay:0.70s"></i><i class="d m-fill" style="left:66%;width:3%;animation-delay:0.70s"></i></div></div>
    <div class="r"><b>Production<small>floor</small></b><div class="bar"><i class="w m-fill" style="left:69%;width:7%;animation-delay:0.90s"></i><i class="d m-fill" style="left:76%;width:10%;animation-delay:0.90s"></i></div></div>
    <div class="r"><b>Despatch<small>warehouse</small></b><div class="bar"><i class="w m-fill" style="left:86%;width:8%;animation-delay:1.10s"></i><i class="d m-fill" style="left:94%;width:4%;animation-delay:1.10s"></i></div></div>
    <div class="scale"><span>Enquiry</span><span>Delivered</span></div>
    <div class="key"><span><i class="d"></i>Work being done</span><span><i class="w"></i>Waiting for someone</span></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The work takes hours. <em>The waiting takes days.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-974 · Rev 01</span>
  </div>
</figure>`;

const inlineArt718 = `<figure class="d17 sw sw-doc a718" data-od-id="plate-method" data-motion data-no="DO-ART-718" data-rev="03" data-tx="photo"
        aria-label="Artwork DO-ART-718, the Decoded Method in three layers. Three documents over a photograph of an embroidery floor. A process register lists every process with a named owner role: enquiry to quote, sales lead; artwork approval, studio manager; goods in, warehouse lead; production planning, production manager; embroidery run, production supervisor; despatch, despatch lead; invoicing, accounts. A one-page SOP for despatch in five sections. An improvement log of three-line entries: what happened, why, and what changed.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-workshop-8bff06.webp" alt="" width="1100" height="1224"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">The Decoded Method <span>· in plain English</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Three layers.</h3>
    <p>How a business runs, written down so it can be handed over instead of living in one person's head.</p>
    <ul class="keys">
      <li><b>01</b><span>Process register</span><small>one page</small></li>
      <li><b>02</b><span>One-page SOPs</span><small>five sections</small></li>
      <li><b>03</b><span>Improvement log</span><small>three lines</small></li>
    </ul>
    <span class="d17-mark">decodedops.co.uk · DO-ART-718 · Rev 03</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s">
      <span class="tab">01</span>
      <span class="ref">PR-01 · Process register</span>
      <h4>Every process, one page</h4>
      <p class="sub">each process has a named owner · reviewed quarterly</p>
      <table class="reg">
        <tr><th>Process</th><th>Owner</th><th>SOP</th></tr>
        <tr><td>Enquiry to quote</td><td>Sales lead</td><td class="s">SOP-01</td></tr>
        <tr><td>Artwork approval</td><td>Studio manager</td><td class="s">SOP-02</td></tr>
        <tr><td>Goods in</td><td>Warehouse lead</td><td class="s">SOP-03</td></tr>
        <tr><td>Production planning</td><td>Production manager</td><td class="s">SOP-04</td></tr>
        <tr><td>Embroidery run</td><td>Production supervisor</td><td class="s">SOP-05</td></tr>
        <tr><td>Despatch</td><td>Despatch lead</td><td class="s">SOP-06</td></tr>
        <tr><td>Invoicing</td><td>Accounts</td><td class="s">SOP-07</td></tr>
      </table>
    </div>
    <div class="d17-doc sop doc-s m-drop" style="animation-delay:.4s">
      <span class="tab">02</span>
      <span class="ref">SOP-06 · Despatch</span>
      <h4>Despatch: pack and ship</h4>
      <p class="sub">Owner: Despatch lead · one page</p>
      <p class="h"><i>1</i>Purpose</p>
      <p class="p">Every order leaves complete, checked and booked the same way.</p>
      <p class="h"><i>2</i>When it applies</p>
      <p class="p">Any order marked ready to ship.</p>
      <p class="h"><i>3</i>Steps</p>
      <div class="line" style="width:92%"></div><div class="line" style="width:84%"></div><div class="line" style="width:70%"></div>
      <p class="h"><i>4</i>Checks</p>
      <div class="line" style="width:80%"></div>
      <p class="h"><i>5</i>If it goes wrong</p>
      <p class="p">Log it in the improvement log, three lines.</p>
    </div>
    <div class="d17-doc il doc-l m-drop" style="animation-delay:.7s">
      <span class="tab">03</span>
      <span class="ref">IL · Improvement log</span>
      <h4>Three lines, every time</h4>
      <div class="e"><div class="d"><b>Despatch</b>SOP-06</div>
        <div class="t"><span><em>What</em>Second box of a two-box order left behind.</span><span><em>Why</em>No box count on the packing check.</span><span><em>Change</em>Box count added to SOP-06, step 4.</span></div></div>
      <div class="e"><div class="d"><b>Artwork</b>SOP-02</div>
        <div class="t"><span><em>What</em>Proof approved on an old version.</span><span><em>Why</em>Versions sent by email.</span><span><em>Change</em>Approval recorded against the version.</span></div></div>
    </div>
  </div>
</figure>`;

export default function SlowProcessesPage() {
 return (
  <>
   <JsonLd data={slowProcessesSchema} />
   <ProblemPageDS
    problem="Slow, inefficient processes"
    headline="The bottleneck isn't always ||a software problem.||"
    intro="Most businesses I meet assume they have a software problem. Buy better software, they think, and the friction disappears. Sometimes they're right. Often they're not. Slow turnaround, jobs taking twice as long as they should, the team always firefighting: that's usually a process problem. And new software won't fix a process that was broken to begin with."
    heroGraphic={<SlowProcessesSchematic />}
    symptoms={[
     "Jobs move smoothly to a point, then sit waiting for the next person or step",
     "The same mistakes keep happening at the same stage, and nobody knows why",
     "Different people do the same job differently, with different results",
     "Rush jobs keep jumping the queue and knocking everything else off course",
     "Jobs reach production without everything they need: stock, files, instructions",
     "Your most experienced people are stuck doing work that doesn't need their experience",
     "New starters take months to get useful because the process lives in someone's head",
     "The same questions get asked every day because nobody has written down how it works",
    ]}
    causes={[
     {
      title: "The process was never written down",
      body: "When a process lives only in people's heads, it changes every time it's done. Different people, different results. And when that person is off sick or leaves, the knowledge leaves with them.",
     },
     {
      title: 'Problems are caught at the end, not where they start',
      body: "If the quality check only happens at despatch, every mistake gets the full production treatment before anyone spots it. Catching it earlier costs a fraction of fixing it at the end.",
     },
     {
      title: "Growth without rethinking the process",
      body: "What worked at half the volume often doesn't work now. The informal way the team stayed in sync breaks down as you grow. The process didn't scale because nobody redesigned it.",
     },
     {
      title: "No one can see where jobs are stuck",
      body: "Without a simple shared view of the queue, people work on whatever's in front of them, not what's urgent. Work piles up in some places and races through others. The bottleneck is invisible until it becomes a crisis.",
     },
    ]}
    howIHelp="I don't run workshops or send you a questionnaire. I come to your site and follow your work, watching an order move from start to despatch. I time each step, note where things stall, and talk to the people doing the work, because they already know where the problems are. By the end of the day I have a map of every step, the exact points where time is being lost, and which problems are habit, which are design, and which you can fix this week. Within five working days you get a written report: every finding set out, every issue counted in hours per week and pounds per year, every fix prioritised by impact."
   
   slug="slow-processes"
   targetService={problemRouting['slow-processes'].targetService}
   relatedProblems={problemRouting['slow-processes'].relatedProblems}
   relatedReading={problemRouting['slow-processes'].relatedReading}
   relatedSectors={problemRouting['slow-processes'].relatedSectors}
   relatedResources={problemRouting['slow-processes'].relatedResources}
   video={problemVideos['slow-processes']}
   heroArt={heroArt974}
   inlineArt={inlineArt718}
  />
   <D17Motion />
  </>
 );
}
