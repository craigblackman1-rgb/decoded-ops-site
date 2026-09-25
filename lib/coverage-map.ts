// DO-ART-1002 coverage map: generates SVG + pin for a highlighted town.
// Ported from genmap.py. Coordinates are (lon, lat) → SVG (x, y) in a 740×640 viewBox.

interface TownEntry {
  slug: string;
  name: string;
  lon: number;
  lat: number;
  dx: number;
  dy: number;
  anchor: string;
}

const TOWNS: TownEntry[] = [
  { slug: 'chichester', name: 'Chichester', lon: -0.78, lat: 50.836, dx: 0, dy: -14, anchor: 'middle' },
  { slug: 'bognor-regis', name: 'Bognor Regis', lon: -0.68, lat: 50.783, dx: 0, dy: 22, anchor: 'middle' },
  { slug: 'littlehampton', name: 'Littlehampton', lon: -0.54, lat: 50.812, dx: 0, dy: 22, anchor: 'middle' },
  { slug: 'worthing', name: 'Worthing', lon: -0.372, lat: 50.815, dx: 0, dy: 0, anchor: 'start' },
  { slug: 'shoreham-by-sea', name: 'Shoreham', lon: -0.27, lat: 50.834, dx: -6, dy: -12, anchor: 'end' },
  { slug: 'hove', name: 'Hove', lon: -0.17, lat: 50.832, dx: -2, dy: -12, anchor: 'end' },
  { slug: 'brighton', name: 'Brighton', lon: -0.137, lat: 50.824, dx: 6, dy: 22, anchor: 'start' },
  { slug: 'seaford', name: 'Seaford', lon: 0.1, lat: 50.772, dx: 0, dy: 22, anchor: 'middle' },
  { slug: 'eastbourne', name: 'Eastbourne', lon: 0.28, lat: 50.77, dx: 10, dy: 5, anchor: 'start' },
  { slug: 'bexhill-on-sea', name: 'Bexhill', lon: 0.47, lat: 50.842, dx: 0, dy: 22, anchor: 'middle' },
  { slug: 'hastings', name: 'Hastings', lon: 0.573, lat: 50.856, dx: 0, dy: -13, anchor: 'middle' },
  { slug: 'lewes', name: 'Lewes', lon: 0.01, lat: 50.874, dx: 10, dy: 5, anchor: 'start' },
  { slug: 'uckfield', name: 'Uckfield', lon: 0.1, lat: 50.97, dx: 10, dy: 5, anchor: 'start' },
  { slug: 'crowborough', name: 'Crowborough', lon: 0.16, lat: 51.06, dx: 10, dy: 5, anchor: 'start' },
  { slug: 'haywards-heath', name: 'Haywards Heath', lon: -0.1, lat: 51.0, dx: 10, dy: 0, anchor: 'start' },
  { slug: 'burgess-hill', name: 'Burgess Hill', lon: -0.13, lat: 50.955, dx: 10, dy: 10, anchor: 'start' },
  { slug: 'horsham', name: 'Horsham', lon: -0.327, lat: 51.063, dx: -10, dy: 5, anchor: 'end' },
  { slug: 'crawley', name: 'Crawley', lon: -0.187, lat: 51.109, dx: 10, dy: 5, anchor: 'start' },
  { slug: 'redhill', name: 'Redhill', lon: -0.17, lat: 51.24, dx: 10, dy: 8, anchor: 'start' },
  { slug: 'reigate', name: 'Reigate', lon: -0.205, lat: 51.237, dx: -10, dy: -6, anchor: 'end' },
  { slug: 'dorking', name: 'Dorking', lon: -0.33, lat: 51.232, dx: -10, dy: 10, anchor: 'end' },
  { slug: 'leatherhead', name: 'Leatherhead', lon: -0.33, lat: 51.296, dx: -10, dy: 5, anchor: 'end' },
  { slug: 'epsom', name: 'Epsom', lon: -0.27, lat: 51.333, dx: 10, dy: -2, anchor: 'start' },
  { slug: 'guildford', name: 'Guildford', lon: -0.57, lat: 51.236, dx: -10, dy: 10, anchor: 'end' },
  { slug: 'woking', name: 'Woking', lon: -0.56, lat: 51.319, dx: 10, dy: 5, anchor: 'start' },
  { slug: 'farnham', name: 'Farnham', lon: -0.8, lat: 51.215, dx: 0, dy: 22, anchor: 'middle' },
  { slug: 'camberley', name: 'Camberley', lon: -0.75, lat: 51.337, dx: 0, dy: -13, anchor: 'middle' },
  { slug: 'london', name: 'London', lon: -0.128, lat: 51.507, dx: 10, dy: 5, anchor: 'start' },
];

const COAST: [number, number][] = [
  [-0.97, 50.8], [-0.9, 50.79], [-0.79, 50.728], [-0.68, 50.772],
  [-0.54, 50.802], [-0.37, 50.806], [-0.27, 50.826], [-0.14, 50.815],
  [0.05, 50.785], [0.1, 50.765], [0.24, 50.735], [0.29, 50.763],
  [0.35, 50.797], [0.47, 50.834], [0.58, 50.85], [0.7, 50.9],
];

function project(lon: number, lat: number): [number, number] {
  return [
    Math.round((lon + 0.95) * 430 + 14) / 10 * 10,
    Math.round((51.58 - lat) * 688 + 26) / 10 * 10,
  ];
}

