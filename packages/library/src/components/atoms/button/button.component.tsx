import { apply, CSSRules, Directive, tw } from '@sam/theme/twind';
import { Icon } from '@sam/icons';

import { useTheme } from '../../../providers';

import { ButtonProps, ButtonType, ButtonVariant } from './button.definition';

import * as S from './button.styles';

export const Button = ({
  buttonType = ButtonType.PRIMARY,
  children,
  className,
  onClick,
  icon,
  disabled = false,
  loading = false,
  variant = ButtonVariant.FILL,
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={tw(
        apply(
          resolveButtonType(buttonType),
          icon &&
            icon.format === 'only' &&
            buttonType !== ButtonType.NONE &&
            S.IconButtonCss,
        ),
        className,
      )}
      disabled={disabled}
      data-variant={variant}
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

const resolveButtonType = (
  type: ButtonType,
): Directive<CSSRules> | Directive<CSSRules>[] => {
  switch (type) {
    case ButtonType.SECONDARY: {
      return [S.buttonCss, S.SecondaryButtonCss];
    }
    case ButtonType.TERTIARY: {
      return [S.buttonCss, S.TertiaryButtonCss];
    }
    case ButtonType.SUCCESS: {
      return [S.buttonCss, S.SuccessButtonCss];
    }
    case ButtonType.PRODUCT: {
      return [S.buttonCss, S.ProductButtonCss];
    }
    case ButtonType.NONE: {
      return S.UnstyledButtonCss;
    }
    case ButtonType.GRADIENT: {
      return [S.buttonCss, S.GradientButtonCss, S.GradientButtonClasses];
    }
    default: {
      return S.buttonCss;
    }
  }
};
