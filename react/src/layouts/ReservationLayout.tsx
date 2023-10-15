import { Outlet } from "react-router-dom";
import MobileFooter from "src/components/footers/MobileFooter";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarReservation from "src/pages/Reservation/Components/NavbarReservation";
import ModalsProvider from "src/providers/ModalsProvider";

const ReservationLayout = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />
      <NavbarReservation />

      <div style={{ paddingTop: "75px" }}>
        <Outlet />
      </div>

      {isMobile && <MobileFooter />}
    </>
  );
};

export default ReservationLayout;
