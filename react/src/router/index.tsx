import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HostLayout from "src/layouts/HostLayout";
import PaymentLayout from "src/layouts/PaymentLayout";
import RootLayout from "src/layouts/RootLayout";
import BusinessPlan from "src/pages/BusinessPlan";
import EnterprisePage from "src/pages/Company";
import Careers from "src/pages/Company/Pages/Careers";
import Enterprise from "src/pages/Enterprise";
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
import Profile from "src/pages/User/Profile";
import Tickets from "src/pages/User/Tickets";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* For RootLayout routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* Enterprise */}
          <Route path="enterprise" element={<Enterprise />} />

          {/* Events */}
          <Route path="events" element={<EventList />} />
          <Route path="events/:eventId" element={<EventDetail />} />

          {/* Company */}
          <Route path="careers" element={<Careers />} />
          <Route path="company" element={<EnterprisePage />} />
          <Route path="partner" element={<Partner />} />
          <Route path="business-plan" element={<BusinessPlan />} />

          {/* User */}
          <Route path="profile/:email" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="account/personal-info" element={<PersonalInfo />} />
          <Route path="account/payments" element={<Payments />} />
          <Route path="account/login-security" element={<LoginSecurity />} />
          <Route path="account/taxes" element={<Taxes />} />

          {/* Host */}
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

        {/* For PaymentLayout routes */}
        <Route path="booking-form" element={<PaymentLayout />}>
          <Route index element={<Host />} />
          {/* Add other host specific routes here if any */}
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
