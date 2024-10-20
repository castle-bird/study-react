import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    .header-wrap {
        display: flex;
        justify-content: space-between;

        max-width: 1440px;
        margin: 0 auto;

        .depth1 {
            display: flex;
            gap: 0 30px;
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

const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-wrap">
                <h1>로고</h1>
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
};

export default Header;
