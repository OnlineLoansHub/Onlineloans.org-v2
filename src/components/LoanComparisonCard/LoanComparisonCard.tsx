import type { FC } from 'react';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import type { Lender } from '@/data/lenders';
import cls from './LoanComparisonCard.module.scss';

interface LoanComparisonCardProps {
  lender: Lender;
  index?: number;
}

export const LoanComparisonCard: FC<LoanComparisonCardProps> = ({ lender, index }) => {
  const isBestOption = lender.rating === 10;

  return (
    <div className={`${cls.card} ${isBestOption ? cls.bestOptionCard : ''}`}>
      {isBestOption ? (
        <div className={cls.bestOptionBadge}>
          <span className={cls.bestOptionText}>Top Rated</span>
        </div>
      ) : (
        index !== undefined && <div className={cls.cardNumber}>{index + 1}</div>
      )}
      <div className={cls.header}>
        {lender.logo ? (
          <img src={lender.logo} alt={`${lender.name} logo`} className={cls.logo} />
        ) : (
          <div className={cls.logoPlaceholder}>
            <span className={cls.logoPlaceholderText}>{lender.name.charAt(0)}</span>
          </div>
        )}
      </div>

      <p className={cls.description}>{lender.description}</p>

      <div className={cls.detailsGrid}>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Rating</span>
          <div className={cls.ratingValue}>
            <span className={cls.ratingNumber}>{lender.rating}</span>
            <div className={cls.ratingStars}>
              {Array.from({ length: 5 }, (_, i) => {
                const starValue = i + 1;
                const isFilled = lender.rating >= starValue;
                const isHalfFilled = lender.rating >= starValue - 0.5 && lender.rating < starValue;

                return (
                  <span
                    key={i}
                    className={`${cls.star} ${isFilled ? cls.starFilled : ''} ${
                      isHalfFilled ? cls.starHalf : ''
                    }`}
                  >
                    ★
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Loan Amount Range</span>
          <span className={cls.detailValue}>{lender.loanAmountRange}</span>
        </div>
        {lender.minCreditScore && (
          <div className={cls.detailItem}>
            <span className={cls.detailLabel}>Min. Credit Score</span>
            <span className={cls.detailValue}>{lender.minCreditScore}</span>
          </div>
        )}
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Time in Business</span>
          <span className={cls.detailValue}>{lender.timeInBusiness}</span>
        </div>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Min. Monthly Revenue</span>
          <span className={cls.detailValue}>{lender.monthlyRevenue}</span>
        </div>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Funding Speed</span>
          <span className={cls.detailValue}>{lender.fundingSpeed}</span>
        </div>
      </div>

      <div className={cls.pros}>
        <h4 className={cls.prosTitle}>Pros:</h4>
        <ul className={cls.prosList}>
          {lender.pros.map((pro, index) => (
            <li key={index} className={cls.prosItem}>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {lender.ctaLink.startsWith('http') ? (
        <a href={lender.ctaLink} target="_blank" rel="noopener noreferrer" className={cls.ctaLink}>
          <Button
            variant="primary"
            className={`${cls.ctaButton} ${isBestOption ? cls.ctaButtonGold : ''}`}
          >
            Apply Now
          </Button>
        </a>
      ) : (
        <AppLink href={lender.ctaLink} className={cls.ctaLink}>
          <Button
            variant="primary"
            className={`${cls.ctaButton} ${isBestOption ? cls.ctaButtonGold : ''}`}
          >
            Apply Now
          </Button>
        </AppLink>
      )}
    </div>
  );
};
