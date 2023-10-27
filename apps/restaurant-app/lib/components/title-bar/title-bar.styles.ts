import { css, theme } from '@sam/theme/twind';

export const TitleBarCss = css({
  '&': {
    display: 'flex',
    justifyContent: 'space-between',

    article: {
      width: theme('spacing.384'),
    },
  },
});
