import { ReactElement } from 'react';

import { Button, ButtonType, Modal, ModalProps } from '@sam/library';
import { tw } from '@sam/theme/twind';

import { Restaurant } from '../../types';
import { ReviewCard } from '../review';

import * as S from './restaurant-modal.styles';

export interface RestaurantModalProps extends Omit<ModalProps, 'children'> {
  restaurant: Restaurant;
}

export const RestaurantModal = ({
  restaurant,
  isOpen = false,
  onRequestClose,
}: RestaurantModalProps): ReactElement<RestaurantModalProps> | null => {
  if (!restaurant) return null;

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

  return (
    <Modal
      modalTitle={name}
      modalBanner={image ? image : undefined}
      onRequestClose={onRequestClose}
      isOpen={isOpen}
    >
      <div className={tw(S.RestaurantModalCss)}>
        <Button
          icon={{ icon: 'plus', format: 'only', ariaLabel: 'add review' }}
          className={tw(S.AddReviewButtonCss)}
          buttonType={ButtonType.SECONDARY}
        />
        <h2>Reviews</h2>
        <div className={tw(S.ReviewsCss)}>
          {reviews.map((review, index) => {
            return (
              <ReviewCard
                key={`review-card-${review.date}-${index}`}
                {...review}
              />
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
