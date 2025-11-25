'use client';

import cls from './page.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <h1 className={cls.title}>Privacy Policy</h1>
        <p className={cls.lastUpdated}>Last Updated: January 2025</p>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Introduction</h2>
          <p className={cls.paragraph}>
            OnlineLoans.org (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Information We Collect</h2>
          <div className={cls.subsection}>
            <h3 className={cls.subsectionTitle}>Personal Information</h3>
            <p className={cls.paragraph}>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className={cls.list}>
              <li>Register for an account</li>
              <li>Fill out a loan application form</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our website</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className={cls.paragraph}>
              This information may include your name, email address, phone number, mailing address,
              financial information, and other details necessary to provide our services.
            </p>
          </div>
          <div className={cls.subsection}>
            <h3 className={cls.subsectionTitle}>Automatically Collected Information</h3>
            <p className={cls.paragraph}>
              When you visit our website, we automatically collect certain information about your
              device, including information about your web browser, IP address, time zone, and some
              of the cookies that are installed on your device.
            </p>
          </div>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>How We Use Your Information</h2>
          <p className={cls.paragraph}>We use the information we collect to:</p>
          <ul className={cls.list}>
            <li>Provide, maintain, and improve our services</li>
            <li>Process your loan applications and connect you with lenders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Information Sharing and Disclosure</h2>
          <p className={cls.paragraph}>
            We may share your information with third parties in the following circumstances:
          </p>
          <ul className={cls.list}>
            <li>
              <strong>Lenders and Partners:</strong> We share your information with lenders and
              financial partners to facilitate loan applications and provide you with loan offers.
            </li>
            <li>
              <strong>Service Providers:</strong> We may share information with third-party service
              providers who perform services on our behalf.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information if required by law
              or in response to valid requests by public authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
              of assets, your information may be transferred.
            </li>
          </ul>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Data Security</h2>
          <p className={cls.paragraph}>
            We implement appropriate technical and organizational security measures to protect your
            personal information. However, no method of transmission over the Internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Your Rights</h2>
          <p className={cls.paragraph}>Depending on your location, you may have the right to:</p>
          <ul className={cls.list}>
            <li>Access and receive a copy of your personal information</li>
            <li>Rectify inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Cookies and Tracking Technologies</h2>
          <p className={cls.paragraph}>
            We use cookies and similar tracking technologies to track activity on our website and
            hold certain information. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent. For more information, please see our{' '}
            <a href="/cookie-policy" className={cls.link}>
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Children&apos;s Privacy</h2>
          <p className={cls.paragraph}>
            Our services are not intended for individuals under the age of 18. We do not knowingly
            collect personal information from children. If you are a parent or guardian and believe
            your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Changes to This Privacy Policy</h2>
          <p className={cls.paragraph}>
            We may update our Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot;
            date.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Contact Us</h2>
          <p className={cls.paragraph}>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@onlineloans.org" className={cls.link}>
              contact@onlineloans.org
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

