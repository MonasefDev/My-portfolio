import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FileInput from "../../ui/FileInput";
import { useCreateProject } from "./useCreateProject";
import SpinnerMini from "../../ui/SpinnerMini";
import TechnologiesList from "./TechnologiesList";
import { useTechs } from "./techs/useTechs";
import Spinner from "../../ui/Spinner";
import { useParams } from "react-router-dom";
import { useProjects } from "./useProjects";
import { useEditProject } from "./useEditProject";

function AddProject({ projectToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = projectToEdit;
  const isEditSession = Boolean(editId);
  const [features, setFeatures] = useState(
    isEditSession ? editValues.features : []
  );
  const [feature, setFeature] = useState("");
  const [image, setImage] = useState(
    isEditSession ? editValues.poster_img : ""
  );
  const [images, setImages] = useState(isEditSession ? editValues.images : []);
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();
  const isWorking = isCreating || isEditing;
  const [isDropDown, setIsDropDown] = useState(false);
  const [checkedValue, setCheckedValue] = useState(
    isEditSession ? editValues.technologies : []
  );
  const { isLoading, techs } = useTechs();
  // const [isEditSession, setIsEditSession] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: editId ? editValues : {},
  });

  const onSubmit = async (data) => {
    data = {
      ...data,
      poster_img: image,
      images,
      technologies: checkedValue,
      features: features,
    };
    const submitProject = isEditSession ? editProject : createProject;
    if (isEditSession)
      editProject(
        { newProject: data, id: editId },
        {
          onSuccess: (data) => {
            onCloseModal?.();
            reset();
            setImage("");
            setFeatures("");
            setFeature("");
            setImages("");
          },
        }
      );
    else
      submitProject(data, {
        onSuccess: (data) => {
          reset();
          setImage("");
          setFeatures("");
          setFeature("");
          setImages("");
        },
      });
  };

  const onFiltred = (event) => {
    const { value, checked } = event.target;
    let checkedArr;
    if (checked) {
      checkedArr = [...checkedValue, value];
    } else {
      checkedArr = checkedValue.filter((element) => element !== value);
    }
    setCheckedValue(checkedArr);
  };

  return (
    <StyledAddProject>
      <form onSubmit={handleSubmit(onSubmit)} id="add-project-form">
        <FormGroup>
          <Label>_project title:</Label>
          <Input
            type="text"
            id="title"
            {...register("title", {
              required: "This field is required",
            })}
            $error={errors?.title}
          />
          {errors?.title && <ErrorBox>{errors?.title?.message}</ErrorBox>}
        </FormGroup>
        <FormGroup>
          <Label>_short description:</Label>
          <Input
            type="text"
            id="description"
            {...register("description", {
              required: "This field is required",
            })}
          />
          {errors?.description && (
            <ErrorBox>{errors?.description?.message}</ErrorBox>
          )}
        </FormGroup>
        <FormGroup>
          <Label>_project demo:</Label>
          <Input type="text" id="live_link" {...register("live_link")} />
          {errors?.live_link && (
            <ErrorBox>{errors?.live_link?.message}</ErrorBox>
          )}
        </FormGroup>
        <FormGroup>
          <Label>_github link:</Label>
          <Input type="text" id="github_link" {...register("github_link")} />
          {errors?.github_link && (
            <ErrorBox>{errors?.github_link?.message}</ErrorBox>
          )}
        </FormGroup>
        <FormGroup>
          <Label>_technologies:</Label>
          <SelectElement>
            <SelectText>
              {checkedValue.length === 0
                ? "Select technologies"
                : checkedValue.length === 1
                ? checkedValue[0]
                : `${checkedValue.length} selected`}
            </SelectText>
            <img
              open={isDropDown}
              src="/assets/icons/arrow.svg"
              alt="arrow"
              onClick={() => setIsDropDown(!isDropDown)}
            />
            {isDropDown && (
              <TechsContainer>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <TechnologiesList
                    technologies={techs}
                    onFiltred={onFiltred}
                    isOpen={isDropDown}
                    checkedValue={checkedValue}
                  />
                )}
              </TechsContainer>
            )}
          </SelectElement>
        </FormGroup>
        <FormGroup>
          <Label>_project details:</Label>
          <Textarea
            type="text"
            id="details"
            {...register("details", {
              required: "This field is required",
            })}
          />
          {errors?.details && <ErrorBox>{errors?.details?.message}</ErrorBox>}
        </FormGroup>
        <FormGroup>
          <Label>_features:</Label>
          <InputBox>
            <Input
              type="text"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
            />
            <div
              className="add"
              onClick={() => {
                if (!feature) return;
                setFeatures([...features, feature]);
                setFeature("");
              }}
            >
              Add
            </div>
          </InputBox>
          {features.length > 0 && (
            <FeaturesList>
              <h3>_features:</h3>
              {features.map((feature, index) => (
                <li key={index}>
                  <img src="/assets/icons/check.svg" alt="check" />
                  <span>{feature}</span>
                  <img
                    src="/assets/icons/close.svg"
                    alt="trash"
                    onClick={() =>
                      setFeatures(features.filter((f) => f !== feature))
                    }
                  />
                </li>
              ))}
            </FeaturesList>
          )}

          {errors?.features && <ErrorBox>{errors?.features?.message}</ErrorBox>}
        </FormGroup>
        <FormGroup>
          <Label>_poster image:</Label>
          <FileInput
            id="poster_img"
            accept="image/*"
            // {...register("poster_img", {
            //   required: "This field is required",
            // })}
            name="Choose File"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {errors?.poster_img && (
            <ErrorBox>{errors?.poster_img?.message}</ErrorBox>
          )}
          {image !== "" && (
            <ImagesContainer>
              <ImageBox>
                <img
                  src={isEditSession ? image : URL.createObjectURL(image)}
                  alt="project poster"
                />
                <img
                  src="/assets/icons/close.svg"
                  alt="close"
                  onClick={() => setImage([])}
                />
              </ImageBox>
            </ImagesContainer>
          )}
        </FormGroup>
        <FormGroup>
          <Label>_project images:</Label>
          <FileInput
            id="images"
            accept="image/*"
            // {...register("images", {
            //   required: "This field is required",
            // })}
            name="Choose File"
            onChange={(e) =>
              setImages((prev) => [...prev, ...Array.from(e.target.files)])
            }
          />
          {errors?.images && <ErrorBox>{errors?.images?.message}</ErrorBox>}
          {images.length > 0 && (
            <ImagesContainer>
              {images.map((image, index) => (
                <ImageBox key={index}>
                  <img
                    src={image.name ? URL.createObjectURL(image) : image}
                    alt="project poster"
                  />
                  <img
                    src="/assets/icons/close.svg"
                    alt="close"
                    onClick={() => setImages(images.filter((i) => i !== image))}
                  />
                </ImageBox>
              ))}
            </ImagesContainer>
          )}
        </FormGroup>
        <Button
          id="create-button"
          disabled={isWorking}
          type="submit"
          variation="default"
        >
          {isWorking ? (
            <SpinnerMini width={"15rem"} />
          ) : isEditSession ? (
            "edit project"
          ) : (
            "create project"
          )}
        </Button>
      </form>
    </StyledAddProject>
  );
}

