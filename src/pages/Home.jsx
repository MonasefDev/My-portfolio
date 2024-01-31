import styled from "styled-components";
import CodeSnippet from "../ui/CodeSnippet";
import { snippetHome } from "../data/snippet-Home";

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
    padding: 0;
    text-align: center;
    margin-bottom: 0;
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
      font-size: 2.2rem;
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

  & > div {
    height: 15rem;

    &:nth-child(3) {
      opacity: 1;
    }

    &:nth-child(2),
    &:nth-child(4) {
      opacity: 0.4;
    }

    &:nth-child(1),
    &:nth-child(5) {
      opacity: 0.2;
    }
  }
`;

const StyledSpan = styled.span`
  color: ${({ color }) => color};
`;

const Home = () => {
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
        <CodeSnippetContainer>
          <CodeSnippetWrapper>
            {[...Array(5)].map((_, index) => (
              <CodeSnippet key={index} code={snippetHome} />
            ))}
          </CodeSnippetWrapper>
        </CodeSnippetContainer>
      </HomeLayout>
    </StyledHome>
  );
};

export default Home;
