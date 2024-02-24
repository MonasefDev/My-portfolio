import React, { useEffect } from "react";
// import { projects } from "../../data/projects";
import Table from "../../ui/Table";
import styled from "styled-components";
import ProjectRow from "./ProjectRow";
import Menus from "../../ui/Menus";
import { useProjects } from "./useProjects";
import Spinner from "../../ui/Spinner";
// import Spinner from "../../ui/Spinner";
function ProjectsList() {
  const { isLoading, projects } = useProjects();
  console.log("projects : ", projects);
  return (
    <StyledProjectsList>
      {isLoading ? (
        <Spinner />
      ) : (
        <Menus>
          <Table minWidth={true} columns="2fr 1fr 1fr 2fr 3.2rem">
            <Table.Header>
              <div>projects</div>
              <div>github_link</div>
              <div>demo_link</div>
              <div>technologies</div>
              <div></div>
            </Table.Header>
            <Table.Body
              data={projects}
              render={(project) => (
                <ProjectRow key={project.id} project={project} />
              )}
            />
          </Table>
        </Menus>
      )}
    </StyledProjectsList>
  );
}

const StyledProjectsList = styled.div`
  padding: 4rem;
  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }
`;

export default ProjectsList;
