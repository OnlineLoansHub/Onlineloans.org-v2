import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/lib';
import cls from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<IButtonProps> = ({
  variant,
  children,
  onClick,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={classNames(
        cls.btn,
        {
          [cls.primary]: variant === 'primary',
          [cls.secondary]: variant === 'secondary',
          [cls.disabled]: Boolean(disabled),
        },
        [className]
      )}
      onClick={(e) => onClick(e)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
