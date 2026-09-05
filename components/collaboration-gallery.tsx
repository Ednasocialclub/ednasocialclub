'use client';

import Image from 'next/image';
import { useRef, useState, type TouchEvent } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { collaborations } from '@/lib/collaborations';
import type { Locale } from '@/lib/i18n';

type CollaborationGalleryProps = {
  label: string;
  locale: Locale;
  showLabel?: boolean;
  variant?: 'compact' | 'expanded';
};

export function CollaborationGallery({
  label,
  locale,
  showLabel = true,
  variant = 'compact',
}: CollaborationGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const previousLabel =
    locale === 'fi' ? 'Edellinen kuva' : 'Previous collaboration image';
  const nextLabel =
    locale === 'fi' ? 'Seuraava kuva' : 'Next collaboration image';
  const imageSizes =
    variant === 'expanded'
      ? '(max-width: 767px) calc(100vw - 2.5rem), 352px'
      : '(max-width: 767px) calc(100vw - 2.5rem), 300px';

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    if (!window.matchMedia('(max-width: 767px)').matches) return;
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (!window.matchMedia('(max-width: 767px)').matches) return;
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch) return;

    const distanceX = touch.clientX - start.x;
    const distanceY = touch.clientY - start.y;
    if (Math.abs(distanceX) < 40 || Math.abs(distanceX) <= Math.abs(distanceY)) {
      return;
    }

    if (distanceX < 0) api?.scrollNext();
    else api?.scrollPrev();
  }

  return (
    <Carousel
      className={`collaboration-gallery collaboration-gallery--${variant}`}
      setApi={setApi}
      opts={{
        align: 'start',
        containScroll: 'trimSnaps',
        slidesToScroll: 3,
        breakpoints: {
          '(max-width: 767px)': {
            slidesToScroll: 1,
            dragFree: false,
            skipSnaps: false,
            watchDrag: false,
          },
        },
      }}
      aria-label={label}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`collaboration-gallery__header${showLabel ? '' : ' collaboration-gallery__header--controls-only'}`}
      >
        {showLabel ? <p>{label}</p> : null}
        <div className="collaboration-gallery__controls">
          <CarouselPrevious
            className="collaboration-gallery__control"
            type="button"
            aria-label={previousLabel}
          />
          <CarouselNext
            className="collaboration-gallery__control"
            type="button"
            aria-label={nextLabel}
          />
        </div>
      </div>

      <CarouselContent className="collaboration-gallery__track">
        {collaborations.map((collaboration, index) => (
          <CarouselItem
            className="collaboration-gallery__item"
            key={collaboration.id}
            aria-label={`${index + 1} / ${collaborations.length}`}
          >
            <div className="collaboration-gallery__image">
              <Image
                src={collaboration.src}
                alt={collaboration.alt[locale]}
                fill
                sizes={imageSizes}
                style={{ objectPosition: collaboration.objectPosition }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
