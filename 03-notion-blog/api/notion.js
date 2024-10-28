// api/notion.js
import axios from "axios";

export default async function handler(req, res) {
    try {
        const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NOTION_ID}`;
        
        const response = await axios.get(notionApiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
                "Notion-Version": "2022-06-28",
            },
        });

        if (!response.data) throw new Error(`Notion API Error: ${response.statusText}`);

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching data from Notion API:", error.message);
        res.status(500).json({ error: error.message });
    }
}
