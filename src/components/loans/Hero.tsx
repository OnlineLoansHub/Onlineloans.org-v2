import React from 'react';
import Image from 'next/image';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import cls from './Hero.module.scss';

interface HeroProps {
  validDate?: string;
}

export default function Hero({ validDate = 'December 21, 2025' }: HeroProps) {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section className={cls.hero}>
      <div className={cls.container}>
        {/* Main heading */}
        <h1 className={cls.title}>
          Best <span className={cls.titleHighlight}>Business Loans</span> of {monthYear}
        </h1>

        {/* Written by section */}
        <div className={cls.writtenByWrapper}>
          <WrittenBy
            name="Michael Thompson"
            role="Senior Business Finance Analyst"
            imageUrl="/images/authors/0_Man_Adult_1920x1080_optimize.gif"
            variant="dark"
          />
        </div>

        {/* Last Updated */}
        <div className={cls.lastUpdated}>
          Last Updated: {validDate}
        </div>

        {/* BBB and Trustpilot badges */}
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
  );
}

