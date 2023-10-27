import { ReactElement } from 'react';

import { ImageProps } from '@sam/types';

export type ModalProps = {
  children: ReactElement | ReactElement[];
  modalTitle?: string;
  modalBanner?: ImageProps;
  isOpen: boolean;
  onRequestClose: () => void;
};
