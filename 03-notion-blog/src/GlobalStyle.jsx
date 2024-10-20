// 전체 CSS관련 jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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

        line-height: 1.3;
        color: inherit;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
