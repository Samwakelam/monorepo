import { InputGroup, Bar } from '@sam/library';
import { tw } from '@sam/theme/twind';

import * as S from './title-bar.styles';

export const TitleBar = () => {
  return (
    <Bar>
      <div className={tw(S.TitleBarCss)}>
        <h1>Restaurants of Worcester</h1>
        <InputGroup
          label="Who-is-Viewing"
          placeholder="Please enter group names such as Sam and Dave"
          showLabel
          labelText="Who is Viewing"
          name="Who-is-Viewing"
          state={{
            value: '',
            error: {
              hasError: false,
              messages: [],
            },
            isValid: false,
          }}
          handlers={{
            onChange: function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.');
            },
          }}
        />
      </div>
    </Bar>
  );
};
