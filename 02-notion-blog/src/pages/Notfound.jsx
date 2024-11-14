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

const WorkList = () =>{
    return(
        <ErrorContainer>
            <img src={errorImg} alt=''/>
            페이지를 찾을 수 없습니다.
        </ErrorContainer>
    )
}

export default WorkList;