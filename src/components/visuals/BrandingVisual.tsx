import styles from './BrandingVisual.module.css';

export default function BrandingVisual() {
  return (
    <>
      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.scroll}>
            <div className={styles.logoDot} />
            <div className={`${styles.bar} ${styles.barGold}`} />
            <div className={`${styles.bar} ${styles.barShort}`} />
            <div className={styles.cardSm} />
            <div className={styles.cardSm} />
            <div className={styles.bar} />
            <div className={`${styles.bar} ${styles.barShort}`} />
            <div className={styles.cardSm} />
            <div className={styles.ctaSm} />
          </div>
        </div>
      </div>

      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <span className={styles.browserDot} />
          <span className={styles.browserDot} />
          <span className={styles.browserDot} />
          <div className={styles.urlBar} />
        </div>
        <div className={styles.browserBody}>
          <div className={`${styles.col} ${styles.colWide}`}>
            <div className={styles.colHero} />
            <div className={styles.colCta} />
          </div>
          <div className={styles.col}>
            <div className={styles.colBar} />
            <div className={styles.colBar} />
            <div className={styles.colBar} style={{ width: '60%' }} />
          </div>
        </div>
        <div className={styles.cursor}>
          <svg width="14" height="14" viewBox="0 0 16 16">
            <path d="M3 1l10 7-5 1-2 5z" fill="#1a1a1a" stroke="#fff" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      <div className={styles.floatCard}>
        <div className={styles.floatInner}>
          <div className={styles.floatDot} />
          Brand kit ready
        </div>
      </div>
    </>
  );
}
