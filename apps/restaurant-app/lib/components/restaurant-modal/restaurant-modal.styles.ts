import { css, theme } from '@sam/theme/twind';

export const RestaurantModalCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.16'),
  },
});

export const ReviewsCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.8'),
  },
});

export const AddReviewButtonCss = css({
  '&': {
    display: 'flex',
    position: 'absolute',
  },
});
