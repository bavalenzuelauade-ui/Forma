import { locales } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';
import { LocaleProvider } from '@/i18n/context';
import { CartProvider } from '@/components/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Specializations from '@/components/Specializations';
import AboutUs from '@/components/AboutUs';
import Process from '@/components/Process';
import Diagnostic from '@/components/Diagnostic';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CartBar from '@/components/CartBar';
import WhatsAppButton from '@/components/WhatsAppButton';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale as Locale) ?? 'es';
  const dict = getDictionary(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Forma Studio',
    url: 'https://formaarg.netlify.app',
    description: dict.meta.description,
    foundingLocation: {
      '@type': 'Place',
      name: 'Argentina',
    },
    knowsAbout: [
      'Branding',
      'Web Development',
      'App Development',
      'Automation',
      'Cybersecurity',
      'Digital Products',
    ],
  };

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <CartProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>
          <Hero />
          <Specializations />
          <AboutUs />
          <Process />
          <Diagnostic />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <CartBar />
        <WhatsAppButton />
      </CartProvider>
    </LocaleProvider>
  );
}
