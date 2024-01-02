import React from "react";

function ModelDetails({ selectedProject }) {
  return (
    <div>
      <h2>Model Details</h2>
      {selectedProject ? (
        <div>
          <h3>{selectedProject.title}</h3>
          <p>Description: {selectedProject.description}</p>
          <p>Details: {selectedProject.details}</p>
          <p>Technologies: {selectedProject.technologies.join(", ")}</p>
          <p>Features: {selectedProject.features.join(", ")}</p>
          {/* Add more details as needed */}
          <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <br />
          <a href={selectedProject.live_link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      ) : (
        <p>Select a project to view details.</p>
      )}
    </div>
  );
}

export default ModelDetails;
