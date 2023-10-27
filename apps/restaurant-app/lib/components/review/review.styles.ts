import { css, theme } from '@sam/theme/twind';

export const ReviewCardCss = css({
  '&': {
    display: 'flex',
  },
});

export const ReviewCss = css({
  '&': {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    flexFlow: 'column',
    gap: theme('spacing.8'),

    'h6, p:last-child': { color: theme('colors.neutral.400') },
  },
});

export const ReasonCss = css({
  '&': {
    fontSize: theme('fontSize.20'),
  },
});
