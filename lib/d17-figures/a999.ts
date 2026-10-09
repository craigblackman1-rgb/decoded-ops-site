// Shared D17 figure a999 (CR-WEB-075): extracted verbatim from
// app/tools/should-i-replace-erp/page.tsx (kept on its own page unchanged).
export const a999 = `<figure class="d17 sx a999" data-od-id="hero-art" data-motion data-no="DO-ART-999" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-999. The should I replace my ERP scorecard over a graded photograph of a despatch box, answered as an example. Question 1: is your current system unable to handle your core business processes without significant workarounds? Yes. Questions 2 to 8 answered: no, no, yes, no, no, no, no. Two of eight yes. The verdict stamp: example, fixable. Fix it, or plan an exit: eight questions decide which.">
  <div class="d17-ph"><img src="/images/d17/resources/prod-mailer-259a39.webp" alt="" width="900" height="600"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Should I replace my ERP?</span><span>Eight questions</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-qz m-drop" style="animation-delay:.05s">
      <span class="tab">EXAMPLE</span>
      <span class="ref">Decision scorecard · yes or no</span>
      <h4>Fix it, or plan an exit?</h4>
      <div class="qz">
        <div class="q1"><span class="n">Q1</span><span class="t">Is your current system unable to handle your core business processes without significant workarounds?</span><em class="yes m-pop" style="animation-delay:.4s">Yes</em></div>
        <div><span class="n">Q2</span><span class="ln"></span><em class="m-pop" style="animation-delay:.5s">No</em></div>
        <div><span class="n">Q3</span><span class="ln" style="width:70%"></span><em class="m-pop" style="animation-delay:.6s">No</em></div>
        <div><span class="n">Q4</span><span class="ln" style="width:84%"></span><em class="yes m-pop" style="animation-delay:.7s">Yes</em></div>
        <div><span class="n">Q5</span><span class="ln" style="width:62%"></span><em class="m-pop" style="animation-delay:.8s">No</em></div>
        <div><span class="n">Q6</span><span class="ln" style="width:76%"></span><em class="m-pop" style="animation-delay:.9s">No</em></div>
        <div><span class="n">Q7</span><span class="ln" style="width:68%"></span><em class="m-pop" style="animation-delay:1s">No</em></div>
        <div><span class="n">Q8</span><span class="ln" style="width:80%"></span><em class="m-pop" style="animation-delay:1.1s">No</em></div>
      </div>
      <div class="tally"><span>Yes</span><b>2 of 8</b></div>
    </div>
    <div class="rt-stamp st-999 m-pop" style="animation-delay:1.4s">Fixable<small>Example verdict</small></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Fix it, or plan an exit. <em>Eight questions decide which.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-999 · Rev 01</span>
  </div>
</figure>`;

// Problem-page cut: capped width (swap map 1 §3 pattern) and no photo —
// the tools cut's despatch photo is the ecommerce-not-connected hero photo.
export const a999Solo = a999
  .replace('class="d17 sx a999"', 'class="d17 sx sx--solo a999"')
  .replace(/<div class="d17-ph">[\s\S]*?<\/div>\n?/, '');
