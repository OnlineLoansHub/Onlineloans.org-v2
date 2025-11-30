'use client';

import Image from 'next/image';
import { formatAmount } from '@/lib';
import cls from './AdvisorCard.module.scss';

interface IAdvisorCardProps {
  advisorName: string;
  loanAmount: number | string;
  avatarUrl?: string;
  avatarUrl2?: string;
  advisorName2?: string;
}

export const AdvisorCard = ({
  advisorName,
  loanAmount,
  avatarUrl,
  avatarUrl2,
  advisorName2,
}: IAdvisorCardProps) => {
  return (
    <div className={cls.card}>
      <div className={cls.avatarWrapper}>
        <div className={cls.avatarItem}>
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${advisorName} - Licensed Loan Specialist`}
              width={100}
              height={100}
              className={cls.avatar}
            />
          ) : (
            <div className={cls.avatarPlaceholder}>
              <span className={cls.avatarInitials}>
                {advisorName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </span>
            </div>
          )}
          <p className={cls.avatarName}>{advisorName}</p>
        </div>
        <div className={cls.avatarItem}>
          {avatarUrl2 ? (
            <Image
              src={avatarUrl2}
              alt={`${advisorName2 || advisorName} - Licensed Loan Specialist`}
              width={100}
              height={100}
              className={cls.avatar}
            />
          ) : (
            <div className={cls.avatarPlaceholder}>
              <span className={cls.avatarInitials}>
                {(advisorName2 || advisorName)
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </span>
            </div>
          )}
          <p className={cls.avatarName}>{advisorName2 || advisorName}</p>
        </div>
      </div>
      <div className={cls.content}>
        <p className={cls.role}>Licensed Loan Specialist</p>
        <p className={cls.message}>
          We will contact you shortly to go over your best options for the $
          {formatAmount(loanAmount)} you requested.
        </p>
      </div>
    </div>
  );
};
