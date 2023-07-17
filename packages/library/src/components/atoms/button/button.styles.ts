import {
  CSSRules,
  Directive,
  theme,
  css,
  apply,
  keyframes,
} from '@sam/theme/twind';
import { spacing } from '@sam/theme';

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
    backgroundColor: theme('colors.neutral.900'),
    color: theme('colors.neutral.50'),
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
  '&:hover': {
    backgroundColor: theme('colors.neutral.700'),
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

    '& path': {
      fill: theme('colors.neutral.50'),
    },

    '&[data-stroke = true] path': {
      fill: 'transparent',
      stroke: theme('colors.neutral.50'),
    },
  },

  '&[data-variant = line]': {
    backgroundColor: theme('colors.neutral.50'),
    color: theme('colors.neutral.900'),
    outlineStyle: `solid`,
    outlineColor: theme('colors.neutral.900'),
    outlineOffset: `-0.25rem`,
    outlineWidth: theme('spacing.4'),

    '&:hover': {
      backgroundColor: theme('colors.neutral.200'),
    },

    '& svg': {
      '& path': {
        fill: theme('colors.neutral.900'),
      },

      '&[data-stroke = true] path': {
        fill: 'transparent',
        stroke: theme('colors.neutral.900'),
      },
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

export const SecondaryButtonCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.neutral.50'),
    color: theme('colors.neutral.900'),
  },
  '&:hover': {
    backgroundColor: theme('colors.neutral.200'),
  },
  '& svg': {
    '& path': {
      fill: theme('colors.neutral.900'),
    },

    '&[data-stroke = true] path': {
      stroke: theme('colors.neutral.900'),
    },
  },

  '&[data-variant = line]': {
    outlineColor: theme('colors.neutral.50'),
    backgroundColor: theme('colors.neutral.900'),
    color: theme('colors.neutral.50'),

    '& svg': {
      '& path': {
        fill: theme('colors.neutral.50'),
      },

      '&[data-stroke = true] path': {
        stroke: theme('colors.neutral.50'),
      },
    },

    '&:hover': {
      backgroundColor: theme('colors.neutral.700'),
    },
  },
});

export const TertiaryButtonCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.neutral.400'),
    color: theme('colors.neutral.900'),
  },
  '&:hover': {
    backgroundColor: theme('colors.neutral.500'),
  },
  '& svg': {
    '& path': {
      fill: theme('colors.neutral.900'),
    },

    '&[data-stroke = true] path': {
      stroke: theme('colors.neutral.900'),
    },
  },
  '&[data-variant = line]': {
    outlineColor: theme('colors.neutral.400'),
  },
});

export const SuccessButtonCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.green.600'),
    color: theme('colors.neutral.50'),
  },
  '&:hover': {
    backgroundColor: theme('colors.green.700'),
  },
  '& svg': {
    '& path': {
      fill: theme('colors.neutral.50'),
    },

    '&[data-stroke = true] path': {
      stroke: theme('colors.neutral.50'),
    },
  },
  '&[data-variant = line]': {
    outlineColor: theme('colors.green.600'),
  },
});

export const ProductButtonCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.sky.600'),
    color: theme('colors.neutral.50'),
  },
  '&:hover': {
    backgroundColor: theme('colors.sky.700'),
  },
  '& svg': {
    '& path': {
      fill: theme('colors.neutral.50'),
    },

    '&[data-stroke = true] path': {
      stroke: theme('colors.neutral.50'),
    },
  },
  '&[data-variant = line]': {
    outlineColor: theme('colors.sky.600'),
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

    '&[data-variant = line] path': {
      fill: theme('colors.neutral.900'),
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
  '&[data-variant = line]': {
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

export const UnstyledButtonCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: 'unset',
    color: theme('colors.neutral.900'),
    position: 'relative',
  },
  '& path': {
    fill: theme('colors.neutral.900'),
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
