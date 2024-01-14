import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 40rem;
  min-height: 40rem;
  padding: 1.6rem;
  .card-heading {
    margin-bottom: 1rem;
    color: var(--color-grey-1);
    display: block;
    font-weight: 500;

    span {
      color: var(--color-purple-2);
      font-weight: 700;
    }
  }
`;

const CardDetails = styled.div`
  border: 1px solid var(--color-lines);
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .card-details {
    padding: 3rem;
  }

  .card-image {
    margin-bottom: 1.6rem;
    height: 15rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.8rem 0.8rem 0 0;
    }
  }

  .card-paragraph {
    margin-bottom: 1.6rem;
  }

  .card-button {
    background-color: var(--color-button-p-1);
    color: #fff;
    padding: 0.8rem 1.6rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  .card-button:hover {
    background-color: var(--color-button-p-2);
  }
`;

function ProjectCard({ project, index, onSelectProject, onToggleModal }) {
  const handleProjectSelect = () => {
    onSelectProject(project);
    onToggleModal(true);
  };

  return (
    <CardContainer>
      <h3 className="card-heading">
        <span>Project {index + 1}</span>
        {" // _"}
        {project.title.split(" ").join("-")}
      </h3>
      <CardDetails>
        <div className="card-image">
          <img src={`${project.poster_img}${index + 1}`} alt={project.title} />
        </div>
        <div className="card-details">
          <p className="card-paragraph">{project.description}</p>
          <button className="card-button" onClick={handleProjectSelect}>
            View Details
          </button>
        </div>
      </CardDetails>
    </CardContainer>
  );
}

export default ProjectCard;
