import {
  CostType,
  Group,
  ImpressionType,
  Restaurant,
  RestaurantType,
  Review,
  Visit,
} from '../types';

export const groups: Group[] = [
  { id: '1', name: 'sam and dave' },
  { id: '2', name: 'sophie and matt' },
];

export const reviews: Review[] = [
  {
    rating: 1,
    by: 'sam and dave',
    reason: 'bad Veggie options',
    date: new Date(2023, 4, 1),
  },
  {
    rating: 3,
    by: 'sam and dave',
    reason: 'nice atmosphere',
    date: new Date(2023, 4, 1),
  },
  {
    rating: 5,
    by: 'sophie and matt',
    reason: 'Great Steak',
    date: new Date(2022, 4, 1),
  },
];

export const visits: Visit[] = [
  {
    impression: ImpressionType.GOOD,
    by: 'sam and dave',
    with: 'sophie and matt',
  },
  {
    impression: ImpressionType.BAD,
    by: 'sam and dave',
    with: null,
  },
];

export const restaurants: Restaurant[] = [
  {
    name: "Benedicto's",
    averageRating: 3.5,
    cost: CostType.MID,
    tags: ['cosy'],
    cuisine: 'italian',
    type: RestaurantType.EAT_IN,
    reviews: reviews,
    image: { src: '/img/benedictos.jpg', alt: "benedicto's restaurant" },
    visits: visits,
  },
];
