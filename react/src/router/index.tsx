import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HostLayout from "src/layouts/HostLayout";
import RootLayout from "src/layouts/RootLayout";
import EnterprisePage from "src/pages/Company";
import EventDetail from "src/pages/Event/EventDetail";
import EventList from "src/pages/Event/EventList";
import Home from "src/pages/Home";
import Host from "src/pages/Host";
import MyEvents from "src/pages/Host/MyEvents";
import Partner from "src/pages/Partner";
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
      <Routes>
        {/* For RootLayout routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<EventList />} />
          <Route path="events/:eventId" element={<EventDetail />} />
          <Route path="company" element={<EnterprisePage />} />
          <Route path="account" element={<Account />} />
          <Route path="account/personal-info" element={<PersonalInfo />} />
          <Route path="account/payments" element={<Payments />} />
          <Route path="account/login-security" element={<LoginSecurity />} />
          <Route path="account/taxes" element={<Taxes />} />
          <Route path="partner" element={<Partner />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="my-events" element={<MyEvents />} />
        </Route>

        {/* For HostLayout routes */}
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Host />} />
          {/* Add other host specific routes here if any */}
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
