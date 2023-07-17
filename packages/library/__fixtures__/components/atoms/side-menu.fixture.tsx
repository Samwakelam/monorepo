import { useValue } from "react-cosmos/fixture";

import { SideMenu } from "../../../src";

const SideMenuFixture = () => {
    const [isFixed] = useValue<boolean>('isFixed', {
        defaultValue: false,
    });

    const [title] = useValue<string>('Title', {
        defaultValue: 'undefined'
    });

    const [subtitle] = useValue<string>('Subtitle', {
        defaultValue: 'undefined',
    });

    return (
        <SideMenu
            title={title === 'undefined' ? undefined : title}
            subtitle={subtitle === 'undefined' ? undefined : subtitle}
            links={[{label: 'label', href:'./', isActive: false}]}
            isOpen={true}
            onRequestClose={() => {}}
            isFixed={isFixed}
        />
    )
};

export default SideMenuFixture;