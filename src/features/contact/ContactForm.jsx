import React from "react";

import styled from "styled-components";
import Button from "../../ui/Button";

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

const ContactForm = () => {
  return (
    <StyledContactForm>
      <form id="contact-form">
        <FormGroup>
          <Label>_name:</Label>
          <Input
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
            type="email"
            id="email-input"
            name="user_email"
            placeholder="email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>_message:</Label>
          <Textarea
            id="message-input"
            name="message"
            placeholder="message"
            required
          />
        </FormGroup>
        <Button id="submit-button" type="submit" variation="default">
          submit-message
        </Button>
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
