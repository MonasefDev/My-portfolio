import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getProjects } from "../../services/projectsApi";

function DashboardContent({ children }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const user = await loginUser({
  //         username: "user_5",
  //         password: "123456",
  //       });
  //       console.log(user);
  //       if (!user) return;
  //       else {
  //         const data = await getProjects(user.token);
  //         console.log(data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
  overflow: hidden;
  & > div:first-child {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    color: var(--color-white);
    border-bottom: 1px solid var(--color-lines);
  }
  @media only screen and (max-width: 1024px) {
    overflow: auto;
  }
`;
const Container = styled.div`
  overflow: auto;
`;

export default DashboardContent;
