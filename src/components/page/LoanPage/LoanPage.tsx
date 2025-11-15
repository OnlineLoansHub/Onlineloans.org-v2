'use client';

import { useCallback, useState } from 'react';

import { LoanTypes } from '@/shared/types';

import { FinalStep, Footer, StepForm } from './components';

import cls from './LoanPage.module.scss';

interface IHomePageProps {
  type: LoanTypes;
}

export default function LoanPage({ type }: IHomePageProps) {
  const [isFormFilled, setFormFilled] = useState(true);

  const handleFormFilled = useCallback(() => {
    setFormFilled(true);
  }, []);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <main className={cls.main}>
          {!isFormFilled ? (
            <StepForm handleFormFilled={handleFormFilled} />
          ) : (
            <FinalStep />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
