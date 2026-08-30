import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forma Studio — Digital Brand Studio',
  description: 'Strategy, branding, and technology for startups looking to stand out in LATAM.',
  metadataBase: new URL('https://formaarg.netlify.app'),
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Forma Studio — Digital Brand Studio',
    description: 'Strategy, branding, and technology for startups looking to stand out in LATAM.',
    url: 'https://formaarg.netlify.app',
    siteName: 'Forma Studio',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['en_US', 'it_IT'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Forma Studio — Estrategia, branding y tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forma Studio — Digital Brand Studio',
    description: 'Strategy, branding, and technology for startups looking to stand out in LATAM.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://formaarg.netlify.app',
    languages: {
      es: 'https://formaarg.netlify.app/es',
      en: 'https://formaarg.netlify.app/en',
      it: 'https://formaarg.netlify.app/it',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
