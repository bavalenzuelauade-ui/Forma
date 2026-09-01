'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function detectLocale(): string {
  if (typeof navigator === 'undefined') return 'es';
  const lang = navigator.language?.toLowerCase() ?? '';
  if (lang.startsWith('en')) return 'en';
  return 'es';
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return null;
}
