'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LoanTypes } from '@/types';
import { CreditTabs, Legend, Rating, Reviews } from './components';
import { classNames } from '@/lib';
import cls from './dynamicHomePage.module.scss';
interface IHomePageProps {
  type: LoanTypes;
  title: ReactNode;
}

export default function DynamicHomePage({ type, title }: IHomePageProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(title);

  useEffect(() => {
    // Reset visibility when pathname changes
    setIsVisible(false);
    
    // After fade out, update title and fade in
    const timer = setTimeout(() => {
      setDisplayTitle(title);
      setIsVisible(true);
    }, 300); // Half of transition duration

    return () => clearTimeout(timer);
  }, [pathname, title]);

  // Initial mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
