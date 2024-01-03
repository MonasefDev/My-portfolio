import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectList from "../features/projects/ProjectList";
import ModelDetails from "../features/projects/ModelDetails";
import FilterTechnologies from "../features/projects/FilterTechnologies";

const ContainerProjects = styled.div`
  display: flex;
  margin: 0 auto;
`;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies)));

  useEffect(() => {
    // Fetch projects data from the JSON file
    fetch("db/data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Run this effect only once on component mount

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleFilterChange = (selectedTechnology) => {
    if (filteredTechnologies.includes(selectedTechnology)) {
      // Remove technology if it's already selected
      setFilteredTechnologies(filteredTechnologies.filter((tech) => tech !== selectedTechnology));
    } else {
      // Add technology if it's not selected
      setFilteredTechnologies([...filteredTechnologies, selectedTechnology]);
    }
    setSelectedProject(null); // Clear selected project when filtering
  };

  const filteredProjects = projects.filter(
    (project) =>
      filteredTechnologies.length === 0 || filteredTechnologies.every((tech) => project.technologies.includes(tech))
  );

  return (
    <ContainerProjects>
      <FilterTechnologies technologies={allTechnologies} onFilterChange={handleFilterChange} />
      <ProjectList projects={filteredProjects} onSelectProject={handleSelectProject} />
      <ModelDetails selectedProject={selectedProject} />
    </ContainerProjects>
  );
}

export default Projects;
