import { useValue } from 'react-cosmos/fixture';

import { Bar, SideMenu, SideMenuProps } from '../../../src';
import { useState } from 'react';

const Menu = ({isFixed, isOpen, onRequestClose}: Pick<SideMenuProps, 'isFixed' | 'isOpen' | 'onRequestClose'>) => {
  return (
    <SideMenu
            links={[{label: 'label', href:'./', isActive: false}]}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            isFixed={isFixed}
        />
  )
}

const containerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  height: '100%'
}

export default {
  ['Basic']: () => {
    return (
      <Bar>
        <h1>A basic Bar</h1>
      </Bar>
    );
  },
  ['Menu bar']: () => {
    const [menuFixed] = useValue<boolean>('menuFixed', { defaultValue: false });

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
      <div style={containerStyle}>
        <Menu isFixed={menuFixed} isOpen={showMenu} onRequestClose={() => setShowMenu(false)}/>
        <Bar
        menu={{
          onClick: () => setShowMenu(true),
          isFixed: menuFixed ? true : false,
        }}
      >
        <h1>A basic Bar</h1>
        <p>Resize the window to see the menu button's behavior</p>
      </Bar>
      </div>
    );
  },
};
