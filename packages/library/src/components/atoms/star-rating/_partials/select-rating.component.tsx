import { ReactElement, useEffect, useState } from 'react';

import { FillType } from '@sam/icons';
import { tw } from '@sam/theme/twind';

import { Button, ButtonType, ButtonVariant } from '../../button';

import { StarRatingComponentProps } from '../star-rating.definition';

import * as S from '../star-rating.styles';

export const SelectRating = ({
  state,
  handlers,
}: StarRatingComponentProps): ReactElement<StarRatingComponentProps> => {
  const { totalStars } = state;

  const [hover, setHover] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    handlers.handleChange(selected);
  }, [selected]);

  return (
    <div className={tw(S.StarRatingCss)}>
      {Array.from({ length: totalStars }, (_, index) => {
        return (
          <Button
            key={`select-component-empty-${index}`}
            variant={ButtonVariant.UNSTYLED}
            onClick={() => setSelected(index + 1)}
            icon={{
              format: 'only',
              icon: 'star',
              fill:
                hover > index || (hover === 0 && selected > index)
                  ? FillType.SOLID
                  : FillType.OUTLINE,
              ariaLabel: 'empty-star',
              onMouseOver: () => setHover(index + 1),
              onMouseOut: () => setTimeout(() => setHover(0), 200),
            }}
          />
        );
      })}
    </div>
  );
};
