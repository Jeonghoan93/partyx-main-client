import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/footers/FixedFooter";
import MobileFooter from "src/components/footers/MobileFooter";

import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarProfile from "src/pages/Account/Components/NavbarAccount";
import PreferencesModal from "src/pages/Account/Modals/PreferencesModal";
import ProfileEditModal from "src/pages/Account/Modals/ProfileModal";
import SettingsModal from "src/pages/Account/Modals/SettingsModal";
import UpcomingPastModal from "src/pages/Account/Pages/Activity/LeftSide/Modals/UpcomingPastModal";
import ModalsProvider from "src/providers/ModalsProvider";

export default function AccountLayout() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <NavbarProfile />

      <div style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>

      <SettingsModal />
      <PreferencesModal />
      <ProfileEditModal />

      <UpcomingPastModal />

      {isMobile ? <MobileFooter /> : <FixedFooter />}
    </>
  );
}
