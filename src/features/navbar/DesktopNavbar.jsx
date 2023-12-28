import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDesktopNavbar = styled.header`
  display: grid;
  grid-template-columns: 30rem repeat(3, auto) 1fr auto;
  border-bottom: 1px solid var(--color-lines);
  a {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 100%;
    border-right: 1px solid var(--color-lines);
    position: relative;
    &:hover {
      background-color: var(--color-grey-0);
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 0;
      height: 3px;
      background-color: var(--color-accent-4);
      transition: all 0.2s ease-in-out;
    }
  }
  .nav-link {
    &:last-child {
      border-right: none;
      border-left: 1px solid var(--color-lines);
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
  .active {
    color: var(--color-white);
    background-color: var(--color-grey-0);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--color-accent-4);
    }
  }
`;

function DesktopNavbar() {
  return (
    <StyledDesktopNavbar>
      <Link to="/">name</Link>
      <NavLink className="nav-link" to="/">
        _hello
      </NavLink>
      <NavLink className="nav-link" to="/about">
        _about-me
      </NavLink>
      <NavLink className="nav-link" to="/projects">
        _projects
      </NavLink>
      <div />
      <NavLink className="nav-link" to="/contact">
        _contact
      </NavLink>
    </StyledDesktopNavbar>
  );
}

export default DesktopNavbar;
