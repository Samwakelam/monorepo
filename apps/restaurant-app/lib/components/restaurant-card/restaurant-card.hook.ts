import { useState } from 'react';

import { Hook } from '@sam/types';
import { Tag, TagColour } from '@sam/library';

import {
  CostType,
  ImpressionType,
  Restaurant,
  RestaurantType,
} from '../../types';

import {
  RestaurantCardHandlers,
  RestaurantCardProps,
  RestaurantCardState,
} from './restaurant-card.definition';

export const useRestaurantCard = ({
  restaurant,
  group,
  openModal,
}: RestaurantCardProps): Hook<RestaurantCardState, RestaurantCardHandlers> => {
  const [state, setState] = useState<RestaurantCardState>({
    restaurantImpression: null,
    openModal: false,
  });

  const handleOpenModal = (isOpen: boolean) => {
    setState((prev) => ({
      ...prev,
      openModal: isOpen,
    }));
  };

  const handleImpressionClick = (impression: ImpressionType) => {
    if (group) {
      setState((prev) => ({
        ...prev,
        restaurantImpression: impression,
      }));
      openModal('with');
    } else {
      openModal('set');
    }
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
      colour:
        type === RestaurantType.EAT_IN ? TagColour.GREEN : TagColour.ORANGE,
    };
  };

  return {
    state,
    handlers: {
      handleOpenModal,
      handleImpressionClick,
      resolveCost,
      createTags,
      resolveRestaurantType,
    },
  };
};
