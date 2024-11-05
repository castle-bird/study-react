import { forwardRef, useEffect, useState, useRef, useCallback, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import properties from "../global/GlobalStyleVar";

import logo from "../assets/images/layout/logo.svg";
import SearchButton from "./SearchButton";
import { Context } from "../context/NotionContext";

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
            display: flex;
            height: 100%;
            align-items: center;
            /* a {
                display: flex;
                height: 100%;
                align-items: center;

                ${properties.mediaQuery.tablet(`
                   justify-content: center;

                    img {
                        width: 130px;
                    }
                `)}
            } */
            ${properties.mediaQuery.tablet(`
                justify-content: center;

                img {
                    width: 130px;
                }
            `)}
        }

        nav {
            position: relative;

            ${properties.mediaQuery.tablet(`
                width: max-content;
                margin: 0.5rem auto 0;
            `)};

            .line {
                position: absolute;
                left: 0;
                bottom: 0;

                height: 2px;
                margin-left: -6px;
                padding: 0 6px;
                background-color: #ea580c;

                box-sizing: initial;
                transition: 0.3s;
            }

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
                            padding: 0.5rem 0;
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
        }
    }
`;

// navi 메뉴 data
const navList = {
    home: {
        label: "All",
        path: "/",
    },
    front: {
        label: "프론트엔드",
        path: "/work-list/front",
    },
    pub: {
        label: "퍼블리싱",
        path: "/work-list/publish",
    },
};

const Header = forwardRef((props, ref) => {
    const [isMobile, setIsMobile] = useState(); // PC,MOBILE 화면 체크하는 state
    const [isShow, setIsShow] = useState(false); // 검색 input이 보이는지 체크하는 state
    const [inputVal, setInputVal] = useState(""); // 검색어 input value
    const inputBox = useRef(null); // .search-input
    const navLine = useRef(null); // .nav > div
    const navButtons = useRef([]); // .nav > ul > li > a
    const [currentPathname, setCurrentPathname] = useState(location.pathname);
    const { setSearchItem } = useContext(Context);
    const nav = useNavigate();

    // PC, MOBILE을 체크한다
    const mobileChk = useCallback(() => {
        const mobile = window.innerWidth < 1280;

        setIsMobile(mobile);
        // 모바일 상태에서만 isShow를 false로 설정
        // PC에서 모바일로 화면 줄일 때 input이 없어져서 설정
        if (mobileChk) {
            setIsShow(false);
        }
    }, []);

    useEffect(() => {
        mobileChk();
        window.addEventListener("resize", mobileChk);
    }, [mobileChk]);

    // 검색 기능
    const onSearch = useCallback(
        (value) => {
            const trimmedValue = value.trim(); // 현재 입력값을 로컬 변수에 저장\

            if (trimmedValue || "") {
                setInputVal(trimmedValue); // 상태 업데이트
                setSearchItem(inputVal);
                nav(`/search`); // 네비게이션
            } else {
                alert("검색어를 입력해주세요!");
            }
        },
        [nav, inputVal, setSearchItem]
    );

    // 검색버튼 show & hide
    const onBtnClick = useCallback(() => {
        // PC화면이면서, 값이 없으면 show & hide
        if (!isMobile && !inputVal) {
            setIsShow(!isShow);
            return;
        }

        // 검색함수 실행
        onSearch(inputVal);
    }, [isShow, inputVal, isMobile, onSearch]);

    const onMoveLine = useCallback(() => {
        const activeIndex = navButtons.current.findIndex((btn) => btn.getAttribute("href") === currentPathname); // 활성화된 nav의 index값

        // 활설화된 네비가 있을 경우에만
        // not found의 경우 활성화된 nav가 없어서 에러 발생
        if (activeIndex !== -1) {
            const left = navButtons.current[activeIndex].offsetLeft;
            const width = navButtons.current[activeIndex].scrollWidth;

            navLine.current.style.cssText = `left:${left}px; width:${width}px`;
        } else {
            navLine.current.style.cssText = `left:0px; width:0px; padding:0;`;
        }
    }, [currentPathname]);

    const onNavClick = (e) => {
        const pathname = e.currentTarget.getAttribute("href");
        setCurrentPathname(pathname);

        onMoveLine();
    };

    useEffect(() => {
        onMoveLine();
        window.addEventListener("load", onMoveLine);
        return () => {
            window.removeEventListener("load", onMoveLine); // 클린업으로 이벤트 리스너 해제
        };
    }, [onMoveLine, isMobile]);

    return (
        <HeaderContainer ref={ref}>
            <div className="header-wrap">
                <h1>
                    {/* <NavLink to={"/"}>
                        <img src={logo} alt="로고" />
                    </NavLink> */}
                    <img src={logo} alt="로고" />
                </h1>
                <nav>
                    <div className="line" ref={navLine}></div>
                    <ul>
                        {Object.values(navList).map((nav, idx) => (
                            <li key={nav.path}>
                                <NavLink
                                    to={nav.path}
                                    onClick={(e) => {
                                        onNavClick(e);
                                    }}
                                    ref={(item) => (navButtons.current[idx] = item)} // href 속성 출력 activeIndex를 구하기 위함
                                >
                                    {nav.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-search">
                    <span className={`search-input ${isMobile || isShow ? "active" : ""}`} ref={inputBox}>
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setInputVal(e.currentTarget.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    onSearch(e.currentTarget.value); // Enter 키를 누르면 검색 실행
                                }
                            }}
                        />
                    </span>
                    <SearchButton onClick={onBtnClick} />
                </div>
            </div>
        </HeaderContainer>
    );
});

// display name 설정
// forwardRef 에러 해결 위함
Header.displayName = "Header";

export default Header;
