import { tw } from '@sam/theme/twind';

import { Button, ButtonType, Modal } from '../../atoms';

import { ConfirmModalProps } from './confirm-modal.definition';

import * as S from './confirm-modal.styles';

export const ConfirmModal = ({
  title,
  description,
  accept,
  decline,
  isOpen,
  children,
  onRequestClose,
}: ConfirmModalProps) => {
  return (
    <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
      <div className={tw(S.ConfirmModalCss)}>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <div className={tw(S.ButtonWrapperCss)}>
          <Button {...accept} />
          <Button buttonType={ButtonType.TERTIARY} {...decline} />
        </div>
      </div>
    </Modal>
  );
};
