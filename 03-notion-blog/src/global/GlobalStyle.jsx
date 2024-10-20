// 전체 CSS관련 jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import properties from "./GlobalStyleVar";

const GlobalStyle = createGlobalStyle`
    ${reset}

    /* 추가 글로벌 CSS */
    *, 
    *::before, 
    *::after,
    html,
    body  {
        font-family: "Noto Sans KR", sans-serif;
        box-sizing: border-box;

        font-size: 16px;
        line-height: 1.3;
        color: ${properties.colors.default};

        ${properties.mediaQuery.desktopSmall`
            font-size: 14px;
        `}
    }

    .main-container {
        ${properties.mediaQuery.desktopSmall`
            padding: 0 20px;
        `};

        ${properties.mediaQuery.tablet`
            padding: 0 15px;
        `};
    }    

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyle;
