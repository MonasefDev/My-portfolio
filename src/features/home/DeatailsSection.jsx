import React from "react";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";

function DeatailsSection() {
  const isMobile = useIsMobile();
  return (
    <StyledDetails className="hero z-10" data-aos="fade-right">
      <div>
        <StyledSpan>Hi all, I am</StyledSpan>
        <StyledH1>Abdelkarim Monasef</StyledH1>
        <StyledH2>{`>front-end developer`}</StyledH2>
      </div>

      <Info id="info">
        {!isMobile && (
          <>
            <StyledSpan className="action hidden lg:block">
              {"// complete the game to continue"}
            </StyledSpan>
            <StyledSpan className=" hidden lg:block">
              {"// you can also see it on my Github page"}
            </StyledSpan>
          </>
        )}
        <StyledSpan>{"// find my profile on Github:"}</StyledSpan>
        <StyledCode className="code flex flex-wrap space-x-2">
          <Identifier>const</Identifier>
          <VariableName>githubLink</VariableName>
          <Operator>=</Operator>
          <String target="_blank" href="https://github.com/MonasefDev">
            {`https://github.com/MonasefDev`}
          </String>
        </StyledCode>
      </Info>
    </StyledDetails>
  );
}

const StyledDetails = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 55rem;
  margin-left: auto;
  padding: 10rem 0;
  @media only screen and (max-width: 1024px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

const StyledSpan = styled.span`
  line-height: 1;
  font-size: 1.8rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const StyledH1 = styled.h1`
  color: var(--color-white);
  font-size: 5rem;
  padding: 1rem 0;
  font-weight: 300;

  @media only screen and (max-width: 1024px) {
    font-size: 2.6rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 3.2rem;
  color: var(--color-purple-1);

  @media only screen and (max-width: 1024px) {
    font-size: 2.4rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    margin: 0 0.5rem;
  }
`;

const StyledCode = styled.div`
  color: var(--color-white-2);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Identifier = styled.span`
  color: var(--color-purple-1);
`;

const VariableName = styled.span`
  color: var(--color-accent-3);
`;

const Operator = styled.span`
  color: var(--color-white);
`;

const String = styled.a`
  color: var(--color-accent-2);
  text-decoration-line: underline;
  text-underline-offset: 4px;
`;

export default DeatailsSection;
