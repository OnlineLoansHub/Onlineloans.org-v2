'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import cls from './page.module.scss';

type IntegrationPreference = 'landing_page';

function track(eventName: string) {
  if (typeof window === 'undefined') return;

  const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
  gtag?.('event', eventName);
}

export default function AffiliatesPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    site: '',
    company: '',
  });

  const integrationPreference: IntegrationPreference = 'landing_page';

  useEffect(() => {
    track('affiliate_program_view');
  }, []);

  const scrollToForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const scrollToVideo = useCallback(() => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const payload = useMemo(
    () => ({
      ...formData,
      partner_type: 'affiliate',
      integration_preference: integrationPreference,
    }),
    [formData, integrationPreference]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      setSubmitError(null);

      try {
        await axios.post(
          'https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/partner',
          payload,
          { headers: { 'Content-Type': 'application/json' } }
        );

        track('affiliate_program_submit_success');

        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', site: '', company: '' });
        setIsModalVisible(true);
      } catch (error) {
        console.error('Affiliate form submission error:', error);
        setSubmitError(
          'Something went wrong submitting your application. Please double-check your info and try again.'
        );
      } finally {
        setIsLoading(false);
      }
    },
    [payload]
  );

  return (
    <div className={cls.page}>
      <header className={cls.hero}>
        <div className={cls.container}>
          <div className={cls.heroStack}>
            <div className={cls.heroHead}>
              <h1 className={cls.heroTitle}>
                Get Paid To Help Small Businesses Access The Capital They Need To Scale!
              </h1>
              <p className={cls.heroSubtitle}>
                Watch the short overview, then apply. We review every partner and send tracking
                details after approval.
              </p>
            </div>

            <div
              ref={videoRef}
              className={cls.heroVideoBlock}
              aria-label="Affiliate program video"
            >
              <div className={cls.heroVideoInner}>
                <div className={cls.heroMediaBg} aria-hidden="true" />
                <div className={cls.videoFrame}>
                  <video
                    className={cls.video}
                    controls
                    preload="metadata"
                    playsInline
                    src="/affiliates/Untapped_Network_Opportunity.mp4"
                  />
                </div>
              </div>
            </div>

            <div className={cls.heroCtas}>
              <button type="button" className={cls.primaryCta} onClick={scrollToForm}>
                Apply
              </button>
              <button type="button" className={cls.secondaryCta} onClick={scrollToVideo}>
                Watch again
              </button>
            </div>

            <p className={cls.heroTrust}>
              OnlineLoans.org is a comparison marketplace, not a lender. We only work with affiliates
              who use compliant placements and clear disclosures.
            </p>
          </div>
        </div>
      </header>

      <section className={cls.sectionAlt} aria-labelledby="affiliate-form-title">
        <div className={cls.container}>
          <div ref={formRef} className={cls.formAnchor} />
          <div className={cls.formGrid}>
            <div className={cls.formIntro}>
              <h2 id="affiliate-form-title" className={cls.sectionTitle}>
                Application
              </h2>
              <p className={cls.formIntroText}>
                Include your site and how you plan to drive traffic (organic, email, paid, etc.).
                We usually respond within one to two business days.
              </p>
            </div>

            <form className={cls.form} onSubmit={handleSubmit}>
              {isSubmitted ? (
                <div className={cls.successInline} role="status">
                  <div className={cls.successTitle}>Received</div>
                  <div className={cls.successText}>Check your email for next steps.</div>
                  <button type="button" className={cls.secondaryCta} onClick={() => setIsSubmitted(false)}>
                    Submit another application
                  </button>
                </div>
              ) : (
                <>
                  {submitError ? (
                    <div className={cls.formError} role="alert">
                      {submitError}
                    </div>
                  ) : null}
                  <div className={cls.formRow}>
                    <label className={cls.label}>
                      Full name
                      <input
                        className={cls.input}
                        name="name"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                    <label className={cls.label}>
                      Email
                      <input
                        className={cls.input}
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                  </div>

                  <div className={cls.formRow}>
                    <label className={cls.label}>
                      Phone
                      <input
                        className={cls.input}
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                    <label className={cls.label}>
                      Website
                      <input
                        className={cls.input}
                        name="site"
                        type="url"
                        placeholder="https://your-site.com"
                        value={formData.site}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                  </div>

                  <label className={cls.label}>
                    Company
                    <input
                      className={cls.input}
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </label>

                  <button type="submit" className={cls.primaryCta} disabled={isLoading}>
                    {isLoading ? 'Submitting…' : 'Submit application'}
                  </button>
                  <p className={cls.disclaimer}>
                    By submitting, you agree to be contacted about this program. We use your details
                    only for onboarding.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className={cls.section}>
        <div className={cls.container}>
          <h2 className={cls.sectionTitle}>FAQ</h2>
          <div className={cls.faq}>
            <details className={cls.faqItem}>
              <summary className={cls.faqQ}>What happens after I apply?</summary>
              <div className={cls.faqA}>
                We review your site and traffic source. If you’re a fit, we email tracking setup and
                program guidelines.
              </div>
            </details>
            <details className={cls.faqItem}>
              <summary className={cls.faqQ}>How does tracking work?</summary>
              <div className={cls.faqA}>
                We provide parameters and sub-ID conventions so you can attribute clicks and
                conversions consistently.
              </div>
            </details>
            <details className={cls.faqItem}>
              <summary className={cls.faqQ}>How soon will I hear back?</summary>
              <div className={cls.faqA}>Typically within one to two business days.</div>
            </details>
          </div>
        </div>
      </section>

      {isModalVisible ? (
        <div className={cls.modalOverlay} role="dialog" aria-modal="true">
          <div className={cls.modal}>
            <div className={cls.modalTitle}>Thanks</div>
            <div className={cls.modalText}>
              Your application is in. We’ll follow up by email with next steps.
            </div>
            <button type="button" className={cls.primaryCta} onClick={() => setIsModalVisible(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
