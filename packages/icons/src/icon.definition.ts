import {
  ArrowsType,
  ChevronsType,
  CirclesType,
  ClocksType,
  ListType,
  MediaType,
  MiscType,
  ShapesType,
  SymbolsType,
  UtilsType,
} from './maps';

export type IconType =
  | ArrowsType
  | ChevronsType
  | CirclesType
  | ClocksType
  | ListType
  | MediaType
  | MiscType
  | ShapesType
  | SymbolsType
  | UtilsType;

export enum FillType {
  OUTLINE = 'outline',
  SOLID = 'solid',
}

export type IconProps = {
  icon: IconType;
  ariaLabel: string;
  fill?: FillType;
  className?: string;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type IconMapProps = { [key: string]: () => JSX.Element };
