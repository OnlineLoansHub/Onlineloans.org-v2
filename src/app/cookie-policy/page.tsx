'use client';

import cls from './page.module.scss';

export default function CookiePolicy() {
  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <h1 className={cls.title}>Cookie Policy</h1>
        <p className={cls.lastUpdated}>Last Updated: January 2025</p>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>What Are Cookies?</h2>
          <p className={cls.paragraph}>
            Cookies are small text files that are placed on your computer or mobile device when you
            visit a website. They are widely used to make websites work more efficiently and provide
            information to the website owners.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>How We Use Cookies</h2>
          <p className={cls.paragraph}>
            OnlineLoans.org uses cookies primarily through third-party services to analyze website
            traffic and improve user experience. We use Google Analytics and Google Search Console
            to understand how visitors interact with our website and to monitor site performance.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Types of Cookies We Use</h2>
          <div className={cls.subsection}>
            <h3 className={cls.subsectionTitle}>Analytics Cookies</h3>
            <p className={cls.paragraph}>
              We use Google Analytics to collect and analyze information about how visitors use our
              website. These cookies help us understand website traffic patterns, user behavior, and
              site performance. The information collected is aggregated and anonymous, helping us
              improve our website&apos;s functionality and user experience.
            </p>
          </div>
          <div className={cls.subsection}>
            <h3 className={cls.subsectionTitle}>Google Search Console</h3>
            <p className={cls.paragraph}>
              We use Google Search Console to monitor and maintain our website&apos;s presence in
              Google search results. This service helps us understand how our site appears in search
              and identify opportunities for improvement.
            </p>
          </div>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Third-Party Cookies</h2>
          <p className={cls.paragraph}>
            We use third-party services, specifically Google Analytics and Google Search Console,
            which may place cookies on your device. These services use cookies to collect
            information about your online activities on our website. Google may use this data in
            accordance with their own privacy policies.
          </p>
          <p className={cls.paragraph}>
            For more information about how Google uses cookies and data, please visit{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.link}
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Managing Cookies</h2>
          <p className={cls.paragraph}>
            You can control and manage cookies in various ways. Most browsers allow you to refuse or
            accept cookies, and to delete cookies that have already been set. However, please note
            that blocking or deleting cookies may impact your ability to use certain features of our
            website and may affect the accuracy of our analytics.
          </p>
          <p className={cls.paragraph}>
            To manage cookies in your browser, please refer to your browser&apos;s help section or
            settings menu. You can also opt out of Google Analytics by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.link}
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Updates to This Policy</h2>
          <p className={cls.paragraph}>
            We may update this Cookie Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. We encourage you to review this
            policy periodically.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Contact Us</h2>
          <p className={cls.paragraph}>
            If you have any questions about our use of cookies, please contact us at{' '}
            <a href="mailto:business@onlineloans.org" className={cls.link}>
              business@onlineloans.org
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
