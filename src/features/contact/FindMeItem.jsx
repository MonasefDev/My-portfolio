import React, { useState } from "react";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";
const StyledFindMeItem = styled.div`
  border-bottom: ${(props) =>
    props.open ? "1px solid var(--color-lines)" : "none"};
`;
const Title = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;
  color: var(--color-white);
  border-bottom: 1px solid var(--color-lines);
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 3px;
    background-color: var(--color-grey-0);
  }
  img {
    transition: all 0.2s ease-in-out;
    transform: rotate(${(props) => (props.open ? "90deg" : "0")});
  }
`;
const SectionFolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  @media only screen and (max-width: 1024px) {
    border-bottom: 1px solid var(--color-lines);
  }
`;

const FolderImg = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${(props) =>
    props.open ? "var(--color-white)" : "var(--color-grey-2)"};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-white);
  }

  img {
    transition: all 0.2s ease-in-out;
    height: 1.6rem;
    &:first-child {
      transform: rotate(${(props) => (props.open ? "90deg" : "0")});
    }
  }
`;

function FindMeItem() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  return (
    <StyledFindMeItem open={isOpen}>
      <Title open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src="/assets/icons/arrow.svg" alt="arrow" />
        find-me-also-in
      </Title>
      {isOpen && (
        <SectionFolder>
          <FolderImg href="https://www.youtube.com" target="_blank">
            <img src={`/assets/icons/link.svg`} alt="icon-link" />
            <span>YouTube channel</span>
          </FolderImg>
          <FolderImg href="https://www.instagram.com" target="_blank">
            <img src={`/assets/icons/link.svg`} alt="icon-link" />
            <span>Instagram accaunt</span>
          </FolderImg>
        </SectionFolder>
      )}
    </StyledFindMeItem>
  );
}

export default FindMeItem;
