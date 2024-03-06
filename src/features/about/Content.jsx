import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userData } from "../../data/user-data";
import CommentedText from "./CommentedText";
import Education from "./Education";
import HeaderText from "../../ui/HeaderText";
import HeaderTextMobile from "../../ui/HeaderTextMobile";

function Content({ selectedSection, selectedItem }) {
  const [currentElement, setCurrentElement] = useState(null);
  useEffect(() => {
    switch (selectedItem) {
      case "education":
        setCurrentElement(<Education />);
        break;
      default:
        setCurrentElement(
          <CommentedText
            text={
              userData?.find((item) => item.title === selectedItem).description
            }
          />
        );
    }
  }, [selectedItem]);
  return (
    <StyledContent>
      <HeaderText text={selectedSection} />
      <HeaderTextMobile>
        <span>{`//${selectedSection}`}</span>
        {` / ${selectedItem}`}
      </HeaderTextMobile>
      <SectionContent>
        <Container>{currentElement}</Container>
        <Scrollbar>
          <div />
        </Scrollbar>
      </SectionContent>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: grid;
  grid-template-rows: 4rem calc(100% - 4rem);
  border-right: 1px solid var(--color-lines);
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-right: 0;
    border-bottom: 1px solid var(--color-lines);
    padding-bottom: 2rem;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.6rem;
  grid-template-rows: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Container = styled.div`
  overflow: auto;
`;

const Scrollbar = styled.div`
  height: 100%;
  border-left: 1px solid var(--color-lines);
  padding: 4px;
  & > div {
    width: 100%;
    height: 7px;
    background-color: var(--color-grey-1);
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export default Content;
