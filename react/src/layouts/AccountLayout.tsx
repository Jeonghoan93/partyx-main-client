import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import FooterMobile from "src/components/footerMobile";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import ModalsProvider from "src/providers/ModalsProvider";

export default function AccountLayout() {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <div className="py-10">
        <Outlet />
      </div>

      {isMobile && <FooterMobile />}
      <Footer />
    </>
  );
}
