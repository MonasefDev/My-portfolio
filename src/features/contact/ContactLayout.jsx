import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import ContactForm from "./ContactForm";
import HeaderText from "../../ui/HeaderText";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { snippet1 } from "../../data/snippet";

function ContactLayout() {
  return (
    <StyledContactLayout>
      <Sidebar />
      <ContentContainer>
        <HeaderText text="contacts" />
        <Content>
          <ContactForm />
          <SnippetContainer>code snippet here</SnippetContainer>
        </Content>
      </ContentContainer>
    </StyledContactLayout>
  );
}

const StyledContactLayout = styled.div`
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
`;

const SnippetContainer = styled.div`
  padding: 2rem;
`;

export default ContactLayout;
