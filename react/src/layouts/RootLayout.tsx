import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/footers/FixedFooter.tsx.tsx";
import MainFooter from "src/components/footers/MainFooter";
import MobileFooter from "src/components/footers/MobileFooter.tsx";
import Navbar from "src/components/navbar/Navbar";
import NavbarMobile from "src/components/navbar/NavbarMobile";
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
      {isMobile ? <MobileFooter /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
