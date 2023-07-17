import { ButtonProps, ModalProps } from '../../atoms';

export interface ConfirmModalProps
  extends Pick<ModalProps, 'isOpen' | 'onRequestClose'> {
  title: string;
  description: string;
  accept: ButtonProps;
  decline: ButtonProps;
}

export type ConfirmModalHandlers = {
  setIsProcessing: (isProcessing: boolean) => void;
};

export type ConfirmModalState = {
  isProcessing: boolean;
};
