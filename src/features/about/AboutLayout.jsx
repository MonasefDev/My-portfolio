import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { sections } from "../../data/sections";

const StyledAboutLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

function AboutLayout() {
  const [selectedSection, setSelectedSection] = useState(sections[0].title);
  const [selectedItem, setSelectedItem] = useState(sections[0].info[0]);

  return (
    <StyledAboutLayout>
      <Sidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Content selectedSection={selectedSection} selectedItem={selectedItem} />
    </StyledAboutLayout>
  );
}

export default AboutLayout;
