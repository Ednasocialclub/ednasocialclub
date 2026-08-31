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
  'events',
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
        primaryNavLabel={copy.primaryNavLabel}
        mobileNavLabel={copy.mobileNavLabel}
        mobileNavDescription={copy.mobileNavDescription}
      />

      <main>
        <section className="hero" id="top">
          <div className="hero__grid">
            <div className="hero__copy reveal">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1>{copy.title}</h1>
              <p className="hero__intro">{copy.intro}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#events">
                  {copy.primaryCta}
                </a>
                <a
                  className="editorial-link"
                  href={localizedPath(locale, 'members')}
                >
                  {copy.secondaryCta}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="hero__mark" aria-hidden="true">
              <img
                src="/edna-emblem.png"
                alt=""
                width="1254"
                height="1254"
              />
            </div>

            <div className="hero__footer">
              <p className="script-line">{copy.philosophy}</p>
              <a href="#philosophy" className="scroll-cue">
                <span>{copy.scroll}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="philosophy-section section" id="philosophy">
          <div className="section-index" aria-hidden="true">
            01
          </div>
          <div className="philosophy-section__content">
            <p className="eyebrow eyebrow--light">
              {copy.philosophySection.eyebrow}
            </p>
            <h2 className="script-heading">
              {copy.philosophySection.title}
            </h2>
            <p className="large-copy">{copy.philosophySection.body}</p>
          </div>
          <div className="philosophy-section__details">
            <p>{copy.philosophySection.detailOne}</p>
            <p>{copy.philosophySection.detailTwo}</p>
          </div>
        </section>

        <section className="experience-section section section--black">
          <div className="section-index" aria-hidden="true">
            02
          </div>
          <div className="experience-section__intro">
            <p className="eyebrow eyebrow--light">{copy.experience.eyebrow}</p>
            <h2>{copy.experience.title}</h2>
          </div>
          <div className="experience-list">
            {copy.experience.items.map((item, index) => (
              <article className="experience-item" key={item.title}>
                <p className="experience-item__number" aria-hidden="true">
                  0{index + 1}
                </p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="events-section section" id="events">
          <div className="section-index" aria-hidden="true">
            03
          </div>
          <div className="events-section__heading">
            <p className="eyebrow">{copy.events.eyebrow}</p>
            <h2>{copy.events.title}</h2>
          </div>
          <div className="events-empty">
            <span className="events-empty__line" aria-hidden="true" />
            <p>{copy.events.body}</p>
            <a
              className="editorial-link"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.events.follow}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="members-section section section--wine">
          <div className="section-index" aria-hidden="true">
            04
          </div>
          <div className="members-section__ghost" aria-hidden="true">
            Members
          </div>
          <div className="members-section__content">
            <p className="eyebrow eyebrow--light">{copy.members.eyebrow}</p>
            <h2>{copy.members.title}</h2>
            <p>{copy.members.body}</p>
            <div className="members-section__actions">
              <a
                className="button button--ivory"
                href={membershipUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.members.apply}
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="editorial-link editorial-link--light"
                href={localizedPath(locale, 'members')}
              >
                {copy.members.explore}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="private-section section">
          <div className="section-index" aria-hidden="true">
            05
          </div>
          <div className="private-section__title">
            <p className="eyebrow">{copy.privateEvents.eyebrow}</p>
            <h2>{copy.privateEvents.title}</h2>
          </div>
          <div className="private-section__body">
            <p>{copy.privateEvents.body}</p>
            <a
              className="editorial-link"
              href={localizedPath(locale, 'privateEvents')}
            >
              {copy.privateEvents.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="partnerships-section section section--black">
          <div className="section-index" aria-hidden="true">
            06
          </div>
          <div className="partnerships-section__content">
            <p className="eyebrow eyebrow--light">
              {copy.partnerships.eyebrow}
            </p>
            <h2>{copy.partnerships.title}</h2>
            <p>{copy.partnerships.body}</p>
            <a
              className="editorial-link editorial-link--light"
              href={localizedPath(locale, 'partnerships')}
            >
              {copy.partnerships.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="partnerships-section__word" aria-hidden="true">
            Together
          </div>
        </section>

        <section className="closing-section section section--wine">
          <p className="eyebrow eyebrow--light">{copy.closing.context}</p>
          <h2 className="script-heading script-heading--closing">
            {copy.closing.line}
          </h2>
          <a
            className="button button--ivory"
            href="mailto:contact@ednasocialclub.com"
          >
            {copy.closing.contact}
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <a href={localizedPath(locale, 'home')}>
            <img
              src="/edna-signature.png"
              alt="Edna Social & Jazz Club"
              width="1774"
              height="887"
            />
          </a>
          <p>Helsinki, Finland</p>
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
