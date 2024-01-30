import styled from "styled-components";
import LoginForm from "./LoginForm";

const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--color-primary-3);
  border: 1px solid var(--color-lines);
  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--color-white);
    opacity: 0.8;
    @media only screen and (max-width: 1024px) {
      font-size: 2rem;
    }
  }
`;

const Logo = styled.img`
  height: 10rem;
  width: 10rem;
  margin-bottom: 2rem;
  opacity: 0.4;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    padding: 2rem;
    border: 1px solid var(--color-lines);
    border-radius: 8px;
    width: fit-content;
  }
`;

function Login() {
  return (
    <StyledLogin>
      <Container>
        <Logo src="/assets/icons/logo.svg" />
        <h3>Log in to your account</h3>
        <LoginForm />
      </Container>
    </StyledLogin>
  );
}

export default Login;
