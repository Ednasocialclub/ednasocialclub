'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  type Locale,
  type RouteKey,
  localizedPath,
  routeForPath,
} from '@/lib/i18n';

type NavigationCopy = {
  about: string;
  events: string;
  members: string;
  privateEvents: string;
  partnerships: string;
  contact: string;
};

const navigation: RouteKey[] = [
  'about',
  'events',
  'members',
  'privateEvents',
  'partnerships',
  'contact',
];

function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(nextLocale: Locale) {
    if (nextLocale === locale) return;
    document.cookie = `edna-locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(localizedPath(nextLocale, routeForPath(pathname)));
  }

  return (
    <div className="language-switcher" aria-label={label}>
      {(['en', 'fi'] as const).map((language, index) => (
        <span key={language} className="language-switcher__item">
          {index > 0 && <span aria-hidden="true">/</span>}
          <button
            type="button"
            className="language-switcher__button"
            aria-current={language === locale ? 'true' : undefined}
            onClick={() => switchTo(language)}
          >
            {language.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export function SiteHeader({
  locale,
  nav,
  menuLabel,
  closeLabel,
  languageLabel,
  primaryNavLabel,
  mobileNavLabel,
  mobileNavDescription,
}: {
  locale: Locale;
  nav: NavigationCopy;
  menuLabel: string;
  closeLabel: string;
  languageLabel: string;
  primaryNavLabel: string;
  mobileNavLabel: string;
  mobileNavDescription: string;
}) {
  return (
    <header className="site-header">
      <a className="site-header__logo-link" href={localizedPath(locale, 'home')}>
        <img
          className="site-header__logo"
          src="/edna-signature.png"
          alt="Edna Social & Jazz Club"
          width="1774"
          height="887"
        />
      </a>

      <nav className="desktop-nav" aria-label={primaryNavLabel}>
        {navigation.map((route) => (
          <a key={route} href={localizedPath(locale, route)}>
            {nav[route]}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <LanguageSwitcher locale={locale} label={languageLabel} />
        <Sheet>
          <SheetTrigger className="menu-trigger">{menuLabel}</SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="mobile-menu"
          >
            <SheetTitle className="sr-only">{menuLabel}</SheetTitle>
            <SheetDescription className="sr-only">
              {mobileNavDescription}
            </SheetDescription>
            <div className="mobile-menu__topline">
              <LanguageSwitcher locale={locale} label={languageLabel} />
              <SheetClose className="mobile-menu__close">{closeLabel}</SheetClose>
            </div>
            <nav className="mobile-nav" aria-label={mobileNavLabel}>
              {navigation.map((route, index) => (
                <SheetClose
                  key={route}
                  render={<a href={localizedPath(locale, route)} />}
                >
                  <span aria-hidden="true">0{index + 1}</span>
                  {nav[route]}
                </SheetClose>
              ))}
            </nav>
            <p className="mobile-menu__signature">The art of gathering.</p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
