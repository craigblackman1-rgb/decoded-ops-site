// Shared D17 figure a948 (CR-WEB-075): extracted verbatim from app/apps/commerce/page.tsx.
export const a948 = `<figure class="d17 sw sw-doc a948" data-od-id="custom-visual" data-motion data-no="DO-ART-948" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-948. Two documents over a graded photograph of packed kraft boxes. A scope sheet for a full rebuild in three parts: migrate products, customers and order history off the existing platform; build a new storefront; reintegrate orders and stock back into the ERP. And an options sheet: everything on the market goes on the table first, priced, including the options expected to be rejected, with the decision left to the client. Scoped and quoted like any full custom build.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/cat-packaging-2b20a6.webp" alt="" width="900" height="800"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">The worked example <span>· scoped, not tiered</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Migration, new storefront, back into the ERP.</h3>
    <p>The scope is written down first. Everything on the market goes on the table beside it,
      priced, and the decision stays yours.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-948 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-s m-drop" style="animation-delay:.1s">
      <span class="tab">SCOPE</span>
      <span class="ref">SC-01 · Full rebuild · written first</span>
      <h4>Storefront rebuild</h4>
      <p class="sub">three parts · one written scope</p>
      <ol>
        <li><b>01</b><span>Migrate products, customers, order history</span><em>EXPORTED</em></li>
        <li><b>02</b><span>New storefront and checkout</span><em>NEW</em></li>
        <li class="hit"><b>03</b><span>Orders and stock back into the ERP</span><em>REINTEGRATED</em></li>
      </ol>
      <div class="lines"><i style="width:92%"></i><i style="width:74%"></i></div>
    </div>
    <div class="d17-doc doc-o m-drop" style="animation-delay:.45s">
      <span class="tab">OPTIONS</span>
      <span class="ref">OP-01 · On the table first</span>
      <h4>Everything on the market</h4>
      <p class="sub">priced, including the ones to reject</p>
      <div class="opt">
        <span>Off-the-shelf platform</span><span>PRICED</span>
        <span>Hosted store, add-ons</span><span>PRICED</span>
        <span>Full custom build</span><span>PRICED</span>
        <span class="you">Decision: yours</span>
      </div>
    </div>
  </div>
</figure>`;

// Problem-page cut (CR-WEB-075): own photo, caption tag that fits an options page.
export const a948Problems = a948
  .replace('/images/d17/apps-cases/cat-packaging-2b20a6.webp', '/images/d17/problems/plate-cartons-packed-2fb0ae.webp')
  .replace('width="900" height="800"', 'width="1600" height="900"')
  .replace('packed kraft boxes', 'packed cartons, blurred')
  .replace('The worked example <span>· scoped, not tiered</span>', 'The worked example <span>· connect, merge or replace</span>');
