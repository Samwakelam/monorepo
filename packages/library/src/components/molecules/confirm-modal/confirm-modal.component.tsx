import { tw } from '@sam/theme/twind';

import { Button, Modal } from '../../atoms';

import { ConfirmModalProps } from './confirm-modal.definition';

import * as S from './confirm-modal.styles';

export const ConfirmModal = ({
  title,
  description,
  accept,
  decline,
  isOpen,
  onRequestClose,
}: ConfirmModalProps) => {
  return (
    <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
      <div className={tw(S.ConfirmModalCss)}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={tw(S.ButtonWrapperCss)}>
          <Button {...accept} />
          <Button {...decline} />
        </div>
      </div>
    </Modal>
  );
};
