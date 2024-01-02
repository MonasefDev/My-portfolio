import React from "react";

function FilterTechnologies({ technologies, onFilterChange }) {
  const handleFilterChange = (event) => {
    const selectedTechnology = event.target.value;
    onFilterChange(selectedTechnology);
  };

  return (
    <div>
      <label htmlFor="technologyFilter">Filter by Technology:</label>
      <select id="technologyFilter" onChange={handleFilterChange}>
        <option value="">All</option>
        {technologies.map((technology) => (
          <option key={technology} value={technology}>
            {technology}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterTechnologies;
