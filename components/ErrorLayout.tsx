'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT } from '@/data/contact';
import styles from './ErrorLayout.module.css';

export interface ActionButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface ErrorLayoutProps {
  code: string;
  label: string;
  headline: string;
  description: string;
  handwrittenAccent?: string;
  primaryAction: ActionButtonProps;
  secondaryAction?: ActionButtonProps;
  showContactLinks?: boolean;
}

export default function ErrorLayout({
  code,
  label,
  headline,
  description,
  handwrittenAccent,
  primaryAction,
  secondaryAction,
  showContactLinks = true,
}: ErrorLayoutProps) {
  return (
    <div className={styles.errorPage}>
      <Header />

      <main id="main-content" className={styles.mainContainer} role="main">
        {/* Subtle Ambient Red Glow Behind Error Code */}
        <div className={styles.ambientGlow} aria-hidden="true" />

        <div className={styles.contentCard}>
          {/* Small Uppercase Label */}
          <span className={styles.labelBadge}>{label}</span>

          {/* Giant Condensed Red Error Code */}
          <div className={styles.codeWrapper} aria-hidden="true">
            <span className={styles.giantCode}>{code}</span>
          </div>

          {/* Single H1 for Accessibility & Screen Readers */}
          <h1 className={styles.headline}>{headline}</h1>

          {/* Muted Explanation Text */}
          <p className={styles.description}>{description}</p>

          {/* Optional Handwritten Accent Note */}
          {handwrittenAccent && (
            <span className={styles.handwrittenAccent}>{handwrittenAccent}</span>
          )}

          {/* Clear Action Buttons */}
          <div className={styles.actionsRow}>
            {primaryAction.href ? (
              <Link href={primaryAction.href} className={styles.primaryBtn}>
                {primaryAction.label}
              </Link>
            ) : (
              <button
                type="button"
                onClick={primaryAction.onClick}
                className={styles.primaryBtn}
              >
                {primaryAction.label}
              </button>
            )}

            {secondaryAction &&
              (secondaryAction.href ? (
                <Link href={secondaryAction.href} className={styles.secondaryBtn}>
                  {secondaryAction.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={secondaryAction.onClick}
                  className={styles.secondaryBtn}
                >
                  {secondaryAction.label}
                </button>
              ))}
          </div>

          {/* Optional Direct Contact Line */}
          {showContactLinks && (
            <div className={styles.contactLine}>
              <span className={styles.contactPrompt}>Need immediate assistance?</span>
              <div className={styles.contactLinks}>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  aria-label={`Chat directly on WhatsApp at ${CONTACT.whatsappDisplay}`}
                >
                  <span className={styles.contactDot} aria-hidden="true" />
                  WhatsApp ({CONTACT.whatsappDisplay})
                </a>
                <span className={styles.contactDivider} aria-hidden="true">
                  /
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={styles.contactLink}
                  aria-label={`Send direct email to ${CONTACT.email}`}
                >
                  Email ({CONTACT.email})
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
