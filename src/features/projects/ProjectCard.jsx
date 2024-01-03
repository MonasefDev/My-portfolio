import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  border-radius: .8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .card-heading {
    margin-bottom: .8rem;
  }

  .card-paragraph {
    margin-bottom: 1.6rem;
  }

  .card-button {
    background-color: var(--color-button-p-1);
    color: #fff;
    padding: .8rem 1.6rem;
    border: none;
    border-radius: .4rem;
    cursor: pointer;
  }

  .card-button:hover {
    background-color: var(--color-button-p-2);
  }
`;

function ProjectCard({ project, onSelectProject, onToggleModal }) {
  const handleProjectSelect = () => {
    onSelectProject(project);
    onToggleModal(true);
  };

  return (
    <CardContainer>
      <h3 className="card-heading">{project.title}</h3>
      <p className="card-paragraph">{project.description}</p>
      <button className="card-button" onClick={handleProjectSelect}>
        View Details
      </button>
    </CardContainer>
  );
}

export default ProjectCard;
