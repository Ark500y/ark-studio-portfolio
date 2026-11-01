'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SelectedProjects.module.css';
import { PROJECTS, PROJECTS_HEADER } from '@/data/projects';

export default function SelectedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolledIn, setHasScrolledIn] = useState(false);

  useEffect(() => {
    // If IntersectionObserver is not supported, do nothing (content is already visible)
    if (!('IntersectionObserver' in window)) {
      setHasScrolledIn(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIn(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={styles.projectsSection}
      aria-label="Selected Projects Gallery"
    >
      <div className="container">
        {/* Section Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.headingGroup}>
            <span className={styles.sectionLabel}>{PROJECTS_HEADER.label}</span>
            <h2 className={styles.sectionTitle}>{PROJECTS_HEADER.title}</h2>
          </div>

          <Link href={PROJECTS_HEADER.viewAllHref} className={styles.viewAllLink}>
            <span>{PROJECTS_HEADER.viewAllText}</span>
            <svg
              className={styles.arrowIcon}
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
          </Link>
        </div>

        {/* 3-Column Responsive Projects Grid */}
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, index) => {
            const hasLiveUrl = Boolean(project.liveUrl);
            const CardWrapper = hasLiveUrl ? 'a' : 'div';
            const linkProps = hasLiveUrl
              ? {
                  href: project.liveUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `View live project: ${project.title}`,
                }
              : {};

            const isTopRow = index < 3;
            const colSpanClass = isTopRow ? styles.cardCol3 : styles.cardCol2;

            return (
              <CardWrapper
                key={project.id}
                {...linkProps}
                className={`${styles.projectCard} ${colSpanClass} ${
                  hasLiveUrl ? styles.cardInteractive : styles.cardStatic
                } ${styles.revealItem} ${hasScrolledIn ? styles.revealActive : ''}`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
                aria-label={hasLiveUrl ? `View live site: ${project.title}` : `${project.title} — Case study coming soon`}
              >
                {/* Screenshot Frame with 16:10 Ratio & Hover Zoom */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    fill
                    sizes={isTopRow ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"}
                    loading="lazy"
                    className={styles.projectImage}
                  />

                  {/* Status Indicator Pill */}
                  {hasLiveUrl ? (
                    <div className={styles.liveBadge}>
                      <span className={styles.liveDot} aria-hidden="true" />
                      <span>LIVE SITE</span>
                    </div>
                  ) : (
                    <div className={styles.liveBadge} style={{ borderColor: 'var(--red-deep)' }}>
                      <span className={styles.pendingDot} aria-hidden="true" />
                      <span>CASE STUDY COMING SOON</span>
                    </div>
                  )}
                </div>

                {/* Metadata & Description */}
                <div className={styles.cardBody}>
                  <div className={styles.metaHeader}>
                    <span className={styles.projectNumber}>{project.number}</span>
                    <div className={styles.titleArea}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <span className={styles.projectCategory}>{project.category}</span>
                    </div>
                    {hasLiveUrl && (
                      <svg
                        className={styles.cardArrow}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    )}
                  </div>

                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
