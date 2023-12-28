import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

function Navbar({ isMobile }) {
  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

export default Navbar;
