'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { CONTACT } from '@/data/contact';
import { HERO_DATA } from '@/data/hero';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className="container">
        {/* Main Row */}
        <div className={styles.mainRow}>
          {/* Brand & Role */}
          <div className={styles.brandBox}>
            <Link href="/" className={styles.logoLink} onClick={scrollToTop}>
              <Image
                src="/logo/ark-mark-red-white.svg"
                alt="ARK STUDIO Monogram"
                width={38}
                height={27}
                className={styles.logoImage}
              />
              <span className={styles.brandName}>{HERO_DATA.brand}</span>
            </Link>
            <span className={styles.divider} aria-hidden="true" />
            <span className={styles.brandRole}>{HERO_DATA.role}</span>
          </div>

          {/* Navigation Links */}
          <nav className={styles.navLinks} aria-label="Footer Navigation">
            {HERO_DATA.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Subtle Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <svg
              className={styles.arrowUpIcon}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>

        {/* Bottom Metadata Row */}
        <div className={styles.bottomRow}>
          <div className={styles.copyrightText}>
            © {currentYear} {HERO_DATA.brand} • ABDULREHMAN KHALID. ALL RIGHTS RESERVED.
          </div>

          <div className={styles.directLinks}>
            <a href={`mailto:${CONTACT.email}`} className={styles.directLink}>
              {CONTACT.email}
            </a>
            <span style={{ color: 'var(--line)' }}>/</span>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directLink}
              style={{ color: 'var(--red)' }}
            >
              WA: {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
