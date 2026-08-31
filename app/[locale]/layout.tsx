import type { Metadata } from 'next';
import { Pinyon_Script } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isLocale, type Locale } from '@/lib/i18n';
import '../globals.css';

const pinyon = Pinyon_Script({
  variable: '--font-pinyon',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
);

const descriptions: Record<Locale, string> = {
  en: 'Edna is a Social & Jazz Club in Helsinki, bringing people together for live jazz, conversation and beautiful evenings.',
  fi: 'Edna on helsinkiläinen Social & Jazz Club, joka kokoaa ihmiset yhteen elävän jazzin, keskustelujen ja kauniiden iltojen äärelle.',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fi' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: candidate } = await params;
  const locale = isLocale(candidate) ? candidate : 'en';

  return {
    metadataBase: siteUrl,
    title: 'Edna Social & Jazz Club | Helsinki',
    description: descriptions[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fi: '/fi',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_GB',
      alternateLocale: locale === 'fi' ? ['en_GB'] : ['fi_FI'],
      title: 'Edna Social & Jazz Club | Helsinki',
      description: descriptions[locale],
      url: `/${locale}`,
      siteName: 'Edna Social & Jazz Club',
    },
    icons: {
      icon: '/edna-emblem.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body className={pinyon.variable}>{children}</body>
    </html>
  );
}
