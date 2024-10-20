// 전체 CSS관련 jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { mediaQuery, colors } from "./GlobalStyleVar";

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
        color: ${colors.color1};
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
