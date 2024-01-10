import React, { useState } from "react";
import Highlight from "react-highlight";
import styled from "styled-components";
import { gist } from "../../data/gist-data";
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
      <GistContainer>
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
              <img src="/assets/icons/gist/comments.svg" alt="icon_comments" />
              <span onClick={() => setIsOpen(!isOpen)}>details</span>
            </div>
            <div>
              <img src="/assets/icons/gist/star.svg" alt="icon_stars" />
              <span>{`${gist.comments} stars`}</span>
            </div>
          </DetailsAndStars>
        </HeadInfo>
        <Highlight
          className="snippet-container javascript"
          language="javascript"
        >
          {Object.values(gist.files)[0].content}
        </Highlight>

        {isOpen && (
          <CommentSection>
            {gist.comments !== 0 ? (
              <p id="comment">Comments</p>
            ) : (
              <p>No comments.</p>
            )}
            <img src="../icons/close.svg" alt="" />
          </CommentSection>
        )}
      </GistContainer>
    </>
  );
}

// Styled components
const GistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;
  pre {
    margin: 0;
    overflow: hidden;
    width: 100%;
    max-height: 220px;
  }

  code {
    white-space: pre-wrap;
    max-height: 220px;
    /* width: max-content; */
    overflow: scroll;
  }
  .snippet-container {
    background-color: #011221;
    padding: 5px;
    border-radius: 15px;
    border: 1px solid #1e2d3d;
    font-size: 12px;
    max-height: 240px;
  }
  .snippet-container::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  pre code.hljs {
    display: block;
    overflow: scroll;
    padding: 1.5em;
  }

  code.hljs {
    padding: 3px 5px;
  }

  #comment {
    font-size: 14px;
  }

  #username:hover {
    color: #5e6ef2;
  }

  /* #comment {
    
} */

  .hljs {
    color: #607b96;
    background: #011221;
  }
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    color: #ff7b72;
  }
  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    color: #d2a8ff;
  }
  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-variable {
    color: #79c0ff;
  }
  .hljs-meta .hljs-string,
  .hljs-regexp,
  .hljs-string {
    color: #a5d6ff;
  }
  .hljs-built_in,
  .hljs-symbol {
    color: #ffa657;
  }
  .hljs-code,
  .hljs-comment,
  .hljs-formula {
    color: #8b949e;
  }
  .hljs-name,
  .hljs-quote,
  .hljs-selector-pseudo,
  .hljs-selector-tag {
    color: #7ee787;
  }
  .hljs-subst {
    color: #c9d1d9;
  }
  .hljs-section {
    color: #1f6feb;
    font-weight: 700;
  }
  .hljs-bullet {
    color: #f2cc60;
  }
  .hljs-emphasis {
    color: #c9d1d9;
    font-style: italic;
  }
  .hljs-strong {
    color: #c9d1d9;
    font-weight: 700;
  }
  .hljs-addition {
    color: #aff5b4;
    background-color: #033a16;
  }
  .hljs-deletion {
    color: #ffdcd7;
    background-color: #67060c;
  }
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

const CommentSection = styled.div`
  border-top: 1px solid #1e2d3d;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  font-family: "fira_retina";
  font-size: 0.75rem;
  color: #7f8d9e;

  & > p {
    width: 83.33333%;
  }

  & > img {
    cursor: pointer;
  }
`;

export default CodeSnippetGist;
