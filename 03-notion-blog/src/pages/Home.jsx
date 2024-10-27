import { useState,useEffect } from "react";
import styled from "styled-components";

const MainContainer = styled.div``;
import axios from "axios";


const Home = () => {
    const [state, setState] = useState();

    useEffect(()=>{
        const fetchNotionDatabase = async () => {
        
            try {
                const response = await axios.get(`/api/databases/${import.meta.env.VITE_NOTION_ID}`, {
                    headers: {
                        'Authorization': import.meta.env.VITE_NOTION_TOKEN,
                        'Notion-Version' : '2022-06-28'
                    },
                });
        
                return setState(response.data);
            } catch (error) {
                console.error(error.response ? error.response.data : error.message);
            }
        };
        // 호출 함수 실행
        fetchNotionDatabase();
    },[])

    return (
        <MainContainer>
            <h1>메인</h1>
            {JSON.stringify(state)}
        </MainContainer>
    );
};

export default Home;
