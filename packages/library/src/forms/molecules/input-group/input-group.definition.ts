import React from 'react';

import { InputProps } from '../../atoms';
import { LabelProps } from '../../atoms/label/label.definition';

export enum ValidationType {
  EMAIL = 'email',
  GENERIC_STRING = 'generic string',
  LINK = 'link',
  SLUG = 'slug',
}

export type FieldValidators = Array<[(value: string) => boolean, string]>;

export type InputGroupState = {
  value: string;
  error: {
    hasError: boolean;
    messages: (string | undefined)[];
  };
  isValid: boolean;
};

export type InputGroupHandlers = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearValue: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  updateValue: (value: string) => void;
};

export interface InputGroupProps
  extends Omit<InputProps, 'hasError' | 'isValid' | 'label'> {
  id?: string;
  associatedForm?: string;
  label?: LabelProps;
  name: string;
  clearField?: boolean;
  state: InputGroupState;
  handlers: InputGroupHandlers;
}
