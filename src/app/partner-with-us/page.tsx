'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';
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
        await axios.post('https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/partner', formData, {
          headers: { 'Content-Type': 'application/json' },
        });
        setFormData({ name: '', email: '', phone: '', site: '', company: '' });
        setIsModalVisible(true);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsLoading(false);
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
                  className={classNames(cls.headerCardsWrapper, {}, [
                    cls.headerCardsWrapperDesktop,
                  ])}
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
