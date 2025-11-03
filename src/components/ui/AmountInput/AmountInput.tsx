'use client';

import { FocusEvent, useMemo, useState } from 'react';

import { classNames } from '@/shared';

import cls from './AmountInput.module.scss';

interface AmountInputCardProps {
  buttonText?: string;
  placeholder?: string;
  maxAmountLabel?: string;
  onSubmit?: (value: string) => void;
}

const AmountCard = ({
  buttonText = 'See My Offer',
  placeholder = '$ Amount',
  maxAmountLabel = 'Up to $50k',
  onSubmit,
}: AmountInputCardProps) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
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
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cls.input}
          placeholder={focused && !value ? maxAmountLabel : undefined}
        />
      </div>
      <button
        className={cls.button}
        onClick={() => onSubmit?.(value)}
        type="button"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AmountCard;
