import loading from '../assets/images/layout/loading.gif'

import styled from 'styled-components';

const LoadingContainer = styled.div`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        display: block;
    }
`;

const Loading = () =>{
    return(
        <LoadingContainer>
            <img src={loading} alt="로딩중..." />
        </LoadingContainer>
    )
}

export default Loading;