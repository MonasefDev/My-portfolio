import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectList from "../features/projects/ProjectList";
import ModelDetails from "../features/projects/ModelDetails";
import FilterTechnologies from "../features/projects/FilterTechnologies";
import HeaderText from "../ui/HeaderText";
import ScrollBar from "../ui/ScrollBar";
import HeaderTextMobile from "../ui/HeaderTextMobile";
import { useProjects } from "../features/dashboard/useProjects";
import { useTechs } from "../features/dashboard/techs/useTechs";
import Spinner from "../ui/Spinner";

function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isLoading, projects = [] } = useProjects();
  const { isLoadingTech, techs: allTechnologies = [] } = useTechs();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

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

  const displayTechnologies = filteredTechnologies.map((tech, index) => (
    <span style={{ color: "#607B96" }} key={tech}>
      {tech}
      {index < filteredTechnologies.length - 1 && "; "}
    </span>
  ));

  return (
    <ContainerProjects>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FilterTechnologies
            technologies={allTechnologies}
            onFilterChange={handleFilterChange}
          />

          <ProjectsWrapper>
            <HeaderText
              text={
                filteredTechnologies.length === 0 ? "all" : displayTechnologies
              }
            />

            <HeaderTextMobile>
              <span>{`// _Projects  `}</span> {"/ "}
              {filteredTechnologies.length === 0 ? "all" : displayTechnologies}
            </HeaderTextMobile>

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
        </>
      )}
    </ContainerProjects>
  );
}

const ContainerProjects = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ProjectsWrapper = styled.div`
  flex: 1;
`;

const BlurOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  backdrop-filter: blur(8px);
  pointer-events: ${({ isvisible }) => (isvisible ? "auto" : "none")};
`;

export default Projects;
