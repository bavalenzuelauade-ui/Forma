'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './Specializations.module.css';
import ScrollReveal from './ScrollReveal';
import BrandingVisual from './visuals/BrandingVisual';
import AutomationVisual from './visuals/AutomationVisual';
import CyberVisual from './visuals/CyberVisual';
import ProductVisual from './visuals/ProductVisual';

interface StepData {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  reverse: boolean;
}

const STEPS: StepData[] = [
  {
    num: '01',
    title: 'Branding + Web + App',
    desc: 'Desde la identidad visual hasta la experiencia digital completa. Creamos marcas que la gente recuerda y plataformas donde interactuan.',
    tags: ['Product branding', 'App design', 'Landing', 'Marca desde cero'],
    color: 'gold',
    reverse: false,
  },
  {
    num: '02',
    title: 'Automatizacion',
    desc: 'Conectamos tus herramientas para que los procesos corran solos. Chatbots inteligentes, workflows y flujos que eliminan el trabajo repetitivo.',
    tags: ['Chatbots + WhatsApp', 'Workflows'],
    color: 'blue',
    reverse: true,
  },
  {
    num: '03',
    title: 'Ciberseguridad',
    desc: 'Protegemos lo que construiste. Auditorias, pentesting y hardening de infraestructura para que tu negocio este blindado.',
    tags: ['Auditoria + pentesting', 'Infraestructura segura'],
    color: 'green',
    reverse: false,
  },
  {
    num: '04',
    title: 'Producto digital',
    desc: 'Dashboards, CRMs y plataformas SaaS a medida. Productos digitales que escalan con tu negocio y tus usuarios.',
    tags: ['CRM + dashboard', 'Plataforma SaaS'],
    color: 'purple',
    reverse: true,
  },
];

function StepVisualContent({ color, inView }: { color: string; inView: boolean }) {
  switch (color) {
    case 'gold': return <BrandingVisual />;
    case 'blue': return <AutomationVisual />;
    case 'green': return <CyberVisual inView={inView} />;
    case 'purple': return <ProductVisual inView={inView} />;
    default: return null;
  }
}

function Step({ step }: { step: StepData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });
  const colorClass = styles[step.color as keyof typeof styles] || '';

  return (
    <ScrollReveal
      className={`${styles.step} ${step.reverse ? styles.stepReverse : ''} ${colorClass}`}
    >
      <div className={styles.stepText} ref={ref}>
        <div className={styles.stepNum}>{step.num}</div>
        <div className={styles.stepTitle}>{step.title}</div>
        <div className={styles.stepDesc}>{step.desc}</div>
        <div className={styles.stepTags}>
          {step.tags.map((tag) => (
            <span key={tag} className={styles.stepTag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.stepVisual}>
        <StepVisualContent color={step.color} inView={inView} />
      </div>
    </ScrollReveal>
  );
}

export default function Specializations() {
  return (
    <section id="servicios" className={styles.section}>
      <ScrollReveal className={styles.header}>
        <h2 className={styles.headerTitle}>Lo que <em>hacemos</em></h2>
        <p className={styles.headerDesc}>
          Cuatro especialidades con las que transformamos ideas en productos reales.
        </p>
      </ScrollReveal>

      {STEPS.map((step) => (
        <Step key={step.num} step={step} />
      ))}
    </section>
  );
}
