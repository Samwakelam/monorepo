import { useEffect } from 'react';

import { InputGroup, Bar, useInputGroup, Validators } from '@sam/library';
import { tw } from '@sam/theme/twind';

import * as S from './title-bar.styles';

type TitleBarProps = {
  groupNames: (groupNames: string) => void;
  updateValue?: string;
};

export const TitleBar = ({ groupNames, updateValue }: TitleBarProps) => {
  const inputGroup = useInputGroup('', [
    [(value) => value.length > 0, 'This field Is required to have an input'],
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  useEffect(() => {
    groupNames(inputGroup.state.value);
  }, [inputGroup.state.value]);

  useEffect(() => {
    if (updateValue) {
      inputGroup.handlers.updateValue(updateValue);
    }
  }, [updateValue]);

  return (
    <Bar>
      <div className={tw(S.TitleBarCss)}>
        <h1>Restaurants of Worcester</h1>
        <InputGroup
          label={{
            text: 'who are you',
            showLabel: true,
          }}
          placeholder="Please enter group names such as Sam and Dave"
          name="who is viewing"
          clearField
          {...inputGroup}
        />
      </div>
    </Bar>
  );
};
