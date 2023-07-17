import { tw } from '@sam/theme/twind';

import { SideMenuLinkProps } from './side-menu-link.definition';

import * as S from './side-menu-link.styles';

export const SideMenuLink = ({
  href,
  isActive,
  label,
}: SideMenuLinkProps) => {
  return (
    <a
      href={href}
      className={tw(S.SideMenuLinkCss, isActive && S.SideMenuLinkActiveCss)}
    >
      {label}
    </a>
  );
};
