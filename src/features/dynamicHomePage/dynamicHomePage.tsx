'use client';

import { ReactNode, useEffect, useState } from 'react';
import { LoanTypes } from '@/types';
import { CreditTabs, Legend, Rating, Reviews } from './components';
import { classNames } from '@/lib';
import cls from './dynamicHomePage.module.scss';
interface IHomePageProps {
  type: LoanTypes;
  title: ReactNode;
}

const STORAGE_KEY = 'prevLoanType';

export default function DynamicHomePage({ type, title }: IHomePageProps) {
  // Check on mount if we should transition (type changed from previous page)
  const shouldTransitionOnMount = typeof window !== 'undefined' && 
    sessionStorage.getItem(STORAGE_KEY) !== null &&
    sessionStorage.getItem(STORAGE_KEY) !== type;

  const [isVisible, setIsVisible] = useState(!shouldTransitionOnMount);
  const [displayTitle, setDisplayTitle] = useState(title);

  useEffect(() => {
    // Check if there was a previous type stored
    const prevType = typeof window !== 'undefined' 
      ? (sessionStorage.getItem(STORAGE_KEY) as LoanTypes | null)
      : null;

    // If no previous type or same type, ensure it's visible
    if (!prevType || prevType === type) {
      if (!isVisible) {
        setIsVisible(true);
      }
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(STORAGE_KEY, type);
      }
      return;
    }

    // Type changed - fade in the new title
    if (!isVisible) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
    
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, type);
    }
  }, [type, title, isVisible]);

  return (
    <div className={cls.page}>
      <div className={cls.mainContainer}>
        <main className={cls.main}>
          <h1
            key={type}
            className={classNames(cls.title, {
              [cls.titleVisible]: isVisible,
            })}
          >
            {displayTitle}
          </h1>
          <Rating />
          <CreditTabs type={type} />
        </main>
        <div className={cls.reviews}>
          <Legend />
          <Reviews />
        </div>
      </div>
    </div>
  );
}
