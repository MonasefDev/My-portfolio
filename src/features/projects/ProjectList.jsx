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

const ProjectListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  align-items: center;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default ProjectList;
