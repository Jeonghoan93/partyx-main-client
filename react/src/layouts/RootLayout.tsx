import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import FixedFooter from "src/components/footer/FixedFooter";
import FooterMobile from "src/components/footerMobile";
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
      {isMobile ? <FooterMobile /> : <FixedFooter />}
      <Footer />
    </>
  );
}
