import { ReactElement } from 'react';

export enum ThemeType {
  DEFAULT = 'default',
  GLASS = 'glass',
  NEOMORPHIC = 'neomorphic',
}

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeState = {
  type: ThemeType;
  mode: ThemeMode;
};

export type ThemeHandlers = {
  setThemeType: (theme: ThemeState['type']) => void;
  setDarkMode: (theme: ThemeState['mode']) => void;
};

export type ThemeContextProps = {
  theme: ThemeState;
  handlers: ThemeHandlers;
};

export type ThemeProviderProps = {
  isDarkMode: boolean;
  theme?: ThemeType;
  children: ReactElement;
};
