import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";

function DashboardContent({ children }) {
  const isMobile = useIsMobile();

  return (
    <StyledDashboardContent>
      {!isMobile && <div />}
      <Container>
        <Outlet />
      </Container>
    </StyledDashboardContent>
  );
}

const StyledDashboardContent = styled.div`
  display: grid;
  grid-template-rows: 5.6rem 1fr;
  overflow: hidden;
  & > div:first-child {
    color: var(--color-white);
    border-bottom: 1px solid var(--color-lines);
  }
  @media only screen and (max-width: 1024px) {
    overflow: auto;
    grid-template-rows: 1fr;
  }
`;
const Container = styled.div`
  overflow: auto;
`;

export default DashboardContent;
