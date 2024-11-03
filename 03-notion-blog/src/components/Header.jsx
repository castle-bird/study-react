import { forwardRef, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import properties from "../global/GlobalStyleVar";

import logo from "../assets/images/layout/logo.svg";
import search from "../assets/images/layout/search.svg";

const HeaderContainer = styled.header`
    .header-wrap {
        display: flex;

        gap: 5vw;

        max-width: calc(1440px + 2rem);
        margin: 0 auto;
        padding: 3.5rem 1rem 6rem;

        ${properties.mediaQuery.tablet(`
            flex-direction: column;
            gap: 0;
            padding: 2.5rem 1rem 3.5rem;
        `)}

        h1 {
            a {
                display: flex;
                height: 100%;
                align-items: center;

                ${properties.mediaQuery.tablet(`
                   justify-content: center;

                    img {
                        width: 130px;
                    }
                `)}
            }
        }

        nav {
            ul {
                display: flex;
                gap: 2.5rem;
                height: 100%;

                ${properties.mediaQuery.tablet(`
                   justify-content: center;
                   gap: 1rem;
                `)}

                li {
                    a {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        font-size: 0.875rem;
                        font-weight: 700;

                        ${properties.mediaQuery.tablet(`
                            padding: 1rem 0;
                            font-size: 1rem;
                        `)}
                    }
                }
            }
        }

        .header-search {
            display: flex;
            margin-left: auto;

            ${properties.mediaQuery.tablet(`
                justify-content: center;
                margin-left: 0;
                margin-top: 1rem;
            `)}

            .search-input {
                max-width: 0;
                overflow: hidden;
                transition: 0.4s;

                &.active {
                    max-width: 18rem;
                }

                ${properties.mediaQuery.tablet(`
                    max-width: 16rem;    
                `)}

                input {
                    width: 12rem;
                    height: 100%;
                    padding: 3px 5px 0;
                }
            }

            button {
                width: 34px;
                height: 34px;
                padding: 0;
                background: none;

                img {
                    display: block;
                    margin: 0 auto;
                }
            }
        }
    }
`;

// navi 메뉴 data
const navList = {
    home: {
        label: "Home",
        path: "/",
    },
    front: {
        label: "Frontend",
        path: "/work-list/front",
    },
    pub: {
        label: "Publishing",
        path: "/work-list/publish",
    },
};

const Header = forwardRef((props, ref) => {
    const [isMobile, setIsMobile] = useState(); // PC,MOBILE 화면 체크하는 state
    const [isShow, setIsShow] = useState(false); // 검색 input이 보이는지 체크하는 state
    const [inputVal, setInputVal] = useState(""); // 검색어 input value
    const inputBox = useRef(); // .search-input

    useEffect(() => {
        // PC, MOBILE을 체크한다
        const mobileChk = () => {
            const mobileChk = window.innerWidth < 1024;

            setIsMobile(mobileChk);

            // 모바일 상태에서만 isShow를 false로 설정
            // PC에서 모바일로 화면 줄일 때 input이 없어져서 설정
            if (mobileChk) {
                setIsShow(false);
            }
        };

        mobileChk();
        window.addEventListener("resize", mobileChk);
    }, []);

    const onBtnClick = () => {
        // PC화면이면서, input이 보이지 않거나 값이 없을 때는 show & hide
        if (!isMobile && (!isShow || !inputVal)) {
            setIsShow(!isShow);
            return;
        }

        // 검색함수 실행
        onSearch();
    };

    const onSearch = () => {
        // 검색어를 매개변수로 받음

        console.log("검색");
    };

    const onInputChange = (e) => {
        setInputVal(e.currentTarget.value);
    };

    return (
        <HeaderContainer ref={ref}>
            <div className="header-wrap">
                <h1>
                    <NavLink to={"/"}>
                        <img src={logo} alt="로고" />
                    </NavLink>
                </h1>
                <nav>
                    <ul>
                        {Object.values(navList).map((nav) => (
                            <li key={nav.path}>
                                <NavLink to={nav.path}>{nav.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-search">
                    <span className={`search-input ${isMobile || isShow ? "active" : ""}`} ref={inputBox}>
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => {
                                onInputChange(e);
                            }}
                        />
                    </span>
                    <button onClick={onBtnClick}>
                        <img src={search} alt="검색하기" />
                    </button>
                </div>
            </div>
        </HeaderContainer>
    );
});

// display name 설정
// forwardRef 에러 해결 위함
Header.displayName = "Header";

export default Header;
