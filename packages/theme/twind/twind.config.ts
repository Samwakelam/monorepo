import { Configuration } from 'twind';
import { content } from '@twind/content';

import { colours, font, gradient, spacing } from '../src';
import { parseFontSize } from './helpers/parse-font-size.helper';

export const themeConfig: Configuration = {
  plugins: { content },
  theme: {
    spacing: {
      ...spacing,
    },
    fontSize: {
      ...parseFontSize(),
    },
    fontFamily: {
      ...font.fontFamily,
    },
    extend: {
      colors: {
        ...colours,
      },
      boxShadow: {
        card: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        drawer: '0px 4px 15px rgba(0, 0, 0, 0.4)',
        tag: '0px 0px 10px rgba(0, 0, 0, 0.4)',
      },
      gradientColorStops: {
        ...gradient,
      },
    },
  },
  preflight: false,
  // preflight: (preflight: any) =>
  //   css({
  //     ...preflight,
  //     globalStyles,
  //   }),
};
