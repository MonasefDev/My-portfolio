import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useLogout } from "../login/useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { HiArrowRightCircle, HiHome } from "react-icons/hi2";
import useIsMobile from "../../hooks/useIsMobile";

function Sidebar() {
  const { isLoading, logout } = useLogout();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return (
    <StyledSidebar>
      {isMobile && (
        <HomeImg>
          <HiHome onClick={() => navigate("/")} />
          <HiArrowRightCircle onClick={() => logout()} />
        </HomeImg>
      )}
      <Title>Dashboard</Title>
      <List>
        <NavLink to="/dashboard/add-project">
          <li>add Project</li>
        </NavLink>

        <NavLink to="/dashboard/list-projects">
          <li>Project list</li>
        </NavLink>
        <NavLink to="/dashboard/add-technologie">
          <li>Add technologie</li>
        </NavLink>
      </List>
      <ButtonFloat>
        <Button onClick={() => logout()} variation="default">
          {isLoading ? <SpinnerMini width="100%" /> : "Logout"}
        </Button>
        <Button onClick={() => navigate("/")} variation="default">
          Home
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

const HomeImg = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  svg {
    width: 3.5rem;
    height: 3.5rem;
    fill: var(--color-grey-1);
    opacity: 0.7;
    cursor: pointer;
    z-index: 999;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export default Sidebar;
