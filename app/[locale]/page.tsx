import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AboutPillars, type AboutPillar } from '@/components/about-pillars';
import { CollaborationGallery } from '@/components/collaboration-gallery';
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
const newsletterUrl =
  'https://ednasocialclub.myflodesk.com/privateclub?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUGeatwZG9mAmZkaWQWUNvuZ1oMw8pmdJ5k9yoC_pSKys1SNGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3xTa0UeGLCby7uq3-F596v7h24fwR9AFK1M-z9THlDqEF4pzs_ptDNBiZvA_aem_k34N41oDHSdME7q8_J5k1A';
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
        src: '/edna-garden-party-live-music-helsinki.jpg',
        alt: 'A singer performing beside a grand piano for guests at an Edna Social Club garden party in Helsinki',
        position: '48% center',
      },
    },
    {
      ...copy.pages.home.aboutPillars.atmosphere,
      image: {
        src: '/collaborations/edna-champagne-tower-collaboration.jpg',
        alt: 'A champagne tower surrounded by guests at an Edna Social Club event in Helsinki',
        position: 'center 48%',
      },
    },
    {
      ...copy.pages.home.aboutPillars.community,
      image: {
        src: '/collaborations/edna-pilates-community-session.jpg',
        alt: 'Guests taking part in an Edna Social Club Pilates community session in Helsinki',
        position: 'center 52%',
      },
    },
  ];

  return (
    <SiteShell locale={locale}>
      <main id="top">
        <section className="home-hero">
          <div className="home-hero__content reveal">
            <Image
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
            <header className="overview-about__intro">
              <h2>{copy.pages.home.aboutTitle}</h2>
              <div className="overview-copy">
                <p className="overview-lead">{copy.pages.home.aboutLead}</p>
                {copy.pages.home.aboutBody ? (
                  <p>{copy.pages.home.aboutBody}</p>
                ) : null}
                <p className="overview-note">
                  {copy.pages.home.aboutEventsNote}{' '}
                  <a href={instagramUrl} target="_blank" rel="noreferrer">
                    @ednasocialclub
                  </a>
                  .
                </p>
              </div>
            </header>

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

            <p className="brand-note overview-about__signature">
              {copy.pages.about.phrase}
            </p>
          </div>
        </section>

        <section
          className="overview-section overview-section--wine overview-members"
          id="members"
        >
          <div className="overview-section__inner overview-members__inner">
            <div className="overview-members__media">
              <Image
                className="overview-members__image"
                src="/edna-members-club-dinner-helsinki.jpg"
                alt="Guests seated together around a dinner table at an Edna Social Club evening in Helsinki"
                width="1440"
                height="960"
                sizes="(max-width: 48rem) calc(100vw - 2.5rem), 43vw"
              />
            </div>
            <div className="overview-members__content">
              <h2>{copy.pages.members.title}</h2>
              <p className="overview-lead">{copy.pages.home.membersLead}</p>
              <p>{copy.pages.home.membersBody}</p>
              <div className="overview-actions overview-actions--start">
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
            <p className="overview-partnerships__intro">
              {copy.pages.home.partnershipsBody}
            </p>
            <CollaborationGallery
              label={copy.pages.partnerships.collaborationsLabel}
              locale={locale}
              showLabel={false}
              variant="compact"
            />
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
              {copy.pages.home.contactLead ? (
                <p className="overview-contact__lead">
                  {copy.pages.home.contactLead}
                </p>
              ) : null}
              <a
                className="button button--wine overview-contact__cta"
                href="mailto:contact@ednasocialclub.com"
              >
                Contact Edna
              </a>
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

            <section
              className="overview-newsletter"
              aria-labelledby="home-newsletter-heading"
            >
              <h3 className="page-eyebrow" id="home-newsletter-heading">
                NEWSLETTER
              </h3>
              <a
                href={newsletterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Edna newsletter
              </a>
            </section>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
