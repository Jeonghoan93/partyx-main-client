import { Outlet } from "react-router-dom";
import FixedFooter from "src/Components/Footers/FixedFooter";
import MainFooter from "src/Components/Footers/MainFooter";
import FooterMobile from "src/Components/Footers/MobileFooter";
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

      {isMobile ? <FooterMobile /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
