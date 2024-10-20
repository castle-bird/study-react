import { useEffect, useRef } from "react";
import styled from "styled-components";

const MainContainer = styled.div``;

const Main = () => {
    const mainContainer = useRef(null);

    // 메인 최소 높이 조절
    useEffect(() => {
        const setMinHeight = () => {
            if (mainContainer.current) {
                mainContainer.current.style.minHeight = `${window.innerHeight}px`;
            }
        };

        setMinHeight();
    }, []);

    return (
        <MainContainer ref={mainContainer}>
            <div className="main-wrap">
                <h1>메인</h1>
            </div>
        </MainContainer>
    );
};

export default Main;
