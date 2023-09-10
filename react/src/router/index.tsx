import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import Main from "src/pages/EventList";

const AppRoutes = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Main searchParams={{}} />} />

          {/* Add your future routes here */}
          {/* Example:
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/:eventId" element={<EventDetailPage />} /> 
          */}
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default AppRoutes;
