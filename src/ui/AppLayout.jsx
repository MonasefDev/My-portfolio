import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/footer/Footer";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 5.6rem 1fr 5rem;
  background-color: var(--color-primary-3);
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-lines);
  main {
    overflow: scroll;
    @media only screen and (max-width: 1024px) {
      overflow-y: auto;
    }
    & > div {
      @media only screen and (min-width: 1024px) {
        overflow: hidden;
      }
    }
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
