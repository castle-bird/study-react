import { css } from "styled-components";

// break point (반응형)
const breakpoints = {
    desktopSmall: "1440px",
    tablet: "1024px",
    mobile: "768px",
    mobileSmall: "560px",
};

const mediaQuery = {
    desktopSmall: (...styles) => css`
        @media only screen and (max-width: ${breakpoints.desktopSmall}) {
            ${css(...styles)}
        }
    `,
    tablet: (...styles) => css`
        @media only screen and (max-width: ${breakpoints.tablet}) {
            ${css(...styles)}
        }
    `,
    mobile: (...styles) => css`
        @media only screen and (max-width: ${breakpoints.mobile}) {
            ${css(...styles)}
        }
    `,
    mobileSmall: (...styles) => css`
        @media only screen and (max-width: ${breakpoints.mobileSmall}) {
            ${css(...styles)}
        }
    `,
};

// color 색상
const colors = {
    primary: "#3498db",
    default: "#333333",
};

const properties = {
    mediaQuery,
    colors
}


export default properties;