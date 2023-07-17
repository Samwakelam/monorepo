import { ReactElement } from 'react';

export type CarouselProps = {
  visibleSlides?: number;
  isFullWidth?: boolean;
  children: ReactElement | ReactElement[];
};
