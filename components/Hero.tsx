'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { HERO_DATA } from '@/data/hero';

export default function Hero() {
  const [imageSrc, setImageSrc] = useState('/images/abdulrehman-cutout.png');
  const [imageFailed, setImageFailed] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Subtle interactive desktop pointer spotlight
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroEl.style.setProperty('--mouse-x', `${x.toFixed(1)}%`);
      heroEl.style.setProperty('--mouse-y', `${y.toFixed(1)}%`);
    };

    heroEl.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => heroEl.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const handleImageError = () => {
    if (imageSrc === '/images/abdulrehman-cutout.png') {
      // Fallback to original portrait
      setImageSrc('/images/abdulrehman.png');
    } else {
      // If original also fails, mark failed to preserve page layout
      setImageFailed(true);
    }
  };

  return (
    <section ref={heroRef} id="hero" className={styles.heroSection} aria-label="Hero Introduction">
      {/* Slow ambient red breathing glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* Desktop interactive pointer spotlight */}
      <div className={styles.pointerSpotlight} aria-hidden="true" />

      <div className="container">
        <div className={styles.stage}>
          {/* Giant Uppercase "PORTFOLIO" in vivid red Anton stretched across width */}
          <div className={styles.headlineBackdrop} aria-hidden="true">
            <span className={styles.giantPortfolioText}>PORTFOLIO</span>
          </div>

          <div className={styles.heroGrid}>
            {/* Left Editorial Block */}
            <div className={styles.leftBlock}>
              <span className={styles.scriptGreeting}>{HERO_DATA.greeting}</span>
              <h1 className={styles.heroName}>
                <span className={styles.heroNameLine}>{HERO_DATA.firstName}</span>
                <span className={styles.heroNameLine}>{HERO_DATA.lastName}</span>
              </h1>

              <div className={styles.heroSubtitle}>
                <span style={{ color: 'var(--red)' }}>//</span>
                <span>{HERO_DATA.subtitle}</span>
              </div>

              <p className={styles.heroBio}>{HERO_DATA.bio}</p>

              <div className={styles.availabilityBadge}>
                <svg
                  className={styles.globeIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span className={styles.availabilityText}>{HERO_DATA.availability}</span>
              </div>

              {/* Two Hero Action Buttons */}
              <div className={styles.heroButtons}>
                <a href="#projects" className={styles.btnPrimary}>
                  VIEW MY WORK →
                </a>
                <a href="#contact" className={styles.btnSecondary}>
                  LET&apos;S TALK
                </a>
              </div>
            </div>

            {/* Overlapping Portrait Layer */}
            {!imageFailed && (
              <div className={styles.portraitWrapper}>
                <div className={styles.portraitContainer}>
                  <Image
                    src={imageSrc}
                    alt="Abdulrehman Khalid — Web Designer & Digital Creator portrait"
                    width={764}
                    height={1024}
                    priority
                    className={styles.portraitImage}
                    onError={handleImageError}
                  />
                </div>
              </div>
            )}

            {/* Right Column: Statement & Stats Stack */}
            <div className={styles.rightBlock}>
              <div className={styles.statementBox}>
                <svg
                  className={styles.sparkleIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
                <p className={styles.statementText}>{HERO_DATA.statement}</p>
              </div>

              {/* Verified True Stats Row (From data file) */}
              <div className={styles.statsStack}>
                {HERO_DATA.stats.map((stat, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <span className={styles.statValue}>
                      {stat.value.includes('AR') ? stat.value : `${stat.value}+`}
                    </span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
