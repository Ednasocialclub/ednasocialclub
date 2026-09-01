import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import {
  homeCopy,
  isLocale,
  localizedPath,
  type Locale,
  type RouteKey,
} from '@/lib/i18n';

const membershipUrl = 'https://form.typeform.com/to/HGyOvaZW';
const instagramUrl = 'https://www.instagram.com/ednasocialclub/';
const tiktokUrl = 'https://www.tiktok.com/@ednasocialclub';

const footerRoutes: RouteKey[] = [
  'about',
  'members',
  'privateEvents',
  'partnerships',
  'contact',
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: candidate } = await params;
  if (!isLocale(candidate)) notFound();
  const locale: Locale = candidate;
  const copy = homeCopy[locale];

  return (
    <>
      <SiteHeader
        locale={locale}
        nav={copy.nav}
        menuLabel={copy.menu}
        closeLabel={copy.close}
        languageLabel={copy.languageLabel}
        brandAlt={copy.hero.logoAlt}
        primaryNavLabel={copy.primaryNavLabel}
        mobileNavLabel={copy.mobileNavLabel}
        mobileNavDescription={copy.mobileNavDescription}
      />

      <main>
        <section className="calm-hero" id="top">
          <div className="calm-hero__content reveal">
            <img
              className="calm-hero__logo"
              src="/edna-emblem.png"
              alt={copy.hero.logoAlt}
              width="1254"
              height="1254"
            />
            <h1>{copy.hero.title}</h1>
            <p>{copy.hero.eyebrow}</p>
            <a
              className="button button--primary"
              href={membershipUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.nav.apply}
            </a>
          </div>
        </section>

        <section className="home-about home-section" id="about">
          <div className="home-section__inner home-section__inner--narrow">
            <p className="quiet-label">{copy.about.eyebrow}</p>
            <h2>{copy.about.title}</h2>
            <p className="home-about__lead">{copy.about.body}</p>
            <p>{copy.about.secondary}</p>
            <a
              className="quiet-link"
              href={localizedPath(locale, 'about')}
            >
              {copy.about.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="brand-moment brand-moment--wine">
          <p>{copy.brand.gathering}</p>
        </section>

        <section className="home-members home-section home-section--wine">
          <div className="home-section__inner home-section__inner--narrow">
            <p className="quiet-label quiet-label--light">
              {copy.members.eyebrow}
            </p>
            <h2>{copy.members.title}</h2>
            <p>{copy.members.body}</p>
            <div className="calm-actions">
              <a
                className="button button--ivory"
                href={membershipUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.members.apply}
              </a>
              <a
                className="quiet-link quiet-link--light"
                href={localizedPath(locale, 'members')}
              >
                {copy.members.explore}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="commercial-section home-section">
          <div className="home-section__inner">
            <div className="commercial-section__heading">
              <p className="quiet-label">{copy.commercial.eyebrow}</p>
              <h2>{copy.commercial.title}</h2>
            </div>

            <div className="commercial-grid">
              <article className="commercial-card">
                <h3>{copy.privateEvents.title}</h3>
                <p>{copy.privateEvents.body}</p>
                <p className="commercial-card__detail">
                  {copy.privateEvents.detail}
                </p>
                <a
                  className="quiet-link"
                  href={localizedPath(locale, 'privateEvents')}
                >
                  {copy.privateEvents.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="commercial-card">
                <h3>{copy.partnerships.title}</h3>
                <p>{copy.partnerships.body}</p>
                <p className="commercial-card__detail">
                  {copy.partnerships.detail}
                </p>
                <a
                  className="quiet-link"
                  href={localizedPath(locale, 'partnerships')}
                >
                  {copy.partnerships.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="home-philosophy home-section">
          <div className="home-section__inner">
            <div className="home-philosophy__heading">
              <p className="quiet-label">{copy.philosophy.eyebrow}</p>
              <h2>{copy.philosophy.title}</h2>
            </div>
            <div className="philosophy-grid">
              <article>
                <h3>{copy.philosophy.jazzTitle}</h3>
                <p>{copy.philosophy.jazzBody}</p>
              </article>
              <article>
                <h3>{copy.philosophy.gatheringTitle}</h3>
                <p>{copy.philosophy.gatheringBody}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="events-notice" id="events">
          <div>
            <p className="quiet-label">{copy.events.eyebrow}</p>
            <h2>{copy.events.title}</h2>
          </div>
          <a
            className="quiet-link"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.events.follow}
            <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="home-contact home-section home-section--wine">
          <div className="home-section__inner home-section__inner--narrow">
            <p className="brand-statement">{copy.brand.feeling}</p>
            <p className="quiet-label quiet-label--light">
              {copy.contact.eyebrow}
            </p>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.body}</p>
            <a
              className="button button--ivory"
              href="mailto:contact@ednasocialclub.com"
            >
              {copy.contact.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <a href={localizedPath(locale, 'home')}>
            <img
              src="/edna-signature.png"
              alt="Edna Social Club"
              width="1774"
              height="887"
            />
          </a>
          <p>{copy.footer.location}</p>
        </div>

        <div className="site-footer__column">
          <p className="footer-label">{copy.footer.navigation}</p>
          {footerRoutes.map((route) => (
            <a key={route} href={localizedPath(locale, route)}>
              {copy.nav[route]}
            </a>
          ))}
        </div>

        <div className="site-footer__column">
          <p className="footer-label">{copy.footer.contact}</p>
          <a href="mailto:contact@ednasocialclub.com">
            contact@ednasocialclub.com
          </a>
          <a href={membershipUrl} target="_blank" rel="noreferrer">
            {copy.footer.membership} ↗
          </a>
        </div>

        <div className="site-footer__column">
          <p className="footer-label">{copy.footer.social}</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
          <a href={tiktokUrl} target="_blank" rel="noreferrer">
            TikTok ↗
          </a>
        </div>

        <div className="site-footer__bottom">
          <p>© {copy.footer.copyright}</p>
          <a href={localizedPath(locale, 'privacy')}>{copy.footer.privacy}</a>
          <a href="#top">↑</a>
        </div>
      </footer>
    </>
  );
}
