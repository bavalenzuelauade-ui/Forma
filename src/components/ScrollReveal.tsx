'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
}

export default function ScrollReveal({ children, className, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'server' | 'hidden' | 'visible'>('server');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      setState('visible');
      return;
    }

    setState('hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: '50px 0px' }
    );
    observer.observe(el);

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 50) {
        setState('visible');
        window.removeEventListener('scroll', onScroll);
        observer.disconnect();
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const stateClass = state === 'hidden' ? 'scroll-reveal-hidden' : state === 'visible' ? 'scroll-reveal-visible' : '';

  return (
    <Tag ref={ref as any} className={`${stateClass} ${className || ''}`}>
      {children}
    </Tag>
  );
}
