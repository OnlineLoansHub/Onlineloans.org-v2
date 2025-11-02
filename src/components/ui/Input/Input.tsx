import { FC, InputHTMLAttributes } from 'react';

import { classNames } from '@/shared';

import cls from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder: string;
}

export const Input: FC<IInputProps> = ({
  placeholder,
  className = '',
  onChange,
  ...others
}) => {
  return (
    <input
      className={classNames(cls.input, {}, [className])}
      placeholder={placeholder}
      onChange={onChange}
      {...others}
    />
  );
};
