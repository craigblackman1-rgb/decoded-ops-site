import type { Metadata } from 'next';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-locations.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy: Decoded Ops',
  description: 'How Decoded Ops collects, uses, and protects your personal data. Read the full privacy policy for details of your rights and how to get in touch.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy: Decoded Ops',
    description: 'How Decoded Ops collects, uses, and protects your personal data. Read the full privacy policy for details of your rights and how to get in touch.',
    url: 'https://decodedops.co.uk/privacy',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy: Decoded Ops',
    description: 'How Decoded Ops collects, uses, and protects your personal data. Read the full privacy policy for details of your rights and how to get in touch.',
    images: [OG_IMAGE_PATH],
  },
};

const privacyArtHtml = `<figure class="d17 a1006" data-od-id="plate-keep" data-motion data-no="DO-ART-1006" data-rev="01" data-tx="plate"
              aria-label="Artwork DO-ART-1006. What I keep, and for how long, summarised from the policy below.">
        <div class="q-grid" aria-hidden="true"></div>
        <div class="lg-k d17-mono" aria-hidden="true"><span>In short</span><span>The full policy is below</span></div>
        <div class="keep" aria-hidden="true">
          <div class="cd m-rise" style="animation-delay:.1s"><span class="ref">01 · You give me</span><b>What you tell me</b>
            <ul><li>Name, email, phone</li><li>Company and industry</li><li>What your business needs</li></ul></div>
          <div class="cd m-rise" style="animation-delay:.35s"><span class="ref">02 · The site notes</span><b>How you visit</b>
            <ul><li>Device and browser</li><li>Pages visited</li><li>Where you came from</li></ul></div>
          <div class="cd m-rise" style="animation-delay:.6s"><span class="ref">03 · I use it to</span><b>Reply and improve</b>
            <ul><li>Answer your enquiry</li><li>Book and run calls</li><li>Improve the site</li></ul></div>
        </div>
        <div class="rules" aria-hidden="true">
          <span class="m-fade" style="animation-delay:.9s">Never sold, traded or rented</span>
          <span class="m-fade" style="animation-delay:1s">Kept only as long as needed</span>
          <span class="a m-pop" style="animation-delay:1.2s">Deleted or anonymised within 30 days of asking</span>
        </div>
        <span class="d17-mark">decodedops.co.uk · DO-ART-1006 · Rev 01</span>
      </figure>`;

