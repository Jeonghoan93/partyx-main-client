import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import FixedFooter from "src/components/footer/FixedFooter";
import FooterMobile from "src/components/footerMobile";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarProfile from "src/pages/Account/Components/NavbarProfile";
import PreferencesModal from "src/pages/Account/Modals/PreferencesModal";
import ProfileEditModal from "src/pages/Account/Modals/ProfileModal";
import SettingsModal from "src/pages/Account/Modals/SettingsModal";
import ModalsProvider from "src/providers/ModalsProvider";

export default function AccountLayout() {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <div className="flex flex-col h-screen">
      <ModalsProvider />

      <NavbarProfile />

      <div style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>

      <SettingsModal />
      <PreferencesModal />
      <ProfileEditModal />

      {isMobile ? <FooterMobile /> : <FixedFooter />}
      <Footer />
    </div>
  );
}
