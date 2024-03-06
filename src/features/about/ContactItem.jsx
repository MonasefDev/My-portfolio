import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";

const StyledContactItem = styled.div``;
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

const FolderImg = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  color: ${(props) =>
    props.open ? "var(--color-white)" : "var(--color-grey-2)"};
  transition: all 0.2s ease-in-out;

  img {
    transition: all 0.2s ease-in-out;
    height: 1.6rem;
    &:first-child {
      transform: rotate(${(props) => (props.open ? "90deg" : "0")});
    }
  }
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(110%);
  }
  100% {
    transform: translateX(-110%);
  }
`;

const Email = styled.div`
  width: 100%;
  overflow: hidden;
  div {
    animation: ${moveLeft} 10s linear infinite;
  }
`;

function ContactItem() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  return (
    <StyledContactItem>
      <Title open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src="/assets/icons/arrow.svg" alt="arrow" />
        contact
      </Title>
      {isOpen && (
        <SectionFolder>
          <FolderImg>
            <img src={`/assets/icons/email.svg`} alt="email" />
            <Email>
              <div>
                <span>monasef.dev@gmail.com</span>
              </div>
            </Email>
          </FolderImg>
          <FolderImg>
            <img src={`/assets/icons/phone.svg`} alt="email" />
            <span>+212 6 33 62 73 00</span>
          </FolderImg>
        </SectionFolder>
      )}
    </StyledContactItem>
  );
}

export default ContactItem;
