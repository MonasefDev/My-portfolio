import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <StyledSidebar>
      <Title>Dashboard</Title>
      <List>
        <NavLink to="/dashboard/add-project">
          <li>add Project</li>
        </NavLink>

        <NavLink to="/dashboard/list-projects">
          <li>Project list</li>
        </NavLink>
        <NavLink to="/dashboard/add-skill">
          <li>Add skill</li>
        </NavLink>
      </List>
      <ButtonFloat>
        <Button onClick={() => navigate("/")} variation="default">
          Logout
        </Button>
      </ButtonFloat>
    </StyledSidebar>
  );
}
const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--color-lines);
  @media only screen and (max-width: 1024px) {
    border: none;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  padding: 4rem 0;
  color: var(--color-white);
  opacity: 0.7;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-lines);
  .active {
    background-color: var(--color-grey-0);
    color: var(--color-white);
    border-right: 4px solid var(--color-accent-4);
  }
  @media only screen and (max-width: 1024px) {
    .active {
      border-right: none;
    }
  }
  li {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--color-lines);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    a {
    }
    &:hover {
      background-color: var(--color-grey-0);
    }
  }
`;

const ButtonFloat = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  button {
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export default Sidebar;