const StyledAddProject = styled.div`
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
  button {
    margin-bottom: 4rem;
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

const SelectText = styled.div`
  position: relative;
`;

const SelectElement = styled.div`
  position: relative;
  cursor: pointer;

  margin-bottom: 0.75rem; /* Equivalent to mb-3 in Tailwind */
  display: flex;
  justify-content: space-between;
  padding: 1rem; /* Equivalent to p-2 in Tailwind */
  background-color: var(--color-primary-2);
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--color-grey-0);
  &::before {
    content: "";
    position: absolute;
    width: 4.5rem;
    height: 100%;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 8px 8px 0;
    background-color: var(--color-button-p-1);
    z-index: 9;
  }
  img {
    z-index: 10;
    padding: 0 1rem;
    transform: rotate(${(props) => (props.open ? "90deg" : "0")});
  }
`;

const TechsContainer = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  z-index: 9999;
  left: -1px;
  right: -1px;
  background-color: var(--color-primary-2);
  border-radius: 8px;
  border: 1px solid var(--color-grey-0);
`;

const InputBox = styled.div`
  position: relative;
  input {
    padding-right: 6.5rem;
  }
  .add {
    position: absolute;
    /* transform: translate(-50%, -50%); */
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 8px 8px 0;
    background-color: var(--color-button-p-1);
    border: 1px solid var(--color-grey-0);
    border-left: none;
    cursor: pointer;
    width: 6rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: var(--color-button-p-2);
      color: var(--color-white);
      opacity: 0.8;
    }
  }
`;

const FeaturesList = styled.ul`
  grid-area: 2/2/3/3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    color: var(--color-purple-1);
  }
  li {
    color: inherit;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
  }
  img {
    width: 1.6rem;
    transition: all 0.2s ease-in-out;
    &:last-child {
      cursor: pointer;
      height: 2.4rem;
      width: 2.4rem;
      filter: brightness(0.6);
      &:hover {
        filter: brightness(1);
      }
    }
  }
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

const Textarea = styled.textarea`
  padding: 1rem;
  background-color: var(--color-primary-2);
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-0);
  outline: none;
  height: 15rem;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
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

export default AddProject;
