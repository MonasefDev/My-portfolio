import { useEffect, useState } from "react";
import styled from "styled-components";
import FormRowVertical from "./FormRowVertical";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./userSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("user_5");
  const [password, setPassword] = useState("123456");
  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) return;
    dispatch(login({ username, password }));
  }
  useEffect(() => {
    if (user) navigate("/dashboard", { replace: true });
  }, [user]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="User Name">
        <Input
          type="username"
          id="username"
          // This makes this form better for password managers
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          Log in
          {/* {!isLoading ? "Log in" : <SpinnerMini />} */}
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
