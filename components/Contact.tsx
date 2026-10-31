'use client';

import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { CONTACT, CONTACT_COPY, PROJECT_TYPES, BUDGET_TIERS } from '@/data/contact';

export default function Contact() {
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

  const formCardRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  const scrollToForm = () => {
    if (formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 400);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedDetails = formData.details.trim();

    if (!trimmedName) {
      errs.name = 'Please provide your name.';
    }

    // Email is optional, but if provided it must have valid format
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!trimmedDetails) {
      errs.details = 'Please briefly describe your project.';
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Cap details at 1000 characters
    if (name === 'details' && value.length > 1000) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection: silently drop automated submissions
    if (honeypot) {
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clean inputs: strip control characters (preserve newlines in details)
    const cleanName = formData.name.replace(/[\x00-\x1F\x7F]/g, '').trim();
    const cleanEmail = formData.email.replace(/[\x00-\x1F\x7F]/g, '').trim();
    const cleanProjectType = formData.projectType.replace(/[\x00-\x1F\x7F]/g, '').trim();
    const cleanBudget = formData.budget.replace(/[\x00-\x1F\x7F]/g, '').trim();
    const cleanDetails = formData.details.replace(/[\x00-\x09\x0B-\x1F\x7F]/g, '').trim();

    // Construct the structured WhatsApp message
    const message = `New project inquiry from the ARK STUDIO website\n\nName: ${cleanName}\nEmail: ${
      cleanEmail || 'Not provided'
    }\nProject type: ${cleanProjectType}\nBudget: ${
      cleanBudget || 'Not specified'
    }\n\nProject details:\n${cleanDetails}`;

    // Read phone number digits strictly from CONTACT constant
    const digitsOnly =
      CONTACT.whatsappNumber ||
      CONTACT.whatsappUrl.replace(/\D/g, '') ||
      '923141495630';

    const targetUrl = `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp directly inside submit handler for popup allowance
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }

    // Update honest status state
    setWhatsappState({
      opened: true,
      url: targetUrl,
      message: message,
    });
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact and Inquiries">
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.contactGrid}>
          {/* ==========================================================
              LEFT COLUMN: HEADLINE, COPY & DIRECT CONTACT CHANNELS
              ========================================================== */}
          <div className={styles.leftColumn}>
            <span className={styles.sectionLabel}>{CONTACT_COPY.label}</span>
            <h2 className={styles.contactHeading}>{CONTACT_COPY.heading}</h2>
            <p className={styles.contactSubcopy}>{CONTACT_COPY.subcopy}</p>

            <button type="button" onClick={scrollToForm} className={styles.ctaBtn}>
              <span>{CONTACT_COPY.ctaText}</span>
              <svg
                className={styles.ctaArrow}
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Direct Communication Channels */}
            <div className={styles.channelsStack}>
              {/* WhatsApp Card */}
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCard}
              >
                <div className={styles.channelInfo}>
                  <div className={styles.channelIconBox}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.09 9.03 12.26C9.16 12.43 10.74 14.86 13.16 15.91C13.74 16.16 14.18 16.31 14.54 16.42C15.12 16.61 15.65 16.58 16.07 16.52C16.54 16.45 17.51 15.93 17.72 15.35C17.92 14.77 17.92 14.28 17.86 14.17C17.8 14.07 17.65 14.01 17.43 13.9C17.21 13.79 16.12 13.25 15.92 13.18C15.71 13.11 15.56 13.07 15.41 13.3C15.26 13.52 14.82 14.05 14.69 14.2C14.56 14.34 14.43 14.36 14.21 14.25C13.99 14.14 13.08 13.84 12 12.88C11.16 12.13 10.59 11.2 10.46 10.98C10.34 10.76 10.45 10.64 10.56 10.53C10.66 10.43 10.78 10.27 10.89 10.14C11 10.01 11.04 9.92 11.11 9.77C11.19 9.63 11.15 9.5 11.09 9.39C11.04 9.28 10.59 8.18 10.41 7.74C10.23 7.3 10.05 7.36 9.91 7.35C9.79 7.34 9.64 7.34 9.53 7.34Z" />
                    </svg>
                  </div>
                  <div className={styles.channelMeta}>
                    <span className={styles.channelLabel}>DIRECT CHAT / WHATSAPP</span>
                    <span className={styles.channelValue}>{CONTACT.whatsappDisplay}</span>
                  </div>
                </div>
                <div className={styles.channelAction}>
                  <span className={styles.onlineDot} aria-hidden="true" />
                  <span>Instant Reply</span>
                </div>
              </a>

              {/* Email Card with Copy Feature */}
              <div className={styles.channelCard}>
                <a href={`mailto:${CONTACT.email}`} className={styles.channelLinkWrapper}>
                  <div className={styles.channelInfo}>
                    <div className={styles.channelIconBox}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className={styles.channelMeta}>
                      <span className={styles.channelLabel}>EMAIL INQUIRY</span>
                      <span className={styles.channelValue}>{CONTACT.email}</span>
                    </div>
                  </div>
                </a>
                <div className={styles.channelAction}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`${styles.copyEmailBtn} ${
                      copiedEmail ? styles.copyEmailBtnSuccess : ''
                    }`}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? 'COPIED ✓' : 'COPY'}
                  </button>
                  <a href={`mailto:${CONTACT.email}`} className={styles.sendEmailLink}>
                    Send →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
              RIGHT COLUMN: PROJECT INQUIRY FORM (WHATSAPP DISPATCH)
              ========================================================== */}
          <div ref={formCardRef} className={styles.formCard} id="inquiry-form">
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>PROJECT INQUIRY</h3>
              <p className={styles.formSubtitle}>
                Share your project details to initiate a design consultation via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.inquiryForm} noValidate>
              {/* Spam Honeypot Filter */}
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="contact-website">Website (Leave blank)</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className={styles.formRow}>
                {/* Name (Required) */}
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name *
                  </label>
                  <input
                    ref={nameInputRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Mansoor"
                    className={styles.textInput}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    required
                  />
                  {errors.name && (
                    <span id="error-name" className={styles.errorText}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email (Optional) */}
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email Address <span className={styles.optionalTag}>(Optional)</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={styles.textInput}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                  {errors.email && (
                    <span id="error-email" className={styles.errorText}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                {/* Project Type (Required) */}
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-project-type" className={styles.label}>
                    Project Scope *
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={styles.selectInput}
                    required
                  >
                    {PROJECT_TYPES.map((pt, idx) => (
                      <option key={idx} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Budget (Optional) */}
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-budget" className={styles.label}>
                    Estimated Budget <span className={styles.optionalTag}>(Optional)</span>
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={styles.selectInput}
                  >
                    {BUDGET_TIERS.map((tier, idx) => (
                      <option key={idx} value={tier}>
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details (Required, Max 1000 characters) */}
              <div className={styles.inputGroup}>
                <div className={styles.textareaHeader}>
                  <label htmlFor="contact-details" className={styles.label}>
                    Project Details *
                  </label>
                  <span className={styles.charCount}>
                    {formData.details.length} / 1000
                  </span>
                </div>
                <textarea
                  id="contact-details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  maxLength={1000}
                  placeholder="Outline your project goals, preferred timeline, key features, or reference websites..."
                  className={styles.textareaInput}
                  aria-invalid={Boolean(errors.details)}
                  aria-describedby={errors.details ? 'error-details' : undefined}
                  required
                />
                {errors.details && (
                  <span id="error-details" className={styles.errorText}>
                    {errors.details}
                  </span>
                )}
              </div>

              {/* WhatsApp Submission Button */}
              <div>
                <button type="submit" className={styles.submitBtn}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.09 9.03 12.26C9.16 12.43 10.74 14.86 13.16 15.91C13.74 16.16 14.18 16.31 14.54 16.42C15.12 16.61 15.65 16.58 16.07 16.52C16.54 16.45 17.51 15.93 17.72 15.35C17.92 14.77 17.92 14.28 17.86 14.17C17.8 14.07 17.65 14.01 17.43 13.9C17.21 13.79 16.12 13.25 15.92 13.18C15.71 13.11 15.56 13.07 15.41 13.3C15.26 13.52 14.82 14.05 14.69 14.2C14.56 14.34 14.43 14.36 14.21 14.25C13.99 14.14 13.08 13.84 12 12.88C11.16 12.13 10.59 11.2 10.46 10.98C10.34 10.76 10.45 10.64 10.56 10.53C10.66 10.43 10.78 10.27 10.89 10.14C11 10.01 11.04 9.92 11.11 9.77C11.19 9.63 11.15 9.5 11.09 9.39C11.04 9.28 10.59 8.18 10.41 7.74C10.23 7.3 10.05 7.36 9.91 7.35C9.79 7.34 9.64 7.34 9.53 7.34Z" />
                  </svg>
                  <span>SEND ON WHATSAPP</span>
                </button>
                <p className={styles.submitNote}>
                  Your message opens in WhatsApp. I usually reply there.
                </p>
              </div>

              {/* Honest WhatsApp Status & Follow-up Actions */}
              {whatsappState && (
                <div className={styles.whatsappStatusCard} role="status">
                  <p className={styles.whatsappStatusText}>
                    Opening WhatsApp. Press Send in the chat to deliver your message.
                  </p>
                  <div className={styles.whatsappActionsRow}>
                    <a
                      href={whatsappState.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.tapHereLink}
                    >
                      WhatsApp didn&apos;t open? Tap here
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className={styles.copyMessageBtn}
                    >
                      {copiedMessage ? 'COPIED ✓' : 'COPY MESSAGE'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
