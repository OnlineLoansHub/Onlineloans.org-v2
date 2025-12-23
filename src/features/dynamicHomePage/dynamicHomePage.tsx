'use client';

import { ReactNode, useEffect, useState } from 'react';
import { LoanTypes } from '@/lib/loanTypes';
import { CreditTabs, Legend, Rating, Reviews } from './components';
import { classNames } from '@/lib';
import cls from './dynamicHomePage.module.scss';

interface IHomePageProps {
  type?: LoanTypes;
  title: ReactNode;
}

export default function DynamicHomePage({ type, title }: IHomePageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Defer ALL state changes outside the effect tick
    Promise.resolve().then(() => {
      // Reset visibility
      setIsVisible(false);

      requestAnimationFrame(() => {
        // Force browser to apply the "hidden" state
        document.body.getBoundingClientRect();

        // Animate back in
        setIsVisible(true);
      });
    });
  }, [title, type]);

  return (
    <div className={cls.mainContainer}>
      <main className={cls.main}>
        <h1
          key={title?.toString()}
          className={classNames(cls.title, {
            [cls.titleVisible]: isVisible,
          })}
        >
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
