import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/footer/Footer";
import { useEffect, useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 5.6rem 1fr 5.6rem;
  background-color: var(--color-primary-3);
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-lines);
`;

function AppLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <StyledAppLayout>
      <Navbar isMobile={isMobile} />
      <main>
        <Outlet />
      </main>
      <Footer isMobile={isMobile} />
    </StyledAppLayout>
  );
}

export default AppLayout;
