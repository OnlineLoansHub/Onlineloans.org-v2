'use client';

import { useState, useCallback, useEffect } from 'react';
import { classNames } from '@/lib';
import cls from './page.module.scss';

const REVIEWS = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    author: 'James Sanches',
    jobTitle: 'Marketing director',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    author: 'James Sanches 2',
    jobTitle: 'Marketing director',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    author: 'James Sanches 3',
    jobTitle: 'Marketing director',
  },
];

const TOTAL_SLIDE_BLOCKS = 5;

export default function About() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto-slide for reviews
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const handleReviewPrev = useCallback(() => {
    setCurrentReviewIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 5000);
  }, []);

  const handleReviewNext = useCallback(() => {
    setCurrentReviewIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : prev));
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 5000);
  }, []);

  const handleSlidePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleSlideNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < TOTAL_SLIDE_BLOCKS - 1 ? prev + 1 : prev));
  }, []);

  const handleSlideDotClick = useCallback((index: number) => {
    setCurrentSlideIndex(index);
  }, []);

  return (
    <div>
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

        <section className={cls.logos}>
          <div className={cls.containerContent}>
            <div className={cls.logosWrapper}>
              <div className={cls.logosTitleWrapper}>
                <p className={cls.logosTitle}>
                  Explore offers from brands top-rated on
                </p>
                <span className={cls.logosTitleName}>Trustpilot</span>
              </div>
              <ul className={cls.logoList}>
                <li className={classNames(cls.logoListItem, {}, [cls.logoListItem1])}>
                  <img src="/about-page/logo_1.svg" className={cls.logo} alt="logo-rocket" />
                </li>
                <li className={classNames(cls.logoListItem, {}, [cls.logoListItem2])}>
                  <img src="/about-page/logo_2.svg" className={cls.logo} alt="logo-sofi" />
                </li>
                <li className={classNames(cls.logoListItem, {}, [cls.logoListItem3])}>
                  <img src="/about-page/logo_3.svg" className={cls.logo} alt="logo-better" />
                </li>
                <li className={classNames(cls.logoListItem, {}, [cls.logoListItem4])}>
                  <img src="/about-page/logo_4.svg" className={cls.logo} alt="logo-marcus" />
                </li>
                <li className={classNames(cls.logoListItem, {}, [cls.logoListItem5])}>
                  <img src="/about-page/logo_5.svg" className={cls.logo} alt="logo-lemonade" />
                </li>
                <li className={classNames(cls.logoListItem, {}, [cls.logoListItem6])}>
                  <img src="/about-page/logo_6.svg" className={cls.logo} alt="logo-ameriSave" />
                </li>
              </ul>
            </div>
          </div>
        </section>

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

        <section className={cls.partner}>
          <div className={cls.containerContent}>
            <div className={cls.partnerContent}>

              <div className={cls.partnerBox}>
                <div className={cls.partnerBoxLeft}>
                  <div className={cls.partnerImgWrapper}>
                    <img src="/about-page/man.png" className={cls.partnerImg} alt="partner" />
                  </div>
                </div>
                <div className={cls.partnerBoxRight}>
                  <h3 className={cls.partnerTitle}>Find the best financial solutions — compare, choose, and save</h3>
                  <p className={cls.partnerTxt}>By partnering with a wide range of financial providers — from lenders to insurers — we ensure that our platform offers real value, transparency, and choice. </p>
                  <p className={cls.partnerTxt}>We strive to make financial decisions easier, smarter, and more accessible for everyone.</p>
                </div>
              </div>

              <ul className={cls.partnerList}>
                <li className={cls.partnerListItem}>
                  <p className={cls.partnerListItemTitle}>450,000+</p>
                  <p className={cls.partnerListItemTxt}>Home owners applied for a mortgage loan</p>
                </li>
                <li className={cls.partnerListItem}>
                  <p className={cls.partnerListItemTitle}>100,000+</p>
                  <p className={cls.partnerListItemTxt}>drivers connected with a car lender</p>
                </li>
                <li className={cls.partnerListItem}>
                  <p className={cls.partnerListItemTitle}>330,000+</p>
                  <p className={cls.partnerListItemTxt}>borrowers applied for a personal loan</p>
                </li>
                <li className={cls.partnerListItem}>
                  <p className={cls.partnerListItemTitle}>50,000+</p>
                  <p className={cls.partnerListItemTxt}>pet parents received a pet insurance quote</p>
                </li>
              </ul>

            </div>
          </div>
        </section>

        <section className={cls.reviews}>
          <div className={cls.containerContent}>
            <div className={cls.reviewsContent}>

              <div className={classNames(cls.reviewsPart, {}, [cls.reviewsPart1])}>
                <h3 className={cls.reviewsTitle}>Client experiences that speaks for themselves</h3>

                <div className={cls.reviewsRating}>
                  <img src="/about-page/google.svg" className={cls.googleImg} alt="google logo" />
                  <div className={cls.reviewsRatingTxtWrapper}>
                    <p className={cls.reviewsRatingTitle}>Google Rating</p>
                    <img src="/about-page/rating.svg" className={cls.reviewsRatingImg} alt="rating" />
                    <p className={cls.reviewsRatingTxt}>avarage rating</p>
                  </div>
                </div>

              </div>

              <div className={classNames(cls.reviewsPart, {}, [cls.reviewsPart2])}>
                <ul
                  className={cls.reviewsList}
                  onMouseEnter={() => setIsAutoSliding(false)}
                  onMouseLeave={() => setIsAutoSliding(true)}
                >
                  {REVIEWS.map((review, index) => (
                    <li
                      key={index}
                      className={classNames(cls.reviewsListItem, {}, [
                        index === 0 ? cls.reviewsListItem1 : '',
                        index === 1 ? cls.reviewsListItem2 : '',
                        index === 2 ? cls.reviewsListItem3 : '',
                      ].filter(Boolean))}
                      style={{
                        transform: `translateX(-${currentReviewIndex * 100}%)`,
                      }}
                    >
                      <img src="/about-page/quotes.svg" className={cls.reviewsListItemQuotes} alt="quotes" />
                      <p className={cls.reviewsListItemTxt}>{review.text}</p>

                      <div className={cls.reviewsListItemAuthor}>
                        <img src="/about-page/author_1.png" alt="author" className={cls.reviewsListItemAuthorImg} />
                        <div>
                          <p className={cls.reviewsListItemAuthorTitle}>{review.author}</p>
                          <p className={cls.reviewsListItemJobTitle}>{review.jobTitle}</p>
                        </div>
                      </div>
                    </li>
                  ))}

                  <div className={cls.reviewBtns}>
                    <button
                      onClick={handleReviewPrev}
                      disabled={currentReviewIndex === 0}
                      className={classNames(cls.reviewBtn, {}, [cls.reviewBtnPrev])}
                    >
                      <img src="/about-page/arrow2.svg" className={cls.btnArrow} alt="previous" />
                    </button>
                    <button
                      onClick={handleReviewNext}
                      disabled={currentReviewIndex === REVIEWS.length - 1}
                      className={classNames(cls.reviewBtn, {}, [cls.reviewBtnNext])}
                    >
                      <img src="/about-page/arrow2.svg" className={cls.btnArrow} alt="next" />
                    </button>
                  </div>
                </ul>
              </div>

            </div>
          </div>
        </section>

        <section className={classNames(cls.section, {}, [cls.explore])}>
          <div className={cls.containerContent}>
            <div className={cls.exploreWrapper}>
                <div className={cls.blockTitleWrapper}>
                <h3 className={cls.blockTitle}>Hear directly from our experts</h3>
                <div className={cls.sliderArrowWrapper}>
                  <button
                    onClick={handleSlidePrev}
                    disabled={currentSlideIndex === 0}
                    className={classNames(cls.sliderArrow, {}, ['prev'])}
                    style={{
                      opacity: currentSlideIndex === 0 ? 0.5 : 1,
                      cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <img src="/about-page/arrow2.svg" className={cls.btnArrow} alt="previous" />
                  </button>
                  <button
                    onClick={handleSlideNext}
                    disabled={currentSlideIndex === TOTAL_SLIDE_BLOCKS - 1}
                    className={classNames(cls.sliderArrow, {}, ['next'])}
                    style={{
                      opacity: currentSlideIndex === TOTAL_SLIDE_BLOCKS - 1 ? 0.5 : 1,
                      cursor: currentSlideIndex === TOTAL_SLIDE_BLOCKS - 1 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <img src="/about-page/arrow2.svg" className={cls.btnArrow} alt="next" />
                  </button>
                </div>
              </div>

              <div className={cls.sliderContainer}>
                <div className={cls.slider}>
                  <div
                    className={cls.slidesContainer}
                    style={{
                      transform: `translateX(-${currentSlideIndex * 100}%)`,
                    }}
                  >

                    {/* block 1 */}
                    <div className={cls.slideBlock}>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_1.png" alt="home loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_2.png" alt="home loans refinance" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_3.png" alt="personal loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>

                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_4.png" alt="private student loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                    </div>

                    {/* block 2 */}
                    <div className={cls.slideBlock}>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_1.png" alt="home loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_2.png" alt="home loans refinance" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_3.png" alt="personal loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>

                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_4.png" alt="private student loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                    </div>

                    {/* block 3 */}
                    <div className={cls.slideBlock}>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_1.png" alt="home loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_2.png" alt="home loans refinance" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_3.png" alt="personal loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>

                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_4.png" alt="private student loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                    </div>
                    {/* block 4 */}
                    <div className={cls.slideBlock}>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_1.png" alt="home loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_2.png" alt="home loans refinance" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_3.png" alt="personal loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>

                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_4.png" alt="private student loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                    </div>

                    {/* block 5 */}
                    <div className={cls.slideBlock}>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_1.png" alt="home loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_2.png" alt="home loans refinance" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_3.png" alt="personal loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>

                      </div>
                      <div className={cls.slide}>
                        <div className={cls.slideImgWrapper}>
                          <img src="/about-page/explore_4.png" alt="private student loans" />
                        </div>
                        <div className={cls.shadow}></div>
                        <p className={cls.slideTitle}>Find the best pet insurance for your furry friends – quick, easy & free!</p>
                        <p className={cls.slideTxt}>Find the best coverage for your pet in 7 easy questions tootoot</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className={cls.sliderControls}>
                  <ul className={cls.sliderDots}>
                    {Array.from({ length: TOTAL_SLIDE_BLOCKS }).map((_, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleSlideDotClick(index)}
                          className={currentSlideIndex === index ? 'active' : ''}
                          data-index={index}
                        ></button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
