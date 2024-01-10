import React from "react";
import styled from "styled-components";
import { sections } from "../../data/sections";

const StyledSections = styled.div`
  border-right: 1px solid var(--color-lines);
  overflow: hidden;
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const Img = styled.img`
  height: 2.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  filter: brightness(${(props) => (props.selected ? "1" : "0.5")});
`;

function Sections({ selectedSection, setSelectedSection, setSelectedItem }) {
  return (
    <StyledSections>
      {sections.map((section) => (
        <Img
          onClick={() => {
            setSelectedSection(section.title);
            setSelectedItem(section.info[0]);
          }}
          selected={selectedSection === section.title}
          key={section.title}
          alt={section.title}
          src={section.icon}
        />
      ))}
    </StyledSections>
  );
}

export default Sections;
