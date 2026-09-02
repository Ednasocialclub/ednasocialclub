import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/site-header';
import {
  localizedPath,
  siteCopy,
  type ContentRoute,
  type Locale,
} from '@/lib/i18n';

const membershipUrl = 'https://form.typeform.com/to/HGyOvaZW';
const instagramUrl = 'https://www.instagram.com/ednasocialclub/';
const tiktokUrl = 'https://www.tiktok.com/@ednasocialclub';

const footerRoutes: ContentRoute[] = [
  'about',
  'members',
  'privateEvents',
  'partnerships',
  'contact',
];

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const copy = siteCopy[locale];

  return (
    <>
      <SiteHeader
        locale={locale}
        nav={copy.nav}
        menuLabel={copy.menu}
        closeLabel={copy.close}
        languageLabel={copy.languageLabel}
        brandAlt={copy.brandAlt}
        primaryNavLabel={copy.primaryNavLabel}
        mobileNavLabel={copy.mobileNavLabel}
        mobileNavDescription={copy.mobileNavDescription}
      />

      {children}

      <footer className="site-footer">
        <div className="site-footer__brand">
          <a className="site-footer__name" href={localizedPath(locale, 'home')}>
            Edna Social Club
          </a>
          <p>{copy.footer.location}</p>
        </div>

        <nav className="site-footer__nav" aria-label={copy.footer.navigation}>
          <p className="footer-label">{copy.footer.navigation}</p>
          {footerRoutes.map((route) => (
            <a key={route} href={localizedPath(locale, route)}>
              {copy.nav[route]}
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <p className="footer-label">{copy.footer.contact}</p>
          <a href="mailto:contact@ednasocialclub.com">
            contact@ednasocialclub.com
          </a>
          <a href={membershipUrl} target="_blank" rel="noreferrer">
            {copy.footer.membership}
          </a>
        </div>

        <div className="site-footer__social">
          <p className="footer-label">{copy.footer.social}</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={tiktokUrl} target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__legal">
            <p>© {copy.footer.copyright}</p>
            <p className="site-footer__trademark">
              EDNA SOCIAL CLUB® is a registered trademark in Finland.
            </p>
          </div>
          <a className="back-to-top" href="#top">
            {copy.footer.backToTop}
            <span className="link-arrow link-arrow--up" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
