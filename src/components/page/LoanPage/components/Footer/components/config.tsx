import Image from 'next/image';

import { classNames } from '@/shared';

import cls from './LenderTable.module.scss';

export const LENDER_TABLE_CONFIG = [
  {
    id: 1,
    imgSrc: '/images/table/LendingTree-logo.svg',
    alt: 'LendingTree-logo',
    height: 54,
    imgTitleElem: (
      <p className={classNames(cls.imgTitleElem, {}, [cls.imgTitle])}>
        <Image
          src={'images/table/top-pick-icon.svg'}
          alt={'Top Pick icon'}
          width={12}
          height={16}
          className={cls.imgTitleElemImg}
        />
        Our Top Pick
      </p>
    ),
    title: 'LendingTree',
    subtitle: 'Banks compete, you enjoy low rates',
    rating: '9.8',
    reviewsNumber: '15,356',
    table: [
      { id: 1, title: 'Time in Business', value: '12+ months' },
      { id: 2, title: 'Monthly Revenue', value: '$10K+' },
      { id: 3, title: 'Min. Credit Score', value: '650' },
    ],
  },
  {
    id: 2,
    imgSrc: '/images/table/Credible-logo.svg',
    alt: 'Credible-logo',
    height: 40,

    imgTitleElem: (
      <p className={classNames(cls.imgTitleElem2, {}, [cls.imgTitle])}>
        Powered by Credible
      </p>
    ),
    title: 'Credible',
    subtitle: 'Free to use, no hidden fees',
    rating: '9.6',
    reviewsNumber: '9,102',
    table: [
      { id: 1, title: 'Time in Business', value: '24+ months' },
      { id: 2, title: 'Monthly Revenue', value: '$80K+' },
      { id: 3, title: 'Min. Credit Score', value: '700' },
    ],
  },
  {
    id: 3,
    imgSrc: '/images/table/Sofi-logo.svg',
    alt: 'Sofi-logo',
    height: 48,
    title: 'SoFi',
    subtitle: 'Prequalify for your rate in 2 minutes',
    rating: '9.0',
    reviewsNumber: '4,982',
    table: [
      { id: 1, title: 'Time in Business', value: '24+ months' },
      { id: 2, title: 'Monthly Revenue', value: '$25K+' },
      { id: 3, title: 'Min. Credit Score', value: '600' },
    ],
  },
  {
    id: 4,
    imgSrc: '/images/table/LightStream-logo.svg',
    alt: 'LightStream-logo',
    height: 94,
    title: 'LightStream',
    subtitle: 'The loan that rewards you credit',
    rating: '8.7',
    reviewsNumber: '607',
    table: [
      { id: 1, title: 'Time in Business', value: '12+ months' },
      { id: 2, title: 'Monthly Revenue', value: '$10K+' },
      { id: 3, title: 'Min. Credit Score', value: '650' },
    ],
  },
];
