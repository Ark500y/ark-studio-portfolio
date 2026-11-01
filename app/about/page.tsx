import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HERO_DATA } from '@/data/hero';
import { CONTACT } from '@/data/contact';
import { SERVICES, SKILLS, ABOUT_DATA } from '@/data/skills';
import { WORK_PROCESS_STEPS, QUOTE_PANEL } from '@/data/process';
import styles from './page.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ark-studio-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'About Abdulrehman Khalid — ARK STUDIO | Web Designer & Digital Creator',
  description:
    'Discover the design philosophy, technical capabilities, and creative direction of Abdulrehman Khalid (ARK STUDIO). Bespoke digital platforms, bilingual Arabic/English sites, and UI/UX design.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Abdulrehman Khalid — ARK STUDIO | Web Designer & Digital Creator',
    description:
      'Discover the design philosophy, technical capabilities, and creative direction of Abdulrehman Khalid (ARK STUDIO). Bespoke digital platforms, bilingual Arabic/English sites, and UI/UX design.',
    url: `${siteUrl}/about`,
    siteName: 'ARK STUDIO',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ARK STUDIO — About Abdulrehman Khalid',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Abdulrehman Khalid — ARK STUDIO | Web Designer & Digital Creator',
    description:
      'Discover the design philosophy, technical capabilities, and creative direction of Abdulrehman Khalid (ARK STUDIO). Bespoke digital platforms, bilingual Arabic/English sites, and UI/UX design.',
    images: [`${siteUrl}/images/og-image.png`],
  },
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <Header />

      <main id="main-content">
        {/* Page Hero Header */}
        <section className={styles.heroHeader} aria-label="About Page Introduction">
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

            <span className={styles.pageLabel}>// DESIGN PHILOSOPHY &amp; CAPABILITIES</span>
            <h1 className={styles.pageTitle}>ABOUT &amp; EXPERTISE</h1>
            <p className={styles.pageSubtitle}>
              I am Abdulrehman Khalid — an independent web designer and frontend developer creating
              tactile, high-performance digital platforms that turn complex requirements into clear,
              effortless user experiences.
            </p>
          </div>
        </section>

        {/* Verified Stats Row */}
        <section className={styles.statsSection} aria-label="Key Performance Indicators">
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4</span>
                <span className={styles.statLabel}>LIVE CLIENT PLATFORMS</span>
                <span className={styles.statSublabel}>VERIFIED IN PRODUCTION</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>COUNTRIES SERVED</span>
                <span className={styles.statSublabel}>PK / SA / UAE</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>EN / AR</span>
                <span className={styles.statLabel}>BILINGUAL EXPERTISE</span>
                <span className={styles.statSublabel}>BIDIRECTIONAL RTL &amp; LTR</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>BESPOKE CODE</span>
                <span className={styles.statSublabel}>ZERO GENERIC BUILDERS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story & Philosophy */}
        <section className={styles.storySection} aria-label="Founder Story and Philosophy">
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyContent}>
                <div className={styles.storyHeadingGroup}>
                  <span className={styles.sectionSmallLabel}>// THE CRAFT &amp; VISION</span>
                  <h2 className={styles.sectionMainHeading}>BUILT WITH INTENT. ENGINEERED FOR SPEED.</h2>
                </div>

                <p className={styles.storyLead}>
                  Based in Sargodha, Pakistan, I collaborate with businesses and ambitious founders
                  across the Middle East, the Gulf region, and internationally to build digital
                  products that command attention.
                </p>

                <p className={styles.storyBody}>
                  {ABOUT_DATA.bioParagraphs[0]}
                </p>

                <p className={styles.storyBody}>
                  {ABOUT_DATA.bioParagraphs[1]}
                </p>

                <p className={styles.storyBody}>
                  Every interface I construct is treated like an editorial publication: typography is
                  deliberate, layouts breathe with intent, interactions feel tactile, and the
                  underlying codebase is clean, accessible, and optimized for real-world devices.
                </p>
              </div>

              {/* Philosophy Callout Card */}
              <div className={styles.philosophyCard}>
                <h3 className={styles.philosophyTitle}>THE ARK STUDIO STANDARD</h3>
                <ul className={styles.philosophyList}>
                  <li className={styles.philosophyItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>No Generic Templates:</strong> Hand-crafted architectures tailored strictly to brand goals.</span>
                  </li>
                  <li className={styles.philosophyItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>Bilingual Precision:</strong> Flawless typography &amp; layout flow for both Arabic (RTL) and English (LTR).</span>
                  </li>
                  <li className={styles.philosophyItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>Performance First:</strong> Optimized Core Web Vitals, fast initial load, and accessible semantic HTML.</span>
                  </li>
                  <li className={styles.philosophyItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>Direct Collaboration:</strong> You communicate directly with the creator who writes your code.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className={styles.servicesSection} aria-label="Core Services & Disciplines">
          <div className="container">
            <div className={styles.servicesHeader}>
              <span className={styles.sectionSmallLabel}>// WHAT I DELIVER</span>
              <h2 className={styles.sectionMainHeading}>CORE DISCIPLINES &amp; SERVICES</h2>
            </div>

            <div className={styles.servicesGrid}>
              {SERVICES.map((service, idx) => (
                <div key={service.id} className={styles.serviceCard}>
                  <span className={styles.serviceIndex}>0{idx + 1} / SERVICE</span>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14 Core Skills Cloud */}
        <section className={styles.skillsSection} aria-label="Technical Skills & Tools">
          <div className="container">
            <div className={styles.skillsHeader}>
              <span className={styles.sectionSmallLabel}>// ARSENAL &amp; TECH STACK</span>
              <h2 className={styles.sectionMainHeading}>14 CORE SKILLS &amp; TECHNOLOGIES</h2>
            </div>

            <div className={styles.skillsGrid}>
              {SKILLS.map((skill, idx) => (
                <span key={idx} className={styles.skillPill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Process Section */}
        <section className={styles.processSection} aria-label="The 5-Step Work Process">
          <div className="container">
            <div className={styles.processHeader}>
              <span className={styles.sectionSmallLabel}>// METHODOLOGY</span>
              <h2 className={styles.sectionMainHeading}>HOW PROJECTS COME TO LIFE</h2>
            </div>

            <div className={styles.processGrid}>
              {WORK_PROCESS_STEPS.map((step) => (
                <div key={step.number} className={styles.processCard}>
                  <div className={styles.processCardHeader}>
                    <span className={styles.processStepNumber}>{step.number}</span>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.processStepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crimson Quote Banner */}
        <section className={styles.quoteSection} aria-label="Studio Creed">
          <div className="container">
            <div className={styles.quoteBanner}>
              <span className={styles.quoteSymbol} aria-hidden="true">“</span>
              <blockquote className={styles.quoteText}>{QUOTE_PANEL.quote}</blockquote>
              <div className={styles.quoteFooter}>
                <span className={styles.quoteAuthor}>{QUOTE_PANEL.attribution} — DIGITAL DESIGN STUDIO</span>
                <span>{QUOTE_PANEL.subline}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className={styles.ctaSection} aria-label="Get in Touch Call to Action">
          <div className="container">
            <div className={styles.ctaCard}>
              <div className={styles.ctaContent}>
                <span className={styles.sectionSmallLabel}>// START YOUR PROJECT</span>
                <h2 className={styles.ctaTitle}>LET&apos;S CREATE SOMETHING REMARKABLE</h2>
                <p className={styles.ctaDescription}>
                  Whether you need a full custom website, an Arabic/English platform, or a modern
                  redesign, let&apos;s discuss your goals and build something that delivers real results.
                </p>
              </div>

              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>
                  START A PROJECT →
                </Link>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  CHAT ON WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
