'use client';

import { FC, useState } from 'react';

import { classNames } from '@/shared';

import cls from './Dropdown.module.scss';

interface IDropdownProps {
  options: string[];
}

export const Dropdown: FC<IDropdownProps> = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => setIsOpened((prev) => !prev);

  return (
    <>
      <div className={classNames(cls.wrapper)}>content</div>
    </>
  );
};
