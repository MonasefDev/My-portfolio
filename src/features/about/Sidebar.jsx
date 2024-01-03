import React from "react";
import styled from "styled-components";
import { sections } from "../../data/sections";
import Sections from "./Sections";
import InfoItem from "./InfoItem";
import useIsMobile from "../../hooks/useIsMobile";
import ContactItem from "./ContactItem";

const StyledSidebar = styled.div`
  border-right: 1px solid var(--color-lines);
  display: grid;
  grid-template-columns: 5.6rem 1fr;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    border-right: none;
  }
`;
const Title = styled.div`
  height: 7rem;
  display: flex;
  color: var(--color-white);
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--color-lines);
`;

const StyledInfo = styled.div``;

function Sidebar({
  selectedSection,
  setSelectedSection,
  selectedItem,
  setSelectedItem,
}) {
  const isMobile = useIsMobile();
  return (
    <StyledSidebar>
      {isMobile ? (
        <Title>_about-me</Title>
      ) : (
        <Sections
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          setSelectedItem={setSelectedItem}
        />
      )}
      <StyledInfo>
        {isMobile ? (
          sections.map((section) => (
            <InfoItem
              key={section.title}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
              info={section}
              isMobile={isMobile}
            />
          ))
        ) : (
          <InfoItem
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            info={
              sections[
                sections.findIndex(
                  (section) => section.title === selectedSection
                )
              ]
            }
            isMobile={isMobile}
          />
        )}
        <ContactItem />
      </StyledInfo>
    </StyledSidebar>
  );
}

export default Sidebar;
