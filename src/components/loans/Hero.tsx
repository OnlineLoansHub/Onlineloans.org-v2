import React from 'react';
import Image from 'next/image';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import cls from './Hero.module.scss';
import type { HeroConfig } from '@/data/productTypes';

interface HeroProps {
  heroConfig: HeroConfig;
  validDate?: string;
}

export default function Hero({ heroConfig, validDate }: HeroProps) {
  const monthYear = 'January 2026';

  return (
    <section className={cls.hero}>
      {/* Decorative Wave Pattern - Right Side */}
      <div className={cls.wavePattern}>
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 0C50 0 150 100 150 200C150 300 50 400 50 500C50 600 150 700 150 700"
            stroke="var(--color-primary)"
            strokeWidth="2"
          />
          <path
            d="M100 0C100 0 200 100 200 200C200 300 100 400 100 500C100 600 200 700 200 700"
            stroke="var(--color-primary)"
            strokeWidth="2"
          />
          <path
            d="M150 0C150 0 250 100 250 200C250 300 150 400 150 500C150 600 250 700 250 700"
            stroke="var(--color-primary)"
            strokeWidth="2"
          />
          <path
            d="M200 0C200 0 300 100 300 200C300 300 200 400 200 500C200 600 300 700 300 700"
            stroke="var(--color-primary)"
            strokeWidth="2"
          />
          <path
            d="M250 0C250 0 350 100 350 200C350 300 250 400 250 500C250 600 350 700 350 700"
            stroke="var(--color-primary)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className={cls.container}>
        {/* Main heading */}
        <h1 className={cls.title}>
          {heroConfig.title}{' '}
          {heroConfig.titleHighlight && (
            <span className={cls.titleHighlight}>{heroConfig.titleHighlight}</span>
          )}{' '}
          of {monthYear}
        </h1>

        {/* Written by section */}
        <div className={cls.writtenByWrapper}>
          <WrittenBy
            name={heroConfig.authorName}
            role={heroConfig.authorRole}
            imageUrl={heroConfig.authorImageUrl}
            variant="dark"
          />
        </div>

        {/* Last Updated */}
        {validDate && <div className={cls.lastUpdated}>Last Updated: {validDate}</div>}

        {/* BBB and Trustpilot badges */}
        <div className={cls.trustBadges}>
          <Image
            src={heroConfig.badgeImagePath}
            alt="BBB and Trustpilot badges"
            width={350}
            height={53}
            className={cls.trustBadgesImage}
            priority
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
