import type { FC, ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';

import { classNames } from '@/lib';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  isWithHover?: boolean;
  children?: ReactNode;
  isActive?: boolean;
}

export const AppLink: FC<AppLinkProps> = ({
  href,
  children,
  isWithHover = false,
  className = '',
  isActive = false,
  ...rest
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        cls.link,
        { [cls.withHover]: isWithHover, [cls.active]: isActive },
        [className]
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
