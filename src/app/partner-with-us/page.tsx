'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { classNames } from '@/lib';
import cls from './page.module.scss';

export default function PartnerWithUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    site: '',
    company: '',
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await fetch(
          `https://script.google.com/macros/s/AKfycbwATv2Pfnoqx5m4sXuZHbR1HbJ1RMTNvUJtv_LCM2-bD_MFagFQju2A5UvRJpc8eQOI/exec`,
          {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }
        );
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsLoading(false);
        setFormData({ name: '', email: '', phone: '', site: '', company: '' });
        setIsModalVisible(true);
      }
    },
    [formData]
  );

  const handleModalClose = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <div className={cls.container}>
      <div className={cls.mainContent}>
        <header className={cls.header}>
        <div className={cls.containerContent}>
          <div className={cls.headerContent}>
            <div className={cls.headerContentLeft}>
              <h1 className={cls.headerTitle}>
                Unlock smarter financial growth with Online Loans
              </h1>
              <p className={cls.headerTxt}>
                Online Loans is a comparison marketplace that showcases leading financial brands
                across key sectors, including lending, banking, personal finance, and insurance.
              </p>

              <div
                className={classNames(cls.headerCardsWrapper, {}, [cls.headerCardsWrapperDesktop])}
              >
                <div className={classNames(cls.headerCard, {}, [cls.headerCard1])}>
                  <div className={cls.headerCardImgWrapper}>
                    <Image
                      src="/partner-with-us/growth.svg"
                      alt="High ROI growth icon"
                      className={cls.headerCardImg}
                      width={64}
                      height={64}
                    />
                  </div>
                  <p className={cls.headerCardTitle}>High ROI at scale</p>
                  <p className={cls.headerCardTxt}>
                    Smart marketing abilities and competitive payouts enable unmatched conversion
                    rates
                  </p>
                </div>
                <div className={classNames(cls.headerCard, {}, [cls.headerCard2])}>
                  <div className={cls.headerCardImgWrapper}>
                    <Image
                      src="/partner-with-us/quality.svg"
                      alt="Top quality traffic icon"
                      className={cls.headerCardImg}
                      width={64}
                      height={64}
                    />
                  </div>
                  <p className={cls.headerCardTitle}>Top quality traffic</p>
                  <p className={cls.headerCardTxt}>
                    Large volumes of high-quality leads that turn into long-term customers
                  </p>
                </div>
                <div className={classNames(cls.headerCard, {}, [cls.headerCard3])}>
                  <div className={cls.headerCardImgWrapper}>
                    <Image
                      src="/partner-with-us/goal.svg"
                      alt="Massive exposure icon"
                      className={cls.headerCardImg}
                      width={64}
                      height={64}
                    />
                  </div>
                  <p className={cls.headerCardTitle}>Massive exposure</p>
                  <p className={cls.headerCardTxt}>
                    Reach valuable consumers at the right moment of purchase decisions
                  </p>
                </div>
              </div>
            </div>

            <div className={cls.headerContentRight}>
              <form className={cls.headerForm} onSubmit={handleSubmit}>
                <p className={cls.headerFormTitle}>Become a partner</p>
                <div className={cls.headerInputWrapper}>
                  <input
                    className={cls.headerInput}
                    placeholder="Your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className={cls.headerInput}
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className={cls.headerInput}
                    placeholder="Your phone number"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className={cls.headerInput}
                    placeholder="Your website"
                    name="site"
                    type="url"
                    value={formData.site}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className={cls.headerInput}
                    placeholder="Your company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button className={cls.headerFormBtn} type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : "Let's grow"}
                </button>

                {isLoading && (
                  <div className={classNames(cls.loaderSpinnerWrapper, {}, [cls.visible])}>
                    <div className={cls.loaderSpinner}></div>
                  </div>
                )}
              </form>

              <div
                className={classNames(cls.headerCardsWrapper, {}, [cls.headerCardsWrapperMobile])}
              >
                <div className={classNames(cls.headerCard, {}, [cls.headerCard1])}>
                  <div className={cls.headerCardImgWrapper}>
                    <Image
                      src="/partner-with-us/growth.svg"
                      alt="High ROI growth icon"
                      className={cls.headerCardImg}
                      width={64}
                      height={64}
                    />
                  </div>
                  <p className={cls.headerCardTitle}>High ROI at scale</p>
                  <p className={cls.headerCardTxt}>
                    Smart marketing abilities and competitive payouts enable unmatched conversion
                    rates
                  </p>
                </div>
                <div className={classNames(cls.headerCard, {}, [cls.headerCard2])}>
                  <div className={cls.headerCardImgWrapper}>
                    <Image
                      src="/partner-with-us/quality.svg"
                      alt="Top quality traffic icon"
                      className={cls.headerCardImg}
                      width={64}
                      height={64}
                    />
                  </div>
                  <p className={cls.headerCardTitle}>Top quality traffic</p>
                  <p className={cls.headerCardTxt}>
                    Large volumes of high-quality leads that turn into long-term customers
                  </p>
                </div>
                <div className={classNames(cls.headerCard, {}, [cls.headerCard3])}>
                  <div className={cls.headerCardImgWrapper}>
                    <Image
                      src="/partner-with-us/goal.svg"
                      alt="Massive exposure icon"
                      className={cls.headerCardImg}
                      width={64}
                      height={64}
                    />
                  </div>
                  <p className={cls.headerCardTitle}>Massive exposure</p>
                  <p className={cls.headerCardTxt}>
                    Reach valuable consumers at the right moment of purchase decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isModalVisible && (
        <div
          className={classNames(cls.formModalWrapper, {}, [cls.visible])}
          onClick={handleModalClose}
        >
          <div className={cls.formModal} onClick={(e) => e.stopPropagation()}>
            <p className={cls.formModalTitle}>Thank you for your trust!</p>
            <p className={cls.formModalSubtitle}>We will contact you soon</p>
            <button className={cls.formModalBtn} onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
