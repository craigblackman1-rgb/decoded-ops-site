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
    title: `Fractional CTO in ${loc.name}, ${loc.county}: Decoded Ops`,
    description: `Fractional CTO for ${loc.name} businesses, senior tech leadership without the full-time hire. Strategy, oversight and plain-English advice.`,
    alternates: {
      canonical: `/locations/fractional-cto/${loc.slug}`,
    },
    openGraph: {
      title: `Fractional CTO in ${loc.name}, ${loc.county}: Decoded Ops`,
      description: `Fractional CTO for ${loc.name} businesses, senior tech leadership without the full-time hire. Strategy, oversight and plain-English advice.`,
      url: `https://decodedops.co.uk/locations/fractional-cto/${loc.slug}`,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Fractional CTO in ${loc.name}, ${loc.county}: Decoded Ops`,
      description: `Fractional CTO for ${loc.name} businesses, senior tech leadership without the full-time hire. Strategy, oversight and plain-English advice.`,
    },
  };
}

const painPoints = [
  {
    title: 'No one owns the technology decisions',
    body: 'Vendor choices and system changes get made without a plan. Every short-term fix creates a bigger problem later, and the cost quietly grows until it shows up.',
  },
  {
    title: 'Growing faster than your infrastructure',
    body: 'Revenue is growing, but your systems are straining. Manual workarounds that worked when you were smaller now create daily friction, and your team quietly absorbs the extra work.',
  },
  {
    title: 'Translating between your business and your technology',
    body: 'You shouldn\'t have to become technical to get the right outcomes from your systems. Without someone who bridges both worlds, things get lost between what you asked for and what got built.',
  },
  {
    title: 'Vendor decisions made without independent advice',
    body: 'Software salespeople are good at their job. Without someone on your side who knows what you actually need, you end up with tools that solve the vendor\'s problem, not yours.',
  },
];

const whatIdo = [
  'Map your technology: what\'s running, what it costs, and what it should do versus what it actually does',
  'Identify the decisions that need making and build a prioritised roadmap you can act on',
  'Be your technology voice with vendors, developers, investors, and your board',
  'Attend leadership meetings as your part-time tech director, present and accountable, not just on call when something breaks',
  'Build internal capability so you become less dependent over time, not more',
  'Run the Clarity Audit first if the picture is unclear, a fixed-price diagnostic before any ongoing commitment',
];

function getHeroArtHtml(town: string): string {
  const t = town.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<figure class="d17 a1001" data-od-id="hero-visual" data-motion data-no="DO-ART-1001" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-1001. Three documents over a graded photograph of an embroidery floor: the monthly technology review pack for the leadership meeting.">
        <div class="d17-ph"><img src="/images/d17/locations/hero-workshop-db78aa.webp" alt="" width="1400" height="934"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <div class="stage" aria-hidden="true">
          <div class="sx-tag t1 m-pop" style="animation-delay:1.2s"><small>Every month</small>In the leadership meeting</div>
          <div class="sx-tag sx-tag--a t2 m-pop" style="animation-delay:1.4s"><small>Standing</small>Not just on call</div>
          <div class="d17-doc doc-c m-drop" style="animation-delay:.1s"><span class="tab">PACK</span>
            <span class="ref">Monthly technology review</span>
            <h4>Leadership meeting pack</h4>
            <p class="sub">Prepared for the <span class="tv">${t}</span> leadership team</p>
            <ol class="pk">
              <li>Decisions due this month</li>
              <li>Vendor renewals and contracts</li>
              <li>Roadmap: what moved, what's next</li>
              <li>Risks, and what covers them</li>
              <li>Team capability</li>
            </ol>
            <div class="doc-foot">Independent · no vendor commission</div></div>
          <div class="d17-doc doc-d m-drop" style="animation-delay:.35s"><span class="tab">DECISIONS</span>
            <span class="ref">Decision log</span>
            <h4>Owned, dated, written down</h4>
            <div class="dl">
              <div class="r h"><span>Decision</span><span>Owner</span><span>Status</span></div>
              <div class="r"><span>Replace the order spreadsheet</span><span class="who">MD</span><span class="st-chip">Agreed</span></div>
              <div class="r"><span>Supplier feed contract renewal</span><span class="who">Ops lead</span><span class="st-chip st-chip--o">In review</span></div>
              <div class="r"><span>New web platform quote</span><span class="who">CTO</span><span class="st-chip st-chip--a">Held: data first</span></div>
              <div class="r"><span>Stock access for the floor team</span><span class="who">Warehouse</span><span class="st-chip">Done</span></div>
              <div class="r"><span>Backup and restore test</span><span class="who">CTO</span><span class="st-chip st-chip--o">Booked</span></div>
            </div></div>
          <div class="d17-doc doc-r m-drop" style="animation-delay:.6s"><span class="tab">ROADMAP</span>
            <span class="ref">Next 90 days</span>
            <h4>Now, next, later</h4>
            <div class="rm">
              <div class="c"><b>Now</b><span class="a">One stock figure</span><span>Order entry, once</span></div>
              <div class="c"><b>Next</b><span>Supplier feeds</span><span>Weekly reporting</span></div>
              <div class="c"><b>Later</b><span>Web platform</span><span>Team training</span></div>
            </div>
            <div class="doc-foot">Re-prioritised every month</div></div>
        </div>
        <div class="foot">
          <div>
            <div class="k d17-mono">Fractional CTO <span>· the monthly pack</span></div>
            <div class="bar" aria-hidden="true"></div>
            <h3>A standing decision-maker. Every decision written down.</h3>
          </div>
          <div>
            <p>Present in the room, your voice with vendors, and a roadmap you can act on,
              reviewed every month rather than rebuilt every time something breaks.</p>
            <span class="d17-mark">decodedops.co.uk · DO-ART-1001 · Rev 01</span>
          </div>
        </div>
      </figure>`;
}

