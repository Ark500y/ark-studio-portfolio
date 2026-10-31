import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PROJECTS, PROJECTS_HEADER } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Selected Projects & Case Studies — ARK STUDIO | Abdulrehman Khalid',
  description:
    'Complete archive of digital experiences, business websites, bilingual English/Arabic platforms, and UI/UX design engineered by Abdulrehman Khalid at ARK STUDIO.',
};

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <Header />

      <main id="main-content">
        {/* Hero Header */}
        <section className={styles.heroHeader} aria-label="Projects Archive Introduction">
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
            <h1 className={styles.pageTitle}>{PROJECTS_HEADER.title}</h1>
            <p className={styles.pageSubtitle}>
              Explore the full portfolio of production websites, bilingual platforms, and digital brand
              identities engineered for speed, editorial elegance, and measurable business growth.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className={styles.gridSection} aria-label="All Selected Projects">
          <div className="container">
            <div className={styles.projectsGrid}>
              {PROJECTS.map((project, idx) => {
                const isTopRow = idx < 3;
                const columnClass = isTopRow ? styles.cardCol3 : styles.cardCol2;
                const isLive = Boolean(project.liveUrl);

                const cardContent = (
                  <>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        fill
                        sizes={
                          isTopRow
                            ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                            : '(max-width: 640px) 100vw, 50vw'
                        }
                        className={styles.projectImage}
                        priority={idx < 2}
                      />
                      <div className={styles.liveBadge}>
                        <span
                          className={isLive ? styles.liveDot : styles.pendingDot}
                          aria-hidden="true"
                        />
                        <span>{isLive ? 'LIVE SITE ↗' : 'COMING SOON'}</span>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.metaHeader}>
                        <span className={styles.projectNumber}>{project.number}</span>
                        <div className={styles.titleArea}>
                          <span className={styles.projectCategory}>{project.category}</span>
                          <h2 className={styles.projectTitle}>{project.title}</h2>
                        </div>
                      </div>
                      <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                  </>
                );

                if (isLive && project.liveUrl) {
                  return (
                    <a
                      key={project.id}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectCard} ${columnClass} ${styles.cardInteractive}`}
                      aria-label={`Open live website for ${project.title}`}
                    >
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <article
                    key={project.id}
                    className={`${styles.projectCard} ${columnClass} ${styles.cardStatic}`}
                    aria-label={`${project.title} project details`}
                  >
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