export default function PrivacyPage() {
  return (
    <>
      <D17Motion />

      {/* HERO + DO-ART-1006 */}
      <section className="g-off">
        <div className="wrap hero-center">
          <h1>Privacy policy</h1>
          <p className="lede">Last updated: April 2026</p>
        </div>
        <div className="wrap legal-art" dangerouslySetInnerHTML={{ __html: privacyArtHtml }} />
      </section>

      {/* ARTICLE BODY */}
      <section className="g-white">
        <div className="wrap prose">

          <section data-od-id="s1">
            <h2>1. Introduction</h2>
            <p>decodedops.co.uk is operated by Craig Blackman trading as Decoded Ops. This Privacy
              Policy explains how I collect, use, disclose, and safeguard your information when you
              visit this website and use my services.</p>
            <p>Please read this Privacy Policy carefully. If you do not agree with this policy, please
              do not use this website.</p>
          </section>

          <section data-od-id="s2">
            <h2>2. Information I collect</h2>
            <h3>Information you provide directly</h3>
            <p>I collect information you voluntarily provide when you:</p>
            <ul>
              <li>Complete contact forms on this website</li>
              <li>Request a discovery call or consultation</li>
              <li>Send me emails or messages</li>
              <li>Participate in calls, meetings, or video conferences</li>
            </ul>
            <p>This information typically includes: name, email address, phone number, company name,
              industry, and details about your business needs and operations.</p>
            <h3>Automatically collected information</h3>
            <p>When you visit this website, I automatically collect:</p>
            <ul>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Usage data (pages visited, time spent, links clicked)</li>
              <li>Referral source (where you came from)</li>
            </ul>
            <p>I use cookies and similar tracking technologies to collect this information. You can
              control cookies through your browser settings.</p>
          </section>

          <section data-od-id="s3">
            <h2>3. How I use your information</h2>
            <p>I use the information I collect for:</p>
            <ul>
              <li>Responding to your inquiries and providing the services you request</li>
              <li>Scheduling and conducting discovery calls and consultations</li>
              <li>Sending you relevant information about my services (only with your consent)</li>
              <li>Improving the website and services based on how you use them</li>
              <li>Complying with legal obligations</li>
              <li>Analysing trends and usage patterns to better serve my customers</li>
              <li>Protecting against fraud and securing my systems</li>
            </ul>
          </section>

          <section data-od-id="s4">
            <h2>4. Legal basis for processing (GDPR/UK)</h2>
            <p>If you are located in the EU or UK, I process your personal data under the following
              legal bases:</p>
            <ul>
              <li><b>Consent:</b> When you provide information through contact forms or agree to receive communications</li>
              <li><b>Legitimate interest:</b> To operate the website, respond to inquiries, and improve my services</li>
              <li><b>Performance of contract:</b> To provide services you have requested</li>
              <li><b>Legal obligation:</b> To comply with applicable laws</li>
            </ul>
          </section>

          <section data-od-id="s5">
            <h2>5. How I share your information</h2>
            <p>I do not sell, trade, or rent your personal information. I only share your data with:</p>
            <ul>
              <li><b>Service providers:</b> Third parties who help me operate the website and provide
                services (e.g., email, scheduling, analytics), only under strict confidentiality
                agreements</li>
              <li><b>Legal requirement:</b> When required by law or court order</li>
            </ul>
            <p>I do not share your information with vendors or third parties for marketing purposes
              without your explicit consent.</p>
          </section>

          <section data-od-id="s6">
            <h2>6. How long I keep your data</h2>
            <p>I retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide the services you requested</li>
              <li>Fulfil my legal and contractual obligations</li>
              <li>Resolve disputes and enforce my agreements</li>
            </ul>
            <p>If you request deletion or if you no longer wish to receive communications, I will
              delete or anonymise your data within 30 days, except where I am required to retain it by
              law.</p>
          </section>

          <section data-od-id="s7">
            <h2>7. Your rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><b>Right to access:</b> You can request a copy of the personal data I hold about you</li>
              <li><b>Right to rectification:</b> You can request that I correct inaccurate data</li>
              <li><b>Right to erasure:</b> You can request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li><b>Right to restrict processing:</b> You can ask me to limit how I use your data</li>
              <li><b>Right to data portability:</b> You can request your data in a structured, portable format</li>
              <li><b>Right to opt-out:</b> You can unsubscribe from marketing communications at any time</li>
              <li><b>Right to withdraw consent:</b> You can withdraw consent at any time where I rely on it</li>
            </ul>
            <p>To exercise any of these rights, contact me at the details below.</p>
          </section>

          <section data-od-id="s8">
            <h2>8. Data security</h2>
            <p>I implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is 100% secure. While I strive to protect your
              information, I cannot guarantee absolute security.</p>
          </section>

          <section data-od-id="s9">
            <h2>9. Third-party links</h2>
            <p>This website may contain links to third-party websites. This Privacy Policy does not
              apply to those sites, and I am not responsible for their privacy practices. I encourage
              you to review the privacy policies of any third-party websites before providing your
              information.</p>
          </section>

          <section data-od-id="s10">
            <h2>10. Cookies</h2>
            <p>This website uses cookies to enhance your experience. You can control cookie settings in
              your browser. Disabling cookies may affect some functionality of the site.</p>
          </section>

          <section data-od-id="s11">
            <h2>11. Contact me</h2>
            <p>If you have questions about this Privacy Policy or wish to exercise your rights, please
              contact me:</p>
            <div className="contact-box">
              <p><b>Decoded Ops</b><br />
              Email: craig@decodedops.co.uk<br />
              Website: decodedops.co.uk</p>
            </div>
          </section>

          <section data-od-id="s12">
            <h2>12. Changes to this privacy policy</h2>
            <p>I may update this Privacy Policy from time to time. I will notify you of material
              changes by updating the date at the top of this page. Your continued use of this website
              following the posting of changes constitutes your acceptance of those changes.</p>
          </section>

        </div>
      </section>
    </>
  );
}
