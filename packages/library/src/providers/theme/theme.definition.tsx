import { ReactElement } from 'react';

export enum ThemeType {
  DEFAULT = 'default',
  GLASS = 'glass',
  NEOMORPHIC = 'neomorphic',
}

export type ThemeState = ThemeType;

export type ThemeHandlers = {
  setTheme: (theme: ThemeState) => void;
};

export type ThemeContextProps = {
  theme: String;
  handlers: ThemeHandlers;
};

export type ThemeProviderProps = { theme?: ThemeType; children: ReactElement };
