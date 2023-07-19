import { css } from '@sam/theme/twind';

import { SudoFixedCssProps } from './sudo-fixed.definition';

export const SudoFixedCss = ({ margin, boundary }: SudoFixedCssProps) =>
  css({
    '&': {
      position: 'absolute',
      top: boundary.top,
      left: boundary.left,
      right: boundary.right,
      bottom: boundary.bottom,
      marginTop: margin,
    },
  });
