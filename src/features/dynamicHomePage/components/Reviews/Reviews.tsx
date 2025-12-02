'use client';

import { memo } from 'react';
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
      text: 'OnlineLoans helped me compare offers in minutes — the whole process felt effortless.',
      authorName: 'Mirana Marci',
      authorAlt: 'review author Mirana Marci',
      authorImgPath: '/images/customers/onlineloans-customer-testimonial-2.png',
    },
    {
      id: 2,
      rating: 5,
      source: 'Trustpilot',
      sourceImgPath: '/images/icons/features/onlineloans-decorative-shape.svg',
      text: 'Fast, simple, and transparent. I found a loan that fit my needs without any pressure.',
      authorName: 'Daniel Harper',
      authorAlt: 'review author Daniel Harper',
      authorImgPath: '/images/customers/onlineloans-customer-testimonial-3.png',
    },
    {
      id: 3,
      rating: 4,
      source: 'Google Review',
      sourceImgPath: '/images/icons/social/google-signin-button-icon.svg',
      text: 'Great experience! I received multiple loan options and chose one within the same day.',
      authorName: 'Christian Hudson',
      authorAlt: 'review author Christian Hudson',
      authorImgPath: '/images/customers/onlineloans-customer-testimonial-1.png',
    },
    {
      id: 4,
      rating: 5,
      source: 'Google Review',
      sourceImgPath: '/images/icons/social/google-signin-button-icon.svg',
      text: 'Excellent service and smooth process — highly recommended for business owners.',
      authorName: 'Samantha Lee',
      authorAlt: 'review author Samantha Lee',
      authorImgPath: '/images/customers/onlineloans-customer-testimonial-4.png',
    },
    {
      id: 5,
      rating: 4,
      source: 'Google Review',
      sourceImgPath: '/images/icons/social/google-signin-button-icon.svg',
      text: 'I needed funding for a new project and OnlineLoans connected me with great lenders.',
      authorName: 'Carlos Martinez',
      authorAlt: 'review author Carlos Martinez',
      authorImgPath: '/images/customers/onlineloans-customer-testimonial-5.png',
    },
    {
      id: 6,
      rating: 5,
      source: 'Google Review',
      sourceImgPath: '/images/icons/social/google-signin-button-icon.svg',
      text: 'Super quick and reliable — got approved for a personal loan in under 24 hours!',
      authorName: 'Emily Johnson',
      authorAlt: 'review author Emily Johnson',
      authorImgPath: '/images/customers/onlineloans-customer-testimonial-6.png',
    },
  ];  

export const Reviews = memo(() => {
  return (
    <div className={cls.wrapper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={120}
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
});

Reviews.displayName = 'Reviews';
