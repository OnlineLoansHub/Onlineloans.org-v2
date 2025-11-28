'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import AmountInputCard from '@/components/ui/AmountInput/AmountInput';
import { classNames } from '@/lib';
import { LoanTypes } from '@/types';
import cls from './CreditTabs.module.scss';

const tabs = [
  {
    title: 'Business Loan',
    type: LoanTypes.business,
  },
  {
    title: 'Personal Loan',
    type: LoanTypes.personal,
  },
];

interface ICreditTabsProps {
  type?: LoanTypes;
}

export const CreditTabs = memo(
  ({ type }: ICreditTabsProps) => {
    const [value, setValue] = useState('');
    const pathname = usePathname();
    // Local state to track which tab user clicked (defaults to prop or business)
    const [selectedType, setSelectedType] = useState<LoanTypes>(type ?? LoanTypes.business);
    const activeType = selectedType;

    // Reorder tabs so the tab matching the current route is first
    const orderedTabs = useMemo(() => {
      if (pathname?.includes('/personal-loan')) {
        // Personal Loan first
        return [...tabs].sort((a, b) => {
          if (a.type === LoanTypes.personal) return -1;
          if (b.type === LoanTypes.personal) return 1;

          return 0;
        });
      }

      if (pathname?.includes('/business-loan')) {
        // Business Loan first
        return [...tabs].sort((a, b) => {
          if (a.type === LoanTypes.business) return -1;
          if (b.type === LoanTypes.business) return 1;

          return 0;
        });
      }

      // Default: keep original order
      return tabs;
    }, [pathname]);

    const handleTabClick = useCallback((tabType: LoanTypes) => {
      setSelectedType(tabType);
    }, []);

    const handleValueChange = useCallback((value: string) => {
      // Remove all non-numeric characters (only allow numbers)
      const numericValue = value.replace(/[^\d]/g, '');

      // If empty, set empty string
      if (!numericValue) {
        setValue('');

        return;
      }

      // Convert to number and format with commas
      const number = parseInt(numericValue, 10);
      if (isNaN(number)) {
        setValue('');

        return;
      }

      // Format with dollar sign and commas
      const formatted = `$${number.toLocaleString('en-US')}`;
      setValue(formatted);
    }, []);

    return (
      <div className={cls.tabsWrapper}>
        <ul className={cls.tabs}>
          {orderedTabs.map((tab) => {
            return (
              <li
                key={tab.title}
                className={classNames(cls.tabItem, {
                  [cls.active]: activeType === tab.type,
                })}
              >
                <button type="button" onClick={() => handleTabClick(tab.type)} className={cls.link}>
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
        <AmountInputCard type={activeType} handleValueChange={handleValueChange} value={value} />
        <div className={cls.creditNotes}>
          <div className={cls.amountInfo}>
            <p className={cls.note}>
              <Image
                src="/images/icons/features/onlineloans-fast-approval-lightning-icon.svg"
                alt="OnlineLoans.org - Rate in 1 minute"
                width={24}
                height={24}
              />
              Rate in 1 minute
            </p>
            <p className={cls.note}>
              <Image
                src="/images/icons/features/onlineloans-verified-badge-icon.svg"
                alt="OnlineLoans.org - No impact to your credit"
                width={24}
                height={24}
              />
              No impact to your credit
            </p>
          </div>
          <p className={cls.protection}>
            <Image
              src="/images/icons/security/onlineloans-secure-encryption-icon.svg"
              alt="OnlineLoans.org - security"
              width={24}
              height={24}
            />
            We protect your information with advanced data encryption, keeping your details safe so
            you can request a loan with peace of mind and comfort from home.
          </p>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only rerender if type changes
    return prevProps.type === nextProps.type;
  }
);

CreditTabs.displayName = 'CreditTabs';
