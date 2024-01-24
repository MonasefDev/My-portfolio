import React from "react";
import styled, { css } from "styled-components";

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const variations = {
  primary: css`
    color: var(--color-primary-1);
    background-color: var(--color-button-d-1);

    &:hover {
      background-color: var(--color-button-d-2);
    }
  `,
  danger: css`
    color: var(--color-white);
    background-color: var(--color-button-red-1);

    &:hover {
      background-color: var(--color-button-red-2);
    }
  `,
  default: css`
    color: var(--color-white);
    background-color: var(--color-button-p-1);

    &:hover {
      background-color: var(--color-button-p-2);
    }
  `,
  ghost: css`
    color: var(--color-white);
    background-color: transparent;
    border: 1px solid var(--color-white);
    &:hover {
      border: 1px solid #ffffff7d;
    }
  `,
};

const StyledButton = styled.button`
  width: fit-content;
  padding: 1rem 1.4rem;
  border-radius: 0.8rem;
  font-size: 1%.4rem;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  ${(props) => variations[props.variation]}
`;
Button.defaultProps = {
  variation: "primary",
};

export default Button;
