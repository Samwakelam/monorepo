import { ReactElement, ReactNode, useEffect } from 'react';
import { useSelect } from 'react-cosmos/fixture';

import { setup, themeConfig, tw } from '@sam/theme/twind';

import { globalStyles } from '../src/styles/global';
import { ThemeMode, ThemeProvider, useTheme } from '../src/providers';

const viewPort = {
  height: '100vh',
};

const DarkThemeSwitch = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const {
    handlers: { setDarkMode },
  } = useTheme();

  const [isDarkMode] = useSelect('Dark Mode', {
    options: [ThemeMode.LIGHT, ThemeMode.DARK],
  });

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return children;
};

export default ({ children }: { children: ReactNode }) => {
  setup(themeConfig);
  const {
    handlers: { setDarkMode },
  } = useTheme();
  const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const getCurrentTheme = () => darkThemeMediaQuery.matches;

  const mediaQueryListener = (e: MediaQueryListEvent) => {
    const isDarkMode = e.matches;
    setDarkMode(isDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT);
  };

  useEffect(() => {
    darkThemeMediaQuery.addEventListener('change', mediaQueryListener);

    return () =>
      darkThemeMediaQuery.removeEventListener('change', mediaQueryListener);
  }, []);

  return (
    <ThemeProvider isDarkMode={getCurrentTheme()}>
      <DarkThemeSwitch>
        <div className={tw(globalStyles)} style={viewPort}>
          {children}
        </div>
      </DarkThemeSwitch>
    </ThemeProvider>
  );
};
