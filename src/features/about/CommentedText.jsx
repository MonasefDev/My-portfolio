import styled from "styled-components";
import { useLayoutEffect, useRef, useState } from "react";

const CommentedTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2rem 0 2rem 4rem;
  @media only screen and (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

const CommentLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const CommentLineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.375rem; /* Equivalent to gap-6 */
  line-height: 2.4rem; /* Equivalent to leading-relaxed */
`;

const CommentLineNumber = styled.span`
  grid-column: 1;
  width: 1.25rem; /* Equivalent to w-5 */
  text-align: left;
`;

const CommentLineText = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
`;

const CommentedTextContent = styled.div`
  margin-left: -1rem; /* Equivalent to lg:ml[-10px] */
  width: 100%;
  word-break: break-word;
  padding: 0.3125rem; /* Equivalent to px-5 */
  line-height: 2.4rem; /* Equivalent to leading-relaxed */
  @media only screen and (max-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;

function CommentedText({ text }) {
  const [lineCount, setLineCount] = useState(0);
  const ref = useRef(null);
  console.log(ref);
  const updateLines = () => {
    const textElement = ref.current;
    if (textElement) {
      const elementHeight = textElement.getBoundingClientRect().height;
      const lineHeight = parseFloat(getComputedStyle(textElement).lineHeight);
      const lines = Math.ceil(elementHeight / lineHeight);
      setLineCount(lines);
      console.log(lines);
    }
  };

  useLayoutEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);

    return () => {
      window.removeEventListener("resize", updateLines);
    };
  }, [text]);

  return (
    <CommentedTextContainer>
      <CommentLineContainer>
        {Array.from({ length: lineCount }, (_, i) => i + 1).map(
          (line, index) => {
            const comment =
              line === 1 ? "/**" : line === lineCount ? " */" : "*";
            return (
              <CommentLineGrid key={index}>
                <CommentLineNumber>{line}</CommentLineNumber>
                <CommentLineText>{comment}</CommentLineText>
              </CommentLineGrid>
            );
          }
        )}
      </CommentLineContainer>

      <CommentedTextContent
        dangerouslySetInnerHTML={{ __html: text }}
        ref={ref}
      />
    </CommentedTextContainer>
  );
}

export default CommentedText;
