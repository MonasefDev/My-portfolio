import React from "react";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

function TechRow({ tech }) {
  const { id: techId, name, icon } = tech;

  const deleteTech = (id) => {
    console.log("delete Tech : ", id);
  };

  return (
    <Table.Row>
      <img src={icon} alt={name} />
      <div>{name}</div>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={techId} />
          <Menus.List id={techId}>
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
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="technologie"
            onConfirm={() => deleteTech(techId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default TechRow;
