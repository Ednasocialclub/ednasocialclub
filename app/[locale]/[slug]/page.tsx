import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { SiteShell } from '@/components/site-shell';
import {
  contentRouteForSlug,
  isLocale,
  localizedPath,
  metadataCopy,
  siteCopy,
  type ContentRoute,
  type Locale,
} from '@/lib/i18n';

const membershipUrl = 'https://form.typeform.com/to/HGyOvaZW';
const instagramUrl = 'https://www.instagram.com/ednasocialclub/';
const tiktokUrl = 'https://www.tiktok.com/@ednasocialclub';
const emailUrl = 'mailto:contact@ednasocialclub.com';
const siteUrl = 'https://edna-social-jazz-club.helminondita.chatgpt.site';

function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner reveal">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{lead}</p>
      </div>
    </section>
  );
}

function PageCta({
  title,
  body,
  label,
  href,
}: {
  title: string;
  body: string;
  label: string;
  href: string;
}) {
  return (
    <section className="page-cta">
      <div className="page-cta__inner">
        <h2>{title}</h2>
        <p>{body}</p>
        <a className="button button--ivory" href={href}>
          {label}
        </a>
      </div>
    </section>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].pages.about;

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} />

      <section className="page-section page-section--tint">
        <div className="page-section__inner split-section">
          <div>
            <p className="page-eyebrow">{copy.eyebrow}</p>
            <h2>{copy.ideaTitle}</h2>
          </div>
          <div className="body-copy">
            {copy.ideaBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner information-grid">
          {copy.pillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--tint">
        <div className="page-section__inner instagram-note">
          <div>
            <h2>{copy.eventsTitle}</h2>
            <p>{copy.eventsBody}</p>
            <p>{copy.instagramNote}</p>
          </div>
          <a
            className="button button--wine"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.instagramCta}
          </a>
        </div>
      </section>
    </>
  );
}

function MembersPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].pages.members;

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} />

      <section className="page-section page-section--tint">
        <div className="page-section__inner membership-panel">
          <div className="body-copy">
            <h2>{copy.bodyTitle}</h2>
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="membership-application">
            <h2>{copy.applicationTitle}</h2>
            <p>{copy.applicationBody}</p>
            <a
              className="button button--ivory"
              href={membershipUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.apply}
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

function PrivateEventsPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].pages.privateEvents;

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} />

      <section className="page-section page-section--tint">
        <div className="page-section__inner page-section__inner--narrow body-copy">
          <p>{copy.intro}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner commercial-columns">
          <div>
            <h2>{copy.typesTitle}</h2>
            <ul className="plain-list">
              {copy.types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
          <div className="body-copy">
            <h2>{copy.approachTitle}</h2>
            <p>{copy.approachBody}</p>
          </div>
        </div>
      </section>

      <PageCta
        title={copy.contactTitle}
        body={copy.contactBody}
        label={copy.contactCta}
        href={emailUrl}
      />
    </>
  );
}

function PartnershipsPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].pages.partnerships;

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} />

      <section className="page-section page-section--tint">
        <div className="page-section__inner page-section__inner--narrow body-copy">
          <p>{copy.intro}</p>
          <h2>{copy.audienceTitle}</h2>
          <p>{copy.audience}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner commercial-columns">
          <div className="body-copy">
            <h2>{copy.partnersTitle}</h2>
            <p>{copy.partnersBody}</p>
          </div>
          <div>
            <h2>{copy.opportunitiesTitle}</h2>
            <ul className="plain-list">
              {copy.opportunities.map((opportunity) => (
                <li key={opportunity}>{opportunity}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageCta
        title={copy.contactTitle}
        body={copy.contactBody}
        label={copy.contactCta}
        href={emailUrl}
      />
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].pages.contact;

  return (
    <section className="contact-page page-section">
      <div className="page-section__inner">
        <div className="page-hero__inner reveal">
          <p className="page-eyebrow">{copy.eyebrow}</p>
          <h1 className="contact-title">{copy.title}</h1>
          <p className="page-lead">{copy.lead}</p>
        </div>

        <div className="contact-list">
          <div className="contact-item">
            <p>{copy.emailLabel}</p>
            <a href={emailUrl}>contact@ednasocialclub.com</a>
          </div>
          <div className="contact-item">
            <p>{copy.instagramLabel}</p>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              @ednasocialclub ↗
            </a>
          </div>
          <div className="contact-item">
            <p>{copy.tiktokLabel}</p>
            <a href={tiktokUrl} target="_blank" rel="noreferrer">
              @ednasocialclub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderPage(route: ContentRoute, locale: Locale): ReactNode {
  switch (route) {
    case 'about':
      return <AboutPage locale={locale} />;
    case 'members':
      return <MembersPage locale={locale} />;
    case 'privateEvents':
      return <PrivateEventsPage locale={locale} />;
    case 'partnerships':
      return <PartnershipsPage locale={locale} />;
    case 'contact':
      return <ContactPage locale={locale} />;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: candidate, slug } = await params;
  if (!isLocale(candidate)) return {};

  const locale: Locale = candidate;
  const route = contentRouteForSlug(locale, slug);
  if (!route) return { robots: { index: false, follow: false } };

  const metadata = metadataCopy[locale][route];

  return {
    metadataBase: new URL(siteUrl),
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedPath(locale, route),
      languages: {
        en: localizedPath('en', route),
        fi: localizedPath('fi', route),
        'x-default': localizedPath('en', route),
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_GB',
      alternateLocale: locale === 'fi' ? ['en_GB'] : ['fi_FI'],
      title: metadata.title,
      description: metadata.description,
      url: localizedPath(locale, route),
      siteName: 'Edna Social Club',
    },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: candidate, slug } = await params;
  if (!isLocale(candidate)) notFound();

  const locale: Locale = candidate;
  const route = contentRouteForSlug(locale, slug);
  if (!route) notFound();

  return (
    <SiteShell locale={locale}>
      <main id="top">{renderPage(route, locale)}</main>
    </SiteShell>
  );
}
