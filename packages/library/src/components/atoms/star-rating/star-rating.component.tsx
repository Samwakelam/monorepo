import { ReactElement } from 'react';

import {
  StarRatingComponentType,
  StarRatingProps,
} from './star-rating.definition';
import { useStarRating } from './star-rating.hook';

import { DisplayRating, SelectRating } from './_partials';

export const StarRating = ({
  type = StarRatingComponentType.DISPLAY,
  ...props
}: StarRatingProps): ReactElement<StarRatingProps> => {
  const starRating = useStarRating({ ...props, type });

  switch (type) {
    case StarRatingComponentType.DISPLAY: {
      return <DisplayRating {...starRating} />;
    }
    case StarRatingComponentType.SELECT: {
      return <SelectRating {...starRating} />;
    }
  }
};
