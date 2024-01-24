import React from "react";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function ProjectRow({ project }) {
  const {
    id: projectId,
    title,
    github_link,
    live_link,
    technologies,
  } = project;
  console.log(projectId);
  const deleteProject = (id) => {
    console.log("delete project : ", id);
  };

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
            <Menus.Button
              icon={<HiEye />}
              onClick={() => console.log("show details details")}
            >
              details
            </Menus.Button>
            <Modal.Open opens="delete">
              <Menus.Button
                icon={<HiTrash />}
                onClick={() => console.log("delete")}
              >
                delete
              </Menus.Button>
            </Modal.Open>
          </Menus.List>

          {/* <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>
            
            <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
            </Menus.List>
            
            <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
            
            <Modal.Window name="delete">
            <ConfirmDelete
            resourceName="cabins"
            disabled={isDeleting}
            onConfirm={() => deleteCabin(cabinId)}
            />
        </Modal.Window> */}
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="project"
            onConfirm={() => deleteProject(projectId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default ProjectRow;
