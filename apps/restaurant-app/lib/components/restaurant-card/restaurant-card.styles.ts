import { css, theme } from '@sam/theme/twind';

export const RestaurantCardCss = css({
  '&': {
    borderRadius: '20px 100px / 100px 20px',
  },
});

export const RestaurantCardContentCss = css({
  '&': {
    gap: theme('spacing.4'),
  },
});

export const ButtonBox = css({
  '&': {
    position: 'absolute',
    right: theme('spacing.24'),
    bottom: theme('spacing.40'),
    display: 'flex',
    gap: theme('spacing.8'),
    alignSelf: 'flex-end',

    svg: {
      height: theme('fontSize.18'),
    },
  },
});

export const TagsBox = css({
  '&': {
    position: 'absolute',
    right: theme('spacing.24'),
    top: theme('spacing.40'),
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-end',
    gap: theme('spacing.4'),
  },
});

export const WhiteTextCss = css({
  '&': {
    path: {
      fill: theme('colors.neutral.50'),
    },
  },
});
