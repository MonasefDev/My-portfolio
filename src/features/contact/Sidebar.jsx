import React from "react";
import styled from "styled-components";
import ContactItem from "./ContactItem";
import useIsMobile from "../../hooks/useIsMobile";
import FindMeItem from "./FindMeItem";

const StyledSidebar = styled.div`
  border-right: 1px solid var(--color-lines);
  width: 100%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    border-right: none;
  }
`;
const Title = styled.div`
  height: 7rem;
  display: flex;
  color: var(--color-white);
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--color-lines);
`;

const StyledInfo = styled.div``;

function Sidebar() {
  const isMobile = useIsMobile();
  return (
    <StyledSidebar>
      {isMobile && <Title>_contact-me</Title>}
      <StyledInfo>
        <ContactItem />
        <FindMeItem />
      </StyledInfo>
    </StyledSidebar>
  );
}

export default Sidebar;
