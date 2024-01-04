import React, { useState } from "react";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";
const StyledInfoItem = styled.div``;
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
    background-color: var(--color-grey-0);
    margin-bottom: 3px;
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
  border-bottom: 1px solid var(--color-lines);
`;

const FolderImg = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
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

function InfoItem({
  info,
  selectedSection,
  setSelectedSection,
  setSelectedItem,
  selectedItem,
}) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(
    isMobile ? selectedSection === info.title : true
  );
  return (
    <StyledInfoItem>
      <Title open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src="/assets/icons/arrow.svg" alt={info.title} />
        {info.title}
      </Title>
      {isOpen && (
        <SectionFolder>
          {info.info.map((item, index) => (
            <FolderImg
              open={item === selectedItem}
              key={item}
              onClick={() => {
                setSelectedSection(info.title);
                setSelectedItem(item);
              }}
            >
              <img src="/assets/icons/chevron.svg" alt={item} />
              <img src={`/assets/icons/folder${index + 1}.svg`} alt={item} />
              <span>{item}</span>
            </FolderImg>
          ))}
        </SectionFolder>
      )}
    </StyledInfoItem>
  );
}

export default InfoItem;
