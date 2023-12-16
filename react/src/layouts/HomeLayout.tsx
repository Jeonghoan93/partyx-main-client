import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/Footers/FixedFooter";
import MainFooter from "src/components/Footers/MainFooter";
import MobileFooter from "src/components/Footers/MobileFooter";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import ModalsProvider from "src/providers/ModalsProvider";
import NavbarHome from "src/pages/Home/Components/NavbarHome";
import AcceptCookiesModal from "src/components/AcceptCookies/AcceptCookiesModal";

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
      {isMobile ? (
        <>
          <AcceptCookiesModal />
          <MobileFooter />
        </>
      ) : (
        <FixedFooter />
      )}
      <MainFooter />
    </>
  );
}
