import React from "react";
import styled, { keyframes } from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";
import DeatailsSection from "./DeatailsSection";
import CodeSnippet from "./CodeSnippet";

function HomeLayout() {
  const isMobile = useIsMobile();
  return (
    <StyledHomeLayout>
      <GredientContainer>
        <BlurryGradientBlue />
        <BlurryGradientGreen />
      </GredientContainer>
      <Grid1>
        <DeatailsSection />
      </Grid1>
      <Grid2>{!isMobile && <CodeSnippet />}</Grid2>
    </StyledHomeLayout>
  );
}

const StyledHomeLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-gap: 2rem;
  padding: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;

  @media only screen and (max-width: 1024px) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const GredientContainer = styled.div`
  position: relative;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  z-index: 10;
  opacity: 0.7;

  animation: ${rotate} 10s linear infinite;

  @media only screen and (max-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

const Grid1 = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  z-index: 11;
`;
const Grid2 = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  z-index: 11;
`;

const BlurryGradientBlue = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, 50%);
  border-radius: 0% 0% 50% 50%;
  filter: blur(70px);
  background: radial-gradient(
    circle at 50% 50%,
    rgba(77, 91, 206, 1),
    rgba(76, 0, 255, 0)
  );
  opacity: 0.5;
  z-index: 10;
`;

const BlurryGradientGreen = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  border-radius: 0% 50% 0% 50%;
  filter: blur(70px);
  background: radial-gradient(
    circle at 50% 50%,
    rgba(67, 217, 173, 1),
    rgba(76, 0, 255, 0)
  );
  opacity: 0.5;
  z-index: 10;
`;

export default HomeLayout;
