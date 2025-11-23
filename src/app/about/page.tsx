'use client';

import { classNames } from '@/lib';
import cls from './page.module.scss';
import { Footer } from '../../features/business/components/Footer/Footer';

export default function About() {
  return (
      <div className={cls.container}>
        <header className={cls.header}>
          <div className={cls.containerContent}>
            <div className={cls.headerContent}>
              <div className={cls.headerContentLeft}>
                <h1 className={cls.headerTitle}>Empowering smarter financial choices</h1>
                <p className={cls.headerTxt}>We&apos;re on a mission to simplify financial decisions by providing transparent, comprehensive comparisons of loans, insurance, and investment products tailored to your unique needs.</p>
              </div>
              <div className={cls.headerContentRight}>
                <div className={cls.headerImgWrapper}>
                  <img
                    src="/about-page/header_image.jpg"
                    alt=""
                    className={cls.headerImg}
                    aria-hidden="true"
                  />
                  <div className={classNames(cls.headerCard, {}, [cls.headerCard1])}>
                    <div className={cls.headerCardTop}>
                      <p className={cls.headerCardTitle}>100,000+</p>
                      <img src="/about-page/header_people.png" className={cls.headerCardImg} alt="drivers" />
                    </div>
                    <p className={cls.headerCardTxt}>drivers connected with a car lender</p>
                  </div>

                  <div className={classNames(cls.headerCard, {}, [cls.headerCard2])}>
                    <div className={cls.headerCardTop}>
                      <p className={cls.headerCardTitle}>450,000+</p>
                    </div>
                    <p className={cls.headerCardTxt}>Home owners applied for a mortgage loan</p>
                  </div>

                  <div className={classNames(cls.headerCard, {}, [cls.headerCard3])}>
                    <div className={cls.headerCard3TxtWrapper}>
                      <p className={cls.headerCardTitle}>$22,000+</p>
                      <p className={cls.headerCardTxt}>Health care savings in 2 years</p>
                    </div>
                    <img
                      src="/about-page/hand_with_card_2.png"
                      className={cls.headerCardImg2}
                      alt="hand with card"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className={cls.about} id="about us">
          <div className={cls.containerContent}>
            <ul className={cls.aboutList}>
              <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem1])}>
                <h3 className={cls.aboutListItemTitle}>Our Commitment to You</h3>
                <p className={cls.aboutListItemTxt}>Our team of researchers, writers, and industry experts aim to provide you with the knowledge and insights needed to make informed and confident financial decisions. We strive to offer you clear and practical advice to make your money decisions simple and stress-free.</p>
              </li>
              <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem2])}>
                <h3 className={cls.aboutListItemTitle}>How We Make Money</h3>
                <p className={cls.aboutListItemTxt}>While Onlineloans.org is a free-to-use service, we earn commissions from our partners by promoting their products or services through affiliate links. The compensation we receive from our partners influences where, how, and in what order they appear on our site.</p>
              </li>
              <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem3])}>
                <h3 className={cls.aboutListItemTitle}>Our Process</h3>
                <p className={cls.aboutListItemTxt}>Research and Analysis: Our team is dedicated to conducting comprehensive research and analysis on every product or service. We examine specifications, user feedback, expert opinions, and industry trends to provide you with the insights we believe will statistics you make informed decisions.</p>
              </li>
              <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem4])}>
                <h3 className={cls.aboutListItemTitle}>Our Values</h3>
                <p className={cls.aboutListItemTxt}>Consumer Empowerment: Our goal is to equip consumers with the essential information they need to make informed and confident decisions. Quality: We are committed to excellence in our research and writing, ensuring that we deliver the highest quality content possible. Accessibility: We strive to make our content straightforward and accessible to everyone, regardless of their level of expertise.</p>
              </li>
              <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem5])}>
                <h3 className={cls.aboutListItemTitle}>Contact Us</h3>
                <p className={cls.aboutListItemTxt}>We love hearing from our users! If you have any questions, feedback, or suggestions, feel free to reach out to us. Your input helps us improve and serve you better. Email: Contact@onlineloans.org</p>
              </li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
  );
}
