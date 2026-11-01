'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT, PROJECT_TYPES, BUDGET_TIERS } from '@/data/contact';
import styles from './page.module.css';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_TIERS[0],
    details: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [whatsappState, setWhatsappState] = useState<{
    opened: boolean;
    url: string;
    message: string;
  } | null>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    });
  };

  const handleCopyMessage = () => {
    if (!whatsappState?.message) return;
    navigator.clipboard.writeText(whatsappState.message).then(() => {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2200);
    });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedDetails = formData.details.trim();

    if (!trimmedName) {
      errs.name = 'Please provide your name or organization.';
    }

    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please provide a valid email format or leave blank.';
    }

    if (!trimmedDetails) {
      errs.details = 'Please briefly describe your project or requirements.';
    } else if (trimmedDetails.length < 10) {
      errs.details = 'Please provide at least a short sentence about what you need.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot bot protection
    if (honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    const lines = [
      `*New Project Inquiry — ARK STUDIO*`,
      `*Client:* ${formData.name.trim()}`,
      formData.email.trim() ? `*Email:* ${formData.email.trim()}` : null,
      `*Project Scope:* ${formData.projectType}`,
      `*Estimated Budget:* ${formData.budget}`,
      `*Details:*`,
      formData.details.trim(),
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const waUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    setWhatsappState({
      opened: true,
      url: waUrl,
      message: fullMessage,
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.contactPage}>
      <Header />

      <main id="main-content">
        {/* Page Hero Header */}
        <section className={styles.heroHeader} aria-label="Contact Page Introduction">
          <div className={styles.ambientGlow} aria-hidden="true" />
          <div className="container">
            <Link href="/" className={styles.backLink}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>BACK TO HOME</span>
            </Link>

            <span className={styles.pageLabel}>// START A CONVERSATION</span>
            <h1 className={styles.pageTitle}>LET&apos;S WORK TOGETHER</h1>
            <p className={styles.pageSubtitle}>
              Have a website idea, a business to grow, or a brand that needs a stronger digital
              presence? Share your requirements below to start a direct consultation on WhatsApp, or
              reach out via email.
            </p>
          </div>
        </section>

        {/* Direct Channels & Inquiry Form */}
        <section className={styles.inquirySection} aria-label="Project Inquiry Form & Direct Channels">
          <div className="container">
            <div className={styles.inquiryGrid}>
              {/* Left Column: Direct Communication Channels */}
              <div className={styles.channelsCol}>
                {/* WhatsApp Channel Card */}
                <div className={styles.channelCard}>
                  <div className={styles.channelHeader}>
                    <span className={styles.channelLabel}>DIRECT CHAT / WHATSAPP</span>
                    <span className={styles.statusIndicator}>
                      <span className={styles.pulseDot} aria-hidden="true" />
                      AVAILABLE
                    </span>
                  </div>
                  <div className={styles.channelValue}>{CONTACT.whatsappDisplay}</div>
                  <div className={styles.channelActions}>
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.channelActionBtn}
                    >
                      CHAT ON WHATSAPP ↗
                    </a>
                  </div>
                </div>

                {/* Email Channel Card */}
                <div className={styles.channelCard}>
                  <div className={styles.channelHeader}>
                    <span className={styles.channelLabel}>EMAIL INQUIRY</span>
                    <span className={styles.channelLabel}>OFFICIAL INBOX</span>
                  </div>
                  <div className={styles.channelValue}>{CONTACT.email}</div>
                  <div className={styles.channelActions}>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={styles.channelSecondaryBtn}
                    >
                      {copiedEmail ? '✓ COPIED' : 'COPY EMAIL'}
                    </button>
                    <a
                      href={`mailto:${CONTACT.email}?subject=Project%20Inquiry%20via%20ARK%20STUDIO`}
                      className={styles.channelSecondaryBtn}
                    >
                      OPEN MAIL CLIENT ↗
                    </a>
                  </div>
                </div>

                {/* Location & Time Zone Card */}
                <div className={styles.locationCard}>
                  <div className={styles.locationTitle}>LOCATION &amp; GLOBAL WORKFLOW</div>
                  <p className={styles.locationDesc}>
                    Based in <strong>Sargodha, Pakistan (PKT / UTC+5)</strong>. Serving businesses
                    across Pakistan, Saudi Arabia, the UAE, and worldwide via seamless remote
                    collaboration.
                  </p>
                </div>
              </div>

              {/* Right Column: WhatsApp Inquiry Form Card */}
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>PROJECT INQUIRY</h2>
                  <p className={styles.formSubtitle}>
                    Fill in your project details. Submitting creates a clean, pre-formatted summary
                    that opens directly in WhatsApp for an instant discussion.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Honeypot field for spam prevention */}
                  <div className={styles.honeypot} aria-hidden="true">
                    <label htmlFor="contact_website_field">Do not fill this</label>
                    <input
                      id="contact_website_field"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className={styles.formRow2}>
                    {/* Name */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="client-name" className={styles.fieldLabel}>
                        YOUR NAME / BRAND *
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        placeholder="e.g. Tariq Mansoor / TechCorp"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.textInput}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-err' : undefined}
                      />
                      {errors.name && (
                        <span id="name-err" className={styles.fieldError}>
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email (Optional) */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="client-email" className={styles.fieldLabel}>
                        EMAIL ADDRESS <span className={styles.fieldOptional}>(OPTIONAL)</span>
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.textInput}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-err' : undefined}
                      />
                      {errors.email && (
                        <span id="email-err" className={styles.fieldError}>
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formRow2} style={{ marginTop: 'var(--space-4)' }}>
                    {/* Project Scope */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="project-scope" className={styles.fieldLabel}>
                        PROJECT SCOPE *
                      </label>
                      <select
                        id="project-scope"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className={styles.selectInput}
                      >
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Estimated Budget */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="project-budget" className={styles.fieldLabel}>
                        ESTIMATED BUDGET <span className={styles.fieldOptional}>(OPTIONAL)</span>
                      </label>
                      <select
                        id="project-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className={styles.selectInput}
                      >
                        {BUDGET_TIERS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={styles.fieldGroup} style={{ marginTop: 'var(--space-4)' }}>
                    <label htmlFor="project-details" className={styles.fieldLabel}>
                      PROJECT DETAILS &amp; GOALS *
                    </label>
                    <textarea
                      id="project-details"
                      placeholder="Outline your requirements, target audience, reference sites, or desired features..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className={styles.textareaInput}
                      aria-invalid={Boolean(errors.details)}
                      aria-describedby={errors.details ? 'details-err' : undefined}
                    />
                    {errors.details && (
                      <span id="details-err" className={styles.fieldError}>
                        {errors.details}
                      </span>
                    )}
                  </div>

                  {/* WhatsApp Submission Fallback Notice */}
                  {whatsappState?.opened && (
                    <div className={styles.fallbackNotice} style={{ marginTop: 'var(--space-4)' }}>
                      <p>
                        ✓ WhatsApp opened! If your browser blocked the tab, click below to copy the
                        message or open WhatsApp directly:
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className={styles.copyMsgBtn}
                        >
                          {copiedMessage ? '✓ MESSAGE COPIED' : 'COPY INQUIRY MESSAGE'}
                        </button>
                        <a
                          href={whatsappState.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.copyMsgBtn}
                          style={{ color: 'var(--red)' }}
                        >
                          OPEN WHATSAPP AGAIN ↗
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <button type="submit" className={styles.submitBtn}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                      </svg>
                      <span>SEND ON WHATSAPP</span>
                    </button>
                    <p className={styles.submitNote} style={{ marginTop: '8px' }}>
                      Your message opens directly in WhatsApp with no automated spam or delays.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Project FAQ Section */}
        <section className={styles.faqSection} aria-label="Frequently Asked Questions">
          <div className="container">
            <div className={styles.faqHeader}>
              <span className={styles.sectionSmallLabel}>// QUESTIONS &amp; ANSWERS</span>
              <h2 className={styles.sectionMainHeading}>FREQUENTLY ASKED QUESTIONS</h2>
            </div>

            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>HOW QUICKLY CAN WE GET STARTED?</h3>
                <p className={styles.faqAnswer}>
                  Most projects kick off within 24 to 48 hours following an initial discovery chat.
                  We establish scope, deliverables, timeline, and milestones before writing any code.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>DO YOU BUILD BILINGUAL (ARABIC / ENGLISH) SITES?</h3>
                <p className={styles.faqAnswer}>
                  Yes. Full bidirectional RTL and LTR support is one of my primary specialties,
                  engineered with native typographic hierarchy, custom font pairings, and responsive
                  mirroring.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>WHAT IS INCLUDED IN A STANDARD WEBSITE PROJECT?</h3>
                <p className={styles.faqAnswer}>
                  Every site includes custom UI/UX design, full responsive development, mobile-first
                  optimization, Core Web Vitals performance tuning, semantic SEO metadata, and
                  deployment setup.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>WHAT HAPPENS AFTER THE SITE GOES LIVE?</h3>
                <p className={styles.faqAnswer}>
                  I assist with DNS configuration, domain connection, search engine verification
                  (Google Search Console, sitemap submission), and offer post-launch support for
                  updates and optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
