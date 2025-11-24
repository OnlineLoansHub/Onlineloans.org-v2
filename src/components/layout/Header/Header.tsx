'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import Logo from '@/components/ui/Logo/Logo';
import { URL_CONFIG } from '@/config';
import { classNames } from '@/lib';
import cls from './Header.module.scss';

interface HeaderConfigItem {
  title: string;
  path: string;
  pathMatch?: string[];
}

const headerConfig: HeaderConfigItem[] = [
  {
    title: 'Partner with us',
    path: URL_CONFIG.partner,
  },
  {
    title: 'About Us',
    path: URL_CONFIG.about,
  }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={cls.header}>
      <nav className={classNames(cls.nav)}>
        <Link
          href={URL_CONFIG.main}
          className={cls.logo}
          onClick={() => setIsOpen(false)}
        >
          <Logo
            text="OnlineLoans.org"
            textColor="var(--color-primary)"
            fontSize={16}
            className={cls.logoComponent}
          />
        </Link>
        <button
          className={classNames(cls.burger, { [cls.open]: isOpen })}
          onClick={toggleMenu}
          aria-label="Menu toggle"
        >
          <Image
            src={
              isOpen
                ? '/images/icons/navbar/close-icon.svg'
                : '/images/icons/navbar/burger-icon.svg'
            }
            alt="burger icon"
            width={25}
            height={15}
            className={cls.logoImage}
            priority
          />
        </button>
        <ul className={classNames(cls.navList, { [cls.open]: isOpen })}>
          {headerConfig.map((item) => {
            const isActive = item.pathMatch
              ? item.pathMatch.includes(path)
              : path === item.path;

            return (
              <li key={item.path} className={cls.navItem} onClick={toggleMenu}>
                <AppLink
                  isWithHover
                  href={item.path}
                  className={cls.navLink}
                  isActive={isActive}
                >
                  {item.title}
                </AppLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
