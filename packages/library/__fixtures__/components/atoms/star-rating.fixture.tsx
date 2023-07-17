import { useValue } from 'react-cosmos/fixture';
import { StarRating, StarRatingComponentType } from '../../../src';
import { useState } from 'react';

export default {
  ['Ratings View']: () => {
    const [rating] = useValue<number>('Rating Value', {
      defaultValue: 3.5,
    });

    return <StarRating rating={rating} />;
  },
  ['Select Rating']: () => {
    const [state, setState] = useState<number | null>(null);

    return (
      <>
        <h3>Rating: {state}</h3>
        <StarRating
          type={StarRatingComponentType.SELECT}
          rating={state}
          onChange={(value) => setState(value)}
        />
      </>
    );
  },
};
