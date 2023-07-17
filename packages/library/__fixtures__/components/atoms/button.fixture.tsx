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

export const containerStyles: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',

    h3: {
      color: theme('colors.neutral.300'),
    },
  },
});

export const backgroundBlack: Directive<CSSRules> = css({
  '&': {
    backgroundColor: '#000',
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
  const [Icon] = useSelect('Icon', {
    options: ['bin', 'clock', 'cross', 'pencil', 'plus', 'thumb-up'],
  });
  const [Fill] = useSelect('Icon Fill Style', {
    options: [FillType.OUTLINE, FillType.SOLID],
    defaultValue: FillType.SOLID,
  });

  const icon: ButtonIconProps = {
    ariaLabel: 'icon',
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
    >
      <h3>Standard Button</h3>
      <Button {...button}>{children}</Button>
      <h3>Outline Button</h3>
      <Button {...button} variant={ButtonVariant.LINE}>
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

      {icon && (
        <>
          <h3>Icon Button</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button {...button} icon={icon}>
              {children}
            </Button>
            <Button {...button} icon={icon} variant={ButtonVariant.LINE}>
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
        </>
      )}
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
  ['Gradient']: () => {
    return (
      <ButtonFixture
        button={{
          onClick: () => alert('Click'),
          buttonType: ButtonType.GRADIENT,
        }}
      >
        Gradient Button
      </ButtonFixture>
    );
  },
  ['None']: () => {
    return (
      <ButtonFixture
        button={{
          onClick: () => alert('Click'),
          buttonType: ButtonType.NONE,
        }}
      >
        No Style Button
      </ButtonFixture>
    );
  },
};
