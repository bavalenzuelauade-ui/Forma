'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useLocale } from '@/i18n/context';
import styles from './Specializations.module.css';
import ScrollReveal from './ScrollReveal';
import BrandingVisual from './visuals/BrandingVisual';
import AutomationVisual from './visuals/AutomationVisual';
import CyberVisual from './visuals/CyberVisual';
import ProductVisual from './visuals/ProductVisual';
import SubMockup, { DETAIL_KEYS } from './visuals/SubMockups';

const COLORS = ['gold', 'blue', 'green', 'purple'];
const REVERSES = [false, true, false, true];

function StepVisualContent({ color, inView }: { color: string; inView: boolean }) {
  switch (color) {
    case 'gold': return <BrandingVisual />;
    case 'blue': return <AutomationVisual />;
    case 'green': return <CyberVisual inView={inView} />;
    case 'purple': return <ProductVisual inView={inView} />;
    default: return null;
  }
}

function Step({ stepData, color, reverse, expanded, onToggle, stepIndex }: {
  stepData: { num: string; title: string; desc: string; tags: string[]; details: { title: string; desc: string }[] };
  color: string;
  reverse: boolean;
  expanded: boolean;
  onToggle: () => void;
  stepIndex: number;
}) {
  const ref = useRef(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const inView = useInView(ref, { once: false, amount: 0.1 });
  const colorClass = styles[color as keyof typeof styles] || '';

  useEffect(() => {
    if (expanded && panelRef.current) {
      setHeight(panelRef.current.scrollHeight);
    }
  }, [expanded]);

  return (
    <ScrollReveal
      className={`${styles.step} ${reverse ? styles.stepReverse : ''} ${colorClass} ${expanded ? styles.stepExpanded : ''}`}
    >
      <div className={styles.stepMain} onClick={onToggle} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}>
        <div className={styles.stepText} ref={ref}>
          <div className={styles.stepNum}>{stepData.num}</div>
          <div className={styles.stepTitle}>
            {stepData.title}
            <span className={`${styles.expandIcon} ${expanded ? styles.expandIconOpen : ''}`} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
          <div className={styles.stepDesc}>{stepData.desc}</div>
        </div>
        <div className={styles.stepVisual}>
          <StepVisualContent color={color} inView={inView} />
        </div>
      </div>
      <div
        className={`${styles.expandWrapper} ${expanded ? styles.expandWrapperOpen : ''}`}
        style={{ maxHeight: expanded ? height : 0 }}
      >
        <div className={styles.expandPanel} ref={panelRef}>
          <div className={styles.expandContent}>
            {stepData.details.map((detail, di) => (
              <div
                key={detail.title}
                className={`${styles.subItem} ${expanded ? styles.subItemVisible : ''}`}
                style={{ transitionDelay: expanded ? `${di * 80 + 150}ms` : '0ms' }}
              >
                <div className={styles.subMockup}>
                  <SubMockup mockupKey={DETAIL_KEYS[stepIndex]?.[di] || ''} />
                </div>
                <div className={styles.subText}>
                  <span className={styles.subTitle}>{detail.title}</span>
                  <span className={styles.subDesc}>{detail.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Specializations() {
  const { dict } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(i: number) {
    setOpenIndex(prev => prev === i ? null : i);
  }

  return (
    <section id="servicios" className={styles.section}>
      <ScrollReveal className={styles.header}>
        <h2 className={styles.headerTitle}>{dict.specializations.titlePre}<em>{dict.specializations.titleEm}</em></h2>
        <p className={styles.headerDesc}>
          {dict.specializations.desc}
        </p>
      </ScrollReveal>

      {dict.specializations.steps.map((step, i) => (
        <Step
          key={step.num}
          stepData={step}
          color={COLORS[i]}
          reverse={REVERSES[i]}
          expanded={openIndex === i}
          onToggle={() => handleToggle(i)}
          stepIndex={i}
        />
      ))}
    </section>
  );
}
