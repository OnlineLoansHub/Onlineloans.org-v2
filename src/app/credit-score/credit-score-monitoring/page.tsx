'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { creditScoreConfig } from '@/data/productTypes/creditScore';
import { creditScoreData } from '@/data/creditScoreData';

const faqItems = [
  {
    question: 'What is credit score monitoring?',
    answer:
      'Credit score monitoring is a service that tracks your credit score and credit report changes, alerting you to important updates like score changes, new accounts, or potential fraud.',
  },
  {
    question: 'How often should I check my credit score?',
    answer:
      'Most experts recommend checking your credit score at least monthly. Credit monitoring services provide daily, weekly, or monthly updates depending on the service you choose.',
  },
  {
    question: 'Does checking my credit score lower it?',
    answer:
      'No, checking your own credit score through monitoring services is considered a "soft inquiry" and does not affect your credit score. Only "hard inquiries" from lenders can impact your score.',
  },
  {
    question: 'What credit bureaus should I monitor?',
    answer:
      "It's best to monitor all three major credit bureaus (Equifax, Experian, and TransUnion) since they may have different information. Some services monitor one bureau, while others monitor all three.",
  },
  {
    question: 'How much does credit score monitoring cost?',
    answer:
      'Costs vary from free (with limited features) to $20-30/month for comprehensive monitoring. Many services offer free trials or freemium models with optional paid upgrades.',
  },
  {
    question: 'What features should I look for in a credit monitoring service?',
    answer:
      'Key features include credit score tracking, credit report access, identity theft protection, fraud alerts, credit score simulators, and educational resources to help improve your credit.',
  },
  {
    question: 'Can credit monitoring prevent identity theft?',
    answer:
      "While credit monitoring can't prevent identity theft, it can help detect it early by alerting you to suspicious activity, new accounts, or changes to your credit report, allowing you to take action quickly.",
  },
  {
    question: "What's the difference between free and paid credit monitoring?",
    answer:
      'Free services typically offer basic score tracking and limited updates. Paid services usually provide more frequent updates, access to all three credit bureaus, identity theft protection, and additional features like credit score simulators.',
  },
];

export default function CreditScoreMonitoringPage() {
  return (
    <ProductComparisonPage
      productConfig={creditScoreConfig}
      lendersData={creditScoreData}
      faqItems={faqItems}
    />
  );
}
