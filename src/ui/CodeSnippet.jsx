import React from "react";
import Highlight from "react-highlight";
import styled from "styled-components";

function CodeSnippet({ code }) {
  return (
    <StyledCodeSnippet>
      <Highlight className="snippet-container javascript" language="javascript">
        {code}
      </Highlight>
    </StyledCodeSnippet>
  );
}
const StyledCodeSnippet = styled.div`
  background-color: #011221;
  border-radius: 15px;
  padding: 10px;
  border: 1px solid #1e2d3d;
  pre {
    font-size: 14px;
    overflow-y: scroll;
    overflow-x: scroll;
    max-height: 240px;
    padding: 0 10px;
  }
  code {
    max-height: 220px;
    width: max-content;
  }
  .snippet-container::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  #comment {
    font-size: 14px;
  }

  #username:hover {
    color: #5e6ef2;
  }

  /* #comment {
    
  } */

  .hljs {
    color: #607b96;
    background: #011221;
  }
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    color: #ff7b72;
  }
  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    color: #d2a8ff;
  }
  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-variable {
    color: #79c0ff;
  }
  .hljs-meta .hljs-string,
  .hljs-regexp,
  .hljs-string {
    color: #a5d6ff;
  }
  .hljs-built_in,
  .hljs-symbol {
    color: #ffa657;
  }
  .hljs-code,
  .hljs-comment,
  .hljs-formula {
    color: #8b949e;
  }
  .hljs-name,
  .hljs-quote,
  .hljs-selector-pseudo,
  .hljs-selector-tag {
    color: #7ee787;
  }
  .hljs-subst {
    color: #c9d1d9;
  }
  .hljs-section {
    color: #1f6feb;
    font-weight: 700;
  }
  .hljs-bullet {
    color: #f2cc60;
  }
  .hljs-emphasis {
    color: #c9d1d9;
    font-style: italic;
  }
  .hljs-strong {
    color: #c9d1d9;
    font-weight: 700;
  }
  .hljs-addition {
    color: #aff5b4;
    background-color: #033a16;
  }
  .hljs-deletion {
    color: #ffdcd7;
    background-color: #67060c;
  }
`;
export default CodeSnippet;
