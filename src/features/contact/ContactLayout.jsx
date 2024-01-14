import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import ContactForm from "./ContactForm";
import HeaderText from "../../ui/HeaderText";
import useIsMobile from "../../hooks/useIsMobile";
import CodeSnippet from "./CodeSnippet";

function ContactLayout() {
  return (
    <StyledContactLayout>
      <Sidebar />
      <ContentContainer>
        <HeaderText text="contacts" />
        <Content>
          <ContactForm />
          <CodeSnippet />
        </Content>
      </ContentContainer>
    </StyledContactLayout>
  );
}

const StyledContactLayout = styled.div`
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
`;

export default ContactLayout;
