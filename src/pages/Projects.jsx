import React, { useState } from "react";
import ProjectList from "../features/projects/ProjectList";
import ModelDetails from "../features/projects/ModelDetails";
import FilterTechnologies from "../features/projects/FilterTechnologies";

function Projects() {

    const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Description for New Project",
      details: "Details for New Project",
      poster_img: "new_img.jpg",
      technologies: ["Ruby", "Rails", "PostgreSQL"],
      features: ["new_feat1", "new_feat2"],
      images: ["new_img1", "new_img2"],
      github_link: "https://github.com/new_project",
      live_link: "https://new_project.com"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for New Project",
      details: "Details for New Project",
      poster_img: "new_img.jpg",
      technologies: ["HTML"],
      features: ["new_feat1", "new_feat2"],
      images: ["new_img1", "new_img2"],
      github_link: "https://github.com/new_project",
      live_link: "https://new_project.com"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for New Project",
      details: "Details for New Project",
      poster_img: "new_img.jpg",
      technologies: ["Ruby", "CSS"],
      features: ["new_feat1", "new_feat2"],
      images: ["new_img1", "new_img2"],
      github_link: "https://github.com/new_project",
      live_link: "https://new_project.com"
    }
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredTechnology, setFilteredTechnology] = useState("");
  const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies)));

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleFilterChange = (selectedTechnology) => {
    setFilteredTechnology(selectedTechnology);
    setSelectedProject(null); // Clear selected project when filtering
  };

  const filteredProjects = projects.filter(
    (project) => !filteredTechnology || project.technologies.includes(filteredTechnology)
  );

  return (
    <div>
      <FilterTechnologies technologies={allTechnologies} onFilterChange={handleFilterChange} />
      <ProjectList projects={filteredProjects} onSelectProject={handleSelectProject} />
      <ModelDetails selectedProject={selectedProject} />
    </div>
  );
}

export default Projects;
