import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectList from "../features/projects/ProjectList";
import ModelDetails from "../features/projects/ModelDetails";
import FilterTechnologies from "../features/projects/FilterTechnologies";

const ContainerProjects = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
`;

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  backdrop-filter: blur(20px);
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;

function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  useEffect(() => {
    fetch("db/data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleFilterChange = (selectedTechnology) => {
    if (filteredTechnologies.includes(selectedTechnology)) {
      setFilteredTechnologies(
        filteredTechnologies.filter((tech) => tech !== selectedTechnology)
      );
    } else {
      setFilteredTechnologies([...filteredTechnologies, selectedTechnology]);
    }
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter(
    (project) =>
      filteredTechnologies.length === 0 ||
      filteredTechnologies.every((tech) => project.technologies.includes(tech))
  );

  const handleToggleModal = (isVisible) => {
    setIsModalVisible(isVisible);
  };

  const handleBlurOverlayClick = () => {
    handleToggleModal(false);
  };

  return (
    <ContainerProjects>
      <FilterTechnologies
        technologies={allTechnologies}
        onFilterChange={handleFilterChange}
      />
      <ProjectList
        projects={filteredProjects}
        onSelectProject={handleSelectProject}
        onToggleModal={handleToggleModal}
      />
      {isModalVisible && (
        <BlurOverlay
          isVisible={isModalVisible}
          onClick={handleBlurOverlayClick}
        />
      )}
      {isModalVisible && (
        <ModelDetails
          selectedProject={selectedProject}
          onCloseModal={() => handleToggleModal(false)}
        />
      )}
    </ContainerProjects>
  );
}

export default Projects;
