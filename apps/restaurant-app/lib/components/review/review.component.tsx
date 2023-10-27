import { ReactElement } from 'react';

import { tw } from '@sam/theme/twind';
import {
  Card,
  StarRating,
  StarRatingComponentType,
  getCapitalisedSentences,
} from '@sam/library';

import { Review } from '../../types';

import * as S from './review.styles';

export const ReviewCard = ({
  rating,
  by,
  reason,
  date,
}: Review): ReactElement<Review> => {
  return (
    <Card>
      <div className={tw(S.ReviewCardCss)}>
        <div className={tw(S.ReviewCss)}>
          <h6>{by}</h6>
          <p className={tw(S.ReasonCss)}>{getCapitalisedSentences(reason)}</p>
          <p>{date.getFullYear()}</p>
        </div>
        <StarRating type={StarRatingComponentType.DISPLAY} rating={rating} />
      </div>
    </Card>
  );
};
