import React from "react";
import { projects } from "../../data/projects";
import Table from "../../ui/Table";
import styled from "styled-components";
import ProjectRow from "./ProjectRow";
import Menus from "../../ui/Menus";
function ProjectsList() {
  console.log(projects);
  return (
    <StyledProjectsList>
      <Menus>
        <Table columns="2fr 1fr 1fr 2fr 3.2rem">
          <Table.Header>
            <div>projects</div>
            <div>github_link</div>
            <div>demo_link</div>
            <div>technologies</div>
            <div></div>
          </Table.Header>
          <Table.Body>
            <ProjectRow />
          </Table.Body>
          <Table.Body
            data={projects}
            render={(project) => (
              <ProjectRow key={project.id} project={project} />
            )}
          />
        </Table>
      </Menus>
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
