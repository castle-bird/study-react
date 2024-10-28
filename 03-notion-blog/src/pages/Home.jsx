import { useState, useEffect } from "react";
import styled from "styled-components";

const MainContainer = styled.div``;
import axios from "axios";

const Home = () => {
    const [state, setState] = useState();

    useEffect(() => {
        const getNOTION = async () => {
            try {
                const response = await axios.get(`/api/notion`);
                setState(response.data);
            } catch (error) {
                console.error("에러 메세지:", error.message);
            }
        };

        getNOTION();
    }, []);

    return (
        <MainContainer>
            <h1>메인</h1>
            {JSON.stringify(state)}
        </MainContainer>
    );
};

export default Home;