function coastPath(): string {
  const pts = COAST.map(([lon, lat]) => project(lon, lat));
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const mx = (x0 + x1) / 2;
    if (i > 1) {
      d += ` Q${x0},${y0} ${mx},${(y0 + y1) / 2}`;
    } else {
      d += ` L${mx},${(y0 + y1) / 2}`;
    }
  }
  d += ` L${pts[pts.length - 1][0]},${pts[pts.length - 1][1]}`;
  return d;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function generateCoverageMapSvg(highlightSlug: string): string {
  const [wx, wy] = project(-0.372, 50.815);
  const c = coastPath();
  const lines: string[] = [];

  lines.push('<svg class="q cov-map" viewBox="0 0 740 640" role="presentation" aria-hidden="true">');
  lines.push('<defs><pattern id="cov-sea" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" class="ln-f" /></pattern></defs>');
  lines.push(`<path d="${c} L740,640 L0,640 Z" fill="url(#cov-sea)" opacity=".55"/>`);
  lines.push(`<path d="${c}" class="ln" />`);

  // County labels
  for (const [t, x, y] of [['West Sussex', 150, 470], ['East Sussex', 520, 440], ['Surrey', 120, 150], ['Greater London', 430, 40]] as const) {
    lines.push(`<text class="t-m cov-cty" x="${x}" y="${y}">${t}</text>`);
  }
  lines.push('<text class="t-m cov-sea-l" x="470" y="626">English Channel</text>');

  // Spokes
  for (const town of TOWNS) {
    if (town.slug === 'worthing') continue;
    const [x, y] = project(town.lon, town.lat);
    if (town.slug === highlightSlug) {
      lines.push(`<path class="ln-a m-draw" pathLength="1" d="M${wx},${wy} L${x},${y}"/>`);
    } else {
      lines.push(`<path class="ln-d cov-spoke" d="M${wx},${wy} L${x},${y}"/>`);
    }
  }

  // Manchester off-plate
  lines.push(`<path class="ln-d" d="M${wx},${wy} L40,24"/><path class="ln" d="M40,24 l4,14 M40,24 l14,4"/>`);
  lines.push('<text class="t cov-far" x="54" y="30">Manchester, by arrangement</text>');

  // Town dots
  for (const town of TOWNS) {
    const [x, y] = project(town.lon, town.lat);
    if (town.slug === 'worthing') continue;
    const cls = town.slug === highlightSlug ? 'cov-dot cov-dot--hi m-pop' : 'cov-dot';
    const r = town.slug === highlightSlug ? 9 : 5.5;
    lines.push(`<circle id="t-${town.slug}" class="${cls}" cx="${x}" cy="${y}" r="${r}"/>`);
    if (town.slug !== highlightSlug) {
      lines.push(`<text class="t-d cov-lbl" x="${x + town.dx}" y="${y + town.dy}" text-anchor="${town.anchor}">${escapeHtml(town.name)}</text>`);
    }
  }

  // Base
  lines.push(`<circle class="cov-base-ring" cx="${wx}" cy="${wy}" r="22"/><circle class="cov-base" cx="${wx}" cy="${wy}" r="11"/>`);
  lines.push(`<text class="t-h cov-base-l" x="${wx + 16}" y="${wy + 44}" text-anchor="middle">Worthing</text>`);
  lines.push(`<text class="t-m cov-base-s" x="${wx + 16}" y="${wy + 64}" text-anchor="middle">Base</text>`);
  lines.push('</svg>');

  return lines.join('\n');
}

export function getCoverageMapPinPosition(slug: string): { left: string; top: string } {
  const town = TOWNS.find((t) => t.slug === slug);
  if (!town) return { left: '24.0%', top: '41.0%' };
  const [x, y] = project(town.lon, town.lat);
  return {
    left: `${(x / 740 * 100).toFixed(1)}%`,
    top: `${(y / 640 * 100).toFixed(1)}%`,
  };
}

export function getCoverageMapHtml(
  highlightSlug: string,
  town: string,
  county: string,
  travel: string,
  service: string,
): string {
  const svg = generateCoverageMapSvg(highlightSlug);
  const pin = getCoverageMapPinPosition(highlightSlug);

  return `<figure class="d17 sw a1002" data-od-id="plate-coverage" data-motion data-no="DO-ART-1002" data-rev="01" data-tx="plate"
              aria-label="Artwork DO-ART-1002. A drawn map of Sussex, Surrey and Greater London with every town this service covers marked as a dot. Routes run out from the base in Worthing, West Sussex; the route to this town is drawn in amber. On site across Sussex and Surrey, and in Greater London; Manchester by arrangement; remote work across the UK.">
        <div class="q-grid" aria-hidden="true"></div>
        <figcaption class="sw-cap">
          <div class="k d17-mono">${escapeHtml(service)} <span>· where I work</span></div>
          <div class="bar" aria-hidden="true"></div>
          <b>Worthing-based. On site where the work needs it.</b>
          <ul class="legend">
            <li><i class="base"></i>Base: Worthing, West Sussex</li>
            <li><i></i>On site across Sussex and Surrey</li>
            <li><i></i>Greater London</li>
            <li><i class="far"></i>Manchester, on-site visits by arrangement</li>
            <li><i class="rem"></i>Remote work across the UK</li>
            <li><i class="hi"></i><span>Your business in <span class="tv">${escapeHtml(town)}</span></span></li>
          </ul>
          <span class="d17-mark">decodedops.co.uk · DO-ART-1002 · Rev 01</span>
        </figcaption>
        <div class="map">
          ${svg}
          <div class="pin m-pop" style="left:${pin.left}; top:${pin.top}; animation-delay:1.9s" aria-hidden="true">
            <small><span class="tv">${escapeHtml(county)}</span></small><b><span class="tv">${escapeHtml(town)}</span></b><span>From Worthing: <span class="tv">${escapeHtml(travel)}</span></span></div>
        </div>
      </figure>`;
}
