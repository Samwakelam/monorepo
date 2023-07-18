export enum UnitType {
  FIXED = 'fixed',
  RELATIVE = 'relative',
  SCALE = 'scale',
}

export type Unit = {
  value: number;
  unit: UnitType;
};
