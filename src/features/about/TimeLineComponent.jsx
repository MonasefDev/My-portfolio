import React from "react";
import styled from "styled-components";
import TimelineElement from "./TimelineElement";
import { FaUserGraduate } from "react-icons/fa";

const TimeLineComponentWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2px;

  @media (min-width: 1024px) {
    padding-top: 2rem; /* Adjust according to your design */
  }
`;

const TimeLineComponent = ({ element }) => {
  return (
    <TimeLineComponentWrapper>
      <TimelineWrapper>
        {element.map((diplome, index) => (
          <TimelineElement
            key={index}
            date={diplome.date}
            index={index + 1}
            header={diplome.header}
            description={diplome.description}
            image={<FaUserGraduate />}
          />
        ))}
      </TimelineWrapper>
    </TimeLineComponentWrapper>
  );
};

const TimelineWrapper = styled.div`
  position: relative;
  margin-left: 3rem;
  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: #607b96;
    top: 0;
    left: -1.3rem;
    z-index: 1;
    animation: moveline 3s linear forwards;
  }
  .container {
    position: relative;
    animation: movedown 0.5s linear forwards;
    opacity: 0;
    z-index: 2;

    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    &:nth-child(3) {
      animation-delay: 1.5s;
    }
    &:nth-child(4) {
      animation-delay: 2s;
    }
    &:nth-child(5) {
      animation-delay: 2.5s;
    }
    &:nth-child(6) {
      animation-delay: 3s;
    }

    .text-box {
      position: relative;
      padding: 20px 30px;
      background-color: #011221;
      border: 1px solid #1e2d3d;
      border-radius: 10px;
      &::after {
        content: "";
        position: absolute;
        top: 30px;
        left: 0;
        border-radius: 10px 0 10px 0;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: #011221;
        border-left: 1px solid #1e2d3d;
        border-bottom: 1px solid #1e2d3d;
        border-top: 1px solid #011221;
        border-right: 1px solid #011221;
        width: 20px;
        height: 20px;
      }
    }
  }
  .links {
    color: #3c9d93;
    &:hover {
      color: #43d9ad;
    }
  }
  .dot-links {
    margin-left: -15px;
  }
  .autor {
    color: #c0776d;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #faa195;
    }
  }
  .btn-certification {
    font-size: 12px;
    font-weight: 200;
    padding: 5px 20px;
    margin: 5px 0;
    border-radius: 20px;
    color: #fea55f;
    background-color: transparent;
    border: 1px solid #fea55f;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #01080e;
      background-color: #fea55f;
    }
  }

  @media (max-width: 1024px) {
    .container {
      padding-right: 5px !important;
      .text-box {
        padding: 15px !important;
      }
    }
  }

  @keyframes moveline {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  @keyframes movedown {
    0% {
      opacity: 1;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default TimeLineComponent;
