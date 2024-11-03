import { useContext } from "react";
import styled from "styled-components";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import WorkItems from "../../components/WorkItems";

import { Context } from "../../context/NotionContext";
import properties from "../../global/GlobalStyleVar";

const PublishConainer = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;

        max-width: calc(1440px + 2rem);
        height: 100%;
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
    }
`;

const Front = () => {
    const { notionData } = useContext(Context);

    return (
        <PublishConainer>
            <ul>
                {notionData.loading && <Loading />}
                {notionData.error && <Error />}
                {notionData.data &&
                    notionData.data.results
                    .filter(
                        (item) =>
                            item.properties.Tag.multi_select.some((tag) => tag.name === "퍼블리싱") || // 태그에 '퍼블리싱'이 있거나
                            (item.properties.Role.rich_text[0]?.plain_text.includes("퍼블리싱")) // Role에 '퍼블리싱'있는 것을 filter로 추출
                    )
                        .map((item, idx) => (
                            <li key={idx}>
                                <WorkItems
                                   title={item.properties.Title.title[0]?.plain_text || ""}
                                   image={item.cover?.file?.url || ""}
                                   roles={item.properties.Role.rich_text[0]?.plain_text || ""}
                                   timelinesStarts={item.properties.Timeline.date?.start || ""}
                                   timelinesEnds={item.properties.Timeline.date?.end || ""}
                                   tags={item.properties.Tag?.multi_select || [""]}
                                />
                            </li>
                        ))}
            </ul>
        </PublishConainer>
    );
};

export default Front;
