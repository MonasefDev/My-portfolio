import styled from "styled-components";
import Button from "../../ui/Button";
import { ValidationError, useForm } from "@formspree/react";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit, reset] = useForm("mnqennyj");
  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state]);
  return (
    <StyledContactForm>
      {!state.succeeded ? (
        <form id="contact-form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label>_name:</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name-input"
              name="user_name"
              placeholder="name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>_email:</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              id="email-input"
              name="user_email"
              placeholder="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>_message:</Label>
            <Textarea
              onChange={(e) => setMessage(e.target.value)}
              id="message-input"
              value={message}
              name="message"
              placeholder="message"
              required
            />
          </FormGroup>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            disabled={state.submitting}
            id="submit-button"
            type="submit"
            variation="default"
          >
            submit-message
          </Button>
        </form>
      ) : (
        <MessageSucc>
          <h3>Thank you! 🤘</h3>
          <p>
            Your message has been accepted. You will recieve answer really soon!
          </p>
          <Button variation="default" onClick={() => reset()}>
            send-new-message
          </Button>
        </MessageSucc>
      )}
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  form {
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    overflow-y: scroll;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.75rem; /* Equivalent to mb-3 in Tailwind */
`;

const Input = styled.input`
  padding: 1rem; /* Equivalent to p-2 in Tailwind */
  background-color: var(--color-primary-2);
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-0);
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  background-color: var(--color-primary-2);
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-0);
  outline: none;
  height: 15rem;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
  }
`;

const MessageSucc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--color-white);
  }
  p {
    text-align: center;
    max-width: 40rem;
  }
`;

export default ContactForm;
