import React from "react";
import styled from "styled-components";

function TechnologiesList({
  technologies,
  onFiltred,
  isOpen,
  checkedValue = [],
}) {
  return (
    <FilterItemsContainer isOpen={isOpen}>
      {technologies.map((technology) => (
        <FilterItem key={technology.id}>
          <FilterInput
            type="checkbox"
            id={technology.id}
            value={technology.name}
            checked={checkedValue.includes(technology.name)}
            onChange={(event) => {
              onFiltred(event);
            }}
          />
          <img src={technology.tech_icon} alt={technology.name} />
          <FilterLabel htmlFor={technology.name}>{technology.name}</FilterLabel>
        </FilterItem>
      ))}
    </FilterItemsContainer>
  );
}

const FilterItem = styled.div`
  margin-bottom: 8px;
  gap: 2rem;
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;
  width: 100%;

  img {
    opacity: 0.4;
  }

  input:checked + label {
    color: var(--color-white);
  }
`;

const FilterInput = styled.input`
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 2px solid var(--color-grey-1);
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px rgba(96, 123, 150, 0.8);
  }

  &:checked {
    background-color: var(--color-grey-1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 0.5rem;
    transition: opacity 0.3s ease;
  }

  &:checked::before {
    content: "";
    background-image: url("assets/icons/check.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    width: 1.1rem;
    height: 1.1rem;
    opacity: 1;
    filter: invert(100%) sepia(100%);
  }
`;

const FilterLabel = styled.label`
  font-weight: 500;
  text-transform: uppercase;
`;

const FilterItemsContainer = styled.div`
  overflow: hidden;
  padding: 2rem;
  transition: opacity 0.3s ease;

  @media only screen and (max-width: 1024px) {
    border-bottom: 1px solid var(--color-lines);
  }
`;

export default TechnologiesList;
