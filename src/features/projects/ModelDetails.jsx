import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import styled from "styled-components";

const DetailsContainer = styled.div`
  margin-top: 2rem;
  padding: 5rem;
  border: 1px solid var(--color-lines);
  border-radius: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--color-grey-2);
  position: fixed;
  left: 10%;
  right: 10%;
  top: 0;
  z-index: 9999;
  background-color: var(--color-primary-1);
  height: 95%;
  overflow: scroll;

  .details {
    &-wrapper {
      overflow: scroll;
    }

    &-gallery {
      margin: 0 auto;
      width: 90%;
    }

    &-content {
      padding: 4rem 8rem 4rem 10rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--color-teal-1);
  cursor: pointer;
`;

const DetailsSubheading = styled.h3`
  margin-bottom: 0.8rem;
`;

const DetailsParagraph = styled.p`
  margin-bottom: 1.2rem;
`;

const DetailsBox = styled.div`
  margin-bottom: 1.2rem;
  margin-top: 2rem;
  h4 {
    display: inline;
  }

  span {
    padding: 0.4rem 0.8rem;
    background-color: var(--color-teal-1);
    border-radius: 0.4rem;
    color: var(--color-lines);
    margin: 0.4rem;
    margin-top: 2rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: var(--color-button-d-2);
    }
  }

  li {
    display: table-row;
  }

  li:before {
    content: "✓";
    color: var(--color-teal-1);
  }

  li > p {
    display: table-cell;
    padding: 1rem;

    &:hover {
      color: var(--color-white);
    }
  }
`;

const DetailsLink = styled.a`
  color: var(--color-teal-1);
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

function ModelDetails({ selectedProject, onCloseModal }) {
  const images = selectedProject.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const tech = selectedProject.technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ));

  const features = selectedProject.features.map((feature) => (
    <li key={feature}>
      <p>{feature}</p>
    </li>
  ));

  return (
    <DetailsContainer>
      <CloseButton onClick={() => onCloseModal(false)}>✕</CloseButton>
      {selectedProject ? (
        <div className="details">
          <div className="details-wrapper">
            <div className="details-gallery">
              <ReactImageGallery items={images} />
            </div>
            <div className="details-content">
              <DetailsSubheading>{selectedProject.title}</DetailsSubheading>
              <DetailsParagraph>
                Description: {selectedProject.description}
              </DetailsParagraph>
              <DetailsParagraph>
                Details: {selectedProject.details}
              </DetailsParagraph>
              <DetailsBox>
                <h4>Technologies:</h4>
                {tech}
              </DetailsBox>
              <DetailsBox>
                {" "}
                <h4>Features:</h4>
                <ul> {features} </ul>
              </DetailsBox>
              <DetailsLink
                href={selectedProject.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </DetailsLink>
              <DetailsLink
                href={selectedProject.live_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </DetailsLink>
            </div>
          </div>
        </div>
      ) : (
        <DetailsParagraph>Select a project to view details.</DetailsParagraph>
      )}
    </DetailsContainer>
  );
}

export default ModelDetails;
