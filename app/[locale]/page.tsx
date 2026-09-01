/* oxlint-disable next/no-img-element */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import {
  isLocale,
  localizedPath,
  metadataCopy,
  siteCopy,
  type Locale,
} from '@/lib/i18n';

const membershipUrl = 'https://form.typeform.com/to/HGyOvaZW';
const siteUrl = 'https://edna-social-jazz-club.helminondita.chatgpt.site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: candidate } = await params;
  const locale: Locale = isLocale(candidate) ? candidate : 'en';
  const metadata = metadataCopy[locale].home;

  return {
    metadataBase: new URL(siteUrl),
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedPath(locale, 'home'),
      languages: {
        en: localizedPath('en', 'home'),
        fi: localizedPath('fi', 'home'),
        'x-default': localizedPath('en', 'home'),
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_GB',
      alternateLocale: locale === 'fi' ? ['en_GB'] : ['fi_FI'],
      title: metadata.title,
      description: metadata.description,
      url: localizedPath(locale, 'home'),
      siteName: 'Edna Social Club',
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: candidate } = await params;
  if (!isLocale(candidate)) notFound();

  const locale: Locale = candidate;
  const copy = siteCopy[locale];

  return (
    <SiteShell locale={locale}>
      <main id="top">
        <section className="home-hero">
          <div className="home-hero__content reveal">
            <img
              className="home-hero__emblem"
              src="/edna-emblem.png"
              alt={copy.emblemAlt}
              width="1254"
              height="1254"
            />
            <h1>{copy.pages.home.title}</h1>
            <p>{copy.pages.home.eyebrow}</p>
            <a
              className="button button--wine"
              href={membershipUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.nav.apply}
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
