import { ReactElement } from 'react';

import { Unit, Boundary } from '@sam/types';

export type SudoFixedProps = {
  stop: Unit;
  boundary: Boundary;
  className?: string;
  children?: ReactElement | ReactElement[];
};

export type SudoFixedCssProps = {
  margin: string;
  boundary: {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };
};

export type SudoFixedState = {
  scroll: number;
};

export type SudoFixedHandlers = {
  calculatePixels: (unit: Unit | null | undefined) => number;
  resolveBoundaries: (boundary: Boundary) => SudoFixedCssProps['boundary'];
};
