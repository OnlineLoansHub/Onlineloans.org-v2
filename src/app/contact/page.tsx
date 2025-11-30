'use client';

import { useState, useCallback } from 'react';
import axios from 'axios';
import cls from './page.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await axios.post('https://server-ol-v2-fcaa9dab215e.herokuapp.com/api/contact', formData, {
          headers: { 'Content-Type': 'application/json' },
        });
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [formData]
  );

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <h1 className={cls.title}>Contact Us</h1>
        <p className={cls.subtitle}>
          Have a question or need assistance? We&apos;re here to help. Fill out the form below or
          reach out to us directly.
        </p>

        <div className={cls.contactWrapper}>
          <div className={cls.contactInfo}>
            <h2 className={cls.sectionTitle}>Get in Touch</h2>
            <p className={cls.paragraph}>
              We value your feedback and are committed to providing excellent customer service. Our
              team is available to assist you with any questions or concerns.
            </p>

            <div className={cls.infoItem}>
              <h3 className={cls.infoTitle}>Email</h3>
              <a href="mailto:business@onlineloans.org" className={cls.infoLink}>
                business@onlineloans.org
              </a>
            </div>

            <div className={cls.infoItem}>
              <h3 className={cls.infoTitle}>Business Hours</h3>
              <p className={cls.infoText}>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className={cls.infoText}>Saturday - Sunday: Closed</p>
            </div>

            <div className={cls.infoItem}>
              <h3 className={cls.infoTitle}>Response Time</h3>
              <p className={cls.infoText}>
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>

          <form className={cls.contactForm} onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className={cls.successMessage}>
                <h3>Thank you for contacting us!</h3>
                <p>We&apos;ve received your message and will get back to you soon.</p>
                <button
                  type="button"
                  className={cls.resetButton}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className={cls.formRow}>
                  <div className={cls.formGroup}>
                    <label htmlFor="name" className={cls.label}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={cls.input}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={cls.formGroup}>
                    <label htmlFor="email" className={cls.label}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={cls.input}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={cls.formRow}>
                  <div className={cls.formGroup}>
                    <label htmlFor="phone" className={cls.label}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      id="phone"
                      name="phone"
                      className={cls.input}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={cls.formGroup}>
                    <label htmlFor="subject" className={cls.label}>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className={cls.select}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="loan">Loan Application</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={cls.formGroup}>
                  <label htmlFor="message" className={cls.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={cls.textarea}
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className={cls.submitButton} disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
