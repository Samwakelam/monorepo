import { ReactNode } from 'react';

import './cosmos.styles.css';

const style = {
  height: '100vh',
  width: '100%',
};

const Decorator = ({ children }: { children: ReactNode }) => {
  return <div style={style}>{children}</div>;
};

export default Decorator;
