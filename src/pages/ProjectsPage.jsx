import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import { getData } from "../api/getData.js";
import "./styles/projectPage.css";

export default function ProjectsPage() {
  const [data, setData] = useState();

  useEffect(() => {
    getRepositories();
  }, []);
  const getRepositories = async () => {
    const resp = await getData();
    const details = await resp.map((repository) => {
      return {
        name: repository.name,
        description: repository.description,
        url: repository.html_url,
      };
    });
    setData(details);
  };
  return (
    <section className="sectionProject">
      <h1>Projects</h1>
      <article className="projectsCardContainer">
        {data?.map((data) => (
          <Card key={data.name} data={data}></Card>
        ))}
      </article>
    </section>
  );
}
