import { useContext } from "react";
import { Context } from "../context/NotionContext";
import styled from "styled-components";

import properties from "../global/GlobalStyleVar";

import Loading from "../components/Loading";
import Error from "../components/Error";
import WorkItems from "../components/WorkItems";

const SearchContainer = styled.div`
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

const Search = () => {
    const { notionData, searchItem } = useContext(Context);

    return (
        <SearchContainer>
            <ul>
                {notionData.loading && <Loading />}
                {notionData.error && <Error />}
                {notionData.data &&
                    notionData.data.results
                        .filter(
                            (item) =>
                                item.properties.Tag.multi_select.some((tag) => tag.name.includes(searchItem)) || // 태그에 검색어 있는 것
                                item.properties.Role.rich_text[0]?.plain_text.includes(searchItem) // Role에 검색어 있는 것
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
        </SearchContainer>
    );
};

export default Search;
