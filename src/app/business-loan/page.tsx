import { Suspense } from 'react';

import LoanPage from '@/features/business/LoanPage';
import { LoanTypes } from '@/types';

export default function BusinessLoansPage() {
  return (
    <Suspense fallback={<>...</>}>
      <LoanPage type={LoanTypes.business} />
    </Suspense>
  );
}
