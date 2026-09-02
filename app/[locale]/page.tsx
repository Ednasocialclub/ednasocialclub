/* oxlint-disable next/no-img-element */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AboutPillars, type AboutPillar } from '@/components/about-pillars';
import { SiteShell } from '@/components/site-shell';
import {
  isLocale,
  localizedPath,
  metadataCopy,
  siteCopy,
  type Locale,
} from '@/lib/i18n';

const membershipUrl = 'https://form.typeform.com/to/HGyOvaZW';
const instagramUrl = 'https://www.instagram.com/ednasocialclub/';
const tiktokUrl = 'https://www.tiktok.com/@ednasocialclub';
const siteUrl = 'https://edna-social-jazz-club.helminondita.chatgpt.site';

const pressEntries = [
  {
    publication: 'Hufvudstadsbladet',
    title: 'Exklusiva jazzkvällar blev succé bland unga',
    url: 'https://www.hbl.fi/helsingfors/exklusiva-jazzkvallar-blev-succe-bland-unga/',
    published: true,
  },
  {
    publication: 'Iltalehti',
    title: null,
    url: null,
    published: false,
  },
] as const;

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
  const aboutPillars: AboutPillar[] = [
    {
      ...copy.pages.home.aboutPillars.liveMusic,
      image: {
        src: '/edna-live-jazz-helsinki.jpg',
        alt: 'Live jazz musicians performing on piano and double bass at Edna Social Club in Helsinki',
        position: 'center center',
      },
    },
    {
      ...copy.pages.home.aboutPillars.atmosphere,
      image: {
        src: '/edna-social-club-atmosphere-helsinki.jpg',
        alt: 'Guests dining in an elegant setting at an Edna Social Club evening in Helsinki',
        position: 'center center',
      },
    },
    {
      ...copy.pages.home.aboutPillars.community,
      image: {
        src: '/edna-community-dinner-helsinki.jpg',
        alt: 'Guests sharing dinner and conversation at an Edna Social Club event in Helsinki',
        position: 'center center',
      },
    },
  ];

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

        <section className="overview-section overview-about" id="about">
          <div className="overview-section__inner overview-about__inner">
            <div className="overview-split overview-about__intro">
              <div className="overview-heading">
                <h2>{copy.pages.home.aboutTitle}</h2>
                <p className="brand-note">{copy.pages.about.phrase}</p>
              </div>
              <div className="overview-copy">
                <p className="overview-lead">{copy.pages.home.aboutLead}</p>
                <p>{copy.pages.home.aboutBody}</p>
                <p className="overview-note">
                  {copy.pages.home.aboutEventsNote}{' '}
                  <a href={instagramUrl} target="_blank" rel="noreferrer">
                    @ednasocialclub
                  </a>
                  .
                </p>
              </div>
            </div>

            <AboutPillars pillars={aboutPillars} headingLevel="h3" compact />

            <a
              className="text-link text-link--light overview-about__cta"
              href={localizedPath(locale, 'about')}
            >
              {copy.pages.home.aboutCta}
              <span
                className="link-arrow link-arrow--right"
                aria-hidden="true"
              />
            </a>
          </div>
        </section>

        <section
          className="overview-section overview-section--wine overview-members"
          id="members"
        >
          <div className="overview-section__inner overview-section__inner--narrow">
            <h2>{copy.pages.members.title}</h2>
            <p className="overview-lead">{copy.pages.members.lead}</p>
            <p>{copy.pages.members.body[0]}</p>
            <div className="overview-actions">
              <a
                className="button button--ivory"
                href={membershipUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.nav.apply}
              </a>
              <a
                className="text-link text-link--light"
                href={localizedPath(locale, 'members')}
              >
                {copy.pages.home.membersCta}
                <span
                  className="link-arrow link-arrow--right"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>

        <section
          className="overview-section overview-private"
          id="private-corporate"
        >
          <div className="overview-section__inner overview-split">
            <div className="overview-heading">
              <h2>{copy.pages.home.privateTitle}</h2>
              <p className="overview-lead">{copy.pages.privateEvents.lead}</p>
            </div>
            <div className="overview-copy">
              <ul className="overview-list">
                {copy.pages.privateEvents.types.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
              <div className="overview-actions overview-actions--start">
                <a
                  className="button button--wine"
                  href="mailto:contact@ednasocialclub.com"
                >
                  {copy.pages.privateEvents.contactCta}
                </a>
                <a
                  className="text-link"
                  href={localizedPath(locale, 'privateEvents')}
                >
                  {copy.pages.home.privateCta}
                  <span
                    className="link-arrow link-arrow--right"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="overview-section overview-section--tint overview-partnerships"
          id="partnerships"
        >
          <div className="overview-section__inner overview-section__inner--medium">
            <h2>{copy.pages.home.partnershipsTitle}</h2>
            <p className="partnerships-audience">
              {copy.pages.partnerships.audience}
            </p>
            <p>{copy.pages.partnerships.partnersBody}</p>
            <div className="overview-actions">
              <a
                className="button button--wine"
                href="mailto:contact@ednasocialclub.com"
              >
                {copy.pages.partnerships.contactCta}
              </a>
              <a
                className="text-link text-link--light"
                href={localizedPath(locale, 'partnerships')}
              >
                {copy.pages.home.partnershipsCta}
                <span
                  className="link-arrow link-arrow--right"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>

        <section
          className="overview-section overview-section--wine overview-contact"
          id="contact"
        >
          <div className="overview-section__inner">
            <div className="overview-contact__details">
              <h2>{copy.pages.home.contactTitle}</h2>
              <div className="overview-contact__links">
                <a href="mailto:contact@ednasocialclub.com">
                  contact@ednasocialclub.com
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  Instagram @ednasocialclub
                </a>
                <a href={tiktokUrl} target="_blank" rel="noreferrer">
                  TikTok @ednasocialclub
                </a>
              </div>
            </div>

            <section className="overview-press" aria-labelledby="press-heading">
              <h3 className="page-eyebrow" id="press-heading">
                PRESS
              </h3>
              <div className="overview-press__entries">
                {pressEntries.map((entry) => {
                  if (!entry.published || !entry.title || !entry.url)
                    return null;

                  return (
                    <article
                      className="overview-press__entry"
                      key={entry.publication}
                    >
                      <p>{entry.publication}</p>
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        “{entry.title}”
                      </a>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
