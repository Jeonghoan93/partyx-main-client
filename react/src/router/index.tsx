import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import Enterprise from "src/pages/Enterprise";
import EventDetail from "src/pages/EventDetail";
import EventList from "src/pages/EventList";
import Home from "src/pages/Home";
import Solution from "src/pages/Solution";

const AppRoutes = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/events" element={<EventList searchParams={{}} />} />
          <Route path="/" element={<Home />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/enterprise" element={<Enterprise />} />

          {/* Add your future routes here */}
          {/* Example:
          <Route path="/event" element={<EventPage />} />
        
          */}
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default AppRoutes;
