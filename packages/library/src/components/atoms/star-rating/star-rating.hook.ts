import { useEffect, useState } from 'react';

import { Hook } from '@sam/types';

import {
  StarRatingHandlers,
  StarRatingProps,
  StarRatingState,
} from './star-rating.definition';

const initialState = {
  totalStars: 5,
  rating: 0,
};

export const useStarRating = ({
  rating,
  onChange,
  totalStars = 5,
  type,
}: StarRatingProps): Hook<StarRatingState, StarRatingHandlers> => {
  const [state, setState] = useState<StarRatingState>(initialState);

  const calculateHalfStar = (): number => {
    if (!rating || rating % 1 < 0.5) return 0;

    const decimal = Math.round(rating);
    return decimal;
  };

  const handleChange: StarRatingHandlers['handleChange'] = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(
    function init() {
      setState((prev) => ({
        ...prev,
        totalStars,
        rating: rating ? rating : 0,
      }));
    },
    [totalStars, rating],
  );

  return {
    state,
    handlers: {
      calculateHalfStar,
      handleChange,
    },
  };
};
