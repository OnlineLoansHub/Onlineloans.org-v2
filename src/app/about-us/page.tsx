'use client';

import Image from 'next/image';
import { classNames } from '@/lib';
import cls from './page.module.scss';

export default function About() {
  return (
    <div className={cls.container}>
      <header className={cls.header}>
        <div className={cls.containerContent}>
          <div className={cls.headerContent}>
            <div className={cls.headerContentLeft}>
              <h1 className={cls.headerTitle}>Empowering smarter financial choices</h1>
              <p className={cls.headerTxt}>
                We&apos;re on a mission to simplify financial decisions by providing transparent,
                comprehensive comparisons of loans, insurance, and investment products tailored to
                your unique needs.
              </p>
            </div>
            <div className={cls.headerContentRight}>
              <div className={cls.headerImgWrapper}>
                <Image
                  src="/about-page/header_image.jpg"
                  alt="Financial services and loan comparison platform"
                  className={cls.headerImg}
                  width={600}
                  height={400}
                  priority
                />
                <div className={classNames(cls.headerCard, {}, [cls.headerCard1])}>
                  <div className={cls.headerCardTop}>
                    <p className={cls.headerCardTitle}>100,000+</p>
                    <Image
                      src="/about-page/header_people.png"
                      className={cls.headerCardImg}
                      alt="100,000+ drivers connected with car lenders"
                      width={60}
                      height={60}
                    />
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
                  <Image
                    src="/about-page/hand_with_card_2.png"
                    className={cls.headerCardImg2}
                    alt="Healthcare savings illustration"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={cls.about} id="about-us">
        <div className={cls.containerContent}>
          <ul className={cls.aboutList}>
            <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem1])}>
              <h2 className={cls.aboutListItemTitle}>Our Commitment to You</h2>
              <p className={cls.aboutListItemTxt}>
                Our team of researchers, writers, and industry experts aim to provide you with the
                knowledge and insights needed to make informed and confident financial decisions. We
                strive to offer you clear and practical advice to make your money decisions simple
                and stress-free.
              </p>
            </li>
            <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem2])}>
              <h2 className={cls.aboutListItemTitle}>How We Make Money</h2>
              <p className={cls.aboutListItemTxt}>
                While Onlineloans.org is a free-to-use service, we earn commissions from our
                partners by promoting their products or services through affiliate links. The
                compensation we receive from our partners influences where, how, and in what order
                they appear on our site.
              </p>
            </li>
            <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem3])}>
              <h2 className={cls.aboutListItemTitle}>Our Process</h2>
              <p className={cls.aboutListItemTxt}>
                Research and Analysis: Our team is dedicated to conducting comprehensive research
                and analysis on every product or service. We examine specifications, user feedback,
                expert opinions, and industry trends to provide you with the insights we believe
                will help you make informed decisions.
              </p>
            </li>
            <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem4])}>
              <h2 className={cls.aboutListItemTitle}>Our Values</h2>
              <p className={cls.aboutListItemTxt}>
                Consumer Empowerment: Our goal is to equip consumers with the essential information
                they need to make informed and confident decisions. Quality: We are committed to
                excellence in our research and writing, ensuring that we deliver the highest quality
                content possible. Accessibility: We strive to make our content straightforward and
                accessible to everyone, regardless of their level of expertise.
              </p>
            </li>
            <li className={classNames(cls.aboutListItem, {}, [cls.aboutListItem5])}>
              <h2 className={cls.aboutListItemTitle}>Contact Us</h2>
              <p className={cls.aboutListItemTxt}>
                We love hearing from our users! If you have any questions, feedback, or suggestions,
                feel free to reach out to us. Your input helps us improve and serve you better.
                Email: business@onlineloans.org
              </p>
            </li>
          </ul>
        </div>
      </main>

      <section className={cls.partnerGroups}>
        <div className={cls.containerContent}>
          <h2 className={cls.partnerGroupsTitle}>Join Our Partner Communities</h2>
          <p className={cls.partnerGroupsText}>
            Connect with us and other partners through our communication channels:
          </p>
          <div className={cls.partnerGroupsLinks}>
            <a
              href="https://t.me/onlineloans_org"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.partnerGroupLink}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cls.partnerGroupIcon}
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.81c-.14.625-.52.78-1.05.485l-2.9-2.14-1.4 1.345c-.13.13-.24.24-.49.24l.21-2.98 5.38-4.86c.235-.21-.05-.325-.365-.115l-6.65 4.19-2.87-.9c-.62-.195-.635-.62.13-.93l11.24-4.33c.51-.19.96-.11 1.16.38z"
                  fill="currentColor"
                />
              </svg>
              Join Telegram Group
            </a>
            <a
              href="https://join.slack.com/t/onlineloansorg/shared_invite/zt-3jjtcgy6t-7p1rJWNhZ2tXJjx2aOZDlA"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.partnerGroupLink}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cls.partnerGroupIcon}
              >
                <path
                  d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
                  fill="currentColor"
                />
              </svg>
              Join Slack Workspace
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
