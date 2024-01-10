import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { sections } from "../../data/sections";
import CodeSnippet from "./CodeSnippet";

const StyledAboutLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: 100%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
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
      <ContentSection>
        <Content
          selectedSection={selectedSection}
          selectedItem={selectedItem}
        />
        <CodeSnippet />
      </ContentSection>
    </StyledAboutLayout>
  );
}

export default AboutLayout;
