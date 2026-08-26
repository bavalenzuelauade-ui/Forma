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
  return { title: `${dict.terms.title} — Forma Studio` };
}

export default async function TerminosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale as Locale) ?? 'es';
  const dict = getDictionary(locale);

  return (
    <LegalPage
      title={dict.terms.title}
      intro={dict.terms.intro}
      sections={dict.terms.sections}
      locale={locale}
    />
  );
}
