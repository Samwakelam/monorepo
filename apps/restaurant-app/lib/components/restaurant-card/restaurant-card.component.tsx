import { useState } from 'react';

import { tw } from '@sam/theme/twind';
import {
  Button,
  ButtonType,
  Card,
  StarRating,
  Tag,
  TagColour,
  Tags,
} from '@sam/library';
import { FillType } from '@sam/icons';

import {
  CostType,
  ImpressionType,
  Restaurant,
  RestaurantType,
} from '../../types';

import * as S from './restaurant-card.styles';

export const RestaurantCard = ({
  name,
  averageRating,
  cost,
  tags,
  cuisine,
  type,
  reviews,
  visits,
}: Restaurant) => {
  const [state, setState] = useState<{
    restaurantImpression: ImpressionType | null;
  }>({
    restaurantImpression: null,
  });

  return (
    <Card>
      <h3>{name}</h3>
      <h4>{resolveCost(cost)}</h4>
      <h6>Visits: {visits.length}</h6>
      <h6>reviews: {reviews.length}</h6>
      <div>
        <StarRating rating={averageRating} />
      </div>
      <div>
        <Tags tags={createTags(tags)} />
      </div>
      <div>
        <Tags tags={createTags([cuisine])} />
      </div>
      <div>
        <Tags tags={[resolveRestaurantType(type)]} />
      </div>
      <div className={tw(S.ButtonBox)}>
        <Button
          buttonType={ButtonType.TERTIARY}
          onClick={() =>
            setState((prev) => ({
              ...prev,
              restaurantImpression: ImpressionType.GOOD,
            }))
          }
          icon={{
            icon: 'thumb-up',
            fill:
              state.restaurantImpression === ImpressionType.GOOD
                ? FillType.SOLID
                : FillType.OUTLINE,
            format: 'only',
            ariaLabel: 'good impression',
          }}
        />
        <Button
          buttonType={ButtonType.TERTIARY}
          onClick={() =>
            setState((prev) => ({
              ...prev,
              restaurantImpression: ImpressionType.BAD,
            }))
          }
          icon={{
            icon: 'thumb-down',
            fill:
              state.restaurantImpression === ImpressionType.BAD
                ? FillType.SOLID
                : FillType.OUTLINE,
            format: 'only',
            ariaLabel: 'bad impression',
          }}
        />
      </div>
    </Card>
  );
};

const resolveCost = (cost: Restaurant['cost']): string => {
  switch (cost) {
    case CostType.LOW:
      return '£';
    case CostType.MID:
      return '££';
    case CostType.HIGH:
      return '£££';
  }
};

const createTags = (
  tags: Restaurant['tags'] | Restaurant['cuisine'][],
): Tag[] => {
  return tags.map((tag) => {
    return {
      value: tag,
      showTag: true,
      colour: TagColour.WHITE,
    };
  });
};

const resolveRestaurantType = (type: Restaurant['type']): Tag => {
  return {
    value: type,
    showTag: true,
    colour: type === RestaurantType.EAT_IN ? TagColour.GREEN : TagColour.ORANGE,
  };
};
