import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import burger from "/assets/icons/burger.svg";
import burgerClose from "/assets/icons/burger-close.svg";
import { useUser } from "../login/useUser";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const variantsBg = {
  open: {
    clipPath: "circle(1000px at 50% -200px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0px at 50% -200px)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

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
  z-index: 999;
`;
const Background = styled(motion.div)`
  position: absolute;
  top: 5.7rem;
  left: 1px;
  right: 1px;
  bottom: 5.1rem;
  width: 100%;
  background: var(--color-primary-3);
  z-index: 99;
  ul {
    /* margin: 2px; */
    background-color: var(--color-primary-3);
    display: ${(props) => (props.close ? "none" : "flex")};

    flex-direction: column;
    align-items: center;
    li {
      width: 100%;
    }
    a {
      width: 100%;
      height: 5.6rem;
      display: flex;
      align-items: center;
      color: var(--color-white);
      padding: 0 2rem;
      border-bottom: 1px solid var(--color-lines);
    }
  }
`;

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useUser();

  return (
    <>
      <StyledMobileNavbar>
        <Link onClick={() => setIsMenuOpen(false)} to="/">
          abdelkarim-monasef
        </Link>
        <Img
          src={isMenuOpen ? burgerClose : burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </StyledMobileNavbar>
      <Background
        variants={variantsBg}
        animate={isMenuOpen ? "open" : "closed"}
      >
        <motion.ul variants={variants}>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <Link onClick={() => setIsMenuOpen(false)} to="/">
              _hello
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <Link onClick={() => setIsMenuOpen(false)} to="/about">
              _about-me
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <Link onClick={() => setIsMenuOpen(false)} to="/projects">
              _projects
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            {isAuthenticated && (
              <Link onClick={() => setIsMenuOpen(false)} to="/dashboard">
                _dashboard
              </Link>
            )}
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <Link onClick={() => setIsMenuOpen(false)} to="/contact">
              _contact
            </Link>
          </motion.li>
        </motion.ul>
      </Background>
    </>
  );
}

export default MobileNavbar;
