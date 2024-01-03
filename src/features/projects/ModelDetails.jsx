import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
  margin-top: 2rem;
  padding: 1.6rem;
  border: 1px solid #ccc;
  border-radius: .8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


  .details-heading {
    margin-bottom: 1.6rem;
  }

  .details-subheading {
    margin-bottom: .8rem;
  }

  .details-paragraph {
    margin-bottom: 1.2rem;
  }

  .details-link {
    color: #3498db;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }

`;

function ModelDetails({ selectedProject, onCloseModal }) {
  return (
    <DetailsContainer>
      <h2 className="details-heading">Model Details</h2>
      {selectedProject ? (
        <div>
          <h3 className="details-subheading">{selectedProject.title}</h3>
          <p className="details-paragraph">Description: {selectedProject.description}</p>
          <p className="details-paragraph">Details: {selectedProject.details}</p>
          <p className="details-paragraph">Technologies: {selectedProject.technologies.join(", ")}</p>
          <p className="details-paragraph">Features: {selectedProject.features.join(", ")}</p>
          <a
            className="details-link"
            href={selectedProject.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            className="details-link"
            href={selectedProject.live_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      ) : (
        <p className="details-paragraph">Select a project to view details.</p>
      )}
      <button className="details-link" onClick={() => onCloseModal(false)}>
        Close
      </button>
    </DetailsContainer>
  );
}

export default ModelDetails;
