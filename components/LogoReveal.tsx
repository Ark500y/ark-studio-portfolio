'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LogoReveal.module.css';

export default function LogoReveal() {
  const [phase, setPhase] = useState<'enter' | 'exit' | 'done'>('enter');

  useEffect(() => {
    // Phase 1 (0ms - 850ms): Logo reveals with glowing red aura & Anton typography
    // Phase 2 (850ms): Smooth curtain wipe up revealing the hero section
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 850);

    // Phase 3 (1150ms): Unmount completely from DOM
    const doneTimer = setTimeout(() => {
      setPhase('done');
    }, 1150);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  return (
    <aside
      className={`${styles.revealOverlay} ${phase === 'exit' ? styles.revealExit : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Top Laser Progress Bar */}
      <div className={styles.progressBar} />

      {/* Ambient Radial Crimson Glow */}
      <div className={styles.ambientGlow} />

      {/* Center Stage */}
      <div className={styles.stage}>
        {/* ARK Monogram Mark */}
        <div className={styles.markWrapper}>
          <Image
            src="/logo/ark-mark-red-white.svg"
            alt="ARK STUDIO"
            width={84}
            height={60}
            priority
            className={styles.markImage}
          />
        </div>

        {/* Wordmark "ARK STUDIO" */}
        <div className={styles.wordmarkWrapper}>
          <span className={styles.wordmark}>ARK STUDIO</span>
        </div>

        {/* Expanding Accent Divider */}
        <div className={styles.accentDivider} />

        {/* Tagline */}
        <div className={styles.taglineWrapper}>
          <span className={styles.tagline}>WEB DESIGNER &amp; DIGITAL CREATOR</span>
        </div>
      </div>
    </aside>
  );
}
