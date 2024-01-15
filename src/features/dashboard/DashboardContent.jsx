import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function DashboardContent({ children }) {
  // const [path, setPath] = useState(window.location.pathname.split("/").at(-1));
  // console.log(path);
  // useEffect(() => {
  //   setPath(window.location.pathname.split("/").at(-1));
  // }, [children]);
  return (
    <StyledDashboardContent>
      <div />
      <Container>
        <Outlet />
      </Container>
    </StyledDashboardContent>
  );
}

const StyledDashboardContent = styled.div`
  display: grid;
  grid-template-rows: 5.6rem 1fr;
  & > div:first-child {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    color: var(--color-white);
    border-bottom: 1px solid var(--color-lines);
  }
`;
const Container = styled.div``;

export default DashboardContent;
