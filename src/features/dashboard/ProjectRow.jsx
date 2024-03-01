import React from "react";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteProject } from "./useDeleteProject";
import { useNavigate } from "react-router-dom";
import AddProject from "./AddProject";

function ProjectRow({ project }) {
  const {
    id: projectId,
    title,
    github_link,
    live_link,
    technologies,
  } = project;
  const { isDeleting, deleteProject } = useDeleteProject();
  const navigate = useNavigate();
  return (
    <Table.Row>
      <div>{title}</div>
      <a href={github_link} target="_blank" rel="noreferrer">
        view on github
      </a>
      <a href={live_link} target="_blank" rel="noreferrer">
        view demo
      </a>
      <div>{technologies.slice(1, 3).join(", ")}</div>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={projectId} />
          <Menus.List id={projectId}>
            <Modal.Open opens="edit">
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/dashboard/edit-project/${projectId}`)}
              >
                edit
              </Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="edit">
          <AddProject projectToEdit={project} />
        </Modal.Window>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="project"
            onConfirm={() => deleteProject(projectId)}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default ProjectRow;
