import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Decoded Ops',
  description: 'How Decoded Ops collects, uses, and protects your personal data. Read the full privacy policy for details of your rights and how to get in touch.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy | Decoded Ops',
    description: 'How Decoded Ops collects, uses, and protects your personal data. Read the full privacy policy for details of your rights and how to get in touch.',
    url: 'https://decodedops.co.uk/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Decoded Ops',
    description: 'How Decoded Ops collects, uses, and protects your personal data. Read the full privacy policy for details of your rights and how to get in touch.',
  },
};

const sectionH2 = { fontSize: 'var(--do-text-2xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-primary)', marginBottom: 16 } as const;
const sectionH3 = { fontSize: 'var(--do-text-lg)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)', marginTop: 24, marginBottom: 12 } as const;
const bodyText = { color: 'var(--do-text-secondary)', lineHeight: 1.75, marginBottom: 16 } as const;

export default function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h1 className="h1">Privacy Policy</h1>
          <p className="lede">Last updated: April 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

            {/* 1. Introduction */}
            <div>
              <h2 style={sectionH2}>1. Introduction</h2>
              <p style={bodyText}>
                decodedops.co.uk is operated by Craig Blackman trading as Decoded Ops. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit this website and use my services.
              </p>
              <p style={bodyText}>
                Please read this Privacy Policy carefully. If you do not agree with this policy, please do not use this website.
              </p>
            </div>

            {/* 2. Information I Collect */}
            <div>
              <h2 style={sectionH2}>2. Information I Collect</h2>

              <h3 style={sectionH3}>Information You Provide Directly</h3>
              <p style={bodyText}>
                I collect information you voluntarily provide when you:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li>Complete contact forms on this website</li>
                <li>Request a discovery call or consultation</li>
                <li>Send me emails or messages</li>
                <li>Participate in calls, meetings, or video conferences</li>
              </ul>
              <p style={bodyText}>
                This information typically includes: name, email address, phone number, company name, industry, and details about your business needs and operations.
              </p>

              <h3 style={sectionH3}>Automatically Collected Information</h3>
              <p style={bodyText}>
                When you visit this website, I automatically collect:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li>Device information (browser type, operating system, IP address)</li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Referral source (where you came from)</li>
              </ul>
              <p style={bodyText}>
                I use cookies and similar tracking technologies to collect this information. You can control cookies through your browser settings.
              </p>
            </div>

            {/* 3. How I Use Your Information */}
            <div>
              <h2 style={sectionH2}>3. How I Use Your Information</h2>
              <p style={bodyText}>
                I use the information I collect for:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li>Responding to your inquiries and providing the services you request</li>
                <li>Scheduling and conducting discovery calls and consultations</li>
                <li>Sending you relevant information about my services (only with your consent)</li>
                <li>Improving the website and services based on how you use them</li>
                <li>Complying with legal obligations</li>
                <li>Analysing trends and usage patterns to better serve my customers</li>
                <li>Protecting against fraud and securing my systems</li>
              </ul>
            </div>

            {/* 4. Legal Basis for Processing */}
            <div>
              <h2 style={sectionH2}>4. Legal Basis for Processing (GDPR/UK)</h2>
              <p style={bodyText}>
                If you are located in the EU or UK, I process your personal data under the following legal bases:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li><strong>Consent:</strong> When you provide information through contact forms or agree to receive communications</li>
                <li><strong>Legitimate interest:</strong> To operate the website, respond to inquiries, and improve my services</li>
                <li><strong>Performance of contract:</strong> To provide services you have requested</li>
                <li><strong>Legal obligation:</strong> To comply with applicable laws</li>
              </ul>
            </div>

            {/* 5. How I Share Your Information */}
            <div>
              <h2 style={sectionH2}>5. How I Share Your Information</h2>
              <p style={bodyText}>
                I do not sell, trade, or rent your personal information. I only share your data with:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li><strong>Service providers:</strong> Third parties who help me operate the website and provide services (e.g., email, scheduling, analytics), only under strict confidentiality agreements</li>
                <li><strong>Legal requirement:</strong> When required by law or court order</li>
              </ul>
              <p style={bodyText}>
                I do not share your information with vendors or third parties for marketing purposes without your explicit consent.
              </p>
            </div>

            {/* 6. How Long I Keep Your Data */}
            <div>
              <h2 style={sectionH2}>6. How Long I Keep Your Data</h2>
              <p style={bodyText}>
                I retain your personal information for as long as necessary to:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li>Provide the services you requested</li>
                <li>Fulfil my legal and contractual obligations</li>
                <li>Resolve disputes and enforce my agreements</li>
              </ul>
              <p style={bodyText}>
                If you request deletion or if you no longer wish to receive communications, I will delete or anonymise your data within 30 days, except where I am required to retain it by law.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 style={sectionH2}>7. Your Rights</h2>
              <p style={bodyText}>
                Depending on your location, you may have the following rights:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li><strong>Right to access:</strong> You can request a copy of the personal data I hold about you</li>
                <li><strong>Right to rectification:</strong> You can request that I correct inaccurate data</li>
                <li><strong>Right to erasure:</strong> You can request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
                <li><strong>Right to restrict processing:</strong> You can ask me to limit how I use your data</li>
                <li><strong>Right to data portability:</strong> You can request your data in a structured, portable format</li>
                <li><strong>Right to opt-out:</strong> You can unsubscribe from marketing communications at any time</li>
                <li><strong>Right to withdraw consent:</strong> You can withdraw consent at any time where I rely on it</li>
              </ul>
              <p style={bodyText}>
                To exercise any of these rights, contact me at the details below.
              </p>
            </div>

            {/* 8. Data Security */}
            <div>
              <h2 style={sectionH2}>8. Data Security</h2>
              <p style={bodyText}>
                I implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. While I strive to protect your information, I cannot guarantee absolute security.
              </p>
            </div>

            {/* 9. Third-Party Links */}
            <div>
              <h2 style={sectionH2}>9. Third-Party Links</h2>
              <p style={bodyText}>
                This website may contain links to third-party websites. This Privacy Policy does not apply to those sites, and I am not responsible for their privacy practices. I encourage you to review the privacy policies of any third-party websites before providing your information.
              </p>
            </div>

            {/* 10. Cookies */}
            <div>
              <h2 style={sectionH2}>10. Cookies</h2>
              <p style={bodyText}>
                This website uses cookies to enhance your experience. You can control cookie settings in your browser. Disabling cookies may affect some functionality of the site.
              </p>
            </div>

            {/* 11. Contact Me */}
            <div>
              <h2 style={sectionH2}>11. Contact Me</h2>
              <p style={bodyText}>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact me:
              </p>
              <div className="card" style={{ marginTop: 16 }}>
                <p style={{ fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)', marginBottom: 8 }}>Decoded Ops</p>
                <p style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, marginBottom: 0 }}>
                  <strong style={{ color: 'var(--do-text-primary)' }}>Email:</strong> craig@decodedops.co.uk<br />
                  <strong style={{ color: 'var(--do-text-primary)' }}>Website:</strong> decodedops.co.uk
                </p>
              </div>
            </div>

            {/* 12. Changes to This Privacy Policy */}
            <div>
              <h2 style={sectionH2}>12. Changes to This Privacy Policy</h2>
              <p style={bodyText}>
                I may update this Privacy Policy from time to time. I will notify you of material changes by updating the date at the top of this page. Your continued use of this website following the posting of changes constitutes your acceptance of those changes.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
