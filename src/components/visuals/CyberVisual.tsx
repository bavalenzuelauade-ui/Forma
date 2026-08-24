'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './CyberVisual.module.css';

const LINES = [
  '$ forma-scan --target client.app',
  '[+] Scanning 1,024 ports...',
  '[!] 3 vulnerabilities found',
  '[+] Generating report...',
  '[+] Report saved',
];

const LINE_CLASSES = [
  styles.lineGray,
  styles.lineGreen,
  styles.lineYellow,
  styles.lineGreen,
  styles.lineGreen,
];

export default function CyberVisual({ inView }: { inView: boolean }) {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const runningRef = useRef(false);

  const runTerminal = useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;

    linesRef.current.forEach((el) => {
      if (el) {
        el.textContent = '';
        el.style.opacity = '0';
      }
    });

    function typeLine(i: number) {
      if (i >= LINES.length) {
        const last = linesRef.current[LINES.length - 1];
        if (last) {
          const cursor = document.createElement('span');
          cursor.className = styles.cursor;
          last.appendChild(cursor);
        }
        setTimeout(() => { runningRef.current = false; }, 5000);
        return;
      }

      const el = linesRef.current[i];
      if (!el) return;
      el.style.opacity = '1';
      const text = LINES[i];
      let ci = 0;
      const iv = setInterval(() => {
        ci++;
        el.textContent = text.substring(0, ci);
        if (ci >= text.length) {
          clearInterval(iv);
          setTimeout(() => typeLine(i + 1), 350);
        }
      }, 22);
    }

    typeLine(0);
  }, []);

  useEffect(() => {
    if (inView) runTerminal();
  }, [inView, runTerminal]);

  return (
    <>
      <div className={styles.terminal}>
        <div className={styles.dots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        {LINES.map((_, i) => (
          <div
            key={i}
            ref={(el) => { linesRef.current[i] = el; }}
            className={`${styles.line} ${LINE_CLASSES[i]}`}
            style={{ opacity: 0 }}
          />
        ))}
      </div>

      <div className={styles.shield}>
        <div className={styles.shieldInner}>
          <div className={`${styles.ring} ${styles.ring2}`} />
          <div className={`${styles.ring} ${styles.ring1}`} />
          <div className={styles.shieldShape}>
            <span className={styles.shieldCheck}>&#10003;</span>
          </div>
        </div>
      </div>
    </>
  );
}
