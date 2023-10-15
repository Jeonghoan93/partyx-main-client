import { Outlet } from "react-router-dom";
import MobileFooter from "src/components/footers/MobileFooter";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarProfile from "src/pages/Profile/Components/NavbarProfile";
import ModalsProvider from "src/providers/ModalsProvider";

const ProfileLayout = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />
      <NavbarProfile />

      <div style={{ paddingTop: "75px" }}>
        <Outlet />
      </div>

      {isMobile && <MobileFooter />}
    </>
  );
};

export default ProfileLayout;
