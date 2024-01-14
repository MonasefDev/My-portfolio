import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  min-width: var(--sidebar-width);
  border-right: 1px solid var(--color-lines);
  height: 100vh;
  padding: 0;
`;

const FilterHeading = styled.h4`
  margin-bottom: 12px;
  color: var(--color-white);
  border-bottom: 1px solid var(--color-lines);
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
`;

const FilterItem = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;

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
  margin-right: 2rem;

  &:hover {
    box-shadow: 0 0 5px rgba(96, 123, 150, 0.8);
  }

  &:checked {
    background-color: var(--color-grey-1);
    border-color: var(--color-grey-1);
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
    color: white;
    width: 1.1rem;
    height: 1.1rem;
    opacity: 1;
  }
`;

const FilterLabel = styled.label`
  font-weight: 500;
`;

function FilterTechnologies({ technologies, onFilterChange }) {
  const handleCheckboxChange = (event) => {
    const selectedTechnology = event.target.value;
    onFilterChange(selectedTechnology);
  };

  return (
    <FilterContainer>
      <FilterHeading>
        <img src="/assets/icons/arrow.svg" alt="arrow" /> projects
      </FilterHeading>
      {technologies.map((technology) => (
        <FilterItem key={technology}>
          <FilterInput
            type="checkbox"
            id={technology}
            value={technology}
            onChange={handleCheckboxChange}
            className="filter-input"
          />
          <FilterLabel htmlFor={technology} className="filter-label">
            {technology}
          </FilterLabel>
        </FilterItem>
      ))}
    </FilterContainer>
  );
}

export default FilterTechnologies;
