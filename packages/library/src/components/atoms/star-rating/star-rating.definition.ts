export enum StarRatingComponentType {
  DISPLAY = 'display',
  SELECT = 'select',
}

export type StarRatingProps = {
  totalStars?: number;
  rating: number | null;
  type?: StarRatingComponentType;
  onChange?: (value: number) => void;
};

export type StarRatingState = {
  totalStars: number;
  rating: number;
};

export type StarRatingHandlers = {
  calculateHalfStar: () => number;
  handleChange: (value: number) => void;
};

export type StarRatingComponentProps = {
  state: StarRatingState;
  handlers: StarRatingHandlers;
};
