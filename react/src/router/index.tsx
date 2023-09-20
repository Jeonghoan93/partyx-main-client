import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import EnterprisePage from "src/pages/Enterprise";
import EventDetail from "src/pages/EventDetail";
import EventList from "src/pages/EventList";
import Home from "src/pages/Home";
import MyEvents from "src/pages/MyEvents";
import Favorites from "src/pages/MyFavorites";
import Tickets from "src/pages/Tickets";

const AppRoutes = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/events" element={<EventList />} />
          <Route path="/" element={<Home />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/company" element={<EnterprisePage />} />

          <Route path="/my-tickets" element={<Tickets />} />
          <Route path="/my-favorites" element={<Favorites />} />
          <Route path="/my-events" element={<MyEvents />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default AppRoutes;
