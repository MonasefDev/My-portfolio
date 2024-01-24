import styled from "styled-components";
import CodeSnippet from "../ui/CodeSnippet";
import { snippet1 } from "../data/snippet";
import { useState } from "react";

const StyledHome = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/images/code-snippet.png) no-repeat;
  background-size: 70%;
  background-position: right;
  backdrop-filter: blur(5px) opacity(0.5);

  @media only screen and (max-width: 1024px) {
    background-size: cover;
    background-position: center;
  }
`;

const HomeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Details = styled.div`
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 2rem;
    text-align: center;
    margin-bottom: 4rem;
  }
`;

const DetailsTitle = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 6rem;

  p {
    font-size: 1.8rem;
    font-weight: 450;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--color-white-2);
  }

  h1 {
    font-size: 6.2rem;
    font-weight: 400;
    letter-spacing: 0em;
    color: var(--color-white-2);

    @media only screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 450;
    color: var(--color-purple-1);

    @media only screen and (max-width: 768px) {
      font-size: 2.4rem;
      color: var(--color-accent-3);
    }
  }
`;

const LinkToGoToGithub = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;

  a {
    font-size: 1.8rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CodeSnippetContainer = styled.div`
  height: 100vh;
  padding-top: 12rem;
  padding-bottom: 12rem;
  width: 50%;
  overflow: scroll;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const CodeSnippetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const SliderItem = styled.div`
  opacity: ${({ opacity }) => opacity};
  flex: 0 0 100%;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 1rem;
`;

const NavigationButton = styled.button`
  background-color: var(--color-accent-3);
  color: var(--color-white-2);
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-accent-4);
  }
`;

const StyledSpan = styled.span`
  color: ${({ color }) => color};
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };

  return (
    <StyledHome>
      <HomeLayout>
        <Details>
          <DetailsTitle>
            <p>Hi all. I am</p>
            <h1>Micheal Weaver</h1>
            <h2>{" > Front-end developer"}</h2>
          </DetailsTitle>

          <LinkToGoToGithub>
            <p>{"// complete the game to continue"}</p>
            <p>{"// you can also see it on my Github page"}</p>

            <div>
              <StyledSpan color="var(--color-purple-1)">const</StyledSpan>{" "}
              <StyledSpan color="var(--color-accent-3)">githubLink</StyledSpan>{" "}
              <StyledSpan color="var(--color-white-2)">=</StyledSpan>{" "}
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noreferrer"
              >
                <StyledSpan
                  style={{
                    wordWrap: "break-word",
                    color: "var(--color-accent-4)",
                  }}
                >
                  {"“https://github.com/example/url”"}
                </StyledSpan>
              </a>
            </div>
          </LinkToGoToGithub>
        </Details>
        <CodeSnippetContainer id="codeSnippetContainer">
          <CodeSnippetWrapper>
            <SliderContainer
              style={{
                transform: `translateY(-${currentSlide * 100}%)`,
              }}
            >
              {[...Array(5)].map((_, index) => (
                <SliderItem
                  key={index}
                  opacity={Math.abs(currentSlide - index) <= 2 ? 0.4 : 0.1}
                >
                  <CodeSnippet key={index} code={snippet1} />
                </SliderItem>
              ))}
            </SliderContainer>
            <NavigationButtons>
              <NavigationButton onClick={handlePrevSlide}>
                Previous
              </NavigationButton>
              <NavigationButton onClick={handleNextSlide}>
                Next
              </NavigationButton>
            </NavigationButtons>
          </CodeSnippetWrapper>
        </CodeSnippetContainer>
      </HomeLayout>
    </StyledHome>
  );
};

export default Home;
