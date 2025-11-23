'use client';

import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Stepper } from '@/features/stepper/Stepper';
import { FinalStep } from '@/features/stepper/components';
import { getPersonalLoanConfig } from './personalLoanConfig';
import { LoanTypes } from '@/types';
import cls from './personalLoanForm.module.scss';

interface IPersonalLoanFormProps {
  type: LoanTypes;
}

export default function PersonalLoanForm({ type: _type }: IPersonalLoanFormProps) {
  const sp = useSearchParams();
  const amount = sp.get('amount') ?? '';
  const [isFormFilled, setFormFilled] = useState(false);

  const config = useMemo(() => getPersonalLoanConfig(amount), [amount]);

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

