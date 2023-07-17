import React, { ReactNode } from 'react';

import { IconProps } from '@sam/icons';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  SUCCESS = 'success',
  PRODUCT = 'product',
  GRADIENT = 'gradient',
  NONE = 'none',
}

export enum ButtonVariant {
  FILL = 'fill',
  LINE = 'line',
}

export interface ButtonIconProps extends IconProps {
  format: 'end' | 'start' | 'only';
}

export type ButtonProps = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonType?: ButtonType;
  variant?: ButtonVariant;
  className?: string;
  icon?: ButtonIconProps;
  disabled?: boolean;
  loading?: boolean;
};
