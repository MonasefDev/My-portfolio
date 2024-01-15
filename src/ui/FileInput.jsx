import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file", multiple: true })`
  font-size: 1.4rem;
  border-radius: 0.5rem;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: 0.5rem;
    border: none;
    color: var(--color-grey-1);
    background-color: var(--color-button-p-1);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-button-p-2);
    }
  }
`;

export default FileInput;
