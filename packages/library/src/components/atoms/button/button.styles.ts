import {
  CSSRules,
  Directive,
  theme,
  css,
  apply,
  keyframes,
} from '@sam/theme/twind';
import { spacing } from '@sam/theme';
import { ButtonStyleProps } from './button.definition';

export const buttonClasses: Directive<CSSRules> = apply`
    bg(
        black
        slate-900(hover:& focus:&)
    )
    focus:(ring(& cyan-500 2) outline(& none))
    text(white sm uppercase)
    font(bold montserrat)
    rounded-full px-8 py-3
`;

export const buttonCss: Directive<CSSRules> = css({
  '&': {
    textTransform: 'uppercase',
    fontWeight: theme('fontWeight.bold'),
    paddingTop: theme('spacing.12'),
    paddingBottom: theme('spacing.12'),
    paddingLeft: theme('spacing.32'),
    paddingRight: theme('spacing.32'),
    borderRadius: theme('spacing.32'),
    fontSize: theme('fontSize.14'),
    fontFamily: theme('fontFamily.montserrat'),
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&:focus': {
    outline: `${spacing[2]} solid`,
    outlineColor: theme('colors.pink.500'),
    outlineOffset: theme('spacing.2'),
  },
  '&:disabled': {
    backgroundImage: 'unset',
    backgroundColor: theme('colors.neutral.300'),
    color: theme('colors.neutral.50'),

    '&:hover': {
      backgroundColor: theme('colors.neutral.300'),
      color: theme('colors.neutral.50'),
    },
  },
  '& svg': {
    height: theme('fontSize.14'),

    '&[data-stroke = true]': {
      height: theme('fontSize.18'),
    },
  },
});

export const ButtonContentContainerCss = css({
  '&': {
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.8'),
  },
});

export const SolidButtonCss = ({ bg, color, hover }: ButtonStyleProps) =>
  css({
    '&': {
      backgroundColor: theme(`colors.${bg}`),
      color: theme(`colors.${color}`),
    },
    '&:hover': {
      backgroundColor: theme(`colors.${hover}`),
    },
    '& svg': {
      '& path': {
        fill: theme(`colors.${color}`),
      },

      '&[data-stroke = true] path': {
        stroke: theme(`colors.${color}`),
        fill: 'none',
      },
    },
  });

export const OutlineButtonCss = ({ bg, color, inherit }: ButtonStyleProps) =>
  css({
    '&': {
      outlineStyle: `solid`,
      outlineOffset: `-0.25rem`,
      outlineWidth: theme('spacing.4'),
      backgroundColor: 'transparent',
      outlineColor: theme(`colors.${bg}`),
      color: 'inherit',

      '& svg': {
        '& path': {
          fill: theme(`colors.${inherit}`),
        },

        '&[data-stroke = true] path': {
          stroke: theme(`colors.${inherit}`),
          fill: 'none',
        },
      },

      '&:hover': {
        backgroundColor:
          color.split('.')[1] < '500'
            ? theme(`colors.blackAlpha.300`)
            : theme('colors.whiteAlpha.300'),
      },
    },
  });

export const IconButtonCss: Directive<CSSRules> = css({
  '&': {
    paddingLeft: theme('spacing.12'),
    paddingRight: theme('spacing.12'),
    height: theme('spacing.44'),
    width: theme('spacing.44'),
    justifyContent: 'center',

    'span, i': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export const GradientButtonClasses: Directive<CSSRules> = apply`
  bg-gradient-to-br
  from-blue-600
  from-15%
  via-pink-600
  via-40%
  to-orange-600
  to-85%
  hover:text-neutral-200
  before:(content-[''])
`;

export const GradientButtonCss: Directive<CSSRules> = css({
  '& svg': {
    '&[data-stroke = true] path': {
      stroke: theme('colors.neutral.50'),
    },
  },

  '&:hover ': {
    path: {
      fill: theme('colors.neutral.200'),
    },
  },
});

export const GradientOutlineButtonCss = css({
  '&': {
    outline: 'unset',

    '& span': {
      zIndex: 1,
    },

    '&:before': {
      display: 'block',
      position: 'absolute',
      backgroundColor: theme('colors.neutral.50'),
      top: '4px',
      bottom: '4px',
      left: '4px',
      right: '4px',
      zIndex: '0',
      borderRadius: '1rem',
    },

    '&:hover': {
      color: 'initial',

      '&:before': {
        backgroundColor: theme('colors.neutral.200'),
      },
    },
  },
});

export const GhostButtonCss: (
  style: ButtonStyleProps,
) => Directive<CSSRules> = ({ color, inherit }) =>
  css({
    '&': {
      backgroundColor: 'unset',
      color: theme(`colors.${inherit}`),
      position: 'relative',
    },
    '& svg': {
      fill: theme(`colors.${inherit}`),

      '& path': {
        fill: theme(`colors.${inherit}`),
      },

      '&[data-stroke = true] path': {
        fill: 'none',
      },
    },
    '&:hover': {
      backgroundColor:
        color.split('.')[1] < '500'
          ? theme(`colors.blackAlpha.300`)
          : theme('colors.whiteAlpha.300'),
    },
  });

export const UnstyledButtonCss: (
  style: ButtonStyleProps,
) => Directive<CSSRules> = ({ inherit }) =>
  css({
    '&': {
      backgroundColor: 'unset',
      color: theme(`colors.${inherit}`),
      position: 'relative',
      padding: 'unset',
      borderRadius: 'unset',
    },
    '& svg': {
      fill: theme(`colors.${inherit}`),

      '& path': {
        fill: theme(`colors.${inherit}`),
      },

      '&[data-stroke = true] path': {
        fill: 'none',
      },
    },
  });

export const Spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(359deg)',
  },
});

export const LoadingCss = css({
  '&': {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '& svg': {
    animation: '1s linear infinite',
    animationName: Spin,
  },
  '& ~ span': {
    visibility: 'hidden',
  },
});
