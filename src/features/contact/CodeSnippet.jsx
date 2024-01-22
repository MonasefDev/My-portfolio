import React, { useEffect, useRef, useState } from "react";
import Highlight from "react-highlight";
import styled from "styled-components";
import { snippet1 } from "../../data/snippet";

function CodeSnippet() {
  const [lineCount, setLineCount] = useState(0);
  const ref = useRef(null);
  const updateLines = () => {
    const textElement = ref.current.querySelector("pre");
    if (textElement) {
      const elementHeight = textElement.getBoundingClientRect().height;
      const lineHeight = parseFloat(getComputedStyle(textElement).lineHeight);
      const lines = Math.ceil(elementHeight / lineHeight);
      setLineCount(lines);
    }
  };

  useEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);

    return () => {
      window.removeEventListener("resize", updateLines);
    };
  }, [lineCount]);
  return (
    <StyledCodeSnippet>
      <Container ref={ref}>
        <LineNumber>
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </LineNumber>
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
const LineNumber = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
  line-height: 2rem;
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
