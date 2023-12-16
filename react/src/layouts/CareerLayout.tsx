import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/Footers/FixedFooter";
import MainFooter from "src/components/Footers/MainFooter";

import MobileFooter from "src/components/Footers/MobileFooter";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarCareer from "src/pages/Career/Components/NavbarCareer";
import ModalsProvider from "src/providers/ModalsProvider";

export default function CareerLayout() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <NavbarCareer />

      <div style={{ paddingTop: "50px" }}>
        <Outlet />
      </div>

      {isMobile ? <MobileFooter /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
