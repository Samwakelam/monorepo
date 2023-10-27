import { ReactElement } from 'react';
import { ButtonProps, ModalProps } from '../../atoms';

export interface ConfirmModalProps
  extends Pick<ModalProps, 'isOpen' | 'onRequestClose'> {
  title: string;
  description: string;
  accept: ButtonProps;
  decline: ButtonProps;
  children: ReactElement | ReactElement[];
}

export type ConfirmModalHandlers = {
  setIsProcessing: (isProcessing: boolean) => void;
};

export type ConfirmModalState = {
  isProcessing: boolean;
};
