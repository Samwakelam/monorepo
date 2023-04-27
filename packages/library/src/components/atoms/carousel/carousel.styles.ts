import { ChevronRightIcon } from "@sam/icons";
import { css, theme } from "@sam/theme/twind";

export const CarouselCss = css({
    '&':{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 0',
    },

    '& > button': {
        position: 'absolute',
        display: 'none',

        '&:first-child': {
            left: '2.5%',
        },

        '&:last-child': {
            right: '2.5%',
        },
    },

    '@screen lg': {
        '& > button': {
            display: 'initial',
        },
    }
});

export const CarouselViewportCss = (isFullWidth: boolean) => css({
    '&':{
        margin: 0,
        padding: '1rem',
        width: '100%',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',

        overflowX: "scroll",
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        scrollPadding: '1rem',
        overflowY: "hidden",
    },

    '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        height: '1rem',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme('colors.neutral.300'),
        borderRadius: '0.5rem',

        '&:hover': {
            backgroundColor: theme('colors.neutral.400'),
        },
    },

    '&::-webkit-scrollbar-button:single-button': {
        backgroundColor: 'transparent',
        width: '2rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '0.5rem',

        '&:hover': {
            backgroundColor: theme('colors.neutral.200'),
        },
    },

    '&::-webkit-scrollbar-button:single-button:horizontal:increment': {
        backgroundImage: `url("data:image/svg+xml;utf-8, <svg width='6' height='12' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path  fillRule='evenodd'  clipRule='evenodd'  d='M0 2.10356L1.82005 0.166687L12 11L1.82005 21.8334L0 19.8965L8.3599 11L0 2.10356Z'  fill='black'/></svg>")`,
    },

    '&::-webkit-scrollbar-button:single-button:horizontal:decrement': {
        backgroundImage: `url("data:image/svg+xml;utf-8, <svg width='6' height='12' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12 2.10356L10.1799 0.166687L0 11L10.1799 21.8334L12 19.8965L3.6401 11L12 2.10356Z' fill='black' /></svg>")`,
    },

    '@screen lg': {
        '&':{
            padding: isFullWidth ? 0 : '1rem',
            width: isFullWidth ? '100%': '80%',
        },

        '&::-webkit-scrollbar': {
            display: 'none',
        },
    }
});

export const CarouselSlideCss = (basis: number) => css({
    '&':{
        margin: 0,
        padding: 0,

        flexGrow:0,
        flexShrink: 0,
        width: '80%',
        minWidth: '1rem',

        scrollSnapAlign: 'start',
        scrollMarginInlineStart: 0,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    '@screen md': {
        flexBasis: `${basis * (90 / 100)}px`,
        width: 'unset',
    },

    '@screen lg': {
        '&':{
           flexBasis: `${basis}px`,
        },
    }

});

