import { apply, CSSRules, Directive, tw } from '@sam/theme/twind';
import { Icon } from '@sam/icons';

import { ThemeMode, useTheme } from '../../../providers';

import {
  ButtonProps,
  ButtonStyleConfigProps,
  ButtonStyleProps,
  ButtonType,
  ButtonVariant,
} from './button.definition';

import * as S from './button.styles';

export const Button = ({
  buttonType = ButtonType.PRIMARY,
  children,
  className,
  onClick,
  icon,
  disabled = false,
  loading = false,
  variant = ButtonVariant.SOLID,
}: ButtonProps) => {
  const {
    theme: { mode },
  } = useTheme();

  return (
    <button
      onClick={onClick}
      className={tw(
        apply(
          resolveButtonStyles(buttonType, mode, variant),
          icon &&
            icon.format === 'only' &&
            variant !== ButtonVariant.UNSTYLED &&
            S.IconButtonCss,
        ),
        className,
      )}
      disabled={disabled}
    >
      {loading && (
        <span className={tw(S.LoadingCss)}>
          {loading && <Icon icon="spinner" ariaLabel="loading" />}
        </span>
      )}
      <span className={tw(S.ButtonContentContainerCss)} aria-hidden={loading}>
        {icon?.format === 'start' && <Icon {...icon} />}
        {children && icon?.format !== 'only' && children}
        {icon && icon.format === 'only' && <Icon {...icon} />}
        {icon?.format === 'end' && <Icon {...icon} />}
      </span>
    </button>
  );
};

const styleConfig: Record<ButtonType, ButtonStyleConfigProps> = {
  [ButtonType.PRIMARY]: {
    bg: ['neutral.900', 'neutral.50'],
    color: ['neutral.50', 'neutral.900'],
    hover: ['neutral.700', 'neutral.200'],
    inherit: ['neutral.900', 'neutral.50'],
  },
  [ButtonType.SECONDARY]: {
    bg: ['neutral.50', 'indigo.900'],
    color: ['neutral.900', 'neutral.50'],
    hover: ['neutral.200', 'indigo.700'],
    inherit: ['neutral.50', 'neutral.900'],
  },
  [ButtonType.TERTIARY]: {
    bg: ['neutral.400', 'neutral.600'],
    color: ['neutral.900', 'neutral.50'],
    hover: ['neutral.300', 'neutral.700'],
    inherit: ['neutral.900', 'neutral.50'],
  },
  [ButtonType.SUCCESS]: {
    bg: ['green.600', 'green.700'],
    color: ['neutral.50', 'neutral.50'],
    hover: ['green.700', 'green.800'],
    inherit: ['neutral.900', 'neutral.50'],
  },
  [ButtonType.PRODUCT]: {
    bg: ['sky.600', 'sky.700'],
    color: ['neutral.50', 'neutral.50'],
    hover: ['sky.700', 'sky.800'],
    inherit: ['neutral.50', 'neutral.900'],
  },
};

const resolveButtonStyles = (
  type: ButtonType,
  mode: ThemeMode,
  variant: ButtonVariant,
): Directive<CSSRules> | Directive<CSSRules>[] => {
  const index = mode === ThemeMode.LIGHT ? 0 : 1;
  const style = {
    bg: styleConfig[type].bg[index],
    color: styleConfig[type].color[index],
    hover: styleConfig[type].hover[index],
    inherit: styleConfig[type].inherit[index],
  };

  const button = [S.buttonCss];

  if (variant === ButtonVariant.OUTLINE) button.push(S.OutlineButtonCss(style));

  if (variant === ButtonVariant.SOLID) button.push(S.SolidButtonCss(style));

  if (variant === ButtonVariant.GRADIENT)
    button.push(S.GradientButtonClasses, S.GradientButtonCss);

  if (variant === ButtonVariant.UNSTYLED)
    button.push(S.UnstyledButtonCss(style));

  if (variant === ButtonVariant.GHOST) button.push(S.GhostButtonCss(style));

  return button;
};
