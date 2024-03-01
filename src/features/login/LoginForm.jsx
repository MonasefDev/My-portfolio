import { useEffect, useState } from "react";
import styled from "styled-components";
import FormRowVertical from "./FormRowVertical";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, login } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="User Name">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button variation="default" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini width="15rem" />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  height: fit-content;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }
  & button {
    width: 100% !important;
    height: 4rem !important;
  }
`;

const Input = styled.input`
  padding: 1rem; /* Equivalent to p-2 in Tailwind */
  background-color: var(--color-primary-2);
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-0);
  outline: none;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
  }
  &::placeholder {
    color: var(--color-grey-1);
    opacity: 0.3;
  }
  &::after {
    content: "${(props) => (props.$error ? props.$error.message : "")}";
    color: red;
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: 12px;
  }
`;

export default LoginForm;
