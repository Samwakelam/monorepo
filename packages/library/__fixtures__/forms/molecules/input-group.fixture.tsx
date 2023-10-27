import { useValue } from 'react-cosmos/fixture';

import { InputGroup, useInputGroup } from '../../../src';

export default {
  ['Basic']: () => {
    const [showLabel] = useValue<boolean>('Show Label', {
      defaultValue: true,
    });

    const [clearField] = useValue<boolean>('Clear Field Button', {
      defaultValue: false,
    });

    const inputGroup = useInputGroup('', [
      [(value) => value.length > 0, 'This field Is required to have an input'],
    ]);

    return (
      <div style={{ width: '34rem', padding: '2rem' }}>
        <InputGroup
          label={{
            text: 'Label Text',
            showLabel: showLabel,
          }}
          name="test"
          clearField={clearField}
          placeholder="Placeholder"
          {...inputGroup}
        />
      </div>
    );
  },
};
