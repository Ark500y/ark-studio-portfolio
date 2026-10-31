import Image from 'next/image';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div
      className={styles.loadingContainer}
      role="status"
      aria-live="polite"
      aria-label="Loading ARK STUDIO content"
    >
      {/* Top thin red progress line */}
      <div className={styles.topProgressBar} aria-hidden="true" />

      {/* Center minimal pulsing ARK mark */}
      <div className={styles.centerBox}>
        <div className={styles.glowSphere} aria-hidden="true" />
        <Image
          src="/logo/ark-mark-red-white.svg"
          alt="ARK STUDIO"
          width={48}
          height={34}
          className={styles.logoImage}
          priority
        />
        <div className={styles.loadingLabel}>
          <span className={styles.dot} aria-hidden="true" />
          <span>LOADING // ARK STUDIO</span>
        </div>
      </div>
    </div>
  );
}
