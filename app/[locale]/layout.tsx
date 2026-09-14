import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isLocale } from '@/lib/i18n';
import { siteUrl } from '@/lib/site';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/edna-emblem.png',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fi' }];
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
      <body>{children}</body>
    </html>
  );
}
