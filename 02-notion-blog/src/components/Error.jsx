import errorImg from '../assets/images/layout/error.png'

import styled from 'styled-components';

const ErrorContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;

    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    font-size: 2rem;

    img {
        margin-bottom: 20px;
    }
`

const Error = () =>{
    return(
        <ErrorContainer>
            <img src={errorImg} alt=''/>
            노션 API에러
        </ErrorContainer>
    )
}

export default Error;