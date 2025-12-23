'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { cryptoLoansConfig } from '@/data/productTypes/cryptoLoans';
import { cryptoLoansData } from '@/data/cryptoLoansData';

const faqItems = [
  {
    question: 'What is a crypto loan?',
    answer:
      'A crypto loan allows you to borrow money using your cryptocurrency as collateral. You can access funds without selling your digital assets, and you retain ownership of your crypto while using the borrowed funds.',
  },
  {
    question: 'How do crypto loans work?',
    answer:
      'You deposit cryptocurrency (like Bitcoin or Ethereum) as collateral, and the platform lends you fiat currency or stablecoins based on a loan-to-value (LTV) ratio. You pay interest on the borrowed amount while your crypto remains locked as collateral.',
  },
  {
    question: 'What is a loan-to-value (LTV) ratio?',
    answer:
      "LTV is the percentage of your collateral's value that you can borrow. For example, with 50% LTV, if you deposit $10,000 worth of Bitcoin, you can borrow up to $5,000. Higher LTV means more borrowing power but also higher risk.",
  },
  {
    question: 'What cryptocurrencies can I use as collateral?',
    answer:
      'Most platforms accept major cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and stablecoins. Some platforms also accept altcoins. Each platform has different accepted assets and LTV ratios for each.',
  },
  {
    question: 'What are the interest rates for crypto loans?',
    answer:
      'Interest rates typically range from 2.9% to 15% APR, depending on the platform, your collateral type, LTV ratio, and loyalty tier. Rates are often lower than traditional unsecured loans since your crypto serves as collateral.',
  },
  {
    question: 'Do I need a credit check for a crypto loan?',
    answer:
      "No, most crypto loan platforms don't require a credit check since your cryptocurrency serves as collateral. This makes crypto loans accessible even if you have poor credit or no credit history.",
  },
  {
    question: 'What happens if the value of my collateral drops?',
    answer:
      'If your collateral value drops significantly, you may receive a margin call requiring you to add more collateral or repay part of the loan. If the value drops too much, your collateral may be liquidated to cover the loan.',
  },
  {
    question: 'Can I get my crypto back?',
    answer:
      'Yes, once you repay the loan plus interest, your collateral is returned to you. Some platforms also allow partial repayments, which releases a proportional amount of your collateral.',
  },
];

export default function BestCryptoLoansPage() {
  return (
    <ProductComparisonPage
      productConfig={cryptoLoansConfig}
      lendersData={cryptoLoansData}
      faqItems={faqItems}
    />
  );
}
