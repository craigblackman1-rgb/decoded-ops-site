export interface LocationData {
  slug: string;
  name: string;
  county: 'West Sussex' | 'East Sussex' | 'Surrey' | 'Greater London' | 'Greater Manchester';
  localContext: string;
  driveTime: string;
  localFact: string;
  nearbyAreas: string[];
  businessSectors: string[];
  regionalChallenge: string;
}

export const locations: LocationData[] = [
  // West Sussex
  {
    slug: 'chichester',
    name: 'Chichester',
    county: 'West Sussex',
    localContext:
      'Chichester has a strong base of independent retailers, heritage tourism businesses, and professional services firms spread across the city and surrounding villages. Many are owner-managed businesses turning over £1m–£5m that have grown into technology they no longer fully control, systems that worked at smaller scale but now create daily friction they can\'t quite see the source of.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'Rolls-Royce Motor Cars\' global headquarters and only manufacturing plant sits at Goodwood, on Chichester\'s eastern edge, around 2,500 people work there.',
    nearbyAreas: ['Bognor Regis', 'Midhurst', 'Petworth', 'Goodwood'],
    businessSectors: ['Heritage tourism', 'Agriculture and food production', 'Independent retail', 'Marine services'],
    regionalChallenge: 'Chichester\'s economy spans coastal hospitality, rural agriculture, and a luxury automotive cluster at Goodwood — three sectors that rarely share systems, creating fragmented operational infrastructure across the wider district.',
  },
  {
    slug: 'worthing',
    name: 'Worthing',
    county: 'West Sussex',
    localContext:
      'Worthing has seen a wave of e-commerce businesses start locally and scale nationally, particularly in home goods, clothing, and niche retail. That transition from local to national brings a specific set of technology challenges: stock visibility, fulfilment integration, and customer data sitting in three or four different places with no single source of truth.',
    driveTime: 'This is where I\'m based',
    localFact: 'Home to the Worthing Creative & Digital Hub and established digital agency Fresh Egg, part of the wider "Silicon Beach" tech corridor spilling out from Brighton.',
    nearbyAreas: ['Shoreham-by-Sea', 'Littlehampton', 'Lancing', 'Steyning'],
    businessSectors: ['E-commerce', 'Digital and creative agencies', 'Financial services', 'Healthcare'],
    regionalChallenge: 'Worthing sits at the centre of a growing digital corridor between Brighton and Chichester, but the businesses that drive it — e-commerce, agencies, professional services — often scale their tech independently, creating duplicated systems across the town.',
  },
  {
    slug: 'horsham',
    name: 'Horsham',
    county: 'West Sussex',
    localContext:
      'Horsham sits at the centre of a prosperous commuter belt, with a business base that mixes professional services, trade businesses, and light industrial operations. Many firms here are profitable and growing, but running on operational infrastructure that hasn\'t kept pace with their ambitions, and making technology decisions without anyone senior enough to make them well.',
    driveTime: 'Under 30 minutes',
    localFact: 'The former Novartis pharmaceutical site on Wimblehurst Road, in continuous operation for 75 years until 2014, is being redeveloped into a life-sciences science park.',
    nearbyAreas: ['Billingshurst', 'Henfield', 'Southwater', 'Steyning'],
    businessSectors: ['Pharmaceutical and life sciences', 'Professional services', 'Trade and construction', 'Agriculture'],
    regionalChallenge: 'Horsham\'s business community mixes established professional firms with trade and light industrial operations — sectors with very different technology maturity levels, making it harder to find shared solutions or benchmarks.',
  },
  {
    slug: 'crawley',
    name: 'Crawley',
    county: 'West Sussex',
    localContext:
      'Crawley\'s proximity to Gatwick Airport has shaped a business community heavily weighted toward logistics, aviation supply chain, facilities management, and trade. These are operationally complex businesses where process failures cost money fast, and where technology is often patched together over years rather than designed with a view to how the business actually needs to run.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'Manor Royal is one of the South East\'s largest business districts, 540 acres, around 600 businesses, and 30,000 jobs, plus the UK\'s largest industrial Business Improvement District.',
    nearbyAreas: ['Horley', 'East Grinstead', 'Copoly', 'Pease Pottage'],
    businessSectors: ['Aviation and logistics', 'Facilities management', 'Distribution', 'Warehousing'],
    regionalChallenge: 'The Gatwick supply chain creates a dense cluster of logistics and distribution businesses that all face the same operational complexity — multi-system environments, manual handoffs, and integrations that break under volume.',
  },
  {
    slug: 'bognor-regis',
    name: 'Bognor Regis',
    county: 'West Sussex',
    localContext:
      'Bognor Regis has a mix of hospitality, retail, and light manufacturing businesses, many of which are owner-operated and have grown organically over many years. The systems challenge here is usually the same: the tools that got the business to its current size are now the main obstacle to going further, and no one inside the business has the time or the perspective to redesign them.',
    driveTime: 'Under 30 minutes',
    localFact: 'Butlin\'s flagship post-war holiday camp opened here in 1960, continuing a brand presence in the town dating back to 1932.',
    nearbyAreas: ['Chichester', 'Littlehampton', 'Felpham', 'Aldwick'],
    businessSectors: ['Hospitality and leisure', 'Light manufacturing', 'Retail', 'Marine and boat services'],
    regionalChallenge: 'Bognor\'s hospitality-heavy economy means seasonal revenue swings that stress operational systems — the same technology that handles January volumes breaks under August demand, and nobody invested in scalability because the off-season felt safe.',
  },
  {
    slug: 'littlehampton',
    name: 'Littlehampton',
    county: 'West Sussex',
    localContext:
      'Littlehampton\'s business base spans trade services, coastal hospitality, retail, and some light manufacturing. Growth tends to create operational complexity faster than businesses can adapt, and technology often becomes the bottleneck before owners realise what\'s happening. By the time it\'s visible, it\'s already costing more than it needs to.',
    driveTime: 'Under 30 minutes',
    localFact: 'The Body Shop\'s historic Watersmead campus was based here for decades before the company relocated its HQ to Brighton in 2024.',
    nearbyAreas: ['Bognor Regis', 'Rustington', 'Arundel', 'East Preston'],
    businessSectors: ['Trade services', 'Coastal hospitality', 'Retail', 'Light manufacturing'],
    regionalChallenge: 'Littlehampton\'s mix of trade businesses and coastal hospitality creates a two-speed economy — trades need year-round operational efficiency while hospitality businesses wrestle with seasonal scaling, and neither sector has internal technology resource.',
  },
  {
    slug: 'haywards-heath',
    name: 'Haywards Heath',
    county: 'West Sussex',
    localContext:
      'Haywards Heath is a prosperous commuter town with a strong professional services and financial sector presence. Businesses here tend to be well-run and profitable, but often rely on manual processes and disconnected systems that create invisible overhead and limit how quickly they can respond to growth opportunities.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'Sits on the Brighton Main Line with journeys to London Victoria in around 43 minutes, and accounts for roughly 22% of Mid Sussex district\'s jobs.',
    nearbyAreas: ['Burgess Hill', 'Cuckfield', 'Lindfield', 'Uckfield'],
    businessSectors: ['Financial services', 'Professional services', 'Insurance', 'Wealth management'],
    regionalChallenge: 'Haywards Heath\'s financial and professional services cluster means businesses handle sensitive data across multiple systems — compliance requirements add operational complexity that generic tools rarely address well.',
  },
  {
    slug: 'burgess-hill',
    name: 'Burgess Hill',
    county: 'West Sussex',
    localContext:
      'Burgess Hill has a substantial light industrial and trade business base alongside retail and professional services. Operational efficiency is a constant priority for these businesses, and the technology gap between what they\'re running and what\'s available is often wider than owners realise until someone external maps it out clearly.',
    driveTime: 'Under 30 minutes',
    localFact: 'The second-largest employment area in the Gatwick Diamond, around 300 companies and 8,000 jobs across four business parks, including Roche\'s UK HQ.',
    nearbyAreas: ['Haywards Heath', 'Hassocks', 'Hurstpierpoint', 'Ditchling'],
    businessSectors: ['Light industrial', 'Pharmaceutical', 'Trade and construction', 'Technology'],
    regionalChallenge: 'Burgess Hill sits in the Gatwick Diamond between two larger employment centres, which means businesses here compete for talent and customers while running lean operations — the technology overhead hits harder when margins are already tight.',
  },
  {
    slug: 'shoreham-by-sea',
    name: 'Shoreham-by-Sea',
    county: 'West Sussex',
    localContext:
      'Shoreham has an active port, a light industrial base, and a growing number of creative and e-commerce businesses. The combination of physical goods and digital sales channels creates specific technology challenges around stock, fulfilment, and customer management that many businesses here are wrestling with, often without a clear picture of where the cost is actually coming from.',
    driveTime: 'Under 20 minutes',
    localFact: 'Shoreham Airport, opened in 1911, is the UK\'s oldest licensed airport and hosted the world\'s first recorded commercial cargo flight the same year.',
    nearbyAreas: ['Worthing', 'Southwick', 'Portslade', 'Botyns Cross'],
    businessSectors: ['Port and marine services', 'Creative and digital', 'E-commerce', 'Light industrial'],
    regionalChallenge: 'Shoreham\'s port heritage and growing creative sector sit side by side, but they share almost no operational DNA — the systems that run a marine business are nothing like the ones that run an e-commerce operation, and the town\'s infrastructure reflects neither well.',
  },
  // East Sussex
  {
    slug: 'brighton',
    name: 'Brighton',
    county: 'East Sussex',
    localContext:
      'Brighton has one of the most diverse and fast-moving business communities in the South East, from tech startups to creative agencies, independent retailers to e-commerce operations shipping nationally. Growth here tends to be fast, which means technology decisions get made quickly and often in the wrong order. The cost of that shows up later.',
    driveTime: 'Around 30–45 minutes (A27 corridor can run slower at peak times)',
    localFact: 'American Express\'s European services HQ is one of the city\'s largest private-sector employers, part of the "Silicon Beach" cluster of over 1,500 tech and creative businesses.',
    nearbyAreas: ['Hove', 'Lewes', 'Portslade', 'Rottingdean'],
    businessSectors: ['Tech startups', 'Creative and digital agencies', 'E-commerce', 'Hospitality and nightlife'],
    regionalChallenge: 'Brighton\'s Silicon Beach cluster means tech-literate businesses surrounded by tech-challenged ones — the gap between what the startups assume and what the independent retailers actually run is wider than the city\'s geography suggests.',
  },
  {
    slug: 'hove',
    name: 'Hove',
    county: 'East Sussex',
    localContext:
      'Hove\'s business base leans heavily toward professional services, independent retail, and hospitality. Many businesses here are well-established but face the same operational challenge: systems that work individually but don\'t talk to each other, creating manual overhead that costs time and money every day and grows quietly as the business scales.',
    driveTime: 'Around 30–40 minutes',
    localFact: 'The County Ground on Eaton Road has been home to Sussex County Cricket Club since 1872, the county\'s oldest continuously used sporting venue.',
    nearbyAreas: ['Brighton', 'Portslade', 'Southwick', 'Shoreham-by-Sea'],
    businessSectors: ['Professional services', 'Independent retail', 'Hospitality', 'Healthcare and wellbeing'],
    regionalChallenge: 'Hove\'s professional services firms often operate in isolation from Brighton\'s tech ecosystem despite being neighbours — different building costs, different client expectations, and different operational needs that generic "Brighton tech" solutions don\'t address.',
  },
  {
    slug: 'eastbourne',
    name: 'Eastbourne',
    county: 'East Sussex',
    localContext:
      'Eastbourne has a large hospitality and retail sector alongside professional services and health care businesses. The town\'s business community is predominantly SME-scale, and the operational technology challenges, disconnected systems, manual data entry, no single source of truth, are almost universal. They\'re also almost universally underestimated until an audit surfaces the actual cost.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Sovereign Harbour, opened in 1993, is northern Europe\'s largest composite marina complex, with over 800 berths across four linked harbours.',
    nearbyAreas: ['Bexhill-on-Sea', 'Polegate', 'Hailsham', 'Seaford'],
    businessSectors: ['Hospitality and tourism', 'Retail', 'Healthcare', 'Marine and harbour services'],
    regionalChallenge: 'Eastbourne\'s economy is weighted toward hospitality and care — two sectors where operational technology is essential but rarely prioritised, and where the cost of poor systems shows up in staff hours and customer experience rather than visible waste.',
  },
  {
    slug: 'hastings',
    name: 'Hastings',
    county: 'East Sussex',
    localContext:
      'Hastings has a growing creative quarter, an active hospitality and tourism sector, and a base of independent businesses increasingly selling online as well as locally. The operational complexity that comes with multi-channel trading, inventory, fulfilment, customer data, is something most businesses here encounter before they\'re ready for it.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'The Stade beach is home to Europe\'s largest beach-launched fishing fleet, a working fishery over 1,000 years old, alongside the historic wooden Net Shops.',
    nearbyAreas: ['Bexhill-on-Sea', 'Battle', 'Rye', 'St Leonards-on-Sea'],
    businessSectors: ['Creative industries', 'Fishing and marine', 'Hospitality and tourism', 'E-commerce'],
    regionalChallenge: 'Hastings\' creative quarter and fishing heritage sit on opposite ends of the economic spectrum, but both face the same issue: businesses that are good at what they do are bad at the systems that support what they do, and neither has the internal resource to fix it.',
  },
  {
    slug: 'lewes',
    name: 'Lewes',
    county: 'East Sussex',
    localContext:
      'Lewes has a strong independent business culture, retail, professional services, some manufacturing, with businesses that are deeply local but increasingly reaching customers further afield. Managing that transition without breaking your operations requires a clear picture of what your systems can actually support, and what they can\'t.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'County town of East Sussex and home to Harvey\'s Brewery, founded in 1790 and still family-owned, the oldest independent brewery in Sussex.',
    nearbyAreas: ['Brighton', 'Uckfield', 'Newhaven', 'Peacehaven'],
    businessSectors: ['Independent retail', 'Food and drink production', 'Professional services', 'Artisan manufacturing'],
    regionalChallenge: 'Lewes\' independent business culture means businesses are proud of doing things their own way — which is a strength until it becomes the reason they\'re running bespoke systems that nobody else understands and nobody can maintain.',
  },
  {
    slug: 'crowborough',
    name: 'Crowborough',
    county: 'East Sussex',
    localContext:
      'Crowborough has a quieter business base, professional services, trade, some light industrial, but the operational technology challenges are no different from larger towns. Businesses here often have more to gain from better systems than they realise, because the comparison point tends to be what they\'ve always done rather than what\'s available.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'The highest town in the High Weald Area of Outstanding Natural Beauty, at 242m above sea level, on the edge of Ashdown Forest.',
    nearbyAreas: ['Uckfield', 'Tonbridge', 'Royal Tunbridge Wells', 'Eridge'],
    businessSectors: ['Trade and construction', 'Professional services', 'Agriculture', 'Light industrial'],
    regionalChallenge: 'Crowborough\'s position in the High Weald means businesses serve a dispersed rural catchment — the operational complexity of covering a wide area with limited local infrastructure creates technology challenges that town-centre businesses never face.',
  },
  {
    slug: 'bexhill-on-sea',
    name: 'Bexhill-on-Sea',
    county: 'East Sussex',
    localContext:
      'Bexhill has a retail-heavy town centre, some light manufacturing, and a growing hospitality offer. Many businesses here are owner-managed with lean teams, which means every hour of manual administration and every system failure hits harder than it would in a larger organisation with more people to absorb the fallout.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Hastings Direct, one of the UK\'s largest motor insurers, is headquartered here at Conquest House, not in Hastings itself.',
    nearbyAreas: ['Hastings', 'Eastbourne', 'Battle', 'Pevensey'],
    businessSectors: ['Insurance', 'Retail', 'Light manufacturing', 'Hospitality'],
    regionalChallenge: 'Bexhill hosts a major insurance employer alongside small independent businesses — two scales of operation with completely different technology needs, but the town\'s infrastructure and support networks tend to serve only one of them.',
  },
  {
    slug: 'uckfield',
    name: 'Uckfield',
    county: 'East Sussex',
    localContext:
      'Uckfield sits in a prosperous rural area with a mix of trade businesses, professional services, and some light industrial. Growth here tends to be steady rather than explosive, but that doesn\'t make the operational technology challenges any less real when they hit, or any less costly when no one has mapped where they\'re coming from.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'Ridgewood Industrial Park, just off the A22/A26 junction, is a key local employment site with road links north to the M25 and south to Eastbourne.',
    nearbyAreas: ['Lewes', 'Crowborough', 'Haywards Heath', 'Newhaven'],
    businessSectors: ['Trade and construction', 'Professional services', 'Agriculture', 'Distribution'],
    regionalChallenge: 'Uckfield\'s position on the A22 corridor makes it a distribution hub, but the trade and agricultural businesses that surround it operate on different cycles and different systems — the town serves both but has infrastructure designed for neither.',
  },
  {
    slug: 'seaford',
    name: 'Seaford',
    county: 'East Sussex',
    localContext:
      'Seaford has a mix of independent retail, professional services, and hospitality businesses serving both local residents and a wider coastal catchment. The systems challenges here are typical of smaller coastal towns: the business has grown, the tools haven\'t kept pace, and the gap between them is where the cost is hiding.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Sits on the coast at Seaford Head, roughly equidistant between the River Ouse at Newhaven and the Cuckmere, next to the Seven Sisters chalk cliffs.',
    nearbyAreas: ['Newhaven', 'Eastbourne', 'Lewes', 'Peacehaven'],
    businessSectors: ['Hospitality and tourism', 'Retail', 'Professional services', 'Marine and coastal services'],
    regionalChallenge: 'Seaford\'s coastal location means businesses serve a catchment that stretches from Eastbourne to Brighton — a wide operational area for a small team, where the technology gap between what you need and what you\'ve got grows with every new customer.',
  },
  // Surrey
  {
    slug: 'guildford',
    name: 'Guildford',
    county: 'Surrey',
    localContext:
      'Guildford is one of the South East\'s major commercial centres, professional services, retail, technology businesses, and a large university-linked ecosystem. The range of business types is broad, but the operational technology challenges follow familiar patterns: systems that don\'t integrate, data that lives in the wrong place, and decisions being made without the information needed to make them well.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Known as the "Hollywood of Video Games", over 50 games studios and 3,000+ programmers, a cluster dating back to Bullfrog Productions in the 1980s.',
    nearbyAreas: ['Godalming', 'Woking', 'Farnham', 'Ripley'],
    businessSectors: ['Technology and gaming', 'Professional services', 'Retail', 'University and research'],
    regionalChallenge: 'Guildford\'s games cluster and university ecosystem create a tech-savvy environment that can make traditional businesses feel behind — the gap between what the tech sector assumes everyone can do and what the average SME actually runs is particularly visible here.',
  },
  {
    slug: 'woking',
    name: 'Woking',
    county: 'Surrey',
    localContext:
      'Woking has a strong commercial centre with a mix of professional services, retail, and corporate offices. Businesses here tend to be growth-oriented and well-resourced, but operational infrastructure often lags behind commercial ambition, particularly where technology is concerned. The cost of that gap is real, even if it\'s not yet visible on a spreadsheet.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'The McLaren Technology Centre, HQ of the McLaren Group, occupies a 50-hectare site here, opened by the Queen in 2004.',
    nearbyAreas: ['Guildford', 'Byfleet', 'West Byfleet', 'Old Woking'],
    businessSectors: ['Corporate offices', 'Professional services', 'Motorsport and engineering', 'Retail'],
    regionalChallenge: 'Woking\'s corporate-heavy economy means businesses operate at a scale where operational inefficiency costs real money — but the technology decisions are often made by finance or operations people without the technical depth to evaluate what they\'re buying.',
  },
  {
    slug: 'epsom',
    name: 'Epsom',
    county: 'Surrey',
    localContext:
      'Epsom has a prosperous business base spanning professional services, retail, and hospitality. Many businesses here are running on operational systems that were inherited rather than chosen, systems that worked when the business was smaller but now create more friction than they should as volumes and complexity have grown.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Epsom Downs Racecourse hosts the Derby Stakes, Britain\'s richest flat race, with a public-viewing crowd capacity of 130,000.',
    nearbyAreas: ['Leatherhead', 'Ashtead', 'Banstead', 'Tadworth'],
    businessSectors: ['Professional services', 'Hospitality', 'Retail', 'Healthcare'],
    regionalChallenge: 'Epsom\'s proximity to London means businesses here compete for talent and customers with capital-based firms — but they\'re doing it with the operational infrastructure of a provincial town, which creates a cost disadvantage that doesn\'t show up until someone maps it.',
  },
  {
    slug: 'reigate',
    name: 'Reigate',
    county: 'Surrey',
    localContext:
      'Reigate is an affluent commuter town with a business community skewed toward professional services, independent retail, and financial services. The businesses here tend to be commercially strong, but operational technology is often the last thing to get attention, which means it\'s usually where the hidden costs are accumulating unnoticed.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Sits at the M25\'s Reigate Hill Interchange (Junction 8), one of only a few four-level stack motorway interchanges in Britain.',
    nearbyAreas: ['Redhill', 'Bletchingley', 'Horley', 'Chipstead'],
    businessSectors: ['Financial services', 'Professional services', 'Independent retail', 'Insurance'],
    regionalChallenge: 'Reigate\'s financial services cluster means businesses handle regulated data across systems that weren\'t designed for compliance — the operational risk is real but invisible until an audit surfaces it.',
  },
  {
    slug: 'redhill',
    name: 'Redhill',
    county: 'Surrey',
    localContext:
      'Redhill functions as a commercial hub for a wide surrounding area, with distribution businesses, professional services, and retail all well represented. Distribution and logistics businesses in particular tend to carry significant technology complexity, multiple systems, manual handoffs, and integrations that were built to solve yesterday\'s problem but are now creating today\'s overhead.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Redhill Aerodrome, near the M23/M25 junction, is a major general-aviation and helicopter base hosting the National Police Air Service.',
    nearbyAreas: ['Reigate', 'Horley', 'Bletchingley', 'Merstham'],
    businessSectors: ['Distribution and logistics', 'Professional services', 'Retail', 'Aviation services'],
    regionalChallenge: 'Redhill\'s position at the M23/M25 junction makes it a distribution centre, but the logistics businesses here have accumulated layers of systems over decades — each one solving a specific problem, collectively creating a technology stack that nobody fully understands.',
  },
  {
    slug: 'dorking',
    name: 'Dorking',
    county: 'Surrey',
    localContext:
      'Dorking has a strong independent business culture, retail, professional services, tourism, serving both a local market and a prosperous surrounding rural area. Many businesses here are owner-managed and growing, with all the operational technology challenges that come with growth and without the internal resource to address them strategically.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'West Street has been the centre of Surrey\'s antiques trade for over 50 years, with more than 60 dealers drawing buyers from around the world.',
    nearbyAreas: ['Leatherhead', 'Guildford', 'Leigh', 'Abinger Hammer'],
    businessSectors: ['Antiques and specialist retail', 'Tourism', 'Professional services', 'Agriculture'],
    regionalChallenge: 'Dorking\'s specialist retail and tourism economy means businesses operate in niche markets where the technology needs are specific and the solutions are rarely off-the-shelf — custom systems create custom problems.',
  },
  {
    slug: 'farnham',
    name: 'Farnham',
    county: 'Surrey',
    localContext:
      'Farnham has a thriving independent retail and creative sector alongside professional services and some light manufacturing. The creative industries concentration here means businesses often have sophisticated client-facing operations but significantly underinvested operational infrastructure behind the scenes, which is where the cost and the constraint both tend to live.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'Home to UCA Farnham, the largest campus of the University for the Creative Arts, specialising in animation, film, and interior design.',
    nearbyAreas: ['Alton', 'Haslemere', 'Bentley', 'Crondall'],
    businessSectors: ['Creative industries', 'Independent retail', 'Professional services', 'Light manufacturing'],
    regionalChallenge: 'Farnham\'s creative cluster means businesses are brilliant at presenting themselves but often running their operations on spreadsheets and email — the gap between the client-facing polish and the back-office reality is wider here than most towns.',
  },
  {
    slug: 'leatherhead',
    name: 'Leatherhead',
    county: 'Surrey',
    localContext:
      'Leatherhead has a notable concentration of professional services, pharmaceutical, and technology-adjacent businesses. Operational complexity here tends to be higher than the average SME town, which means the cost of poor systems is also higher, and the upside from addressing them is significant.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Unilever\'s UK headquarters sits at Leatherhead Office Park, alongside multinational occupiers including ExxonMobil and CGI.',
    nearbyAreas: ['Epsom', 'Dorking', 'Ashtead', 'Bookham'],
    businessSectors: ['Pharmaceutical', 'Professional services', 'FMCG and consumer goods', 'Technology'],
    regionalChallenge: 'Leatherhead\'s multinational corporate presence sits alongside SME-scale businesses — two completely different operational scales sharing the same town, with the SMEs often trying to match the systems sophistication of their larger neighbours.',
  },
  {
    slug: 'camberley',
    name: 'Camberley',
    county: 'Surrey',
    localContext:
      'Camberley has a commercial centre anchored by retail and professional services, with a wider hinterland of trade and light industrial businesses. The proximity to a large military community also means some businesses here serve very specific procurement and compliance requirements, which adds operational complexity that generic systems rarely handle well.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'Watchmoor Park, a well-established business park under a mile from M3 Junction 4, sits alongside the neighbouring Royal Military Academy Sandhurst.',
    nearbyAreas: ['Frimley', 'Bagshot', 'Windlesham', 'Blackwater'],
    businessSectors: ['Defence and security', 'Professional services', 'Retail', 'Light industrial'],
    regionalChallenge: 'Camberley\'s defence and security sector means some businesses here operate under procurement and compliance frameworks that generic SME tools simply don\'t support — the operational complexity is structural, not optional.',
  },
  // Greater London
  {
    slug: 'london',
    name: 'London',
    county: 'Greater London',
    localContext:
      'London has the UK\'s densest cluster of decorated-goods businesses, from embroidery shops in East London to screen printers in the West End and workwear suppliers across the South and East. The scale is different from Sussex or Surrey — higher volumes, more complex supply chains, more staff — but the underlying technology problems are the same: disconnected systems, manual processes, and nobody senior enough to own the technology decisions.',
    driveTime: 'Around 90–120 minutes (variable by location within London)',
    localFact: 'London\'s garment district around Hackney and Dalston hosts one of Europe\'s highest concentrations of independent garment decoration businesses, many serving fashion brands and corporate clients.',
    nearbyAreas: ['Croydon', 'Bromley', 'Enfield', 'Greenwich'],
    businessSectors: ['Garment decoration', 'Fashion and textiles', 'Corporate workwear', 'Promotional merchandise'],
    regionalChallenge: 'London\'s decorated-goods businesses operate at higher volumes and tighter margins than their South East counterparts — the technology decisions that are inconvenient in Worthing become existential in London, where the cost of a failed integration or a stockout runs into tens of thousands.',
  },
  // Greater Manchester
  {
    slug: 'manchester',
    name: 'Manchester',
    county: 'Greater Manchester',
    localContext:
      'Manchester\'s decorated-goods sector is one of the UK\'s most active, with a concentration of embroidery, screen printing, and workwear businesses serving the North West and beyond. The city\'s broader tech and creative economy means some businesses here are digitally advanced, but many decoration-specific operations are running on the same manual systems and disconnected tools that their Sussex counterparts use.',
    driveTime: 'Around 3–4 hours by road (on-site visits by arrangement)',
    localFact: 'Manchester\'s Northern Quarter and Ancoats area has become a hub for independent garment and textile businesses, part of the city\'s wider creative and manufacturing renaissance.',
    nearbyAreas: ['Salford', 'Stockport', 'Bolton', 'Oldham'],
    businessSectors: ['Embroidery and screen printing', 'Workwear and uniform supply', 'Promotional merchandise', 'Fashion textiles'],
    regionalChallenge: 'Manchester\'s decorated-goods businesses are further from Craig\'s base, which means the on-site model needs to work differently — more structured engagements, clearer scoping, and technology solutions that can be maintained remotely after the initial audit.',
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByCounty(county: LocationData['county']): LocationData[] {
  return locations.filter((l) => l.county === county);
}
