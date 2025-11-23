'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { classNames } from '@/lib';

import cls from './Reviews.module.scss';

import 'swiper/css';

const activeRatingStar =
  '/images/icons/ratings/onlineloans-empty-star-rating-icon.svg';
const inactiveratingStar =
  '/images/icons/ratings/onlineloans-5-star-rating-icon.svg';

const cards = [
  {
    id: 1,
    rating: 5,
    source: 'Trustpilot',
    sourceImgPath: '/images/icons/features/onlineloans-decorative-shape.svg',
    text: 'I was overwhelmed trying to compare loan offers on my own — OnlineLoans made it so easy for me!',
    authorName: 'Mirana Marci',
    authorAlt: 'review author Mirana Marci',
    authorImgPath: '/images/customers/onlineloans-customer-testimonial-2.png',
  },
  {
    id: 2,
    rating: 5,
    source: 'Trustpilot',
    sourceImgPath: '/images/icons/features/onlineloans-decorative-shape.svg',
    text: 'I was overwhelmed trying to compare loan offers on my own — OnlineLoans made it so easy for me!',
    authorName: 'Mirana Marci 2',
    authorAlt: 'review author Mirana Marci 2',
    authorImgPath: '/images/customers/onlineloans-customer-testimonial-2.png',
  },
  {
    id: 3,
    rating: 4,
    source: 'Google review',
    sourceImgPath: '/images/icons/social/google-signin-button-icon.svg',
    text: 'I needed quick funding to cover a gap in my business cash flow, and OnlineLoans came through!',
    authorName: 'Christian Hudson',
    authorAlt: 'review author Christian Hudson',
    authorImgPath: '/images/customers/onlineloans-customer-testimonial-1.png',
  },
];

export const Reviews = () => {
  return (
    <div className={cls.wrapper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1.75}
        centeredSlides={false}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          425: { slidesPerView: 1.25 },
          576: { slidesPerView: 1.75 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.25 },
          1024: { slidesPerView: 2.5 },
        }}
        className={cls.swiper}
      >
        {cards.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <div className={cls.card}>
                <div className={cls.rating}>
                  <div className={cls.ratingWrapper}>
                    {Array.from({ length: 5 }).map((_, index) => {
                      const isActive = index >= card.rating;

                      return (
                        <Image
                          key={index}
                          src={isActive ? activeRatingStar : inactiveratingStar}
                          alt={'rating star'}
                          width={20}
                          height={20}
                          className={classNames(cls.ratingImg)}
                        />
                      );
                    })}
                  </div>
                  <p className={cls.ratingSource}>
                    <Image
                      src={card.sourceImgPath}
                      alt={card.source}
                      width={20}
                      height={20}
                      className={cls.sourceImg}
                    />
                    {card.source}
                  </p>
                </div>
                <p className={cls.txt}>{card.text}</p>
                <div className={cls.author}>
                  <Image
                    src={card.authorImgPath}
                    alt={card.authorAlt}
                    width={32}
                    height={32}
                    className={cls.authorImg}
                  />
                  {card.authorName}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
