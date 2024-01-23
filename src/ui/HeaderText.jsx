import React from "react";
import styled from "styled-components";

function HeaderText({ text }) {
  return (
    <StyledHeaderText text={text}>
      {text && <div>{text}</div>}
      {text && <img src="/assets/icons/close.svg" alt="close" />}
      <div />
    </StyledHeaderText>
  );
}

const StyledHeaderText = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.text ? "auto auto 1fr" : "1fr")};
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid var(--color-lines);
  padding: 0 2rem;
  img {
    padding: 0 1rem 0 3rem;
  }
  & > div:last-child {
    height: 100%;
    border-left: ${(props) =>
      props.text ? "1px solid var(--color-lines);" : "none"};
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export default HeaderText;
