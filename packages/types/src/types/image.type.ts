export type ImageFit = 'Fill' | 'Contain' | 'Cover' | 'None' | 'Scale Down';

export type ImageProps = {
  src: string;
  alt: string;
  fit?: ImageFit;
};
