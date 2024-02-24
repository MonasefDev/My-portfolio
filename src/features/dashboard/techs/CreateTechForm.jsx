import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import FileInput from "../../../ui/FileInput";
import Button from "../../../ui/Button";
import { useCreateTech } from "./useCreateTechs";
import { useEditTech } from "./useEditTech";
import SpinnerMini from "../../../ui/SpinnerMini";

function CreateTechForm({ techToEdit = {}, onCloseModal }) {
  const { isCreating, createTech } = useCreateTech();
  const { isEditing, editTech } = useEditTech();
  const isWorking = isCreating || isEditing;
  const { id: editId, ...editValues } = techToEdit;
  const isEditSession = Boolean(editId);
  const [image, setImage] = useState(isEditSession ? editValues.tech_icon : "");
  const [width, setWidth] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? editValues : {} });

  const onSubmit = (data) => {
    const formData = { ...data, tech_icon: image };
    isEditSession
      ? editTech(
          { newTech: { ...data, tech_icon: image }, id: editId },
          {
            onSuccess: (data) => {
              reset();
              setImage("");
              onCloseModal?.();
            },
          }
        )
      : createTech(formData, {
          onSuccess: (data) => {
            reset();
            setImage("");
            onCloseModal?.();
          },
        });
  };

  return (
    <StyledCreateTechForm>
      <form onSubmit={handleSubmit(onSubmit)} id="add-technologie-form">
        <FormGroup>
          <Label>tech name:</Label>
          <Input
            type="text"
            id="name"
            {...register("name", {
              required: "This field is required",
            })}
            $error={errors?.name}
          />
          {errors?.name && <ErrorBox>{errors?.name?.message}</ErrorBox>}
        </FormGroup>
        <FormGroup>
          <Label>tech icon:</Label>
          <FileInput
            id="tech_icon"
            accept="image/*"
            {...register("tech_icon", {})}
            name="Choose File"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {errors?.tech_icon && (
            <ErrorBox>{errors?.tech_icon?.message}</ErrorBox>
          )}
          {image !== "" && (
            <ImagesContainer>
              <ImageBox>
                {isEditSession && !image.name ? (
                  <img src={image} alt={"tech_icon"} />
                ) : (
                  <img src={URL.createObjectURL(image)} alt={image.name} />
                )}
                <img
                  src="/assets/icons/close.svg"
                  alt="close"
                  onClick={() => setImage("")}
                />
              </ImageBox>
            </ImagesContainer>
          )}
        </FormGroup>

        <Button
          onClick={(e) => {
            setWidth(e.target.clientWidth + "px");
          }}
          id="create-button"
          type="submit"
          variation="default"
        >
          {isWorking ? (
            <SpinnerMini width={width} />
          ) : (
            `${isEditSession ? "edit" : "create"} technology`
          )}
        </Button>
      </form>
    </StyledCreateTechForm>
  );
}

const StyledCreateTechForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  max-width: 100rem;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }
  form {
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    overflow-y: scroll;
  }
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  height: min-content;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
`;
const ErrorBox = styled.div`
  margin-top: -0.5rem;
  padding-left: 1rem;
  color: var(--color-accent-2);
  font-size: 12px;
  grid-area: 2/2/3/3;
`;

const Label = styled.label`
  margin-bottom: 0.75rem; /* Equivalent to mb-3 in Tailwind */
`;

const Input = styled.input`
  padding: 1rem; /* Equivalent to p-2 in Tailwind */
  background-color: var(--color-primary-2);
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-0);
  outline: none;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
  }
  &::placeholder {
    color: var(--color-grey-1);
    opacity: 0.3;
  }
  &::after {
    content: "${(props) => (props.$error ? props.$error.message : "")}";
    color: red;
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: 12px;
  }
`;

const ImagesContainer = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  gap: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-grey-0);
`;
const ImageBox = styled.div`
  position: relative;
  img {
    transition: all 0.2s ease-in-out;
    &:first-child {
      border-radius: 8px;
      width: 15rem;
      @media only screen and (max-width: 1024px) {
        width: 10rem;
      }
    }
    &:last-child {
      position: absolute;
      top: 2px;
      right: 2px;
      height: 2.2rem;
      cursor: pointer;
      border-radius: 50%;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-white);
    }
  }
`;

export default CreateTechForm;
