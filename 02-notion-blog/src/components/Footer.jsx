import { forwardRef } from "react";
import styled from "styled-components";
import properties from "../global/GlobalStyleVar";

import github from "../assets/images/layout/github.svg";
import notion from "../assets/images/layout/notion.svg";
import gmail from "../assets/images/layout/gmail.svg";

const FooterContainer = styled.footer`
    background-color: ${properties.colors.gray};

    .footer-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        max-width: calc(1440px + 2rem);
        margin: 0 auto;
        padding: 1rem;

        ${properties.mediaQuery.tablet(`
            flex-direction: column;
            gap: 20px;
        `)}

        ul {
            display: flex;
            gap: 20px;

            img {
                height: 24px;
            }
        }
    }
`;

const Footer = forwardRef((prop, ref) => {
    return (
        <FooterContainer ref={ref}>
            <div className="footer-wrap">
                <ul>
                    <li>
                        <a href="https://github.com/castle-bird" target="_blank">
                            <img src={github} alt="깃허브" />
                        </a>
                    </li>
                    <li>
                        <a href="https://emphasized-derby-e32.notion.site/12d0e4e4d4fe800abd1bd801b61a7868?v=5af793f94dcf4721904da36b1b5b1445" target="_blank">
                            <img src={notion} alt="노션" />
                        </a>
                    </li>
                    <li>
                        {/* <a href="mailto:seongjo0501@gmail.com" target="_blank">
                            <img src={gmail} alt="메일보내기" />
                        </a> */}
                        <a href="#" onClick={(e)=>{
                            e.preventDefault()

                            alert( `저의 E-Mail은: seongjo0501@gmail.com 입니다!`);
                        }}>
                            <img src={gmail} alt="메일보내기" />
                        </a>
                    </li>
                </ul>
                <p>&copy; 2024, castle-bird</p>
            </div>
        </FooterContainer>
    );
});

// display name 설정
// forwardRef 에러 해결 위함
Footer.displayName = "Footer";

export default Footer;
