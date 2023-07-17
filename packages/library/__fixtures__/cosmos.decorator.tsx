import { ReactNode } from 'react';

import { setup, themeConfig, css, tw } from '@sam/theme/twind';

import { globalStyles } from '../src/styles/global';
import { ThemeProvider } from '../src/providers';

const viewPort = {
  height: '100vh',
};

export default ({ children }: { children: ReactNode }) => {
  setup(themeConfig);

  return (
    <ThemeProvider>
      <div className={tw(css(globalStyles))} style={viewPort}>
        {children}
      </div>
    </ThemeProvider>
  );
};
