import { CostType, Restaurant, RestaurantType } from '../types';

export const restaurants: Restaurant[] = [
  {
    name: "Benedicto's",
    averageRating: 3.5,
    cost: CostType.MID,
    tags: ['cosy'],
    cuisine: 'italian',
    type: RestaurantType.EAT_IN,
    reviews: [],
    visits: [],
  },
];
