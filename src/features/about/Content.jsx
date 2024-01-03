import React from "react";
import styled from "styled-components";
import { userData } from "../../data/user-data";
import CommentedText from "./CommentedText";

function Content({ selectedSection, selectedItem }) {
  console.log(userData[selectedItem]);
  return (
    <StyledContent>
      <Title>
        <div>{selectedSection}</div>
        <img src="/assets/icons/close.svg" alt="close" />
        <div />
      </Title>
      <TitleMobile>
        <span>{`//${selectedSection}`}</span>
        {` / ${selectedItem}`}
      </TitleMobile>
      <SectionContent>
        <div>
          <CommentedText
            text={
              userData?.find((item) => item.title === selectedItem).description
            }
          />
        </div>
        <Scrollbar>
          <div />
        </Scrollbar>
      </SectionContent>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  border-right: 1px solid var(--color-lines);
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid var(--color-lines);
  padding: 0 2rem;
  img {
    padding: 0 1rem 0 3rem;
  }
  & > div:last-child {
    height: 100%;
    border-left: 1px solid var(--color-lines);
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const TitleMobile = styled.div`
  display: none;
  margin: 4rem 2rem 2rem;
  span {
    color: var(--color-white);
  }
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.6rem;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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
