import { describe, expect, it } from 'vitest';

import { UnitType } from '@sam/types';

import { getUnit } from './get-unit.helper';

describe('getUnit', () => {
  it('should return px', () => {
    const unitType = UnitType.FIXED;

    const unit = getUnit(unitType);

    expect(unit).toEqual('px');
  });

  it('should return rem', () => {
    const unitType = UnitType.RELATIVE;

    const unit = getUnit(unitType);

    expect(unit).toEqual('rem');
  });

  it('should return px', () => {
    const unitType = UnitType.SCALE;

    const unit = getUnit(unitType);

    expect(unit).toEqual('%');
  });
});
