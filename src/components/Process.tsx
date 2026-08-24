'use client';

import styles from './Process.module.css';
import ScrollReveal from './ScrollReveal';

const STEPS = [
  'Entendemos tu negocio y objetivos',
  'Estrategia y propuesta creativa',
  'Diseno iterativo con feedback constante',
  'Desarrollo y testing riguroso',
  'Lanzamiento y soporte continuo',
  'Metricas y optimizacion post-launch',
];

export default function Process() {
  return (
    <ScrollReveal as="section" className={styles.section}>
      <div className={styles.label} id="proceso">Como trabajamos</div>
      <ul className={styles.list}>
        {STEPS.map((step, i) => (
          <li key={i}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
