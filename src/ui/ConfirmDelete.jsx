import styled from "styled-components";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: 8px;

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--color-white);
    @media only screen and (max-width: 1024px) {
      font-size: 2rem;
    }
  }

  & p {
    color: var(--color-grey-1);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <h3>Delete {resourceName} ?</h3>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button variation="ghost" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button
          variation="danger"
          disabled={disabled}
          onClick={() => onConfirm(onCloseModal)}
        >
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
