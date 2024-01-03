import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ListContainer = styled.div`
width: 80%;
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  align-items: center;
}
`;

const ProjectList = ({ projects, onSelectProject }) => (
  <ListContainer>
    <h2 className="title">Projects</h2>
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id} className="project-item">
          <ProjectCard project={project} onSelectProject={onSelectProject} />
        </li>
      ))}
    </ul>
  </ListContainer>
);

export default ProjectList;
