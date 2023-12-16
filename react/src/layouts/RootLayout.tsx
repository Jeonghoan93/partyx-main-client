import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/Footers/FixedFooter";
import MainFooter from "src/components/Footers/MainFooter";
import MobileFooter from "src/components/Footers/MobileFooter";
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

      <div className="pb-20 pt-[135px]">
        <Outlet />
      </div>
      {isMobile ? <MobileFooter /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
