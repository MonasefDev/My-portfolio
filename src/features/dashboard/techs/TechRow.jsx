import React from "react";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import { useDeleteTech } from "./useDeleteTech";
import CreateTechForm from "./CreateTechForm";
import styled from "styled-components";

function TechRow({ tech }) {
  const { id: techId, name, tech_icon } = tech;

  const { isDeleting, deleteTech } = useDeleteTech();

  return (
    <Table.Row>
      <img src={tech_icon} alt={name} />
      <NameDiv>{name}</NameDiv>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={techId} />
          <Menus.List id={techId}>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiEye />}>edit</Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="edit">
          <CreateTechForm techToEdit={tech} />
        </Modal.Window>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="technology"
            disabled={isDeleting}
            onConfirm={(success) =>
              deleteTech(techId, {
                onSuccess: (data) => {
                  success();
                },
              })
            }
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

const NameDiv = styled.div`
  text-transform: uppercase;
`;

export default TechRow;
