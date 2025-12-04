import type { FC } from 'react';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import type { PersonalLender } from '@/data/personalLenders';
import cls from './PersonalLoanComparisonCard.module.scss';

interface PersonalLoanComparisonCardProps {
  lender: PersonalLender;
  index?: number;
}

export const PersonalLoanComparisonCard: FC<PersonalLoanComparisonCardProps> = ({
  lender,
  index,
}) => {
  const isFeatured = lender.isFeatured;
  const isCreditNinja = lender.id === 'credit-ninja';
  const isNerdWallet = lender.id === 'discover';

  return (
    <div
      className={`${cls.card} ${isFeatured ? cls.featuredCard : ''} ${isFeatured ? cls.topRatedCard : ''} ${isCreditNinja ? cls.creditNinjaCard : ''} ${isNerdWallet ? cls.nerdWalletCard : ''}`}
    >
      {isFeatured ? (
        <div className={cls.featuredBadge}>
          <span className={cls.featuredText}>Top Rated</span>
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

      <div className={cls.detailsGrid}>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Rating</span>
          <div className={cls.ratingValue}>
            <span className={cls.ratingNumber}>9.9</span>
            <div className={cls.ratingStars}>
              <span className={cls.star}>★</span>
              <span className={cls.star}>★</span>
              <span className={cls.star}>★</span>
              <span className={cls.star}>★</span>
              <span className={cls.star}>★</span>
            </div>
          </div>
        </div>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Loan Amount Range</span>
          <span className={cls.detailValue}>{lender.loanAmountRange}</span>
        </div>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>APR Range</span>
          <span className={cls.detailValue}>{lender.aprRange}</span>
        </div>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Min. Credit Score</span>
          <span className={cls.detailValue}>{lender.minCreditScore}</span>
        </div>
        <div className={cls.detailItem}>
          <span className={cls.detailLabel}>Funding Speed</span>
          <span className={cls.detailValue}>{lender.fundingSpeed}</span>
        </div>
      </div>

      {lender.ctaLink.startsWith('http') ? (
        <a
          href={lender.ctaLink}
          target="_blank"
          rel="nofollow sponsored noopener"
          className={cls.ctaLink}
        >
          <Button
            variant="primary"
            className={`${cls.ctaButton} ${isFeatured ? cls.ctaButtonGold : ''}`}
          >
            Apply Now
          </Button>
        </a>
      ) : (
        <AppLink href={lender.ctaLink} className={cls.ctaLink}>
          <Button
            variant="primary"
            className={`${cls.ctaButton} ${isFeatured ? cls.ctaButtonGold : ''}`}
          >
            Apply Now
          </Button>
        </AppLink>
      )}
    </div>
  );
};
