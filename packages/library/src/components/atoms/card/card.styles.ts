import { css, theme } from '@sam/theme/twind';

export const CardCss = css({
  '&': { position: 'relative' },
});

export const ContentHeaderCss = css({
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'papayawhip',
  paddingRight: theme('spacing.20'),
  paddingLeft: theme('spacing.20'),
  paddingTop: theme('spacing.20'),
  paddingBottom: theme('spacing.20'),
});

export const HeaderCss = css({
  display: 'flex',
  paddingRight: theme('spacing.20'),
  paddingLeft: theme('spacing.20'),
});

export const IconContainerCss = css({
  '&': {
    position: 'relative',
    zIndex: 1,
    maxWidth: 'fit-content',
    backgroundColor: 'papayawhip',
    padding: '2rem',
    aspectRatio: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const DetailContainerCss = css({
  '&': {
    backgroundColor: 'transparent',
    zIndex: 1,
    position: 'relative',
    marginTop: theme('spacing.20'),
    paddingTop: theme('spacing.16'),
    paddingLeft: theme('spacing.16'),
    paddingBottom: theme('spacing.8'),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  '& > h3': {
    textTransform: 'capitalize',
  },
  '& > p': {
    fontSize: theme('fontSize.20'),
  },
});

export const CardBackingCss = ({ isFullHeight }: { isFullHeight: boolean }) =>
  css({
    backgroundColor: theme('colors.neutral.50'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: isFullHeight ? 0 : theme('spacing.20'),
    zIndex: 0,
    boxShadow: theme('boxShadow.card'),
  });

export const CardContainerCss = css({
  '&': {
    position: 'relative',
    display: 'flex',
    flexFlow: 'column',

    '& > img': {
      width: '100%',
    },

    '& > button': {
      borderRadius: 0,
    },
  },
});

export const ContentCss = css({
  '&': {
    position: 'relative',
    padding: theme('spacing.20'),
  },
  '@screen sm': {
    padding: theme('spacing.24'),
  },
});

export const GridCss = css({
  '&': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRow: '1fr',
  },
});

export const GridRowOne = css({
  '&': {
    gridRowStart: 1,
    gridColumnStart: 1,
  },
});

export const GridRowOneSpanTwo = css({
  '&': {
    gridRow: '1 / span 2',
    gridColumn: 1,
    marginTop: theme('spacing.20'),
  },
});

export const BackgroundImageCss = css({
  '&': {
    height: '100%',
    objectFit: 'cover',
  },
});

export const OverlayCss = css({
  '&': {
    backgroundImage: ` linear-gradient(
      270deg,
      rgba(255,255,255, 0.01),
      60%,
      rgba(0,0,0, 0.8)
      )`,
  },
});

export const OverlayContentCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
  },
  '& > h1,> h2,> h3,> h4,> h5,> h6,> p,> a': {
    color: theme('colors.neutral.50'),
  },
});
