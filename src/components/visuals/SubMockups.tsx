import React from 'react';
import styles from './SubMockups.module.css';

function BrandingMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.brandSheet}>
        <div className={styles.brandLogo} />
        <div className={styles.brandColors}>
          <span /><span /><span /><span />
        </div>
        <div className={styles.brandType}>
          <div className={styles.brandTypeL} />
          <div className={styles.brandTypeS} />
        </div>
      </div>
    </div>
  );
}

function AppMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.phone}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneHeader} />
        <div className={styles.phoneCards}>
          <div className={styles.phoneCard} />
          <div className={styles.phoneCard} />
        </div>
        <div className={styles.phoneNav}>
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}

function LandingMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <span /><span /><span />
        </div>
        <div className={styles.browserContent}>
          <div className={styles.landingHero} />
          <div className={styles.landingCols}>
            <div /><div /><div />
          </div>
          <div className={styles.landingCta} />
        </div>
      </div>
    </div>
  );
}

function BrandZeroMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.brandZero}>
        <div className={styles.bzCard}>
          <div className={styles.bzLogo} />
        </div>
        <div className={styles.bzCard}>
          <div className={styles.bzLines}>
            <div /><div /><div />
          </div>
        </div>
        <div className={styles.bzCard}>
          <div className={styles.bzPalette}>
            <span /><span />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatbotMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.chat}>
        <div className={`${styles.chatBubble} ${styles.chatIn}`} />
        <div className={`${styles.chatBubble} ${styles.chatOut}`} />
        <div className={`${styles.chatBubble} ${styles.chatIn} ${styles.chatShort}`} />
        <div className={styles.chatInput} />
      </div>
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.flow}>
        <div className={styles.flowNode} />
        <div className={styles.flowArrow} />
        <div className={styles.flowNode} />
        <div className={styles.flowArrow} />
        <div className={styles.flowNode} />
      </div>
    </div>
  );
}

function PentestMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.terminal}>
        <div className={styles.termBar}>
          <span /><span /><span />
        </div>
        <div className={styles.termLines}>
          <div className={styles.termLine} />
          <div className={`${styles.termLine} ${styles.termGreen}`} />
          <div className={styles.termLine} />
          <div className={`${styles.termLine} ${styles.termRed}`} />
        </div>
      </div>
    </div>
  );
}

function InfraMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.infra}>
        <div className={styles.infraShield}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
    <div className={styles.mockup}>
      <div className={styles.dash}>
        <div className={styles.dashSidebar}>
          <div /><div /><div /><div />
        </div>
        <div className={styles.dashMain}>
          <div className={styles.dashMetrics}>
            <span /><span /><span />
          </div>
          <div className={styles.dashChart} />
        </div>
      </div>
    </div>
  );
}

function SaasMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.saas}>
        <div className={styles.saasNav} />
        <div className={styles.saasContent}>
          <div className={styles.saasTable}>
            <div /><div /><div /><div />
          </div>
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
