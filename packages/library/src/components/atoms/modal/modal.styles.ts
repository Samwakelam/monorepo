import { css, theme } from '@sam/theme/twind';

export const ModalCss = css({
  '&': {
    backgroundColor: theme('colors.neutral.50'),
    boxShadow: theme('boxShadow.drawer'),
    width: '100%',
    maxHeight: '90%',
    overflowY: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    borderTopLeftRadius: theme('spacing.16'),
    borderTopRightRadius: theme('spacing.16'),
    position: 'fixed',
    bottom: 0,
  },
  '@screen sm': {
    backgroundColor: theme('colors.neutral.50'),
    boxShadow: theme('boxShadow.card'),
    width: theme('spacing.544'),
    height: 'unset',

    borderTopLeftRadius: theme('spacing.0'),
    borderTopRightRadius: theme('spacing.0'),
    position: 'relative',
  },
});

export const ImageCss = css({
  '&': {
    width: '100%',
    objectFit: 'cover',
    maxHeight: '50vw',
  },
  '@screen sm': {
    maxHeight: theme('spacing.304'),
  },
});

export const OverlayClasses = `
    sm:(
      bg(neutral-600 opacity-75)
    )
`;

export const OverlayCss = css({
  '&': {
    position: 'fixed',
    inset: 0,
    transform: 'translate3d(0, 100%, 0)',
    transition: 'transform 300ms ease',
    zIndex: 2,
  },
  '@screen sm': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    inset: 0,
    transform: 'unset',
  },
});

export const OverlayAfterOpenCss = css({
  '&': {
    transform: 'translate3d(0, 0, 0)',
  },
  '@screen sm': {
    transform: 'unset',
  },
});

export const OverlayBeforeCloseCss = css({
  '&': {
    transform: 'translate3d(0, 100%, 0)',
  },
  '@screen sm': {
    transform: 'unset',
  },
});

export const HeaderCss = css({
  '&': {
    display: 'grid',
    gridTemplateColumns: '44px 1fr 44px',
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.16'),
    paddingLeft: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
  },
  '&>h5': {
    gridColumn: 2,
    justifySelf: 'center',
    alignSelf: 'center',
  },
  '&>button': {
    gridColumn: 3,
    padding: 0,
    display: 'inline-block',
  },
});

export const ContentCss = (hasBanner: boolean) =>
  css({
    '&': {
      position: 'relative',
      paddingTop: hasBanner ? theme('spacing.32') : theme('spacing.16'),
      paddingBottom: theme('spacing.80'),
      paddingLeft: theme('spacing.40'),
      paddingRight: theme('spacing.40'),
      overflowY: 'auto',
      height: '100%',
      display: 'flex',
      flexFlow: 'column',
    },
    '@screen sm': {
      paddingTop: hasBanner ? theme('spacing.32') : theme('spacing.16'),
      paddingBottom: theme('spacing.80'),
      paddingLeft: theme('spacing.56'),
      paddingRight: theme('spacing.56'),
    },
  });
