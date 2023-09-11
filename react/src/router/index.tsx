import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import Enterprise from "src/pages/Enterprise";
import EventList from "src/pages/EventList";
import WhyPartyX from "src/pages/WhyPartyx";

const AppRoutes = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<EventList searchParams={{}} />} />
          <Route path="/why" element={<WhyPartyX />} />
          <Route path="/enterprise" element={<Enterprise />} />

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
