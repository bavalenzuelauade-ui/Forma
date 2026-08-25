'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLocale } from '@/i18n/context';
import styles from './Specializations.module.css';
import ScrollReveal from './ScrollReveal';
import BrandingVisual from './visuals/BrandingVisual';
import AutomationVisual from './visuals/AutomationVisual';
import CyberVisual from './visuals/CyberVisual';
import ProductVisual from './visuals/ProductVisual';

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

function Step({ stepData, color, reverse }: { stepData: { num: string; title: string; desc: string; tags: string[] }; color: string; reverse: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });
  const colorClass = styles[color as keyof typeof styles] || '';

  return (
    <ScrollReveal
      className={`${styles.step} ${reverse ? styles.stepReverse : ''} ${colorClass}`}
    >
      <div className={styles.stepText} ref={ref}>
        <div className={styles.stepNum}>{stepData.num}</div>
        <div className={styles.stepTitle}>{stepData.title}</div>
        <div className={styles.stepDesc}>{stepData.desc}</div>
        <div className={styles.stepTags}>
          {stepData.tags.map((tag) => (
            <span key={tag} className={styles.stepTag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.stepVisual}>
        <StepVisualContent color={color} inView={inView} />
      </div>
    </ScrollReveal>
  );
}

export default function Specializations() {
  const { dict } = useLocale();

  return (
    <section id="servicios" className={styles.section}>
      <ScrollReveal className={styles.header}>
        <h2 className={styles.headerTitle}>{dict.specializations.titlePre}<em>{dict.specializations.titleEm}</em></h2>
        <p className={styles.headerDesc}>
          {dict.specializations.desc}
        </p>
      </ScrollReveal>

      {dict.specializations.steps.map((step, i) => (
        <Step key={step.num} stepData={step} color={COLORS[i]} reverse={REVERSES[i]} />
      ))}
    </section>
  );
}
