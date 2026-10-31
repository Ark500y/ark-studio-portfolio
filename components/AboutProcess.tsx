import styles from './AboutProcess.module.css';
import { ABOUT_DATA, SKILLS } from '@/data/skills';
import { WORK_PROCESS_HEADER, WORK_PROCESS_STEPS, QUOTE_PANEL } from '@/data/process';

export default function AboutProcess() {
  const renderStepIcon = (iconType: string) => {
    switch (iconType) {
      case 'search':
        return (
          <svg className={styles.nodeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        );
      case 'compass':
        return (
          <svg className={styles.nodeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
      case 'pencil':
        return (
          <svg className={styles.nodeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        );
      case 'code':
        return (
          <svg className={styles.nodeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'send':
        return (
          <svg className={styles.nodeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className={styles.editorialSection} aria-label="About, Skills and Process">
      <div className="container">
        <div className={styles.sectionGrid}>
          {/* ==========================================================
              PART 1: ABOUT & EXPERTISE (LEFT COLUMN)
              ========================================================== */}
          <div className={styles.aboutColumn}>
            <div className={styles.columnHeader}>
              <span className={styles.colLabel}>{ABOUT_DATA.label}</span>
              <h2 className={styles.colTitle}>{ABOUT_DATA.heading}</h2>
            </div>

            <div className={styles.bioWrapper}>
              {ABOUT_DATA.bioParagraphs.map((para, i) => (
                <p key={i} className={styles.bioText}>
                  {para}
                </p>
              ))}
            </div>

            <div className={styles.skillsHeader}>
              <span className={styles.skillsLabel}>CORE SKILLS &amp; TECHNOLOGIES</span>
            </div>

            <div className={styles.skillsTagCloud}>
              {SKILLS.map((skill, idx) => (
                <span key={idx} className={styles.skillPill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ==========================================================
              PART 2: WORK PROCESS (CENTER COLUMN)
              ========================================================== */}
          <div className={styles.processColumn}>
            <div className={styles.columnHeader}>
              <span className={styles.colLabel}>{WORK_PROCESS_HEADER.label}</span>
              <h2 className={styles.colTitle}>{WORK_PROCESS_HEADER.title}</h2>
            </div>

            <div className={styles.timeline}>
              {WORK_PROCESS_STEPS.map((step) => (
                <div key={step.number} className={styles.stepItem}>
                  <div className={styles.nodeCircle} aria-hidden="true">
                    {renderStepIcon(step.icon)}
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepHeading}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                    </div>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==========================================================
              PART 3: CRIMSON QUOTE PANEL (RIGHT COLUMN)
              ========================================================== */}
          <div className={styles.quoteColumn}>
            <div className={styles.quoteCard}>
              <div>
                <div className={styles.quoteSymbol} aria-hidden="true">
                  “
                </div>
                <blockquote className={styles.quoteText}>
                  {QUOTE_PANEL.quote}
                </blockquote>
              </div>

              <div className={styles.quoteFooter}>
                <div className={styles.attributionSignature}>
                  <span className={styles.signatureScript}>{QUOTE_PANEL.attribution}</span>
                  <span className={styles.attributionRole}>• Digital Design Studio</span>
                </div>

                <div className={styles.quoteSubline}>
                  <span className={styles.sublinePlus}>+</span>
                  <span>{QUOTE_PANEL.subline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
