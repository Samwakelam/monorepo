import { ReactElement } from 'react';

import { tw } from '@sam/theme/twind';
import { Icon } from '@sam/icons';

import { Input, Label } from '../../atoms';
import { getCase } from '../../../helpers';
import { Button, ButtonType } from '../../../components';

import { InputGroupProps } from './input-group.definition';

import * as S from './input-group.styles';

export const InputGroup = ({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  associatedForm,
  clearField = false,
  state,
  handlers,
}: InputGroupProps): ReactElement<InputGroupProps> => {
  const {
    error: { hasError, messages },
    isValid,
    value,
  } = state;
  const { onChange, onClearValue } = handlers;

  return (
    <article className={tw(S.InputGroupCss)}>
      <Label
        htmlFor={getCase(label?.htmlFor || '', 'kebab')}
        form={associatedForm}
        text={label?.text}
        showLabel={label?.showLabel}
      />
      <div className={tw(S.InputWrapperCss)}>
        <Input
          id={getCase(label?.htmlFor || '', 'kebab')}
          type={type}
          hasError={hasError}
          isValid={isValid}
          name={getCase(name, 'kebab')}
          placeholder={placeholder}
          form={associatedForm}
          required={required}
          onChange={onChange}
          value={value}
        />
        {clearField && (
          <Button
            icon={{
              icon: 'cross',
              ariaLabel: 'clear input field',
              format: 'only',
            }}
            buttonType={ButtonType.TERTIARY}
            className={tw(S.ClearFieldCss)}
            onClick={(e) => onClearValue(e)}
          />
        )}
        {isValid && (
          <div className={tw(S.IconCss, S.IconTickCss)}>
            <Icon icon="tick" ariaLabel="valid" />
          </div>
        )}
        {hasError && (
          <div className={tw(S.IconCss, S.IconCrossCss)}>
            <Icon icon="cross" ariaLabel="error" />
          </div>
        )}
        <p
          className={tw(S.MessageCss, hasError && S.MessageErrorCss)}
          aria-hidden={!hasError}
        >
          {messages}
        </p>
      </div>
    </article>
  );
};
