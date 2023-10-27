import { ReactElement } from 'react';

import { IconProps } from '@sam/icons';
import { ImageProps } from '@sam/types';

import { ButtonProps } from '../button';

export interface CardIcon extends IconProps {
  detail?: {
    title: string;
    description: string;
  };
}

export type CardProps = {
  cta?: ButtonProps;
  showCta?: boolean;
  className?: string;
  contentClassName?: string;
  children?: ReactElement | ReactElement[];
  header?: ReactElement;
  icon?: CardIcon;
  image?: ImageProps;
  imageAsBackground?: boolean;
};
