import { ReactElement } from 'react';

import { tw, apply } from '@sam/theme/twind';

import { getUnit } from '../../../helpers';

import { useSudoHook } from './sudo-fixed.hook';
import { SudoFixedProps } from './sudo-fixed.definition';

import * as S from './sudo-fixed.styles';

export const SudoFixed = ({
  stop,
  boundary,
  className,
  children,
}: SudoFixedProps): ReactElement<SudoFixedProps> => {
  const { handlers } = useSudoHook();

  return (
    <div
      className={tw(
        apply(
          S.SudoFixedCss({
            margin: `-${stop.value}${getUnit(stop.unit)}`,
            boundary: handlers.resolveBoundaries(boundary),
          }),
        ),
        className,
      )}
      data-label="fixed"
    >
      {children}
    </div>
  );
};
