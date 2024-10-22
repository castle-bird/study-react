import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/databases/11f0e4e4d4fe80c991ebd3aa6550b7c7/query", {}, {
          headers: {
            Authorization: "Bearer ntn_R3840201982QsvJ5ufccZGLQXJwoHcz6pZ7piNCB7fqcII",
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
        });

        const results = response.data.results.map((page) => {
          const projectName = page.properties.ProjectName.title[0]?.plain_text || "No Name";
          const tags = page.properties.태그.multi_select.map((tag) => tag.name);
          
          return {
            id: page.id,
            name: projectName,
            tags: tags,
          };
        });

        setProjects(results);
      } catch (error) {
        console.error("Error fetching data from Notion API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> - Tags: {project.tags.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
