'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { HERO_DATA } from '@/data/hero';
import { CONTACT } from '@/data/contact';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Left: Brand Monogram + Full Title */}
        <div className={styles.brandGroup}>
          <Link href="/#hero" className={styles.logoLink} onClick={closeMenu}>
            <Image
              src="/logo/ark-mark-red-white.svg"
              alt="ARK STUDIO Monogram"
              width={38}
              height={27}
              className={styles.logoImage}
              priority
            />
            <span className={styles.brandName}>{HERO_DATA.brand}</span>
          </Link>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.brandRole}>{HERO_DATA.role}</span>
        </div>

        {/* Right: Availability Status + Desktop Nav + Mobile Toggle */}
        <div className={styles.rightGroup}>
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {HERO_DATA.navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.statusBadge}
            title="Chat directly on WhatsApp"
          >
            <span className={styles.pulseDot} aria-hidden="true" />
            <span className={styles.statusText}>{HERO_DATA.statusText}</span>
          </a>

          {/* Clean Mobile Hamburger Button */}
          <button
            type="button"
            className={`${styles.hamburgerBtn} ${isOpen ? styles.burgerOpen : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.mobileDrawer} ${isOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className={styles.mobileNavList}>
            {HERO_DATA.navLinks.map((link, idx) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileNavIndex}>0{idx + 1}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mobileFooter}>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileActionBtn}
            onClick={closeMenu}
          >
            Chat on WhatsApp ({CONTACT.whatsappDisplay})
          </a>
          <div className="label-upper" style={{ textAlign: 'center', fontSize: '0.6875rem' }}>
            ARK STUDIO • {CONTACT.availability}
          </div>
        </div>
      </div>
    </header>
  );
}
