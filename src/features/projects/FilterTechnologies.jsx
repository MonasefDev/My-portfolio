import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function FilterTechnologies({ technologies, onFilterChange }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.matchMedia("(max-width: 768px)").matches;
      if (isDropdownOpen && !isMobileView) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDropdownOpen]);

  const handleCheckboxChange = (event) => {
    const selectedTechnology = event.target.value;
    onFilterChange(selectedTechnology);
  };

  const onDropDown = () => {
    const isMobileView = window.matchMedia("(max-width: 768px)").matches;
    if (isMobileView) {
      setDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <FilterContainer>
      <FilterWrapper>
        <FilterHeading>
          <ButtonDropdown onClick={onDropDown} isOpen={isDropdownOpen}>
            <img src="/assets/icons/arrow.svg" alt="arrow" /> projects
          </ButtonDropdown>
        </FilterHeading>
        <FilterItemsContainer isOpen={!isDropdownOpen}>
          {technologies.map((technology) => (
            <FilterItem key={technology}>
              <FilterInput
                type="checkbox"
                id={technology}
                value={technology}
                onChange={handleCheckboxChange}
              />
              <FilterLabel htmlFor={technology} className="filter-label">
                {technology}
              </FilterLabel>
            </FilterItem>
          ))}
        </FilterItemsContainer>
      </FilterWrapper>
    </FilterContainer>
  );
}

const mobileStyles = css`
  @media screen and (max-width: 1024px) {
    min-width: var(--sidebar-width-mob);
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    background-color: var(--color-primary-3);
    border-bottom: 1px solid var(--color-lines);
    width: calc(100% - 30px);
  }
`;

const FilterContainer = styled.div`
  min-width: var(--sidebar-width);
  border-right: 1px solid var(--color-lines);
  padding: 0;
  position: relative;

  ${mobileStyles}
`;

const FilterWrapper = styled.div`
  min-width: var(--sidebar-width);

  ${mobileStyles}
`;

const FilterHeading = styled.h4`
  color: var(--color-white);
  border-bottom: 1px solid var(--color-lines);
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
  height: 4rem;
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

const FilterItem = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;
  width: 100%;

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
`;

const FilterItemsContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-150%)"};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  overflow: hidden;

  ${mobileStyles}
`;

export default FilterTechnologies;
