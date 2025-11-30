'use client';

import Image from 'next/image';
import cls from './TrustBadges.module.scss';

const trustItems = [
  {
    icon: '/images/icons/security/onlineloans-secure-encryption-icon.svg',
    text: 'Secure & encrypted',
  },
  {
    icon: '/images/icons/features/onlineloans-verified-badge-icon.svg',
    text: 'Trusted by thousands of borrowers',
  },
  {
    icon: '/images/icons/features/onlineloans-fast-approval-lightning-icon.svg',
    text: 'No spam, no obligations',
  },
];

export const TrustBadges = () => {
  return (
    <div className={cls.trustSection}>
      <div className={cls.badgesContainer}>
        {trustItems.map((item, index) => (
          <div key={index} className={cls.badge}>
            <Image src={item.icon} alt={item.text} width={32} height={32} className={cls.icon} />
            <span className={cls.text}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

