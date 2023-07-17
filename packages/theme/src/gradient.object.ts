import { colours } from './colours.object';

export type Gradient = {
  [key: string]: {
    [key: string]: string;
  };
};

export const gradient: Gradient = {
  linear: {
    primary: `linear-gradient(350deg, #fe4537 15%, #de1b7c 40%, #4352ff 85%)`,
    secondary: `linear-gradient(350deg, ${colours.orange[600]} 15%, ${colours.pink[600]} 40%, ${colours.blue[600]} 85%)`,
  },
};
