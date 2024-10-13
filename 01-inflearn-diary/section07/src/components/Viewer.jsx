import { useState } from "react";
import styled from "styled-components";

const ConterContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;

    div {
        font-size: 3rem;
        font-weight: 700;
    }

    h1 {
        background-color: #eaeaea;
        padding: 40px 20px;
        border-radius: 20px;
    }
`;

const Viewer = ({counter}) => {
    return (
        <ConterContainer>
            <div>현재 카운트 :</div>
            <h1>{counter}</h1>
        </ConterContainer>
    );
};

export default Viewer;
