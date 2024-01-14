import React from "react";
import styled from "styled-components";
import HeaderText from "../../ui/HeaderText";
import CodeSnippetGist from "./CodeSnippetGist";

function CodeSnippet() {
  return (
    <StyledCodeSnippet>
      <HeaderText />
      <CodeSnippetSection>
        <Container>
          <div>{"// code snippet showcase"}</div>
          <CodeSnippetContent>
            <CodeSnippetGist />
          </CodeSnippetContent>
        </Container>
        <Scrollbar>
          <div />
        </Scrollbar>
      </CodeSnippetSection>
    </StyledCodeSnippet>
  );
}

const StyledCodeSnippet = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  & > div:first-child {
    border-bottom: 1px solid var(--color-lines);
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`;
const CodeSnippetSection = styled.div`
  display: grid;
  grid-template-columns: 1fr var(--scroll-width);
  height: 100%;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const CodeSnippetContent = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Scrollbar = styled.div`
  height: 100%;
  border-left: 1px solid var(--color-lines);
  padding: 4px;
  & > div {
    width: 100%;
    height: 7px;
    background-color: var(--color-grey-1);
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export default CodeSnippet;
