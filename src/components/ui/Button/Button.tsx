import type { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared';

import cls from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

export const Button: FC<IButtonProps> = ({
  variant,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={classNames(cls.btn, {
        [cls.primary]: variant === 'primary',
        [cls.secondary]: variant === 'secondary',
      })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
