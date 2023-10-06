import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
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

      <div className="pb-20 pt-28">
        <Outlet />
      </div>
      {isMobile && <FooterMobile />}
      <Footer />
    </>
  );
}
