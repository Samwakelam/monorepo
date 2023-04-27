import {
  ReactElement,
  useLayoutEffect,
  useRef,
  useState,
  Children,
  useEffect,
} from 'react';

import { tw } from '@sam/theme/twind';

import { CarouselProps } from './carousel.definition';

import * as S from './carousel.styles';

import { Button } from '../button';

export const Carousel = ({
  visibleSlides = 1,
  isFullWidth = false,
  children,
}: CarouselProps): ReactElement<CarouselProps> => {
  const carousel = useRef<HTMLDivElement>(null);

  const [triggers, setTriggers] = useState({
    previous: false,
    next: true,
  });

  const next = (multiplier: number): void => {
    if (!carousel.current) return;

    carousel.current.scrollBy({
      top: 0,
      left: (carousel.current!.children[0]?.clientWidth + 16) * multiplier,
      behavior: 'smooth',
    });
  };

  /**
   * @function basis
   * @description - sets the flex basis for the slide based on the number of slides in view.
   * @returns {number}
   */
  const basis = (): number => {
    const slides = visibleSlides;
    if (carousel.current) {
      const calc =
        (carousel.current.clientWidth -
          (isFullWidth ? 0 : 16) * (2 + (slides - 1))) /
        slides;
      return calc;
    }
    return 100;
  };

  useLayoutEffect(() => {
    if (!carousel.current) return;
    carousel.current.scrollTo(0, 0);

    const onScroll = () => {
      const _triggers = {
        previous: carousel.current!.scrollLeft > 0,
        next:
          carousel.current!.scrollLeft <
          carousel.current!.scrollWidth - carousel.current!.clientWidth - 16,
      };

      setTriggers(_triggers);
    };

    carousel.current.addEventListener('scroll', onScroll);

    return () => {
      carousel.current?.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className={tw(S.CarouselCss)}>
      <Button
        icon={{ icon: 'chevron-left', ariaLabel: 'previous' }}
        onClick={() => {
          next(-1);
        }}
        disabled={!triggers.previous}
      />

      <div className={tw(S.CarouselViewportCss(isFullWidth))} ref={carousel}>
        {Children.toArray(children).map((child, index) => {
          return (
            <div
              className={tw(S.CarouselSlideCss(basis()))}
              id={`carousel_slide_${index}`}
            >
              {child}
            </div>
          );
        })}
      </div>

      <Button
        icon={{ icon: 'chevron-right', ariaLabel: 'next' }}
        onClick={() => {
          next(1);
        }}
        disabled={!triggers.next}
      />
    </section>
  );
};
