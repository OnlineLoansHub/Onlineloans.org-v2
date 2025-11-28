'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { LENDER_TABLE_CONFIG } from './config';
import cls from './LenderTable.module.scss';

interface LenderTableProps {
  loanType?: 'personal' | 'business';
}

const getRatingText = (rating: string): string => {
  const num = parseFloat(rating);
  if (num >= 9.0) return 'Excellent';
  if (num >= 8.0) return 'Good';
  if (num >= 7.0) return 'Fair';

  return 'Average';
};

export const LenderTable = ({ loanType }: LenderTableProps) => {
  const filteredLenders = loanType
    ? LENDER_TABLE_CONFIG.filter((lender) => lender.loanType === loanType)
    : LENDER_TABLE_CONFIG;

  return (
    <div className={cls.wrapper}>
      <div className={cls.mainContent}>
        <ul className={cls.list}>
          {filteredLenders.map((item, index) => (
            <li key={item.id} className={cls.card}>
              {/* Rank Badge */}
              <div className={cls.rankBadge}>{index + 1}</div>

              {/* Image Section */}
              <div className={cls.imageSection}>
                <div className={cls.imageContainer}>
                  <Image
                    src={item.imgSrc}
                    alt={item.alt}
                    width={300}
                    height={200}
                    className={cls.logo}
                    priority={index === 0}
                    unoptimized
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={cls.contentSection}>
                {/* Top Row: Title & Rating */}
                <div className={cls.topRow}>
                  <div className={cls.titleGroup}>
                    <h3 className={cls.title}>{item.title}</h3>
                    <p className={cls.subtitle}>{item.subtitle}</p>
                    <div className={cls.reviews}>
                      <span className={cls.reviewCount}>{item.reviewsNumber} reviews</span>
                      {' by '}
                      <Image
                        src="/images/icons/features/onlineloans-decorative-shape.svg"
                        alt="Trustpilot"
                        width={20}
                        height={18}
                        className={cls.trustpilotIcon}
                      />{' '}
                      <span className={cls.trustpilotText}>Trustpilot</span>
                    </div>
                  </div>
                  <div className={cls.ratingGroup}>
                    <div className={cls.rating}>
                      <span className={cls.ratingValue}>{item.rating}</span>
                      <div className={cls.stars}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Image
                            key={star}
                            src="/images/table/rating-star.svg"
                            alt="Star"
                            width={20}
                            height={18}
                            className={cls.starIcon}
                          />
                        ))}
                      </div>
                    </div>
                    <span className={cls.ratingText}>{getRatingText(item.rating)}</span>
                  </div>
                </div>

                {/* Bottom Row: Metrics & Button */}
                <div className={cls.bottomRow}>
                  <ul className={cls.metrics}>
                    {/* Desktop: Show only Time in Business and Monthly Revenue, with button replacing Min. Credit Score */}
                    {item.table
                      .filter((metric) => metric.title !== 'Min. Credit Score')
                      .map((metric) => (
                        <li key={metric.id} className={cls.metricItem}>
                          <span className={cls.metricValue}>{metric.value}</span>
                          <span className={cls.metricLabel}>{metric.title}</span>
                        </li>
                      ))}
                    <li className={cls.metricItemButton}>
                      <Button variant="primary" onClick={() => {}} className={cls.ctaButton}>
                        Learn More
                        <Image
                          src="/images/icons/features/arrow-right.svg"
                          width={20}
                          height={20}
                          alt="Arrow"
                          className={cls.arrowIcon}
                        />
                      </Button>
                    </li>
                    {/* Mobile: Show all metrics including Min. Credit Score */}
                    {item.table
                      .filter((metric) => metric.title === 'Min. Credit Score')
                      .map((metric) => (
                        <li key={metric.id} className={cls.metricItemMobile}>
                          <span className={cls.metricValue}>{metric.value}</span>
                          <span className={cls.metricLabel}>{metric.title}</span>
                        </li>
                      ))}
                  </ul>
                  <Button variant="primary" onClick={() => {}} className={cls.ctaButtonMobile}>
                    Learn More
                    <Image
                      src="/images/icons/features/arrow-right.svg"
                      width={20}
                      height={20}
                      alt="Arrow"
                      className={cls.arrowIcon}
                    />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar - Desktop Only */}
      <aside className={cls.sidebar}>
        {/* Trusted Users Block */}
        <div className={cls.sidebarBlock}>
          <div className={cls.sidebarBlockContent}>
            <p className={cls.sidebarBlockTitle}>4,495 people</p>
            <p className={cls.sidebarBlockSubtitle}>
              trusted OnlineLoans.org to find a lender last week
            </p>
          </div>
          <div className={cls.sidebarBlockIcon}>
            <Image
              src="/images/table/cash.png"
              alt="People icon"
              width={130}
              height={120}
              className={cls.sidebarIcon}
            />
          </div>
        </div>

        {/* Total Score Explanation */}
        <div className={cls.sidebarBlock}>
          <h3 className={cls.scoreTitle}>OnlineLoans Total Score</h3>
          <p className={cls.scoreSubtitle}>
            Our product scores consist of a combination of the following 3 components:
          </p>
          <ul className={cls.scoreList}>
            <li className={cls.scoreItem}>
              <div className={cls.scoreItemContent}>
                <Image
                  src="/images/table/material-symbols_star-outline.svg"
                  alt="Popularity"
                  width={32}
                  height={32}
                  className={cls.scoreIcon}
                />
                <span className={cls.scoreItemText}>Popularity</span>
              </div>
              <Image
                src="/images/table/arrow.svg"
                alt="Arrow"
                width={12}
                height={24}
                className={cls.scoreArrow}
              />
            </li>
            <li className={cls.scoreItem}>
              <div className={cls.scoreItemContent}>
                <Image
                  src="/images/table/mdi_like-outline.svg"
                  alt="Brand Reputation"
                  width={32}
                  height={32}
                  className={cls.scoreIcon}
                />
                <span className={cls.scoreItemText}>Brand Reputation</span>
              </div>
              <Image
                src="/images/table/arrow.svg"
                alt="Arrow"
                width={12}
                height={24}
                className={cls.scoreArrow}
              />
            </li>
            <li className={cls.scoreItem}>
              <div className={cls.scoreItemContent}>
                <Image
                  src="/images/table/mdi_tick-circle-outline.svg"
                  alt="Features & Benefits"
                  width={32}
                  height={32}
                  className={cls.scoreIcon}
                />
                <span className={cls.scoreItemText}>Features & Benefits</span>
              </div>
              <Image
                src="/images/table/arrow.svg"
                alt="Arrow"
                width={12}
                height={24}
                className={cls.scoreArrow}
              />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
