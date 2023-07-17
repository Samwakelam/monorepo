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

export type Review = {
  rating: number;
  by: string;
  reason: string;
};

export type Visit = {
  impression: ImpressionType;
  by: string;
  with: string;
};

export type Restaurant = {
  name: string;
  averageRating: number | null;
  cost: CostType;
  tags: RestaurantTag[];
  cuisine: Cuisine;
  type: RestaurantType;
  reviews: Review[];
  visits: Visit[];
};
