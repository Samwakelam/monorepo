import { tw } from '@sam/theme/twind';
import { Button, ButtonType, Card, StarRating, Tags } from '@sam/library';
import { FillType } from '@sam/icons';

import { ImpressionType } from '../../types';

import { RestaurantCardProps } from './restaurant-card.definition';
import { RestaurantModal } from '../restaurant-modal';
import { useRestaurantCard } from './restaurant-card.hook';

import * as S from './restaurant-card.styles';

export const RestaurantCard = ({
  restaurant,
  group,
  openModal,
}: RestaurantCardProps) => {
  const {
    name,
    averageRating,
    cost,
    tags,
    cuisine,
    type,
    reviews,
    image,
    visits,
  } = restaurant;

  const { state, handlers } = useRestaurantCard({
    restaurant,
    group,
    openModal,
  });

  return (
    <>
      <Card
        image={image ? image : undefined}
        imageAsBackground
        className={tw(S.RestaurantCardCss)}
        contentClassName={tw(S.RestaurantCardContentCss)}
        cta={{ onClick: () => handlers.handleOpenModal(true) }}
      >
        <h2>{name}</h2>
        <h4>{handlers.resolveCost(cost)}</h4>
        <h6>Visits: {visits.length}</h6>
        <h6>reviews: {reviews.length}</h6>
        <div className={tw(S.WhiteTextCss)}>
          <StarRating rating={averageRating} />
        </div>
        <div className={tw(S.TagsBox)}>
          <Tags tags={handlers.createTags(tags)} />
          <Tags tags={handlers.createTags([cuisine])} />
          <Tags tags={[handlers.resolveRestaurantType(type)]} />
        </div>
        <div className={tw(S.ButtonBox)}>
          <Button
            buttonType={ButtonType.SECONDARY}
            onClick={(e) => {
              e.stopPropagation();
              handlers.handleImpressionClick(ImpressionType.GOOD);
            }}
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
            buttonType={ButtonType.SECONDARY}
            onClick={(e) => {
              e.stopPropagation();
              handlers.handleImpressionClick(ImpressionType.BAD);
            }}
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
      <RestaurantModal
        restaurant={restaurant}
        isOpen={state.openModal}
        onRequestClose={() => handlers.handleOpenModal(false)}
      />
    </>
  );
};
