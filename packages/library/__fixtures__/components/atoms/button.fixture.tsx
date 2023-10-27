import { useSelect } from 'react-cosmos/fixture';
import { ReactNode } from 'react';

import { theme, tw, css, CSSRules, Directive, apply } from '@sam/theme/twind';
import { FillType } from '@sam/icons';

import {
  Button,
  ButtonIconProps,
  ButtonProps,
  ButtonType,
  ButtonVariant,
} from '../../../src';
import { useTheme } from '../../../src/providers';

export const containerStyles: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#fff',
    width: '100%',
    color: theme('colors.neutral.900'),

    h3: {
      color: theme('colors.neutral.300'),
    },
  },

  '@media (prefers-color-scheme: light)': { backgroundColor: '#fff' },
  '&[data-theme-mode="dark"]': {
    backgroundColor: theme('colors.neutral.900'),
    color: theme('colors.neutral.50'),
  },
});

export const backgroundBlack: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.neutral.900'),
    color: theme('colors.neutral.50'),
  },
});

type ButtonFixtureProps = {
  button: Omit<ButtonProps, 'children'>;
  children: ReactNode;
};

const ButtonFixture = ({
  button,
  children,
}: ButtonFixtureProps): JSX.Element => {
  const {
    theme: { mode },
  } = useTheme();

  const [Icon] = useSelect('Icon', {
    options: ['bin', 'clock', 'cross', 'pencil', 'plus', 'thumb-up'],
  });
  const [Fill] = useSelect('Icon Fill Style', {
    options: [FillType.OUTLINE, FillType.SOLID],
    defaultValue: FillType.SOLID,
  });

  const icon: ButtonIconProps = {
    ariaLabel: Icon,
    format: 'only',
    icon: Icon,
    fill: Fill,
  };

  return (
    <div
      className={tw(
        apply(containerStyles),
        button.buttonType === ButtonType.SECONDARY && backgroundBlack,
      )}
      data-theme-mode={mode}
    >
      <h3>Standard Button</h3>
      <Button {...button}>{children}</Button>
      <h3>Outline Button</h3>
      <Button {...button} variant={ButtonVariant.OUTLINE}>
        {children}
      </Button>
      <h3>Unstyled Button</h3>
      <Button {...button} variant={ButtonVariant.UNSTYLED}>
        {children}
      </Button>
      <h3>Gradient Button</h3>
      <Button {...button} variant={ButtonVariant.GRADIENT}>
        {children}
      </Button>
      <h3>Ghost Button</h3>
      <Button {...button} variant={ButtonVariant.GHOST}>
        {children}
      </Button>
      <h3>Disabled Button</h3>
      <Button {...button} disabled>
        {children}
      </Button>
      <h3>Loading Button</h3>
      <Button {...button} loading>
        {children}
      </Button>

      <h3>Icon Button</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...button} icon={icon}>
          {children}
        </Button>
        <Button {...button} icon={icon} variant={ButtonVariant.OUTLINE}>
          {children}
        </Button>
        <Button {...button} icon={icon} variant={ButtonVariant.UNSTYLED}>
          {children}
        </Button>
        <Button {...button} icon={icon} variant={ButtonVariant.GRADIENT}>
          {children}
        </Button>
        <Button {...button} icon={icon} variant={ButtonVariant.GHOST}>
          {children}
        </Button>
      </div>
      <h3>Icon at Start</h3>
      <Button {...button} icon={{ ...icon, format: 'start' }}>
        {children}
      </Button>
      <h3>Icon at End</h3>
      <Button {...button} icon={{ ...icon, format: 'end' }}>
        {children}
      </Button>
    </div>
  );
};

export default {
  ['Primary']: () => {
    return (
      <ButtonFixture
        button={{
          onClick: () => alert('Click'),
          buttonType: ButtonType.PRIMARY,
        }}
      >
        Primary Button
      </ButtonFixture>
    );
  },
  ['Secondary']: () => {
    return (
      <ButtonFixture
        button={{
          onClick: () => alert('Click'),
          buttonType: ButtonType.SECONDARY,
        }}
      >
        Secondary Button
      </ButtonFixture>
    );
  },
  ['Tertiary']: () => {
    return (
      <ButtonFixture
        button={{
          onClick: () => alert('Click'),
          buttonType: ButtonType.TERTIARY,
        }}
      >
        Tertiary Button
      </ButtonFixture>
    );
  },
  ['Success']: () => {
    return (
      <ButtonFixture
        button={{
          onClick: () => alert('Click'),
          buttonType: ButtonType.SUCCESS,
        }}
      >
        Success Button
      </ButtonFixture>
    );
  },
  ['Product']: () => {
    return (
      <ButtonFixture
        button={{
          onClick: () => alert('Click'),
          buttonType: ButtonType.PRODUCT,
        }}
      >
        Product Button
      </ButtonFixture>
    );
  },
};
