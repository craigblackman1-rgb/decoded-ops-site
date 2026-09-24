# DO-ART-1002 coverage plate: generate the SVG for a given highlighted town slug
import sys
T = [  # slug, name, lon, lat, label dx, dy, anchor
 ("chichester","Chichester",-0.78,50.836,0,-14,"middle"),
 ("bognor-regis","Bognor Regis",-0.68,50.783,0,22,"middle"),
 ("littlehampton","Littlehampton",-0.54,50.812,0,22,"middle"),
 ("worthing","Worthing",-0.372,50.815,0,0,"start"),
 ("shoreham-by-sea","Shoreham",-0.27,50.834,-6,-12,"end"),
 ("hove","Hove",-0.17,50.832,-2,-12,"end"),
 ("brighton","Brighton",-0.137,50.824,6,22,"start"),
 ("seaford","Seaford",0.10,50.772,0,22,"middle"),
 ("eastbourne","Eastbourne",0.28,50.77,10,5,"start"),
 ("bexhill-on-sea","Bexhill",0.47,50.842,0,22,"middle"),
 ("hastings","Hastings",0.573,50.856,0,-13,"middle"),
 ("lewes","Lewes",0.01,50.874,10,5,"start"),
 ("uckfield","Uckfield",0.10,50.97,10,5,"start"),
 ("crowborough","Crowborough",0.16,51.06,10,5,"start"),
 ("haywards-heath","Haywards Heath",-0.10,51.0,10,0,"start"),
 ("burgess-hill","Burgess Hill",-0.13,50.955,10,10,"start"),
 ("horsham","Horsham",-0.327,51.063,-10,5,"end"),
 ("crawley","Crawley",-0.187,51.109,10,5,"start"),
 ("redhill","Redhill",-0.17,51.24,10,8,"start"),
 ("reigate","Reigate",-0.205,51.237,-10,-6,"end"),
 ("dorking","Dorking",-0.33,51.232,-10,10,"end"),
 ("leatherhead","Leatherhead",-0.33,51.296,-10,5,"end"),
 ("epsom","Epsom",-0.27,51.333,10,-2,"start"),
 ("guildford","Guildford",-0.57,51.236,-10,10,"end"),
 ("woking","Woking",-0.56,51.319,10,5,"start"),
 ("farnham","Farnham",-0.80,51.215,0,22,"middle"),
 ("camberley","Camberley",-0.75,51.337,0,-13,"middle"),
 ("london","London",-0.128,51.507,10,5,"start"),
]
def P(lon,lat): return (round((lon+0.95)*430+14,1), round((51.58-lat)*688+26,1))
COAST=[(-0.97,50.80),(-0.90,50.79),(-0.79,50.728),(-0.68,50.772),(-0.54,50.802),(-0.37,50.806),(-0.27,50.826),(-0.14,50.815),(0.05,50.785),(0.10,50.765),(0.24,50.735),(0.29,50.763),(0.35,50.797),(0.47,50.834),(0.58,50.850),(0.70,50.90)]
def coast():
    pts=[P(*c) for c in COAST]
    d="M%s,%s"%pts[0]
    for i in range(1,len(pts)):
        x0,y0=pts[i-1]; x1,y1=pts[i]; mx=(x0+x1)/2
        d+=" Q%s,%s %s,%s"%(x0,y0,mx,(y0+y1)/2) if i>1 else " L%s,%s"%((x0+x1)/2,(y0+y1)/2)
    d+=" L%s,%s"%pts[-1]
    return d
def svg(hi):
    wx,wy=P(-0.372,50.815)
    o=[]
    o.append('<svg class="q cov-map" viewBox="0 0 740 640" role="presentation" aria-hidden="true">')
    o.append('<defs><pattern id="cov-sea" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" class="ln-f" /></pattern></defs>')
    c=coast()
    o.append(f'<path d="{c} L740,640 L0,640 Z" fill="url(#cov-sea)" opacity=".55"/>')
    o.append(f'<path d="{c}" class="ln" />')
    # county labels
    for t,x,y in [("West Sussex",150,470),("East Sussex",520,440),("Surrey",120,150),("Greater London",430,40)]:
        o.append(f'<text class="t-m cov-cty" x="{x}" y="{y}">{t}</text>')
    o.append('<text class="t-m cov-sea-l" x="470" y="626">English Channel</text>')
    # spokes
    for s,n,lon,lat,dx,dy,a in T:
        if s=="worthing": continue
        x,y=P(lon,lat)
        if s==hi:
            o.append(f'<path class="ln-a m-draw" pathLength="1" d="M{wx},{wy} L{x},{y}"/>')
        else:
            o.append(f'<path class="ln-d cov-spoke" d="M{wx},{wy} L{x},{y}"/>')
    # Manchester, off the plate
    o.append(f'<path class="ln-d" d="M{wx},{wy} L40,24"/><path class="ln" d="M40,24 l4,14 M40,24 l14,4"/>')
    o.append('<text class="t cov-far" x="54" y="30">Manchester, by arrangement</text>')
    for s,n,lon,lat,dx,dy,a in T:
        x,y=P(lon,lat)
        if s=="worthing": continue
        cls="cov-dot cov-dot--hi m-pop" if s==hi else "cov-dot"
        o.append(f'<circle id="t-{s}" class="{cls}" cx="{x}" cy="{y}" r="{9 if s==hi else 5.5}"/>')
        if s!=hi:
            o.append(f'<text class="t-d cov-lbl" x="{x+dx}" y="{y+dy}" text-anchor="{a}">{n}</text>')
    o.append(f'<circle class="cov-base-ring" cx="{wx}" cy="{wy}" r="22"/><circle class="cov-base" cx="{wx}" cy="{wy}" r="11"/>')
    o.append(f'<text class="t-h cov-base-l" x="{wx+16}" y="{wy+44}" text-anchor="middle">Worthing</text>')
    o.append(f'<text class="t-m cov-base-s" x="{wx+16}" y="{wy+64}" text-anchor="middle">Base</text>')
    o.append('</svg>')
    hx,hy=P(*[(lon,lat) for s,n,lon,lat,*_ in T if s==hi][0])
    return "\n".join(o),hx,hy
if __name__=="__main__":
    s,hx,hy=svg(sys.argv[1]); print(s); print(f"<!-- hi at {hx},{hy} -> left {hx/740*100:.1f}% top {hy/640*100:.1f}% -->")
