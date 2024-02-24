import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import styled from "styled-components";

function ModelDetails({ selectedProject, onCloseModal }) {
  console.log(selectedProject.images);
  const images = selectedProject.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const tech = selectedProject.technologies.map((technology, index) => (
    <span key={index}>{technology}</span>
  ));

  const features = selectedProject.features.map((feature, index) => (
    <li key={index}>
      <p>{feature}</p>
    </li>
  ));

  return (
    <DetailsContainer>
      <CloseButton onClick={() => onCloseModal(false)}>✕</CloseButton>
      {selectedProject && (
        <div>
          <div>
            <ReactImageGallery items={images} />
          </div>
          <DetailsContent>
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
          </DetailsContent>
        </div>
      )}
    </DetailsContainer>
  );
}

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
  top: 2%;
  z-index: 9999;
  background-color: var(--color-primary-1);
  height: 90%;
  overflow: scroll;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem 2rem 2rem;
  }

  @media only screen and (max-width: 768px) {
    left: 5%;
    right: 5%;
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

const DetailsContent = styled.div`
  padding: 4rem 8rem 4rem 10rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
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
    display: block;
  }

  span {
    padding: 0.4rem 0.8rem;
    background-color: var(--color-teal-1);
    display: inline-block;
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

  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 0.8rem;
    text-decoration-line: underline;
  }
`;

export default ModelDetails;
