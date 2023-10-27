import { ImageProps } from '@sam/types';

export enum RestaurantType {
  EAT_IN = 'eat-in',
  TAKE_AWAY = 'take-away',
}

export enum ImpressionType {
  GOOD = 'good',
  BAD = 'bad',
}

export enum CostType {
  LOW = 'low',
  MID = 'mid',
  HIGH = 'high',
}

export type RestaurantTag =
  | 'bar'
  | 'basic'
  | 'breakfast'
  | 'cosy'
  | 'fancy'
  | 'healthy'
  | 'outdoor'
  | 'pub'
  | 'romantic'
  | 'veggie';

export type Cuisine = 'pizza' | 'italian' | 'indian' | 'other';

export type Group = {
  id: string;
  name: string;
};

export type Review = {
  rating: number;
  by: string;
  reason: string;
  date: Date;
};

export type Visit = {
  impression: ImpressionType;
  by: string;
  with: string | null;
};

export type Restaurant = {
  name: string;
  averageRating: number | null;
  cost: CostType;
  tags: RestaurantTag[];
  cuisine: Cuisine;
  type: RestaurantType;
  image: ImageProps | null;
  reviews: Review[];
  visits: Visit[];
};
