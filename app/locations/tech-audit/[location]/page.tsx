import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LocationPage } from '@/components/LocationPage';
import { locations, getLocation } from '@/data/locations';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import { getCoverageMapHtml } from '@/lib/coverage-map';
import '@/app/d17-global.css';
import '@/app/d17-locations.css';

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return {};

  return {
    title: (loc as any).seoTitleTechAudit || `Technology Audit for ${loc.name} Businesses: Decoded Ops`,
    description: (loc as any).seoDescriptionTechAudit || `Independent technology audit for ${loc.name} SMEs. Identify hidden costs and failing systems. From £1,500 with a 3× Clarity Guarantee.`,
    alternates: {
      canonical: `/locations/tech-audit/${loc.slug}`,
    },
    openGraph: {
      title: (loc as any).seoTitleTechAudit || `Technology Audit for ${loc.name} Businesses: Decoded Ops`,
      description: (loc as any).seoDescriptionTechAudit || `Independent technology audit for ${loc.name} SMEs. Identify hidden costs and failing systems. From £1,500 with a 3× Clarity Guarantee.`,
      url: `https://decodedops.co.uk/locations/tech-audit/${loc.slug}`,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: (loc as any).seoTitleTechAudit || `Technology Audit for ${loc.name} Businesses: Decoded Ops`,
      description: (loc as any).seoDescriptionTechAudit || `Independent technology audit for ${loc.name} SMEs. Identify hidden costs and failing systems. From £1,500 with a 3× Clarity Guarantee.`,
    },
  };
}

const painPoints = [
  {
    title: 'Your systems don\'t talk to each other',
    body: 'Data moves manually between platforms. Orders get processed twice. Stock figures don\'t match. Every disconnection costs time and creates errors, and most businesses have stopped noticing how much it costs.',
  },
  {
    title: 'You know costs are higher than they should be, but can\'t see where',
    body: 'The cost is there, in headcount, rework, and customer service time, but no one has mapped where it actually comes from. The Clarity Audit finds it and costs it accurately.',
  },
  {
    title: 'Ready to scale, but the operations aren\'t',
    body: 'Revenue could grow faster. The constraint is operational: systems, process, and people doing jobs that should be automated. Finding the bottleneck is the first step to removing it.',
  },
  {
    title: 'Decisions being made on incomplete information',
    body: 'Reports take hours to produce. Numbers don\'t tie up. Decisions get made on gut feel because the data isn\'t trustworthy. This is almost always a systems problem, not a people problem.',
  },
];

const whatIdo = [
  'One structured day on site, talking to the people doing the work, not just the people managing it',
  'Map every system you\'re running, what it costs, and what it\'s actually being used for versus what it was bought to do',
  'Document every manual handoff and workaround. This is almost always where the cost is hiding',
  'Identify the three to five changes that would recover the most cost or release the most revenue',
  'Write a report within five working days: specific, costed, with independent vendor recommendations',
  'Back it with the 3× Clarity Guarantee: if the audit doesn\'t identify at least 3× the fee in recoverable cost or lost revenue, you get a full refund, no conditions',
];

