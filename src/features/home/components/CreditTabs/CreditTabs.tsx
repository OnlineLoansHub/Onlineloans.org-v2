'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

import AmountInputCard from '@/components/ui/AmountInput/AmountInput';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { URL_CONFIG } from '@/config';
import { classNames } from '@/lib';
import { LoanTypes } from '@/types';

import cls from './CreditTabs.module.scss';

const tabs = [
  {
    title: 'Personal Loan',
    type: LoanTypes.personal,
    href: URL_CONFIG.personal,
  },
  {
    title: 'Business Loan',
    type: LoanTypes.business,
    href: URL_CONFIG.business,
  },
];

interface ICreditTabsProps {
  type: LoanTypes;
}

export const CreditTabs = ({ type }: ICreditTabsProps) => {
  const [value, setValue] = useState('');

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
        {tabs.map((tab) => {
          return (
            <li
              key={tab.title}
              className={classNames(cls.tabItem, {
                [cls.active]: type === tab.type,
              })}
            >
              <AppLink href={{ pathname: tab.href }} className={cls.link}>
                {tab.title}
              </AppLink>
            </li>
          );
        })}
      </ul>
      <AmountInputCard
        type={type}
        handleValueChange={handleValueChange}
        value={value}
      />
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
          We protect your information with advanced data encryption, keeping
          your details safe so you can request a loan with peace of mind and
          comfort from home.
        </p>
      </div>
    </div>
  );
};
