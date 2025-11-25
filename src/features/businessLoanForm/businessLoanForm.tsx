'use client';

import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Stepper } from '@/features/stepper/Stepper';
import { FinalStep } from '@/features/stepper/components';
import { getBusinessLoanConfig } from './businessLoanConfig';
import { LoanTypes } from '@/types';
import cls from './businessLoanForm.module.scss';

interface IHomePageProps {
  type: LoanTypes;
}

export default function BusinessLoanForm({ type: _type }: IHomePageProps) {
  const sp = useSearchParams();
  const amount = sp.get('amount') ?? '';
  const [isFormFilled, setFormFilled] = useState(false);
  const config = useMemo(() => getBusinessLoanConfig(amount), [amount]);
  const handleFormFilled = useCallback(() => {
    setFormFilled(true);
  }, []);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        {!isFormFilled ? (
          <Stepper handleFormFilled={handleFormFilled} config={config} />
        ) : (
          <FinalStep />
        )}
      </div>
    </div>
  );
}
