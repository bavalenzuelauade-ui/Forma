'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './ProductVisual.module.css';

const BAR_HEIGHTS = [35, 52, 42, 68, 82, 56, 90, 74];

function animateCounter(el: HTMLElement, target: number, prefix: string, suffix: string, duration: number) {
  const start = performance.now();
  function frame(now: number) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(target * ease).toLocaleString('es-AR') + suffix;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function animateDecimal(el: HTMLElement, target: number, duration: number) {
  const start = performance.now();
  function frame(now: number) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * ease).toFixed(1) + '%';
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

export default function ProductVisual({ inView }: { inView: boolean }) {
  const dv1 = useRef<HTMLDivElement>(null);
  const dv2 = useRef<HTMLDivElement>(null);
  const dv3 = useRef<HTMLDivElement>(null);
  const fs1 = useRef<HTMLDivElement>(null);
  const fs2 = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const ranRef = useRef(false);

  const runDash = useCallback(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    if (dv1.current) animateCounter(dv1.current, 2400, '', '', 1400);
    if (dv2.current) animateCounter(dv2.current, 18, '$', 'k', 1400);
    if (dv3.current) animateCounter(dv3.current, 94, '', '%', 1400);
    if (fs1.current) animateDecimal(fs1.current, 99.8, 1600);
    if (fs2.current) animateCounter(fs2.current, 1200, '', '', 1600);

    if (barsRef.current) {
      const bars = barsRef.current.children;
      for (let i = 0; i < bars.length; i++) {
        const bar = bars[i] as HTMLElement;
        const h = BAR_HEIGHTS[i];
        setTimeout(() => { bar.style.height = `${h}%`; }, i * 100);
      }
    }
  }, []);

  useEffect(() => {
    if (inView) runDash();
  }, [inView, runDash]);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashBar}>
          <span className={styles.dashDot} />
          <span className={styles.dashDot} />
          <span className={styles.dashDot} />
        </div>
        <div className={styles.dashBody}>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <div className={styles.metricValue} ref={dv1}>0</div>
              <div className={styles.metricLabel}>Users</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue} ref={dv2}>$0</div>
              <div className={styles.metricLabel}>Revenue</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue} ref={dv3}>0%</div>
              <div className={styles.metricLabel}>Retention</div>
            </div>
          </div>
          <div className={styles.chart} ref={barsRef}>
            {BAR_HEIGHTS.map((_, i) => (
              <div key={i} className={styles.chartBar} style={{ height: '2px' }} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.floatingStat} style={{ top: 20, right: 20, animationDelay: '0.5s' }}>
        <div className={styles.statValue} ref={fs1}>0%</div>
        <div className={styles.statLabel}>Uptime</div>
      </div>
      <div className={styles.floatingStat} style={{ bottom: 24, left: 20, animationDelay: '1.5s' }}>
        <div className={styles.statValue} ref={fs2}>0</div>
        <div className={styles.statLabel}>Activos</div>
      </div>
    </>
  );
}
