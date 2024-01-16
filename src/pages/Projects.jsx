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

const ProjectsWrapper = styled.div`
  flex: 1;
`;

const ProjectsHeader = styled.div`
  margin-bottom: 12px;
  border-bottom: 1px solid var(--color-lines);
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
`;

const ClearFilterButton = styled.button`
  background-color: transparent;
  border: none;
`;

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  backdrop-filter: blur(8px);
  pointer-events: ${({ isvisible }) => (isvisible ? "auto" : "none")};
`;

const StyledClearFilterButton = styled(ClearFilterButton)`
  background-color: transparent;
  border: none;
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
    const fetchData = async () => {
      try {
        const response = await fetch("db/data.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
      <ProjectsWrapper>
        <ProjectsHeader>
          {filteredTechnologies.map((tech) => (
            <span key={tech}>{tech}; </span>
          ))}
          <StyledClearFilterButton>✕</StyledClearFilterButton>
        </ProjectsHeader>
        <ProjectList
          projects={filteredProjects}
          onSelectProject={handleSelectProject}
          onToggleModal={handleToggleModal}
        />
      </ProjectsWrapper>
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

export default Projects;
