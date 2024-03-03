import React from "react";
import styled from "styled-components";
import UserEducation from "./UserEducation";

const TimelineElementWrapper = styled.div`
  .container {
    padding: 10px;
    @media (min-width: 1024px) {
      padding: 12px;
    }
  }

  .img {
    position: absolute;
    left: -2.3rem;
    top: 3.3rem;
    z-index: 555;
    display: flex;
    height: 25px;
    width: 25px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #011221;
    padding: 2px;
    color: #607b96;
    border: 1px solid #607b96;

    @media only screen and (max-width: 1024px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .text-box {
    display: flex;
    flex-direction: column;
    margin-top: 4px;

    .text-lg {
      margin-right: 4px;
      font-size: 1.25rem;
      color: #ff7b72;
    }

    .text-sm {
      font-size: 0.875rem;
      color: #7ee787;
    }
  }
`;

const TimelineElement = ({ index, image, header, date, description }) => {
  return (
    <TimelineElementWrapper>
      <div className="container">
        <div className="img">{image}</div>
        <div className="text-box">
          <span className="text-lg">{header}</span>
          <span className="text-sm">{date}</span>
          {header === "Frontend Developer" ? (
            <UserEducation />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      </div>
    </TimelineElementWrapper>
  );
};

export default TimelineElement;
