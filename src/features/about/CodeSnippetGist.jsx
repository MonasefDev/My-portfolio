import React, { useState } from "react";
import Highlight from "react-highlight";
import styled from "styled-components";
import { gists } from "../../data/gist-data";
import CodeSnippet from "../../ui/CodeSnippet";
// import "./codeSnippet.css";
function CodeSnippetGist() {
  const [isOpen, setIsOpen] = useState(false);

  function getMonths(date) {
    let now = new Date();
    let gistDate = new Date(date);
    let diff = now.getTime() - gistDate.getTime();
    let days = Math.floor(diff / (1000 * 3600 * 24));
    let months = Math.floor(days / 30);
    return months;
  }

  return (
    <>
      {gists.map((gist, index) => (
        <GistContainer key={index}>
          {/* <!-- head info --> */}
          <HeadInfo>
            <div>
              {/*  <!-- avatar --> */}
              <Avatar src={gist.owner.avatar_url} alt="" />
              {/* <!-- username & gist date info --> */}
              <UserInfo>
                <Username
                  href={`https://github.com/${gist.owner.login}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{gist.owner.login}
                </Username>
                <DateInfo>
                  Created {getMonths(gist.created_at)} months ago
                </DateInfo>
              </UserInfo>
            </div>

            {/* <!-- details and stars --> */}
            <DetailsAndStars>
              <div>
                <img
                  src="/assets/icons/gist/comments.svg"
                  alt="icon_comments"
                />
                <span onClick={() => setIsOpen(!isOpen)}>details</span>
              </div>
              <div>
                <img src="/assets/icons/gist/star.svg" alt="icon_stars" />
                <span>{`${gist.comments} stars`}</span>
              </div>
            </DetailsAndStars>
          </HeadInfo>
          <CodeSnippet code={gist.files[Object.keys(gist.files)[0]].content} />
        </GistContainer>
      ))}
    </>
  );
}

// Styled components

const GistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;
`;

const HeadInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
  }
`;

const Avatar = styled.img`
  margin-right: 1rem;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.a`
  color: #5e6ef2;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  &:hover {
    color: #5e6ef2;
  }
`;

const DateInfo = styled.p`
  font-size: 1.2rem;
`;

const DetailsAndStars = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  font-size: 1.2rem;
  color: #7f8d9e;
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: #fff;
    }

    & > img {
      margin-right: 0.5rem;
      height: 1.8rem;
      width: 1.8rem;
    }
  }
  & > div:last-child {
    @media only screen and (max-width: 1300px) {
      display: none;
    }
  }
`;

export default CodeSnippetGist;
