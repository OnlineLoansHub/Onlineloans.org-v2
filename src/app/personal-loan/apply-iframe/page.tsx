'use client';

import Image from 'next/image';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import { IframeEmbed } from '@/components/iframes';
import cls from './page.module.scss';

export default function PersonalLoanIframeLandingPage() {
  return (
    <div className={cls.page}>
      {/* Hero Section */}
      <section className={cls.hero}>
        <div className={cls.container} style={{ position: 'relative', zIndex: 1 }}>
          <h1 className={cls.heroTitle}>
          Borrow up to $50,000 with good & bad credit.
          </h1>
          <div className={cls.heroSubtitle}>
            <p className={cls.heroSubtitleText}>The Loan is based on the following criteria:</p>
            <ul className={cls.heroSubtitleList}>
              <li>6.5% Interest Rate</li>
              <li>No impact to your credit score</li>
              <li>All online — no phone calls</li>
            </ul>
          </div>
          <div className={cls.writtenByWrapper}>
            <WrittenBy
              name="Michael Thompson"
              role="Senior Personal Finance Analyst"
              imageUrl="/images/authors/0_Man_Adult_1920x1080_optimize.gif"
              variant="dark"
            />
          </div>
          <div className={cls.heroMeta}>
            <p className={cls.lastUpdated}>Last Updated: December 14, 2025</p>
          </div>
          <div className={cls.trustBadges}>
            <Image
              src="/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg"
              alt="BBB and Trustpilot badges"
              width={350}
              height={53}
              className={cls.trustBadgesImage}
            />
          </div>
        </div>
      </section>

      {/* Iframe Section - Primary Focus */}
      <section id="application-form-section" className={cls.iframeSection}>
        <div id="application-form-wrapper">
          <IframeEmbed iframeId="PL-LeadStackStyle1" />
        </div>
      </section>

      {/* Micro Reassurance */}
      <section className={cls.reassuranceSection}>
        <div className={cls.container}>
          <p className={cls.reassuranceText}>
            Takes only a few minutes • Your information is secure • No obligation to accept an offer
          </p>
        </div>
      </section>
    </div>
  );
}
