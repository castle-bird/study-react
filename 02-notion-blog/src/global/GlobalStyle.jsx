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
        font-family: 'Roboto',"Noto Sans KR", sans-serif;
        box-sizing: border-box;

        font-size: 16px;
        line-height: 1.5;
        color: ${properties.colors.default};

        ${properties.mediaQuery.tablet(`
            font-size: 14px
        `)}
    }

    .main-container {
        ${properties.mediaQuery.desktopSmall(`
            padding: 0 20px;
        `)};

        ${properties.mediaQuery.tablet(`
            padding: 0 15px;
        `)};
    }    

    a,span,i,u {
        display: inline-block;
        text-decoration: none;
    }

    img {
        display:inline-block;
        vertical-align: middle;
        max-width: 100%;
    }

    button {
        border: none;
        cursor: pointer;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
        border: 1px solid #000;
        box-sizing:border-box;
        font-family: 'Roboto',"Noto Sans KR", sans-serif;
        outline: none;
        border-radius: 0;

        &:focus {
           border-bottom: 1px solid ${properties.colors.primary} !important;
        }

        &::placeholder {
            font-family: 'Roboto',"Noto Sans KR", sans-serif;
        }

        &[type='text'],
        &[type='number'] {
            border: none;
            border-bottom: 1px solid ${properties.colors.default};
        }
    }
`;

export default GlobalStyle;
