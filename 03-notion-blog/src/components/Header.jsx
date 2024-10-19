import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header``;

const Header = () => {
    return (
        <HeaderContainer>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>홈</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/work-list"}>작업목록</NavLink>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
