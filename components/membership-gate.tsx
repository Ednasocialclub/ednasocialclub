'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '@/lib/i18n';

const applicationsOpenAt = new Date('2026-09-14T00:00:00+03:00').getTime();

const modalCopy = {
  en: {
    title: 'Membership applications open September 14.',
    body: 'The next chapter of Edna begins soon.',
    close: 'Close',
  },
  fi: {
    title: 'Jäsenhakemukset avautuvat 14. syyskuuta.',
    body: 'Ednan seuraava luku alkaa pian.',
    close: 'Sulje',
  },
} satisfies Record<Locale, { title: string; body: string; close: string }>;

type MembershipGateContextValue = {
  open: (trigger: HTMLAnchorElement) => void;
};

const MembershipGateContext = createContext<MembershipGateContextValue | null>(null);

export function MembershipGateProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);
  const copy = modalCopy[locale];

  useEffect(() => setIsMounted(true), []);

  function close() {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function open(trigger: HTMLAnchorElement) {
    triggerRef.current = trigger;
    setIsOpen(true);
  }

  return (
    <MembershipGateContext.Provider value={{ open }}>
      {children}
      {isMounted && isOpen
        ? createPortal(
            <div
              className="membership-gate"
              role="dialog"
              aria-modal="true"
              aria-labelledby="membership-gate-title"
              aria-describedby="membership-gate-description"
            >
              <button
                ref={closeButtonRef}
                className="membership-gate__close"
                type="button"
                onClick={close}
              >
                {copy.close}
              </button>
              <div className="membership-gate__content">
                <h2 id="membership-gate-title">{copy.title}</h2>
                <p id="membership-gate-description">{copy.body}</p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </MembershipGateContext.Provider>
  );
}

export function MembershipApplicationLink({
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const gate = useContext(MembershipGateContext);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || Date.now() >= applicationsOpenAt) return;

    event.preventDefault();
    gate?.open(event.currentTarget);
  }

  return <a {...props} onClick={handleClick} />;
}
