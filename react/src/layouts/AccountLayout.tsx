import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import FixedFooter from "src/components/footer/FixedFooter";
import FooterMobile from "src/components/footerMobile";
import useSettingsModal from "src/hooks/useSettingsModal";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarProfile from "src/pages/Account/Components/NavbarProfile";
import SettingsModal from "src/pages/Account/Components/SettingsModal";
import ModalsProvider from "src/providers/ModalsProvider";

export default function AccountLayout() {
  const windowWidth = useWindowWidth();
  const settingsModal = useSettingsModal();

  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <NavbarProfile />

      <div style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>

      <SettingsModal
        isOpen={settingsModal.isOpen}
        onClose={settingsModal.onClose}
      />

      {isMobile ? <FooterMobile /> : <FixedFooter />}
      <Footer />
    </>
  );
}
