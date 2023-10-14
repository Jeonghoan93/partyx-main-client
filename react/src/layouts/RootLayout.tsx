import { Outlet } from "react-router-dom";
import FixedFooter from "src/Components/Footers/FixedFooter";
import MainFooter from "src/Components/Footers/MainFooter";
import FooterMobile from "src/Components/Footers/MobileFooter";
import Navbar from "src/Components/navbar/Navbar";
import NavbarMobile from "src/Components/navbar/NavbarMobile";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import ModalsProvider from "src/providers/ModalsProvider";

export default function RootLayout() {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      {!isMobile && <Navbar />}
      {isMobile && <NavbarMobile />}

      <div style={{ paddingTop: "150px" }} className="pb-20">
        <Outlet />
      </div>
      {isMobile ? <FooterMobile /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
