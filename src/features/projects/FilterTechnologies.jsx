import React, { useState } from "react";
import styled from "styled-components";
import TechnologiesList from "./TechnologiesList";

function FilterTechnologies({ technologies, onFiltred }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <FilterContainer>
      <FilterWrapper>
        <Title>_Projects</Title>
        <FilterHeading onClick={() => setIsOpen((prev) => !prev)}>
          <ButtonDropdown isOpen={isOpen}>
            <img src="/assets/icons/arrow.svg" alt="arrow" /> projects
          </ButtonDropdown>
        </FilterHeading>
        {isOpen && (
          <TechnologiesList
            technologies={technologies}
            onFiltred={onFiltred}
            isOpen={isOpen}
          />
        )}
      </FilterWrapper>
    </FilterContainer>
  );
}

const Title = styled.div`
  display: none;
  height: 7rem;
  color: var(--color-white);
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--color-lines);

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;

const FilterContainer = styled.div`
  min-width: var(--sidebar-width);
  border-right: 1px solid var(--color-lines);
  padding: 0;
  @media only screen and (max-width: 1024px) {
    border-right: none;
  }
`;

const FilterWrapper = styled.div`
  min-width: var(--sidebar-width);
`;

const FilterHeading = styled.h4`
  color: var(--color-white);
  border-bottom: 1px solid var(--color-lines);
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
  height: 4rem;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    background-color: var(--color-grey-0);
  }
`;

const ButtonDropdown = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    transform: rotate(${({ isOpen }) => (isOpen ? "90deg" : "0deg")});
    transition: transform 0.3s ease;
    display: inline-block;
  }
`;

export default FilterTechnologies;
