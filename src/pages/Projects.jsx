import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectList from "../features/projects/ProjectList";
import ModelDetails from "../features/projects/ModelDetails";
import FilterTechnologies from "../features/projects/FilterTechnologies";
import HeaderText from "../ui/HeaderText";
import ScrollBar from "../ui/ScrollBar";

const fetchData = async (setProjects) => {
  try {
    const response = await fetch("db/data.json");
    const data = await response.json();
    setProjects(data);
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  useEffect(() => {
    fetchData(setProjects);
  }, []);

  const handleSelectProject = (project) => setSelectedProject(project);

  const handleFilterChange = (selectedTechnology) => {
    setFilteredTechnologies((prevTech) =>
      prevTech.includes(selectedTechnology)
        ? prevTech.filter((tech) => tech !== selectedTechnology)
        : [...prevTech, selectedTechnology]
    );
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter(
    (project) =>
      filteredTechnologies.length === 0 ||
      filteredTechnologies.every((tech) => project.technologies.includes(tech))
  );

  const handleToggleModal = (isVisible) => setIsModalVisible(isVisible);

  const handleBlurOverlayClick = () => handleToggleModal(false);

  return (
    <ContainerProjects>
      <FilterTechnologies
        technologies={allTechnologies}
        onFilterChange={handleFilterChange}
      />
      <ProjectsWrapper>
        <HeaderText
          text={
            filteredTechnologies.length === 0
              ? "All"
              : filteredTechnologies.map((tech) => (
                  <span key={tech}>{tech}; </span>
                ))
          }
        />
        <ProjectList
          projects={filteredProjects}
          onSelectProject={handleSelectProject}
          onToggleModal={handleToggleModal}
        />
      </ProjectsWrapper>
      <ScrollBar />
      {isModalVisible && (
        <>
          <BlurOverlay
            isvisible={isModalVisible.toString()}
            onClick={handleBlurOverlayClick}
          />
          <ModelDetails
            selectedProject={selectedProject}
            onCloseModal={() => handleToggleModal(false)}
          />
        </>
      )}
    </ContainerProjects>
  );
}

const ContainerProjects = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectsWrapper = styled.div`
  flex: 1;
`;

const BlurOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  backdrop-filter: blur(8px);
  pointer-events: ${({ isvisible }) => (isvisible ? "auto" : "none")};
`;

export default Projects;
