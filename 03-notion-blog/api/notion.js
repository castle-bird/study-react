// api/notion.js
import axios from "axios";

export default async function handler(req, res) {
    try {
        const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NOTION_ID}/query`;

        const response = await axios.post(
            notionApiUrl,
            {
                filter: {
                    and: [
                        {
                            property: "Title",
                            rich_text: {
                                is_not_empty: true, // Title 속성이 비어있지 않은 경우
                            },
                        },
                        {
                            property: "Role",
                            rich_text: {
                                is_not_empty: true, // Role 속성이 비어있지 않은 경우
                            },
                        },
                        {
                            property: "Tag",
                            multi_select: {
                                is_not_empty: true, // Tag 속성이 비어있지 않은 경우
                            },
                        },
                        {
                            property: "Timeline",
                            date: {
                                is_not_empty: true, // Timeline 속성이 비어있지 않은 경우
                            },
                        },
                    ],
                },
                sorts: [
                    {
                        property: "Timeline", // Timeline을 기준으로 정렬
                        direction: "ascending", // 오름차순 정렬
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
                    "Notion-Version": "2022-06-28",
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.data) throw new Error(`Notion API Error: ${response.statusText}`);

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching data from Notion API:", error.message);
        res.status(500).json({ error: error.message });
    }
}
