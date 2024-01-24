import React from "react";
import styled from "styled-components";
import TechsList from "./TechsList";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import CreateTechForm from "./CreateTechForm";
function AddTech() {
  return (
    <StyledAddTech>
      <TechsList />
      <Modal>
        <Modal.Open opens="Tech-form">
          <Button variation="default">Add new Tech</Button>
        </Modal.Open>
        <Modal.Window name="Tech-form">
          <CreateTechForm />
        </Modal.Window>
      </Modal>
    </StyledAddTech>
  );
}

const StyledAddTech = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem;
  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }
`;

export default AddTech;
