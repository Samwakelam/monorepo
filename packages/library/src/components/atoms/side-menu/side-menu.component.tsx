import { useEffect, useRef } from 'react';
import ReactModal from 'react-modal';

import { tw } from '@sam/theme/twind';

import { Button, ButtonType, ButtonVariant, SideMenuLink } from '..';

import { SideMenuProps } from './side-menu.definition';

import * as S from './side-menu.styles';

export const SideMenu = ({
  subtitle,
  title,
  links,
  children,
  isOpen,
  isFixed = false,
  onRequestClose,
}: SideMenuProps) => {
  const modal = useRef(null);

  useEffect(() => {
    // FIXES Warning: react-modal: App element is not defined. Please use Modal.setAppElement(el) or set appElement={el}
    // This is due to using serverside rendering.
    ReactModal.setAppElement('#side-menu-parent');
  }, []);

  return (
    <aside id="side-menu-parent" className={tw(S.SideMenuParentCss)}>
      <ReactModal
        ref={modal}
        className={tw(
          S.SideMenuCss,
          isFixed && S.SideMenuFixedCss,
          isOpen && S.BeforeCloseCss,
        )}
        overlayClassName={tw(
          S.OverlayCss,
          S.OverlayStyles,
          isFixed && S.OverlayFixedCss,
        )}
        isOpen={true}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={250}
        parentSelector={() => document.querySelector('#side-menu-parent')!}
        data-open={isOpen}
        aria-hidden={isOpen}
      >
        <div className={tw(S.TitleCss)}>
          {(title || subtitle) && <h4>{title ? title : subtitle}</h4>}
          {subtitle && title && <h6>{subtitle}</h6>}
        </div>
        <Button
          className={tw(S.CloseTriggerCss, isFixed && S.CloseTriggerFixedCss)}
          icon={{ icon: 'cross', ariaLabel: 'close menu', format: 'only' }}
          onClick={() => onRequestClose()}
          buttonType={ButtonType.PRIMARY}
          variant={ButtonVariant.GHOST}
        />
        <div className={tw(S.LinksContainerCss)}>
          {links.map((link, index) => (
            <SideMenuLink key={`${index}-${link.href}`} {...link} />
          ))}
        </div>
        <div>{children}</div>
      </ReactModal>
    </aside>
  );
};
