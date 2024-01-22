import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, onSelectProject, onToggleModal }) => (
  <ProjectListWrapper>
    {projects.map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        index={index}
        onSelectProject={onSelectProject}
        onToggleModal={onToggleModal}
      />
    ))}
  </ProjectListWrapper>
);

const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  justify-items: center;
  gap: 2.5rem;
  padding: 0 2rem;
  overflow: scroll;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
`;

export default ProjectList;
