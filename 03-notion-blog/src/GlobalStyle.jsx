// 전체 CSS관련 jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    /* 추가 글로벌 CSS */
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    *, 
    *::before, 
    *::after {
        box-sizing: border-box;

        font-family: 'Pretendard-Regular', sans-serif;
        color: inherit;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
