import styled from "styled-components";
import search from "../assets/images/layout/search.svg";

const SearchButtonContainer = styled.button`
    width: 34px;
    height: 34px;
    padding: 0;
    background: none;

    img {
        display: block;
        margin: 0 auto;
    }
`;

const SearchButton = ({onClick}) => {
    return (
        <SearchButtonContainer onClick={onClick}>
            <img src={search} alt="검색하기" />
        </SearchButtonContainer>
    );
};

export default SearchButton;
