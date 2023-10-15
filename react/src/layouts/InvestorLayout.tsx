import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/footers/FixedFooter.tsx.tsx";
import MainFooter from "src/components/footers/MainFooter";
import MobileFooter from "src/components/footers/MobileFooter.tsx";
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

      {isMobile ? <MobileFooter /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
