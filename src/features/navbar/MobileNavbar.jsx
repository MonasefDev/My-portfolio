import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import burger from "../../assets/icons/burger.svg";
import burgerClose from "../../assets/icons/burger-close.svg";

const StyledMobileNavbar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid var(--color-lines);
  padding: 0 2rem;
`;
const Img = styled.img`
  height: 1.8rem;
  cursor: pointer;
`;
const Menu = styled.div`
  position: absolute;
  top: 5.7rem;
  left: 1px;
  right: 1px;
  bottom: 5.7rem;
  z-index: 9999;
  /* margin: 2px; */
  background-color: var(--color-primary-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    color: var(--color-white);
    padding: 0 2rem;
    border-bottom: 1px solid var(--color-lines);
  }
`;

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <StyledMobileNavbar>
        <Link onClick={() => setIsMenuOpen(false)} to="/">
          name
        </Link>
        <Img
          src={isMenuOpen ? burgerClose : burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </StyledMobileNavbar>
      {isMenuOpen && (
        <Menu>
          <Link onClick={() => setIsMenuOpen(false)} to="/">
            _hello
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about">
            _about-me
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/projects">
            _projects
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact">
            _contact
          </Link>
        </Menu>
      )}
    </>
  );
}

export default MobileNavbar;
