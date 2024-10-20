import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQuery, colors } from "../global/GlobalStyleVar";

import logo from "../assets/images/layout/logo.svg";

const HeaderContainer = styled.header`
    .header-wrap {
        display: flex;
        justify-content: space-between;

        max-width: 1440px;
        margin: 0 auto;

        h1 {
            width: 40px;
            height: 40px;

            img {
                width: 100%;
            }
        }

        .depth1 {
            display: flex;
            gap: 0 30px;

            > li {
                position: relative;
                background-color: orange;

                > a {
                    padding: 8px 10px;
                    font-size: 25px;
                    font-weight: 500;
                }
            }

            .depth2 {
                position: absolute;
                left: 50%;
                top: 100%;
                transform: translateX(-50%);
                width: max-content;
                border-radius: 10px;
                box-shadow: 0px 5px 10px rgba(0 0 0 / 12%);

                > li {
                    > a {
                        display: block;
                        padding: 10px 20px;
                        text-align: center;
                    }
                }
            }
        }
    }
`;

// navi 메뉴 data
const navList = {
    home: {
        label: "홈",
        path: "/",
    },
    workList: {
        label: "작업목록",
        path: "/work-list/publish",
        subMenu: [
            { label: "퍼블리싱", path: "/work-list/publish" },
            { label: "프론트엔드", path: "/work-list/front" },
        ],
    },
};

const Header = forwardRef((props, ref) => {
    return (
        <HeaderContainer ref={ref}>
            <div className="header-wrap">
                <h1>
                    <img src={logo} alt="로고" />
                </h1>
                <nav>
                    <ul className="depth1">
                        {Object.values(navList).map((menu) => (
                            <li key={menu.path}>
                                <NavLink to={menu.path}>{menu.label}</NavLink>
                                {/* 서브메뉴가 있을 경우에만 렌더링 */}
                                {menu.subMenu && (
                                    <ul className="depth2">
                                        {menu.subMenu.map((subMenu) => (
                                            <li key={subMenu.path}>
                                                <NavLink to={subMenu.path}>{subMenu.label}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    );
});

// display name 설정
// forwardRef 에러 해결 위함
Header.displayName = "Header";

export default Header;
