import { ReactElement } from 'react';

import { SideMenuLinkProps } from '../side-menu-link';

export type SideMenuProps = {
  subtitle?: string;
  title?: string;
  links: SideMenuLinkProps[];
  isOpen: boolean;
  isFixed?: boolean;
  onRequestClose: () => void;
  children?: ReactElement;
};
