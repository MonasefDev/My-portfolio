import React from "react";

function ProjectCard({ project, onSelectProject }) {
  const handleProjectSelect = () => {
    onSelectProject(project);
  };

  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={handleProjectSelect}>View Details</button>
    </div>
  );
}

export default ProjectCard;
