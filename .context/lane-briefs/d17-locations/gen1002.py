import genmap, sys
import os; OUT = os.path.dirname(os.path.abspath(__file__)) + "/"
for slug, svc in (("guildford","Fractional CTO"),("brighton","Technology audit")):
    svg,hx,hy = genmap.svg(slug)
    html = f'''
      <!-- DO-ART-1002 r01 · drawn engineering plate, coverage from the base (D17). ONE piece for both
           location templates and all 29 town pages: every live town is a dot (id="t-<slug>") placed by
           its real position, spokes run from the Worthing base, Manchester sits off the plate (by
           arrangement), remote work covers the rest of the UK. BUILD: add class cov-dot--hi + m-pop to
           #t-<slug>, draw the amber spoke to it, hide that dot's grey label, and place the .pin at the
           dot (left = cx/740, top = cy/640). Pin text is {{{{town}}}} / {{{{county}}}} / {{{{travel}}}}
           (travel is the page's "From Worthing" line, wraps at 260px). This mockup highlights the
           {slug} position with the variables shown literally. For London and Manchester the pin sits
           top-left of the plate. No figures. In-page draw: the amber spoke draws, the town lands. -->
      <figure class="d17 sw a1002" data-od-id="plate-coverage" data-motion data-no="DO-ART-1002" data-rev="01" data-tx="plate"
              aria-label="Artwork DO-ART-1002. A drawn map of Sussex, Surrey and Greater London with every town this service covers marked as a dot. Routes run out from the base in Worthing, West Sussex; the route to this town is drawn in amber. On site across Sussex and Surrey, and in Greater London; Manchester by arrangement; remote work across the UK.">
        <div class="q-grid" aria-hidden="true"></div>
        <figcaption class="sw-cap">
          <div class="k d17-mono">{svc} <span>· where I work</span></div>
          <div class="bar" aria-hidden="true"></div>
          <h3>Worthing-based. On site where the work needs it.</h3>
          <ul class="legend">
            <li><i class="base"></i>Base: Worthing, West Sussex</li>
            <li><i></i>On site across Sussex and Surrey</li>
            <li><i></i>Greater London</li>
            <li><i class="far"></i>Manchester, on-site visits by arrangement</li>
            <li><i class="rem"></i>Remote work across the UK</li>
            <li><i class="hi"></i><span>Your business in <span class="tv">{{{{town}}}}</span></span></li>
          </ul>
          <span class="d17-mark">decodedops.co.uk · DO-ART-1002 · Rev 01</span>
        </figcaption>
        <div class="map">
          {svg}
          <div class="pin m-pop" style="left:{hx/740*100:.1f}%; top:{hy/640*100:.1f}%; animation-delay:1.9s" aria-hidden="true">
            <small><span class="tv">{{{{county}}}}</span></small><b><span class="tv">{{{{town}}}}</span></b><span>From Worthing: <span class="tv">{{{{travel}}}}</span></span></div>
        </div>
      </figure>
'''
    open(OUT+f"_1002-{slug}.html","w",encoding="utf-8",newline="\n").write(html)
print("ok")
