'use client';

import { useLocale } from '@/i18n/context';
import styles from './Showcase.module.css';
import ScrollReveal from './ScrollReveal';

function BrowserFrame({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <div className={styles.dots}>
          <span /><span /><span />
        </div>
        <div className={styles.urlBar}>{url}</div>
      </div>
      <div className={styles.browserBody}>
        {children}
      </div>
    </div>
  );
}

function Immersive3D() {
  return (
    <BrowserFrame url="showroom.dev">
      <div className={styles.mock3d}>
        <div className={styles.mock3dOrb1} />
        <div className={styles.mock3dOrb2} />
        <div className={styles.mock3dNav}>
          <span className={styles.mock3dLogo} />
          <div className={styles.mock3dLinks}><span /><span /><span /></div>
        </div>
        <div className={styles.mock3dContent}>
          <div className={styles.mock3dTag} />
          <div className={styles.mock3dTitle} />
          <div className={styles.mock3dSub} />
          <div className={styles.mock3dBtn} />
        </div>
      </div>
    </BrowserFrame>
  );
}

function MinimalPortfolio() {
  return (
    <BrowserFrame url="portfolio.design">
      <div className={styles.mockMinimal}>
        <div className={styles.mockMinNav}>
          <span className={styles.mockMinLogo} />
          <div className={styles.mockMinLinks}><span /><span /><span /></div>
        </div>
        <div className={styles.mockMinHero}>
          <div className={styles.mockMinName} />
          <div className={styles.mockMinRole} />
        </div>
        <div className={styles.mockMinGrid}>
          <div className={styles.mockMinCard} />
          <div className={styles.mockMinCard} />
          <div className={styles.mockMinCard} />
        </div>
      </div>
    </BrowserFrame>
  );
}

function ProductLanding() {
  return (
    <BrowserFrame url="startup.app">
      <div className={styles.mockLanding}>
        <div className={styles.mockLandNav}>
          <span className={styles.mockLandLogo} />
          <div className={styles.mockLandCta} />
        </div>
        <div className={styles.mockLandHero}>
          <div className={styles.mockLandLeft}>
            <div className={styles.mockLandPill} />
            <div className={styles.mockLandH1} />
            <div className={styles.mockLandH1b} />
            <div className={styles.mockLandDesc} />
            <div className={styles.mockLandBtns}>
              <div className={styles.mockLandBtnP} />
              <div className={styles.mockLandBtnS} />
            </div>
          </div>
          <div className={styles.mockLandRight}>
            <div className={styles.mockLandPhone} />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function DashboardApp() {
  return (
    <BrowserFrame url="dashboard.saas">
      <div className={styles.mockDash}>
        <div className={styles.mockDashSide}>
          <div className={styles.mockDashSideLogo} />
          <div className={styles.mockDashSideItems}>
            <span className={styles.active} /><span /><span /><span /><span />
          </div>
        </div>
        <div className={styles.mockDashMain}>
          <div className={styles.mockDashTopbar}>
            <div className={styles.mockDashSearch} />
            <div className={styles.mockDashAvatar} />
          </div>
          <div className={styles.mockDashCards}>
            <div className={styles.mockDashCard} />
            <div className={styles.mockDashCard} />
            <div className={styles.mockDashCard} />
          </div>
          <div className={styles.mockDashChart} />
        </div>
      </div>
    </BrowserFrame>
  );
}

const MOCKS = [
  { key: 'immersive', Component: Immersive3D },
  { key: 'minimal', Component: MinimalPortfolio },
  { key: 'landing', Component: ProductLanding },
  { key: 'dashboard', Component: DashboardApp },
] as const;

export default function Showcase() {
  const { dict } = useLocale();
  const { showcase: s } = dict;

  return (
    <section id="trabajos" className={styles.section}>
      <ScrollReveal className={styles.header}>
        <h2 className={styles.title}>{s.titlePre}<em>{s.titleEm}</em></h2>
        <p className={styles.desc}>{s.desc}</p>
      </ScrollReveal>
      <div className={styles.grid}>
        {MOCKS.map(({ key, Component }, i) => (
          <ScrollReveal key={key} className={styles.item}>
            <Component />
            <div className={styles.itemLabel}>
              <h3>{s.items[i].title}</h3>
              <p>{s.items[i].desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
