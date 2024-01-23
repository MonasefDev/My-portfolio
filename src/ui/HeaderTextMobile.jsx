import React from "react";
import styled from "styled-components";

function HeaderTextMobile({ children }) {
  return <StyledHeaderMobile>{children}</StyledHeaderMobile>;
}

const StyledHeaderMobile = styled.div`
  display: none;
  margin: 4rem 2rem 2rem;
  span {
    color: var(--color-white);
  }
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

export default HeaderTextMobile;
