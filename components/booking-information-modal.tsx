'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n';

const bookingInformationCopy = {
  en: {
    trigger: 'Booking Information',
    title: 'BOOKING INFORMATION',
    close: 'Close booking information',
    termsTitle: 'Cancellation & Ticket Terms',
    terms: [
      'Tickets cannot be cancelled or refunded if you are unable to attend.',
      'You may transfer your ticket to another guest by notifying contact@ednasocialclub.com no later than 21 December 2026.',
      'Member-priced tickets may only be transferred to another Edna member.',
      'The event is strictly for guests aged 20 and over, and proof of age may be required at the entrance.',
      'If Edna cancels the event, the ticket price will be refunded.',
    ],
    dietaryTitle: 'Dietary Requirements',
    dietary:
      'Please email any dietary requirements or allergies to contact@ednasocialclub.com by 21 December 2026, including the name of the guest they apply to.',
  },
  fi: {
    trigger: 'Lipputiedot',
    title: 'LIPPUTIEDOT',
    close: 'Sulje lipputiedot',
    termsTitle: 'Peruutus- ja lippuehdot',
    terms: [
      'Lippua ei voi perua eikä sen hintaa palauteta, jos et pääse osallistumaan.',
      'Voit siirtää lipun toiselle henkilölle ilmoittamalla siitä osoitteeseen contact@ednasocialclub.com viimeistään 21.12.2026.',
      'Jäsenhintaisen lipun voi siirtää vain toiselle Ednan jäsenelle.',
      'Tapahtuman ikäraja on 20 vuotta, ja ikä voidaan tarkistaa sisäänkäynnillä.',
      'Jos Edna peruu tapahtuman, lipun hinta palautetaan.',
    ],
    dietaryTitle: 'Erityisruokavaliot',
    dietary:
      'Ilmoita mahdolliset erityisruokavaliot ja allergiat sähköpostitse osoitteeseen contact@ednasocialclub.com viimeistään 21.12.2026. Mainitse viestissä sen vieraan nimi, jota ilmoitus koskee.',
  },
} satisfies Record<
  Locale,
  {
    trigger: string;
    title: string;
    close: string;
    termsTitle: string;
    terms: string[];
    dietaryTitle: string;
    dietary: string;
  }
>;

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
const closingDuration = 220;

function EmailLinkedText({ text }: { text: string }) {
  const [beforeEmail, afterEmail] = text.split('contact@ednasocialclub.com');

  return (
    <>
      {beforeEmail}
      <a href="mailto:contact@ednasocialclub.com">contact@ednasocialclub.com</a>
      {afterEmail}
    </>
  );
}

export function BookingInformationModal({ locale }: { locale: Locale }) {
  const copy = bookingInformationCopy[locale];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  function restorePage() {
    document.body.classList.remove('booking-modal-open');
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function finishClose() {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
  }

  function closeModal() {
    const dialog = dialogRef.current;
    if (!dialog?.open || closeTimerRef.current !== null) return;

    setIsVisible(false);
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      finishClose();
    }, closingDuration);
  }

  function openModal() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    document.body.classList.add('booking-modal-open');
    dialog.showModal();
    window.requestAnimationFrame(() => {
      setIsVisible(true);
      closeButtonRef.current?.focus();
    });
  }

  useEffect(() => {
    const dialog = dialogRef.current;

    function handleDialogClick(event: globalThis.MouseEvent) {
      if (event.target === dialog) closeModal();
    }

    function handleDialogKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable =
        dialog?.querySelectorAll<HTMLElement>(focusableSelector);
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

    dialog?.addEventListener('click', handleDialogClick);
    dialog?.addEventListener('keydown', handleDialogKeyDown);

    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
      dialog?.removeEventListener('click', handleDialogClick);
      dialog?.removeEventListener('keydown', handleDialogKeyDown);
      document.body.classList.remove('booking-modal-open');
    };
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        className="booking-information__trigger"
        type="button"
        onClick={openModal}
        aria-haspopup="dialog"
      >
        {copy.trigger}
      </button>

      <dialog
        ref={dialogRef}
        className={
          isVisible
            ? 'booking-information booking-information--visible'
            : 'booking-information'
        }
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onCancel={(event) => {
          event.preventDefault();
          closeModal();
        }}
        onClose={restorePage}
      >
        <div className="booking-information__panel">
          <button
            ref={closeButtonRef}
            className="booking-information__close"
            type="button"
            onClick={closeModal}
            aria-label={copy.close}
          >
            <span aria-hidden="true">×</span>
          </button>

          <div className="booking-information__content">
            <h2 className="booking-information__title" id={titleId}>
              {copy.title}
            </h2>

            <section aria-labelledby={`${titleId}-terms`}>
              <h3 id={`${titleId}-terms`}>{copy.termsTitle}</h3>
              <div id={descriptionId}>
                {copy.terms.map((paragraph, index) => (
                  <p key={paragraph}>
                    {index === 1 ? (
                      <EmailLinkedText text={paragraph} />
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby={`${titleId}-dietary`}>
              <h3 id={`${titleId}-dietary`}>{copy.dietaryTitle}</h3>
              <p>
                <EmailLinkedText text={copy.dietary} />
              </p>
            </section>
          </div>
        </div>
      </dialog>
    </>
  );
}
