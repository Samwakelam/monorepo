import { SideMenuLink } from '../../../src';

const menu = {
  width: '300px',
  background: '#f5f5f5',
  padding: '20px',
  height: '100%',
};

export default {
  ['Default']: () => {
    return (
      <div style={menu}>
        <SideMenuLink isActive={false} href={'/'} label="Side Bar Link" />
      </div>
    );
  },
  ['Is Active']: () => {
    return (
      <div style={menu}>
        <SideMenuLink isActive={true} href={'/'} label="Side Bar Link" />
      </div>
    );
  },
};
