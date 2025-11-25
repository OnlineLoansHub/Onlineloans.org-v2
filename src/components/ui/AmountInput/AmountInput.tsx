'use client';

import { FocusEvent, useMemo, useState } from 'react';
import { URL_CONFIG } from '@/config';
import { classNames } from '@/lib';
import { LoanTypes } from '@/types';
import { AppLink } from '../AppLink/AppLink';
import cls from './AmountInput.module.scss';

interface AmountInputCardProps {
  type: LoanTypes;
  handleValueChange: (value: string) => void;
  value: string;
}

const AmountCard = ({ type, handleValueChange, value }: AmountInputCardProps) => {
  const [focused, setFocused] = useState(false);
  const { buttonText, placeholder, maxAmountLabel, href, amount } = useMemo(() => {
    if (type === LoanTypes.personal) {
      return {
        buttonText: 'See My Offer',
        placeholder: '$ Amount',
        maxAmountLabel: 'Up to $50k',
        href: URL_CONFIG.personalLoan,
        amount: value,
      };
    }

    return {
      buttonText: 'See My Offer',
      placeholder: '$ Amount',
      maxAmountLabel: 'Up to $1M',
      href: URL_CONFIG.businessLoan,
      amount: value,
    };
  }, [type, value]);

  const labelValue = useMemo(() => {
    if (!focused)
      return (
        <>
          <span className={cls.amount}>{placeholder}</span> • {maxAmountLabel}
        </>
      );

    return <span className={cls.amount}>{placeholder}</span>;
  }, [focused, maxAmountLabel, placeholder]);

  const handleFocus = () => setFocused(true);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) setFocused(false);
  };

  const isValidAmount = useMemo(() => {
    if (!value || value.trim() === '') return false;
    // Extract numeric value from formatted string (remove $ and commas)
    const numericValue = value.replace(/[^\d.]/g, '');
    if (!numericValue) return false;
    const number = parseFloat(numericValue);

    return !isNaN(number) && number > 0;
  }, [value]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isValidAmount) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={classNames(cls.card, {
        [cls.focused]: focused,
        [cls.filled]: value,
      })}
    >
      <div className={cls.inputContainer}>
        <label
          className={classNames(cls.label, {
            [cls.labelActive]: focused || value,
          })}
        >
          {labelValue}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cls.input}
          placeholder={focused && !value ? maxAmountLabel : undefined}
        />
      </div>

      <AppLink
        className={cls.button}
        href={{ pathname: href, query: { amount: amount } }}
        onClick={handleLinkClick}
      >
        {buttonText}
      </AppLink>
    </div>
  );
};

export default AmountCard;
