import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import EnterprisePage from "src/pages/Enterprise";
import EventDetail from "src/pages/Event/EventDetail";
import EventList from "src/pages/Event/EventList";
import Home from "src/pages/Home";
import MyEvents from "src/pages/Host/MyEvents";
import Account from "src/pages/User/Account";
import LoginSecurity from "src/pages/User/Account/Pages/LoginSecurity";
import Payments from "src/pages/User/Account/Pages/Payments";
import PersonalInfo from "src/pages/User/Account/Pages/PersonalInfo";
import Taxes from "src/pages/User/Account/Pages/Taxes";
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

          {/* Account */}
          <Route path="/account" element={<Account />} />
          <Route path="/account/personal-info" element={<PersonalInfo />} />
          <Route path="/account/payments" element={<Payments />} />
          <Route path="/account/login-security" element={<LoginSecurity />} />
          <Route path="/account/taxes" element={<Taxes />} />

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
