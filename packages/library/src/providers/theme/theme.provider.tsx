import { createContext, useContext, useState } from 'react';

import {
  ThemeContextProps,
  ThemeHandlers,
  ThemeMode,
  ThemeProviderProps,
  ThemeState,
  ThemeType,
} from './theme.definition';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: {
    type: ThemeType.DEFAULT,
    mode: ThemeMode.LIGHT,
  },
  handlers: {
    setThemeType: () => {},
    setDarkMode: () => {},
  },
});

export const useTheme = (): ThemeContextProps => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({
  isDarkMode,
  theme = ThemeType.DEFAULT,
  children,
}: ThemeProviderProps) => {
  const [state, setState] = useState<ThemeState>({
    type: theme,
    mode: isDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT,
  });

  const setThemeType: ThemeHandlers['setThemeType'] = (theme) => {
    setState((prev) => ({
      ...prev,
      theme,
    }));
  };

  const setDarkMode: ThemeHandlers['setDarkMode'] = (mode) => {
    setState((prev) => ({
      ...prev,
      mode,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: { ...state },
        handlers: {
          setThemeType,
          setDarkMode,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
