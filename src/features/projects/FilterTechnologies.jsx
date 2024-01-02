import React from "react";

function FilterTechnologies({ technologies, onFilterChange }) {
  const handleCheckboxChange = (event) => {
    const selectedTechnology = event.target.value;
    onFilterChange(selectedTechnology);
  };

  return (
    <div>
      <h4>Filter by Technology:</h4>
      {technologies.map((technology) => (
        <div key={technology}>
          <input
            type="checkbox"
            id={technology}
            value={technology}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={technology}>{technology}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterTechnologies;
