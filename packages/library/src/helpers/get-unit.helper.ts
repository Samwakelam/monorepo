import { UnitType } from '@sam/types';

export const getUnit = (unitValue: UnitType) => {
  switch (unitValue) {
    case UnitType.FIXED:
      return 'px';
    case UnitType.RELATIVE:
      return 'rem';
    case UnitType.SCALE:
      return '%';
  }
};