function getStepsArtHtml(): string {
  return `<figure class="d17 sw a1003" data-od-id="plate-month" data-motion data-no="DO-ART-1003" data-rev="01" data-tx="poster"
              aria-label="Artwork DO-ART-1003. A route poster of a fractional CTO's month.">
        <div class="gridl" aria-hidden="true"></div>
        <p class="eb d17-mono">A fractional month</p>
        <p class="hd">Standing, not on call.</p>
        <p class="stand">The same four things every month, so decisions get made on purpose instead of in a hurry.</p>
        <div class="prints" aria-hidden="true">
          <div class="print m-rise" style="left:calc(612 * var(--u)); top:calc(60 * var(--u)); width:calc(210 * var(--u)); height:calc(172 * var(--u)); transform:rotate(-3deg); animation-delay:.2s">
            <img src="/images/d17/locations/gen-bench-flatlay-v2-fa6a3a.webp" alt=""><i class="tint"></i><span>The bench · what the team runs on</span></div>
          <div class="print m-rise" style="left:calc(846 * var(--u)); top:calc(34 * var(--u)); width:calc(250 * var(--u)); height:calc(214 * var(--u)); transform:rotate(2.5deg); animation-delay:.35s">
            <img src="/images/d17/locations/hero-workshop-99888d.webp" alt=""><i class="tint"></i><span>The floor · where decisions land</span></div>
        </div>
        <svg class="route" viewBox="0 0 1152 620" preserveAspectRatio="none" aria-hidden="true">
          <path d="M72 328 C170 328 180 388 276 388 S388 328 482 328 S592 388 688 388" fill="none" stroke="var(--do-sky-blue)" stroke-width="6" stroke-linecap="round" class="m-draw" pathLength="1"/>
          <path d="M688 388 S800 328 894 328" fill="none" stroke="var(--do-amber)" stroke-width="7" stroke-linecap="round" class="m-draw" pathLength="1" style="animation-delay:1.6s"/>
          <g fill="var(--do-off-white)" stroke="var(--do-prussian-blue)" stroke-width="5">
            <circle cx="72" cy="328" r="10"/><circle cx="276" cy="388" r="10"/><circle cx="482" cy="328" r="10"/><circle cx="688" cy="388" r="10"/>
          </g>
          <circle cx="894" cy="328" r="14" fill="var(--do-amber)" stroke="var(--do-prussian-blue)" stroke-width="5" class="m-pop" style="animation-delay:2.2s"/>
        </svg>
        <div class="stations">
          <div class="st m-fade" style="left:calc(60 * var(--u)); top:calc(354 * var(--u)); animation-delay:.3s"><span class="n">Week 1</span><h4>Leadership meeting</h4><p>In the room, present and accountable.</p></div>
          <div class="st m-fade" style="left:calc(264 * var(--u)); top:calc(414 * var(--u)); animation-delay:.6s"><span class="n">Week 2</span><h4>Vendor conversations</h4><p>Your technology voice. No commission.</p></div>
          <div class="st m-fade" style="left:calc(470 * var(--u)); top:calc(354 * var(--u)); animation-delay:.9s"><span class="n">Week 3</span><h4>Roadmap reviewed</h4><p>What moved, what's next, in order.</p></div>
          <div class="st m-fade" style="left:calc(676 * var(--u)); top:calc(414 * var(--u)); animation-delay:1.2s"><span class="n">Week 4</span><h4>Team capability</h4><p>Less dependent every month, not more.</p></div>
          <div class="st st--end m-fade" style="left:calc(882 * var(--u)); top:calc(354 * var(--u)); width:calc(240 * var(--u)); animation-delay:2.2s"><span class="n">Every month</span><h4>Decisions owned</h4><p>Written down, in the pack, month after month.</p></div>
        </div>
        <span class="d17-mark d17-mark--abs">decodedops.co.uk · DO-ART-1003 · Rev 01</span>
      </figure>`;
}

