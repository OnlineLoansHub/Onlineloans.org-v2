'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { classNames } from '@/lib';
import cls from './page.module.scss';

type PartnerKind = 'affiliate' | 'brand';

type AffiliateIntegration = 'landing_page' | 'api' | 'direct_lender';
type BrandIntegration = 'api' | 'direct_to_landing';

const AFFILIATE_OPTIONS: Array<{
  id: AffiliateIntegration;
  title: string;
  description: string;
}> = [
  {
    id: 'landing_page',
    title: 'Landing page',
    description:
      'Send traffic to our hosted pages and experiences. Standard sub-IDs and tracking parameters help attribute conversions.',
  },
  {
    id: 'api',
    title: 'API',
    description:
      'Server-to-server or programmatic integrations. Contact us for access, documentation, and compliance review.',
  },
  {
    id: 'direct_lender',
    title: 'Direct to lender',
    description:
      'Approved deeplinks to lender or marketplace exits. We review each integration for compliance and tracking.',
  },
];

const BRAND_OPTIONS: Array<{
  id: BrandIntegration;
  title: string;
  description: string;
}> = [
  {
    id: 'api',
    title: 'API',
    description:
      'Receive qualified leads via API with agreed formats and SLAs. We’ll walk you through onboarding and testing.',
  },
  {
    id: 'direct_to_landing',
    title: 'Direct to landing page',
    description:
      'Appear in our comparison flows and take users to your approved landing or application experience.',
  },
];

