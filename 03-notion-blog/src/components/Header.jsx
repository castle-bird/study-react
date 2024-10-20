import { forwardRef, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import properties from "../global/GlobalStyleVar";

import logo from "../assets/images/layout/logo.svg";

const HeaderContainer = styled.header`
    border-bottom: 1px solid #000;

    .header-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1440px;
        margin: 0 auto;
        padding: 1rem 0;

        h1 {
            width: 40px;
            height: 40px;
        }

        .depth1 {
            position: relative;
            display: flex;
            gap: 0 30px;

            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: ${properties.colors.primary};
            }

            > li {
                position: relative;

                > a {
                    display: block;
                    padding: 8px 10px;
                    font-size: 1.5625rem;
                    font-weight: 500;
                }
            }

            .depth2 {
                position: absolute;
                top: 100%;
                right: 0;
                width: max-content;
                max-height: 0;
                background-color: #fff;
                overflow: hidden;
                transition: all 0.3s linear;
                border-radius: 10px;
                z-index: 10;

                &.active {
                    box-shadow: 0 0 5px rgba(0 0 0 / 12%);
                }

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
    const onMouseEnterLeave = (e) => {
        const depth2 = e.currentTarget.querySelector(".depth2");
        if (!depth2) return;

        const maxHeight = e.type === "mouseenter" ? `${depth2.scrollHeight}px` : "0";

        depth2.style.maxHeight = maxHeight;
        depth2.classList.toggle("active", e.type === "mouseenter");
    };

    return (
        <HeaderContainer ref={ref}>
            <div className="header-wrap">
                <h1>
                    <img src={logo} alt="로고" />
                </h1>
                <nav>
                    <ul className="depth1">
                        {Object.values(navList).map((menu) => (
                            <li
                                key={menu.path}
                                onMouseEnter={(e) => {
                                    onMouseEnterLeave(e);
                                }}
                                onMouseLeave={(e) => {
                                    onMouseEnterLeave(e);
                                }}
                            >
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
