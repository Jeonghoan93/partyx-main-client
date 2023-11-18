import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/footers/FixedFooter";
import MainFooter from "src/components/footers/MainFooter";
import MobileFooter from "src/components/footers/MobileFooter.tsx";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import ModalsProvider from "src/providers/ModalsProvider";
import NavbarHome from "src/pages/Home/Components/NavbarHome";

export default function SearchLayout() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <NavbarHome />

      <div className="pt-[70px]">
        <Outlet />
      </div>
      {isMobile ? <MobileFooter /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
