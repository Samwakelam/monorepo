import { ReactElement } from 'react';

import { FillType, Icon } from '@sam/icons';
import { tw } from '@sam/theme/twind';

import { StarRatingComponentProps } from '../star-rating.definition';

import * as S from '../star-rating.styles';

export const DisplayRating = ({
  state,
  handlers,
}: StarRatingComponentProps): ReactElement<StarRatingComponentProps> => {
  const { rating, totalStars } = state;

  return (
    <div className={tw(S.StarRatingCss)}>
      {Array.from({ length: totalStars }, (_, index) => {
        if (index + 1 <= (rating ?? 0)) {
          return (
            <Icon
              key={`display-component-full-star-${index}`}
              icon="star"
              ariaLabel="full star"
              fill={FillType.SOLID}
            />
          );
        }

        if (handlers.calculateHalfStar() === index + 1) {
          return (
            <Icon
              key={`display-component-half-star-${index}`}
              icon="half-star"
              ariaLabel="half star"
              fill={FillType.OUTLINE}
            />
          );
        }

        return (
          <Icon
            key={`display-component-empty-star-${index}`}
            icon="star"
            ariaLabel="empty star"
            fill={FillType.OUTLINE}
          />
        );
      })}
    </div>
  );
};
