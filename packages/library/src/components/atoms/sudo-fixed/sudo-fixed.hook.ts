import { useEffect, useState } from 'react';

import { Hook, UnitType } from '@sam/types';

import { getUnit } from '../../../helpers';

import { SudoFixedHandlers, SudoFixedState } from './sudo-fixed.definition';

export const useSudoHook = (): Hook<SudoFixedState, SudoFixedHandlers> => {
  const [state, setState] = useState<SudoFixedState>({
    scroll: 0,
  });

  const handleScroll = () => {
    setState((prev) => ({
      ...prev,
      scroll: window.scrollY,
    }));
  };

  const calculatePixels: SudoFixedHandlers['calculatePixels'] = (unit) => {
    if (!unit) return 0;

    const { unit: unitType, value } = unit;

    switch (unitType) {
      case UnitType.FIXED:
        return value;
      case UnitType.RELATIVE:
        return value * 16;
      default:
        return 0;
    }
  };

  const resolveBoundaries: SudoFixedHandlers['resolveBoundaries'] = (
    boundary,
  ) => {
    return {
      top: `${state.scroll + calculatePixels(boundary.top)}px`,
      bottom: boundary.bottom
        ? `${boundary.bottom.value}${getUnit(boundary.bottom.unit)}`
        : 'unset',
      left: boundary.left
        ? `${boundary.left.value}${getUnit(boundary.left.unit)}`
        : 'unset',
      right: boundary.right
        ? `${boundary.right.value}${getUnit(boundary.right.unit)}`
        : 'unset',
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    state,
    handlers: {
      calculatePixels,
      resolveBoundaries,
    },
  };
};
