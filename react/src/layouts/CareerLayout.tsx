import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/footers/FixedFooter";
import MainFooter from "src/components/footers/MainFooter";
import FooterMobile from "src/components/footers/MobileFooter";
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
