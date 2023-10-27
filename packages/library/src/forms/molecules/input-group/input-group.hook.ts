import { useState } from 'react';

import { Hook } from '@sam/types';

import {
  FieldValidators,
  InputGroupHandlers,
  InputGroupState,
} from './input-group.definition';

export const useInputGroup = (
  initialValue: string,
  validators: FieldValidators,
): Hook<InputGroupState, InputGroupHandlers> => {
  const [state, setState] = useState<InputGroupState>({
    value: initialValue,
    error: {
      hasError: false,
      messages: [],
    },
    isValid: false,
  });

  const onChange = (
    e?: React.ChangeEvent<HTMLInputElement>,
    element?: HTMLInputElement,
  ): void => {
    let inputField;
    if (e) {
      e.stopPropagation();
      e.preventDefault();

      inputField = e.currentTarget as HTMLInputElement;
    }

    if (element) {
      inputField = element;
    }

    if (!inputField) return;

    const inputValue = inputField.value;

    const errorMessages: (string | undefined)[] = validators.map(
      ([validator, message]) => {
        const isValid = validator(inputValue);

        if (!isValid) {
          return message;
        }
      },
    );

    setState((prevState) => ({
      ...prevState,
      value: inputValue,
      error: {
        hasError: !errorMessages.every((entry) => typeof entry === 'undefined'),
        messages: errorMessages,
      },
      isValid: errorMessages.every((entry) => typeof entry === 'undefined'),
    }));
  };

  const onClearValue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.stopPropagation();
    e.preventDefault();

    const inputField = e.currentTarget.previousSibling as HTMLInputElement;

    inputField.value = '';

    onChange(undefined, inputField);
  };

  const updateValue = (value: string) => {
    setState((prev) => ({
      ...prev,
      value,
    }));
  };

  return {
    state,
    handlers: { onChange, onClearValue, updateValue },
  };
};
