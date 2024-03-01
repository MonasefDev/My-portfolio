import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProjects } from "../dashboard/useProjects";
import { useTechs } from "../dashboard/techs/useTechs";
import Spinner from "../../ui/Spinner";
import FilterTechnologies from "./FilterTechnologies";
import { useNavigate } from "react-router-dom";
import ProjectList from "./ProjectList";
import HeaderText from "../../ui/HeaderText";
import ScrollBar from "../../ui/ScrollBar";
import ModelDetails from "./ModelDetails";

function ProjectsLayout() {
  const { isLoading: isLoadingProjects, projects } = useProjects();
  const { isLoading: isLoadingTechs, techs } = useTechs();
  const isLoading = isLoadingProjects || isLoadingTechs;
  const [checkedValue, setCheckedValue] = useState([]);
  const [filtredProject, setFiltredProject] = useState(projects);
  const [selectedTechText, setSelectedTechText] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setFiltredProject(projects);
  }, [projects]);
  const onFiltred = (event) => {
    const { value, checked } = event.target;
    let checkedArr;
    if (checked) {
      checkedArr = [...checkedValue, value];
    } else {
      checkedArr = checkedValue.filter((element) => element !== value);
    }
    setCheckedValue(checkedArr);
    getFiltredProject(checkedArr);
    setSelectedTechText(
      checkedArr.length === 0 ? "all" : checkedArr.join(", ")
    );
  };

  const getFiltredProject = (checkedArr) => {
    if (checkedArr.length === 0) setFiltredProject(projects);
    else {
      const filtred = projects.filter((project) => {
        const techno = project.technologies.map((tech) => tech.toLowerCase());
        return checkedArr.every((tech) => techno.includes(tech.toLowerCase()));
      });
      setFiltredProject(filtred);
    }
  };

  const handleToggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <StyledProjectLayout>
      {isLoading ? (
        <Spinner />
      ) : (
        <MainContainer>
          <FilterTechnologies technologies={techs} onFiltred={onFiltred} />
          <ProjectContainer>
            <HeaderText text={`${selectedTechText} ;`} />
            <ProjectList
              projects={filtredProject}
              techs={techs}
              onSelectProject={setSelectedProject}
              onToggleModal={handleToggleModal}
            />
          </ProjectContainer>
          <ScrollBar />
          {isModalOpen && (
            <>
              <ModelDetails
                content={selectedProject}
                onCloseModal={handleToggleModal}
              />
            </>
          )}
        </MainContainer>
      )}
    </StyledProjectLayout>
  );
}

const StyledProjectLayout = styled.div`
  height: 100%;
  width: 100%;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
export default ProjectsLayout;
