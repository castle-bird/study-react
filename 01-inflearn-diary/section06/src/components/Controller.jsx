import styled from "styled-components";

const ButtonContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    box-sizing: border-box;

    display: flex;
    gap: 10px;
    background-color: #eaeaea;
    padding: 40px 20px;
    border-radius: 20px;

    button {
        cursor: pointer;
    }
`;

const Controller = ({ onClickButton }) => {
    return (
        <ButtonContainer>
            <button
                onClick={() => {
                    onClickButton(-1);
                }}
            >
                -1
            </button>
            <button
                onClick={() => {
                    onClickButton(-10);
                }}
            >
                -10
            </button>
            <button
                onClick={() => {
                    onClickButton(-100);
                }}
            >
                -100
            </button>
            <button
                onClick={() => {
                    onClickButton(100);
                }}
            >
                +100
            </button>
            <button
                onClick={() => {
                    onClickButton(10);
                }}
            >
                +10
            </button>
            <button
                onClick={() => {
                    onClickButton(1);
                }}
            >
                +1
            </button>
        </ButtonContainer>
    );
};

export default Controller;
