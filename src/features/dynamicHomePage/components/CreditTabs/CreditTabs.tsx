'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import AmountInputCard from '@/components/ui/AmountInput/AmountInput';
import { Select, type Option } from '@/components/ui/Select/Select';
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

const insuranceOptions = [
  { value: 'car-insurance', label: 'Car insurance' },
  { value: 'pet-insurance', label: 'Pet insurance' },
  { value: 'life-insurance', label: 'Life insurance' },
  { value: 'travel-insurance', label: 'Travel insurance' },
  { value: 'renters-insurance', label: 'Renters insurance' },
  { value: 'business-insurance', label: 'Business insurance' },
];

interface ICreditTabsProps {
  type?: LoanTypes;
}

export const CreditTabs = memo(
  ({ type }: ICreditTabsProps) => {
    const [value, setValue] = useState('');
    // Local state to track which tab user clicked (defaults to prop or business)
    const [selectedType, setSelectedType] = useState<LoanTypes>(type ?? LoanTypes.business);
    const [selectedInsurance, setSelectedInsurance] = useState<string | number>('');
    const activeType = selectedType;

    // Always keep Business Loan first, Personal Loan second (fixed order)
    const orderedTabs = useMemo(() => {
      // Business Loan first, Personal Loan second - fixed order
      return tabs;
    }, []);

    const handleTabClick = useCallback((tabType: LoanTypes) => {
      setSelectedType(tabType);
    }, []);

    const handleInsuranceChange = useCallback((value: string | number, _option: Option) => {
      setSelectedInsurance(value);
      // For insurance dropdown, we don't change the loan type
      // This is just for display/navigation purposes
    }, []);

    // Convert insurance options to Select options format
    const insuranceSelectOptions: Option[] = useMemo(() => {
      return insuranceOptions.map((option) => ({
        value: option.value,
        label: option.label,
      }));
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
          {orderedTabs.map((tab, index) => {
            // First two tabs render as buttons
            if (index < 2) {
              return (
                <li
                  key={tab.title}
                  className={classNames(cls.tabItem, {
                    [cls.active]: activeType === tab.type,
                  })}
                >
                  <button
                    type="button"
                    onClick={() => handleTabClick(tab.type)}
                    className={cls.link}
                  >
                    {tab.title}
                  </button>
                </li>
              );
            }

            // This shouldn't happen with current tabs array, but keeping for safety
            return null;
          })}
          {/* Third tab - Insurance dropdown */}
          <li key="insurance" className={cls.tabItem}>
            <div className={cls.dropdownWrapper}>
              <Select
                name="insurance-type"
                value={selectedInsurance}
                onChange={handleInsuranceChange}
                options={insuranceSelectOptions}
                placeholder="Insurance"
                className={cls.selectContainer}
                buttonClassName={cls.selectButtonInsurance}
              />
            </div>
          </li>
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
