import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/footer/FixedFooter";
import FooterMobile from "src/components/footerMobile";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import PreferencesModal from "src/pages/Account/Modals/PreferencesModal";
import ProfileEditModal from "src/pages/Account/Modals/ProfileModal";
import SettingsModal from "src/pages/Account/Modals/SettingsModal";
import NavbarStandouts from "src/pages/Standouts/Components/NavbarStandouts";
import ModalsProvider from "src/providers/ModalsProvider";

export default function AccountLayout() {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <NavbarStandouts />

      <div style={{ paddingTop: "130px" }}>
        <Outlet />
      </div>

      <SettingsModal />
      <PreferencesModal />
      <ProfileEditModal />

      {isMobile ? <FooterMobile /> : <FixedFooter />}
    </>
  );
}
