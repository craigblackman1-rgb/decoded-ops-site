import fs from 'node:fs';

// no-ops-owner: replace inlineArt718 with the new DO-ART-1011 variant.
const file = 'app/problems/no-ops-owner/page.tsx';
let src = fs.readFileSync(file, 'utf8');
const start = src.indexOf('const inlineArt718 = ');
if (start < 0) throw new Error('const start missing');
const endTag = '</figure>`;';
const end = src.indexOf(endTag, start);
if (end < 0) throw new Error('const end missing');

const fig1011 = `const inlineArt1011 = \`<figure class="d17 sw sw-doc a718 a1011" data-od-id="plate-ownership" data-motion data-no="DO-ART-1011" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-1011, who owns operations. Three documents over a photograph of warehouse racking: a register of work nobody owns today, an options sheet for a hire, a part-time operations lead or a different structure, and a three-line decision log.">
  <div class="d17-ph"><img src="/images/d17/problems/plate-racking-bays-626a9b.webp" alt="" width="1600" height="900" style="object-position:50% 40%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Operations ownership <span>· the options, written down</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Who owns operations?</h3>
    <p>A part-time operations lead gives you the accountability and the thinking without the overhead.</p>
    <ul class="keys">
      <li><b>01</b><span>Dedicated hire</span><small>one person, full time</small></li>
      <li><b>02</b><span>Part-time lead</span><small>accountability, no overhead</small></li>
      <li><b>03</b><span>Different structure</span><small>restructure what exists</small></li>
    </ul>
    <span class="d17-mark">decodedops.co.uk · DO-ART-1011 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s">
      <span class="tab">01</span>
      <span class="ref">OO-01 · Ownership gaps</span>
      <h4>Who owns it today?</h4>
      <p class="sub">the work that falls between departments</p>
      <table class="reg">
        <tr><th>Area</th><th>Owner today</th><th>Status</th></tr>
        <tr><td>Processes that cross teams</td><td>Nobody</td><td class="s">Unowned</td></tr>
        <tr><td>Systems that connect departments</td><td>Nobody</td><td class="s">Unowned</td></tr>
        <tr><td>Improvements</td><td>Nobody</td><td class="s">Unowned</td></tr>
        <tr><td>Operations decisions</td><td>Your desk</td><td class="s">Overloaded</td></tr>
      </table>
    </div>
    <div class="d17-doc sop doc-s m-drop" style="animation-delay:.4s">
      <span class="tab">02</span>
      <span class="ref">OO-02 · Options</span>
      <h4>What can your business support right now?</h4>
      <p class="sub">level of ownership · one page</p>
      <p class="h"><i>1</i>Dedicated</p>
      <p class="p">A dedicated operations person.</p>
      <p class="h"><i>2</i>Part-time</p>
      <p class="p">A part-time operations lead.</p>
      <p class="h"><i>3</i>Different structure</p>
      <p class="p">A different structure altogether.</p>
      <p class="h"><i>4</i>Where time goes</p>
      <p class="p">Where your time goes, where the bottlenecks are.</p>
      <p class="h"><i>5</i>Route forward</p>
      <p class="p">Hiring, restructuring, or a retained part-time role.</p>
    </div>
    <div class="d17-doc il doc-l m-drop" style="animation-delay:.7s">
      <span class="tab">03</span>
      <span class="ref">DL · Decision log</span>
      <h4>Three lines, every time</h4>
      <div class="e"><div class="d"><b>Option 2</b>Chosen</div>
        <div class="t"><span><em>What</em>Operational leadership.</span><span><em>Why</em>Without a full-time salary.</span><span><em>Change</em>A retained part-time role.</span></div></div>
      <div class="e"><div class="d"><b>Today</b>As-is</div>
        <div class="t"><span><em>What</em>Cross-team work has no owner.</span><span><em>Why</em>Departments own only their own area.</span><span><em>Change</em>Named ownership, written down.</span></div></div>
    </div>
  </div>
</figure>\`;`;

src = src.slice(0, start) + fig1011 + src.slice(end + endTag.length + 1);
src = src.replace('inlineArt={inlineArt718}', 'inlineArt={inlineArt1011}');
fs.writeFileSync(file, src, 'utf8');
console.log('no-ops-owner done');
