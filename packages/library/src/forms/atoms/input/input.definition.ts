import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: 'email' | 'text' | 'password' | 'tel' | 'number';
  hasError: boolean;
  isValid: boolean;
}