export default async function FractionalCTOLocationPage({
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
  const coverageMap = getCoverageMapHtml(loc.slug, loc.name, loc.county, loc.driveTime || '', 'Fractional CTO');
  const stepsArt = getStepsArtHtml();

  return (
    <>
      <D17Motion />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Fractional CTO Locations', url: 'https://decodedops.co.uk/locations/fractional-cto' },
        { name: loc.name, url: `https://decodedops.co.uk/locations/fractional-cto/${loc.slug}` },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Decoded Ops',
            description: `Fractional CTO services for businesses in ${loc.name}, ${loc.county}`,
            address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
            telephone: '07735 620 603',
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
            geo: { '@type': 'GeoCoordinates', latitude: 50.8179, longitude: -0.3729 },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Fractional CTO',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Fractional CTO',
                    url: 'https://decodedops.co.uk/retained',
                  },
                },
              ],
            },
            parentOrganization: { '@id': 'https://decodedops.co.uk/#organisation' },
            url: `https://decodedops.co.uk/locations/fractional-cto/${loc.slug}`,
          }),
        }}
      />
      <LocationPage
        town={loc.name}
        county={loc.county}
        service="Fractional CTO"
        badge={`Fractional CTO · ${loc.county}`}
        tagline={`Senior technology leadership for ||${loc.name} businesses||, without the full-time hire.`}
        intro={`Growing businesses in ${loc.name} face real technology decisions: which vendor to pick, which systems to integrate, which platform to choose. Without someone senior owning those decisions, the cost quietly adds up.`}
        localContext={loc.localContext}
        driveTime={loc.driveTime}
        localFact={loc.localFact}
        nearbyAreas={loc.nearbyAreas}
        businessSectors={loc.businessSectors}
        regionalChallenge={loc.regionalChallenge}
        painPoints={painPoints}
        whatIdo={whatIdo}
        cta={`Find out if a fractional CTO is right for your ${loc.name} business`}
        serviceUrl="/retained"
        serviceLabel="See how fractional CTO works"
        heroArtHtml={heroArt}
        coverageMapHtml={coverageMap}
        stepsArtHtml={stepsArt}
        trustLine={trustLine}
      />
    </>
  );
}
