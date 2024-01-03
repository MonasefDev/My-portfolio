import { Link } from "react-router-dom";
import styled from "styled-components";
import githubIcon from "/assets/icons/social/github.svg";
import linkedInIcon from "/assets/icons/social/linkedin.svg";
import facebookIcon from "/assets/icons/social/facebook.svg";
import useIsMobile from "../../hooks/useIsMobile";

const StyledFooter = styled.footer`
  height: 5rem;
  border-top: 1px solid var(--color-lines);
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr auto;
  & > * {
    padding: 0 2rem;
    border-right: 1px solid var(--color-lines);
    display: flex;
    align-items: center;
    height: 100%;
  }
  & > *:last-child {
    border-right: none;
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr repeat(3, auto);
  }
  & a:hover {
    background-color: var(--color-grey-0);
    & img {
      filter: brightness(1);
    }
  }
`;
const Img = styled.img`
  height: 2rem;
  cursor: pointer;
  filter: brightness(0.6);
  @media only screen and (max-width: 1024px) {
    height: 1.8rem;
  }
`;
function Footer() {
  const isMobile = useIsMobile();
  return (
    <StyledFooter>
      <div>find-me in :</div>
      <Link target="_blank" to="https://www.linkedin.com/in/monasef">
        <Img src={linkedInIcon} />
      </Link>
      <Link target="_blank" to="https://www.facebook.com/monasef">
        <Img src={facebookIcon} />
      </Link>
      {!isMobile && <div />}
      <Link target="_blank" to="https://github.com/MonasefDev">
        {!isMobile && <span>@monasefdev</span>}
        <Img src={githubIcon} />
      </Link>
    </StyledFooter>
  );
}

export default Footer;
