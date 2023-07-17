import { useSelect } from 'react-cosmos/fixture';

import { css, tw } from '@sam/theme/twind';

import { Carousel } from '../../../src';

const SlideCss = (even: boolean) =>
  css({
    '&': {
      height: '24rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: even ? 'papayawhip' : 'pink',
    },
  });

const getChildren = (number: number) => {
  return Array.from({ length: number }, (_, index) => {
    return (
      <div
        className={tw(SlideCss(index % 2 === 0))}
        key={`carousel-fixture-slide-${index}`}
      >
        <h1>Slide {index + 1}</h1>
      </div>
    );
  });
};

export default {
  ['Single slide']: () => {
    return <Carousel>{getChildren(3)}</Carousel>;
  },
  ['Multi slides']: () => {
    const [visibleSlides] = useSelect('Visible Slides', {
      options: ['2', '3', '4'],
      defaultValue: '2',
    });

    const [numberOfChildren] = useSelect('Number of Slides', {
      options: ['3', '4', '5', '6'],
      defaultValue: '3',
    });

    return (
      <Carousel visibleSlides={parseInt(visibleSlides)}>
        {getChildren(parseInt(numberOfChildren))}
      </Carousel>
    );
  },
  ['Is Full Width']: () => {
    return <Carousel isFullWidth>{getChildren(4)}</Carousel>;
  },
};
