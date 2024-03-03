import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { snippetHome } from "../../data/snippet-home";
import CodeSnippet from "../../ui/CodeSnippet";

function CodeSnippetSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const { scrollHeight, clientHeight } = sectionRef.current;
      setTimeout(() => {
        sectionRef.current.scrollTo({
          top: scrollHeight / 2 - clientHeight / 2,
          behavior: "smooth",
        });
      }, 1000);
    }
  }, [sectionRef]);
  return (
    <StyledCodeSnippet ref={sectionRef}>
      <CodeSnippetWrapper>
        {[...Array(5)].map((_, index) => (
          <CodeSnippet key={index} code={snippetHome} />
        ))}
      </CodeSnippetWrapper>
    </StyledCodeSnippet>
  );
}

const StyledCodeSnippet = styled.div`
  height: 100%;
  padding: 12rem 2rem;
  width: 100%;
  max-width: 55rem;
  margin-right: auto;
  overflow: scroll;
`;

const CodeSnippetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  & > div {
    height: 15rem;

    &:nth-child(3) {
      opacity: 1;
    }

    &:nth-child(2),
    &:nth-child(4) {
      opacity: 0.4;
    }

    &:nth-child(1),
    &:nth-child(5) {
      opacity: 0.2;
    }
  }
`;

export default CodeSnippetSection;
