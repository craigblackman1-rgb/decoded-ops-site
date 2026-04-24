export interface LocationData {
  slug: string;
  name: string;
  county: 'West Sussex' | 'East Sussex' | 'Surrey';
  localContext: string;
}

export const locations: LocationData[] = [
  // West Sussex
  {
    slug: 'chichester',
    name: 'Chichester',
    county: 'West Sussex',
    localContext:
      'Chichester has a strong base of independent retailers, heritage tourism businesses, and professional services firms spread across the city and surrounding villages. Many are owner-managed businesses turning over £1m–£5m that have grown into technology they no longer fully control — systems that worked at smaller scale but now create daily friction they can\'t quite see the source of.',
  },
  {
    slug: 'worthing',
    name: 'Worthing',
    county: 'West Sussex',
    localContext:
      'Worthing has seen a wave of e-commerce businesses start locally and scale nationally — particularly in home goods, clothing, and niche retail. That transition from local to national brings a specific set of technology challenges: stock visibility, fulfilment integration, and customer data sitting in three or four different places with no single source of truth.',
  },
  {
    slug: 'horsham',
    name: 'Horsham',
    county: 'West Sussex',
    localContext:
      'Horsham sits at the centre of a prosperous commuter belt, with a business base that mixes professional services, trade businesses, and light industrial operations. Many firms here are profitable and growing — but running on operational infrastructure that hasn\'t kept pace with their ambitions, and making technology decisions without anyone senior enough to make them well.',
  },
  {
    slug: 'crawley',
    name: 'Crawley',
    county: 'West Sussex',
    localContext:
      'Crawley\'s proximity to Gatwick Airport has shaped a business community heavily weighted toward logistics, aviation supply chain, facilities management, and trade. These are operationally complex businesses where process failures cost money fast — and where technology is often patched together over years rather than designed with a view to how the business actually needs to run.',
  },
  {
    slug: 'bognor-regis',
    name: 'Bognor Regis',
    county: 'West Sussex',
    localContext:
      'Bognor Regis has a mix of hospitality, retail, and light manufacturing businesses, many of which are owner-operated and have grown organically over many years. The systems challenge here is usually the same: the tools that got the business to its current size are now the biggest obstacle to going further, and no one inside the business has the time or the perspective to redesign them.',
  },
  {
    slug: 'littlehampton',
    name: 'Littlehampton',
    county: 'West Sussex',
    localContext:
      'Littlehampton\'s business base spans trade services, coastal hospitality, retail, and some light manufacturing. Growth tends to create operational complexity faster than businesses can adapt — and technology often becomes the bottleneck before owners realise what\'s happening. By the time it\'s visible, it\'s already costing more than it needs to.',
  },
  {
    slug: 'haywards-heath',
    name: 'Haywards Heath',
    county: 'West Sussex',
    localContext:
      'Haywards Heath is a prosperous commuter town with a strong professional services and financial sector presence. Businesses here tend to be well-run and profitable — but often rely on manual processes and disconnected systems that create invisible overhead and limit how quickly they can respond to growth opportunities.',
  },
  {
    slug: 'burgess-hill',
    name: 'Burgess Hill',
    county: 'West Sussex',
    localContext:
      'Burgess Hill has a substantial light industrial and trade business base alongside retail and professional services. Operational efficiency is a constant priority for these businesses — and the technology gap between what they\'re running and what\'s available is often wider than owners realise until someone external maps it out clearly.',
  },
  {
    slug: 'shoreham-by-sea',
    name: 'Shoreham-by-Sea',
    county: 'West Sussex',
    localContext:
      'Shoreham has an active port, a light industrial base, and a growing number of creative and e-commerce businesses. The combination of physical goods and digital sales channels creates specific technology challenges around stock, fulfilment, and customer management that many businesses here are wrestling with — often without a clear picture of where the cost is actually coming from.',
  },
  // East Sussex
  {
    slug: 'brighton',
    name: 'Brighton',
    county: 'East Sussex',
    localContext:
      'Brighton has one of the most diverse and fast-moving business communities in the South East — from tech startups to creative agencies, independent retailers to e-commerce operations shipping nationally. Growth here tends to be fast, which means technology decisions get made quickly and often in the wrong order. The cost of that shows up later.',
  },
  {
    slug: 'hove',
    name: 'Hove',
    county: 'East Sussex',
    localContext:
      'Hove\'s business base leans heavily toward professional services, independent retail, and hospitality. Many businesses here are well-established but face the same operational challenge: systems that work individually but don\'t talk to each other, creating manual overhead that costs time and money every single day and grows quietly as the business scales.',
  },
  {
    slug: 'eastbourne',
    name: 'Eastbourne',
    county: 'East Sussex',
    localContext:
      'Eastbourne has a large hospitality and retail sector alongside professional services and health care businesses. The town\'s business community is predominantly SME-scale, and the operational technology challenges — disconnected systems, manual data entry, no single source of truth — are almost universal. They\'re also almost universally underestimated until an audit surfaces the actual cost.',
  },
  {
    slug: 'hastings',
    name: 'Hastings',
    county: 'East Sussex',
    localContext:
      'Hastings has a growing creative quarter, an active hospitality and tourism sector, and a base of independent businesses increasingly selling online as well as locally. The operational complexity that comes with multi-channel trading — inventory, fulfilment, customer data — is something most businesses here encounter before they\'re ready for it.',
  },
  {
    slug: 'lewes',
    name: 'Lewes',
    county: 'East Sussex',
    localContext:
      'Lewes has a strong independent business culture — retail, professional services, some manufacturing — with businesses that are deeply local but increasingly reaching customers further afield. Managing that transition without breaking your operations requires a clear picture of what your systems can actually support, and what they can\'t.',
  },
  {
    slug: 'crowborough',
    name: 'Crowborough',
    county: 'East Sussex',
    localContext:
      'Crowborough has a quieter business base — professional services, trade, some light industrial — but the operational technology challenges are no different from larger towns. Businesses here often have more to gain from better systems than they realise, because the comparison point tends to be what they\'ve always done rather than what\'s available.',
  },
  {
    slug: 'bexhill-on-sea',
    name: 'Bexhill-on-Sea',
    county: 'East Sussex',
    localContext:
      'Bexhill has a retail-heavy town centre, some light manufacturing, and a growing hospitality offer. Many businesses here are owner-managed with lean teams — which means every hour of manual administration and every system failure hits harder than it would in a larger organisation with more people to absorb the fallout.',
  },
  {
    slug: 'uckfield',
    name: 'Uckfield',
    county: 'East Sussex',
    localContext:
      'Uckfield sits in a prosperous rural area with a mix of trade businesses, professional services, and some light industrial. Growth here tends to be steady rather than explosive — but that doesn\'t make the operational technology challenges any less real when they hit, or any less costly when no one has mapped where they\'re coming from.',
  },
  {
    slug: 'seaford',
    name: 'Seaford',
    county: 'East Sussex',
    localContext:
      'Seaford has a mix of independent retail, professional services, and hospitality businesses serving both local residents and a wider coastal catchment. The systems challenges here are typical of smaller coastal towns: the business has grown, the tools haven\'t kept pace, and the gap between them is where the cost is hiding.',
  },
  // Surrey
  {
    slug: 'guildford',
    name: 'Guildford',
    county: 'Surrey',
    localContext:
      'Guildford is one of the South East\'s major commercial centres — professional services, retail, technology businesses, and a large university-linked ecosystem. The range of business types is broad, but the operational technology challenges follow familiar patterns: systems that don\'t integrate, data that lives in the wrong place, and decisions being made without the information needed to make them well.',
  },
  {
    slug: 'woking',
    name: 'Woking',
    county: 'Surrey',
    localContext:
      'Woking has a strong commercial centre with a mix of professional services, retail, and corporate offices. Businesses here tend to be growth-oriented and well-resourced — but operational infrastructure often lags behind commercial ambition, particularly where technology is concerned. The cost of that gap is real, even if it\'s not yet visible on a spreadsheet.',
  },
  {
    slug: 'epsom',
    name: 'Epsom',
    county: 'Surrey',
    localContext:
      'Epsom has a prosperous business base spanning professional services, retail, and hospitality. Many businesses here are running on operational systems that were inherited rather than chosen — systems that worked when the business was smaller but now create more friction than they should as volumes and complexity have grown.',
  },
  {
    slug: 'reigate',
    name: 'Reigate',
    county: 'Surrey',
    localContext:
      'Reigate is an affluent commuter town with a business community skewed toward professional services, independent retail, and financial services. The businesses here tend to be commercially strong — but operational technology is often the last thing to get attention, which means it\'s usually where the hidden costs are accumulating unnoticed.',
  },
  {
    slug: 'redhill',
    name: 'Redhill',
    county: 'Surrey',
    localContext:
      'Redhill functions as a commercial hub for a wide surrounding area, with distribution businesses, professional services, and retail all well represented. Distribution and logistics businesses in particular tend to carry significant technology complexity — multiple systems, manual handoffs, and integrations that were built to solve yesterday\'s problem but are now creating today\'s overhead.',
  },
  {
    slug: 'dorking',
    name: 'Dorking',
    county: 'Surrey',
    localContext:
      'Dorking has a strong independent business culture — retail, professional services, tourism — serving both a local market and a prosperous surrounding rural area. Many businesses here are owner-managed and growing, with all the operational technology challenges that come with growth and without the internal resource to address them strategically.',
  },
  {
    slug: 'farnham',
    name: 'Farnham',
    county: 'Surrey',
    localContext:
      'Farnham has a thriving independent retail and creative sector alongside professional services and some light manufacturing. The creative industries concentration here means businesses often have sophisticated client-facing operations but significantly underinvested operational infrastructure behind the scenes — which is where the cost and the constraint both tend to live.',
  },
  {
    slug: 'leatherhead',
    name: 'Leatherhead',
    county: 'Surrey',
    localContext:
      'Leatherhead has a notable concentration of professional services, pharmaceutical, and technology-adjacent businesses. Operational complexity here tends to be higher than the average SME town — which means the cost of poor systems is also higher, and the upside from addressing them is significant.',
  },
  {
    slug: 'camberley',
    name: 'Camberley',
    county: 'Surrey',
    localContext:
      'Camberley has a commercial centre anchored by retail and professional services, with a wider hinterland of trade and light industrial businesses. The proximity to a large military community also means some businesses here serve very specific procurement and compliance requirements — which adds operational complexity that generic systems rarely handle well.',
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByCounty(county: LocationData['county']): LocationData[] {
  return locations.filter((l) => l.county === county);
}
