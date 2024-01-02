import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onSelectProject }) {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} onSelectProject={onSelectProject} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
