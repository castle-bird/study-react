import { useEffect, useState } from "react";
import styled from "styled-components";

import Loading from "../components/Loading";
import Error from "../components/Error";
import HomeItems from "../components/HomeItems";

const MainContainer = styled.div``;

const Home = ({ data }) => {
    const [titles, setTitles] = useState([]); // 초기값을 빈 배열로 설정


    useEffect(() => {
        if (data.data) {
            const getTitle = data.data.results.map((item) => item.properties.Title.title[0].plain_text)
            console.log(getTitle)// 정상적으로 배열이 담김
            setTitles(getTitle)
        }
        
        
    }, [data]); // data를 의존성 배열에 추가

    return (
        <MainContainer>
            {
                data.error ? 
                <Error /> :
                data.loading ? 
                <Loading /> :
                titles.map((item,idx) => <HomeItems key={idx} title={item}/>)
            }
        </MainContainer>
    );
};

export default Home;
