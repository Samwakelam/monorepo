export enum TagColour {
  BLUE = 'blue',
  GREEN = 'green',
  ORANGE = 'orange',
  WHITE = 'white'
}

export type Tag = {
  value: string;
  showTag: boolean;
  colour: TagColour;
};

export type TagProps = {
  tags: Tag[];
  className?: string;
};
