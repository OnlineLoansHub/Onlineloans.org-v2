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
            OnlineLoans.org uses cookies to enhance your browsing experience, analyze site traffic,
            and personalize content. We use both session cookies (which expire when you close your
            browser) and persistent cookies (which remain on your device until deleted or expired).
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Types of Cookies We Use</h2>
          <div className={cls.subsection}>
            <h3 className={cls.subsectionTitle}>Essential Cookies</h3>
            <p className={cls.paragraph}>
              These cookies are necessary for the website to function properly. They enable core
              functionality such as security, network management, and accessibility.
            </p>
          </div>
          <div className={cls.subsection}>
            <h3 className={cls.subsectionTitle}>Analytics Cookies</h3>
            <p className={cls.paragraph}>
              These cookies help us understand how visitors interact with our website by collecting
              and reporting information anonymously. This helps us improve our website&apos;s
              performance and user experience.
            </p>
          </div>
          <div className={cls.subsection}>
            <h3 className={cls.subsectionTitle}>Marketing Cookies</h3>
            <p className={cls.paragraph}>
              These cookies are used to track visitors across websites to display relevant
              advertisements. They may also be used to limit the number of times you see an
              advertisement.
            </p>
          </div>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Third-Party Cookies</h2>
          <p className={cls.paragraph}>
            Some cookies are placed by third-party services that appear on our pages. We use
            third-party services for analytics, advertising, and social media integration. These
            third parties may use cookies to collect information about your online activities across
            different websites.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Managing Cookies</h2>
          <p className={cls.paragraph}>
            You can control and manage cookies in various ways. Most browsers allow you to refuse or
            accept cookies, and to delete cookies that have already been set. However, please note
            that blocking or deleting cookies may impact your ability to use certain features of our
            website.
          </p>
          <p className={cls.paragraph}>
            To manage cookies in your browser, please refer to your browser&apos;s help section or
            settings menu.
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
