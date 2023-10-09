import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import FooterMobile from "src/components/footerMobile";
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

      {isMobile && <FooterMobile />}
      <Footer />
    </>
  );
}
