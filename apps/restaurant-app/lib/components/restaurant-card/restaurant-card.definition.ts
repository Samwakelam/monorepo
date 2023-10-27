import { Tag } from '@sam/library';

import { ImpressionType, Restaurant } from '../../types';

export type GroupModal = 'set' | 'with';

export type RestaurantCardProps = {
  restaurant: Restaurant;
  group?: string;
  openModal: (modal: GroupModal) => void;
};

export type RestaurantCardState = {
  restaurantImpression: ImpressionType | null;
  openModal: boolean;
};

export type RestaurantCardHandlers = {
  createTags: (tags: Restaurant['tags'] | Restaurant['cuisine'][]) => Tag[];
  handleOpenModal: (isOpen: boolean) => void;
  handleImpressionClick: (impression: ImpressionType) => void;
  resolveCost: (cost: Restaurant['cost']) => string;
  resolveRestaurantType: (type: Restaurant['type']) => Tag;
};
