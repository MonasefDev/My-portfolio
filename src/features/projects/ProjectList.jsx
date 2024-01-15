import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ListContainer = styled.div`
  width: 80%;
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-gap: 2rem;
    align-items: center;
    padding: 6rem 8rem;
  }
`;

const ProjectList = ({ projects, onSelectProject, onToggleModal }) => (
  <ListContainer>
    <ul className="project-list">
      {projects.map((project, i) => (
        <li key={project.id} className="project-item">
          <ProjectCard
            project={project}
            index={i}
            onSelectProject={onSelectProject}
            onToggleModal={onToggleModal}
          />
        </li>
      ))}
    </ul>
  </ListContainer>
);

export default ProjectList;
