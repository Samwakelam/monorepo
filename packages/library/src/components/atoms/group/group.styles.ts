import { css, theme, Directive, CSSRules, Context } from '@sam/theme/twind';

import { BasisProps } from './group.definition';

export const GroupCss = (
  spacing: (context: Context) => string | undefined,
): Directive<CSSRules> =>
  css({
    '&': {
      display: 'flex',
      gap: spacing,
    },
  });

export const StackCss = (reverse: boolean) =>
  css({
    '&': {
      flexDirection: reverse ? 'column-reverse' : 'column',
    },

    '@screen md': {
      width: 'unset',
    },

    '@screen lg': {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

export const ScrollCss = (reverse: boolean) =>
  css({
    '&': {
      margin: 0,
      padding: theme('spacing.16'),
      flexDirection: reverse ? 'row-reverse' : 'row',
      flexWrap: 'nowrap',
      width: '100%',
      alignItems: 'center',

      overflowX: 'scroll',
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth',
      scrollPadding: theme('spacing.16'),
      overflowY: 'hidden',
    },

    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      height: theme('spacing.16'),
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme('colors.neutral.300'),
      borderRadius: theme('spacing.8'),

      '&:hover': {
        backgroundColor: theme('colors.neutral.400'),
      },
    },

    '&::-webkit-scrollbar-button:single-button': {
      backgroundColor: 'transparent',
      width: theme('spacing.32'),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: theme('spacing.8'),

      '&:hover': {
        backgroundColor: theme('colors.neutral.200'),
      },
    },

    '&::-webkit-scrollbar-button:single-button:horizontal:increment': {
      backgroundImage: `url("data:image/svg+xml;utf-8, <svg width='6' height='12' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path  fillRule='evenodd'  clipRule='evenodd'  d='M0 2.10356L1.82005 0.166687L12 11L1.82005 21.8334L0 19.8965L8.3599 11L0 2.10356Z'  fill='black'/></svg>")`,
    },

    '&::-webkit-scrollbar-button:single-button:horizontal:decrement': {
      backgroundImage: `url("data:image/svg+xml;utf-8, <svg width='6' height='12' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12 2.10356L10.1799 0.166687L0 11L10.1799 21.8334L12 19.8965L3.6401 11L12 2.10356Z' fill='black' /></svg>")`,
    },

    '@screen lg': {
      padding: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',

      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  });

export const GroupSlideCss = (basis: BasisProps) =>
  css({
    '&': {
      display: 'flex',
      width: '100%',
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: `${basis.mob * (80 / 100)}px`,
    },

    '@screen sm': {
      flexBasis: `${basis.md * (90 / 100)}px`,
    },

    '@screen md': {
      width: 'unset',
    },

    '@screen lg': {
      '&': {
        flexBasis: `${basis.lg}px`,
        flexGrow: 1,
      },
    },
  });

export const FixedLayoutCss = css({
  '@screen lg': {
    '&': {
      flexGrow: 0,
    },
  },
});
