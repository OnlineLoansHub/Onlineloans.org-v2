'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { onlineBankingConfig } from '@/config/productTypes/onlineBanking';
import { onlineBankingData } from '@/components/loans/onlineBankingData';

const faqItems = [
  {
    question: 'What is online banking?',
    answer: 'Online banking allows you to manage your bank accounts, pay bills, transfer money, and access financial services through a website or mobile app without visiting a physical branch.',
  },
  {
    question: 'Is online banking safe?',
    answer: 'Reputable online banks use encryption, multi-factor authentication, and FDIC insurance (up to $250,000 per account) to protect your money. Always use secure networks and strong passwords.',
  },
  {
    question: 'What is a high-yield savings account?',
    answer: 'A high-yield savings account offers significantly higher interest rates than traditional savings accounts, often 10-20 times higher. These accounts are typically offered by online banks with lower overhead costs.',
  },
  {
    question: 'Do online banks have ATMs?',
    answer: 'Many online banks provide access to large ATM networks (like Allpoint or MoneyPass) with no fees. Some reimburse ATM fees charged by other banks. Check each bank\'s ATM network before opening an account.',
  },
  {
    question: 'Can I deposit cash with an online bank?',
    answer: 'Depositing cash can be challenging with online-only banks. Some partner with retail locations (like CVS or Walmart) for cash deposits, while others require you to deposit cash into a linked traditional bank account first.',
  },
  {
    question: 'What is the difference between APY and APR?',
    answer: 'APY (Annual Percentage Yield) includes compound interest and shows the actual return on savings accounts. APR (Annual Percentage Rate) shows the cost of borrowing on loans and credit cards.',
  },
  {
    question: 'Are online banks FDIC insured?',
    answer: 'Yes, legitimate online banks are FDIC insured up to $250,000 per depositor, per account type. Always verify FDIC insurance before opening an account.',
  },
  {
    question: 'What features should I look for in an online bank?',
    answer: 'Key features include high APY rates, no monthly fees, low or no minimum balance requirements, mobile app quality, ATM access, customer service availability, and FDIC insurance.',
  },
];

export default function BestOnlineBankingPage() {
  return (
    <ProductComparisonPage
      productConfig={onlineBankingConfig}
      lendersData={onlineBankingData}
      faqItems={faqItems}
    />
  );
}

