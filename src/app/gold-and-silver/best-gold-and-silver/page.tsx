'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { goldAndSilverConfig } from '@/data/productTypes/goldAndSilver';
import { goldAndSilverData } from '@/data/goldAndSilverData';

const faqItems = [
  {
    question: 'Why invest in gold and silver?',
    answer:
      'Gold and silver are considered safe-haven assets that can hedge against inflation, currency devaluation, and economic uncertainty. They have maintained value throughout history and can diversify an investment portfolio.',
  },
  {
    question: 'What is the difference between gold coins and gold bars?',
    answer:
      'Gold coins are minted by government mints and often have numismatic value in addition to metal value. Gold bars are pure bullion with value based solely on weight and purity. Coins may be easier to sell in smaller quantities.',
  },
  {
    question: 'How do I buy gold and silver?',
    answer:
      'You can buy physical gold and silver from dealers, online retailers, or through precious metals IRAs. Options include coins, bars, rounds, and jewelry. Always buy from reputable dealers and verify authenticity.',
  },
  {
    question: 'What is a precious metals IRA?',
    answer:
      'A precious metals IRA allows you to hold physical gold, silver, platinum, or palladium in a tax-advantaged retirement account. The metals must meet IRS purity standards and be stored in an approved depository.',
  },
  {
    question: 'How should I store my gold and silver?',
    answer:
      'Options include home storage (safes, hidden locations), bank safe deposit boxes, or professional vault storage. Consider insurance, security, and accessibility. Vault storage is most secure but has ongoing fees.',
  },
  {
    question: 'What is the premium on gold and silver?',
    answer:
      'The premium is the amount you pay above the spot price (current market price) of the metal. Premiums cover manufacturing, dealer profit, and distribution costs. Premiums vary by product type and dealer.',
  },
  {
    question: 'Are gold and silver investments taxable?',
    answer:
      'Physical gold and silver are considered collectibles by the IRS and taxed at a maximum rate of 28% for long-term capital gains. Short-term gains are taxed as ordinary income. Precious metals IRAs have different tax treatment.',
  },
  {
    question: 'How liquid are gold and silver investments?',
    answer:
      'Gold and silver are highly liquid assets that can be sold to dealers, online platforms, or private buyers. However, you may receive less than spot price when selling, and large quantities may take time to liquidate.',
  },
];

export default function BestGoldAndSilverPage() {
  return (
    <ProductComparisonPage
      productConfig={goldAndSilverConfig}
      lendersData={goldAndSilverData}
      faqItems={faqItems}
    />
  );
}
