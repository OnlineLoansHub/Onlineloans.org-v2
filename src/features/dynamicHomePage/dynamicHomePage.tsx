'use client';

import { ReactNode } from 'react';
import { LoanTypes } from '@/lib/loanTypes';
import { CreditTabs, Legend, Rating, Reviews } from './components';
import cls from './dynamicHomePage.module.scss';

interface IHomePageProps {
  type?: LoanTypes;
  title: ReactNode;
}

export default function DynamicHomePage({ type, title }: IHomePageProps) {
  return (
    <div className={cls.mainContainer}>
      <main className={cls.main}>
        <h1 key={title?.toString()} className={cls.title}>
          {title}
        </h1>

        <Rating />
        <CreditTabs type={type ?? LoanTypes.business} />
      </main>

      <div className={cls.reviews}>
        <Legend />
        <Reviews />
      </div>
    </div>
  );
}
