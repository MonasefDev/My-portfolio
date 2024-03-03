import React from "react";
import styled from "styled-components";

function ProjectCard({
  project,
  index,
  techs,
  onSelectProject,
  onToggleModal,
}) {
  const techImage = techs?.find(
    (tech) => tech.name.toLowerCase() === project.technologies[0].toLowerCase()
  );
  const handleProjectSelect = () => {
    onSelectProject(project);
    onToggleModal(true);
  };

  return (
    <CardContainer>
      <CardHeading>
        <span>Project {index + 1}</span>
        {" // _"}
        {project.title.split(" ").join("-")}
      </CardHeading>
      <CardDetailsContainer>
        <CardImage>
          <img src={project.poster_img} alt={project.title} />
          <TechImage src={techImage?.tech_icon} alt={project.technologies[0]} />
        </CardImage>
        <CardDetails>
          <CardParagraph>{project.description}</CardParagraph>
          <CardButton onClick={handleProjectSelect}>View Details</CardButton>
        </CardDetails>
      </CardDetailsContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  max-width: 40rem;
  min-height: 40rem;
  width: 100%;
  padding-top: 1.6rem;
`;

const CardHeading = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--color-grey-1);
  display: block;
  font-weight: 500;

  span {
    color: var(--color-purple-2);
    font-weight: 700;
  }
`;

const CardDetailsContainer = styled.div`
  border: 1px solid var(--color-lines);
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--color-primary-2);
`;

const CardImage = styled.div`
  margin-bottom: 1.6rem;
  height: 15rem;
  overflow: hidden;
  position: relative;
  img:first-child {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem 0.8rem 0 0;
  }
`;

const TechImage = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
`;

const CardDetails = styled.div`
  padding: 1rem 3rem 3rem 2rem;
`;

const CardParagraph = styled.p`
  margin-bottom: 1.6rem;
  height: 4rem;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

const CardButton = styled.button`
  background-color: var(--color-button-p-1);
  color: #fff;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-button-p-2);
  }
`;

export default ProjectCard;
