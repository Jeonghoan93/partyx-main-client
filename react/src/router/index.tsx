import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import EnterprisePage from "src/pages/Enterprise";
import EventDetail from "src/pages/Event/EventDetail";
import EventList from "src/pages/Event/EventList";
import Home from "src/pages/Home";
import MyEvents from "src/pages/Host/MyEvents";
import Favorites from "src/pages/User/Favorites";
import Notifications from "src/pages/User/Notifications";
import Tickets from "src/pages/User/Tickets";

const AppRoutes = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/events" element={<EventList />} />
          <Route path="/" element={<Home />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/company" element={<EnterprisePage />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/my-events" element={<MyEvents />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default AppRoutes;
