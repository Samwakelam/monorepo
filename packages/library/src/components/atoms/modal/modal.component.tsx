import { ReactElement, useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';

import { tw } from '@sam/theme/twind';

import { Button, ButtonType } from '../button';

import { ModalProps } from './modal.definition';

import * as S from './modal.styles';

export const Modal = ({
  modalTitle,
  modalBanner,
  isOpen = false,
  onRequestClose,
  children,
}: ModalProps): ReactElement<ModalProps> => {
  const modal = useRef(null);

  useEffect(() => {
    // FIXES Warning: react-modal: App element is not defined. Please use Modal.setAppElement(el) or set appElement={el}
    // This is due to using serverside rendering.
    ReactModal.setAppElement('body');
  }, []);

  return (
    <ReactModal
      ref={modal}
      className={tw(S.ModalCss)}
      overlayClassName={{
        base: tw(S.OverlayCss, S.OverlayClasses),
        afterOpen: tw(S.OverlayAfterOpenCss),
        beforeClose: tw(S.OverlayBeforeCloseCss),
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={300}
    >
      <div className={tw(S.HeaderCss)}>
        {modalTitle && <h5>{modalTitle}</h5>}
        <Button
          buttonType={ButtonType.SECONDARY}
          icon={{ icon: 'cross', ariaLabel: 'close', format: 'only' }}
          onClick={onRequestClose}
        />
      </div>

      {modalBanner && (
        <img
          src={modalBanner.src}
          alt={modalBanner.alt}
          className={tw(S.ImageCss)}
        />
      )}
      <div className={tw(S.ContentCss(!!modalBanner))}>{children}</div>
    </ReactModal>
  );
};
