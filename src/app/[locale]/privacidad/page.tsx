import { locales } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';
import LegalPage from '@/components/LegalPage';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return { title: `${dict.privacy.title} — Forma Studio` };
}

export default async function PrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale as Locale) ?? 'es';
  const dict = getDictionary(locale);

  return (
    <LegalPage
      title={dict.privacy.title}
      intro={dict.privacy.intro}
      sections={dict.privacy.sections}
      locale={locale}
    />
  );
}
