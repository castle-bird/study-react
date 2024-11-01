import { useContext } from "react";
import styled from "styled-components";

import Loading from "../components/Loading";
import Error from "../components/Error";
import HomeItems from "../components/HomeItems";

import { Context } from "../context/NotionContext";
import properties from "../global/GlobalStyleVar";

const MainContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;

    max-width: calc(1440px + 2rem);
    margin: 0 auto;
    gap: 2rem;

    ${properties.mediaQuery.tablet(`
        gap: 1.5rem;
    `)}

    ${properties.mediaQuery.mobile(`
        gap: 1rem;
    `)}

    li {
        width: calc((100% - 8rem) / 5);

        ${properties.mediaQuery.desktopSmall(`
            width: calc((100% - 6rem) / 4);
        `)}

        ${properties.mediaQuery.tablet(`
            width: calc((100% - 3rem) / 3);
        `)}

        ${properties.mediaQuery.mobile(`
            width: calc((100% - 1rem) / 2);
        `)}

        ${properties.mediaQuery.mobileSmall(`
            width: 100%;
        `)}
    }
`;

const Home = () => {
    const { notionData } = useContext(Context);

    return (
        <MainContainer>
            {notionData.loading ? (
                <Loading />
            ) : notionData.error ? (
                <Error />
            ) : notionData.data ? ( // 데이터가 있는지 확인
                notionData.data.results.map((item, idx) => (
                    <li key={idx}>
                        <HomeItems
                            title={item.properties.Title.title[0]?.plain_text || ""}
                            image={item.cover.file?.url || ""}
                            roles={item.properties.Role?.rich_text[0]?.plain_text || ""}
                            timelinesStarts={item.properties.Timeline?.date?.start || ""}
                            timelinesEnds={item.properties.Timeline?.date?.end || ""}
                            tags={item.properties.Tag?.multi_select || [""]}
                        />
                    </li>
                ))
            ) : (
                <p>데이터가 없습니다.</p> // 데이터가 없을 때 표시할 메시지
            )}
        </MainContainer>
    );
};

export default Home;
