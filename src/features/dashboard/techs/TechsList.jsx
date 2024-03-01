import React from "react";
import Table from "../../../ui/Table";
import styled from "styled-components";
import Menus from "../../../ui/Menus";

import TechRow from "./TechRow";
// import { techs } from "../../../data/techs";
import Spinner from "../../../ui/Spinner";
import { useTechs } from "./useTechs";
function TechsList() {
  // const { isLoading, data: techs } = useSelector((state) => state.techs);
  const { isLoading, techs } = useTechs();
  return (
    <StyledTechsList>
      {isLoading ? (
        <Spinner />
      ) : (
        <Menus>
          <Table columns="1fr 2fr 3.2rem">
            <Table.Header>
              <div>icons</div>
              <div>technologie</div>
            </Table.Header>
            <Table.Body
              data={techs}
              render={(tech) => <TechRow key={tech.id} tech={tech} />}
            />
          </Table>
        </Menus>
      )}
    </StyledTechsList>
  );
}

const StyledTechsList = styled.div``;

export default TechsList;
