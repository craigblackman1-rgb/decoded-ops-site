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
      'Chichester sits within reach of the garment decorators, screen printers, embroiderers, and workwear and promotional merchandise suppliers working across the wider area. The operational problems in this trade don\'t change from postcode to postcode: supplier data that doesn\'t match what\'s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'The global headquarters and manufacturing plant of a luxury automotive manufacturer sits at Goodwood, on Chichester\'s eastern edge.',
    nearbyAreas: ['Bognor Regis', 'Midhurst', 'Petworth', 'Goodwood'],
    businessSectors: ['Garment decoration', 'Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise'],
    regionalChallenge: 'Chichester\'s decoration and print trade sits alongside Bognor Regis and Midhurst, and the operational problems don\'t stop at a town boundary. Wherever the business sits, the audit runs the same way.',
  },
  {
    slug: 'worthing',
    name: 'Worthing',
    county: 'West Sussex',
    localContext:
      'In and around Worthing, decorated-goods businesses, embroiderers, printers, and workwear and promotional merchandise suppliers among them, run into the same operational gaps as the trade does everywhere else: manual workarounds standing in for a proper system, and nobody with the time to step back and look at the whole operation. A Clarity Audit here means a day on your premises, following the work as it actually happens.',
    driveTime: 'This is where I\'m based',
    localFact: 'Home to the Worthing Creative & Digital Hub and a cluster of established digital agencies, part of the wider "Silicon Beach" tech corridor spilling out from Brighton.',
    nearbyAreas: ['Shoreham-by-Sea', 'Littlehampton', 'Lancing', 'Steyning'],
    businessSectors: ['Promotional merchandise', 'Signs and graphics', 'Labels and packaging', 'Teamwear and clubwear'],
    regionalChallenge: 'Whether a decoration business is based in Worthing itself or out towards Shoreham-by-Sea, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone\'s head rather than on paper.',
  },
  {
    slug: 'horsham',
    name: 'Horsham',
    county: 'West Sussex',
    localContext:
      'Horsham has its share of embroidery, print, and workwear businesses, and the problems look the same as they do across the sector nationally: too much held in one person\'s head, systems that don\'t talk to each other, and growth that has outpaced the processes underneath it. I come to your site, follow the work from order in to despatch out, and write down what needs fixing.',
    driveTime: 'Under 30 minutes',
    localFact: 'The former pharmaceutical site on Wimblehurst Road, in continuous operation for 75 years until 2014, is being redeveloped into a life-sciences science park.',
    nearbyAreas: ['Billingshurst', 'Henfield', 'Southwater', 'Steyning'],
    businessSectors: ['Teamwear and clubwear', 'Schoolwear suppliers', 'Garment decoration', 'Embroidery and screen print'],
    regionalChallenge: 'Horsham sits within easy reach of Billingshurst and Henfield, and decoration businesses across that whole stretch run into the same operational gaps. Distance from the workshop floor doesn\'t change what needs fixing.',
  },
  {
    slug: 'crawley',
    name: 'Crawley',
    county: 'West Sussex',
    localContext:
      'Garment decorators, screen printers, and workwear and promotional merchandise suppliers working in and around Crawley face the same operational challenges as their counterparts across the region: disconnected systems, manual processes, and no single person who owns the fix. The audit runs on site, following your actual workflow, with the same written report and guarantee wherever the business is based.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'Manor Royal is one of the South East\'s largest business districts, and home to the UK\'s largest industrial Business Improvement District.',
    nearbyAreas: ['Horley', 'East Grinstead', 'Copoly', 'Pease Pottage'],
    businessSectors: ['Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise', 'Signs and graphics'],
    regionalChallenge: 'Being close to Horley and East Grinstead doesn\'t change what a decoration business needs from its systems. The fix costs the same to get right wherever in West Sussex you\'re based.',
  },
  {
    slug: 'bognor-regis',
    name: 'Bognor Regis',
    county: 'West Sussex',
    localContext:
      'Bognor Regis sits within reach of the garment decorators, screen printers, embroiderers, and workwear and promotional merchandise suppliers working across the wider area. The operational problems in this trade don\'t change from postcode to postcode: supplier data that doesn\'t match what\'s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.',
    driveTime: 'Under 30 minutes',
    localFact: 'A flagship post-war holiday camp opened here in 1960, continuing a brand presence in the town dating back to 1932.',
    nearbyAreas: ['Chichester', 'Littlehampton', 'Felpham', 'Aldwick'],
    businessSectors: ['Signs and graphics', 'Labels and packaging', 'Teamwear and clubwear', 'Schoolwear suppliers'],
    regionalChallenge: 'Bognor Regis\'s decoration and print trade sits alongside Chichester and Littlehampton, and the operational problems don\'t stop at a town boundary. Wherever the business sits, the audit runs the same way.',
  },
  {
    slug: 'littlehampton',
    name: 'Littlehampton',
    county: 'West Sussex',
    localContext:
      'In and around Littlehampton, decorated-goods businesses, embroiderers, printers, and workwear and promotional merchandise suppliers among them, run into the same operational gaps as the trade does everywhere else: manual workarounds standing in for a proper system, and nobody with the time to step back and look at the whole operation. A Clarity Audit here means a day on your premises, following the work as it actually happens.',
    driveTime: 'Under 30 minutes',
    localFact: 'A major cosmetics company\'s historic campus was based here for decades before the company relocated its HQ to Brighton in 2024.',
    nearbyAreas: ['Bognor Regis', 'Rustington', 'Arundel', 'East Preston'],
    businessSectors: ['Schoolwear suppliers', 'Garment decoration', 'Embroidery and screen print', 'Workwear suppliers'],
    regionalChallenge: 'Whether a decoration business is based in Littlehampton itself or out towards Bognor Regis, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone\'s head rather than on paper.',
  },
  {
    slug: 'haywards-heath',
    name: 'Haywards Heath',
    county: 'West Sussex',
    localContext:
      'Haywards Heath has its share of embroidery, print, and workwear businesses, and the problems look the same as they do across the sector nationally: too much held in one person\'s head, systems that don\'t talk to each other, and growth that has outpaced the processes underneath it. I come to your site, follow the work from order in to despatch out, and write down what needs fixing.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'Sits on the Brighton Main Line, with journeys to London Victoria in around 43 minutes.',
    nearbyAreas: ['Burgess Hill', 'Cuckfield', 'Lindfield', 'Uckfield'],
    businessSectors: ['Workwear suppliers', 'Promotional merchandise', 'Signs and graphics', 'Labels and packaging'],
    regionalChallenge: 'Haywards Heath sits within easy reach of Burgess Hill and Cuckfield, and decoration businesses across that whole stretch run into the same operational gaps. Distance from the workshop floor doesn\'t change what needs fixing.',
  },
  {
    slug: 'burgess-hill',
    name: 'Burgess Hill',
    county: 'West Sussex',
    localContext:
      'Garment decorators, screen printers, and workwear and promotional merchandise suppliers working in and around Burgess Hill face the same operational challenges as their counterparts across the region: disconnected systems, manual processes, and no single person who owns the fix. The audit runs on site, following your actual workflow, with the same written report and guarantee wherever the business is based.',
    driveTime: 'Under 30 minutes',
    localFact: 'The second-largest employment area in the Gatwick Diamond, spread across four business parks and including a major pharmaceutical company\'s UK HQ.',
    nearbyAreas: ['Haywards Heath', 'Hassocks', 'Hurstpierpoint', 'Ditchling'],
    businessSectors: ['Labels and packaging', 'Teamwear and clubwear', 'Schoolwear suppliers', 'Garment decoration'],
    regionalChallenge: 'Being close to Haywards Heath and Hassocks doesn\'t change what a decoration business needs from its systems. The fix costs the same to get right wherever in West Sussex you\'re based.',
  },
  {
    slug: 'shoreham-by-sea',
    name: 'Shoreham-by-Sea',
    county: 'West Sussex',
    localContext:
      'Shoreham-by-Sea sits within reach of the garment decorators, screen printers, embroiderers, and workwear and promotional merchandise suppliers working across the wider area. The operational problems in this trade don\'t change from postcode to postcode: supplier data that doesn\'t match what\'s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.',
    driveTime: 'Under 20 minutes',
    localFact: 'Shoreham Airport, opened in 1911, is the UK\'s oldest licensed airport and hosted the world\'s first recorded commercial cargo flight the same year.',
    nearbyAreas: ['Worthing', 'Southwick', 'Portslade', 'Botyns Cross'],
    businessSectors: ['Garment decoration', 'Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise'],
    regionalChallenge: 'Shoreham-by-Sea\'s decoration and print trade sits alongside Worthing and Southwick, and the operational problems don\'t stop at a town boundary. Wherever the business sits, the audit runs the same way.',
  },
  // East Sussex
  {
    slug: 'brighton',
    name: 'Brighton',
    county: 'East Sussex',
    localContext:
      'In and around Brighton, decorated-goods businesses, embroiderers, printers, and workwear and promotional merchandise suppliers among them, run into the same operational gaps as the trade does everywhere else: manual workarounds standing in for a proper system, and nobody with the time to step back and look at the whole operation. A Clarity Audit here means a day on your premises, following the work as it actually happens.',
    driveTime: 'Around 30–45 minutes (A27 corridor can run slower at peak times)',
    localFact: 'A major financial services company\'s European services HQ is one of the city\'s largest private-sector employers, part of the "Silicon Beach" cluster of tech and creative businesses.',
    nearbyAreas: ['Hove', 'Lewes', 'Portslade', 'Rottingdean'],
    businessSectors: ['Promotional merchandise', 'Signs and graphics', 'Labels and packaging', 'Teamwear and clubwear'],
    regionalChallenge: 'Whether a decoration business is based in Brighton itself or out towards Hove, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone\'s head rather than on paper.',
  },
  {
    slug: 'hove',
    name: 'Hove',
    county: 'East Sussex',
    localContext:
      'Hove has its share of embroidery, print, and workwear businesses, and the problems look the same as they do across the sector nationally: too much held in one person\'s head, systems that don\'t talk to each other, and growth that has outpaced the processes underneath it. I come to your site, follow the work from order in to despatch out, and write down what needs fixing.',
    driveTime: 'Around 30–40 minutes',
    localFact: 'The County Ground on Eaton Road has been home to Sussex County Cricket Club since 1872, the county\'s oldest continuously used sporting venue.',
    nearbyAreas: ['Brighton', 'Portslade', 'Southwick', 'Shoreham-by-Sea'],
    businessSectors: ['Teamwear and clubwear', 'Schoolwear suppliers', 'Garment decoration', 'Embroidery and screen print'],
    regionalChallenge: 'Hove sits within easy reach of Brighton and Portslade, and decoration businesses across that whole stretch run into the same operational gaps. Distance from the workshop floor doesn\'t change what needs fixing.',
  },
  {
    slug: 'eastbourne',
    name: 'Eastbourne',
    county: 'East Sussex',
    localContext:
      'Garment decorators, screen printers, and workwear and promotional merchandise suppliers working in and around Eastbourne face the same operational challenges as their counterparts across the region: disconnected systems, manual processes, and no single person who owns the fix. The audit runs on site, following your actual workflow, with the same written report and guarantee wherever the business is based.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Sovereign Harbour, opened in 1993, is northern Europe\'s largest composite marina complex, with over 800 berths across four linked harbours.',
    nearbyAreas: ['Bexhill-on-Sea', 'Polegate', 'Hailsham', 'Seaford'],
    businessSectors: ['Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise', 'Signs and graphics'],
    regionalChallenge: 'Being close to Bexhill-on-Sea and Polegate doesn\'t change what a decoration business needs from its systems. The fix costs the same to get right wherever in East Sussex you\'re based.',
  },
  {
    slug: 'hastings',
    name: 'Hastings',
    county: 'East Sussex',
    localContext:
      'Hastings sits within reach of the garment decorators, screen printers, embroiderers, and workwear and promotional merchandise suppliers working across the wider area. The operational problems in this trade don\'t change from postcode to postcode: supplier data that doesn\'t match what\'s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'The Stade beach is home to Europe\'s largest beach-launched fishing fleet, a working fishery over 1,000 years old, alongside the historic wooden Net Shops.',
    nearbyAreas: ['Bexhill-on-Sea', 'Battle', 'Rye', 'St Leonards-on-Sea'],
    businessSectors: ['Signs and graphics', 'Labels and packaging', 'Teamwear and clubwear', 'Schoolwear suppliers'],
    regionalChallenge: 'Hastings\'s decoration and print trade sits alongside Bexhill-on-Sea and Battle, and the operational problems don\'t stop at a town boundary. Wherever the business sits, the audit runs the same way.',
  },
  {
    slug: 'lewes',
    name: 'Lewes',
    county: 'East Sussex',
    localContext:
      'In and around Lewes, decorated-goods businesses, embroiderers, printers, and workwear and promotional merchandise suppliers among them, run into the same operational gaps as the trade does everywhere else: manual workarounds standing in for a proper system, and nobody with the time to step back and look at the whole operation. A Clarity Audit here means a day on your premises, following the work as it actually happens.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'County town of East Sussex and home to an independent brewery, founded in 1790 and still family-owned, the oldest independent brewery in Sussex.',
    nearbyAreas: ['Brighton', 'Uckfield', 'Newhaven', 'Peacehaven'],
    businessSectors: ['Schoolwear suppliers', 'Garment decoration', 'Embroidery and screen print', 'Workwear suppliers'],
    regionalChallenge: 'Whether a decoration business is based in Lewes itself or out towards Brighton, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone\'s head rather than on paper.',
  },
  {
    slug: 'crowborough',
    name: 'Crowborough',
    county: 'East Sussex',
    localContext:
      'Crowborough has its share of embroidery, print, and workwear businesses, and the problems look the same as they do across the sector nationally: too much held in one person\'s head, systems that don\'t talk to each other, and growth that has outpaced the processes underneath it. I come to your site, follow the work from order in to despatch out, and write down what needs fixing.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'The highest town in the High Weald Area of Outstanding Natural Beauty, at 242m above sea level, on the edge of Ashdown Forest.',
    nearbyAreas: ['Uckfield', 'Tonbridge', 'Royal Tunbridge Wells', 'Eridge'],
    businessSectors: ['Workwear suppliers', 'Promotional merchandise', 'Signs and graphics', 'Labels and packaging'],
    regionalChallenge: 'Crowborough sits within easy reach of Uckfield and Tonbridge, and decoration businesses across that whole stretch run into the same operational gaps. Distance from the workshop floor doesn\'t change what needs fixing.',
  },
  {
    slug: 'bexhill-on-sea',
    name: 'Bexhill-on-Sea',
    county: 'East Sussex',
    localContext:
      'Garment decorators, screen printers, and workwear and promotional merchandise suppliers working in and around Bexhill-on-Sea face the same operational challenges as their counterparts across the region: disconnected systems, manual processes, and no single person who owns the fix. The audit runs on site, following your actual workflow, with the same written report and guarantee wherever the business is based.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'One of the UK\'s largest motor insurers is headquartered here, serving customers nationwide.',
    nearbyAreas: ['Hastings', 'Eastbourne', 'Battle', 'Pevensey'],
    businessSectors: ['Labels and packaging', 'Teamwear and clubwear', 'Schoolwear suppliers', 'Garment decoration'],
    regionalChallenge: 'Being close to Hastings and Eastbourne doesn\'t change what a decoration business needs from its systems. The fix costs the same to get right wherever in East Sussex you\'re based.',
  },
  {
    slug: 'uckfield',
    name: 'Uckfield',
    county: 'East Sussex',
    localContext:
      'Uckfield sits within reach of the garment decorators, screen printers, embroiderers, and workwear and promotional merchandise suppliers working across the wider area. The operational problems in this trade don\'t change from postcode to postcode: supplier data that doesn\'t match what\'s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'Ridgewood Industrial Park, just off the A22/A26 junction, is a key local employment site with road links north to the M25 and south to Eastbourne.',
    nearbyAreas: ['Lewes', 'Crowborough', 'Haywards Heath', 'Newhaven'],
    businessSectors: ['Garment decoration', 'Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise'],
    regionalChallenge: 'Uckfield\'s decoration and print trade sits alongside Lewes and Crowborough, and the operational problems don\'t stop at a town boundary. Wherever the business sits, the audit runs the same way.',
  },
  {
    slug: 'seaford',
    name: 'Seaford',
    county: 'East Sussex',
    localContext:
      'In and around Seaford, decorated-goods businesses, embroiderers, printers, and workwear and promotional merchandise suppliers among them, run into the same operational gaps as the trade does everywhere else: manual workarounds standing in for a proper system, and nobody with the time to step back and look at the whole operation. A Clarity Audit here means a day on your premises, following the work as it actually happens.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Sits on the coast at Seaford Head, roughly equidistant between the River Ouse at Newhaven and the Cuckmere, next to the Seven Sisters chalk cliffs.',
    nearbyAreas: ['Newhaven', 'Eastbourne', 'Lewes', 'Peacehaven'],
    businessSectors: ['Promotional merchandise', 'Signs and graphics', 'Labels and packaging', 'Teamwear and clubwear'],
    regionalChallenge: 'Whether a decoration business is based in Seaford itself or out towards Newhaven, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone\'s head rather than on paper.',
  },
  // Surrey
  {
    slug: 'guildford',
    name: 'Guildford',
    county: 'Surrey',
    localContext:
      'Guildford has its share of embroidery, print, and workwear businesses, and the problems look the same as they do across the sector nationally: too much held in one person\'s head, systems that don\'t talk to each other, and growth that has outpaced the processes underneath it. I come to your site, follow the work from order in to despatch out, and write down what needs fixing.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Known as the "Hollywood of Video Games", a games studio cluster dating back to the 1980s.',
    nearbyAreas: ['Godalming', 'Woking', 'Farnham', 'Ripley'],
    businessSectors: ['Teamwear and clubwear', 'Schoolwear suppliers', 'Garment decoration', 'Embroidery and screen print'],
    regionalChallenge: 'Guildford sits within easy reach of Godalming and Woking, and decoration businesses across that whole stretch run into the same operational gaps. Distance from the workshop floor doesn\'t change what needs fixing.',
  },
  {
    slug: 'woking',
    name: 'Woking',
    county: 'Surrey',
    localContext:
      'Garment decorators, screen printers, and workwear and promotional merchandise suppliers working in and around Woking face the same operational challenges as their counterparts across the region: disconnected systems, manual processes, and no single person who owns the fix. The audit runs on site, following your actual workflow, with the same written report and guarantee wherever the business is based.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'A major motorsport and technology company\'s headquarters occupies a 50-hectare site here, opened in 2004.',
    nearbyAreas: ['Guildford', 'Byfleet', 'West Byfleet', 'Old Woking'],
    businessSectors: ['Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise', 'Signs and graphics'],
    regionalChallenge: 'Being close to Guildford and Byfleet doesn\'t change what a decoration business needs from its systems. The fix costs the same to get right wherever in Surrey you\'re based.',
  },
  {
    slug: 'epsom',
    name: 'Epsom',
    county: 'Surrey',
    localContext:
      'Epsom sits within reach of the garment decorators, screen printers, embroiderers, and workwear and promotional merchandise suppliers working across the wider area. The operational problems in this trade don\'t change from postcode to postcode: supplier data that doesn\'t match what\'s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Epsom Downs Racecourse hosts the Derby Stakes, Britain\'s richest flat race, with a public-viewing crowd capacity of 130,000.',
    nearbyAreas: ['Leatherhead', 'Ashtead', 'Banstead', 'Tadworth'],
    businessSectors: ['Signs and graphics', 'Labels and packaging', 'Teamwear and clubwear', 'Schoolwear suppliers'],
    regionalChallenge: 'Epsom\'s decoration and print trade sits alongside Leatherhead and Ashtead, and the operational problems don\'t stop at a town boundary. Wherever the business sits, the audit runs the same way.',
  },
  {
    slug: 'reigate',
    name: 'Reigate',
    county: 'Surrey',
    localContext:
      'In and around Reigate, decorated-goods businesses, embroiderers, printers, and workwear and promotional merchandise suppliers among them, run into the same operational gaps as the trade does everywhere else: manual workarounds standing in for a proper system, and nobody with the time to step back and look at the whole operation. A Clarity Audit here means a day on your premises, following the work as it actually happens.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Sits at the M25\'s Reigate Hill Interchange (Junction 8), one of only a few four-level stack motorway interchanges in Britain.',
    nearbyAreas: ['Redhill', 'Bletchingley', 'Horley', 'Chipstead'],
    businessSectors: ['Schoolwear suppliers', 'Garment decoration', 'Embroidery and screen print', 'Workwear suppliers'],
    regionalChallenge: 'Whether a decoration business is based in Reigate itself or out towards Redhill, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone\'s head rather than on paper.',
  },
  {
    slug: 'redhill',
    name: 'Redhill',
    county: 'Surrey',
    localContext:
      'Redhill has its share of embroidery, print, and workwear businesses, and the problems look the same as they do across the sector nationally: too much held in one person\'s head, systems that don\'t talk to each other, and growth that has outpaced the processes underneath it. I come to your site, follow the work from order in to despatch out, and write down what needs fixing.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Redhill Aerodrome, near the M23/M25 junction, is a major general-aviation and helicopter base hosting the National Police Air Service.',
    nearbyAreas: ['Reigate', 'Horley', 'Bletchingley', 'Merstham'],
    businessSectors: ['Workwear suppliers', 'Promotional merchandise', 'Signs and graphics', 'Labels and packaging'],
    regionalChallenge: 'Redhill sits within easy reach of Reigate and Horley, and decoration businesses across that whole stretch run into the same operational gaps. Distance from the workshop floor doesn\'t change what needs fixing.',
  },
  {
    slug: 'dorking',
    name: 'Dorking',
    county: 'Surrey',
    localContext:
      'Garment decorators, screen printers, and workwear and promotional merchandise suppliers working in and around Dorking face the same operational challenges as their counterparts across the region: disconnected systems, manual processes, and no single person who owns the fix. The audit runs on site, following your actual workflow, with the same written report and guarantee wherever the business is based.',
    driveTime: 'Around 30–45 minutes',
    localFact: 'West Street has been the centre of Surrey\'s antiques trade for over 50 years, drawing buyers from around the world.',
    nearbyAreas: ['Leatherhead', 'Guildford', 'Leigh', 'Abinger Hammer'],
    businessSectors: ['Labels and packaging', 'Teamwear and clubwear', 'Schoolwear suppliers', 'Garment decoration'],
    regionalChallenge: 'Being close to Leatherhead and Guildford doesn\'t change what a decoration business needs from its systems. The fix costs the same to get right wherever in Surrey you\'re based.',
  },
  {
    slug: 'farnham',
    name: 'Farnham',
    county: 'Surrey',
    localContext:
      'Farnham sits within reach of the garment decorators, screen printers, embroiderers, and workwear and promotional merchandise suppliers working across the wider area. The operational problems in this trade don\'t change from postcode to postcode: supplier data that doesn\'t match what\'s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'Home to UCA Farnham, the largest campus of the University for the Creative Arts, specialising in animation, film, and interior design.',
    nearbyAreas: ['Alton', 'Haslemere', 'Bentley', 'Crondall'],
    businessSectors: ['Garment decoration', 'Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise'],
    regionalChallenge: 'Farnham\'s decoration and print trade sits alongside Alton and Haslemere, and the operational problems don\'t stop at a town boundary. Wherever the business sits, the audit runs the same way.',
  },
  {
    slug: 'leatherhead',
    name: 'Leatherhead',
    county: 'Surrey',
    localContext:
      'In and around Leatherhead, decorated-goods businesses, embroiderers, printers, and workwear and promotional merchandise suppliers among them, run into the same operational gaps as the trade does everywhere else: manual workarounds standing in for a proper system, and nobody with the time to step back and look at the whole operation. A Clarity Audit here means a day on your premises, following the work as it actually happens.',
    driveTime: 'Around 45–60 minutes',
    localFact: 'Major multinational companies sit at Leatherhead Office Park, a well-established business campus.',
    nearbyAreas: ['Epsom', 'Dorking', 'Ashtead', 'Bookham'],
    businessSectors: ['Promotional merchandise', 'Signs and graphics', 'Labels and packaging', 'Teamwear and clubwear'],
    regionalChallenge: 'Whether a decoration business is based in Leatherhead itself or out towards Epsom, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone\'s head rather than on paper.',
  },
  {
    slug: 'camberley',
    name: 'Camberley',
    county: 'Surrey',
    localContext:
      'Camberley has its share of embroidery, print, and workwear businesses, and the problems look the same as they do across the sector nationally: too much held in one person\'s head, systems that don\'t talk to each other, and growth that has outpaced the processes underneath it. I come to your site, follow the work from order in to despatch out, and write down what needs fixing.',
    driveTime: 'Around 60–90 minutes',
    localFact: 'Watchmoor Park, a well-established business park under a mile from M3 Junction 4, sits alongside the neighbouring Royal Military Academy Sandhurst.',
    nearbyAreas: ['Frimley', 'Bagshot', 'Windlesham', 'Blackwater'],
    businessSectors: ['Teamwear and clubwear', 'Schoolwear suppliers', 'Garment decoration', 'Embroidery and screen print'],
    regionalChallenge: 'Camberley sits within easy reach of Frimley and Bagshot, and decoration businesses across that whole stretch run into the same operational gaps. Distance from the workshop floor doesn\'t change what needs fixing.',
  },
  // Greater London
  {
    slug: 'london',
    name: 'London',
    county: 'Greater London',
    localContext:
      'London has the UK\'s densest cluster of decorated-goods businesses, from embroidery shops in East London to screen printers in the West End and workwear suppliers across the South and East. The scale is different from Sussex or Surrey: higher volumes, more complex supply chains, more staff, but the underlying technology problems are the same: disconnected systems, manual processes, and nobody senior enough to own the technology decisions.',
    driveTime: 'Around 90–120 minutes (variable by location within London)',
    localFact: 'London\'s garment district around Hackney and Dalston hosts one of Europe\'s highest concentrations of independent garment decoration businesses, many serving fashion brands and corporate clients.',
    nearbyAreas: ['Croydon', 'Bromley', 'Enfield', 'Greenwich'],
    businessSectors: ['Garment decoration', 'Fashion and textiles', 'Corporate workwear', 'Promotional merchandise'],
    regionalChallenge: 'London\'s decorated-goods businesses operate at higher volumes and tighter margins than their South East counterparts. The technology decisions that are inconvenient in Worthing become existential in London, where the cost of a failed integration or a stockout runs into tens of thousands.',
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
    regionalChallenge: 'Manchester\'s decorated-goods businesses are further from Craig\'s base, which means the on-site model needs to work differently: more structured engagements, clearer scoping, and technology solutions that can be maintained remotely after the initial audit.',
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByCounty(county: LocationData['county']): LocationData[] {
  return locations.filter((l) => l.county === county);
}
