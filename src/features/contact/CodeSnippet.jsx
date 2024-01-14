import React from "react";
import Highlight from "react-highlight";
import styled from "styled-components";
import { snippet1 } from "../../data/snippet";

function CodeSnippet() {
  return (
    <StyledCodeSnippet>
      <Container>
        <Highlight>{snippet1}</Highlight>
      </Container>
      <Scrollbar>
        <div />
      </Scrollbar>
    </StyledCodeSnippet>
  );
}

const StyledCodeSnippet = styled.div`
  display: grid;
  grid-template-columns: calc(100% - var(--scroll-width)) var(--scroll-width);
  height: 100%;

  border-left: ${(props) =>
    props.mobile ? "none" : "1px solid var(--color-lines)"};
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  pre {
    overflow: hidden;
  }
  code {
    background-color: transparent !important;
    width: 100%;
    overflow-x: scroll;
  }
  .hljs-string {
    color: var(--color-accent-4);
  }
  .hljs-built_in,
  .hljs-function {
    color: var(--color-accent-1);
  }
  .coffeescript {
    color: var(--color-purple-2);
  }
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
