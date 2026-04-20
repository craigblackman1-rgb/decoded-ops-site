import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Decoded Ops',
  description: 'Learn how Decoded Ops uses cookies and how to manage your preferences.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#023047] pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-[#023047]/70">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8 text-[#023047]">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What are cookies?</h2>
            <p className="text-base leading-relaxed">
              Cookies are small text files that are placed on your browser when you visit a website. They help websites remember information about your visit, such as your preferences and login details. Cookies can be stored on your device for varying lengths of time.
            </p>
          </section>

          {/* Why we use cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Why we use cookies</h2>
            <p className="text-base leading-relaxed mb-4">
              At Decoded Ops, we use cookies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li><strong>Remember your preferences:</strong> We save your cookie consent choice so we don't ask again</li>
              <li><strong>Improve your experience:</strong> Cookies help us understand how you navigate our site</li>
              <li><strong>Measure analytics:</strong> We use cookies to count visitors and track which pages are most popular</li>
              <li><strong>Security:</strong> Cookies help protect your account and prevent unauthorized access</li>
              <li><strong>Marketing:</strong> We may use cookies to show you relevant content across the web</li>
            </ul>
          </section>

          {/* Types of cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Types of cookies we use</h2>

            <div className="space-y-6">
              {/* Essential cookies */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential cookies</h3>
                <p className="text-base leading-relaxed">
                  These cookies are necessary for our website to function properly. They enable core functionality like navigation and access to secure areas. Without these cookies, services you've asked for cannot be provided. These cannot be disabled.
                </p>
                <p className="text-sm text-[#023047]/70 mt-2">Examples: Cookie consent preference, session tokens, security settings</p>
              </div>

              {/* Performance cookies */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance cookies</h3>
                <p className="text-base leading-relaxed">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They help us understand which pages are most popular and how visitors navigate the site.
                </p>
                <p className="text-sm text-[#023047]/70 mt-2">Examples: Google Analytics, page view tracking</p>
              </div>

              {/* Functional cookies */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Functional cookies</h3>
                <p className="text-base leading-relaxed">
                  These cookies enable enhanced functionality and personalization. They remember choices you've made (such as your preferences) and can be used to provide services you've requested.
                </p>
                <p className="text-sm text-[#023047]/70 mt-2">Examples: Preference remembering, form data</p>
              </div>

              {/* Marketing cookies */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing cookies</h3>
                <p className="text-base leading-relaxed">
                  These cookies are used to track your activity across the web so we can show you relevant content and advertising. They may be set by advertising networks with our permission.
                </p>
                <p className="text-sm text-[#023047]/70 mt-2">Examples: Advertising tracking, remarketing pixels</p>
              </div>
            </div>
          </section>

          {/* Managing cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Managing your cookie preferences</h2>
            <p className="text-base leading-relaxed mb-4">
              You have the right to choose whether to accept or decline cookies (except essential cookies which cannot be disabled). You can manage your preferences in several ways:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base">
              <li><strong>Cookie banner:</strong> Use the cookie preference banner that appears when you first visit our site</li>
              <li><strong>Browser settings:</strong> You can configure your browser to refuse cookies or alert you when a cookie is being sent. Each browser is different, so check your browser's help menu for instructions</li>
              <li><strong>Third-party tools:</strong> You can visit sites like Your Online Choices to manage cookies from advertising networks</li>
            </ul>
          </section>

          {/* Third-party cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Third-party cookies</h2>
            <p className="text-base leading-relaxed">
              Some cookies on our site are set by third parties, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li><strong>Google Analytics:</strong> For measuring website traffic and user behavior</li>
              <li><strong>Social media platforms:</strong> For social sharing and tracking</li>
              <li><strong>Advertising networks:</strong> For targeted advertising and remarketing</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              These third parties have their own privacy policies and are responsible for their own cookie practices. We recommend reviewing their policies if you want to understand how they use cookies.
            </p>
          </section>

          {/* Security and data */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Security and data protection</h2>
            <p className="text-base leading-relaxed">
              We take your privacy seriously. Cookies cannot be used to run programmes, deliver viruses, or directly access your hard drive. They cannot identify you personally unless you explicitly log in. We use security measures to protect cookie data from unauthorised access and misuse.
            </p>
          </section>

          {/* Changes to policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to this policy</h2>
            <p className="text-base leading-relaxed">
              We may update this cookie policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact us</h2>
            <p className="text-base leading-relaxed">
              If you have questions about our use of cookies or this policy, please{' '}
              <a href="/contact" className="text-[#219EBC] hover:text-[#219EBC]/80 underline font-medium">
                contact us
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back button */}
        <div className="mt-12 pt-8 border-t border-[#8ECAE6]/30">
          <a
            href="/"
            className="inline-block px-6 py-2.5 bg-[#219EBC] text-white rounded-full hover:bg-[#219EBC]/80 transition-colors font-medium text-sm"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
