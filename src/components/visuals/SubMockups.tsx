import React from 'react';
import styles from './SubMockups.module.css';

function BrandingMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.brandCard}>
        <div className={styles.brandLogo} />
        <div className={styles.brandColors}>
          <span /><span /><span /><span />
        </div>
      </div>
      <div className={styles.brandFloat}>Aa</div>
    </div>
  );
}

function AppMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.phoneMini}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneScroll}>
          <div className={styles.phoneBar} />
          <div className={styles.phoneCardA} />
          <div className={styles.phoneCardA} />
          <div className={styles.phoneBar} />
        </div>
      </div>
    </div>
  );
}

function LandingMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.browserMini}>
        <div className={styles.bBar}>
          <span /><span /><span />
        </div>
        <div className={styles.bBody}>
          <div className={styles.bHero} />
          <div className={styles.bCols}><div /><div /><div /></div>
          <div className={styles.bCta} />
        </div>
      </div>
    </div>
  );
}

function BrandZeroMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.zeroStack}>
        <div className={styles.zeroItem}>
          <div className={styles.zeroDot} />
        </div>
        <div className={styles.zeroItem}>
          <div className={styles.zeroLines}><div /><div /></div>
        </div>
      </div>
      <div className={styles.zeroFloat}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
      </div>
    </div>
  );
}

function ChatbotMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.chatBox}>
        <div className={`${styles.bubble} ${styles.bubbleIn}`} />
        <div className={`${styles.bubble} ${styles.bubbleOut}`} />
        <div className={`${styles.bubble} ${styles.bubbleIn} ${styles.bubbleShort}`} />
      </div>
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.flowRow}>
        <div className={styles.flowBox} />
        <div className={styles.flowLine} />
        <div className={styles.flowBox} />
        <div className={styles.flowLine} />
        <div className={styles.flowBox} />
      </div>
    </div>
  );
}

function PentestMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.termWin}>
        <div className={styles.termTop}><span /><span /><span /></div>
        <div className={styles.termBody}>
          <div className={styles.tLine} />
          <div className={`${styles.tLine} ${styles.tGreen}`} />
          <div className={styles.tLine} />
          <div className={`${styles.tLine} ${styles.tRed}`} />
          <div className={styles.tCursor} />
        </div>
      </div>
    </div>
  );
}

function InfraMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.infraGroup}>
        <div className={styles.shield}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        </div>
        <div className={styles.infraNodes}>
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.dashWin}>
        <div className={styles.dashSide}>
          <div /><div /><div />
        </div>
        <div className={styles.dashBody}>
          <div className={styles.dashKpis}><span /><span /><span /></div>
          <div className={styles.dashGraph} />
        </div>
      </div>
    </div>
  );
}

function SaasMockup() {
  return (
    <div className={styles.scene}>
      <div className={styles.saasWin}>
        <div className={styles.saasTop} />
        <div className={styles.saasRows}>
          <div className={styles.saasRow} />
          <div className={styles.saasRow} />
          <div className={styles.saasRow} />
        </div>
      </div>
    </div>
  );
}

const MOCKUP_MAP: Record<string, () => React.ReactElement> = {
  'product-branding': BrandingMockup,
  'app-design': AppMockup,
  'landing': LandingMockup,
  'brand-zero': BrandZeroMockup,
  'chatbot': ChatbotMockup,
  'workflow': WorkflowMockup,
  'pentest': PentestMockup,
  'infra': InfraMockup,
  'dashboard': DashboardMockup,
  'saas': SaasMockup,
};

export const DETAIL_KEYS = [
  ['product-branding', 'app-design', 'landing', 'brand-zero'],
  ['chatbot', 'workflow'],
  ['pentest', 'infra'],
  ['dashboard', 'saas'],
];

export default function SubMockup({ mockupKey }: { mockupKey: string }) {
  const Component = MOCKUP_MAP[mockupKey];
  if (!Component) return null;
  return <Component />;
}