function getHeroArtHtml(town: string): string {
  const t = town.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<figure class="d17 sw sw-doc a1004" data-od-id="hero-visual" data-motion data-no="DO-ART-1004" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-1004. Two documents over a graded photograph of a print room. The findings report and the roadmap.">
        <div class="d17-ph"><img src="/images/d17/locations/gen-press-hall-82ca78.webp" alt="" width="1024" height="1024"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <figcaption class="sw-cap">
          <div class="k d17-mono">Clarity Audit <span>· what you get</span></div>
          <div class="bar" aria-hidden="true"></div>
          <b>Where the cost is hiding, and what to change first.</b>
          <p>One day on site. A written report within five working days: specific, costed, with
            independent vendor recommendations.</p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-1004 · Rev 01</span>
        </figcaption>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">REPORT</span>
            <span class="ref">Clarity Audit · findings</span>
            <b>Where the cost is hiding</b>
            <p class="sub">A <span class="tv">${t}</span> business · one day on site</p>
            <div class="fx">
              <div class="r top"><span>Orders keyed in twice</span><i class="m-fill" style="--w:100%;animation-delay:.9s"></i><em>Costed</em></div>
              <div class="r"><span>Stock counted in two places</span><i class="m-fill" style="--w:78%;animation-delay:1s"></i><em>Costed</em></div>
              <div class="r"><span>Weekly report built by hand</span><i class="m-fill" style="--w:60%;animation-delay:1.1s"></i><em>Costed</em></div>
              <div class="r"><span>Artwork chased by email</span><i class="m-fill" style="--w:44%;animation-delay:1.2s"></i><em>Costed</em></div>
              <div class="r"><span>Supplier prices updated by hand</span><i class="m-fill" style="--w:32%;animation-delay:1.3s"></i><em>Costed</em></div>
            </div>
            <div class="doc-foot">Every manual handoff documented · costed line by line</div></div>
          <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">ROADMAP</span>
            <span class="ref">The changes, in order</span>
            <b>Three to five changes</b>
            <ol class="chg">
              <li>One stock figure<span class="st-chip st-chip--a">Now</span></li>
              <li>Orders entered once<span class="st-chip st-chip--a">Now</span></li>
              <li>Reports that build themselves<span class="st-chip">Next</span></li>
              <li>Platform choice, independent<span class="st-chip st-chip--o">Later</span></li>
            </ol>
            <div class="doc-foot">Vendor recommendations: independent, no commission</div></div>
          <div class="guar m-pop" style="animation-delay:1.7s"><div><b>3×</b><span>Clarity Guarantee<br>or a full refund</span></div></div>
          <div class="sx-tag t5 m-pop" style="animation-delay:1.9s"><small>Written report</small>Within five working days</div>
        </div>
      </figure>`;
}

function getStepsArtHtml(travel: string): string {
  const tr = travel.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<figure class="d17 sw a1005" data-od-id="plate-day" data-motion data-no="DO-ART-1005" data-rev="01" data-tx="plate"
              aria-label="Artwork DO-ART-1005. An example day plan for a Clarity Audit on site.">
        <div class="q-grid" aria-hidden="true"></div>
        <figcaption class="sw-cap">
          <div class="k d17-mono">Clarity Audit <span>· example day plan</span></div>
          <div class="bar" aria-hidden="true"></div>
          <b>One day on site. A written report within five.</b>
          <p>Talking to the people doing the work, not just the people managing it.</p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-1005 · Rev 01</span>
        </figcaption>
        <div class="plan" aria-hidden="true">
          <div class="lbl"><span>Day one · on site</span><span>From Worthing: ${tr}</span></div>
          <div class="day">
            <div class="blk m-fill" style="--g:1.1;animation-delay:.1s"><time>09:00</time><b>Walk the floor</b><span>See the work before hearing about it</span></div>
            <div class="blk m-fill" style="--g:1.8;animation-delay:.35s"><time>10:00</time><b>The people doing the work</b><span>Order entry, production, despatch</span></div>
            <div class="blk m-fill" style="--g:1.4;animation-delay:.6s"><time>12:30</time><b>Map every system</b><span>What it costs, what it's used for</span></div>
            <div class="blk hand m-fill" style="--g:1.5;animation-delay:.85s"><time>14:00</time><b>Trace every handoff</b><span>Where the cost is hiding</span></div>
            <div class="blk m-fill" style="--g:1;animation-delay:1.1s"><time>16:00</time><b>Debrief</b><span>First findings, with the owner</span></div>
          </div>
          <div class="five">
            <div class="dd m-fade" style="animation-delay:1.3s">Day 1<small>Findings sorted</small></div>
            <div class="dd m-fade" style="animation-delay:1.4s">Day 2<small>Every line costed</small></div>
            <div class="dd m-fade" style="animation-delay:1.5s">Day 3<small>Changes ranked</small></div>
            <div class="dd m-fade" style="animation-delay:1.6s">Day 4<small>Vendors compared</small></div>
            <div class="dd m-fade" style="animation-delay:1.7s">Day 5<small>Report written</small></div>
            <div class="rep m-drop" style="animation-delay:1.9s"><span class="ref">Written report</span><b>Specific, costed, independent</b>
              <ul><li>The three to five changes, in order</li><li>Vendor recommendations, no commission</li></ul></div>
          </div>
        </div>
      </figure>`;
}

export default async function TechAuditLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const isSussexOrSurrey = loc.county === 'West Sussex' || loc.county === 'East Sussex' || loc.county === 'Surrey';
  const trustLine = isSussexOrSurrey
    ? 'Based in the South East, on-site across Sussex and Surrey'
    : 'On-site by arrangement, remote across the UK';

  const heroArt = getHeroArtHtml(loc.name);
  const coverageMap = getCoverageMapHtml(loc.slug, loc.name, loc.county, loc.driveTime || '', 'Technology audit');
  const stepsArt = getStepsArtHtml(loc.driveTime || '');

  return (
    <>
      <D17Motion />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Tech Audit Locations', url: 'https://decodedops.co.uk/locations/tech-audit' },
        { name: loc.name, url: `https://decodedops.co.uk/locations/tech-audit/${loc.slug}` },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Technology Audit',
            description: `Technology audit services for small businesses in ${loc.name}, ${loc.county}`,
            provider: { '@id': 'https://decodedops.co.uk/#organisation' },
            areaServed: [
              {
                '@type': 'City',
                name: loc.name,
                containedInPlace: {
                  '@type': 'AdministrativeArea',
                  name: loc.county,
                },
              },
              {
                '@type': 'GeoCircle',
                geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.8179, longitude: -0.3729 },
                geoRadius: '160000',
              },
            ],
            serviceType: 'Technology Audit',
            url: `https://decodedops.co.uk/locations/tech-audit/${loc.slug}`,
          }),
        }}
      />
      <LocationPage
        town={loc.name}
        county={loc.county}
        service="Technology Audit"
        badge={`Technology Audit · ${loc.county}`}
        tagline={`Find out exactly what your systems are ||costing your ${loc.name} business.||`}
        intro={`Most ${loc.name} businesses running manual workarounds, disconnected systems, or patched-together technology are losing more than they realise. The Clarity Audit is an independent diagnostic that finds where the cost is hiding and tells you exactly what to do about it.`}
        localContext={loc.localContext}
        driveTime={loc.driveTime}
        localFact={loc.localFact}
        nearbyAreas={loc.nearbyAreas}
        businessSectors={loc.businessSectors}
        regionalChallenge={loc.regionalChallenge}
        painPoints={painPoints}
        whatIdo={whatIdo}
        cta={`Book a Clarity Audit for your ${loc.name} business, from £1,500`}
        serviceUrl="/clarity"
        serviceLabel="See how the Clarity Audit works"
        heroArtHtml={heroArt}
        coverageMapHtml={coverageMap}
        stepsArtHtml={stepsArt}
        trustLine={trustLine}
      />
    </>
  );
}
