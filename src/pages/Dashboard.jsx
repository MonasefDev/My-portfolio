import React from "react";
import styled from "styled-components";
import Sidebar from "../features/dashboard/Sidebar";
import DashboardContent from "../features/dashboard/DashboardContent";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-primary-3);
  overflow: hidden;
  border: 1px solid var(--color-lines);
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Sidebar />
      <DashboardContent />
    </StyledDashboard>
  );
}

export default Dashboard;
