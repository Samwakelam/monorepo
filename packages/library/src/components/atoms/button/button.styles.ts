import {
  CSSRules,
  Directive,
  theme,
  css,
  apply,
  keyframes,
} from '@sam/theme/twind';
import { font, spacing } from '@sam/theme';

export const buttonStyles: Directive<CSSRules> = apply`
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
    backgroundColor: theme('colors.neutral.300'),
    color: theme('colors.neutral.50'),
  },
  '&:disabled:hover': {
    backgroundColor: theme('colors.neutral.300'),
    color: theme('colors.neutral.50'),
  },
  '& svg': {
    height: theme('fontSize.14'),
  },
  '& path': {
    fill: theme('colors.neutral.50'),
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
  '& path': {
    fill: theme('colors.neutral.900'),
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
  '& path': {
    fill: theme('colors.neutral.900'),
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
  '& path': {
    fill: theme('colors.neutral.50'),
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
  '& path': {
    fill: theme('colors.neutral.50'),
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
