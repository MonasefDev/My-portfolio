import React from "react";
import styled from "styled-components";

function ScrollBar() {
  return (
    <Scrollbar>
      <div />
    </Scrollbar>
  );
}
const Scrollbar = styled.div`
  height: 100%;
  border-left: 1px solid var(--color-lines);
  padding: 4px;
  width: var(--scroll-width);
  & > div {
    width: 100%;
    height: 7px;
    background-color: var(--color-grey-1);
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export default ScrollBar;
