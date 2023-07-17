import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './button.component';

describe.only('button.component', () => {
  it('should show the button text sent in as children', () => {
    const button = <Button>Button</Button>;

    render(button);

    expect(screen.getByText('Button')).toBeDefined();
  });

  it('should have an aria label when an icon element is defined', () => {
    const button = (
      <Button icon={{ icon: 'plus', ariaLabel: 'plus', format: 'start' }}>
        Button
      </Button>
    );

    render(button);

    expect(screen.getByLabelText('plus')).toBeDefined();
  });

  it('should have an aria label of loading when a loading button is requested', () => {
    const button = (
      <Button
        icon={{ icon: 'plus', ariaLabel: 'plus', format: 'start' }}
        loading
      >
        Button
      </Button>
    );

    render(button);

    expect(screen.getByLabelText('loading')).toBeDefined();
  });

  it('should hide the second span component when the loading attribute is applied', () => {
    const button = (
      <Button
        icon={{ icon: 'plus', ariaLabel: 'plus', format: 'start' }}
        loading
      >
        Button
      </Button>
    );

    render(button);

    expect(screen.getByLabelText('loading').nextSibling).toBeFalsy();
  });

  it('should be disabled when attribute disabled is applied', () => {
    const button = <Button disabled>Button</Button>;

    render(button);

    // @ts-ignore
    expect(screen.getByRole('button').disabled).toBeTruthy();
  });

  it('should fire an onClick event when requested', () => {
    const action = vi.fn();
    const button = <Button onClick={() => action()}>Button</Button>;

    render(button);

    fireEvent.click(screen.getByText('Button'));

    expect(action).toBeCalled();
  });

  it.only('should NOT fire an onClick event when requested on a disabled button', () => {
    const action = vi.fn();
    const button = (
      <Button onClick={() => action()} disabled>
        Button
      </Button>
    );

    render(button);

    fireEvent.click(screen.getByText('Button'));

    expect(action).not.toBeCalled();
  });
});
