'use client';

/* oxlint-disable next/no-img-element */

import { usePathname, useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { MembershipApplicationLink } from '@/components/membership-gate';
import {
  type Locale,
  type ContentRoute,
  localizedPath,
  routeForPath,
} from '@/lib/i18n';

type NavigationCopy = {
  about: string;
  members: string;
  privateEvents: string;
  partnerships: string;
  contact: string;
  apply: string;
};

type NavigationRoute = Exclude<ContentRoute, 'privacy'>;

const navigation: NavigationRoute[] = [
  'about',
  'members',
  'privateEvents',
  'partnerships',
  'contact',
];

const membershipUrl = 'https://form.typeform.com/to/HGyOvaZW';

function persistLocale(locale: Locale) {
  document.cookie = `edna-locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

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
    const route = routeForPath(pathname);
    const hash = route === 'home' ? window.location.hash : '';
    persistLocale(nextLocale);
    router.push(`${localizedPath(nextLocale, route)}${hash}`);
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
  brandAlt,
  primaryNavLabel,
  mobileNavLabel,
  mobileNavDescription,
}: {
  locale: Locale;
  nav: NavigationCopy;
  menuLabel: string;
  closeLabel: string;
  languageLabel: string;
  brandAlt: string;
  primaryNavLabel: string;
  mobileNavLabel: string;
  mobileNavDescription: string;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDialogElement>(null);

  function closeMenu({ restoreFocus = true } = {}) {
    setIsMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <a
        className="site-header__logo-link"
        href={localizedPath(locale, 'home')}
      >
        <img
          className="site-header__logo"
          src="/edna-signature.png"
          alt={brandAlt}
          width="1774"
          height="887"
        />
      </a>

      <nav className="desktop-nav" aria-label={primaryNavLabel}>
        {navigation.map((route) => (
          <a
            key={route}
            href={localizedPath(locale, route)}
            aria-current={routeForPath(pathname) === route ? 'page' : undefined}
          >
            {nav[route]}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <LanguageSwitcher locale={locale} label={languageLabel} />
        <div className="mobile-language-switcher">
          <LanguageSwitcher locale={locale} label={languageLabel} />
        </div>
        <MembershipApplicationLink
          className="header-apply"
          href={membershipUrl}
          target="_blank"
          rel="noreferrer"
        >
          {nav.apply}
        </MembershipApplicationLink>
        <button
          ref={menuButtonRef}
          className="menu-trigger"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          {menuLabel}
        </button>
      </div>

      {isMenuOpen && typeof document !== 'undefined'
        ? createPortal(
            <div className="mobile-menu-layer">
              <button
                className="mobile-menu__backdrop"
                type="button"
                aria-label={closeLabel}
                onClick={() => closeMenu()}
              />
              <dialog
                ref={menuRef}
                id="mobile-menu"
                className="mobile-menu"
                open
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                aria-describedby="mobile-menu-description"
              >
                <h2 className="sr-only" id="mobile-menu-title">
                  {menuLabel}
                </h2>
                <p className="sr-only" id="mobile-menu-description">
                  {mobileNavDescription}
                </p>
                <div className="mobile-menu__topline">
                  <span aria-hidden="true" />
                  <button
                    ref={closeButtonRef}
                    className="mobile-menu__close"
                    type="button"
                    onClick={() => closeMenu()}
                  >
                    {closeLabel}
                  </button>
                </div>
                <nav className="mobile-nav" aria-label={mobileNavLabel}>
                  {navigation.map((route) => (
                    <a
                      key={route}
                      href={localizedPath(locale, route)}
                      aria-label={nav[route]}
                      onClick={() => closeMenu({ restoreFocus: false })}
                    >
                      {nav[route]}
                    </a>
                  ))}
                </nav>
                <MembershipApplicationLink
                  className="mobile-menu__apply"
                  href={membershipUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => closeMenu({ restoreFocus: false })}
                >
                  {nav.apply}
                </MembershipApplicationLink>
              </dialog>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
