import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isLocale } from '@/lib/i18n';
import { siteUrl } from '@/lib/site';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
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
