import { createContext, useContext, useState } from 'react';

import {
  ThemeContextProps,
  ThemeHandlers,
  ThemeProviderProps,
  ThemeState,
  ThemeType,
} from './theme.definition';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'default',
  handlers: {
    setTheme: () => {},
  },
});

export const useTheme = (): ThemeContextProps => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({
  theme = ThemeType.DEFAULT,
  children,
}: ThemeProviderProps) => {
  const [state, setState] = useState<ThemeState>(theme);

  const setTheme: ThemeHandlers['setTheme'] = (theme) => {
    setState(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state,
        handlers: {
          setTheme,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
