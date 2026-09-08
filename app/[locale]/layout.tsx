import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { isLocale } from '@/lib/i18n';
import '../globals.css';

export const metadata: Metadata = {
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
