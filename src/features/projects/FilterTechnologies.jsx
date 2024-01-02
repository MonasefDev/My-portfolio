import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  margin-bottom: 20px;

  .filter-heading {
    margin-bottom: 12px;
  }

  .filter-item {
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    .filter-input {
      margin-right: 8px;
    }

    .filter-label {
      font-weight: 500;
    }
  }
`;

function FilterTechnologies({ technologies, onFilterChange }) {
  const handleCheckboxChange = (event) => {
    const selectedTechnology = event.target.value;
    onFilterChange(selectedTechnology);
  };

  return (
    <FilterContainer>
      <h4 className="filter-heading">Filter by Technology:</h4>
      {technologies.map((technology) => (
        <div key={technology} className="filter-item">
          <input
            type="checkbox"
            id={technology}
            value={technology}
            onChange={handleCheckboxChange}
            className="filter-input"
          />
          <label htmlFor={technology} className="filter-label">
            {technology}
          </label>
        </div>
      ))}
    </FilterContainer>
  );
}

export default FilterTechnologies;
