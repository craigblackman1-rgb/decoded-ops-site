import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Decoded Ops',
  description: 'How Decoded Ops uses cookies — what we set, why we set it, and how to manage your preferences. Cookie policy and consent options for decodedops.co.uk.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    type: 'website',
    title: 'Cookie Policy | Decoded Ops',
    description: 'How Decoded Ops uses cookies — what we set, why we set it, and how to manage your preferences. Cookie policy and consent options for decodedops.co.uk.',
    url: 'https://decodedops.co.uk/cookies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Decoded Ops',
    description: 'How Decoded Ops uses cookies — what we set, why we set it, and how to manage your preferences. Cookie policy and consent options for decodedops.co.uk.',
  },
};

const sectionH2 = { fontSize: 'var(--do-text-2xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-primary)', marginBottom: 16 } as const;
const sectionH3 = { fontSize: 'var(--do-text-xl)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)', marginBottom: 8 } as const;
const bodyText = { fontSize: 'var(--do-text-base)', color: 'var(--do-text-secondary)', lineHeight: 1.75, marginBottom: 16 } as const;
const smallText = { fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)', lineHeight: 1.75, marginTop: 8 } as const;

export default function CookiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h1 className="h1">Cookie Policy</h1>
          <p className="lede">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

            {/* Introduction */}
            <div>
              <h2 style={sectionH2}>What are cookies?</h2>
              <p style={bodyText}>
                Cookies are small text files that are placed on your browser when you visit a website. They help websites remember information about your visit, such as your preferences and login details. Cookies can be stored on your device for varying lengths of time.
              </p>
            </div>

            {/* Why we use cookies */}
            <div>
              <h2 style={sectionH2}>Why we use cookies</h2>
              <p style={bodyText}>
                At Decoded Ops, we use cookies to:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li><strong>Remember your preferences:</strong> We save your cookie consent choice so we don&apos;t ask again</li>
                <li><strong>Improve your experience:</strong> Cookies help us understand how you navigate our site</li>
                <li><strong>Measure analytics:</strong> We use cookies to count visitors and track which pages are most popular</li>
                <li><strong>Security:</strong> Cookies help protect your account and prevent unauthorized access</li>
                <li><strong>Marketing:</strong> We may use cookies to show you relevant content across the web</li>
              </ul>
            </div>

            {/* Types of cookies */}
            <div>
              <h2 style={sectionH2}>Types of cookies we use</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <h3 style={sectionH3}>Essential cookies</h3>
                  <p style={bodyText}>
                    These cookies are necessary for our website to function properly. They enable core functionality like navigation and access to secure areas. Without these cookies, services you&apos;ve asked for cannot be provided. These cannot be disabled.
                  </p>
                  <p style={smallText}>Examples: Cookie consent preference, session tokens, security settings</p>
                </div>

                <div>
                  <h3 style={sectionH3}>Performance cookies</h3>
                  <p style={bodyText}>
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They help us understand which pages are most popular and how visitors navigate the site.
                  </p>
                  <p style={smallText}>Examples: Google Analytics, page view tracking</p>
                </div>

                <div>
                  <h3 style={sectionH3}>Functional cookies</h3>
                  <p style={bodyText}>
                    These cookies enable enhanced functionality and personalisation. They remember choices you&apos;ve made (such as your preferences) and can be used to provide services you&apos;ve requested.
                  </p>
                  <p style={smallText}>Examples: Preference remembering, form data</p>
                </div>

                <div>
                  <h3 style={sectionH3}>Marketing cookies</h3>
                  <p style={bodyText}>
                    These cookies are used to track your activity across the web so we can show you relevant content and advertising. They may be set by advertising networks with our permission.
                  </p>
                  <p style={smallText}>Examples: Advertising tracking, remarketing pixels</p>
                </div>
              </div>
            </div>

            {/* Managing cookies */}
            <div>
              <h2 style={sectionH2}>Managing your cookie preferences</h2>
              <p style={bodyText}>
                You have the right to choose whether to accept or decline cookies (except essential cookies which cannot be disabled). You can manage your preferences in several ways:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li><strong>Cookie banner:</strong> Use the cookie preference banner that appears when you first visit our site</li>
                <li><strong>Browser settings:</strong> You can configure your browser to refuse cookies or alert you when a cookie is being sent. Each browser is different, so check your browser&apos;s help menu for instructions</li>
                <li><strong>Third-party tools:</strong> You can visit sites like Your Online Choices to manage cookies from advertising networks</li>
              </ul>
            </div>

            {/* Third-party cookies */}
            <div>
              <h2 style={sectionH2}>Third-party cookies</h2>
              <p style={bodyText}>
                Some cookies on our site are set by third parties, including:
              </p>
              <ul style={{ color: 'var(--do-text-secondary)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 16 }}>
                <li><strong>Google Analytics:</strong> For measuring website traffic and user behavior</li>
                <li><strong>Social media platforms:</strong> For social sharing and tracking</li>
                <li><strong>Advertising networks:</strong> For targeted advertising and remarketing</li>
              </ul>
              <p style={bodyText}>
                These third parties have their own privacy policies and are responsible for their own cookie practices. We recommend reviewing their policies if you want to understand how they use cookies.
              </p>
            </div>

            {/* Security and data */}
            <div>
              <h2 style={sectionH2}>Security and data protection</h2>
              <p style={bodyText}>
                We take your privacy seriously. Cookies cannot be used to run programmes, deliver viruses, or directly access your hard drive. They cannot identify you personally unless you explicitly log in. We use security measures to protect cookie data from unauthorised access and misuse.
              </p>
            </div>

            {/* Changes to policy */}
            <div>
              <h2 style={sectionH2}>Changes to this policy</h2>
              <p style={bodyText}>
                We may update this cookie policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 style={sectionH2}>Contact us</h2>
              <p style={bodyText}>
                If you have questions about our use of cookies or this policy, please{' '}
                <a href="/contact" style={{ color: 'var(--do-cerulean)', textDecoration: 'underline', fontWeight: 'var(--do-weight-medium)' }}>
                  contact us
                </a>
                .
              </p>
            </div>
          </div>

          {/* Back button */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--do-border-subtle)' }}>
            <a
              href="/"
              className="btn btn--outline"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
