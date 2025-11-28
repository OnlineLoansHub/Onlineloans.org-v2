'use client';

import cls from './page.module.scss';

export default function TermsOfUse() {
  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <h1 className={cls.title}>Terms of Use</h1>
        <p className={cls.lastUpdated}>Last Updated: January 2025</p>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Agreement to Terms</h2>
          <p className={cls.paragraph}>
            By accessing and using OnlineLoans.org, you accept and agree to be bound by the terms
            and provision of this agreement. If you do not agree to these Terms of Use, please do
            not use this website.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Use License</h2>
          <p className={cls.paragraph}>
            Permission is granted to temporarily download one copy of the materials on
            OnlineLoans.org for personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className={cls.list}>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>
              Transfer the materials to another person or mirror the materials on any other server
            </li>
          </ul>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Disclaimer</h2>
          <p className={cls.paragraph}>
            The materials on OnlineLoans.org are provided on an &apos;as is&apos; basis.
            OnlineLoans.org makes no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties including, without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Limitations</h2>
          <p className={cls.paragraph}>
            In no event shall OnlineLoans.org or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on OnlineLoans.org, even if
            OnlineLoans.org or an authorized representative has been notified orally or in writing
            of the possibility of such damage.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Accuracy of Materials</h2>
          <p className={cls.paragraph}>
            The materials appearing on OnlineLoans.org could include technical, typographical, or
            photographic errors. OnlineLoans.org does not warrant that any of the materials on its
            website are accurate, complete, or current. OnlineLoans.org may make changes to the
            materials contained on its website at any time without notice.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Links</h2>
          <p className={cls.paragraph}>
            OnlineLoans.org has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion of any link does not
            imply endorsement by OnlineLoans.org of the site. Use of any such linked website is at
            the user&apos;s own risk.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Modifications</h2>
          <p className={cls.paragraph}>
            OnlineLoans.org may revise these terms of service for its website at any time without
            notice. By using this website you are agreeing to be bound by the then current version
            of these terms of service.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Governing Law</h2>
          <p className={cls.paragraph}>
            These terms and conditions are governed by and construed in accordance with the laws and
            you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className={cls.section}>
          <h2 className={cls.sectionTitle}>Contact Us</h2>
          <p className={cls.paragraph}>
            If you have any questions about these Terms of Use, please contact us at{' '}
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
