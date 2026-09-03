import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { AboutPillars, type AboutPillar } from '@/components/about-pillars';
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
const hufvudstadsbladetUrl =
  'https://www.hbl.fi/helsingfors/exklusiva-jazzkvallar-blev-succe-bland-unga/';

function PageHero({
  title,
  lead,
  supportingLine,
  className,
}: {
  title: string;
  lead: string;
  supportingLine?: string;
  className?: string;
}) {
  return (
    <section className={className ? `page-hero ${className}` : 'page-hero'}>
      <div className="page-hero__inner reveal">
        <h1>{title}</h1>
        {supportingLine && (
          <p className="brand-note page-hero__brand-note">{supportingLine}</p>
        )}
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
  const pillars: AboutPillar[] = [
    {
      ...copy.pillars[1],
      image: {
        src: '/edna-live-jazz-helsinki.jpg',
        alt: 'Live jazz musicians performing on piano and double bass at Edna Social Club in Helsinki',
        position: 'center center',
      },
    },
    {
      ...copy.pillars[2],
      image: {
        src: '/edna-warm-dining-room-atmosphere-helsinki.jpg',
        alt: 'Guests seated in a warmly lit dining room during an Edna Social Club evening in Helsinki',
        position: 'center center',
      },
    },
    {
      ...copy.pillars[0],
      image: {
        src: '/edna-community-dinner-helsinki.jpg',
        alt: 'Guests sharing dinner and conversation at an Edna Social Club event in Helsinki',
        position: 'center center',
      },
    },
  ];

  return (
    <>
      <PageHero
        title={siteCopy[locale].pages.home.aboutTitle}
        lead={copy.lead}
        supportingLine={copy.phrase}
        className="about-page-hero"
      />

      <section className="page-section about-pillars-section">
        <AboutPillars pillars={pillars} />
      </section>

      <section className="page-section page-section--tint about-editorial">
        <div className="page-section__inner about-editorial__inner">
          {copy.editorialSections.map((section) => (
            <section className="about-editorial__item" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

function MembersPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale].pages.members;

  if ('questions' in copy) {
    return (
      <section className="page-section page-section--tint membership-editorial-page">
        <div className="page-section__inner membership-editorial-page__inner">
          <div className="membership-editorial-page__intro-grid">
            <header className="membership-editorial-page__intro">
              <h1>{copy.title}</h1>
              <p className="page-lead">{copy.lead}</p>
              <p className="membership-intro-secondary">
                {copy.introSecondary}
              </p>
            </header>

            <div className="membership-editorial-page__media">
              <Image
                className="membership-social-image"
                src="/edna-members-club-dinner-helsinki.jpg"
                alt="Guests dining together at an Edna Social Club evening in Helsinki"
                width="1440"
                height="960"
                sizes="(max-width: 48rem) calc(100vw - 2.5rem), 43vw"
              />
            </div>
          </div>

          <div className="membership-editorial-page__questions">
            {copy.questions.map((question) => (
              <section className="membership-question" key={question.title}>
                <h2>{question.title}</h2>
                <p>{question.body}</p>
              </section>
            ))}
          </div>

          <section className="membership-editorial-page__cta">
            <h2>{copy.applicationTitle}</h2>
            <p className="membership-editorial-page__cta-line">
              {copy.applicationTagline}
            </p>
            <a
              className="button button--ivory"
              href={membershipUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.apply}
            </a>
          </section>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero title={copy.title} lead={copy.lead} />

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
      <PageHero title={copy.title} lead={copy.lead} />

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
      <PageHero title={copy.title} lead={copy.lead} />

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

  if ('form' in copy) {
    return (
      <section className="contact-page contact-page--editorial page-section">
        <div className="page-section__inner">
          <header className="contact-page__intro reveal">
            <h1 className="contact-title">{copy.title}</h1>
            <p className="page-lead">{copy.lead}</p>
          </header>

          <form
            className="contact-form"
            action={emailUrl}
            method="post"
            encType="text/plain"
          >
            <div className="contact-field">
              <label htmlFor="contact-name">{copy.form.name}</label>
              <input id="contact-name" name="Name" type="text" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">{copy.form.email}</label>
              <input id="contact-email" name="Email" type="email" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-enquiry-type">
                {copy.form.enquiryType}
              </label>
              <span className="contact-select">
                <select
                  id="contact-enquiry-type"
                  name="Enquiry type"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    {copy.form.enquiryPlaceholder}
                  </option>
                  {copy.form.enquiryOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 7"
                  focusable="false"
                >
                  <path d="m1 1 5 5 5-5" />
                </svg>
              </span>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">{copy.form.message}</label>
              <textarea
                id="contact-message"
                name="Message"
                rows={3}
                required
              />
            </div>

            <button className="button button--wine" type="submit">
              {copy.form.submit}
            </button>
          </form>

          <div className="contact-page__details" aria-label="Contact details">
            <a href={emailUrl}>contact@ednasocialclub.com</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram @ednasocialclub
            </a>
            <a href={tiktokUrl} target="_blank" rel="noreferrer">
              TikTok @ednasocialclub
            </a>
          </div>

          <section
            className="contact-page__press"
            aria-labelledby="contact-press-heading"
          >
            <h2 className="page-eyebrow" id="contact-press-heading">
              PRESS
            </h2>
            <p>HUFVUDSTADSBLADET</p>
            <a
              href={hufvudstadsbladetUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              “Exklusiva jazzkvällar blev succé bland unga”
            </a>
          </section>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-page page-section">
      <div className="page-section__inner">
        <div className="page-hero__inner reveal">
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
              @ednasocialclub
            </a>
          </div>
          <div className="contact-item">
            <p>{copy.tiktokLabel}</p>
            <a href={tiktokUrl} target="_blank" rel="noreferrer">
              @ednasocialclub
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
