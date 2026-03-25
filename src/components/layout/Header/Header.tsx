'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import Logo from '@/components/ui/Logo/Logo';
import { URL_CONFIG } from '@/lib/urlConfig';
import { classNames } from '@/lib';
import { CATEGORIES } from '@/config/categories';
import cls from './Header.module.scss';

interface HeaderConfigItem {
  title: string;
  path: string;
  pathMatch?: string[];
}

const headerConfig: HeaderConfigItem[] = [
  {
    title: 'About Us',
    path: URL_CONFIG.about,
  },
  {
    title: 'Partner with us',
    path: URL_CONFIG.partner,
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const path = usePathname();
  const isHome = path === URL_CONFIG.main;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <header className={cls.header}>
      <nav className={classNames(cls.nav)}>
        <Link href={URL_CONFIG.main} className={cls.logo} onClick={() => setIsOpen(false)}>
          <Logo
            text="OnlineLoans.org"
            textColor="var(--color-primary)"
            className={cls.logoComponent}
          />
        </Link>
        <button
          className={classNames(cls.burger, { [cls.open]: isOpen })}
          onClick={toggleMenu}
          aria-label="Menu toggle"
        >
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
        </button>
        <ul className={classNames(cls.navList, { [cls.open]: isOpen })}>
          {isHome ? (
            headerConfig.map((item) => {
              const isActive = item.pathMatch ? item.pathMatch.includes(path) : path === item.path;

              return (
                <li key={item.path} className={cls.navItem} onClick={toggleMenu}>
                  <AppLink isWithHover href={item.path} className={cls.navLink} isActive={isActive}>
                    {item.title}
                  </AppLink>
                </li>
              );
            })
          ) : (
            <>
              <li className={classNames(cls.navItem, {}, [cls.dropdown])}>
                <button
                  type="button"
                  className={classNames(cls.navLink, {}, [cls.dropdownToggle])}
                  aria-haspopup="menu"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  Products
                  <span
                    className={classNames(cls.dropdownCaret, { [cls.open]: isDropdownOpen })}
                  >
                    ▾
                  </span>
                </button>

                <div className={classNames(cls.dropdownMenu, { [cls.open]: isDropdownOpen })}>
                  {CATEGORIES.map((c) => (
                    <AppLink
                      key={c.href}
                      href={c.href}
                      className={cls.dropdownItem}
                      isWithHover
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {c.title}
                    </AppLink>
                  ))}
                </div>
              </li>

              <li className={cls.navItem} onClick={toggleMenu}>
                <AppLink
                  href="https://apply.onlineloans.org/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls.navLink}
                  isWithHover
                >
                  Apply Now
                </AppLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
