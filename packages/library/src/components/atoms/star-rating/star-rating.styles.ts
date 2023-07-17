import { css, theme } from '@sam/theme/twind';

export const StarRatingCss = css({
  '&': {
    display: 'flex',
    gap: theme('spacing.4'),

    button: {
      padding: 0,
    },
  },
});
