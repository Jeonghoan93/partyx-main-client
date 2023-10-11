import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountLayout from "src/layouts/AccountLayout";
import CareerLayout from "src/layouts/CareerLayout";
import HostLayout from "src/layouts/HostLayout";
import PaymentLayout from "src/layouts/PaymentLayout";
import RootLayout from "src/layouts/RootLayout";
import Account from "src/pages/Account";
import LoginSecurity from "src/pages/Account/Pages/LoginSecurity";
import Payments from "src/pages/Account/Pages/Payments";
import PersonalInfo from "src/pages/Account/Pages/PersonalInfo";
import Taxes from "src/pages/Account/Pages/Taxes";
import BusinessPlan from "src/pages/BusinessPlan";
import Career from "src/pages/Career";
import Positions from "src/pages/Career/Pages/Positions";
import EnterprisePage from "src/pages/Company";
import Enterprise from "src/pages/Enterprise";
import EventDetail from "src/pages/EventDetail";
import Home from "src/pages/Home";
import Host from "src/pages/Host";
import MyEvents from "src/pages/Host/MyEvents";
import Partner from "src/pages/Partner";
import Favorites from "src/pages/User/Favorites";
import Messages from "src/pages/User/Messages";
import Notifications from "src/pages/User/Notifications";
import Profile from "src/pages/User/Profile";
import Tickets from "src/pages/User/Tickets";

import EventDetailLayout from "src/layouts/EventDetailLayout";
import EventsList from "src/pages/EventsList";
import ScrollToTop from "src/utils/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* For RootLayout routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* Enterprise */}
          <Route path="enterprise" element={<Enterprise />} />

          {/* Events */}
          <Route path="events" element={<EventsList />} />

          {/* Company */}
          <Route path="company" element={<EnterprisePage />} />
          <Route path="partner" element={<Partner />} />
          <Route path="business-plan" element={<BusinessPlan />} />

          {/* User */}
          <Route path="profile/:email" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* For HostLayout routes */}
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Host />} />
          <Route path="my-events" element={<MyEvents />} />
          {/* Add other host specific routes here if any */}
        </Route>

        {/* For PaymentLayout routes */}
        <Route path="booking-form" element={<PaymentLayout />}>
          <Route index element={<Host />} />
          {/* Add other host specific routes here if any */}
        </Route>

        {/* For Career routes */}
        <Route path="careers" element={<CareerLayout />}>
          <Route index element={<Career />} />
          <Route path="positions" element={<Positions />} />
          {/* Add other host specific routes here if any */}
        </Route>

        {/* For EventDetail routes */}
        <Route path="events/:eventId" element={<EventDetailLayout />}>
          <Route index element={<EventDetail />} />

          {/* Add other host specific routes here if any */}
        </Route>

        {/* For Account routes */}
        <Route path="account" element={<AccountLayout />}>
          <Route index element={<Account />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="payments" element={<Payments />} />
          <Route path="login-security" element={<LoginSecurity />} />
          <Route path="taxes" element={<Taxes />} />

          {/* Add other host specific routes here if any */}
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
