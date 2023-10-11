import { Outlet, useParams } from "react-router-dom";
import Footer from "src/components/footer";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import FooterEventDetail from "src/pages/EventDetail/Components/FooterEventDetail";
import NavbarEventDetail from "src/pages/EventDetail/Components/NavbarEventDetail";
import ModalsProvider from "src/providers/ModalsProvider";

import { MockedUser } from "src/services/api-examples/user";

export default function EventDetailLayout() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const { eventId } = useParams<{ eventId: string }>();

  const currentUser = MockedUser;

  return (
    <>
      <ModalsProvider />

      <NavbarEventDetail eventId={Number(eventId)} currentUser={currentUser} />

      <div style={{ paddingTop: "75px" }}>
        <Outlet />
      </div>

      {isMobile && <FooterEventDetail />}
      <Footer />
    </>
  );
}
