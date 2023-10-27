import React, { ReactNode } from 'react';

import { IconProps } from '@sam/icons';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  SUCCESS = 'success',
  PRODUCT = 'product',
}

export enum ButtonVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
  GRADIENT = 'gradient',
  UNSTYLED = 'unstyled',
  GHOST = 'ghost',
}

export interface ButtonIconProps extends IconProps {
  format: 'end' | 'start' | 'only';
}

type ButtonStyleKeyType = 'bg' | 'color' | 'hover' | 'inherit';

export type ButtonStyleConfigProps = Record<
  ButtonStyleKeyType,
  [string, string]
>;

export type ButtonStyleProps = Record<ButtonStyleKeyType, string>;

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
