import { css, theme } from '@sam/theme/twind';

export const IndexLayoutCss = css({
  '&': {
    height: '100%',
  },
});

export const ContainerCss = css({
  '&': {
    display: 'flex',
    gap: theme('spacing.16'),
    padding: theme('spacing.16'),
  },
});
