import { css, theme } from '@sam/theme/twind';

export const RestaurantCardCss = css({
  '&': {
    display: 'flex',
    justifyContent: 'space-between',

    article: {
      width: '23rem',
    },
  },
});

export const ButtonBox = css({
  '&': {
    display: 'flex',
    gap: theme('spacing.8'),
  },
});
