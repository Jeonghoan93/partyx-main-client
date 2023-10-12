import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import FixedFooter from "src/components/footer/FixedFooter";
import FooterMobile from "src/components/footerMobile";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarInvestor from "src/pages/Investor/Components/NavbarInvestor";
import ModalsProvider from "src/providers/ModalsProvider";

export default function CareerLayout() {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <NavbarInvestor />

      <div style={{ paddingTop: "50px" }}>
        <Outlet />
      </div>

      {isMobile ? <FooterMobile /> : <FixedFooter />}
      <Footer />
    </>
  );
}