function BenefitCards({ variant }: { variant: 'desktop' | 'mobile' }) {
  const isDesktop = variant === 'desktop';

  return (
    <div
      className={classNames(cls.headerCardsWrapper, {}, [
        isDesktop ? cls.headerCardsWrapperDesktop : cls.headerCardsWrapperMobile,
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
          Smart marketing abilities and competitive payouts enable unmatched conversion rates
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
  );
}

export default function PartnerWithUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [partnerKind, setPartnerKind] = useState<PartnerKind | null>(null);
  const [integrationPreference, setIntegrationPreference] = useState<string | null>(null);
  const [selectionError, setSelectionError] = useState(false);

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

  const selectPartnerKind = useCallback((kind: PartnerKind) => {
    setPartnerKind(kind);
    setIntegrationPreference(null);
    setSelectionError(false);
  }, []);

  const goBackToPartnerGate = useCallback(() => {
    setPartnerKind(null);
    setIntegrationPreference(null);
    setSelectionError(false);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!partnerKind || !integrationPreference) {
        setSelectionError(true);

        return;
      }

      setIsLoading(true);
      setSelectionError(false);

      try {
        await axios.post(
          'https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/partner',
          {
            ...formData,
            partner_type: partnerKind,
            integration_preference: integrationPreference,
          },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
        setFormData({ name: '', email: '', phone: '', site: '', company: '' });
        setIsModalVisible(true);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, partnerKind, integrationPreference]
  );

  const handleModalClose = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const formReady = Boolean(partnerKind && integrationPreference);
  const integrationOptions =
    partnerKind === 'affiliate' ? AFFILIATE_OPTIONS : partnerKind === 'brand' ? BRAND_OPTIONS : [];

  const formTitle =
    partnerKind === 'affiliate'
      ? 'Tell us about your affiliate program'
      : partnerKind === 'brand'
        ? 'Tell us about your brand'
        : 'Become a partner';

  const showMainExperience = partnerKind !== null;

  return (
    <div className={cls.container}>
      <div className={cls.mainContent}>
        {!showMainExperience ? (
          <section className={cls.partnerGate} aria-labelledby="partner-gate-heading">
            <div className={cls.containerContent}>
              <h1 id="partner-gate-heading" className={cls.partnerGateTitle}>
                Partner with OnlineLoans.org
              </h1>
              <p className={cls.partnerGateIntro}>
                First, tell us whether you are an affiliate (traffic partner) or a brand (lender /
                financial partner). We&apos;ll show the right options next.
              </p>
              <p className={cls.partnerGateCompliance}>
                We are a comparison marketplace—not a lender. We provide marketing and comparison
                tools only.
              </p>
              <div
                className={classNames(cls.partnerChooser, {}, [cls.partnerChooserGate])}
                role="group"
                aria-label="Partner type"
              >
                <button
                  type="button"
                  className={cls.partnerKindTile}
                  onClick={() => selectPartnerKind('affiliate')}
                >
                  <span className={cls.partnerKindTitle}>Affiliate</span>
                  <span className={cls.partnerKindDesc}>
                    Publishers, media buyers, and comparison sites—advertise OnlineLoans.org and earn
                    on performance.
                  </span>
                  <span className={cls.partnerKindTileAction}>Select — Affiliate</span>
                </button>
                <button
                  type="button"
                  className={cls.partnerKindTile}
                  onClick={() => selectPartnerKind('brand')}
                >
                  <span className={cls.partnerKindTitle}>Brand</span>
                  <span className={cls.partnerKindDesc}>
                    Lenders and financial partners—receive qualified demand through our marketplace.
                  </span>
                  <span className={cls.partnerKindTileAction}>Select — Brand</span>
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
        <header className={cls.header}>
          <div className={cls.containerContent}>
            <div className={cls.headerContentStack}>
              <button
                type="button"
                className={cls.changePartnerType}
                onClick={goBackToPartnerGate}
              >
                Change partner type (Affiliate / Brand)
              </button>

              <h1 className={cls.headerTitle}>
                Unlock smarter financial growth with Online Loans
              </h1>
              <p className={cls.headerTxt}>
                Online Loans is a comparison marketplace that showcases leading financial brands
                across key sectors, including lending, banking, personal finance, and insurance. We
                are not a lender—we provide marketing and comparison tools only.
              </p>

              <div
                className={cls.selectedPathBanner}
                role="status"
                aria-label="Selected partner type"
              >
                <span className={cls.selectedPathLabel}>You are applying as</span>
                <span className={cls.selectedPathKind}>
                  {partnerKind === 'affiliate' ? 'Affiliate partner' : 'Brand partner'}
                </span>
                <p className={cls.selectedPathDesc}>
                  {partnerKind === 'affiliate'
                    ? 'Drive traffic and advertise OnlineLoans.org with the integration you choose below.'
                    : 'Receive qualified leads through the integration you choose below.'}
                </p>
              </div>

              <p className={cls.disclosureLine}>
                {partnerKind === 'affiliate'
                  ? 'Choose how you want to advertise with us. Then complete the form at the bottom of this page.'
                  : 'Choose how you want to receive leads. Then complete the form at the bottom of this page.'}
              </p>

              <div className={cls.integrationSection}>
                <h2 className={cls.integrationHeading}>
                  {partnerKind === 'affiliate'
                    ? 'How do you want to advertise?'
                    : 'How do you want to receive leads?'}
                </h2>
                <p className={cls.integrationSubhead}>
                  Tap a button to select one option (required before you can submit the form).
                </p>
                <div
                  className={classNames(
                    cls.integrationGrid,
                    {},
                    [partnerKind === 'affiliate' ? cls.integrationGridAffiliate : cls.integrationGridBrand],
                  )}
                  role="group"
                  aria-label="Integration type"
                >
                  {integrationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={classNames(cls.integrationCard, {
                        [cls.integrationCardSelected]: integrationPreference === opt.id,
                      })}
                      onClick={() => {
                        setIntegrationPreference(opt.id);
                        setSelectionError(false);
                      }}
                      aria-pressed={integrationPreference === opt.id}
                    >
                      <span className={cls.integrationCardTitle}>{opt.title}</span>
                      <span className={cls.integrationCardTxt}>{opt.description}</span>
                      <span className={cls.integrationCardAction}>
                        {integrationPreference === opt.id ? 'Selected' : 'Select this option'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {partnerKind === 'affiliate' && (
                <>
                  <h2 className={cls.sectionHeadingSecondary}>Why affiliates work with us</h2>
                  <div className={cls.benefitsDesktopWrap}>
                    <BenefitCards variant="desktop" />
                  </div>
                  <div className={cls.benefitsMobileWrap}>
                    <BenefitCards variant="mobile" />
                  </div>
                </>
              )}

              {partnerKind === 'brand' && (
                <div className={cls.brandHighlights}>
                  <h2 className={cls.sectionHeadingSecondary}>Why brands work with us</h2>
                  <ul className={cls.brandHighlightsList}>
                    <li>Qualified applicants matched to your credit and product guidelines</li>
                    <li>Compliant handoffs and clear disclosure aligned with our marketplace</li>
                    <li>Dedicated onboarding for API or hosted landing integrations</li>
                  </ul>
                </div>
              )}

              <form className={cls.headerForm} onSubmit={handleSubmit}>
                <p className={cls.headerFormTitle}>{formTitle}</p>
                {selectionError && (
                  <p className={cls.formError} role="alert">
                    Please select how you want to integrate above, then submit the form.
                  </p>
                )}
                {!formReady && !selectionError && (
                  <p className={cls.formHint}>
                    Select an integration option above to enable submit.
                  </p>
                )}
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
                <button
                  className={cls.headerFormBtn}
                  type="submit"
                  disabled={isLoading || !formReady}
                >
                  {isLoading ? 'Sending...' : 'Submit application'}
                </button>

                {isLoading && (
                  <div className={classNames(cls.loaderSpinnerWrapper, {}, [cls.visible])}>
                    <div className={cls.loaderSpinner}></div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </header>
          </>
        )}

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
