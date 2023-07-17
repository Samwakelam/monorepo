import { useSelect } from 'react-cosmos/fixture';

import { css, tw } from '@sam/theme/twind';

import { Group, GroupProps } from '../../../src';

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

const GroupFixture = ({
  collapseLayout,
  spacing,
}: Pick<GroupProps, 'collapseLayout' | 'spacing'>) => {
  const [numberOfColumns] = useSelect('Number of Columns', {
    options: ['1', '2', '3', '4'],
    defaultValue: '3',
  });

  const [numberOfChildren] = useSelect('Number of Slides', {
    options: ['1', '2', '3', '4', '5', '6'],
    defaultValue: '3',
  });

  const [layoutMode] = useSelect('Layout Mode', {
    options: ['fixed', 'flex'],
    defaultValue: 'flex',
  });

  const [direction] = useSelect('Direction', {
    options: ['forward', 'reverse'],
    defaultValue: 'forward',
  });

  return (
    <Group
      columns={parseInt(numberOfColumns)}
      layoutMode={layoutMode}
      collapseLayout={collapseLayout}
      direction={direction}
      spacing={spacing}
    >
      {getChildren(parseInt(numberOfChildren))}
    </Group>
  );
};

export default {
  ['Stack']: () => {
    return <GroupFixture collapseLayout="stack" />;
  },
  ['Scroll']: () => {
    return <GroupFixture collapseLayout="scroll" />;
  },
  ['Section Spacing']: () => {
    const [spacing] = useSelect('Spacing', {
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    });

    return <GroupFixture collapseLayout="stack" spacing={spacing} />;
  },
};
