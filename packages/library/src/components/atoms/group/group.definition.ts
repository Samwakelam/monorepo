import { ReactElement, RefObject } from 'react';

export type GroupProps = {
  columns: number;
  layoutMode?: 'fixed' | 'flex';
  direction?: 'forward' | 'reverse';
  collapseLayout?: 'stack' | 'scroll';
  spacing?: 'sm' | 'md' | 'lg';
  children: ReactElement | ReactElement[];
};

export type BasisProps = { mob: number; md: number; lg: number };

export type GroupState = {};

export type GroupHandlers = {
  getBasis: () => BasisProps;
  getColumnAdjustment: () => number;
  resolveSpacing: () => string;
};

export interface GroupHookProps
  extends Pick<GroupProps, 'columns' | 'collapseLayout' | 'children'> {
  group: RefObject<HTMLDivElement>;
}
