import { ReactElement } from 'react';

export type ModalProps = {
  children: ReactElement;
  modalTitle?: string;
  isOpen: boolean;
  onRequestClose: () => void;
};
